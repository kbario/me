import solid from "solid-start/vite";
import static from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "/me/",
    plugins: [solid({ adapter: static() })],
  };
});
