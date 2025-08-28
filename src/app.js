"use strict"

import Country from "./Country.js"

const main = document.querySelector("main");
const searchInput = document.querySelector("input");
const form = document.querySelector("form");


function render(event) {
    const value = searchInput.value;
    console.log("submitted " + value);
    event.preventDefault();


    const BASE_URL = `https://restcountries.com/v3.1/name/${value}`;

    const generateElement = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const errorElement = document.createElement("p");

        if (!response.ok) {
            const div = document.querySelector(".search--container");
            errorElement.classList.add("error");
            errorElement.innerText = "Couldn't find country";
            div.insertAdjacentElement('beforeend', errorElement);
        }

        const countryContainer = document.createElement("div");
        countryContainer.classList.add("country-container");

        countryContainer.innerHTML = `
        <article class="country--card">
			<section class="country--flag">
				<h1>${data[0].flag}</h1>
			</section>

			<section class="country--name">
				<h1>${data[0].name.common}</h1>
				<h2>${data[0].name.official}</h2>
			</section>

			<section class="country--info">
				<p>population: ${data[0].population}</p>
				<p>region: ${data[0].region}</p>
			</section>

			<section class="country--actions">
				<a class="country--map" href="${data[0].maps.openStreetMaps}" target="_blank">
					Display Map 📍
				</a>
			</section>
		</article>
        `

        main.append(countryContainer);
    };

    generateElement();
    searchInput.value = "";
}

form.addEventListener("submit", render);






/* May be reused later if I have the time to make this class work */
// Test url
/* const BASE_URL = `https://restcountries.com/v3.1/name/${searchInput.value}`;
// API URL
//const BASE_URL = 'https://restcountries.com/v3.1/name/{name}';


const generateElement = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const countryContainer = document.createElement("div");
        countryContainer.classList.add("country-container");

        countryContainer.innerHTML = `
        <article class="country--card">
            <section class="country--flag">
                <h1>${data[0].flag}</h1>
            </section>

            <section class="country--name">
                <h1>${data[0].name.common}</h1>
                <h2>${data[0].name.official}</h2>
            </section>

            <section class="country--info">
                <p>population: ${data[0].population}</p>
                <p>region: ${data[0].region}</p>
            </section>

            <section class="country--actions">
                <a class="country--map" href="${data[0].maps.openStreetMaps}" target="_blank">
                    Display Map 📍
                </a>
            </section>
        </article>
        `

        main.append(countryContainer);
}; 

generateElement(); */


