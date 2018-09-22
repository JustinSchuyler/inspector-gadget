import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { IArticleController } from './article.controller.interface';
import { IArticleService } from './article.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';

@injectable()
export class ArticleController implements IArticleController {
    @inject(SERVICE_IDENTIFIER.IARTICLE_SERVICE) private _articleService: IArticleService;

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
        const article = this._articleService.getArticleById(articleId);
        res.send(article);
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