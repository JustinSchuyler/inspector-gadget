import moment from 'moment';
import { Article } from '../models/article';

export const articles = [
    new Article({
        id: 1,
        category: 'Remittances',
        tags: [
            'Remittance',
            'Allocation'
        ],
        title: 'Remittances not allocating',
        date: moment(),
        symptoms: [
            'Can not allocate remittances'
        ],
        rootCause: 'Uncaught exception',
        fixDescription: 'To fix, catch the exception',
        fixSteps: '1. Catch the exception',
        diagnosisSteps: 'SELECT * FROM Remittance',
        ticketURLs: 'http://x.com'
    })
]