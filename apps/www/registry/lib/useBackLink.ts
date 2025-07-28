import { usePathname } from "next/navigation";

export const useBacklink = (skip = 1) => {
  const pathname = usePathname();
  const backLink = pathname.split("/").slice(0, -skip).join("/");
  return backLink;
};
