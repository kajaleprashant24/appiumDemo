class AndroidSettings {
    /**
     * Get the platform version
     */
    private get platformVersion(): number {
        return parseInt(
            (('platformVersion' in driver.capabilities &&
                driver.capabilities.platformVersion) as string) || '8',
            10,
        );
    }

    /**
     * Set the pin for Android 7 or lower
     */
    private async setPinSevenOrLower(pin: number) {
        await this.waitAndTap('Fingerprint + PIN');
        await this.waitAndTap('No thanks');
        await (await this.findAndroidElementByText('Choose your PIN')).waitForDisplayed();
        await this.executeAdbCommand(
            `input text ${pin} && input keyevent 66 && input text ${pin} && input keyevent 66`,
        );
        await this.waitAndTap('DONE');
    }

    /**
     * Touch sensor and enable finger print for Android 7 and lower
     */
    private async touchSensorSevenOrLower(touchCode: number) {
        await this.waitAndTap('NEXT');
        await (await this.findAndroidElementByText('Put your finger')).waitForDisplayed();
        await driver.fingerPrint(touchCode);
        await (await this.findAndroidElementByText('Move your finger')).waitForDisplayed();
        await driver.fingerPrint(touchCode);
    }

    /**
     * Execute ADB commands on the device
     */
    private async executeAdbCommand(adbCommand: string) {
        await driver.execute('mobile: shell', {
            command: adbCommand,
        });
    }

    /**
     * Find an Android element based on text
     */
    async findAndroidElementByText(string: string) {
        const selector = `android=new UiSelector().textContains("${string}")`;

        return $(selector);
    }

    /**
     * Wait and click on an element
     */
    async waitAndTap(string: string) {
        await (await this.findAndroidElementByText(string)).waitForDisplayed();
        await (await this.findAndroidElementByText(string)).click();
    }

}

export default new AndroidSettings();
