import React from 'react';
import midimage from './download.jpg';

function Banner() {
  return (
    <div className='max-w-screen-xl container mx-0 my-2 flex flex-col md:flex-row'>
      <div className='w-full bg-zinc-300 text-left md:w-1/2'> 
        <img src={midimage} className='w-full h-50' alt="Banner" />     
      </div>
      <div className='w-full bg-gray-600 text-left md:w-1/2'>
        <h1 className='text-3xl text-center text-wrap text-yellow-700'>
          Mid Left <br/>
          jghfuyjhbnjug
          hjhhhhhh <br/>
          myughasudyuAHDjhZ
          Y&dgxhizdxu<br/>
          zdjmdcusjdfmishrfjn<br/>
          mzskjf8uxjdk,fidxhn<br/>
        </h1>
      </div>
    </div>
  );
}

export default Banner;