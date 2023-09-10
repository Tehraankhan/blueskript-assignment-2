
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Character from './Pages/Character'
import Comic from './Pages/Comic'
import Store from './Store/Store';
import View from './Pages/View';
import { Provider } from 'react-redux';
import Comicview from './Pages/Comicview';


function App() {

  return (
    <>
      <Provider store={Store}>



        <Routes>

          <Route path="/" element={<Character />}></Route>
          <Route exact path="/Comic" element={<Comic />}></Route>
          <Route path="/View" element={<View />}></Route>
          <Route exact path="/Comic/ComicView" element={<Comicview />}></Route>


        </Routes>

      </Provider>




    </>
  );
}

export default App;
