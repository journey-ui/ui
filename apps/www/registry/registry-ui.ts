import { Registry } from "@/scripts/schema";

export const ui: Registry["items"] = [
  {
    name: "typography",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
    files: [
      {
        path: "ui/typography.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
    registryDependencies: ["typography"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    registryDependencies: [],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumbs",
    type: "registry:ui",
    dependencies: ["@untitled-ui/icons-react"],
    registryDependencies: ["typography"],
    files: [
      {
        path: "ui/breadcrumbs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select", "@untitled-ui/icons-react"],
    registryDependencies: ["typography"],
    files: [
      {
        path: "ui/dropdown.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    registryDependencies: ["typography"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  } 
]
