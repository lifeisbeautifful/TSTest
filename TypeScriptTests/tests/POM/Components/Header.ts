export class Header{
    homeLink: any;
    aboutLink: any;
    employeeListLink: any;
    manageUsersLink: any;
    adminPageLink: any;
    logOffLink: any;
    employeeDetailsLink: any;

    constructor(page){
        this.homeLink = page.locator("//a[contains(text(),'Home')]");
        this.aboutLink = page.locator("//a[contains(text(),'About')]");
        this.employeeListLink = page.locator("//a[contains(text(),'Employee List')]");
        this.employeeDetailsLink = page.locator("//a[contains(text(),'Employee Details')]");
        this.manageUsersLink = page.locator("//a[contains(text(),'Manage Users')]");
        this.adminPageLink = page.locator("//a[contains(text(),'Hello admin!')]");
        this.logOffLink = page.locator("//a[contains(text(),'Log off')]");
    }


    async clickHeaderLink(link){
        await link.click();
    }
}