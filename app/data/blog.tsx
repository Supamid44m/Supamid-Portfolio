export interface Blog {
  title: string;
  platform: string;
  date?: string;
  description?: string;
  url: string;
}

export const blogs: Blog[] = [
  {
    title: "สรุป Clean Code Chapter:1",
    platform: "Medium",
    description: "สรุปเนื้อหาบทที่ 1 จากหนังสือ Clean Code",
    url: "https://medium.com/@supamid780/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B-clean-code-chapter-1-1f125d22aac9",
  },
];
