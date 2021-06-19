import React from 'react'

export default function Ninjas(props) {
    const { list } = props;
    const ListNinjas = list.map((item,i) =>{
        return (<div key={i} className="listitem">
            <div>name:{item.name}</div>
            <div>age:{item.age}</div>
            <div>Belt:{item.path}</div>
            <hr />
        </div>)
    })
    return (
        <div className="Ninjas">
            {ListNinjas}
        </div>
    )
}
