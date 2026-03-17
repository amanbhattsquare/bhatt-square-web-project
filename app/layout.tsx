import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhatt Square Pvt. Ltd. | IT Services & SaaS Solutions",
  description: "Bhatt Square is a leading IT services and SaaS provider specializing in web development, mobile apps, and cloud solutions. We turn ideas into digital reality.",
  keywords: ["IT Services", "SaaS", "Web Development", "Mobile Apps", "Cloud Computing", "Software Company", "India", "Bhatt Square"],
  authors: [{ name: "Bhatt Square Pvt. Ltd." }],
  creator: "Bhatt Square Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhattsquare.com",
    title: "Bhatt Square Pvt. Ltd. - Innovation Delivered",
    description: "Professional IT services and SaaS project provider. Innovative solutions for modern businesses.",
    siteName: "Bhatt Square Pvt. Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhatt Square Pvt. Ltd.",
    description: "Professional IT services and SaaS project provider.",
    creator: "@bhattsquare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
