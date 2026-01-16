'use client'
import React, { useState } from 'react'
import styles from './project.module.css'
import useView from '@/app/useView'

const Project = () => {

    const mainProjects = [
    {
        post: 'PC방',
        title: 'pc-cafe',
        desc: 'PC방 알바경험을 바탕으로 만든 PC방 관리 웹 서비스',
        sub: [
    'Local Storage + JSON 기반 주문·좌석·금액 데이터 관리',
    '손님 페이지 ↔ 관리자 페이지 데이터 연계',
    '좌석 번호 랜덤 생성 로직 구현',
    '손님/관리자 페이지별 기능 구현 및 주문·좌석 상태 연동'
],
        tech: [
            '/stack/HTML.svg',
            '/stack/CSS.svg',
            '/stack/JavaScript.svg'
        ],
        img: '/capture/pc.png',
        link: 'https://seungaaaaa.github.io/pc/',
        file: '/docs/기획서_김승아.pdf'
    },
    {
        post: '쇼핑몰',
        title: '가전제품 쇼핑몰',
        desc: '상품 선택부터 장바구니 관리까지 가능한 가전제품 쇼핑몰',
        sub: [
    '날씨 API를 활용한 오늘 날씨 맞춤 상품 추천',
    '상품 페이지에서 선택한 상품을 장바구니에서 확인 가능',
    '장바구니 수량 변경 및 상품 삭제 기능 구현',
    '카카오맵 API를 활용한 매장 위치 안내 기능 구현'
],
        tech: [
            '/stack/React-Dark.svg',
            '/stack/Sass.svg'
        ],
        img: '/capture/shopping.png',
        link: 'https://seungaaaaa.github.io/re01/',
    },
    {
        post: '방명록',
        title: '방명록',
        desc: '방명록을 작성하면 서버에 저장되어 공유되는 웹 서비스',
        sub: [
    'GCP 인스턴스와 Cloud Run 서비스 활용',
    'MySQL(8.0) 연동',
    '비밀번호 기반 수정/삭제 제어 기능 구현',
    '서버와 클라이언트 간 데이터 동기화 처리'
],
        tech: [
            '/stack/React-Dark.svg',
            '/stack/NodeJS-Dark.svg',
            '/stack/GCP-Dark.svg',
            '/stack/MySQL-Dark.svg'
        ],
        img: '/capture/visited.png',
        link: 'https://guestbook-205378419369.us-central1.run.app',
    },
    {
        post: '영화관',
        title: 'Team Project',
        desc: '영화 정보 API와 예매 기능을 결합한 영화관 웹 사이트 팀 프로젝트',
       sub: [
    'TMDB API',
    '카카오맵 API',
    'Local Storage, Session Storage, Cookie',
],

        tech: [
            '/stack/HTML.svg',
            '/stack/CSS.svg',
            '/stack/JavaScript.svg'
        ],
        img: '/capture/cinema.png',
        link: 'https://dy-08.github.io/line-cinema/',
        position: 'TMDB API 영화 데이터를 현재 날짜 기준으로 가공해 상영작·상영예정작과 장르별 목록을 구현하고, Local Storage 기반 예매·예매 조회 기능 및 Window 이벤트를 활용한 인증번호 발급 로직을 담당',
        ppt: '/docs/팀프로젝트.pptx'
    }
]


    const canvas = [
        {
            src: '/capture/paint.png',
            link: 'https://seungaaaaa.github.io/web-paint/',
            title: '그림판'
        },
        {
            src: '/capture/balls.png',
            link: 'https://seungaaaaa.github.io/balls/',
            title: '화면보호기 애니메이션'
        },
        {
            src: '/capture/game.png',
            link: 'https://seungaaaaa.github.io/wallGame/',
            title: '벽돌깨기 게임'
        },
    ]

    const [select, setSelect] = useState(0)
    const [titleRef, titleView] = useView()
    const [titleRef2, titleView2] = useView()
    const [titleRef3, titleView3] = useView()
    const [oneRef, oneInView] = useView()

    return (
        <section id='project' className={styles.project}>
            <div className={styles.wrap}>
                <h2 className={`${styles.title} ${titleView ? styles.on : ''}`}>Projects</h2>
                <main className={styles.main}>
                    <article className={styles.btns}>
                        {mainProjects.map((p, i) => (
                            <button
                                key={i}
                                className={`${styles.postit} ${styles.postit}${i} ${select === i ? styles.active : ''} ${oneInView ? styles.on : ''}`}
                                onClick={() => setSelect(i)}
                            >
                                {p.post}
                            </button>
                        ))}
                    </article>
                    <article className={styles.somenail} ref={titleRef}>
                        <a href={mainProjects[select].link}><img
                            className={styles.monitor}
                            src={mainProjects[select].img}
                            alt={mainProjects[select].title}
                        /></a>
                    </article>
                    <article ref={oneRef} className={`${styles.descBox} ${oneInView ? styles.on : ''}`}>
                        <h2 className={styles.descTitle}>{mainProjects[select].title}</h2>
                        <p className={styles.desc}>{mainProjects[select].desc}</p>
                            <ul className={styles.sub}>
                                {mainProjects[select].sub.map((item, i) => (
                                    <li key={i} className={styles.subText}>{item}</li>
                                ))}
                            </ul>
                        {mainProjects[select].position && (
                            <div className={styles.position}>맡은 역할: {mainProjects[select].position}</div>
                        )}
                            <div  className={`${styles.techIcons} ${mainProjects[select].post === '영화관' ? styles.teamProjectTech : ''}`}>
                                {mainProjects[select].tech.map((icon, i) => (
                                    <img
                                        key={i}
                                        src={icon}
                                        alt="tech icon"
                                        className={styles.techIcon}
                                    />
                                ))}
                            </div>
                        <div className={`${styles.go} ${mainProjects[select].post === '영화관' ? styles.teamProjectGo : ''}`}>
                            <a className={styles.link} href={mainProjects[select].link}>프로젝트 바로가기</a>
                            {
                                mainProjects[select].ppt && (
                                    <a href={mainProjects[select].ppt} className={styles.file}>PPT 파일 보기</a>
                                )
                            }
                            {
                            mainProjects[select].file && (
                                <a href={mainProjects[select].file} className={styles.file}>기획서 파일 보기</a>
                            )
                        }
                        </div>
                    </article>
                </main>
                <div className={styles.others}>
                    <h2 className={`${styles.other_title} ${titleView2 ? styles.on : ''}`}>JavaScript Canvas Projects</h2>
                    <div className={styles.canvas} ref={titleRef2}>
                        {
                            canvas.map((item, i) => (
                                <div className={`${styles.canvasCard} ${styles.canvasCard}${i}`}>
                                    <div className={styles.captureBox}><a href={item.link}><img className={styles.captureImg} src={item.src} alt={item.title} /></a></div>
                                    <div>{item.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.others}>
                    <h2 className={`${styles.other_title2} ${titleView3 ? styles.on : ''}`}>Other Projects</h2>
                    <div className={styles.other_box}>
                        <div className={styles.videoSec}>
                            <h3>React Native</h3>
                            <div className={styles.videoBox}>
                                <a href='https://natodo-beta.vercel.app/'><video className={styles.native} src='/video/todolist.mp4' muted loop autoPlay /></a>
                            </div>
                        </div>
                        <div className={styles.other_right}>
                            <div className={styles.other_inner}>
                                <div>
                                    <h3 className={styles.jsTitle} ref={titleRef3}>JS Collection</h3>
                                    <div className={styles.captureBox}><a href='https://seungaaaaa.github.io/js-collection/'><img src='/capture/js.png' className={styles.jsImg} /></a></div>
                                </div>
                                <div>
                                    <h3 className={styles.jsTitle} ref={titleRef3}>Next.js Chart Dashboard</h3>
                                    <div className={styles.captureBox}><a href='https://chart-weld.vercel.app/dashboard'><img src='/capture/chart.png' className={styles.jsImg} /></a></div>
                                </div>
                            </div>
                            <h3>Clone Coding</h3>
                            <div className={styles.copy}>
                                <div className={styles.captureBox}><a href='https://seungaaaaa.github.io/erom/'><img className={styles.captureImg} src='/capture/erom.png' /></a></div>
                                <div className={styles.captureBox}><a href='https://seungaaaaa.github.io/woodin/'><img className={styles.captureImg} src='/capture/woodin.png' /></a></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project