import React from "react";

const SectionLayout = ({ className, children, ref }) => {
  return (
    <section
      ref={ref}
      className={`md:px-10 py-[60px] md:py-20 xl:px-[200px] px-5 flex flex-col gap-8 2xl:gap-[60px] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
