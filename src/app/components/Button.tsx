import Link from "next/link";
import { buttonProps } from "../types";

export default function Button({ href, child }: buttonProps) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-l from-accentOrange to-orangeTint py-2 px-4 rounded-[10px] font-semibold"
    >
      {child}
    </Link>
  );
}
