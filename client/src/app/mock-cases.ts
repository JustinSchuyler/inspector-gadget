import * as moment from 'moment';

import { Case } from './shared/models/case';

export const CASES: Case[] = [
    {   id: 1,
        category: 'test',
        tags: ['test1', 'test2', 'test3'],
        title: 'Patient Ledger Imbalance',
        date: moment(),
        symptoms: ['test1', 'test2', 'test3'],
        rootCause: 'Lorem ipsum dolor sit amet',
        fixDescription: 'Lorem ipsum dolor sit amet',
        fixSteps: 'Lorem ipsum dolor sit amet',
        diagnosisSteps: 'Lorem ipsum dolor sit amet',
        ticketURL: ['www.google.com', 'www.facebook.com'] },
]


