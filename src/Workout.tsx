import "./Workout.css";
import { useState } from "react";
import LegsOne from "./workouts/LegsOne.tsx";

function Workout() {
    const [workout, setWorkout] = useState(0);
    switch (workout) {
        case 0:
            return (
                <>
                    <button
                        style={{ marginTop: "120px" }}
                        className="workout-select"
                        onClick={() => setWorkout(1)}
                    >
                        Legs 1
                    </button>
                    <button
                        className="workout-select"
                        onClick={() => setWorkout(2)}
                    >
                        Push 1
                    </button>
                    <button
                        className="workout-select"
                        onClick={() => setWorkout(3)}
                    >
                        Pull 1
                    </button>
                    <button
                        className="workout-select"
                        onClick={() => setWorkout(4)}
                    >
                        Legs 2
                    </button>
                    <button
                        className="workout-select"
                        onClick={() => setWorkout(5)}
                    >
                        Push 2
                    </button>
                    <button
                        className="workout-select"
                        onClick={() => setWorkout(6)}
                    >
                        Pull 2
                    </button>
                </>
            );
        case 1:
            return (
                <>
                    <LegsOne />
                </>
            );
            break;
        case 2:
            return (
                <>
                    <h1>Push 1</h1>
                </>
            );
            break;
        case 3:
            return (
                <>
                    <h1>Pull 1</h1>
                </>
            );
            break;
        case 4:
            return (
                <>
                    <h1>Legs 2</h1>
                </>
            );
            break;
        case 5:
            return (
                <>
                    <h1>Push 2</h1>
                </>
            );
            break;
        case 6:
            return (
                <>
                    <h1>Pull 2</h1>
                </>
            );
            break;
    }
}

export default Workout;
