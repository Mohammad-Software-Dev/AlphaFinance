import left from "./left.png";
import rightTop from "./right-top.png";
import rightBottom from "./right-bottom.png";

import blog1 from "./blog_1.png";
import blog2 from "./blog_2.png";
import blog3 from "./blog_3.png";
import blog4 from "./blog_4.png";
import blog5 from "./blog_5.png";
import blog6 from "./blog_6.png";

import male from "./male.png";
import male2 from "./male_2.png";
import male3 from "./male_3.png";
import female from "./female.png";

const map: Record<string, string> = {
  left,
  rightTop,
  rightBottom,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  male,
  male2,
  male3,
  female,

  "left.png": left,
  "right-top.png": rightTop,
  "right-bottom.png": rightBottom,
  "blog_1.png": blog1,
  "blog_2.png": blog2,
  "blog_3.png": blog3,
  "blog_4.png": blog4,
  "blog_5.png": blog5,
  "blog_6.png": blog6,
  "male.png": male,
  "male_2.png": male2,
  "male_3.png": male3,
  "female.png": female,

  "/assets/images/left.png": left,
  "/assets/images/right-top.png": rightTop,
  "/assets/images/right-bottom.png": rightBottom,
  "/assets/images/blog_1.png": blog1,
  "/assets/images/blog_2.png": blog2,
  "/assets/images/blog_3.png": blog3,
  "/assets/images/blog_4.png": blog4,
  "/assets/images/blog_5.png": blog5,
  "/assets/images/blog_6.png": blog6,
  "/assets/images/male.png": male,
  "/assets/images/male_2.png": male2,
  "/assets/images/male_3.png": male3,
  "/assets/images/female.png": female,
};

export function resolveImage(src: string): string {
  if (!src) return src;
  return map[src] ?? map[src.split("/").pop() ?? ""] ?? src;
}
