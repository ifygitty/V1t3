import React from 'react';

const HeroSection = () => {
  return (
    <section className=" bg-[#F6E6D9] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10  py-10">
        <div className="z-10">
          <h1 className="text-[40px] leading-11 max-sm:leading-8  font-semibold text-[#4B2C2C]  font-template-lora max-md:text-center max-sm:text-[30px]">
            Where Timeless Fragrance <br /> Meets Modern Style
          </h1>
          <p className="mt-3 text-[#6B4F4F] text-sm md:text-base md:max-w-md max-md:text-center ">
            Lorem ipsum turpis euismod pellentesque in  libero augue tempus aliquet ullamcorper fames mauris posuere malesuada amet.
          </p>
          <div className='flex justify-center'>
            <button className=" max-md:text-center mt-6 inline-flex items-center gap-8 border-b border-[#4B2C2C] text-[#4B2C2C] font-medium hover:gap-3 transition-all duration-300 pb-4">
            View All Collections →
          </button>
          </div>
          
          
        </div>

        <div className="h-[465px] w-[555px] max-md:w-full max-md:h-[326px] max-[1205px]:w-[450px] max-[1205px]:h-[400px]  max-[985px]:w-[400px] max-[985px]:h-[350px] max-[854px]:w-[350px] max-[854px]:h-[300px]">
          <img
            src="/images/banner/image3.jpg"
            alt="Perfume Bottle"
            className=" object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
