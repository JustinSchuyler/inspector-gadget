import { Request, Response } from 'express';

export class CategoryController {
    getCategories(req: Request, res: Response): void {
        console.log('get all categories');
        res.send(['Remittances', 'Ledger', 'Payment Plan']);
    }
}