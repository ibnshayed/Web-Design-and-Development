import React, {Component} from 'react';

const Person = props => {

        return (
            <div>
                <h1>Hi, I am {props.name}</h1>
                <h2>My age is {props.age}</h2>
                <p>{props.children}</p>
                    
            </div>
        );

};

export default Person;