import { ApplicationContext } from "../context/application.context.js";
import { ParsingService } from "../service/parsing.service.js";

const applicationContext = new ApplicationContext();
const parsingService = new ParsingService();

export { parsingService as ParsingService, applicationContext as ApplicationContext };