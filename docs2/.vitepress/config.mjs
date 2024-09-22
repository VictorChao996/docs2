import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const base = "/docs2/";
//NOTE: https://vitepress-sidebar.cdget.com/ (auto sidebar generator)
const vitepressSidebarOptions = {
	documentRootPath: `${base}src`,
	useTitleFromFileHeading: true,
	excludeFolders: ["Navbar"],
	collapsed: false
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Victor's Doc",
	description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: "Victor's Doc",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Notes", link: "/Navbar/notes" },
			{ text: "Blog", link: "/Navbar/blog" }
		],
		sidebar: generateSidebar(vitepressSidebarOptions),
		// sidebar: [
		// 	{
		// 		// text: "Examples",
		// 		// items: [
		// 		// { text: "Markdown Examples", link: "/markdown-examples" },
		// 		// { text: "Runtime API Examples", link: "/api-examples" }
		// 		// ]
		// 	},
		// 	{
		// 		text: "Vitepress",
		// 		collapsed: true,
		// 		items: [
		// 			{ text: "vitepress", link: "/vitepress/notes" },
		// 			{ text: "Markdown Examples", link: "/vitepress/markdown-extension-examples" },
		// 			{ text: "Runtime API Examples", link: "/vitepress/api-examples" }
		// 		]
		// 	},
		// 	{
		// 		text: "Commands",
		// 		items: [{ text: "git", link: "command/git" }]
		// 	},
		// 	{
		// 		text: "Other",
		// 		items: [{ text: "GitHub-pages", link: "other/Github-Pages" }]
		// 	}
		// ],

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
	base: base,
	srcDir: "src"
});

