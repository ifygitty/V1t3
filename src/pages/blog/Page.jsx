import FashionFestival from "@/components/template/blog/FashionFestival";
import Breadcrumb from "../../components/globalUIs/Breadcrumb";

import { TemplateBannerWithImage } from "@/components/template/ui";

import RecentBlogPosts from "@/components/template/blog/RecentBlogPosts";
import ViewWrapper from "@/components/wrappers/ViewWrapper";

const BlogPage = () => {
  return (
    <div className="w-full">
      {/* Hero section styled like Shop page */}
      <TemplateBannerWithImage title="Blog" pathname_2="Blog" path_2="/about" />

      {/* Recent Blog Posts Section */}
      <RecentBlogPosts />
      {/* Fashion Festival Section */}
      <FashionFestival />
    </div>
  );
};

export default BlogPage;
