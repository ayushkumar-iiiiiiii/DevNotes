import { defineConfig } from "vite";

export default defineConfig({
    build:{
        outDir: "Static",
        emptyOutDir: true,
        rollupOptions : {
            input: {
                home: "./index.html",
                signup: "./signup.html",
                login: "./login.html"
            }
        }
    }
});