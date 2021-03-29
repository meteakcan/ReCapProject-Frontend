import { CarDetails } from "./cardetails";
import { ResponseModel } from "./responseModel";

export interface CarDetailsResponseModel extends ResponseModel{data:CarDetails[]}