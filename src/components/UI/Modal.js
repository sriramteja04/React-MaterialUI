import { Component } from 'react';
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('modal');

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        console.log(props);
    }

    componentDidMount() {
        console.log('component mounted....');
        portalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.el);
    }

    render() {
        return ReactDom.createPortal(this.props.children, this.el);
    }
}
