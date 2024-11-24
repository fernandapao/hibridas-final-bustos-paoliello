// src/pages/Home.jsx
import React from 'react';
import '../styles/main.css';

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1 className="titulo">AeroAsist</h1>

      
        <div className="container d-flex justify-content-center my-4">
          <div className="row g-0">
          
            <div className="col-md-6 text-center">
              <img
                src="img/aero-asist-01.png"
                alt="Logo AeroAsist"
                className="img-fluid logo-image mb-3"
              />
                <h2 className="frase text-center">¡Tu aventura comienza aquí!</h2>
              <img
                src="img/ilustracion-home.png"
                alt="Imagen ilustración"
                className="img-fluid illustration-image"
              />
            </div>

            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
              <img
                src="img/mock-up.png"
                alt="Mockup de la app"
                className="img-fluid mockup-image"
              />
            </div>
          </div>
        </div>

        
        <div className="franja-texto">
          <div className="container mb-5">
            <p className="texto">
              ¡Descubrí la forma más fácil de moverte en el aeropuerto con nuestra nueva app!
            </p>
            <p className="fs-5">
              Con solo ingresar tu número de vuelo, podrás buscar rápidamente lugares dentro del
              aeropuerto, desde restaurantes hasta tiendas. Además, si necesitas asistencia, ¡Podes
              solicitarla al instante! No te pierdas de nada en tu próximo viaje. Descárgala ahora
              en Android y simplifica tu experiencia de viaje. ¡Tu aventura comienza acá! ✈️📱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
