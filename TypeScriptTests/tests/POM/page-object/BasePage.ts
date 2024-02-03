

export class BasePage{
    page:any;
    
    
    constructor(page){
        this.page = page;
    }

    async visit(url){
        await this.page.goto(url);

    }
}