import { Article } from '../models/Article';
import { articles } from '../data/articles';
import { IArticleService } from '../interfaces/article.service.interface';

export class ArticleService implements IArticleService {
    getArticles(): Article[] {
        return articles;
    }
}