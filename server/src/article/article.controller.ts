import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { IArticleController } from './article.controller.interface';
import { IArticleService } from './article.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';
import { Article } from '../models/article';

@injectable()
export class ArticleController implements IArticleController {
    @inject(SERVICE_IDENTIFIER.IARTICLE_SERVICE) private _articleService: IArticleService;

    getArticles(req: Request, res: Response): void {
        const articles = this._articleService.getArticles(req.query.symptoms);
        console.log('search:', req.query);
        res.json(articles);
    }

    createArticle(req: Request, res: Response): void {
        console.log('create article');
        res.status(201).end();
    }

    getArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        const article = this._articleService.getArticleById(articleId);
        res.send(article);
    }

    updateArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        const updatedArticle = req.body as Article;
        this._articleService.updateArticle(articleId, updatedArticle);
        res.send();
    }

    deleteArticleById(req: Request, res: Response): void {
        const articleId = req.params.id;
        this._articleService.deleteArticle(articleId);
        res.status(204).end();
    }
}