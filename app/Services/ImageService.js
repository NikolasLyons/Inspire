import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"





class ImageService{

  async getImage(){

    const res = await sandboxApi.get('images')
      console.log(res.data)
      ProxyState.image = new Image(res.data)
  }

}

export const imageService = new ImageService()