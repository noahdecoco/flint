const title: string = "flint";
const subtitle: string = "A firestarter for webapps";

const h1: HTMLElement = document.createElement("h1");
h1.innerHTML = title;

const p: HTMLElement = document.createElement("p");
p.innerHTML = subtitle;

document.body.appendChild(h1);
document.body.appendChild(p);
