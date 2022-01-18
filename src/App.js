import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/Pokemon/PokemonForm';
import PokemonInfo from './components/Pokemon/PokemonInfo';

// import { nanoid } from 'nanoid';

// import Form from './components/Form';

// import Clock from './components/Clock';

// import Tabs from './components/Tabs';
// import tabs from './tabs.json';

// import ColorPicker from './components/ColorPicker/ColorPicker';
// import colorPickerOptions from './colorPickerOptions.json';

// import Counter from './components/Counter';

// import Dropdown from './components/Dropdown';

class App extends Component {
  state = {
    pokemonName: '',
  };

  hendleFormSubmit = pokemonName => {
    console.log(pokemonName);
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <div>
          {/* <Clock /> */}
          {/* <Tabs items={tabs} /> */}
          {/* <ColorPicker options={colorPickerOptions} /> */}
          {/* <Counter initialValue={10} /> */}
          {/* <Dropdown /> */}
          {/* <Form /> */}
        </div>
        <div style={{ maxWidth: 1170, margin: '0 avto', padding: 20 }}>
          <PokemonForm onSubmit={this.hendleFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName} />
          <ToastContainer autoClose={3000} theme="colored" />
        </div>
      </>
    );
  }
}

export default App;
