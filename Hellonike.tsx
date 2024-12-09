import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center bg-[#F5F5F5] wrapper">
        <div className="items-center text-center">
          <h1 className="text-[15px] font-medium">Hello Nike App</h1>
          
          <span className="flex">
            Download the app to access everything.
            <span className="underline underline-offset-4 decoration-black">Get Your Great</span>
          </span>
        </div>
      </div>

      {/* Ensure "shoe.png" is in the "public" folder */}
      <div className="wrapper">
        <Image 
          src="/shoe.png" // Make sure the image is inside the public folder
          alt="Nike shoe image"
          height={700}
          width={1334}
        />
      </div>
    </>
  );
}
