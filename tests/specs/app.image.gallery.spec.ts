import HomeScreen from "../screenobjects/HomeScreen";

describe("WebdriverIO and Appium, when interacting with a photo gallery app,", () => {
  const flag = driver.isAndroid ? true : false;
  const searchInput = "Kittens";
  before(() => {
    console.log("Starting test");
  });

  after(() => {
    console.log("Test Completed!");
  });

  beforeEach(async () => {
    await HomeScreen.waitForIsShown(flag);

    // verift title is displayed
    const tiltleElement = await HomeScreen.title;
    expect(tiltleElement).toBeDisplayed();
  });

  it("should be able search images in photo gallery successfully", async () => {
    // search kittens in gallery
    await HomeScreen.searchImage(searchInput);
    const imageTitles = await HomeScreen.getSearchResultsTitles();

    // console log the text of images loaded
    // this can be replaced with test assertions
    console.log(imageTitles);
  });

  // Only for IOS
  it("should clear input value after click on cancel", async () => {
    // search kittens in gallery
    await HomeScreen.searchImage(searchInput);
    await HomeScreen.clearInput();
    const searchTxt = await HomeScreen.getSearchInputValue();
    expect(searchTxt).toEqual("Search here...");
  });

  it("search for empty string", async () => {
    // search kittens in gallery
    await HomeScreen.searchImage("");
    await HomeScreen.clearInput();
    const searchTxt = await HomeScreen.getSearchInputValue();
    expect(searchTxt).toEqual("Search here...");
  });

  it("search for special chars", async () => {
    // search kittens in gallery
    await HomeScreen.searchImage("@");

    const searchTxt = await HomeScreen.getSearchInputValue();
    expect(searchTxt).toEqual("Search here...");
  });

  it("validate welcome message", async () => {
    await HomeScreen.validateWelcomeMessage();
  });
});
