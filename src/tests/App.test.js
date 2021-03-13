import React from 'react';
import { mount, shallow } from '../enzyme';
import { Link } from 'react-router-dom';
import { CovenantDetails } from '../components/covenantDetails';

describe('CovenantDetails', () => {
    it('renders covenant details', () => {
        const wrapper = shallow(<CovenantDetails />);

        expect(wrapper.contains(<Link to={`/`}>Go back</Link>)).toBeTruthy();
    });
})