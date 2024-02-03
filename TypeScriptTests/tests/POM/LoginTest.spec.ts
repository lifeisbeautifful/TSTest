import {test} from "@playwright/test";
import { LoginPage } from "./page-object/LoginPage";
import { HomePage } from "./page-object/HomePage";
import { Header } from "./Components/Header";


test.describe("Login suit", ()=> {
    test.beforeEach(async({page}) => {
        let loginPage = new LoginPage(page);
        await loginPage.visit("http://eaapp.somee.com/Account/Login");
        await loginPage.login();
    })

    test("Search employee", async({page}) => {
        let header = new Header(page);
        let homePage = new HomePage(page);
        await homePage.searchEmployee(header.employeeListLink);
    })
})