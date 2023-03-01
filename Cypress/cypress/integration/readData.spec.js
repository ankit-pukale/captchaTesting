describe('dsad', () => {
    it('dsadsa', () => {
        let query='SELECT * FROM contactus;'
        cy.query(query).then((data)=>{
            cy.log(data)
            data.forEach((el)=>{
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(el.firstName)
                cy.get('[name="last_name"]').type(el.lastName)
                cy.get('[name="email"]').type(el.email)
                cy.get('[name="message"]').type(el.comments)
                cy.contains(el.assert).should('be.visible')
            })
        })
    });
});