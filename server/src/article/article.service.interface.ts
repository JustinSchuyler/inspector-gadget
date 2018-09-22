import { Article } from '../models/article';

export interface IArticleService {
    getArticles(): Article[];
    getArticleById(id: number): Article;
    deleteArticle(id: number): void;
}