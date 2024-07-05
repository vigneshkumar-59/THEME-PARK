import './App.css';
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Reg from './Pages/Reg';
import NewLog from './Pages/NewLog';
import KMP from './Pages/KMP';
import WaterSlide from './Pages/WaterSlide';
import SeaWave from './Pages/Seawave';
import Bungee from './Pages/Bungee';
import RollerCoaster from './Pages/RollerCoaster';
import WaterGames from './Pages/WaterGames';
import DryGames from './Pages/DryGames';
import Book from './Pages/Book';
import Cart from './Pages/Cart';
import Pay1 from './Pages/Pay1.';
import Pay2 from './Pages/Pay2';
import Pay3 from './Pages/Pay3';
import Pay4 from './Pages/Pay4';
import Pay5 from './Pages/Pay5';
import Pay6 from './Pages/Pay6';
import Pay7 from './Pages/Pay7';
import Pay8 from './Pages/Pay8';
import Pay9 from './Pages/Pay9';
import Pay10 from './Pages/Pay10';
import Bill1 from './Pages/Bill1';
import Bill2 from './Pages/Bill2';
import Bill3 from './Pages/Bill3';
import Bill4 from './Pages/Bill4';
import Bill5 from './Pages/Bill5';
import Bill6 from './Pages/Bill6';
import Bill7 from './Pages/Bill7';
import Bill8 from './Pages/Bill8';
import Bill9 from './Pages/Bill9';
import Bill10 from './Pages/Bill10';
import Home1 from './Pages/Home1';
import KMP1 from './Pages/KMP1';
import WaterSlide1 from './Pages/WaterSlide1';
import SeaWave1 from './Pages/Seawave1';
import Bungee1 from './Pages/Bungee1';
import RollerCoaster1 from './Pages/RollerCoaster1';
import DryGames1 from './Pages/DryGames1';
import WaterGames1 from './Pages/WaterGames1';
import Qr1 from './Pages/Qr1';
import Qr2 from './Pages/Qr2';
import Qr3 from './Pages/Qr3';
import Qr4 from './Pages/Qr4';
import Qr5 from './Pages/Qr5';
import Qr6 from './Pages/Qr6';
import Qr7 from './Pages/Qr7';
import Qr8 from './Pages/Qr8';
import Qr9 from './Pages/Qr9';
import Qr10 from './Pages/Qr10';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Home1" element={<Home1/>} />
          <Route path="/Reg" element={<Reg/>} />
          <Route path="/NewLog" element={<NewLog/>} />
          <Route path="/KMP" element={<KMP/>} />
          <Route path="/KMP1" element={<KMP1/>} />
          <Route path="/WaterSlide" element={<WaterSlide/>} />
          <Route path="/WaterSlide1" element={<WaterSlide1/>} />
          <Route path="/Seawave1" element={<SeaWave1/>} />
          <Route path="/Seawave" element={<SeaWave/>} />
          <Route path="/Bungee" element={<Bungee/>} />
          <Route path="/Bungee1" element={<Bungee1/>} />
          <Route path="/RollerCoaster" element={<RollerCoaster/>} />
          <Route path="/RollerCoaster1" element={<RollerCoaster1/>} />
          <Route path="/WaterGames" element={<WaterGames/>} />
          <Route path="/WaterGames1" element={<WaterGames1/>} />
          <Route path="/DryGames" element={<DryGames/>} />
          <Route path="/DryGames1" element={<DryGames1/>} />
          <Route path="Book" element={<Book/>} />
          <Route path="Cart" element={<Cart/>} />
          <Route path="Pay1" element={<Pay1/>} />
          <Route path="Pay2" element={<Pay2/>} />
          <Route path="Pay3" element={<Pay3/>} />
          <Route path="Pay4" element={<Pay4/>} />
          <Route path="Pay5" element={<Pay5/>} />
          <Route path="Pay6" element={<Pay6/>} />
          <Route path="Pay7" element={<Pay7/>} />
          <Route path="Pay8" element={<Pay8/>} />
          <Route path="Pay9" element={<Pay9/>} />
          <Route path="Pay10" element={<Pay10/>} />
          <Route path="Bill1" element={<Bill1/>} />
          <Route path="Bill2" element={<Bill2/>} />
          <Route path="Bill3" element={<Bill3/>} />
          <Route path="Bill4" element={<Bill4/>} />
          <Route path="Bill5" element={<Bill5/>} />
          <Route path="Bill6" element={<Bill6/>} />
          <Route path="Bill7" element={<Bill7/>} />
          <Route path="Bill8" element={<Bill8/>} />
          <Route path="Bill9" element={<Bill9/>} />
          <Route path="Bill10" element={<Bill10/>} />
          <Route path="Qr1" element={<Qr1/>} />
          <Route path="Qr2" element={<Qr2/>} />
          <Route path="Qr3" element={<Qr3/>} />
          <Route path="Qr4" element={<Qr4/>} />
          <Route path="Qr5" element={<Qr5/>} />
          <Route path="Qr6" element={<Qr6/>} />
          <Route path="Qr7" element={<Qr7/>} />
          <Route path="Qr8" element={<Qr8/>} />
          <Route path="Qr9" element={<Qr9/>} />
          <Route path="Qr10" element={<Qr10/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
