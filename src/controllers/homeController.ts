import { Request, Response } from 'express';
import { Product } from '../models/Product';
import UserModel from '../models/User';

export const home = async (req: Request, res: Response) => {
  let users = await UserModel.find({
    age: { $gt: 18 }
  }).sort({ "name.firstName": 1, "name.lastName": 1 }).skip(0)
  .limit(2);
  console.log("Users", users);

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
    users,
    products: list,
    expensives: expensiveList,
    frasesDoDia: []
  });
};
