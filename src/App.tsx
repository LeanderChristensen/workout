import "./App.css";

function App() {
    const test = "testt";
    return (
        <>
            <div id="flex-container">
                <div id="pad-left"></div>
                <div id="main">
                    <h1>Hello world! {test}</h1>
                </div>
                <div id="pad-right"></div>
            </div>
        </>
    );
}

export default App;
