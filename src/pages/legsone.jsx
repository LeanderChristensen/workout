import React from "react";
import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    Toggle,
    BlockTitle,
    Button,
    Range,
    Block,
} from "framework7-react";
import exercises from "../exercises.json";

// console.log(exercises.workouts[0].exercises[0].history[0].sets);

const FormPage = () => (
    <Page name={exercises.workouts[0].name}>
        <Navbar title={exercises.workouts[0].name} backLink="Back"></Navbar>
        {exercises.workouts[0].exercises.map((exercise, exerciseIndex) => (
            <div key={exerciseIndex}>
                {console.log(
                    JSON.stringify(exercise.history[0].sets) +
                        ", " +
                        exerciseIndex
                )}
                <BlockTitle>{exercise.name}</BlockTitle>
                <List strongIos outlineIos dividersIos>
                    {exercise.history[0].sets.map((set, setIndex) => [
                        <ListInput
                            key={`w-${setIndex}`}
                            label={`Set ${setIndex + 1} - Last week: ${
                                set.weight
                            }`}
                            type="text"
                            placeholder="Weight"
                        />,
                        <ListInput
                            key={`r-${setIndex}`}
                            label={`Set ${setIndex + 1} - Last week: ${
                                set.reps
                            } reps`}
                            type="text"
                            placeholder="Reps"
                        />,
                    ])}
                </List>
            </div>
        ))}
    </Page>
);

export default FormPage;
