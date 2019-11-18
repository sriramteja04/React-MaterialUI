import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 55px;
    height: 25px;

    > input {
        display: none;
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    transition: 0.4s;
    border-radius: 25px;

    &:before {
        position: absolute;
        content: '';
        height: 25px;
        width: 25px;
        background-color: #999;
        transition: 0.2s;
        border-radius: 50%;
    }
`;

const SliderInput = styled.input`
    &:checked + ${Slider} {
        background-color: #2f7046;
        &:before {
            transform: translateX(30px);
            background-color: white;
        }
    }
`;

export default class ToggleButton extends Component {
    render() {
        return (
            <Container>
                <SliderInput
                    type={'checkbox'}
                    checked={this.props.checked}
                    onChange={e => this.props.onchange(e.target.checked)}
                />
                <Slider />
            </Container>
        );
    }
}
