import { injectable } from 'inversify';
import { Article } from '../models/Article';
import { articles } from '../data/articles';
import { IArticleService } from './article.service.interface';

@injectable()
export class ArticleService implements IArticleService {
    getArticles(): Article[] {
        return articles;
    }

    getArticleById(id: number): Article {
        return articles.find(article => article.id == id);
    }

    deleteArticle(id: number): void {
        const index = articles.findIndex(article => article.id == id);
        articles.splice(index, 1);
    }
}