import * as moment from 'moment';

export class Case {
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

    constructor(params?: any) {
        
    }
}
