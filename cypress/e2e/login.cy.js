
describe('Тестирование формы логина и пароля', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should ('be.enabled');
        cy.get('#loginButton').click ();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.end();
         })

        it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.enabled');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.end();
         })



    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type('iLoveqastudio123');
        cy.get('#loginButton').should ('be.enabled');
        cy.get('#loginButton').click ();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.end();
         })


    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov1.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should ('be.enabled');
        cy.get('#loginButton').click ();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.end();
         })


        it('Верный логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should ('be.enabled');
        cy.get('#loginButton').click ();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
        cy.end();
         })


        it('Верный логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should ('be.enabled');
        cy.get('#loginButton').click ();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.end();
         })   
})