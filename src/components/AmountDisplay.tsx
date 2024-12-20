import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string // ? significa que ese valor es opcional
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label && `${label}: `} {/*como label es opcional, en el caso que haya label muestras el label y :*/}
            <span className="font-black text-black">{formatCurrency(amount)}</span>            
        </p>
    )
}
