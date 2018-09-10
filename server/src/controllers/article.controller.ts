import { Request, Response } from 'express';
import { IArticleService } from '../interfaces/article.service.interface';

export class ArticleController {
    private _articleService: IArticleService;

    constructor(articleService: IArticleService) {
        this._articleService = articleService;
    }

    getArticles(req: Request, res: Response): void {
        const articles = this._articleService.getArticles();
        res.send(articles);
    }

    createArticle(req: Request, res: Response): void {
        console.log('create article');
        res.status(201).end();
    }

    getArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        console.log('get this article:', articleId);
        res.send(articleId);
    }

    updateArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        console.log('update this article:', articleId);
        res.send(articleId);
    }

    deleteArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        console.log('delete this article:', articleId);
        res.status(204).end();
    }
}