import React from 'react';
import './styles/App.css';
import UploadComponent from './components/UploadComponent'
import ImageDisplayComponent from './components/ImageDisplayComponent'
import DragDropImageToListComponent from './components/DragDropImageToListComponent'

function App() {

  return (
    <div className="App">
      <UploadComponent></UploadComponent>
      <DragDropImageToListComponent></DragDropImageToListComponent>
      <ImageDisplayComponent></ImageDisplayComponent>
    </div>
  );
}

export default App;
