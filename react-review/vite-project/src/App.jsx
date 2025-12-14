import { useState } from 'react'

function App() {
  const IMAGES = [
  { id: 1, src: "https://picsum.photos/id/237/800/600", alt: "강아지" },
  { id: 2, src: "https://picsum.photos/id/1/800/600", alt: "노트북" },
  { id: 3, src: "https://picsum.photos/id/10/800/600", alt: "숲" },
  { id: 4, src: "https://picsum.photos/id/20/800/600", alt: "책상" },
  ];
  const [selectedImage, setSelectedImage]= useState(IMAGES[0]);
  return (
    <>
      <div className='gallery-container'>
        <img src="" className='big-image' />
      </div>
      {/* Thumb List*/}
      <div className='thumb-container'>
        {IMAGES.map(img=>(
          <button
          key={img.id}
          className={selectedImage.id===img.id ? 'acitve':''}
          onClick={()=>setSelectedImage(img)}>
          </button>
        ))}
      </div>
    </>
  )
};

export default App;
