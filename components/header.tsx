import { Logo } from "@/components/logo";
import { ButtonSecondary } from "@/components/button-secondary";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-20 backdrop-blur-2xl bg-black/20">
      <div className="container h-full flex items-center justify-between">
        <Logo />
        <ButtonSecondary btnText="Get Started" />
      </div>
    </header>
  );
};
