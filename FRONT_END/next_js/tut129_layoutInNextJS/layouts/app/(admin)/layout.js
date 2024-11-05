import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Admin-Facebook",
  description: " Facebook is money money money coz I am admin.",
};

export default function AdminLayou({ children }) {
  return (
    <>
    <span>Admin navbar</span>
    {children}
    </>
  );
}
