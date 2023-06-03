import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import AppRoutes from '../routes/App.routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
