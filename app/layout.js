import {Oswald} from "next/font/google";
import "./globals.css"
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Oswald({
  subsets: ["latin"]
})

export const metadata = {
  title: "Gleamify",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
