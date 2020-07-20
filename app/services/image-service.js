import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

class ImageService {
  getBackGroundImage(){
    imgApi.get().then(res =>{
      store.commit("backgroundURL",res.data.url);
    }).catch(err => console.error(err))
  }
}
const imageService = new ImageService();
export default imageService;
