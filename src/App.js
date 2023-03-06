import { useState } from 'react';
import './App.css';
import Logo from './Logo.js';
import SearchBar from './SearchBar';
import Test from './Test';

export default function App() {

  const [SearchBarResult, setSearchBarResult] = useState("");

  return (

    <div className='App'>
      <Logo logoUrl={"https://intranet.izbb.net/Assets/img/anasayfaProjelerSlider/dijitalKitap2.png"} />

      <span className='container'>
        <span>{(SearchBarResult === "") ? "-" : SearchBarResult}</span>
      </span>

      <SearchBar handleSearch={setSearchBarResult} />

      <Test />
    </div>

  );
}
