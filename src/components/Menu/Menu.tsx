import React, {ChangeEvent} from 'react';
import {boundMethod} from 'autobind-decorator';
import IMelderViewModel from '../../domain/viewmodels/IMelderViewModel';

type Props = {
    tile: string,
    viewModel: IMelderViewModel
};

type State = {
    toggled: boolean,
    value: string
};

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            toggled: false,
            value: ''
        };
    }

    @boundMethod
    private _toggle(): void {
        this.setState({toggled: !this.state.toggled});
    }

    @boundMethod
    private _inputChanged(event: ChangeEvent<HTMLInputElement>): void {
        this.props.viewModel.setName(event.currentTarget.value);
    }

    public render(): React.ReactElement {
        return (
            <div>
                <p>{this.props.tile}</p>
                <p>{this.state.toggled ? 'Toggled' : 'NotToggled'}</p>
                <button onClick={this._toggle} >Toggle</button>
                <input type={'text'} onChange={this._inputChanged}/>
                <p>Value: {this.state.value}</p>
                <p>ViewModel Name: {this.props.viewModel.name}</p>
            </div>
        );
    }
}
