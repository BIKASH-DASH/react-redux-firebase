import React from 'react'

export default function Ninjas(props) {
    const { list } = props;
    const ListNinjas = list.map((item,i) =>{
        return (<div key={i} className="listitem">
            <div>name:{list.name}</div>
            <div>age:20</div>
            <div>Belt:)</div>
            <hr />
        </div>)
    })
    return (
        <div className="Ninjas">
            {ListNinjas}
        </div>
    )
}
