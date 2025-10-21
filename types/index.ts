import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Brand = {
  src: StaticImport;
  alt: string;
};

export type Feature = {
  imgSrc: StaticImport;
  title: string;
  description: string;
  highlight: string[];
};

export type Integration = {
  src: StaticImport;
  alt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  message: string;
};
