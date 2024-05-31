import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage';

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Navbar
        dark={isDark}
        setDark={() => setIsDark(!isDark)}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
