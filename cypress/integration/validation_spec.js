const TEST_URL = "http://localhost:8080";

const VALID_CONFIG = `pull_request_rules:
- name: VALID CONFIG
  conditions: []
  actions:
    delete_head_branch: {}`;

const INVALID_CONFIG = `pull_request_rules:
- name: INVALID ACTION
  conditions: []
  actions:
    delete_branch: {}`;

describe("Test Validation", function() {
	it("Positive result on valid config", function() {
		cy.visit(TEST_URL);
		cy.get("textarea")
			.type(VALID_CONFIG)
			.should("have.value", VALID_CONFIG);

		cy.contains("VALIDATE").click();

		cy.get("#output").contains("configuration is valid");
	});

	it("Error on invalid config", function() {
		cy.visit(TEST_URL);
		cy.get("textarea")
			.type(INVALID_CONFIG)
			.should("have.value", INVALID_CONFIG);

		cy.contains("VALIDATE").click();

		cy.get("#output").contains("configuration is invalid");
	});
});
