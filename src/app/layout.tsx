import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Công Ty TNHH MTV Dịch Vụ Hoàng Anh Tú",
  description: "Đơn vị hàng đầu chuyên cung cấp suất ăn công nghiệp cho các doanh nghiệp",
  icons: '/logo.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
