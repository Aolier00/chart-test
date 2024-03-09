'use client'
import React, { useEffect, useRef } from "react";

type Props = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const UseClickOutside = ({ setClick }: Props) => {
  const inputRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (event: globalThis.MouseEvent): void => {
      if (
        inputRef.current &&
        !inputRef.current?.contains(event?.target as HTMLDivElement)
      ) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
  return {
    inputRef,
  };
};

export default UseClickOutside;