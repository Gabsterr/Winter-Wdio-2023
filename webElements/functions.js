// Steps to find and interact with a webElement
/**
 * 1. Find the unique locator strategy to find webElement in the DOM
 * 2. Based on the locator strategy, use corresponding code to find the webElement
 * 3. once the webElement is found, interact with webElement
 */

// To find webElement
//      function: $

// Functions to interact with webElement:
/**
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text that we want to type
 * 
 * 2. click
 *      function: click()
 * 
 * 3. to find if webElement is enabled
 *      function: isEnabled()
 *      if the webElement is enabled
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 4. to find if a webElement is selected
 *      function: isSelected()
 *      if the webElement is selected
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 5. to find if a webElement is displayed
 *      function: isDisplayed()
 *      if the webElement is displayed
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 6. to get the value of any attribute
 *      function: getAttribute()
 *      input: attribute-name
 *      returns the attribute's value as a string
 * 
 * 7. to get the text-value
 *      function: getText()
 *      returns the text-value as a string
 *      
 */

// Link
/**
 *      always have a-tag
 *      text of a link is called Link-Text
 *      after clicking the link, user should land on which webPage that is defined in href-attribute.
 * 
 * 
 * 
 * <a href="https://messenger.com/" title="Check out Messenger.">
 *  Messenger
 * </a>
 * Text of a-tag = Messenger
 * 
 */