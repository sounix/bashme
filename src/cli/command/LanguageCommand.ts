import { Language } from '../../resume/properties';
import { Command } from '.';

export class LanguageCommand implements Command<Language> {

    private language: Array<Language>;

    public name: string = 'languages';
    public description: string = 'Shows languages';

    constructor(language: Array<Language>) {
        this.language = language;
    }

    run(): Array<Language> {
        return this.language;
    }

}