import Link from "next/link";
import { ChevronRight } from "@untitled-ui/icons-react";
import { Typography } from "./typography";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-base font-normal text-grey-4 space-x-1">
      {breadcrumbs.map(({ label, path }, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={index} className="flex items-center space-x-1">
            {index > 0 && (
              <ChevronRight
                height={16}
                aria-label="Separador de breadcrumb"
                className="text-status-info"
              />
            )}

            {isLast ? (
              <Typography className="grey-5 font-semibold">{label}</Typography>
            ) : path ? (
              <Link href={path}>
                <Typography className="grey-4 hover:text-primary/90">{label}</Typography>
              </Link>
            ) : (
              <Typography className="grey-4">{label}</Typography>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export { Breadcrumbs };