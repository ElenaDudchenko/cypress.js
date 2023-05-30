

describe('Тестирование huntingpony.com', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="8"] > .header__collections-controls > .header__collections-link').click();
        cy.get('body > div.page_layout.page_layout-clear.page_layout_section_top > main > div.layout.widget-type_system_widget_v4_catalog_2 > div > div > div > form:nth-child(3) > div > div.product-preview__area-photo > div > div.img-ratio.img-ratio_cover > div > a > picture:nth-child(1) > img').click();
        cy.wait (5000);
        cy.contains('В корзину').click();
        cy.wait (5000);
        cy.get('.header__cart > .icon').click();
        cy.wait (5000);
        cy.get('body > div.page_layout.page_layout-clear > main > div > div > form > div.cart__area-items > div > div.item-counter > div > button.counter-button.button.button_size-s.is-count-up').click();
        cy.get('body > div.page_layout.page_layout-clear > main > div > div > form > div.cart__area-controls > div.cart-controls > button').click();
        cy.get('#client_surname').type('Иванов');
        cy.get('#client_contact_name').type('Иван');
        cy.get('#client_phone').type('+79523598916');
        cy.get('#client_email').type('ivan@ya.ru');
        cy.get('#shipping_address_street').type('Народная');
        cy.get('#shipping_address_house').type('56');
        cy.get('#shipping_address_flat').type('112');
        cy.get('#checkout_buyer_fields > div.co-input.co-input--required.co-input--select.co-input--gen.co-input--nested > div.co-input-select > select').select('Девочка');
        cy.contains('Подтвердить заказ');
		cy.end();
         })

   
})