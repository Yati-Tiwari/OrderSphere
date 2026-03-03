import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import MultipleItemCarousel from './component/Home/MultipleItemCarousel';
import RestaurantCard from './component/Home/RestaurantCard';

function App(){
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <Home/>
            {/* <MultipleItemCarousel/> */}
            <RestaurantCard/>
        </ThemeProvider>
    );
}

export default App;
