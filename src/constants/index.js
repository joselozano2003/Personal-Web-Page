import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	nodejs,
	git,
	python,
	java,
	mysql,
	next,
	c,
	postgres,
	sql,
	django,
	tailwind,
	firebase,
	svelte,
} from "../assets";

const projects = [
    {
        title: "WorkStaks",
        description: "A platform to manage team projects",
        url: "https://work-staks.vercel.app",
        repo: "https://github.com/joselozano2003/WorkStaks",
        tech: [
            next, tailwind
        ]
    },
    {
        title: "Link-Shelf",
        description: "Share projects and important links to the world",
        url: "https://link-shelf.vercel.app/",
        repo: "https://github.com/joselozano2003/linktree-clone",
        tech: [
            svelte, firebase
        ]
    },
    {
        title: "Image Generator",
        description: "Use OpenAI's API to generate images from text",
        url: null,
        repo: "https://github.com/joselozano2003/Image-Generator",
        tech: [
            javascript, nodejs
        ]
    },
    {
        title: "Toolbox",
        description: "Set of tools to help developer's productivity",
        url: "https://toolbox-vert.vercel.app",
        repo: "https://github.com/joselozano2003/Toolbox",
        tech: [
            reactjs, typescript
        ]
    },
    {
      title: "Da Blog.",
      description: "Blog to share my journey becoming a developer",
      url: "https://jose-da-blog.vercel.app/home",
      repo: "https://github.com/joselozano2003/Blog-App",
      tech: [
          next, postgres
      ]
  },
]

const languages = [
    {
      	name: "java",
      	icon: java,
    },
    {
		name: "HTML 5",
		icon: html,
    },
    {
		name: "CSS 3",
		icon: css,
    },
    {
		name: "JavaScript",
		icon: javascript,
    },
    {
		name: "TypeScript",
		icon: typescript,
    },
    {
		name: "python",
		icon: python,
    }, 
  ]
  
  
const technologies = [
    {
		name: "next",
		icon: next,
    },
    {
		name: "django",
		icon: django,
    },
    {
		name: "React JS",
		icon: reactjs,
    },
    {
		name: "Node JS",
		icon: nodejs,
    },
    {
		name: "Svelte",
		icon: svelte,
    },
    {
		name: "Tailwind CSS",
		icon: tailwind,
    },
    {
		name: "MySQL",
		icon: mysql,
    },
    {
		name: "PostgreSQL",
		icon: postgres,
    },
    {
		name: "Firebase",
		icon: firebase,	
    },
    {
		name: "git",
		icon: git,
    },
];

export { languages, technologies, projects};
  