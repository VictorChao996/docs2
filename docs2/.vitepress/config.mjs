import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Victor's Doc",
	description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: "Victor's Doc",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Notes", link: "/notes" },
			{ text: "Blog", link: "/blog" }
		],

		sidebar: [
			{
				// text: "Examples",
				// items: [
				// { text: "Markdown Examples", link: "/markdown-examples" },
				// { text: "Runtime API Examples", link: "/api-examples" }
				// ]
				text: "Vitepress",
				collapsed: true,
				items: [
					{ text: "vitepress", link: "/vitepress/notes" },
					{ text: "Markdown Examples", link: "/vitepres/markdown-examples" },
					{ text: "Runtime API Examples", link: "/vitepress/api-examples" }
				]
			}
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/VictorChao996" },
			{ icon: "linkedin", link: "https://www.linkedin.com/in/victorchao996/" }
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024 Victor Zhao"
		},
		search: {
			provider: "local"
		},
		lastUpdated: {
			text: "Updated at",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium"
			}
		},
		editLink: true
	},
	base: "/docs2/",
	srcDir: "src"
});

