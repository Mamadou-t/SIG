import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/internet/home';
import Connexion from './pages/internet/connexion/Connexion';
import Dashboard from './pages/intranet/RH/Dashboard';
import GPersonnel from './pages/intranet/RH/Home';
import DashboardDirecteur from './pages/intranet/Directeur/Dashboard';
import Projet from './pages/intranet/Directeur/Projet';
import Formations from './pages/intranet/Directeur/Formation';
import Activite from './pages/intranet/Directeur/Activite';
import Planning from './pages/intranet/Directeur/Planning';
import Absence from './pages/intranet/Directeur/Absence';
import Missions from './pages/intranet/Directeur/Mission';
import Conges from './pages/intranet/Directeur/Conges';
import Agents from './pages/intranet/Directeur/Agent';
import DashboardAgent from './pages/intranet/Agent/Dashboard';
import InformationPersonnel from './pages/intranet/Agent/Information_personnel';


const App = () => {
  return (
    
    <section>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/Connexion'  element={<Connexion />} />
          <Route path='/Sig/RH'  element={<Dashboard />} />
          <Route path='/Sig/RH/Gestion du personnel' index element={<GPersonnel />} />
          <Route path='/Sig/Directeur' element={<DashboardDirecteur />} />
          <Route path='/Sig/Directeur/Liste des agents'  element={<Agents />} />
          <Route path='/Sig/Directeur/Projets'  element={<Projet />} />
          <Route path='/Sig/Directeur/Formations'  element={<Formations />} />
          <Route path='/Sig/Directeur/Activités'  element={<Activite />} />
          <Route path='/Sig/Directeur/Absences'  element={<Absence />} />
          <Route path='/Sig/Directeur/Absences/Missions'  element={<Missions />} />
          <Route path='/Sig/Directeur/Absences/Congés'  element={<Conges />} />
          <Route path='/Sig/Directeur/Planning'  element={<Planning />} />
          <Route path='/Sig/Agents'  element={<DashboardAgent />} />
          <Route path='/Sig/Agents/Informations personnelles'  element={<InformationPersonnel />} />


        </Routes>
    </section>
  )
};



export default App
