import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import container from './config/ioc_config';
import SERVICE_IDENTIFIER from './constants/identifiers';
import { IArticleController } from './article/article.controller.interface';
import { ICategoryController } from './category/category.controller.interface';

const port = 3000;
const app = express();
const articleController = container.get<IArticleController>(SERVICE_IDENTIFIER.IARTICLE_CONTROLLER);
const categoryController = container.get<ICategoryController>(SERVICE_IDENTIFIER.ICATEGORY_CONTROLLER);

app.use(cors());
app.use(bodyParser.json());
app.get(
    '/articles',
    articleController.getArticles.bind(articleController)
);
app.post(
    '/articles',
    articleController.createArticle.bind(articleController)
);
app.get(
    '/articles/:id',
    articleController.getArticleById.bind(articleController)
);
app.put(
    '/articles/:id',
    articleController.updateArticleById.bind(articleController)
);
app.delete(
    '/articles/:id',
    articleController.deleteArticleById.bind(articleController)
);
app.get(
    '/categories',
    categoryController.getCategories.bind(categoryController)
);

app.listen(port, () => console.log(`API running on port ${port}`));
