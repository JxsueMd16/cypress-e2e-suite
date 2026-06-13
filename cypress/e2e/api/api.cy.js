describe("API - Sauce Demo", () => {

  it("GET pagina principal responde 200", () => {
    cy.request("GET", "https://www.saucedemo.com").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("GET recurso inexistente retorna 404", () => {
    cy.request({
      method: "GET",
      url: "https://www.saucedemo.com/pagina-que-no-existe",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("GET respuesta contiene content-type html", () => {
    cy.request("GET", "https://www.saucedemo.com").then((response) => {
      expect(response.headers["content-type"]).to.include("text/html");
    });
  });

  it("GET tiempo de respuesta menor a 3 segundos", () => {
    const start = Date.now();
    cy.request("GET", "https://www.saucedemo.com").then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(3000);
    });
  });

});