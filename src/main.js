const app = document.getElementById("app");

function addOptions(select, options) {
  options.forEach(language => {
    const option = document.createElement("option");
    option.textContent = language;
    select.appendChild(option);
  });
}

const mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "main-container");

const title = document.createElement("h1");
title.innerHTML =
`<span class="google"><span class="first-character">G</span><span class="second-character">o</span><span class="third-character">o</span><span class="fourth-character">g</span><span class="fifth-character">l</span><span class="sixth-character">e</span></span><span class="traductor">Traductor</span>
`;
title.setAttribute("class", "title");

const firstBorder = document.createElement("div");
firstBorder.setAttribute("class", "first-border");

const languageContainer = document.createElement("div");
languageContainer.setAttribute("class", "language-container");

const originalLanguage = document.createElement("select");
originalLanguage.setAttribute("class", "original-language");

addOptions(originalLanguage, [
  "Detectar idioma", "Inglés", "Español", "Francés", "Alemán",
  "Italiano", "Portugués", "Ruso", "Japonés", "Chino"
]);

const arrows = document.createElement("div");
arrows.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mobiledata"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 12v-8" /><path d="M8 20v-8" /><path d="M13 7l3 -3l3 3" /><path d="M5 17l3 3l3 -3" /></svg>`

const translatedLanguage = document.createElement("select");
translatedLanguage.textContent = "Inglés";
translatedLanguage.setAttribute("class", "translated-language");

addOptions(translatedLanguage, [
  "Inglés", "Español", "Francés", "Alemán",
  "Italiano", "Portugués", "Ruso", "Japonés", "Chino"
]);

const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-div");

const firstDiv = document.createElement("div");
firstDiv.setAttribute("class", "first-div");

const textarea = document.createElement("textarea");
textarea.placeholder = "Introduce el texto";
textarea.setAttribute("class", "textarea");

const micro = document.createElement("div");
micro.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-microphone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /></svg>`;

const secondDiv = document.createElement("div");
secondDiv.setAttribute("class", "second-div");

const translateDiv = document.createElement("div");
translateDiv.textContent = "Traducción";
translateDiv.setAttribute("class", "translate-div");

const copy = document.createElement("div");
copy.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`;

const volume = document.createElement("div");
volume.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-volume"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>`;

app.appendChild(mainContainer);
mainContainer.appendChild(title);
mainContainer.appendChild(firstBorder);
mainContainer.appendChild(languageContainer);
languageContainer.appendChild(originalLanguage);
languageContainer.appendChild(arrows);
languageContainer.appendChild(translatedLanguage);
mainContainer.appendChild(mainDiv);
mainDiv.appendChild(firstDiv);
firstDiv.appendChild(textarea);
firstDiv.appendChild(micro);
mainDiv.appendChild(secondDiv);
secondDiv.appendChild(translateDiv);
secondDiv.appendChild(copy);
secondDiv.appendChild(volume);