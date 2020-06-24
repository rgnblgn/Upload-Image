import React, { Component } from 'react'

class DragDropComponent extends Component {

    state = {
        drag: false
    }
    dropRef = React.createRef()

    /**
     * Handle drag
     * @param {Object} e 
     */
    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    /**
     * Handle drag in
     * @param {Object} e 
     */
    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ drag: true })
        }
    }

    /**
     * Handle drag out
     * @param {Object} e 
     */
    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if (this.dragCounter === 0) {
            this.setState({ drag: false })
        }
    }

    /**
     * Handle drop
     * @param {Object} e 
     */
    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ drag: false })
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }
    }

    /**
     * Component did mount
     */
    componentDidMount() {
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    /**
     * Component will mount
     */
    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    /**
     * render
     */
    render() {
        return (
            <div
                style={{ display: 'inline-block', position: 'relative' }}
                ref={this.dropRef}
            >
                <div
                    style={{
                        border: 'dashed grey 4px',
                        backgroundColor: 'rgba(255,255,255,.8)',
                        position: 'absolute',
                        top: 40,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 9999
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            left: 0,
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: 36
                        }}
                    >
                        <div>drop here :)</div>
                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
}
export default DragDropComponent