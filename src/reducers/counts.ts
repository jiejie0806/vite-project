import { SET_COUNTS } from '../actions/index';


const initState = 0;
 
export function counts (state = initState, action: any) {

    const { type = '', data = ''} = action;
    switch(type) {
        case SET_COUNTS:
            return data;
        default:
            return state;
    }
}