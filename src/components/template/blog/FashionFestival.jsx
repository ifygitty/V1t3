import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { fashionFestival, recentReleases } from "../../../shared/data/blog";
import ViewWrapper from "@/components/wrappers/ViewWrapper";

const FashionFestival = () => {
  return (
    <div className="py-10 bg-white">
      <ViewWrapper>
        <div className="flex flex-col gap-12">
          {/* Featured Fashion Festival */}
          <div className="w-full">
            <div className="relative group cursor-pointer flex flex-col md:flex-row gap-8 md:h-[246px]">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[246px] md:h-[246px] overflow-hidden">
                <img
                  src={fashionFestival.image}
                  alt={fashionFestival.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between md:h-[246px] md:w-[643px]">
                <div className="text-[14px] leading-[20px] font-semibold font-template-inter text-[#6941C6]">
                  {fashionFestival.author} • {fashionFestival.date}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[28px] md:text-[25px] font-semibold text-[#667085] group-hover:text-template-primary transition-colors xl:text-[32px]">
                    {fashionFestival.title}
                  </h2>
                  <TbArrowUpRight
                    className="text-gray-400 group-hover:text-template-primary transition-colors"
                    size={24}
                  />
                </div>

                <p className="font-template-inter text-[#1A1A1A] text-[16px] leading-[24px]">
                  {fashionFestival.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {fashionFestival.categories.map((category, index) => {
                    // Alternate between blue and red styles
                    const styles = [
                      "bg-[#EEF4FF] text-[#3538CD]", // Blue
                      "bg-[#FEE4E2] text-[#D92D20]", // Red
                    ];
                    return (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer ${
                          styles[index % 2]
                        }`}
                      >
                        {category}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentReleases.map((release, index) => (
              <div key={release.id} className="relative group cursor-pointer">
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="text-[14px] leading-[20px] font-semibold font-template-inter text-[#6941C6]">
                    {release.author} • {release.date}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[20px] font-semibold text-[#667085] group-hover:text-template-primary transition-colors">
                      {release.title}
                    </h3>
                    <TbArrowUpRight
                      className="text-gray-400 group-hover:text-template-primary transition-colors"
                      size={18}
                    />
                  </div>

                  <p className="font-template-inter text-[#1A1A1A] text-[14px] leading-[22px] line-clamp-2">
                    {release.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {release.categories.map((category, idx) => {
                      // Alternate between blue and red styles
                      const styles = [
                        "bg-[#EEF4FF] text-[#3538CD]", // Blue
                        "bg-[#FEE4E2] text-[#D92D20]", // Red
                      ];
                      return (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer ${
                            styles[idx % 2]
                          }`}
                        >
                          {category}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ViewWrapper>
    </div>
  );
};

export default FashionFestival;
