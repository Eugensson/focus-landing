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
