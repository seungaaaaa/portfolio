'use client'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './hero.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const stageRef = useRef<HTMLDivElement | null>(null)
    const iconsRef = useRef<HTMLDivElement[]>([])
    iconsRef.current = []
    const centerRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        if (!stageRef.current) return
        if (!iconsRef.current.length) return

        const ctx = gsap.context(() => {
            const stageHeight = stageRef.current!.offsetHeight
            const icons = iconsRef.current
            const NAV_HEIGHT = 80

            const tl = gsap.timeline()

            tl.fromTo(
                icons,
                {
                    y: -stageHeight - 200,
                    opacity: 0,
                },
                {
                    y: stageHeight / 2,
                    opacity: 1,
                    duration: 2,
                    ease: 'power3.in',
                    stagger: {
                        each: 0.04,
                        from: 'random',
                    },
                }
            )

            tl.fromTo(
                icons,
                {
                    y: () => gsap.utils.random(300, 600),
                    x: () => gsap.utils.random(-200, 200),
                    rotate: () => gsap.utils.random(-180, 180),
                },
                {
                    y: 0,
                    x: 0,
                    rotate: 0,
                    duration: 1.5,
                    ease: 'power4.out',
                    stagger: {
                        each: 0.05,
                        from: 'random',
                    },
                },
                '-=0.15'
            )
            gsap.to(centerRef.current, {
                scale: 1.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: stageRef.current,
                    start: `top top+=${NAV_HEIGHT}`,
                    end: `bottom top`,
                    scrub: true,
                }
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: stageRef.current,
                    start: `top top+=${NAV_HEIGHT}`,
                    end: () => `+=${stageRef.current!.offsetHeight}`,
                    pin: true,
                    scrub: true,
                },
            })
        }, stageRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id='hero' className={styles.hero}>
            <div className={styles.stage} ref={stageRef}>
                <div className={styles.center} ref={centerRef}>
                    <div className={styles.moveCenter}>
                        <div className={styles.moveText}>
                            Front-End Developer<br />Kim SeungA
                        </div>
                    </div>
                </div>

                {[
                    '/stack/GCP-Dark.svg',
                    '/stack/Github-Dark.svg',
                    '/stack/HTML.svg',
                    '/stack/javaScript.svg',
                    '/stack/JQuery.svg',
                    '/stack/NextJS-Dark.svg',
                    '/stack/NodeJS-Dark.svg',
                    '/stack/React-Dark.svg',
                    '/stack/Vercel-Dark.svg',
                    '/stack/TypeScript.svg',
                    '/stack/chart.png',
                    '/stack/MySQL-Dark.svg',
                    '/stack/native.png',
                    '/stack/Sass.svg'
                ].map((src, i) => (
                    <div
                        key={i}
                        className={`${styles.li} ${styles[`icon${i + 1}`]}`}
                        ref={(el) => {
                            if (el) iconsRef.current.push(el)
                        }}
                    >
                        <img src={src} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hero
