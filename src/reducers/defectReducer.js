import _ from 'lodash';

//..._.mapKeys(action.payload, 'id'


export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_DEFECTS': { return { ...state, ..._.mapKeys(action.payload, 'id')} }
        case 'FETCH_DEFECT': { return  { ...state, [action.payload.id]: action.payload }}
        case 'CREATE_DEFECT': { return { ...state, [action.payload.id]: action.payload }}
        case 'EDIT_DEFECT': { return { ...state, [action.payload.id]: action.payload }}
        case 'DELETE_DEFECT': return _.omit(state, action.payload);
        default: return state;
    }
};

// export default (state = {}, action) => {
//     switch (action.type) {
//         case 'FETCH_ALL_DEFECTS': { return { ...state, ...action.payload.map(item => item)};}
//         default: return state;
//     }
// };

