import Image from "next/image";
import Topheader from "@/src/components/Layout/Topheader";
import Header from "@/src/components/Layout/Header"





import Hero from "@/src/components/Widgets/Hero"
 
import Herosection from "@/src/components/Widgets/Herosection"

// import My from "@/src/components/Widgets/My"

import Third from "@/src/components/Widgets/Third"
import Fourth from "@/src/components/Widgets/Fourth"












export default function Home(){
  return(
    <div>
      <Topheader/>
       <Header/> 

       <Hero/>
       <Herosection/>
       {/* <My/> */}
       <Third/>
       <Fourth/>
       
       


    </div>
  )
}