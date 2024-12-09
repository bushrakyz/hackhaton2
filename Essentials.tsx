import Image from "next/image"

export default function sixth(){
    return(
        <>
        <div className="m-4">
<p>The Essentials</p>
</div>

<div className="flex justify-evenly flex-wrap gap-5">
<Image src="men.png" alt='icon' height={23} width={33}/>
<Image src="women.png" alt='icon' height={23} width={33}/>
<Image src="kid.png" alt='icon' height={23} width={33}/>
</div>

</>
       
    )
}
