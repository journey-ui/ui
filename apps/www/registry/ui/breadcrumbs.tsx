import { ChevronRight } from "@untitled-ui/icons-react";
import Link from "next/link";

export interface Breadcrumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-base font-normal text-grey-4 space-x-1">
      {breadcrumbs.map(({ label, path }, index) => {
        const isFirst = index === 0;
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

            {isFirst && path ? (
              <Link
                href={path}
                className="text-grey-4 font-medium hover:text-primary/90"
              >
                {label}
              </Link>
            ) : isLast ? (
              <span className="font-bold text-grey-5">{label}</span>
            ) : (
              <span className="font-medium text-grey-4">{label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
