import TestRenderer, {ReactTestRenderer} from 'react-test-renderer';
import React from 'react';
import App from '../App';
import MelderViewModel from '../../../domain/viewmodels/MelderViewModel';

describe('AppComponent', () => {
    describe('render', () => {
        test('should render default', () => {
            const component: ReactTestRenderer = TestRenderer.create(<App viewModel={new MelderViewModel('')} title={'Hallo Welt.'}/>);
            expect(component.toJSON()).toMatchSnapshot();
        });

        test('should render warning state', () => {
            // TODO:
        });

        test('', () => {

        });
    });

    describe('interactions', () => {
        test('should call xyz when click on abc', async (done) => {
            done();
        });
    });
});
