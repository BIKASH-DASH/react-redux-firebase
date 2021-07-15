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
            return state
            break;

        case 'CREATE_PROJECT_ERROR':
            console.log("CREATE_PROJECT_ERROR", action.error);
            return state
            break;
    
        default:
            console.log("CREATE PROJECT ERROR", action.error);
            return state
            break;
    }
}

export default projectReducer