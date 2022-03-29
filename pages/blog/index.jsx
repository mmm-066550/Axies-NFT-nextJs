import React from "react";
import BlogComponent from "../../components/blog-component";

export default function BlogPage() {
  return (
    <div className="blog_page py-5">
      <div className="container py-4">
        <div className="row">
          {[...Array(6)].map((_, i) => (
            <BlogComponent key={i} id={i + 1} />
          ))}
          {[...Array(6)].map((_, i) => (
            <BlogComponent key={i} id={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
