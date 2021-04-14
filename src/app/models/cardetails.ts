import { CarImage } from "./carImage";

export interface CarDetails{
    carId:number,
    model:string,
    brandName:string,
    colorName:string,
    modelYear:number,
    price:number,
    description:string,
    imagePath:string,
    carImage:CarImage[]
}