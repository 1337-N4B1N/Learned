import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 my-5 bg-slate-400 relative">
      <Image src="https://thumbs.dreamstime.com/b/black-white-portrait-young-man-hoodie-close-up-142157826.jpg"
        alt=""
        srcset=""
        className="mx-auto object-cover"
        fill={true} />
      {/* it maintains aspect ratio  */}

      {/* <img src="https://thumbs.dreamstime.com/b/black-white-portrait-young-man-hoodie-close-up-142157826.jpg" alt="" srcset=""className="mx-auto" /> 
    //this is traditional method..   */}
    </div>
  );
}
