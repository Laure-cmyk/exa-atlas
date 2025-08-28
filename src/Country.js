export default class Country {

    constructor(name, flag) {
        this.name = name;
        this.flag = flag;
        this.population = population;
    
    }


    #generateElement() {
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
    }

    render() {
        const main = document.querySelector("main");
        main.append(this.#generateElement);
    }


}