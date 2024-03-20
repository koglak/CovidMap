import logo from './logo.svg';
import './App.css';
import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";

function App() {
  return (
    <div className="App">
          <SVGMap map={World} />

    </div>
  );
}

export default App;
