/// <reference path="./typings/index.d.ts" />
import * as React from "react";

interface Props {
    foo: string;
}

export default class MyComponent extends React.Component<Props, {}> {
    render() {
        return <span>{this.props.foo}</span>;
    }
}