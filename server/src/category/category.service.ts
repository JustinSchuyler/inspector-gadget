import { injectable } from 'inversify';
import { ICategoryService } from './category.service.interface';
import { categories } from '../data/categories';

@injectable()
export class CategoryService implements ICategoryService {
    getCategories(): string[] {
        return categories;
    }
}