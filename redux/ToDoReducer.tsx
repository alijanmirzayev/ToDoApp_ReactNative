export const ToDoReducer = (state: any = [], action: any) => {


    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'STATUS_CHANGE':
            const otherItem = state.filter((item: any) => item.id !== action.payload.id)
            return [...otherItem, action.payload]
        case 'undefined': 
            return []
        default:
            state
            break;
    }
}