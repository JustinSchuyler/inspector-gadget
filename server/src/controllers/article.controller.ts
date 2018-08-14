import { Request, Response } from 'express';

export class ArticleController {
    getArticles(req: Request, res: Response): void {
        console.log('get all articles');
        res.send([123, 456, 789]);
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