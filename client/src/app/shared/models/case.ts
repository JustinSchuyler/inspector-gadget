export class Case {
    title: string;

    constructor(params?: any) {
        if (params) {
            this.title = params.title;
        }
    }
}
