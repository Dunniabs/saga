"use client";

import LogoSVG from "@/resources/logo.svg";

interface IProps {
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return <LogoSVG className={className} />;
};

export default Logo;
