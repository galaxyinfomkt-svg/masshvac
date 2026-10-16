import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Tiny markdown renderer for the site's own content strings (services, cities,
 * blog). Returns React nodes — no dangerouslySetInnerHTML.
 *
 * Supports: "## " / "### " headings, "- " bullet lists (also when the list
 * starts right after a paragraph line, without a blank line), "1. " numbered
 * lists, | tables |, **bold**, [text](url) links, and paragraphs. Replaces four hand-rolled
 * parsers that leaked literal "**" and "- " into rendered pages.
 *
 * Heading levels are normalised so the content never skips a level after the
 * page H1: the shallowest heading found becomes <h2>.
 */
export function renderMarkdown(src: string): ReactNode[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const levels = lines.map((l) => /^(#{2,4})\s/.exec(l)?.[1].length).filter((n): n is number => !!n);
  const shift = levels.length ? Math.min(...levels) - 2 : 0;

  const out: ReactNode[] = [];
  let para: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let table: string[][] | null = null;
  const key = () => out.length;

  const flushPara = () => {
    if (para.length) out.push(<p key={key()}>{inline(para.join(" "))}</p>);
    para = [];
  };
  const flushTable = () => {
    if (!table) return;
    const [head, ...body] = table;
    out.push(
      <div key={key()} className="md-table">
        <table>
          <thead>
            <tr>{head.map((c, i) => <th key={i} scope="col">{inline(c)}</th>)}</tr>
          </thead>
          <tbody>
            {body.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row">{inline(c)}</th> : <td key={ci}>{inline(c)}</td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    table = null;
  };
  const flushList = () => {
    if (!list) return;
    const items = list.items.map((it, i) => <li key={i}>{inline(it)}</li>);
    out.push(list.ordered ? <ol key={key()}>{items}</ol> : <ul key={key()}>{items}</ul>);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("|")) {
      flushPara();
      flushList();
      if (/^\|[\s:|-]+\|$/.test(line)) continue; // separator row
      const cells = line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      (table ??= []).push(cells);
      continue;
    }
    flushTable();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    const h = /^(#{2,4})\s+(.*)$/.exec(line);
    if (h) {
      flushPara();
      flushList();
      const level = Math.min(Math.max(h[1].length - shift, 2), 4);
      const Tag = (`h${level}`) as "h2" | "h3" | "h4";
      out.push(<Tag key={key()}>{inline(h[2])}</Tag>);
      continue;
    }
    const ul = /^[-*]\s+(.*)$/.exec(line);
    const ol = /^\d+[.)]\s+(.*)$/.exec(line);
    if (ul || ol) {
      flushPara();
      const ordered = !!ol;
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { ordered, items: [] };
      }
      list.items.push((ul || ol)![1]);
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  flushTable();
  return out;
}

/** **bold** and [text](url) inside a line. */
function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={parts.length}>{m[1]}</strong>);
    } else {
      const href = m[3];
      parts.push(
        href.startsWith("/") ? (
          <Link key={parts.length} href={href}>{m[2]}</Link>
        ) : (
          <a key={parts.length} href={href} target="_blank" rel="noopener noreferrer">{m[2]}</a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
