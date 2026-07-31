import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://svenni.dev",
  trailingSlash: "always",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-Bold.ttf"],
            weight: 700,
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
