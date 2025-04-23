import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages"; // 👈 Lägg till denna import

export default defineConfig({
  plugins: [react(), ghPages()], // 👈 Lägg till plugin här
  base: "/todo-game/", // 👈 superviktigt! samma namn som på GitHub
});
