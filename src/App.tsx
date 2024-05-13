import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/page'
import Dashboard from './pages/dashboard/page'
import ColaboradoresPage from './pages/colaboradores/page'
import InformesPage from './pages/informes/page'
import ProyectosPage from './pages/proyectos/page'
import PageAgendaAdmin from './pages/agenda/page'
import AccountPage from './pages/account/page'
import PrediccionesPage from './pages/predicciones/page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/colaboradores" element={<ColaboradoresPage />} />
        <Route path="/informes" element={<InformesPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/agenda" element={<PageAgendaAdmin />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/predicciones" element={<PrediccionesPage />} />
      </Routes>
    </Router>
  )
}

export default App
