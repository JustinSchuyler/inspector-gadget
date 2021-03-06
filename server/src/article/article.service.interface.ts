import { Article } from '../models/article';

export interface IArticleService {
    getArticles(query: string): Article[];
    getArticleById(id: number): Article;
    deleteArticle(id: number): void;
    updateArticle(id: number, updatedArticle: Article): void;
}