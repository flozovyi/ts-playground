import React from 'react';
import sinon from 'sinon';
import {mount, configure} from 'enzyme';
import {createStore} from 'redux';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../../reducers';
import Counter from '../Counter';


configure({adapter: new Adapter()});


describe('Counter', function () {
    let el, store, clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        store = createStore(reducers);
        const props = {
            count:0,
            increment: () => {
            },
            decrement: () => {
            }
        };

        sinon.spy(Counter.Counter.prototype, 'onIncrement');
        el = mount(<Counter props={{...props}}/>);
    });
    it('store should match snapshot', () => {
        expect(store).toMatchSnapshot();
    });

    it('should render with initial value of 0', function () {
        expect(el.find('h3').text()).toBe('0');
    });

    it('should contain 1 h3 element and 2 buttons with classes "increment" and "decrement"', function () {

        expect(el.find('h3')).toHaveLength(1);
        expect(el.find('button')).toHaveLength(2);
        expect(el.find('.increment')).toHaveLength(1);
        expect(el.find('.decrement')).toHaveLength(1);

    });

    it('should increment when "+" button pressed', function () {

        expect(el.find('span').text()).toBe('0');
        el.find('.increment').simulate('click');
        // expect(Counter.prototype.constructor.calledOnce).toEqual(true);
        // expect(el.find('span').text()).toBe('3');
    });

    // it('should decrement to 0 after incrementing first', function () {
    //     const incrementButton = findByClass(component, 'increment');
    //     const decrementButton = findByClass(component, 'decrement');
    //     const label = findByTag(component, 'span');
    //     simulateClick(incrementButton.getDOMNode());
    //     simulateClick(decrementButton.getDOMNode());
    //     expect(label.getDOMNode().textContent).toBe('0');
    // });
    //
    // it('should run callback function when incremented', function () {
    //     const incrementButton = findByClass(component, 'increment');
    //     component.setProps({onIncrement: jest.genMockFunction()});
    //     simulateClick(incrementButton.getDOMNode());
    //     expect(component.props.onIncrement).toBeCalled();
    // });
    //
    // it('should run callback function when decremented', function () {
    //     const decrementButton = findByClass(component, 'decrement');
    //     component.setState({value: 1});
    //     component.setProps({onDecrement: jest.genMockFunction()});
    //     simulateClick(decrementButton.getDOMNode());
    //     expect(component.props.onDecrement).toBeCalled();
    // });
    // ReactDOM.unmountComponentAtNode(component);

    // ReactDOM.unmountComponentAtNode(div);
});
