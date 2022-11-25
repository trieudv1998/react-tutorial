import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootPage from './ui-view/page/admin';
import LoginScreen from './ui-view/page/login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<RootPage />} />
    </Routes>
  );
}

export default App;
