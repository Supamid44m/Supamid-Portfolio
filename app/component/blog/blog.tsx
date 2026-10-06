import { Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SectionTitle from "../sectionTitle";
import BlogCard from "./blogCard";
import { blogs } from "@/app/data/blog";

export default function Blog() {
  if (blogs.length === 0) {
    return (
      <div>
        <SectionTitle>Blog</SectionTitle>
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <ArticleOutlinedIcon color="disabled" sx={{ fontSize: 48 }} />
          <Typography color="text.secondary">Blog posts coming soon.</Typography>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle>Blog</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.url} data={blog} />
        ))}
      </div>
    </div>
  );
}
