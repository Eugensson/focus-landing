interface ButtonTertiaryProps {
  btnText: string;
}

export const ButtonTertiary = ({ btnText }: ButtonTertiaryProps) => {
  return (
    <button
      type="button"
      className="relative px-6 py-4.5 min-w-46 inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl cursor-pointer bg-[#0e1135] hover:bg-[#151a41] text-white uppercase tracking-[1px] text-sm"
    >
      {btnText}
    </button>
  );
};
