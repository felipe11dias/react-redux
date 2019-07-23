import { ADD_TASK } from '../actions/actionsTypes';
const inicialState = {
    tasks: []
}

function reducers(state = inicialState, action){
    console.log(state);
    switch(action.type){
        case ADD_TASK:
            // return Object.assign({}, state, {
                //     task: state.tasks.concat(action.task)
                // });
                return {
                        
                    ...state,
                    tasks: state.tasks.concat(action.task)
        }

        default:
            console.log("Entrou no default do reducer");
            break;
    }
    return state;
}

export default reducers;
