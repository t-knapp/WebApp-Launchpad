/////////////////////////////////////////////////////////////////////////////////
// This script runs immediately after the jest-testing-framework is initialized.
/////////////////////////////////////////////////////////////////////////////////

import {} from 'jest-enzyme';

// set global variable "lang"
import lang from '../src/js/i18n/lang/lang.de.js';
global.lang = lang;

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

global.console.internal = global.console.log;

global.fetch = require('jest-fetch-mock');
