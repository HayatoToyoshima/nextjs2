// layout.tsx
import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Fast LP",
  description: "Next.jsで作成された高速な静的ランディングページ",
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
