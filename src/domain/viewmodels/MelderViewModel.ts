import IMelderViewModel from './IMelderViewModel';
import {action, observable} from 'mobx';

export default class MelderViewModel implements IMelderViewModel {

    @observable
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @action
    public setName(state: string): void {
        this.name = state;
    }
}
