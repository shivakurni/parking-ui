import React from 'react';
import { shallow} from 'enzyme';
import Login from '../login/login';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Login/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render email field', ()=> {
        expect(wrapper.find('#email')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#password')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on email field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().formData.email).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().formData.password).toEqual('');
          });
      });

      describe('When onChange event triggered on email field', () => {
        beforeEach(() => {
          const email = wrapper.find('#email');
          email.simulate('change', { target: { name:'email',value: 'mpl@gmail.com' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().formData.wmail).toEqual('lakshmi');
        })
      });
   
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const password = wrapper.find('#password');
          password.simulate('change', { target: {name:'password', value: 'divya@123' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().formData.password).toEqual('divya@123');
        })
      });

      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#email').simulate('change', { target: {name:'email', value: 'mpl@gmail.com' } });
          wrapper.find('#password').simulate('change', { target: { name:'password',value: 'lakshmi' } });
   
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn');
          submit.simulate('click', fakeEvent);
        });
   
        it('should have excepted email', () => {
          expect(wrapper.state().formData.email).toEqual('mpl@gmail.com');
        });
   
        it('should have excepted Password', () => {
          expect(wrapper.state().formData.password).toEqual('lakshmi');
        });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Login />);
          const spy = jest.spyOn(comp.instance(), 'handleSubmit');
          comp.instance().forceUpdate();
          comp.find('#btn').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});