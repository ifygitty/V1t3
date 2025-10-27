import React from "react";

import { TbArrowUpRight } from "react-icons/tb";

import ViewWrapper from "@/components/wrappers/ViewWrapper";
import blogPosts from "@/shared/data/blog";

const RecentBlogPosts = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="py-7">
      <ViewWrapper>
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <div className="w-full flex justify-between items-center max-md:flex-col max-md:text-center max-md:justify-center">
            <div className="flex gap-x-2">
              <div className="flex flex-col w-fit">
                <h3 className="text-[25.5px] font-template-primary font-[600]">
                  Recent blog posts
                </h3>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Post - Large Card */}
            {featuredPost && (
              <div className="">
                <div className="relative group cursor-pointer">
                  <div className="relative w-full h-[228px] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="text-[14px] leading-[20px] font-semibold font-template-inter text-[#6941C6]">
                      {featuredPost.author} • {featuredPost.date}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[24px] font-semibold text-[#1A1A1A] group-hover:text-template-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <TbArrowUpRight
                        className="text-gray-400 group-hover:text-template-primary transition-colors"
                        size={20}
                      />
                    </div>

                    <p className="font-template-inter text-[#1A1A1A] text-[16px] leading-[24px]">
                      {featuredPost.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => {
                        const colorClasses = [
                          "bg-[#F9F5FF] text-[#6941C6]", // Purple - existing
                          "bg-[#EEF4FF] text-[#3538CD]", // Blue
                          "bg-[#FDF2FA] text-[#C11574]", // Pink
                        ];
                        return (
                          <span
                            key={index}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              colorClasses[index % 3]
                            }`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Posts - Smaller Cards */}
            <div className="space-y-6 ">
              {otherPosts.map((post) => (
                <div key={post.id} className="relative flex justify-between gap-2 group cursor-pointer max-md:flex-col">
                  <div className="relative w-[264px] h-[200px] max-md:w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-3 flex flex-col justify-between w-[264px] max-md:w-full">
                    <div className="text-xs font-medium text-[#6941C6]">
                      {post.author} • {post.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-template-primary transition-colors">
                        {post.title}
                      </h4>
                      <TbArrowUpRight
                        className="text-gray-400 group-hover:text-template-primary transition-colors"
                        size={16}
                      />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => {
                        const colorClasses = [
                          
                          "bg-[#EEF4FF] text-[#6941C6]", // Purple
                          "bg-[#FDF2FA] text-[#C11574]", // Blue
                          "bg-[#FDF2FA] text-[#C11574]", // Pink
                        ];
                        // const bgClasses = [
                        //   #EEF4FF
                        //   "bg-[#F9F5FF] text-[#6941C6]", // Purple
                        //   "bg-[#EEF4FF] text-[#3538CD]", // Blue
                        //   "bg-[#FDF2FA] text-[#C11574]", // Pink
                        // ];

                        return (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              colorClasses[index % 3]
                            }`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ViewWrapper>
    </div>
  );
};

export default RecentBlogPosts;
