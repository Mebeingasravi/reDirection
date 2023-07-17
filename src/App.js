import logo from './logo.svg';
import './App.css';
// import {Linking,} from 'react-native';

function App() {
  reDirection();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function reDirection(){
  switch(getOS()){
    case "Windows":
      return window.location.replace('https://platinx.exchange/');
    case "Android":
      return window.location.href = 'https://play.google.com/store/apps/details?id=com.platinx.exchange.flutter_platinx_exchange&hl=en';
    case "iOS":
      return window.location.href = "https://apps.apple.com/in/app/platinx/id1637866256";
  }
}

function getOS() {
  var uA = navigator.userAgent || window.opera;
  if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';

  var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
  for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
}

export default App;