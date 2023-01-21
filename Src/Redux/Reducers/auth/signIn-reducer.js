const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'loading':
            // console.log("ActionType",action.type)
            return {loading:true};
            break;
        case 'signInSuccess':
            // console.log("ActionType",action.type)
            return {loading:false,data:action.response};
            break;
            case 'signInFail':
                // console.log("ActionType",action.type)
            return {loading:false,data:action.error};
            break;
        default:
            return state;
    }
}

export default reducer;