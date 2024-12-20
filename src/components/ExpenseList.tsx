import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {

    const { state } = useBudget()
    
    // si hay categoría seleccionada filtramos los gastos de esa categoría
    const filteredExpense = state.currentCategory ? 
        state.expenses.filter(expense => expense.category === state.currentCategory) :
        state.expenses // si no hay nada se trae todos los gastos
    
    const isEmpty = useMemo(() => filteredExpense.length === 0, [filteredExpense])

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
                    {filteredExpense.map(expense => (
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
