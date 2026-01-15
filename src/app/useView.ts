'use client'
import React, { useEffect, useRef, useState } from 'react'

const useView = (
    option: IntersectionObserverInit = {}
): [any, boolean] => {
    const ref = useRef<HTMLElement | null>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver((items) => {
            const item = items[0]
            setInView(item.isIntersecting)
        }, {
            threshold: 0.5,
            ...option
        })
        observer.observe(ref.current)

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [option])


    return [ref, inView]
}

export default useView