import React, { Component } from 'react'
import axios from 'axios';

class UploadComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    /**
     * Choose an image
     * @param {Object} event
     */
    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })

    }

    /**
     * Upload image to uploads
     */
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data)
            .then(res => {
                console.log(res.statusText)
            })
    }

    /**
     * Render
     */
    render() {
        return (
            <div >
                <h1>Upload Image</h1>
                <input type="file" name="file" onChange={this.onChangeHandler} />
                <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        )
    }
}

export default UploadComponent