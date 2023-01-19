import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <BrowserRouter>
    <div >
      <NavBar/>
    </div>
      <Routes>
        <Route path='*' element={<div>error</div>} />
        <Route path='/' element={<Home />} />
        <Route path='item' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
