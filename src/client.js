import { encode } from "plantuml-encoder";
import uml from "../index.uml";

const encoded = encode(uml);
const img = document.createElement("img");
img.setAttribute("src", `http://localhost:8080/png/${encoded}`);

document.body.appendChild(img);
