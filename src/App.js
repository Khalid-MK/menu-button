import logo from './logo.svg';
import './App.css';
import './Styles/normlize.css'
import './Styles/queries.css'
import './Styles/animations.css'
import MenuButton from './Components/Menu/MenuButton/MenuButton';
import { useCallback, useState, useMemo } from 'react';
import MenuContainer from './Components/Menu/MenuContainer/MenuContainer';
import Test from './Components/Menu/test/Test';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = useCallback(
    (show) => {
      setShowMenu(show)
    },
    [],
  )



  return (
    <div className="App">

      <div>
        <div className="main-top-menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1 col-xs-3">
                <MenuButton toggleMenu={toggleMenu} />
              </div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          {/* <MenuContainer /> */}
          <Test showMenu={showMenu} ></Test>
        </div>

        <div className="home" />
      </div>
    </div>
  );
}

export default App;
