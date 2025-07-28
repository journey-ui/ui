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
    name: "header",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
    registryDependencies: [],
    files: [
      {
        path: "ui/header.tsx",
        type: "registry:ui",
      },
    ],
  },
]
