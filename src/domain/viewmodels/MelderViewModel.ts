import IMelderViewModel from './IMelderViewModel';

export default class MelderViewModel implements IMelderViewModel {
    public readonly name: string;

    private _state: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public setState(state: boolean): void {
        this._state = state;
    }

    public get state(): boolean {
        return this._state;
    }
}
