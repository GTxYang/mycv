import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EducationPage from './Pages/SkillPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import { Route, Switch as Switching, Redirect, HashRouter } from "react-router-dom";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";

function App() {
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  //D9a6y là set mặc định là dark theme
  const [theme, setTheme] = useState('dark-theme');
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              //onChange={ }
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)} >
          <MenuIcon />

        </IconButton>

      </div>


      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>



        <HashRouter basename="/">
          <Switching>
            <Route path="/home" render={(props) => <HomePage {...props} />} />
            <Redirect from="/" exact to="/home" />

            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/skill" exact>
              <EducationPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switching>
        </HashRouter>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height:100vh;
  @media screen and (max-width: 1200px)
    {
      margin-left:0;
    }

  

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      z-index : -1;
    }
  }
  
`;

export default App;
