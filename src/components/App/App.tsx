import { ReactElement} from 'react';
import React from 'react';
import './App.less';
import Menu from '../Menu/Menu';

type Props = {
    title: string
};

export default function App(props: Props): ReactElement {
    return (
        <div className='app'>
            <Menu />
        </div>
    );
}
