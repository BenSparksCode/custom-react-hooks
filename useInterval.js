// From React Minecraft
// Runs a callback function once per [DELAY] milliseconds
// continuously while the React app is running.

import { useRef, useEffect } from 'react'

export const useInterval = (callback, delay) => {
    const savedCallback = useRef()

    // stores the latest callback
    useEffect(() => {
        savedCallback.current = callback
    })

    // sets up the interval
    useEffect(() => {
        function tick() {
            if (typeof savedCallback?.current !== 'undefined') {
                savedCallback.current()
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
