import {test} from "./Fixtures/Fixture";


test.describe("Login suit", ()=> {
    test.beforeEach(async({loginPage}) => {
        loginPage.visit("http://eaapp.somee.com/Account/Login");
        await loginPage.login();
    })

    test("Search employee", async({homePage, header}) => {
        await homePage.searchEmployee(header.employeeListLink);
    })
})