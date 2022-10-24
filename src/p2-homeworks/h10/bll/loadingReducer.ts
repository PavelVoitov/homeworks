export type StateType = {
    isLoading: boolean
}

export const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): StateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}
// fix any