const DEFAULT_CONFIG = `
pull_request_rules:
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

const file = new File([DEFAULT_CONFIG], ".mergify.yml", { type: "text/plain" })
const body = new FormData();
body.append("data", file);

fetch("http://localhost:5000/validate", {
    method: "POST",
    body,
    //mode: "no-cors",
  }).then((response) => {
    return response.text()
  }).then(console.log)
