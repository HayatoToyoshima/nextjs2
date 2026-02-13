// layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Fast LP株式会社",
  description: "Next.jsで作成されたシンプルなSPAコーポレートサイト",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
