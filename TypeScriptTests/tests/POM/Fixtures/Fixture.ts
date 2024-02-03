import {BrowserContext, Page, test as baseTest} from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";
import { chromium } from "@playwright/test";
import { Header } from "../Components/Header";

type basePage = {
    loginPage: LoginPage
    homePage:HomePage
    browserContext: BrowserContext
    page:Page
    header:Header
}

export const test = baseTest.extend<basePage>({
    browserContext: async({}, use) => {
        let browser = await chromium.launch();
        let context = await browser.newContext();

        await use(context);
    },
    page:async({browserContext}, use) => {
        let page = await browserContext.newPage();
        await use(page);
    },
    header:async({page}, use) => {
        let header = new Header(page);
        await use(header);
    },
    homePage: async({page}, use) => {
        let homepage = new HomePage(page);
        await use(homepage);
    },
    loginPage: async({page}, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    }
})