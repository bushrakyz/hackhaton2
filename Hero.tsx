import Image from "next/image"
export default function Hero(){
    return(
        <>
        <div className="flex justify-center bg-[#F5F5F5] wrapper">
<div className="items-center">
    <h1 className="text-[15px] font-medium">Hello Nike App</h1>
    
    <span className="flex">Download the app to access everything.<p className="underline underline-offset-4 decoration-black-500">Get Your Great</p></span>
</div>

</div>

        <div className="wrapper">
            <Image src="/shoe.png" alt="" height={700} width={1334}/>
        </div>
        
        
        </>
    )
}