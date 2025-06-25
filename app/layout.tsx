import type { Metadata } from "next";
import { ContextProvider } from "@/app/components/contexts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clark Le - Portfolio",
  description: "Clark Le's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
            {children}
      </ContextProvider>
      </body>
    </html>
  );
}
