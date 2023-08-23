describe('filter', () => {
    before(async () => {
    await browser.url('https://www.onliner.by/')
    browser.maximizeWindow()
})


    it('open site ONLINER.BY', async () => {                
        expect($("//div[@class='project-navigation project-navigation_overflow project-navigation_scroll']")).toBeDisplayed()
    })
    
    it('open "laptop on site"', async () => {
        await $("//span[text()='Ноутбуки']").click()
        expect($("//h1[text()='Ноутбуки']").isExisting())
    })

    it('click on the drop-down menu', async () => {
        await ($("//div[contains(text(),'Все')]/span[text()='50']/../../div")).scrollIntoView()
        await $("//div[contains(text(),'Все')]/span[text()='50']/../../div").click()
        await expect($("//div[@class='schema-filter-popover__inner']")).toBeDisplayed()
        // await browser.pause(4000)
    })

    it('choose "HP" in the drop-down', async () => {
        await $('div.schema-filter-popover.schema-filter-popover_visible .schema-filter-popover__column-item:nth-of-type(25) label').click()
        await $("//div[contains(text(),'Все')]/span[text()='50']/../../div").click()
        await browser.pause(4000)
    })


    // it('chose ')
    //div[@class="schema-filter-popover schema-filter-popover_visible"]//span[text()="HP"]

    // it('chose HP in list of manufacture ', async () => {
    //     await browser.scroll(0, 500)
    //     await $('//li//span[contains(@class,"checkbox-text") and text()="HP"]').click({x: 2, y: 2})
    //     await browser.pause(4000)
    // })
})