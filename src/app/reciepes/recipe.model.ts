import { Ingredians } from '../shared/ingredians.modal';

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients: Ingredians[];

    constructor(name:string, desc:string, imagePath:string, ingredients: Ingredians[])
    {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}