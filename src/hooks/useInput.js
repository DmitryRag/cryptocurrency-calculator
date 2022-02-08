import { useState } from 'react'

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const resetValue = e => {
        setValue('')
    }

    const todayDate = (date) => {
        setValue(date)
    }

    return {
        value, onChange, resetValue, todayDate
    }
}