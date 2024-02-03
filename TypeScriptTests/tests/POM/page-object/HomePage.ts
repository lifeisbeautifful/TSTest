import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{
    empListLink: any;
    searchInput:any;
    searchBtn:any;
    employeeNameColumn:any;

    constructor(page){
        super(page)
        this.searchInput = page.locator("//body/div[2]/form[1]/input[1]");
        this.searchBtn = page.locator("//input[@type='submit']");
        this.employeeNameColumn = page.locator("//td[contains(text(),'Karthik')]");
    }

    async searchEmployee(link){
        await link.click();
        await this.searchInput.fill("Karthik");
        await this.searchBtn.click();
        await expect(this.employeeNameColumn).toBeVisible();
    }
}