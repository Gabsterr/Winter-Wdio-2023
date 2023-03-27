describe('WebDriver IO Code Test', () => {

        // Question - 1: (50-points)
        /**
         * Testcase: Verify rewards form is empty and Conitnue button is disabled
         * Steps:
         * 1. Launch hotels.com
         * 2. Click on Learn about Hotels.com Rewards
         * 3. -> Verify Hotels Rewards opened in a new window
         * 4. Click on Join Now
         * 5. -> Verify Form is blank
         * 6. -> Verify Continue button is NOT enabled
         */
        it('Verify rewards form is empty and Conitnue button is disabled', async () => {
            //1. Launch hotels.com
            await browser.url('https://www.hotels.com/');
            //2. Click on Learn about Hotels.com Rewards

            const hotelRewardsBttn = await $('a=Learn about Hotels.com Rewards');
            await hotelRewardsBttn.scrollIntoView(false);
            await browser.pause(2000);
            await hotelRewardsBttn.click();
            await browser.pause(2000);
            //3. -> Verify Hotels Rewards opened in a new window
            const connectedHandle = await browser.getWindowHandle();
        console.log(`connectedHandle -> ${connectedHandle}\n\n`);
            //4. Click on Join Now
           const joinNowBttn = await $('class[kes-button sica-sign-in tt-u]');
            await joinNowBttn.click();
            await browser.pause(2000);
        });
    
    
    
        // Question - 2: (50-points)
        /**
         * Testcase: Verify past dates are disabled in Calendar
         * Steps:
         * 1. Launch hotels.com
         * 2. Click on Dates section
         * 3. If not already, go to current month
         * 4. -> Verify all past dates are disabled
         */
        it.only('Verify past dates are disabled in Calendar', async () => {
            //1. Launch hotels.com
            await browser.url('https://www.hotels.com/');
           // 2. Click on Dates section
           const datesBttn = await $('button[data-name=date_form_field]'); //button[@data-name="date_form_field"]
           await datesBttn.click();
           await browser.pause(2000);
           //3. If not already, go to current month
           const currentMonthBackBttn = await $('button[data-stid=date-picker-paging]');
           await currentMonthBackBttn.click();
           await browser.pause(2000);
           //4. -> Verify all past dates are disabled
          // const pastDates = await $('');
        });
        
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    