import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component{
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ characters: users }));
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value});     
  }
  
  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
      )
   return (
     <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search characters'
        handleChange={this.handleChange}
      />
      <CardList characters={filteredCharacters} />
     </div>
   );
  }
}

export default App;
