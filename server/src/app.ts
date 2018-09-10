import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
import { CategoryController } from './controllers/category.controller';

const port = 3000;
const app = express();
const articleService = new ArticleService();
const articleController = new ArticleController(articleService);
const categoryController = new CategoryController();

app.use(cors());
app.use(bodyParser.json());
app.get(
    '/articles',
    articleController.getArticles.bind(articleController)
);
app.post(
    '/articles',
    articleController.createArticle
);
app.get(
    '/articles/:id',
    articleController.getArticleById
);
app.put(
    '/articles/:id',
    articleController.updateArticleById
);
app.delete(
    '/articles/:id',
    articleController.deleteArticleById
);
app.get(
    '/categories',
    categoryController.getCategories
);

app.listen(port, () => console.log(`API running on port ${port}`));
