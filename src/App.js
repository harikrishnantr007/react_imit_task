import Feedpage from './Components/Feedpage';
import Header from './Components/Header';
import Uploadimage from './Components/Uploadimage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Newpost from './Components/Newpost';
import { DataProvider } from './Context/Datacontext';

function App() {

return (
 
 <DataProvider>
 <Header/>
 <Routes>
  <Route path='/post'  element={<Newpost/>}/>
<Route path='/' element={ <Uploadimage/>}/>
<Route path='/Newpost' element={<Newpost/>}/>
</Routes>
 
 <Feedpage/>
 </DataProvider>
 
  );
}

export default App;
