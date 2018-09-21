import { Request, Response } from 'express';

export interface IArticleController {
    getArticles(req: Request, res: Response): void;
    createArticle(req: Request, res: Response): void;
    getArticleById(req: Request, res: Response): void;
    updateArticleById(req: Request, res: Response): void;
    deleteArticleById(req: Request, res: Response): void;
}