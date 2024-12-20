import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)  
    if(!context) {
        throw new Error('Tienes que rodear la aplicación con BudgetProvider para poder hacer uso de useBudget')
    }  
    return context
}