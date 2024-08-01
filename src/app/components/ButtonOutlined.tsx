import Link from "next/link";
import { buttonProps } from "../types";

export default function ButtonOutlined({ href, child }: buttonProps) {
  return (
    <Link
      href={href}
      className="border-2 border-accentOrange py-2 px-4 rounded-[10px] font-semibold"
    >
      {child}
    </Link>
  );
}
