import ViewWrapper from '@/components/wrappers/ViewWrapper'
import React from 'react'
import BannerText from '../ui/BannerText'
import Banner3form from '../ui/Banner3form'

const Banner3 = () => {
  return (
    <div>
      <div className="h-[450px] bg-[url('/images/banner/image4.jpg')] bg-cover bg-center pl-20 pt-30 hidden md:block">
        {/* <img src="/images/banner/image4.jpg" alt="" className='w-full h-full object-cover'/>
        import React from "react"; */}
            <Banner3form />
            </div>
            <div className="h-[360px] bg-[url('/images/banner/image5.jpg')] bg-cover bg-center   flex  md:hidden">
              <ViewWrapper classname={"flex pb-1"}>
                <Banner3form className={"self-end w-full"}/>
              </ViewWrapper>
            </div>
            
    </div>
    
  )
}

export default Banner3