"use client";

import { FC } from "react";
import classNames from "classnames";

export interface IHeadingProps {
  title: string;
  secondary?: boolean;
}

const Heading: FC<IHeadingProps> = ({ title, secondary }) => {
  const defaultStyles = [
    "text-neutral-8",
    "text-2xl",
    "font-bold",
    "leading-6",
  ];
  const styles = classNames(defaultStyles);

  return (
    <div className={`pb-4 ${secondary ? "border-b" : ""} border-gray-300`}>
      <h1 className={styles}>{title}</h1>
    </div>
  );
};

export default Heading;
