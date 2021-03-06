import * as moment from 'moment';

import { Article } from './shared/models/article';

export const ARTICLES: Article[] = [
    {   id: 1,
        category: 'test category',
        tags: ['test1', 'test2', 'test3'],
        title: 'Patient Ledger Imbalance',
        date: moment(),
        symptoms: ['test1', 'test2', 'test3'],
        rootCause: 'Lorem ipsum dolor sit amet cause',
        fixDescription: 'Lorem ipsum dolor sit amet description',
        fixSteps: 'Lorem ipsum dolor sit amet steps',
        diagnosisSteps: 'Lorem ipsum dolor sit amet diagnosis',
        ticketURLs: ['www.google.com', 'www.facebook.com'],
        author: 'kev',
        isVerified: true
    },

    {
        id: 2,
        category: 'Remittance',
        tags: ['tag1', 'tag2', 'tag3'],
        title: 'Reallocation Error',
        date: moment(),
        symptoms: ['sypmtom man', 'more symptoms', 'yet again mas sypmtons'],
        rootCause: 'Lorem ipsum dolor sit amet cause',
        fixDescription: 'Lorem ipsum dolor sit amet description',
        fixSteps: 'Lorem ipsum dolor sit amet steps',
        diagnosisSteps: 'Lorem ipsum dolor sit amet diagnosis',
        ticketURLs: ['www.gmail.com', 'www.youtube.com'],
        author: 'j-dawg',
        isVerified: false
    }
];
