import React, { Component } from 'react'
import '../styles/ImageDisplay.css'

class RotateImageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotation: 0
        }
        this.rotateRight = this.rotateRight.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
    }

    /**
     * Rotate image right
     */
    rotateRight() {
        let newRotation = this.state.rotation + 90;
        if (newRotation >= 360) {
            newRotation = - 360;
        }
        this.setState({
            rotation: newRotation,
        })
    }

    /**
     * Rotate image left
     */
    rotateLeft() {
        let newRotation = this.state.rotation - 90;
        if (newRotation >= 360) {
            newRotation = - 360;
        }
        this.setState({
            rotation: newRotation,
        })
    }

    /**
     * Render
     */
    render() {
        const { rotation } = this.state;
        return <div className='imageDisplay'>
            <input className='rotateButtons' onClick={this.rotateLeft} type="button" value="left" />
            <img alt='1' style={{ transform: `rotate(${rotation}deg)` }} src={this.props.src} width="400" />
            <input className='rotateButtons' onClick={this.rotateRight} type="button" value="right" />
        </div>
    }
};

export default RotateImageComponent;