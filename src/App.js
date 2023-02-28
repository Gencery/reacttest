import './App.css';
import Logo from './Logo.js';
import People from './People';

export default function App() {

  return (
    <div className='App'>
      <Logo logoUrl={"https://intranet.izbb.net/Assets/img/anasayfaProjelerSlider/dijitalKitap2.png"} />
      <span className='container'>
        <span>Hello World!</span>
      </span>
      <People />
    </div>
  );
}
