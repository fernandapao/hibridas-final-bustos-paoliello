// src/pages/Home.jsx
import React from 'react';
import '../styles/main.css'

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1 className="titulo">AeroAsist</h1>

        <div className="container">
          <div className="row">
            <div className="col-7">
              <img src="img/aero-asist-01.png" alt="logo de AeroAsist" className="logo mx-auto d-block" />
              <h2 className="frase text-center">¡Tu aventura comienza aquí!</h2>
              {/* <img src="img/ilustracion-home.png" alt="ilustración de una sala de aeropuerto" /> */}
            </div>
          </div>
        </div>

        <div className="franja-texto">
  <div className="container mb-5">
    <p className="texto">¡Descubrí la forma más fácil de moverte en el aeropuerto con nuestra nueva app!</p>
    <p className="fs-5">Con solo ingresar tu número de vuelo, podrás buscar rápidamente lugares dentro del aeropuerto, desde restaurantes hasta tiendas. Además, si necesitas asistencia, ¡Podes solicitarla al instante! No te pierdas de nada en tu próximo viaje. Descárgala ahora en Android y simplifica tu experiencia de viaje. ¡Tu aventura comienza acá! ✈️📱</p>
  </div>
</div>
      </div>
    </div>
    
  );
}

export default Home;
