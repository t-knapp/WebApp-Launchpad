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

    public render(): React.ReactElement {
        return (
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>Disclaimer</li>
                </ul>
            </div>
        );
    }
}
