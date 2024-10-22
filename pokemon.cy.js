describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');    
         cy.get('input[type="email"]').type('aleksbodhe@yandex.ru');                   
         cy.get('input[type="password"]').type('USER_PASSWORD');               
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click(); 
         cy.get('[href="/shop"]').click();                               
         cy.get(':nth-child(4) > .shop__button').click();   
         cy.get('.credit').type('4276300037096529');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('ALEKSEY PEREZOLOV');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');                           
         
     });
 });

