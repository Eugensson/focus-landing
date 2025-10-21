import { BiSolidQuoteLeft } from "react-icons/bi";

import { Testimonial } from "@/types";
interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({
  testimonial: { name, message },
}: TestimonialCardProps) => {
  return (
    <article className="relative px-14 w-115 h-75 flex flex-col justify-center bg-[#0e11354e] rounded-2xl">
      <BiSolidQuoteLeft size={30} className="mb-3 text-accent" />
      <p className="lead mb-5 italic line-clamp-4">{message}</p>
      <p className="text-xl text-right">{name}</p>
    </article>
  );
};
