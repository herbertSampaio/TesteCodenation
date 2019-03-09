import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

describe("<RecipeItem/>", () => {
    it("should be render the <RecipeItem /> component without breaking", () => {
        const searchResults = {
            results: [
                {
                    indice: 3,
                    title: "Succulent Pork Roast",
                    href: "http:\/\/allrecipes.com\/Recipe\/Succulent-Pork-Roast\/Detail.aspx",
                    ingredients: "brown sugar, garlic, pork chops, water",
                    thumbnail: "http:\/\/img.recipepuppy.com\/4.jpg"
                }
            ]
        };
        const searchString = "pork";

        const wrapper = mount(
            <RecipeItem
                searchResults={searchResults.results}
                searchString={searchString}
            />

        );
        expect(wrapper.is("RecipeItem")).toBeTruthy();
        wrapper.unmount();
    });
});
