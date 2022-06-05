import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

import { Pop } from "../Utils/Pop.js"




function _drawImages(){
  let image = ProxyState.image
  document.body.style.backgroundImage = `url("${image.image}")`
  document.getElementById('imagequery').innerText = `"${image.query}"`


}
export class ImageController{
  constructor(){
    console.log('we got the image')
    ProxyState.on('image',_drawImages)
    this.getImage()
  }
  async getImage(){
    try {
      await imageService.getImage()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      
    }

  }
}