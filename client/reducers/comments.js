//A reducer takes in two things: 
// 1) the action (what happenned)
// 2) a copy of current state

function postComments(state=[], action){
    switch (action.type) {
        case 'ADD_COMMENT':
            //return the new state with a new comment 
            return [...state, {
                user:action.author,
                text:action.comment
            }];

        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i+ 1),
            ]
            return state;
    
        default:
            return state;
    }

    return state;
}

function comments(state=[], action){
    if (typeof action.postId !== 'undefined'){
        return {
            ///take current state
            ...state,
            // overwrite this with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;