import 'reflect-metadata';
import { Container } from 'inversify';

import { ArticleController } from '../article/article.controller';
import { IArticleController } from '../article/article.controller.interface';
import { ArticleService } from '../article/article.service';
import { IArticleService } from '../article/article.service.interface';
import { CategoryController } from '../category/category.controller';
import { ICategoryController } from '../category/category.controller.interface';
import { CategoryService } from '../category/category.service';
import { ICategoryService } from '../category/category.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';

let container = new Container();

container.bind<IArticleController>(SERVICE_IDENTIFIER.IARTICLE_CONTROLLER).to(ArticleController);
container.bind<IArticleService>(SERVICE_IDENTIFIER.IARTICLE_SERVICE).to(ArticleService);
container.bind<ICategoryController>(SERVICE_IDENTIFIER.ICATEGORY_CONTROLLER).to(CategoryController);
container.bind<ICategoryService>(SERVICE_IDENTIFIER.ICATEGORY_SERVICE).to(CategoryService);

export default container;