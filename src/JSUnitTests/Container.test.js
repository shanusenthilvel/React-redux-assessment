import {mapStateToProps} from "../components/Container";
 
describe("App Container",() => {
    
    it(" mapstatetoprops ", () => {
        const INITIAL_STATE = {
            event : { 
            selectValue: '3',
            error : null,          
          }};  
        expect(mapStateToProps(INITIAL_STATE).getSelectedValue).toEqual('3');
    });
    it(" mapstatetoprops ", () => {
        const INITIAL_STATE = {
            event : {
                selectValue : null
            }
        } ;       
        expect(mapStateToProps(INITIAL_STATE).selectValue).toBeNull;
    });
})