import { BasePage } from "./BasePage";
import{expect} from "@playwright/test";

export class LoginPage extends BasePage{
    readonly usernameField:any
    readonly passwordField:any
    readonly loginBtn:any
   

    constructor(page){
        super(page)
        this.usernameField = page.locator("//input[@id='UserName']");
        this.passwordField = page.locator("//input[@id='Password']");
        this.loginBtn = page.locator("//input[@type='submit']");
    }

    async login(username = "admin", password = "password"){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
      
        await expect(this.page).toHaveURL("http://eaapp.somee.com/");
    }
}