import {InitialPeopleType} from "../HW8";

type ActionType = {
    type: string
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type && action.payload) {
        case 'sort' && 'up': {
            let copyState = [...state]
            return copyState.sort((a, b) => b.age - a.age)
        }
        case 'sort' && 'down': {
            let copyState = [...state]
            return copyState.sort((a, b) => a.age - b.age)
        }
        case 'check' && 18: {
            let copyState = [...state]
            return copyState.filter(el => el.age > 18)
        }
        default:
            return state
    }
}