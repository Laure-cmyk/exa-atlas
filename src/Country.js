export default class Country {

    constructor(name, flag) {
        this.name = name;
        this.flag = flag;
        this.population = population;
        /* this.#countryElement = this.#generateElement(); */
    }

    #generateElement() {
        const countryContainer = document.createElement("div");
        countryContainer.classList.add("country-container");

        countryContainer.innerHTML = `
        <article class="country--card">
			<section class="country--flag">
				<h1>${flag}</h1>
			</section>

			<section class="country--name">
				<h1>${name}</h1>
				<h2>${official}</h2>
			</section>

			<section class="country--info">
				<p>population: ${population}/p>
				<p>region: ${region}</p>
			</section>

			<section class="country--actions">
				<a class="country--map" href="${position}" target="_blank">
					Display Map 📍
				</a>
			</section>
		</article>
        `
    }

    render() {
        const main = document.querySelector("main");
        main.append(countryContainer);
        return main;
    }


}