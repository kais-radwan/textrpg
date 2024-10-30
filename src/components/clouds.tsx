"use client";

import "@/app/clouds.css";

interface Props {
    rotate?: boolean;
}

export function Clouds({ rotate }: Props) {
  return (
    <div className={`clouds ${rotate ? "rotate-[180deg]" : ""} opacity-40 z-10 blur-sm`}>
      <div className="clouds-1"></div>
      <div className="clouds-2"></div>
      <div className="clouds-3"></div>
    </div>
  );
}
