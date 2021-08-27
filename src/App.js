//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import Survey from './Components/Pages/Survey';

function App() {
  return (
   <>
   <Router>
   
      <NavBar/>
      <Switch>
      {<Route path='/' exact component={Home} /> }
        <Route path='/HOME' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/services' component={Services} />
        <Route path='/signup' component={SignUp} />
        <Route path='/survey' component={Survey} />
      </Switch>
      </Router>
      
  
     
    </>
   
  );
}

export default App;
