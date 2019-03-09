import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import RecipeItem from './RecipeItem'
import Navbar from './Navbar'

const minProps = {
    value: '',
    onchangeInput: () => { },
};

describe('App', () => {
    test('Should be App', () => {
        const wrapper = mount(<App />);
        expect(wrapper.is('App')).toBeTruthy();
    })

    test('Should be state', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('searchString')).toEqual('');
    })

    test('Should be nav', () => {
        const wrapper = shallow(<Navbar {...minProps} />);
        expect(wrapper.length).toEqual(1);
    })

    test('Should be RecipeItem', () => {
        const wrapper = shallow(<RecipeItem />);
        expect(wrapper.length).toEqual(1);
    })

    test('Should be Itens', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('recipes').length).toEqual(20);
    })    
})
