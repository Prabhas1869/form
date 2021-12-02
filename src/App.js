import "./App.css";
import SignUp from "./Components/Pages/Sign-up";
import LogIn from './Components/Pages/Log_in';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Error from "./Components/Pages/Error";

function App() {

return (
  <>

<Switch>
<Route exact path='/' component={SignUp} />
<Route exact path='/Login' component={LogIn} />
<Route  component={Error} />
</Switch>

</>
  
  );
}

export default App;
