import React, {useState} from 'react';
import Person from "./Person";

const NewApp = props => {
    const [personState,setPersonState] = useState({
        person:[
            {name: "Emran",age: "22"},
            {name: "Rakib",age: "24"},
            {name: "Nayeem",age: "29"}
        ]
    });

    const setPersonHandler = () =>{
        setPersonState({
                person:[
                    {name: "Jamal",age: "22"},
                    {name: "Rakib",age: "24"},
                    {name: "Nayeem",age: "33"}
                ]
            }
        )
    };


        return (
            <div>
                <h1>Welcome to ReatJS App</h1>
                <button onClick={setPersonHandler}>Switch Button</button>
                <Person name={personState.person[0].name} age={personState.person[0].age}/>
                <Person name={personState.person[1].name} age={personState.person[1].age}> My Hobbi: Cricket </Person>
                <Person name={personState.person[2].name} age={personState.person[2].age}/>
            </div>
        );

};

export default NewApp;