import React from 'react';
import { shallow, mount ,configure} from 'enzyme';
import Routes from '../App';
import { Route } from 'react-router-dom';
import PokemonList from '../components/pokemonList';
import Todo from '../components/Todo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


// import Poki from './Poki/components/Poki';
// import TodoApp from './Todonew/TodoApp';
configure({adapter: new Adapter()});



let pathMap = {};

describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })

  it('should show PokemonList component', () => {
    expect(pathMap['/PokemonList']).toBe(PokemonList);
  })
  it('should show Todo component', () => {
    expect(pathMap['/Todo']).toBe(Todo);
  })
})