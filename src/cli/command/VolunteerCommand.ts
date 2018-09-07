import { Volunteer } from '../../resume/properties';
import { arrayToAsciiTable } from '../util';
import { Command } from '.';

export class VolunteerCommand implements Command<Volunteer> {

    private volunteer: Array<Volunteer>;

    public name: string = 'volunteer';
    public description: string = 'Shows volunteer';

    constructor(volunteer: Array<Volunteer>) {
        this.volunteer = volunteer;
    }

    run(): string {
        return arrayToAsciiTable(this.volunteer);
    }

}