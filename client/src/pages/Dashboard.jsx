// src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FuncionesList from '../components/Funciones/FuncionesList';
import NovedadesList from '../components/Novedades/NovedadesList';
import FuncionForm from '../components/Funciones/FuncionForm';
import NovedadForm from '../components/Novedades/NovedadForm';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Panel de Administración</h1>
      <nav>
        <ul>
          <li><Link to="funciones">Funciones</Link></li>
          <li><Link to="novedades">Novedades</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="funciones" element={<FuncionesList />} />
        <Route path="funciones/nueva" element={<FuncionForm />} />
        <Route path="novedades" element={<NovedadesList />} />
        <Route path="novedades/nueva" element={<NovedadForm />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
