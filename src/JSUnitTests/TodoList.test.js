import { shallow } from 'enzyme';
import Enzyme from'enzyme';
import List from '../components/TodoList'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 Enzyme.configure({adapter: new Adapter()});

 describe("List", () => {
  let props ={
    data:[{key: undefined, name: ""}],
    Demo : {
      heading:"ToDo List",
      enter:"Enter your Task",
      addButtonText:"Add",
      editButtonText:"Edit",
      deleteButtonText:"Delete",
      popupCancel:"Cancel",
      popupSave:"Save",
      popupHeading:"Edit"
    }
 }
 it('renders List component', () => {
    const wrapper = shallow(<List {...props}/>);
    expect(wrapper.find(".Todo").exists()).toBe(true);
 });
 it('renders App components and checks for false case', () => {
    const wrapper = shallow(<List {...props}/>);
    expect(wrapper.find(".TodoList1").exists()).toBe(false);
 });
 it('should call deleteItem method', () =>
 {
     const value = {
         target:{
             value:[]
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.setState({
         
        data:[{key:"shan"}]
    })
     wrapper.instance().deleteItem(value);
     expect(wrapper.state('data')).toEqual([{key:"shan"}]);
 });
 
 it('should call saveDetails method', () =>
 {
     const value = {
         target:{
         
            value:[]
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.instance().saveDetails(value);
     expect(wrapper.state('data')).toEqual([{key: undefined, name: ""}]);
     wrapper.setState({
         
        data:[{key:0}]
    })
    wrapper.instance().saveDetails(value);
    expect(wrapper.state('key')).toBe(0)
 });
 
 it('should call editItem method', () =>
 {
     const value = {
         target:{
             value:"item"
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.instance().editItem(value);
     expect(wrapper.state('requiredItem')).toEqual(value);
 });
 
 it('renders edit button for handleoncreate', () => {
    const wrapper = shallow(<List {...props} />);
    wrapper.find(`[id="edit"]`).simulate('click', {target: {requiredItem: "Hello Added"}});
    expect(wrapper.exists()).toBe(true)
  });
  
  it('renders delete button for handleoncreate', () => {
    const wrapper = shallow(<List {...props} />);
    wrapper.find(`[id="delete"]`).simulate('click', {target: {data: "Hello Added"}});
    expect(wrapper.exists()).toBe(true)
  });
});
