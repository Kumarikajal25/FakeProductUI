import React from "react";
import { AnimatedTooltip } from "../../../components/ui/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Sachin Bansal",
    designation: "Flipkart",
    image: "https://www.dailypioneer.com/uploads/2019/story/images/big/sachin-bansal-invests-rs-650-crore-in-ola-2019-02-19.jpg",
  },
  {
    id: 2,
    name: "Mukesh Bansal",
    designation: "Myntra",
    image: "https://www.thefounder.in/wp-content/uploads/2022/03/Mukesh-Bansal-768x480.jpg",
  },
  {
    id: 3,
    name: "Namita Thapar",
    designation: "Emcure Pharmaceuticals",
    image: "https://tse1.mm.bing.net/th?id=OIP.PGuIVB2MGXBEUcZ3bDWLXgHaFj&pid=Api&P=0&h=220"
  },
  {
    id: 4,
    name: "Vineeta Singh",
    designation: "Sugar Cosmetics",
    image:"https://www.nyxtbig.com/wp-content/uploads/2022/05/Vineeta-Singh-CEO-SUGAR-Cosmetics-Biography-Early-Life-Husband-Career-Family-Net-worth-Wiki-more-v1-1.jpg",
  },
  {
    id: 5,
    name: "Peyush Bansal",
    designation: "Lenskart",
    image:"https://ik.imagekit.io/j83rchiauw/A_List_Star/Peyush-Bansal-biography.jpg",
  },
  {
    id: 6,
    name: "Users",
    designation: "Joined",
    image: "https://i.ytimg.com/vi/Cs4tIQGcvVo/maxres2.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-items-start mb-10  ml-0  md:ml-5 first-line:w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
