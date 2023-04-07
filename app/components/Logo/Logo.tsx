import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ILogoProps {
  width?: number;
  href?: string;
}

const Logo: FC<ILogoProps> = ({ width = 200, href = "/" }) => {
  return (
    <div className="m-0 p-0">
      <Link href={href}>
        <Image
          src="/opentable-logo.svg"
          alt="Open table"
          width={width}
          height={width}
        />
      </Link>
    </div>
  );
};

export default Logo;
