import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logo" width={148} height={22} />
    </Link>
  );
};
