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
        ticketURLs: 'http://x.com',
        enhancementLink: 'http://hi.com'
    }),
    new Article({
        id: 2,
        category: 'Ledger',
        tags: [
            'Ledger',
            'Payments'
        ],
        title: 'Payments Missing',
        date: moment(),
        symptoms: [
            'A payment does not show on the ledger'
        ],
        rootCause: 'Uncaught exception',
        fixDescription: 'To fix, catch the exception',
        fixSteps: '1. Catch the exception',
        diagnosisSteps: 'SELECT * FROM Payment',
        ticketURLs: 'http://y.com'
    })
]