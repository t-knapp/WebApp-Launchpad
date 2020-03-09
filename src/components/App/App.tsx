import { ReactElement} from 'react';
import React from 'react';
import emoji from '../../../assets/images/10-denker-rcm600x0.jpg';
import './App.less';
import IMelderViewModel from '../../domain/viewmodels/IMelderViewModel';

type Props = {
    title: string,
    viewModel: IMelderViewModel
};

export default function App(props: Props): ReactElement {
    return (
        <div className='AppComponent'>
            <h1>{props.title}</h1>
            <h2>{props.viewModel.name}</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h2>Das Gefüge der Katastrophen</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet?
                <img src={emoji} width={18} height={18} alt={'Emoji nachdenklich'} />
            </p>
        </div>
    );
}
