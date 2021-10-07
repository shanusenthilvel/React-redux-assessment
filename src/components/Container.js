import { connect } from 'react-redux';
import PokemonApp from '../components/PokemonApp';
 
export const mapStateToProps = state => ({
  getSelectedValue: state.event.selectValue,
});
 
const Container = connect(mapStateToProps)(PokemonApp);
 
export default Container;