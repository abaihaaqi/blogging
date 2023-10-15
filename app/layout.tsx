import { Metadata } from "next";
import { Open_Sans, Lora, Fira_Code } from "next/font/google";
import Navbar from "~/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nizar Baihaqi",
  description: "Get to know me by reading my coding journey here.",
};

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const fira_code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${open_sans.variable} ${lora.variable} ${fira_code.variable}`}
    >
      <body>
        <Navbar />
        <main className="max-w-screen-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
