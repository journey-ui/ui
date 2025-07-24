"use client";

import { Typography } from "@/registry/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {

  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return <></>;

  return (
    <div className="w-56 flex-shrink-0 h-full overflow-y-auto py-8 space-y-8">
      <div className="flex flex-col gap-2 mr-16">
        <Typography variant="h3">Guias</Typography>
        <nav>
          <ul>
            <li>
              <Link href="/guias/inicio-rapido">
                <Typography variant="p1">Inicio rápido</Typography>
              </Link>
            </li>
          </ul>   
        </nav>
      </div>

      <div className="flex flex-col gap-2 mr-16">
        <Typography variant="h3">Componentes</Typography>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/componentes/typography">
                <Typography variant="p1">Typography</Typography>
              </Link>
            </li>
            <li>
              <Link href="/componentes/button">
                <Typography variant="p1">Button</Typography>
              </Link>
            </li>
            <li>
              <Link href="/componentes/header">
                <Typography variant="p1">Header</Typography>
              </Link>
            </li>
            
          </ul>   
        </nav>
      </div>
    </div>
  )
}