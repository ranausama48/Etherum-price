

export default function(state={},action){
    switch(action.type){
        case "ADD_BLOGS":{
            // debugger;
            return action.payload;
        }
        default:{
            // debugger;
            return state;
        }
    }
}