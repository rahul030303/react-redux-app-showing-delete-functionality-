
const initialState = {
    students:[
        
    ]
}

export const studentReducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'DELETE': 
        console.log("in reducer");
            const newStudents = state.students.filter(student=>student.id != action.payload.id)
            console.log(newStudents);
            return {
                ...state,
                students:[...newStudents]
            };

            case 'ADD': 
            console.log("in add case");
                return {
                    ...state,
                    students:action.payload
                };

          default:
              console.log("default case")
              return state;
}
}
