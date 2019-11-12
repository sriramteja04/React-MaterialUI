import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import ModalIndex from './index';

export default class Modal extends PureComponent {
    constructor(props) {
        super(props);
        this.portalRoot = document.getElementById('modal');
        this.el = document.createElement('div');
        this.portalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.portalRoot.removeChild(this.el);
    }

    render() {
        return ReactDom.createPortal(<ModalIndex {...this.props} />, this.el);
    }
}
