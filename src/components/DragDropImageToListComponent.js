import React, { Component } from 'react'
import axios from 'axios'
import DragDropComponent from './DragDropComponent'

class DragDropImageToListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    /**
     * Handle drop
     */
    handleDrop = (files) => {
        this.setState({
            selectedFile: files[0],
            loaded: 0,
        })
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
            <DragDropComponent handleDrop={this.handleDrop}>
                <div style={{ height: 300, width: 250 }}>

                </div>
            </DragDropComponent>
        )
    }
}
export default DragDropImageToListComponent