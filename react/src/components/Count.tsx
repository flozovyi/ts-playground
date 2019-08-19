import * as React from 'react'

interface Props {
    count?: number;
}

export default class Count extends React.Component<Props> {
    static defaultProps: Props = {
        count: 0
    };

    render() {
        return <h3><span>{this.props.count}</span></h3>
    }
};


