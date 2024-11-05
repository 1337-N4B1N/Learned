import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import SessionWrapper  from "../components/SessionWrapper";
import Footer from "../components/Footer"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Buy Me Momo-A website for momo lovers",
  description: "This website for learning purpose.",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121329] bg-[radial gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}>
//           <SessionWrapper>

         
//         <Navbar />
//         <div className="min-h-screen text-white bg-[#121329] bg-[radial gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

//           {children}

//         </div>
//         <Footer />
//         </SessionWrapper>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121329] bg-[radial gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}
      >
        <SessionWrapper>
          <Navbar />
          <div
            className="min-h-screen text-white bg-[#121329] bg-[radial gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
            style={{ paddingTop: "var(--navbar-height)" }}
          >
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}