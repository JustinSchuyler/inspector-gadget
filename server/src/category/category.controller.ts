import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { ICategoryController } from './category.controller.interface';
import { ICategoryService } from './category.service.interface';
import SERVICE_IDENTIFIER from '../constants/identifiers';

@injectable()
export class CategoryController implements ICategoryController {
    @inject(SERVICE_IDENTIFIER.ICATEGORY_SERVICE) private _categoryService: ICategoryService;

    getCategories(req: Request, res: Response): void {
        const categories = this._categoryService.getCategories();
        res.send(categories);
    }
}