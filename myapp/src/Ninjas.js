import React from 'react'

export default function Ninjas(props) {
    const { name, age, blet } = props;
    
    return (
        <div className="Ninjas">
            <div>name:{name}</div>
            <div>age:20</div>
            <div>Belt:)</div>
        </div>
    )
}
