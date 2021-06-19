import React, { useState } from 'react'

export default function AddNinja(props) {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [path, setPath] = useState();
    const { formdata } = props;

    const hendelSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        
            setName(e.target.name.value);
            setAge(e.target.age.value);
            setPath(e.target.path.value);
            formdata({ name: name, age: age, path: path });
            //console.log(formdata);
        
    }
    return (
        <div>
            <form onSubmit={hendelSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} name="name" />

                <label htmlFor="age">Age:</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} name="age" />


                <label htmlFor="path">Path:</label>
                <input type="text" onChange={(e) => setPath(e.target.value)} name="path" />

                <button>Submit</button>
            </form>
        </div>
    )
}
