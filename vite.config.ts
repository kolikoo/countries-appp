import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`; // Use backticks for template literals
  const componentsPath = `${srcPath}/components`; // Use backticks for template literals

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
        "&": componentsPath, // Note: Using '*' as an alias might cause issues
      },
    },
  };
});
