import { Request, Response } from 'express';
import UserModel from '../models/User';

export const home = async (req: Request, res: Response) => {
  await UserModel.findByIdAndDelete(
    {email: 'suporteGabriel@gmail.com'}
  )

   let users = await UserModel.find({}).sort({"name.firstName": 1});

   res.render('pages/home', {
     users 
    });
};
