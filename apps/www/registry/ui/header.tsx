"use client";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Breadcrumbs, { Breadcrumb } from "./breadcrumbs";

export interface BreadcrumbsProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<Breadcrumb>;
}

const Header = ({ title, breadcrumbs, description }: BreadcrumbsProps) => {
  return (
    <div className={cn("relative bg-grey-2 overflow-hidden pl-18 h-[200px]")}>
      <div
        className={cn(
          "absolute bg-contain bg-no-repeat bg-right ml-auto container inset-0 h-[200px] -top-[18px]"
        )}
      >
        <Image
          src="/r/ui/HeaderImg.svg"
          width={262}
          height={258}
          alt="Header background"
          className="absolute inset-0 bg-contain bg-no-repeat bg-right mr-14 ml-auto right-[24px] -top-[18px] "
        />
      </div>
      <title>{title}</title>

      <div
        className={cn("container relative z-10 flex justify-between")}
        style={{
          paddingTop: breadcrumbs ? "48px" : "66px",
        }}
      >
        <div className="space-y-2 max-w-[800px]">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          )}
          <h1
            className={cn(
              "font-nunito text-3xl font-extrabold",
              "data-[loading=true]:text-grey-3 data-[loading=true]:bg-grey-3",
              "data-[loading=true]:animate-pulse data-[loading=true]:rounded-sm",
              "data-[loading=true]:w-[45%] data-[loading=true]:h-12"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "font-semibold text-base text-grey-4 max-w-[545px]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
