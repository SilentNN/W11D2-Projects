import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store'
import { selectAllPokemon } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
    
    const store = configureStore()

    // testing
    window.fetchAllPokemon = fetchAllPokemon; 
    window.receiveAllPokemon = receiveAllPokemon;
    window.store = store
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    // window.pokemonReducer = pokemonReducer;
    // testing

    const root = document.getElementById('root');
    ReactDOM.render(
        <h2>
            pokemon
        </h2>
        ,root
    )
})