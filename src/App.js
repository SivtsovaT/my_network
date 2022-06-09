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
                <div className='app-booker-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={props.state.profilePage.posts}
                                                                 addPost={props.addPost}
                        />}/>
                        <Route path="/dialogs"
                               element={<Dialogs dialogsData={props.state.dialogsPage.dialogs}
                                                 messagesData={props.state.dialogsPage.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;


