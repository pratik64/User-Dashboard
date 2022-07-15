import './App.css';
import LoginComponent from './components/login.component';
import DashboardComponent from './components/dashboard.component';
import ProtectRoute from './components/protectRoute.component';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/dashboard' 
                element={ <ProtectRoute>
                  <DashboardComponent />
                </ProtectRoute>}/>
          <Route path='/' element={<Navigate to='/login'/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
