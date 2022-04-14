export default (posts=[],action)=>{
    switch(action.type){
        case 'SET_STATE':
            return action.payload;
        default :
            return posts;
    }
}