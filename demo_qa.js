describe("Opening web page", () => {
    it ("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')
        // cy.get(".banner-image").click();
        cy.get(".category-cards > :nth-child(1)").click();
        cy.get("div:nth-child(1) > span > div").click();
        cy.get("div:nth-child(2) > span > div").click();
        cy.get(".left-pannel").contains("Practice Form").click();
    });
    it ("fill the inputs", () => {
        cy.get("input[id='firstName']").type('Poxos');
        cy.get("input[id='lastName']").type("Poxosyan");
        cy.get("input[id='userEmail").type("poxos123@mail.ru");
        cy.get("#genterWrapper  ").contains("Male").click();
        cy.get("input[id='userNumber']").type("44564984654");
        cy.get("input[id='dateOfBirthInput']").type("{enter}");
        cy.get(".subjects-auto-complete__value-container--is-multi").type('hello')
        cy.get(".custom-control-label").contains("Sports").click();
        cy.get(".custom-control-label").contains("Reading").click();
        cy.get(".custom-control-label").contains("Music").click();
        //cy.get("input[type=file]").click();
        // cy.contains('');


    });
});