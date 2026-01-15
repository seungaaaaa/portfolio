'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './about.module.css'
import useView from '@/app/useView'

const About = () => {

    const texts = [
        '사용자의 속도를 방해하지 않는 UI를 만들고 싶어요',
        '작은 디테일이 분위기를 바꾸는 순간에 재미를 느껴요',
        '화면이 자연스럽게 움직이는 걸 좋아해요',
        '함께 읽기 편한 코드를 중요하게 생각해요',
        '나중에 다시 볼 걸 생각하면서 작성해요'
    ]
    const avatarSrc = [
        '/avatar/standard.png',
        '/avatar/smile.png',
        '/avatar/like.png',
        '/avatar/study.png',
        '/avatar/thinking.png'
    ]
    const [index, setIndex] = useState(0)
    const length = texts.length

    const showText = [
        texts[(index - 1 + length) % length],
        texts[index],
        texts[(index + 1) % length]
    ]
    const showImg = avatarSrc[index]

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((item) => (item + 1) % length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const [titleRef, titleView] = useView()


    return (
        <section id='about' className={styles.about}>
            <div className={styles.wrap}>
                <h2 className={`${styles.title} ${titleView ? styles.on : ''}`}>About Me</h2>
                <main className={styles.main}>
                    <article className={styles.avatarBox}>
                        <div className={styles.avatar}>
                            <img src={showImg} alt='아바타' />
                        </div>
                        <div className={`${styles.github} ${styles.link}`}><a href='https://github.com/seungaaaaa'>GitHub ↗</a></div>
                        <div className={`${styles.email} ${styles.link}`}><a href="mailto:yg19877@naver.com">Email ↗</a></div>
                        <div className={`${styles.phone} ${styles.link}`}>010 - 8901 - 3095</div>
                    </article>
                    <article className={styles.slideBox} ref={titleRef}>
                        <ul className={styles.slideUl}>
                            {
                                showText.map((item, i) => (
                                    <li className={`${styles.li} ${i === 1 ? styles.active : styles.blur}`} key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </article>
                </main>
            </div>
        </section>
    )
}

export default About