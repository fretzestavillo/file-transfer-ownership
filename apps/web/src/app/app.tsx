// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import Login from './login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
