import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import ACTION_TYPES from  '../actions/actionTypes';
import MockAdapter from 'axios-mock-adapter';
import getAbilities from '../actions/action'
import { error } from 'jquery';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);


describe('getAbilities actions', () => {
    beforeEach(() => {
        store.clearActions();
      });
      const store = mockStore();
      store.dispatch(getAbilities());
    const payload = [{name: "blaze" ,type:"solar-power"}]
    it('dispatches getAbilities after a successful API requets', () => {
        mock.onGet("https://pokeapi.co/api/v2/pokemon/charmeleon").reply(200, payload )
        
         return store.dispatch(getAbilities("charmeleon")).then(() => {
             
            let expectedActions =              
                {
                    type: ACTION_TYPES.FETCH_SUCCESS,
                    payload: undefined
                }
           
            expect(store.getActions()[0]).toEqual(expectedActions)
            
            });
              
    });
    // it('dispatches getAbilities after a successful API requets', () => {
    //     mock.onGet("https://shan.com").reply(400,  error ); 
        
    //      return store.dispatch(getAbilities("charmeleon")).then(() => {
             
    //         let expectedActions =              
    //             {
    //                 type: ACTION_TYPES.FETCH_FAIL,
    //                 payload: error.Message
    //             }
           
    //         expect(store.getActions()[0]).toEqual(expectedActions)
            
    //         }); 
    //     });

})
 

