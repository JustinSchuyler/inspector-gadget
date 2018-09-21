import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import container from './config/ioc_config';
import SERVICE_IDENTIFIER from './constants/identifiers';
import { IArticleController } from './article/article.controller.interface';
import { CategoryController } from './category/category.controller';

const port = 3000;
const app = express();
const articleController = container.get<IArticleController>(SERVICE_IDENTIFIER.IARTICLE_CONTROLLER);
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
