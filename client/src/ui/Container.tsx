import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
  twMerge?: string;
}

const Container = ({ children, className }: Props) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-16 px-2 md:px-5",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
