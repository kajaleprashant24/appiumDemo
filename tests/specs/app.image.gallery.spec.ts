import HomeScreen from "../screenobjects/HomeScreen";

describe("WebdriverIO and Appium, when interacting with a photo gallery app,", () => {
  before(() => {
    console.log("Starting test");
  });

  after(() => {
    console.log("Test Completed!");
  });

  it("should be able search images in photo gallery successfully", async () => {
    await HomeScreen.waitForIsShown(true);

    // verift titke is displayed
    const tiltleElement = await HomeScreen.title;
    expect(tiltleElement).toBeDisplayed();

    // search kittens in gallery
    await HomeScreen.searchImage("Kittens");
    const imageTitles = await HomeScreen.getSearchResultsTitles();

    // console log the text of images loaded
    // this can be replaced with test assertions
    console.log(imageTitles);
  });
});
