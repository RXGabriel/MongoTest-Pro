import { Request, Response } from 'express';
import { Product } from '../models/Product';
import UserModel from '../models/User';

export const home = async (req: Request, res: Response) => {
    let newUser = new UserModel()
    newUser.name = {
        firstName: 'André',
        lastName: 'Lacerda'
    }
    newUser.email = 'andre@Lc.org'
    newUser.age = 45
    newUser.interests = ['programação', 'anime']
    let resultado = await newUser.save()
    console.log("NEW USER", resultado)


    let newUserr = await UserModel.create({
        name: {
            firstName: 'Monaliza',
            lastName: 'Lacerda'
        },
        email: 'mona@paris.org',
        age: 90,
        interests: ['arte','musica']
    })
    console.log("NEW USER", newUserr);

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render('pages/home', {
    name: 'Bonieky',
    lastName: 'Lacerda',
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: []
  });
};
