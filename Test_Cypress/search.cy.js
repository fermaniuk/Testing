describe('Test', () => {
  beforeEach(() => {
    cy.visit('https://www.adidas.ua/')
  })

  it('Testing', () => {
    //Selectors
    const button = "#__layout > div > header > div > div:nth-child(2) > div > div.header-main__actions-container > div > div.header-main__actions-container__bottom__search-and-icons > div > div.search-input.search.header-search.header-icon-container__search.search-input--header > div.button-icon.search-input__button";
    const search = "#__layout > div > header > div > div:nth-child(2) > div > div.header-main__actions-container > div > div.header-main__actions-container__bottom__search-and-icons > div > div.search-input.search.header-search.header-icon-container__search.search-input--header > div.search-pop-up-mobile.search-input__popup.search-pop-up-mobile--fool-size.search-input__popup--fool-size > div > div > input";
    const element = "#__layout > div > div.layout-default__main-container > main > div > div.store > div > div.list.store__list > div:nth-child(1) > div > div > a > picture.image-main.image > img";
    
    //searchWord
    const searchWord = "футболка";

    //Get a butter and click it
    cy.get(button).click();

    //Get selector and enter a word and search
    cy.get(search).type(searchWord + '{enter}');

    //Checking element on visible
    cy.get(element).should('be.visible');
  })
}
)