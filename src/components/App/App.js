import React, {useEffect} from "react";
import Main from "../Main/Main";
import logo from "../../logo.svg";
import {getId} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {FilterResultList} from "../FilterResultList/FilterResultList";
import {Operations} from "../../reducer/data/data";

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="page-header">
                    <img src={logo} alt="Лого"/>
                </header>
                <Main />
            </div>
        </div>
    );
}
export default App;
