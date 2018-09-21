import 'reflect-metadata';
import { Container } from 'inversify';

import { ArticleController } from '../controllers/article.controller';
import { IArticleController } from '../interfaces/article.controller.interface';
import { ArticleService } from '../services/article.service';
import { IArticleService } from '../interfaces/article.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';

let container = new Container();

container.bind<IArticleController>(SERVICE_IDENTIFIER.IARTICLE_CONTROLLER).to(ArticleController);
container.bind<IArticleService>(SERVICE_IDENTIFIER.IARTICLE_SERVICE).to(ArticleService);

export default container;