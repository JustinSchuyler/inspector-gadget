import * as moment from 'moment';

export class Article {
    id: number;
    category: string;
    tags: Array<string>;
    title: string;
    date: moment.Moment;
    symptoms: Array<string>;
    rootCause: string;
    fixDescription: string;
    fixSteps: string;
    diagnosisSteps: string;
    ticketURLs: Array<string>;
    numTicketLinks: number;
    enhancementLink: string;
    scriptNeeded: boolean;
    resolved: boolean;

    constructor(params: any) {
        Object.assign(this, params);
    }
}
