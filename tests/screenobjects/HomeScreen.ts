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
        : "~MyFlickr.PhotosView"
    );
  }

  get searchInput() {
    return $(
      driver.isAndroid
        ? "id=com.example.imagegallery:id/edt_search"
        : "~Search here..."
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
   *  Trigger search
   */

  async triggerSearch() {
    driver.isAndroid ? driver.sendKeyEvent("66") : (await $("~Search")).click();
  }

  /**
   *  search image in gallery
   */
  async searchImage(searchString: string) {
    await this.searchInput.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await (await this.searchInput).click();
    await (await this.searchInput).sendKeys([searchString]);
    await this.triggerSearch();

    // Search works only with android app.
    //on IOS search does not work so this below is skipped for ios
    if (driver.isAndroid) {
      await this.searchGallery.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
      const images = await this.searchImages;
      await images.waitForDisplayed();
    }
  }

  /**
   * Get search result text
   */

  async getSearchResultsTitles() {
    let titles = [];
    //Search does not result in any item on IOS so skipping that
    if (driver.isAndroid) {
      const imageTitles = await this.searchImagesTitles;
      await imageTitles[0].waitForDisplayed();
      for (const img of imageTitles) {
        const txt = await img.getText();
        titles.push(txt);
      }
    }
    return titles;
  }
}

export default new HomeScreen();
