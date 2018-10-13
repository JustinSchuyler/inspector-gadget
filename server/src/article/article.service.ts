import { injectable } from 'inversify';
import { Article } from '../models/Article';
import { articles } from '../data/articles';
import { IArticleService } from './article.service.interface';

@injectable()
export class ArticleService implements IArticleService {
    getArticles(query: string): Article[] {
        if (!query) {
            return articles;
        }
        else {
            const queryRegex = new RegExp(query, 'i');
            return articles.filter(article => {
                return queryRegex.test(article.title) ||
                        queryRegex.test(article.fixDescription);
            });
        }
    }

    getArticleById(id: number): Article {
        return articles.find(article => article.id == id);
    }

    deleteArticle(id: number): void {
        const index = articles.findIndex(article => article.id == id);
        articles.splice(index, 1);
    }

    updateArticle(id: number, updatedArticle: Article): void {
        let article = articles.find(article => article.id == id);
        Object.assign(article, updatedArticle);
    }
}