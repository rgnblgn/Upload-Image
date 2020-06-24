import React, { Component } from 'react'
import RotateImage from './RotateImageComponent'
import "../styles/ImageDisplay.css";

let listOfImages = [];

class ImageDisplayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedImageIndex: 0
        }
    }

    /**
     * Create image list
     * @param {Object} r 
     */
    importAll(r) {
        return r.keys().map(r);
    }

    /**
     * Component Will Mount
     */
    componentWillMount() {
        listOfImages = this.importAll(require.context('../upload/', false, /\.(png|jpe?g|svg|JPG)$/));
        this.setState({ focusedImageIndex: listOfImages.length - 1 })
    }

    /**
    * Change focused poster
    * @param {Object} e 
    */
    changePoster = (e) => {
        const chosenImageIndex = parseInt(e.target.alt)
        this.setState({ focusedImageIndex: listOfImages.length - 1 - chosenImageIndex })
    }

    /**
     * Render
     */
    render() {
        return (
            <div className='imageDisplayDiv'>
                <RotateImage src={listOfImages[this.state.focusedImageIndex]}></RotateImage>
                {
                    listOfImages.slice(0).reverse().map(
                        (image, index) => <img className='galery' id={'poster' + index} onClick={this.changePoster} key={index} src={image} alt={index}></img>
                    )
                }
            </div>
        )
    }
}

export default ImageDisplayComponent