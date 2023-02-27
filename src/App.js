import './App.css';
import Logo from './Logo.js';
import { people } from './data.js';

export default function App() {

  return (
    <div className='App'>
      <Logo logoUrl={"https://intranet.izbb.net/Assets/img/anasayfaProjelerSlider/dijitalKitap2.png"} />
      <span className='container'>
        <span>Hello World!</span>
      </span>
    </div>
  );
}
