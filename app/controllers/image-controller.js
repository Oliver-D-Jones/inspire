import ImageService from "../services/image-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawBackground() {
  document.body.style.backgroundImage = `url("${store.State.backgroundURL}")`;
}
export default class ImageController {
  constructor() {
    store.subscribe("backgroundURL", _drawBackground)
    this.getBackGroundImage();
  }
  getBackGroundImage() {
    ImageService.getBackGroundImage();
    let timer = setInterval(this.getBackGroundImage,1000*60*10);
  }
}
