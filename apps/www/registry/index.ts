import { Registry } from "@/scripts/schema"

import { lib } from "@/registry/registry-lib"
import { ui } from "@/registry/registry-ui"

export const registry: Registry = {
  name: "journey-ui",
  homepage: "https://journey-ui.com",
  items: [
    ...lib,
    ...ui,
    {
      name: "postcss-config",
      type: "registry:init",
      files: [
        {   
          path: "postcss.config.mjs",
          type: "registry:init",
        },
      ],
    },
    {
      name: "global-css",
      type: "registry:init",
      files: [
        {
          path: "globals.css",
          type: "registry:init"
        },
      ],
    },
  ],
}

