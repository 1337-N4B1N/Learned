import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "FaceBook-Know the faces",
  description: "This is facebok and we can know faces using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Navbar/>
        <div className="container mx-auto min-h-[85vh]">
        {children}

        </div>
        <Footer/>
        
        </body>
    </html>
  );
}
