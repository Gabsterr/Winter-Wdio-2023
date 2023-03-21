// Due date: Mar-13 (eod)

// TC-1: Verify current temp is less than or equals to feel-like temp
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 45 and 55
 */

const { expect } = require("chai");

describe('Verify current temp is less than or equals to feel-like temp.', () => {

   it('Verify current temp is between 45 and 55', async () => {
    // 1. https://www.accuweather.com/
    await browser.url('https://www.accuweather.com/');
   
    // 2. Verify current temp is between 45 and 55
    const currentTempElement = await $('//span[@class="recent-location-temp"]');
     //span[@class="recent-location-temp"]
    let currentTempText = await currentTempElement.getText();
    currentTempText = currentTempText.trim();
    let currentTemp = currentTempText.substring(0,currentTempText.length-1);
    currentTemp = Number(currentTemp); 

    expect(currentTemp > 45 && currentTemp < 55, 'Current temp is NOT between 45 and 55').to.be.true;

    });

    // TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */

    it('Verify error on empty login flow', async () => {
        //Launch https:www.facebook.com/
        await browser.url('https://www.facebook.com/');
       
        //2. Click 'Log In' button
        const logInLink = await $('//button[@name="login"]');
        await logInLink.click();
        await browser.pause(2000);

        //3. Verify error msg is displayed
        const errorMsg = await $('//div[contains(text(), "mobile number you entered")]');
        const isErrorMsgDisplayed = await errorMsg.isDisplayed();
        expect(isErrorMsgDisplayed, 'The message "The email or mobile number you entered isn’t connected to an account" is not displayed').to.be.true;
    
    });
    
    // TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */

    it('Verify the empty messenger login flow', async () => {
        //1. Launch https:www.facebook.com/
        await browser.url('https://www.facebook.com/');
        //2. Click on 'Messenger' link
        const messengerLink = await $('=Messenger');
        messengerLink.click();
        await browser.pause(2000);
        //3. Verify 'Keep me signed in' checkbox is NOT selected
        const signInCheckbox = await $('label*=me signed');
        const isSignInCheckboxSelected = await signInCheckbox.isSelected();
        expect(isSignInCheckboxSelected, 'Signed in checkbox is selected').to.be.false;
        await browser.pause(2000);
        //4. Click 'Log In' button
        const loginButton = await $('#loginbutton');
        loginButton.click();
        await browser.pause(2000);
        //5. Verify link -> "Find your account and log in" is displayed
        const findAcctLoginLink = await $('*=account and log');
        const isAcctLoginLinkDisplayed = await findAcctLoginLink.isDisplayed();
        expect(isAcctLoginLinkDisplayed, 'The link "Find your account and log in" is not displeyed.').to.be.true;
        //6. Verify 'Continue' button is enabled
        const continueButton = await $('#loginbutton');
        const isContinueButtonEnabled = await continueButton.isEnabled();
        expect(isContinueButtonEnabled, 'The "Continue" button is not enabeled.').to.be.true;
        await browser.pause(2000);
        //7.Verify 'Keep me signed in' checkbox is NOT selected
        const keepMeSignedInBox = await $('label[class=uiInputLabelLabel]');
        const isKeepMeSignedInBoxSelected = await keepMeSignedInBox.isSelected();
        expect(isKeepMeSignedInBoxSelected, 'The "Keep me signed in" checkbox is selected.').to.be.false;
        await browser.pause(2000);
        //8. Click 'Keep me signed in' checkbox
        const keepMeSignedInCheckbox = await $('//label[starts-with(text(),"keep")]/preceding::label[/preceding::span]');
        keepMeSignedInCheckbox.click();      ////tagName[condition(s)]/preceding::tag2[condition(s)]
        await browser.pause(5000);
        //9. Verify 'Keep me signed in' checkbox is selected
        const keepMeSignedIn = await $('//label[text()="Keep me signed in"]');
        const isCheckboxSelected = await keepMeSignedIn.isSelected();      ////tagName[condition(s)]/preceding::tag2[condition(s)]
        expect(isCheckboxSelected, 'The "Keep me signed in" checkbox is not selected.').to.be.true;

    });

});




