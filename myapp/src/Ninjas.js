import React, { useState} from 'react'

export default function Ninjas(props) {
    let  { list } = props;
    const [listData, setlistData] = useState(list)
    const itemDelete = (index) => {
        list = listData.filter((item, ind) => ind !== index);
        setlistData(list);
    
    }
    const ListNinjas = listData.map((item,i) =>{
        return (<div key={i} className="listitem">
            <div>name:{item.name}</div>
            <div>age:{item.age}</div>
            <div>Belt:{item.path}</div>
            <button onClick={(e)=>itemDelete(i)} >Delete Data</button>
            <hr />
        </div>)
    })
    return (
        <div className="Ninjas">
            {ListNinjas}
        </div>
    )
}
