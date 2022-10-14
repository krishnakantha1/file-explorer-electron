import { useReducer, useState } from 'react'

const reducer = ( state, action )=>{
    switch(action.type){
        case 'insertToIndex':
            const index = action.index
            const dirName = action.dirName

            // if(index===0){
            //     return state
            // }
            
            let temp = [...state]
    
            if(index<state.length-1){
                temp = temp.slice(0,index+1)
            }
    
            temp.push(dirName)
            action.setHistStack([])
            
            return temp

        case 'pop':
            const tempPop = [...state]

            if(state.length<=0){
                return tempPop
            }

            const top = tempPop.pop()

            action.setHistStack([...action.histStack, top])

            return tempPop

        case 'push':
            const tempPush = [...state]
            const tempHist = [...action.histStack]

            if(tempHist.length===0){
                return tempPush
            }

            tempPush.push(tempHist[tempHist.length-1])
            tempHist.pop()

            action.setHistStack((_)=>tempHist)

            return tempPush
        default:
            throw new Error()
    }
}

export const useUrlPath = (initialPath)=>{
    const [URLPath,dd] = useReducer(reducer,initialPath)
    const [histStack,setHistStack] = useState([])

    const dispatch = (action)=>{
        action.histStack = histStack
        action.setHistStack = setHistStack

        dd(action)
    }

    return [URLPath,dispatch]
}