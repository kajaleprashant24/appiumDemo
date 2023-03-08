import AppScreen from "./AppScreen";
import { DEFAULT_TIMEOUT } from "../helpers/Constants";

class HomeScreen extends AppScreen {
  constructor() {
    super("id=com.example.imagegallery:id/decor_content_parent");
  }

  /**
   * here conditional locators so same code will run againt Android nd ios
   */
  get title() {
    return $(
      driver.isAndroid
        ? "id=com.example.imagegallery:id/action_bar"
        : "~Image Gallery"
    );
  }

  get searchInput() {
    return $(
      driver.isAndroid ? "id=com.example.imagegallery:id/edt_search" : ""
    );
  }

  get searchGallery() {
    return $("id=com.example.imagegallery:id/recyclerview_gallery");
  }

  get searchImages() {
    return $("id=com.example.imagegallery:id/img_photo");
  }

  get searchImagesTitles() {
    return $$("id=com.example.imagegallery:id/txt_title");
  }

  /**
   *  search image in gallery
   */
  async searchImage(searchString: string) {
    await this.searchInput.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await (await this.searchInput).click();
    await (await this.searchInput).sendKeys([searchString]);
    driver.sendKeyEvent("66"); // trigger enter event
    await this.searchGallery.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    const images = await this.searchImages;

    await images.waitForDisplayed();
  }

  /**
   * Get search result text
   */

  async getSearchResultsTitles() {
    let titles = [];
    const imageTitles = await this.searchImagesTitles;
    await imageTitles[0].waitForDisplayed();
    for (const img of imageTitles) {
      const txt = await img.getText();
      titles.push(txt);
    }
    return titles;
  }
}

export default new HomeScreen();
