import {links} from "./links";

export const mainMenu = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Docs", href: links.docs },
];

export const dappMenu = {
    beta: { name:"Beta App", phone: "Beta", href: links.beta },
    app: { name:"Launch App", phone: "App", href: links.app },
}