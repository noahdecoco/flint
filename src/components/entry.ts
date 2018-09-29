const title: string = "flint";
const subtitle: string = "A firestarter for webapps";

const h1 = document.createElement("h1");
h1.innerHTML = title;

const p = document.createElement("p");
p.innerHTML = subtitle;

document.body.appendChild(h1);
document.body.appendChild(p);
