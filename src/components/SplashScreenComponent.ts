export class SplashScreenComponent {
  constructor() {
    const h1Content: string = "🔥 flint";
    const p1Content: string = "A firestarter for webapps";
    const p2Content: string =
      "<a href='http://localhost:3000/'>Server listening on port 3000</a>";

    const h1: HTMLElement = document.createElement("h1");
    h1.innerHTML = h1Content;

    const p1: HTMLElement = document.createElement("p");
    p1.innerHTML = p1Content;

    const p2: HTMLElement = document.createElement("p");
    p2.innerHTML = p2Content;

    document.body.appendChild(h1);
    document.body.appendChild(p1);
    document.body.appendChild(p2);
  }
}
