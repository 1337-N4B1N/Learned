// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center text-white min-h-[44vh] bg-[#174c27] gap-2 px-4 sm:px-6 md:px-8 lg:px-0 py-8 ">
//        <div className="font-bold flex flex-wrap text-xl sm:text-3xl md:text-4xl lg:text-5xl gap-2 justify-center items-center text-center mt-4">
//   Buy Me Momo
//   <span>
//     <img
//       className="invertImg w-10 sm:w-14 md:w-16 lg:w-[66px] h-auto mt-2"
//       src="/momo.png"
//       alt=""
//     />
//   </span>
// </div>

//         <p className="text-center text-sm sm:text-base max-w-md mx-auto">
//           A crowdfunding platform for creators. Get funded by your fans and wellwishers. Start now!
//         </p>
//         <div className="flex flex-row gap-6 sm:gap-4 mt-4">
//           <Link href="/login">
//             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto">Start Here</button>
//           </Link>
//           <Link href="/about">
//             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto">Read More</button>
//           </Link>
//         </div>
//       </div>

//       <div className="bg-white h-1 opacity-15"></div>

//       <div className="text-white container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-14">
//           Your Fans can buy you Momo!
//         </h2>
//         <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 justify-around">
//           <div className="item space-y-2 flex flex-col items-center justify-center max-w-xs mx-auto">
//             <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[88px] h-auto" src="man.webp" alt="" />
//             <p className="font-black text-center">Fans want to help</p>
//             <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
//           </div>
//           <div className="item space-y-2 flex flex-col justify-center items-center max-w-xs mx-auto">
//             <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[88px] h-auto" src="coin.jpeg" alt="" />
//             <p className="font-black text-center">Fans want to help</p>
//             <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
//           </div>
//           <div className="item space-y-2 flex flex-col items-center justify-center max-w-xs mx-auto">
//             <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[87px] h-auto" src="group.jpeg" alt="" />
//             <p className="font-black text-center">Fans want to help</p>
//             <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white h-1 opacity-15"></div>

//       <div className="text-white container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-14">
//           Learn More About us
//         </h2> 
//         <div className="w-full max-w-[560px] aspect-video">
//           <iframe 
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YPPUA2c8TmijzBFT" 
//             title="YouTube video player" 
//             frameBorder="0" 
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//             referrerPolicy="strict-origin-when-cross-origin" 
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white min-h-[44vh] bg-[#174c27] gap-2 px-4 sm:px-6 md:px-8 lg:px-0 py-8 ">
       <div className="font-bold flex flex-wrap text-xl sm:text-3xl md:text-4xl lg:text-5xl gap-2 justify-center items-center text-center mt-4">
  Buy Me Momo
  <span>
    <img
      className="invertImg w-10 sm:w-14 md:w-16 lg:w-[66px] h-auto mt-2"
      src="/momo.png"
      alt=""
    />
  </span>
</div>

        <p className="text-center text-sm sm:text-base max-w-md mx-auto">
          A crowdfunding platform for creators. Get funded by your fans and wellwishers. Start now!
        </p>
        <div className="flex flex-row gap-6 sm:gap-4 mt-4">
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto">Read More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-14">
          Your Fans can buy you Momo!
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 justify-around">
          <div className="item space-y-2 flex flex-col items-center justify-center max-w-xs mx-auto">
            <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[88px] h-auto" src="man.webp" alt="" />
            <p className="font-black text-center">Fans want to help</p>
            <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
          </div>
          <div className="item space-y-2 flex flex-col justify-center items-center max-w-xs mx-auto">
            <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[88px] h-auto" src="coin.jpeg" alt="" />
            <p className="font-black text-center">Fans want to help</p>
            <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center max-w-xs mx-auto">
            <img className="bg-slate-400 rounded-full p-0.8 w-20 sm:w-24 lg:w-[87px] h-auto" src="group.jpeg" alt="" />
            <p className="font-black text-center">Fans want to help</p>
            <p className="text-center text-sm sm:text-base">Your fans are availabe for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-14">
          Learn More About us
        </h2> 
        <div className="w-full max-w-[560px] aspect-video">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YPPUA2c8TmijzBFT" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
