import Enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { PokemonList, mapStateToProps,mapDispatchProps }from "../components/pokemonList";
import configureMockStore from "redux-mock-store";
import getAbilities from "../actions/action";
import { Dropdown } from "bootstrap";
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});
describe("Select Buttons for displaying Pokemon and abilities",()=>{

    const getAbilities = function(){
    };
    let props = {
        Content: {
          heading: "Select Ability based on Pokemon",
          label2: "Select Ability",
          label1: "Select Pokemon",
          label3: 'EDIT',
          label4: 'DELETE',
        },
        Content:{
         
        regions:[ {
            "ability":
            {
            "name": "charmeleon",
          }
          }
        ]},
        setAbility:fn=>fn,
        getAbilities:fn=>fn,
        handleClose:fn=>fn,
        error:true,
    }
    it( "render the title", () => {
        const wrapper = shallow(
            
            
                    <PokemonList {...props}/>
            
        );
        
        console.log(wrapper.find('PokemonList').debug());
        expect(wrapper.find('.component .dropdown #label1').text()).toBe(' Select Name: ')
        expect(wrapper.find('.component .dropdown #label2').text()).toBe(' Select Abilities: ')
        
    })

    it( "render the title",()=>{
    
        const wrapper = shallow(
            <PokemonList {...props}/>
        );
        const element = wrapper.find('CommonDropDown');
        expect(element.length).toBe(2);
       
    })
})