import { BehaviorSubject } from 'rxjs'
import { useState, useEffect } from 'react'



export default function useBehaviorSubject<T>(behaviorSubject: BehaviorSubject<T>) {

    const [state, setState] = useState<T>(behaviorSubject.getValue())

    useEffect(() => {
        const sub = behaviorSubject.subscribe((data) => {
            setState(data)
        })
        return () => sub.unsubscribe()
    }, [])

    return state
}
