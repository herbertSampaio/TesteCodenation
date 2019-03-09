import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      recipes: []
    };
  }

  componentDidMount() {
    this.setState({ recipes: this.recipes });
  }

  onchangeInputNav = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: e.target.value });

    this.onChange(value);
  }

  onChange(value) {
    const recipesFilter = this.recipes.filter(x =>
      x.title.toLowerCase().includes(value) ||
      x.ingredients.toLowerCase().includes(value)
    );

    this.setState({ recipes: recipesFilter });
  }

  render() {
    return (
      <div className="App">
        <Navbar value={this.state.searchString} onchangeInput={this.onchangeInputNav} />
        <div className="container mt-10">
          <div className="row">
            {
              this.state.recipes.map(item => (
                <RecipeItem
                  item={item}
                  key={item.indice}
                  textSearch={this.state.searchString.toLowerCase()}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
