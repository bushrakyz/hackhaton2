import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

// Assuming you have the Frame and Logo images imported correctly

const Header = () => {
  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-primaryColor flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        {/* <Image src={Frame} alt="" width={24} height={24} /> */}
    
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Link href="/">
            {/* <Image src={Logo} alt="Nike Logo" className="md:w-[78px] sm:w-[60px] w-[30px]" /> */}
          </Link>
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <Link href="#">
            <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </Link>
          <Link href="#">
            <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;

      



























// import Image from 'next/image';
// import Link from 'next/link';
// import { SiNike } from "react-icons/si";
// import { FaRegHeart } from "react-icons/fa";
// import { RiShoppingBagLine } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";


// export default function Header() {
//   return (
//     <div className="w-full">
//       <div className="w-full h-36px bg-[#F5F5F5] flex justify-between items-center wrapper cursor-pointer">
//       <SiNike />
//       </div>

//       <div className="w-full h-60px bg-[#ffffff] flex justify-between items-center">
//         <Link href="/">
//           <Image src="/frame.png" alt="logo" width={20} height={30} className="ml-[24px]" />
//         </Link>

//         <ul className="list-none flex justify-center items-center">
//           <li className="mr-4">
//             <Link href="/">New & Featured</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/">Men</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/">Women</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/">Kids</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/">Sale</Link>
//           </li>
//           <li className="mr-4">
//             <strong>SNKRS</strong>
//           </li>
//         </ul>

//         <div className="flex items-center">
//           <div className="relative w-80">
//             <input type="text" placeholder="Search" className="w-full h-[40px] py-2 pl-10 pr-4 border rounded-[25px] bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//             <CiSearch />
//           </div>

//           <div className="flex mr-[30px] items-center">
//           <FaRegHeart />
//           <RiShoppingBagLine />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


































// // import Image from "next/image"
// // import { SiNike } from "react-icons/si";
// // import Link from "next/link";
// // // import NikeLogo1 from"../images/nike logo.png"
// // // import searchIcon from "../images/search.png"
// // // import Heart from "../images/heart.png"
// // // import Cart from "../images/cart.png"


// // export default function header(){
// //     return (
// //     <div>
// //         <div className="w-1440px h-36px bg-[#F5F5F5] flex  justify-between  items-center wrapper cursor-pointer ">
      
// //          </div>
   
// //         <div className="w-1440px h-60px bg-[#ffffff] flex justify-between items-center ">
// //             <Image src="/frame.png" className="ml-[24px]" alt="logo" width={20}  height={30}/>
// //             <ul className="list-none flex justify-center ">
// //                 <li className="mr-4">
// // <Link href= "/">New & Featured </Link>

// // </li>

// //                 <li className="mr-4">
// //                    <Link href="/">Men </Link> 
// //                 </li>

// //                 <li className="mr-4">
// //                     Women
// //                 </li>
// //                 <li className="mr-4">
// //                     Kids 
// //                 </li>
// //                 <li className="mr-4">
// //                     Sale
// //                 </li>
// //                 <li className="mr-4">
// //                 <strong>SNKRS</strong>
// //                 </li>
// //             </ul>
// //             <div className="flex">
// //             <div className="flex items-center justify-center">
// //   <div className="relative w-80">
// //     <input 
// //       type="text"
// //       placeholder="Search" 
// //       className="w-[180px] h-[40px] py-2 pl-10 pr-4 border rounded-[25px] bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500"
// //     />
// //     {/* <Image 
// //       src={searchIcon} 
// //       alt="Search Icon" 
// //       width={20} 
// //       height={20} 
// //       className="absolute left-3 top-1/2 transform -translate-y-1/2" */}
// //     {/* /> */}
// //   </div>
// //   </div>
// // <div className="flex  mr-[30px]">
// // {/* <Image 
// // src ={Heart}
// // alt=""/>
// // <Image 
// // src={Cart}
// // alt=""/> */}
// // </div>
// // </div>
// //         </div>

// //       </div>
// // );
// // };