///<reference types="cypress"/>
describe('verify captcha using cypress',()=>{
it('verify valid captcha',()=>{
    let dbImageName=""
    let dbImageSol=""
    let UIImageName=""
    let query="SELECT * FROM  captcha.captchadata WHERE imageName='$UIImageName';"
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get('#captchaImg').invoke('attr','imid').then((imName)=>{
        UIImageName=imName
        cy.log(UIImageName)
    }).then(()=>{
        cy.query(query.replace('$UIImageName',UIImageName)).then((dbres)=>{
            dbImageSol=dbres[0].ImageSolution
            cy.get('#capTextBox').type(dbImageSol,{force:true})
            cy.screenshot()
            cy.get('#btnSubmit').click()
            cy.get('h1').should('have.text','Dashboard Page')
        })
    })
    
})
})