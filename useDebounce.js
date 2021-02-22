// From Code Collection
// Throttles API calls on the client side to avoid spamming
// a server

import {useState, useEffect} from 'react'

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debouncedValue
}