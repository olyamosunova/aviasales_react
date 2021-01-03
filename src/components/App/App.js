import Main from "../Main/Main";
import logo from "../../logo.svg";

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