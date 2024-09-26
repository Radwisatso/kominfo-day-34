import { useSelector } from "react-redux"

export default function CounterLain() {

    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <p>Ini counter lain</p>
            <p>{count}</p>
        </div>
    )
}