import React from 'react';
import {boundMethod} from 'autobind-decorator';
import './Menu.less';

type Props = { };

type State = {
    collapsed: boolean
};

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    @boundMethod
    private _toggle(): void {
        this.setState({collapsed: !this.state.collapsed});
    }

    @boundMethod
    private async _getConfig(): Promise<void> {
        const response = await fetch('config.json');
        console.log(await response.json());
    }

    public render(): React.ReactElement {
        return (
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li onClick={this._getConfig}>Config</li>
                </ul>
            </div>
        );
    }
}
