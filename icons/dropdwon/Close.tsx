import React from "react";

type Props = {
  width: number;
  height: number;
  bg: string;
};

const Close = ({ width, height, bg }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.415 0.709999L6 5.295L10.585 0.709999L12 2.125L6 8.125L0 2.125L1.415 0.709999Z"
        fill={bg}
      />
    </svg>
  );
};

export default Close;
