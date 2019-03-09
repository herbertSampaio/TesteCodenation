import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('Should be App', () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper.is('Navbar')).toBeTruthy();
    })

    test('Should be nav', () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper.find('.form-group input').length).toEqual(1);
    })
})
