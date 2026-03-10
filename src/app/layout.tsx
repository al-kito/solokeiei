import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "一人経営戦略",
    template: "%s | 一人経営戦略",
  },
  description: "拡大しないという戦略。安定という名の不自由さからの脱却。",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "一人経営戦略",
    description: "拡大しないという戦略。安定という名の不自由さからの脱却。",
    url: "https://solokeiei.jp",
    siteName: "一人経営戦略",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "一人経営戦略",
    description: "拡大しないという戦略。安定という名の不自由さからの脱却。",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 text-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <header className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.svg"
                alt="一人経営戦略"
                width={36}
                height={36}
                priority
              />
              <span className="text-lg font-semibold text-zinc-900">
                一人経営戦略
              </span>
            </Link>

            <nav className="flex items-center gap-6 text-sm text-zinc-600">
              <Link href="/articles" className="hover:text-zinc-900">
                記事
              </Link>
              <Link href="/why" className="hover:text-zinc-900">
                Why
              </Link>
            </nav>
          </header>

          <main>{children}</main>
        </div>

        <footer className="mt-16 border-t border-zinc-800 bg-zinc-950">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-zinc-100">一人経営戦略 / solokeiei.jp</p>
              <p className="mt-0.5">
                拡大しないという戦略。安定という名の不自由さからの脱却。
              </p>
            </div>

            <div className="text-zinc-500">© 2026 solokeiei.jp</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
