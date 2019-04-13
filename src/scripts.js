const DEFAULT_CONFIG = `pull_request_rules:
  - name: automatic merge when CI passes and 2 reviews
    conditions:
      - "#approved-reviews-by>=2"
      - status-success=Travis CI - Pull Request
      - base=master
    actions:
      #message: hi
      merge:
        method: merge
  `;

const FORM = document.querySelector("form#validation-form");
console.log("ENV:", process.env.FORM_ACTION);
const FORM_ACTION = process.env.FORM_ACTION || "https://gh.mergify.io/validate";
const FORM_METHOD = process.env.FORM_METHOD || "POST";
const CONFIG_TEXT = FORM.querySelector("[name=config]");
// const CONFIG_FILE = FORM.querySelector("[name=data]");
const VALIDATION_OUTPUT = document.querySelector("#output");

CONFIG_TEXT.placeholder = DEFAULT_CONFIG;

function createFile(config) {
	return new File([config], ".mergify.yml", { type: "text/plain" });
}

function verify(file) {
	const body = new FormData();
	body.append("data", file);

	return fetch(FORM_ACTION, {
		method: FORM_METHOD,
		body,
	}).then((response) => {
		return response.text();
	});
}

function getConfigFile() {
	return createFile(CONFIG_TEXT.value);
	// return CONFIG_FILE.value ? CONFIG_FILE.value : createFile(CONFIG_TEXT.value);
}

FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	verify(getConfigFile())
		.then((result) => {
			VALIDATION_OUTPUT.innerText = result;
		})
		.catch((error) => {
			VALIDATION_OUTPUT.innerText = error;
		});
});
