import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom"
import News from "./components/News/News";
import Groups from "./components/Groups/Groups";
import Settings from "./components/Settings/Settings";



const App = ({state, addPostUI, addPostBLL}) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <Header/>
                    <Nav/>
                    <Route render={ () => <Dialogs messagesData={state.dialogsPage} friendsData={state.dialogsPage}/> }  path="/dialogs"/>
                    <Route render={ () => <Profile postData={state.profilePage} addPostUI={addPostUI} addPostBLL={addPostBLL}/>} path="/profile"/>
                    <Route render={ () => <News/>} path="/news"/>
                    <Route render={ () => <Groups/>} path="/groups"/>
                    <Route render={ () => <Settings/>} path="/settings"/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
