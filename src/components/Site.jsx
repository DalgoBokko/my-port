import React, { useEffect, useRef } from "react";

import { siteText } from "../constants";
import { gsap } from "gsap";//npm i gsap 설치를 꼭 하도록!!
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Site = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

  return (
    <section id="site" ref={horizontalRef}>
      <div className="site__inner">
        <div className="site__title">
          SITE <em>웹/모바일 사이트 작업</em>
        </div>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article
              className={`site__item p${key + 1}`} 
              key={key} 
              ref={(el) => (sectionsRef.current[key] = el)
              }
            >
            <span className="num">{site.num}<em>{site.mon}</em></span>
            <a href={site.code} target="_blank" className="img" rel="noreferrer">
               <img src={site.img} alt={site.name} />
            </a>
            <ul className="site__info">
              <li>프로젝트명 : {site.name}</li>
              <li>참여율 : {site.per}</li>
              <li>작업내용 : {site.detail}</li>
              <li>사용툴 : {site.tool}</li>
              <li>사용스킬 : {site.skill}</li>
            </ul>
            </article>
            ))}
          
        </div>
      </div>
    </section>
  )
}

export default Site