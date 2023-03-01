import { useState } from 'react';
import './App.css';
import Logo from './Logo.js';
import SearchBar from './SearchBar';

export default function App() {

  const [SearchBarResult, useSearchBarResult] = useState("");

  return (
    <div className='App'>

      <Logo logoUrl={"https://intranet.izbb.net/Assets/img/anasayfaProjelerSlider/dijitalKitap2.png"} />

      <span className='container'>
        <span>{(SearchBarResult === "") ? "-" : SearchBarResult}</span>
      </span>

      <SearchBar handleSearch={useSearchBarResult} />

    </div>
  );
}
