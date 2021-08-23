import React, {useRef, useState} from "react";

import {useDropzone} from "react-dropzone";
import useDraggable from "./Draggable";
import './App.css';
import background from './11.jpg'
import absolute from './images/12.png'
import TextEditor from "./components/TextEditor";
import AddText from "./components/addText";
import ImageRes from "./components/imageRes";



const DraggableCard = ({ children }) => {
const cardRef = useRef(null)
    useDraggable(cardRef)
    return (
    <div>
        <div className="main">
          <div className="hidden">

          </div>
            <img src={background}/>

        </div>
        <div className="card" ref={cardRef}>
            { children }

        </div>
    </div>
    )

}
function App() {
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    })
    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{width: "250px", height: "200px" }} alt="preview"/>
            </div>
        </div>
    ))
  return (
      <div className="wrapper">
          <div className="container">
              <DraggableCard> <img src={absolute} alt=""/></DraggableCard>
              <div className="App">
              <div className="editor">
                  <TextEditor />
              </div>
              <div {...getRootProps()}>
                  <input {...getInputProps()}/>
                  <p>+ фото</p>
              </div>
              <AddText />
                  <ImageRes />
              <div>{images}</div>

              </div>


          </div>
          <a className="dg-widget-link"
             href="http://2gis.ru/moscow/firm/70000001034832435/center/37.631220817565925,55.766675792068646/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть
              на карте Москвы</a>
          <div className="dg-widget-link"><a
              href="http://2gis.ru/moscow/firm/70000001034832435/photos/70000001034832435/center/37.631220817565925,55.766675792068646/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии
              компании</a></div>
          <div className="dg-widget-link"><a
              href="http://2gis.ru/moscow/center/37.631222,55.766656/zoom/16/routeTab/rsType/bus/to/37.631222,55.766656╎АВ Daily, сеть мини-маркетов?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти
              проезд до АВ Daily, сеть мини-маркетов</a></div>

      </div>
  )
}

export default App;
