import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="py-24 bg-[#10112f]">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-12">
          <div className="flex-1">
            <Socials />
          </div>
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          <p className="flex-1 flex justify-end font-light">
            &copy; 2025 Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
