'use client'
import React from 'react'
import styles from './skill.module.css'
import useView from '@/app/useView'
import Image from 'next/image'

const Skill = () => {

    const [titleRef, titleView] = useView()

    return (
        <section id="skill" className={styles.skill}>
            <div className={styles.wrap}>
                <h2 className={`${styles.title} ${titleView ? styles.on : ''}`}>Skills</h2>
                <div className={styles.main}>

                    <div className={styles.group}>
                        <h3 className={styles.groupTitle}>💻 Frontend</h3>
                        <ul className={styles.iconUl}>
                            {[
                                ['HTML', '/stack/HTML.svg'],
                                ['CSS', '/stack/CSS.svg'],
                                ['Sass', '/stack/Sass.svg'],
                                ['JavaScript', '/stack/JavaScript.svg'],
                                ['TypeScript', '/stack/TypeScript.svg'],
                                ['React', '/stack/React-Dark.svg'],
                                ['Next.js', '/stack/NextJS-Dark.svg'],
                                ['chart.js', '/stack/chart.png'],
                                ['jQuery', '/stack/JQuery.svg'],
                                ['GSAP', '/stack/gsap.avif']
                            ].map(([name, src]) => (
                                <li key={name} className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src={src} alt={name} className={styles.round} />
                                    <p>{name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.subGrid}>
                        <div className={styles.group}>
                            <h3 className={styles.groupTitle}>🧠 Server & Data</h3>
                            <ul className={styles.iconUl}>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/NodeJS-Dark.svg" alt="Node.js" />
                                    <p>Node.js</p>
                                </li>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/MySQL-Dark.svg" alt="MySQL" />
                                    <p>MySQL</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.groupTitle}>☁ Infra / Deploy</h3>
                            <ul className={styles.iconUl}>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/GCP-Dark.svg" alt="GCP" />
                                    <p>GCP</p>
                                </li>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/Github-Dark.svg" alt="GitHub" />
                                    <p>GitHub</p>
                                </li>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/Vercel-Dark.svg" alt="Vercel" />
                                    <p>Vercel</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.groupTitle} ref={titleRef}>🛠️ Tools</h3>
                            <ul className={styles.iconUl}>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/dbeaver.png" alt="dbeaver" />
                                    <p>DBeaver</p>
                                </li>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px' src="/stack/VSCode-Dark.svg" alt="VS Code" />
                                    <p>VS Code</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.groupTitle}>⚛️ Mobile</h3>
                            <ul className={styles.iconUl}>
                                <li className={styles.card}>
                                    <Image width={60} height={60} sizes='60px'
                                        src="/stack/native.png"
                                        alt="React Native"
                                        className={styles.round}
                                    />
                                    <p>React Native</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
