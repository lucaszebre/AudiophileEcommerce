
const MoreLessReducer = (state,action) => {
    switch (action.path) {
        case '/XX99MarkIHeadphones':
            switch (action.type) {
                    case 'ADD':
                        if(state.Mark1 >= 0){
                        return {
                            ...state,
                            quantityMark1: state.Mark1 + 1,
                        }
                    }
                    else{
                        return {
                            ...state,
                            quantityMark1: 0,
                        }
                    }
                    case 'REMOVE':
                        if(state.Mark1 > 0){
                        return {
                            ...state,
                            quantityMark1: state.Mark1 - 1,
                        }
                    }else{
                        return {
                            ...state,
                            Mark1: 0,
                        }
                    }
                    
                
                    
                
        case '/XX99MarkIIHeadphones':
        switch (action.type) {
                case 'ADD':
                    if(state.Mark2 >= 0){
                    return {
                        ...state,
                        quantityMark2: state.Mark2 + 1,
                    }
                }
                else{
                    return {
                        ...state,
                        Mark2: 0,
                    }
                }

                case 'REMOVE':
                    if(state.Mark2 > 0){

                    return {
                        ...state,
                        quantityMark2: state.Mark2 - 1,
                    }
                }
                else{
                    return {
                        ...state,
                        Mark2: 0,
                    }
                }
            }

        case "/XX59Headphones":
            switch (action.type) {
                    case 'ADD':
                return {
                    ...state,
                    quantityXX59: state.XX59 + 1,
                }
            case 'REMOVE':
                return {
                    ...state,
                    quantityXX59: state.XX59 - 1,
                }
        }
        case "/ZX7Speaker":
            switch (action.type) {
        case 'ADD':
            
            return {
                ...state,
                quantityZX7: state.ZX7 + 1,
            }
        case 'REMOVE':
            return {
                ...state,
                quantityZX7: state.ZX7 - 1,
            }
        }
        case "/ZX9Speaker":
            switch (action.type) {
        case 'ADD':
            return {
                ...state,
                quantityZX9: state.ZX9 + 1,
            }
        case 'REMOVE':
            return {
                ...state,
                quantityZX9: state.ZX9 - 1,
            }
        }
        case "/YX1Earphones":
            switch (action.type) {
        case 'ADD':
            return {
                ...state,
                quantityYX1: state.YX1 + 1,
            }
        case 'REMOVE':
            return {
                ...state,
                quantityYX1: state.YX1 - 1,
            }
        }
        default:
            return state
    }
}
}