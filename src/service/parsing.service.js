export class ParsingService {
  constructor() {
    if (ParsingService.instance) return ParsingService.instance;
    else ParsingService.instance = this;
  }



  parsingData(data){
    console.log(data.toString());
    throw new Error("Method not implemented.");
  }

  


}
