import React from 'react'; 
import Image from 'next/image';

const Grid = () => {
  return (
    <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="w-[270px] h-[350px] ">
        <Image src="/img.png" alt="Image description" height={2107} width={4444} />
        <div className='flex'>
          <div>
          <p>ht</p>
          <p>h</p>
          </div>
        <h1>hhhhhh</h1>

        </div>
        
      </div>



      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-96">
        <Image src="/imgt.png" alt="Image description" height={33} width={44} />
      </div>




      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-96">
        <Image src="/imgth.png" alt="Image description" height={33} width={44} />
      </div>



      






    </div>
  );
};

export default Grid;