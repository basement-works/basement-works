"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrolling;
