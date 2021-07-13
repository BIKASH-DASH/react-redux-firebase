const initState ={
    projects:[
        {id:1,  title:"somthing",content:"blah blah blah"},
        { id: 2, title: "somthing2", content: "blah blah blah" },
        { id: 3, title: "somthing3", content: "blah blah blah" },
    ]
}
const projectReducer = (state=initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("CREATE_PROJECT", action);
            break;
    
        default:
            break;
    }
    return state;
}

export default projectReducer