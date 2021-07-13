const initState ={
    projects:[
        {id:1,  title:"somthing",content:"blah blah blah"},
        { id: 2, title: "somthing2", content: "blah blah blah" },
        { id: 3, title: "somthing3", content: "blah blah blah" },
    ]
}
const projectReducer = (state=initState,action) => {
    return state;
}

export default projectReducer