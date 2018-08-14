import express from 'express';
import cors from 'cors';
import { ArticleController } from './controllers/article.controller';
import { CategoryController } from './controllers/category.controller';

const port = 3000;
const app = express();
const articleController = new ArticleController();
const categoryController = new CategoryController();

app.use(cors());
app.get(
    '/articles',
    articleController.getArticles
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
