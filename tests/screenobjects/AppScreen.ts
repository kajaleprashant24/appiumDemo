export default class AppScreen {
    private selector: string;

    constructor (selector: string='') {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true): Promise<boolean | void> {
        if (isShown) {
           return $(this.selector).waitForDisplayed({
                reverse: !isShown,
            });  
        }
        return true;    
    }
}
