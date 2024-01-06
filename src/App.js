import React, { useState } from 'react';

const FelizCumpleaños = () => {
 const carouselImages = [
    'https://i.ibb.co/7kfQLTK/image1.jpg',
    'https://i.ibb.co/8jqMq9t/image2.jpg',
    'https://i.ibb.co/yXhPRD7/image3.jpg',
    'https://i.ibb.co/Fz037hP/image4.jpg',
    'https://i.ibb.co/TMQGp7g/image5.jpg',
    'https://i.ibb.co/Z2SYLKS/image6.jpg',
    'https://i.ibb.co/7jfWpYP/image7.jpg',
    'https://i.ibb.co/rmpy7Qz/image8.jpg',
    'https://i.ibb.co/n8cMCrF/image9.jpg',
    'https://i.ibb.co/b6Q1hX9/image10.jpg',
    'https://i.ibb.co/NTfnQJF/image11.jpg',
    'https://i.ibb.co/SBWB1bc/image12.jpg',
    'https://i.ibb.co/ZTTT582/image13.jpg',
    'https://i.ibb.co/1s0kYD5/image14.jpg',
    'https://i.ibb.co/dGfRg7J/image15.jpg',
    'https://i.ibb.co/xs12vrj/image16.jpg',
    'https://i.ibb.co/rFRYjVb/image17.jpg',
    'https://i.ibb.co/R9pwFsH/image18.jpg',
    'https://i.ibb.co/N7FgpnX/image19.jpg',
    'https://i.ibb.co/dcHV24g/image20.jpg',
    'https://i.ibb.co/fMNy655/image21.jpg',
    'https://i.ibb.co/BgsbQW3/image22.jpg',
    'https://i.ibb.co/qCXXRmW/image23.jpg',
    'https://i.ibb.co/k4jrrHB/image24.jpg',
    'https://i.ibb.co/zf35j4V/image25.jpg',
    'https://i.ibb.co/ctwsnG4/image26.jpg',
 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh', // 100% height of viewport
    position: 'relative',
 };
 const messageElementStyle = {
  width: '100%',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, #FF0000, #FFFF00)',
  color: '#FFFFFF', // Texto en color blanco para resaltar en el gradiente
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
};


 const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh', // 70% height of viewport
    overflow: 'hidden',
 };

 const imageContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
 };

 const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // To maintain the aspect ratio and show the entire image
    display: 'block',
 };

 const galleryStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
 };

 const thumbnailStyle = {
    width: '50px',
    height: '50px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: '5px',
 };

 const buttonContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
 };

 const footerStyle = {
  background: 'linear-gradient(to right, #0000FF, #FFFF00)',
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',  // Fijar el pie de página a la ventana gráfica
  bottom: 0,          // Alinearlo en la parte inferior
  left: 0,
  width: '100%',      // Ancho del 100%
};

 const buttonStyle = {
  background: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 16px', // Ancho ajustado para ambos botones
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
};

 const navigate = (direction) => {
    const newIndex = direction === 'next' ? currentImageIndex + 1 : currentImageIndex - 1;

    // Circular navigation
    const adjustedIndex = (newIndex + carouselImages.length) % carouselImages.length;

    setCurrentImageIndex(adjustedIndex);
 };

 const changeImage = (index) => {
    setCurrentImageIndex(index);
 };



 return (
    <div style={containerStyle}>
      <div style={messageElementStyle}>

        <h1>Feliz Cumpleaños PAPA !!! 06/01/1958</h1>
      </div>
      <div style={carouselStyle}>
        <div style={imageContainerStyle}>
          <img src={carouselImages[currentImageIndex]} alt={`imagen ${currentImageIndex + 1}`} style={imageStyle} />
        </div>
        <div style={galleryStyle}>
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail ${index + 1}`}
              style={thumbnailStyle}
              onClick={() => changeImage(index)}
            />
          ))}
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => navigate('prev')}>
            Anterior
          </button>
          <button style={buttonStyle} onClick={() => navigate('next')}>
            Siguiente
          </button>
        </div>
      </div>
      <div>
      <>
           <footer style={footerStyle}>
            <h2>Creada 05/01/2024 por tu hijo Gonzalo Daniel Aguilar</h2>
        </footer>
      </>
    </div>
);
    </div>
 );
};

export default FelizCumpleaños;