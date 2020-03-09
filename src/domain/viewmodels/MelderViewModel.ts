import IMelderViewModel from './IMelderViewModel';
import {action, observable} from 'mobx';

export default class MelderViewModel implements IMelderViewModel {

    @observable
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @action
    public async setName(state: string): void {
        this.name = state;

        try {
            const file = await openFile();
            const fileContent = await readFile(file);

        } catch (ex) {
            dasdasd
        }




        console.error(fileContent);



        return;
    }
}
