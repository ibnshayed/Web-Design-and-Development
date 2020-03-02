import React, {Component} from 'react';
import Person from "./component/Person";

class App extends Component {

    state = {
        persons:[
            {name: "Emran",age: "22"},
            {name: "Rakib",age: "24"},
            {name: "Nayeem",age: "29"}
        ]
        ,showPerson: false
    };

    setPersonHandler = () =>{
        this.setState({
            persons:[
                {name: "Jamal",age: "22"},
                {name: "Rakib",age: "24"},
                {name: "Nayeem",age: "33"}
            ]
        }
        )
    };

    togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow})
    };

    render() {
        let allPerson = null;

        if(this.state.showPerson){
            allPerson = (
                <div>
                    {
                        this.state.persons.map(person => <Person name={person.name} age={person.age}/>)
                    }
                </div>
            )
        }

        return (
            <div>
                <h1>Welcome to ReatJS App</h1>
                <button onClick={this.togglePersonHandler}>Toggle Button</button>



                {/*<Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbi: Cricket </Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>*/}
                {allPerson}
            </div>
        );
    }
}

export default App;
