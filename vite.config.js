import { defineConfig } from "vite";

export default defineConfig({
    build:{
        outDir: "Static",
        emptyOutDir: true,
        rollupOptions : {
            input: {
                home: "./scr_html/index.html",
                signup: "./scr_html/signup.html",
                login: "./scr_html/login.html",
                notes: "./scr_html/notes.html",
                learnmore: "./scr_html/learnmore.html",
                about: "./scr_html/about.html",
                contact: "./scr_html/contact.html",
                terms: "./scr_html/terms.html",
                privacy: "./scr_html/privacy.html"
            }
        }
    }
});