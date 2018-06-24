export class Case {
    id: number;
    title: string;

    constructor(params?: any) {
        if (params) {
            this.title = params.title;
        }
    }
}
