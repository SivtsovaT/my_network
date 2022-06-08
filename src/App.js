import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {



        return (
            <BrowserRouter>
                <div className='app-booker'>
                    <Header/>
                    <Navbar/>
                    <div class='app-booker-content'>
                        <Routes>
                            <Route path="/profile" element={<Profile postsData={props.postsData}/>}/>
                            <Route path="/dialogs" element= {<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

)
}

export default App;


