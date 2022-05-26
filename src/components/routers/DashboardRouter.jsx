import { Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/NavBar";
import {MarvelScreen} from '../marvel/MarvelScreen';
import { DCScreen } from '../dc/DCScreen';
import { SearchScreen } from '../search/SearchScreen';
import { HeroScreen } from "../hero/HeroScreen";


export const DashboardRouter = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>                  
                <Route path="/" element={<MarvelScreen />} />  
                <Route path="/Marvel" element={<MarvelScreen />} />  
                <Route path="/DC" element={<DCScreen />} />              
                <Route path="/Hero" element={<HeroScreen />} />              
                <Route path="/SearchScreen" element={<SearchScreen />} /> 
            </Routes>
        </div>
    </>
  )
}
