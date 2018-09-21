import 'reflect-metadata';
import { Container } from 'inversify';

import { ArticleController } from '../article/article.controller';
import { IArticleController } from '../article/article.controller.interface';
import { ArticleService } from '../article/article.service';
import { IArticleService } from '../article/article.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';

let container = new Container();

container.bind<IArticleController>(SERVICE_IDENTIFIER.IARTICLE_CONTROLLER).to(ArticleController);
container.bind<IArticleService>(SERVICE_IDENTIFIER.IARTICLE_SERVICE).to(ArticleService);

export default container;