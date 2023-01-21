const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'loading':
            // console.log("ActionType",action.type)
            return {loading:true};
            break;
        case 'OTPSuccess':
            // console.log("ActionType",action.type)
            return {loading:false,data:action.response};
            break;
            case 'OTPFail':
                // console.log("ActionType",action.type)
            return {loading:false,data:action.error};
            break;
        default:
            return state;
    }
}

export default reducer;