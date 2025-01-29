export default function Label({ classname, children }) {
  return (
    <p
      className={`text-[13px] leading-[17px] md:text-[14px] md:leading-[18px] ${classname}`}
    >
      {children}
    </p>
  );
}