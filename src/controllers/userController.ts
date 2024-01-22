import { Request, Response } from 'express';
import UserModel from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addUserAction = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, age, interests } = req.body;
  
      if (!firstName || !email || !age) {
        return res.status(400).send('Campos obrigatórios não preenchidos.');
      }
  
      const newUser = new UserModel({
        name: {
          firstName,
          lastName,
        },
        email,
        age,
        interests: interests ? interests.split(',').map((interest: string) => interest.trim()) : [],
      });

      await newUser.save();
      return res.redirect('/');
  
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error);
      return res.status(500).send('Erro interno do servidor.');
    }
  };