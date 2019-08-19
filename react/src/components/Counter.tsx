import React from 'react';
import Count from './Count';
import {AppState} from "../reducers";
import {connect} from "react-redux";
import {decrement, increment} from "../actions/counter";


interface Props {
    count: number;
    increment: Function;
    decrement: Function;
}


export class Counter extends React.Component<Props, AppState> {
    onIncrement = () => {
        this.props.increment();
    };

    onDecrement = () => {
        this.props.decrement();
    };

    render() {
        return (
            <div>
                <Count count={this.props.count}></Count>
                <button onClick={this.onIncrement} className={"increment"}>Increment</button>
                <button onClick={this.onDecrement} className={"decrement"}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({count: state.counter.count});

export default connect(mapStateToProps, {
    increment,
    decrement
})(Counter);
