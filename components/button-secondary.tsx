interface ButtonSecondaryProps {
  btnText: string;
}

export const ButtonSecondary = ({ btnText }: ButtonSecondaryProps) => {
  return (
    <button
      type="button"
      className="relative px-6 py-3.75 min-w-40 inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl cursor-pointer group"
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-accent via-accent-secondary to-accent" />
      <span className="absolute bottom-0 right-0 mb-32 mr-4 block size-64 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#cb52ff] rounded-full opacity-30 group-hover:rotate-90 ease" />
      <span className="relative text-sm text-white tracking-[1px] uppercase">
        {btnText}
      </span>
    </button>
  );
};
