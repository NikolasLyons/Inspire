


export class Image{
  constructor(data){
    this.image = data.largeImgUrl
    this.name = data.author
    this.query = data.query
    this.tags = data.tags
  }

}