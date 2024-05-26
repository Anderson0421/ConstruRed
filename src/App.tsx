import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/page'
import Dashboard from './pages/dashboard/page'
import ColaboradoresPage from './pages/colaboradores/page'
import InformesPage from './pages/informes/page'
import ProyectosPage from './pages/proyectos/page'
import PageAgendaAdmin from './pages/agenda/page'
import AccountPage from './pages/account/page'
import PrediccionesPage from './pages/predicciones/page'
import EditarEmpleado from './pages/colaboradores/Edit'
import DetailProyect from './pages/proyectos/detail'
import EditProyect from './pages/proyectos/editar'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas iniciales */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />

        {/* Colaboradores */}
        <Route path="/colaboradores" element={<ColaboradoresPage />} />
        <Route path="/colaboradores/edit/:id" element={<EditarEmpleado />} />

        {/* Informes */}
        <Route path="/informes" element={<InformesPage />} />

        {/* Proyectos */}
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/proyectos/:id/" element={<DetailProyect />} />
        <Route path="/proyectos/:id/editar/" element={<EditProyect />} />

        {/* Agenda */}
        <Route path="/agenda" element={<PageAgendaAdmin />} />

        {/* Account */}
        <Route path="/account" element={<AccountPage />} />
        
        {/* Predicciones */}
        <Route path="/predicciones" element={<PrediccionesPage />} />
      </Routes>
    </Router>
  )
}

export default App
