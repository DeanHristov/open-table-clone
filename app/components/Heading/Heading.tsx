"use client";

import { FC } from "react";
import classNames from "classnames";

export interface IHeadingProps {
  title: string;
  secondary?: boolean;
  large?: boolean;
}

const Heading: FC<IHeadingProps> = ({
  title,
  large = false,
  secondary = false,
}) => {
  const defaultStyles = ["text-neutral-8", "font-bold", "leading-6"];
  const styles = classNames(defaultStyles, {
    "text-2xl": !large,
    "text-6xl": large,
  });

  return (
    <div className={`pb-4 ${secondary ? "border-b" : ""} border-gray-300`}>
      <h1 className={styles}>{title}</h1>
    </div>
  );
};

export default Heading;
