describe('Домашка qolorado_hi', function () {
       

   it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');                                 // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');                          // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');                             // Ввели верный пароль
        cy.get('#loginButton').click();                                    // Нажали на кнопку "Войти"
        cy.get('#messageHeader').should ('be.visible');                   // Текст виден "Авторизация прошла успешно"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon');                       // Кнопка крестик присутсвует
        cy.clearCookies()



   })

  it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');                            // Зашли на сайт
        cy.get('#forgotEmailButton').click();                           // Нажали на кнопку "Войти"
        cy.get('#mailForgot').type('qolorado_hi@.ru');                 // Ввели неверный пароль
        cy.get('#restoreEmailButton').should('be.visible');           // Текст виден "Отправить код"
        cy.get('#exitMessageButton > .exitIcon');                    // Кнопка крестик присутсвует
        cy.clearCookies()

   })

it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');                                           // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');                                    //Ввели верный логин
        cy.get('#pass').type('qolorado_hi');                                          // Ввели неверный пароль
        cy.get('#loginButton').click();                                              // Нажали на кнопку "Войти"
        cy.get('#messageHeader').contains ('Такого логина или пароля нет');         // Текст с ошибкой совпадает
        cy.get('#exitMessageButton > .exitIcon');                                  // Кнопка крестик присутсвует
        cy.wait(5000)
        cy.clearCookies()
  

   })

it('Негативный кейс авторизации', function () {  

         cy.visit('https://login.qa.studio/');                                         // Зашли на сайт
         cy.get('#mail').type('qolorado@hi');                                         //Ввели неверный логин
         cy.get('#pass').type('iLoveqastudio1');                                     // Ввели верный пароль
         cy.get('#loginButton').click();                                            // Нажали на кнопку "Войти"
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Текст c ошибкой совпадает
         cy.get('#messageHeader').should('be.visible');                           // Текст виден
         cy.get('#exitMessageButton > .exitIcon');                               // Кнопка крестик присутсвует
         cy.wait(9000)
         cy.clearCookies()

   })

it('Негативный кейс авторизации', function () { 


         cy.visit('https://login.qa.studio/');                                         // Зашли на сайт
         cy.get('#mail').type('germandolnikov.ru');                                   //Ввели неверный логин, без "@"
         cy.get('#pass').type('iLoveqastudio1');                                     // Ввели верный пароль
         cy.get('#loginButton').click();                                            // Нажали на кнопку "Войти"
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Текст c ошибкой совпадает
         cy.get('#messageHeader').should('be.visible');                           // Текст виден
         cy.wait(7000)
         cy.clearCookies()

})

it('Негативный кейс авторизации', function () {


         cy.visit('https://login.qa.studio/');                                          // Зашли на сайт 
         cy.get('#mail').type('GerMan@Dolnikov.ru');                                   //Ввели неверный логин (с большими буквами)
         cy.get('#pass').type('iLoveqastudio1');                                      // Ввели верный пароль
         cy.get('#loginButton').click();                                             // Нажали на кнопку "Войти"
         cy.get('#messageHeader').contains('Авторизация пршла успешно');            // Текст  не совпадает
         cy.get('#exitMessageButton > .exitIcon');                                 // Кнопка крестик присутсвует
         cy.clearCookies()



    })
    })

   
    



