export default function Paragraph({ classname, children }) {
  return (
    <p
      className={`text-[15px] leading-[23px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] ${classname}`}
    >
      {children}
    </p>
  );
}