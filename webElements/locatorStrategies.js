describe('basic locator strategies', () => {
    
    it('Locator strategy : Using id-value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Type (abcd@gmail.com) in the Email or phone number field/element
         * 3. Type (abcd@1234) in the Password field/element
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Type (abcd@gmail.com) in the Email or phone number field/element
        const loginEmailElement = await $('#email');
            // $(findElement) has to find a webElement where id-attribute = 'email'
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3. Type (abcd@1234) in the Password field/element
        const loginPasswordElement = await $('#pass');
            // $(findElement) has to find a webElement where id-attribute = 'pass'
        loginPasswordElement.setValue('abcd@1234');
        
        await browser.pause(10000);

    })

})

// Locator strategies:
/**
 * Locators: way to reach/find a webElement in DOM
 * 
 * 1. Using id-attribute
 *      id-attribute is always going to be unique for the webpage (in the DOM)
 *      To check if id-value is unique, In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = await $('#idValue');
 * 
 * 2. Using other attribute's value instead id-attribute
 *      To check if any-attribute has unique value, In chropath -> //tagName[@attrName="attrValue"]
 *      Note: Attribute's value cannot have spaces (If want to use attribute's value with spaces then refer xpath)
 *      
 *      const webElement = await $('tagName[attrName=attrValue]');
 * 
 * 3. Using text-Value
 *      To check if the text-value with webElement is unique, In chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = await $('tagName=text value');
 * 
 * 4. Using partial attribute's value
 *      To check if the partial attribute's value is unique, In chropath -> //tagName[contains(@attrName, 'partialAttrValue')]
 *      Note: Attribute's partial value cannot have spaces (If want to use attribute's partial value with spaces then refer xpath)
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]');
 * 
 * 5. Using partial text-value
 *      To check if the partial text value is unique, In chropath -> //tagName[contains(text(), 'partial Text Value')]
 * 
 *      const webElement = await $('tagName*=partial text value');
 * 
 * 6. Using link-text
 *      To check if the link text is unique, In chropath -> //a[text()='Link text']
 * 
 *      const webElement = await $('=Link text');
 * 
 * 7. Using partial link-text
 *      To check if the link partial-text is unique, In chropath -> //a[contains(text() , 'partial link text')]
 * 
 *      const webElement = await $('*=partial link text');
 * 
 * 8. Using tagName
 *      To check if the tagName with webElement is unique, In chropath -> //tagName
 * 
 *      const webElement = await $('<tagName>')
 * 
 */

/**
 * 9. Xpath
 *      Types:
 *      1. Absolute xpath
 *          a) starts with root-tag (or html-tag)
 *          b) always starts with single-slash (/)
 *          c) not reliable, any change in the webPage may break the absolute xpath
 *          eg:
 *              /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]
 * 
 *      2. Relative xpath
 *          a) always starts with double-slash (//)
 *          b) reliable bcz we use the tagName, attribute or text-value in any combination to create xpath
 * 
 *      -> Direct xpath (simple xpath)
 *      -> Indirect xpath (advanced xpath)
 */

// Direct xpath (simple xpath)
/**
 * 
 * 
 * 1. using attribute's value
 *      //tagName[@attrName="attr value"]
 *      find the tag(tagName) which has attribiute(attrName) with value equals to "attr value"
 * 
 *      const webElement = await $('//tagName[@attrName="attr value"]')
 * 
 * 2. using text value
 *      //tagName[text()="text value"]
 *      find the tag(tagName) which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[text()="text value"]')
 *      
 * 3. using partial attribute's value (function -> contains())
 *      //tagName[contains(@attrName, "partial attr value")]
 *      find the tag(tagName) in dom where attribute(attrName)'s value contains "partial attr value"
 * 
 *      const webElement = $('//tagName[contains(@attrName, "partial attr value")]');
 * 
 * 4. using partial text value (function -> contains())
 *      //tagName[contains(text(), "partial text value")]
 *      find the tag(tagName) where text contains "partial text value"
 * 
 *      const webElement = $('//tagName[contains(text(), "partial text value")]')
 * 
 * 5. using starting portion of attribute's value (function -> starts-with())
 *      //tagName[starts-with(@attrName, "starting attr value")]
 *      find the tag(tagName) in dom where attribute(attrName)'s value starts with "starting attr value"
 * 
 *      const webElement = $('//tagName[starts-with(@attrName, "starting attr value")]');
 * 
 * 6. using starting portion of text value (function -> starts-with())
 *      //tagName[starts-with(text(),"starting text value")]
 *      find the tag(tagName) in dom where text-value starts with "starting text value"
 * 
 *      const webElement = $('//tagName[starts-with(text(),"starting text value")]');
 * 
 * 7. using not()
 *      //tagName[not(@attrName="attr value")]
 *      find the tag(tagName) which has attribiute(attrName) with value NOT equals to "attr value"
 * 
 *      //tagName[@attrName]
 *      find the tag(tagName) which has attribute(attrName)
 * 
 *      //tagName[not(@attrName)]
 *      find the tag(tagName) which does NOT have attribute(attrName)
 * 
 * 8. using and/or operator
 *      //tagName[@attrName="attr value" and text()="text value"]
 * 
 *      //tagName[contains(text(), "partial text value" or starts-with(@attrName, "starting portion of attrValue")]
 * 
 *      //tagName[text()="value1" or text()="value2"]
 * 
 */

// Indirect xpath (advanced xpath)
/**
 * chained xpath (using parent-tag, grand-parent-tag and so on...)
 * 
 *  (//a[@data-from-string="locationCard"])[5]//span
 *  //div[@class="uitk-menu-trigger"]//button
 *  //div[@class="uitk-menu-trigger"]//button[@aria-label="Going to"]
 *
 */
// Xpath Axes
/**
 * 1. following-sibling (sibling starting-tags which appear in the dom after the tag)
 *      //tagName[condition(s)]/following-sibling::tag2[condition(s)]
 * 
 *      (//h2[text()="Weather Result"]/following-sibling::div//div[@role="heading"]//span)[1]
 *      //label[starts-with(text(),"Fem")]/following-sibling::input
 *      //label[starts-with(text(),"Fem")]/following-sibling::*
 *      //label[text()="Going to"]/following-sibling::button
 * 
 * 2. preceding-sibling (sibling starting-tags which appear in the dom before the tag)
 *      //tagName[condition(s)]/preceding-sibling::tag2[condition(s)]
 * 
 *      //div[text()="Going to"]/preceding-sibling::button
 *  
 * 3. following (all starting-tags appear in the dom after the tag)
 *      //tagName[condition(s)]/following::tag2[condition(s)]
 * 
 * 
 * 4. preceding (all starting-tags appear in the dom before the tag)
 *      //tagName[condition(s)]/preceding::tag2[condition(s)]
 * 
 * 
 * 5. parent (to go to parent-tag from chaild-tag)
 *      //tagName[condition(s)]/parent::tag2[condition(s)]
 * 
 *      //input[@id="date_form_field"]/parent::*
 *      
 *      .. can also be used like parent-axes
 *      //input[@id="date_form_field"]/..
 * 
 * 
 */
