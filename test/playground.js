import ghost from 'ghostjs'
import { expect, assert, should } from 'chai'

//This is the equivalent to a feature definition in cucumber
describe('Mercadolibre search Test', () => {

  // And this is pretty much like a step.
  it('Should load mercadolibre.com.uy', async() => {
    // Open the browser and wait for the page to respond
    // "await" is used to prevent the infinite callback stack that can be
    // generated due to JS's asynchronous nature.
    await ghost.open('http://www.mercadolibre.com.uy')

    // find an element by its id
    let searchField = await ghost.findElement('#query')
    // Find an element by its name
    let button = await ghost.findElement('[name=mlSearchBtn]')
    // Any CSS selector is valid
    let form = await ghost.findElement('#formSearch')

    // write a text in the search field.
    await searchField.fill('Championes')

    // Click on the button. For other click actions see the "mouse" method.
    button.click()

    // "ghost.wait" will let you wait until a condition is true. The function
    // passed as parameter has to return a boolean value.
    var isVisible = await ghost.wait(async() => {
      var findEl = await ghost.findElement('#searchResults')
      return findEl && await findEl.isVisible()
    })

    // this time, we get all elements with this class, which will return a list
    // of elements
    var searchResults = await ghost.findElements('.rowItem')

    // here we use chai's expect construction to ensure we got results from our
    // search.
    expect(searchResults.length).to.not.equal(0)

  })

})
