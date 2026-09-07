import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://svenni.dev",
  trailingSlash: "always",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["ui-monospace", "SFMono-Regular", "monospace"],
      display: "swap",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono[wght].woff2"],
            weight: "100 800",
            style: "normal",
          },
        ],
      },
    },
  ],
  markdown: {
    shikiConfig: {
      theme: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-macchiato'
      }
    }
  }
});
