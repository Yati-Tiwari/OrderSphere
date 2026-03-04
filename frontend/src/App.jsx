import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Cart from './component/Cart/Cart';
// import Home from './component/Home/Home';
// import MultipleItemCarousel from './component/Home/MultipleItemCarousel';
// import RestaurantCard from './component/Home/RestaurantCard';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

function App(){
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            {/* <Home/>
            <RestaurantCard/> */}
            {/* <RestaurantDetails/> */}
            <Cart/>
        </ThemeProvider>
    );
}

export default App;
