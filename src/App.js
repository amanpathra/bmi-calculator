import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';
import AllContextProvider from './context/AllContext';

function App() {
    return (
        <AllContextProvider>
            <div className="App">
                <Header />
                <div className="main">
                    <div className="left">
                        <Form />
                        <Button />
                    </div>
                    <div className="right">
                        <Result />
                    </div>
                </div>
            </div>
        </AllContextProvider>
    );
}

export default App;