import * as Parser from 'parser';
import { DIVTokenizer } from './DIVTokenizer';

export class DIVParser extends Parser {
    constructor() {
        super();
        super.apply(this, new DIVTokenizer());
    }
}
