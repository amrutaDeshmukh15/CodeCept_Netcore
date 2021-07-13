class Element{
    
    static async getListOfElements(locator){
        const browser = this.prototype.helpers[`WebDriver`];
        const res = await browser._locateFields(locator);
        return res;
    }

    static async checkIfElementPresent(locator){
        const isPresent = await this.getListOfElements(locator);
        if(await isPresent && isPresent.length){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = new Element();
