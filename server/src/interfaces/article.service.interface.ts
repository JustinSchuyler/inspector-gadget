import { Article } from '../models/article';

export interface IArticleService {
    getArticles(): Article[];
}