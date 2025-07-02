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
]