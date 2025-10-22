import Link from "next/link";

import { socialsData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-8">
      {socialsData.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} link`}
          >
            <Icon
              size={24}
              className="text-[#6b6bb3] hover:text-white transition-colors duration-300"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
