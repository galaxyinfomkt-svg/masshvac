import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header banner */}
      <section className="relative bg-surface border-b border-gray-200 pt-28 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-accent transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-4xl px-4 py-14 lg:py-20">
        <div className="legal-prose">{children}</div>
      </article>
    </div>
  );
}
