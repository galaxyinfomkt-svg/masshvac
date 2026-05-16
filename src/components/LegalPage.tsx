import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <div className="bg-dark-950 text-white min-h-screen">
      {/* Header banner */}
      <section className="relative bg-gradient-to-b from-dark-900 to-dark-950 border-b border-white/5 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-400">
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
