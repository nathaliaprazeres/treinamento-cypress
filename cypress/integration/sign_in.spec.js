/// <reference types='cypress'/>


describe('Login', () => {
    
    it('Efetuar login com usuário e senha válido', () => {

        const user = 'frodo@teste.com';
        const pass = 'frodo1234'
        //acessar o site
        cy.visit('https://purescript-react-realworld.netlify.app/');
        //acessar o login
        cy.get('.nav-link').contains('Sign in').click();
        //validar que a tela do login esta aberta
        cy.contains('Sign in').should('be.visible');
        //digitar login e senha
        cy.get('input[type=email]').type(user);
        cy.get('input[type=password]').type(pass);
        //clicar para logar    
        cy.get('.btn').contains('Sign in').click(); 
        //validar que abriu a tela principal
        cy.get('.nav-pills a.nav-link').should('have.length', 2);
        cy.get('.nav-pills a.nav-link').eq(0).should('contain.text','Your Feed');
        


    });
});