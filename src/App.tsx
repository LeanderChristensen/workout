import "./App.css";
import Workout from "./Workout.tsx";

function App() {
    return (
        <>
            <div id="flex-container">
                <div id="pad-left"></div>
                <div id="main">
                    <Workout />
                </div>
                <div id="pad-right"></div>
            </div>
        </>
    );
}

export default App;
