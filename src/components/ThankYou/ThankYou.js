import React, { useRef, useEffect } from 'react'
import styles from './thankyou.module.scss'
import { TimelineLite, Back, Quad, Cubic, Quart } from 'gsap'

const ThankYou = () => {
    const amount = Math.floor((Math.random() * 100) + 1)

     // T
     const t1 = useRef(null)
     const t2 = useRef(null)
     const t1d1 = useRef(null)
     const t1d2 = useRef(null)
 
     const t2d1 = useRef(null)
     const t2d2 = useRef(null)
     const t2d3 = useRef(null)
 
     // H
     const h1 = useRef(null)
     const h2 = useRef(null)
 
     const h2d1 = useRef(null)
     const h2d2 = useRef(null)
     const h2d3 = useRef(null)
 
     const h3 = useRef(null)
 
     const h3d1 = useRef(null)
     const h3d2 = useRef(null)
     const h3d3 = useRef(null)
     const h3d4 = useRef(null)
 
     // A
     const a1 = useRef(null)
     const a2 = useRef(null)
 
     const a2d1 = useRef(null)
     const a2d2 = useRef(null)
     const a2d3 = useRef(null)
 
     // N
     const n1 = useRef(null)
     const n1d1 = useRef(null)
     const n1d2 = useRef(null)
     const n1d3 = useRef(null)
     const n1d4 = useRef(null)
     const n1d5 = useRef(null)
 
     // K
     const k1 = useRef(null)
 
     const k1d1 = useRef(null)
 
     const k2 = useRef(null)
 
     const k2d1 = useRef(null)
     const k2d2 = useRef(null)
     const k2d3 = useRef(null)
     const k2d4 = useRef(null)
 
     // Y
     const y1 = useRef(null)
 
     const y1d1 = useRef(null)
     const y1d2 = useRef(null)
 
     const y2 = useRef(null)
 
     const y2d1 = useRef(null)
     const y2d2 = useRef(null)
 
     // O
     const o1 = useRef(null)
 
     const o1d1 = useRef(null)
     const o1d2 = useRef(null)
     const o1d3 = useRef(null)
     const o1d4 = useRef(null)
 
     // U
     const u1 = useRef(null)
 
     const u1d1 = useRef(null)
     const u1d2 = useRef(null)
 
     // E
     const e1 = useRef(null)
     const e2 = useRef(null)
 
     const e1d1 = useRef(null)
     const e1d2 = useRef(null)
     const e1d3 = useRef(null)
 
     //text
     const text = useRef(null)
     const tspan1 = useRef(null)
     const tspan2 = useRef(null)
     const tspan3 = useRef(null)
     const tspan4 = useRef(null)
     const tspan5 = useRef(null)
     const tspan6 = useRef(null)
     const tspan7 = useRef(null)
     const tspan8 = useRef(null)
     const tspan9 = useRef(null)
     const tspan10 = useRef(null)
     const tspan11 = useRef(null)
     const tspan12 = useRef(null)
     const tspan13 = useRef(null)
     const tspan14 = useRef(null)
 
     const underline1 = useRef(null)
     const underline2 = useRef(null)
     const underline3 = useRef(null)
     const underline4 = useRef(null)
     
     const svgRef = useRef(null)
     
     useEffect(() => {
                 const t2d = [t2d1.current, t2d2.current, t2d3.current]
                 const t1d = [t1d1.current, t1d2.current]
                 const h2d = [h2d1.current, h2d2.current, h2d3.current]
                 const h3d = [h3d1.current, h3d2.current, h3d3.current, h3d4.current]
                 const a2d = [a2d1.current, a2d2.current, a2d3.current]
                 const n1d = [n1d1.current, n1d2.current, n1d3.current, n1d4.current, n1d5.current]
                 const k2d = [k2d1.current, k2d2.current, k2d3.current, k2d4.current]
                 const y1d = [y1d1.current, y1d2.current]
                 const y2d = [y2d1.current, y2d2.current]
                 const o1d = [o1d1.current, o1d2.current, o1d3.current, o1d4.current]
                 const u1d = [u1d1.current, u1d2.current]
                 const e1d = [e1d1.current, e1d2.current, e1d3.current]
                 const underlines = [underline1.current, underline2.current, underline3.current, underline4.current]
                const tspans = [tspan1.current, tspan2.current, tspan3.current, tspan4.current, tspan5.current, tspan6.current, tspan7.current, tspan8.current, tspan9.current, tspan10.current, tspan11.current, tspan12.current, tspan13.current, tspan14.current]
                 

                const addLineDecTween = (tl, line, duration, x, y, delay) => {
                    tl.to(line.x2.baseVal, duration, {value: x, ease: Quart.easeInOut}, delay)
                    tl.to(line.y2.baseVal, duration, {value: y, ease: Quart.easeInOut}, delay)
                    tl.to(line.x1.baseVal, duration, {value: x, ease: Quart.easeInOut}, delay+duration)
                    tl.to(line.y1.baseVal, duration, {value: y, ease: Quart.easeInOut}, delay+duration)
                    tl.to(line, 0.01, {opacity: 1}, delay)
                    tl.to(line, 0.01, {opacity: 0}, delay+(duration*2))
                }
              
                const addLineDecOutTween = (tl, line, duration, x1, y1, x2, y2, delay) => {
                  tl.to(line.x1.baseVal, duration, {value: x1, ease: Quart.easeInOut}, delay)
                  tl.to(line.y1.baseVal, duration, {value: y1, ease: Quart.easeInOut}, delay)
                  tl.to(line.x2.baseVal, duration, {value: x2, ease: Quart.easeInOut}, delay)
                  tl.to(line.y2.baseVal, duration, {value: y2, ease: Quart.easeInOut}, delay)
                  tl.to(line.x1.baseVal, duration, {value: x2, ease: Quart.easeInOut}, delay+duration)
                  tl.to(line.y1.baseVal, duration, {value: y2, ease: Quart.easeInOut}, delay+duration)
                  tl.to(line, 0.01, {opacity: 1}, delay)
                  tl.to(line, 0.01, {opacity: 0}, delay+(duration*2))
                }
              
                const addDotDecTween = (tl, dot, duration, r, delay) => {
                    tl.to(dot.rx.baseVal, duration, {value: r, ease: Quart.easeOut}, delay)
                    tl.to(dot.ry.baseVal, duration, {value: r, ease: Quart.easeOut}, delay)
                    tl.to(dot.rx.baseVal, duration, {value: 0, ease: Quart.easeIn}, delay+duration)
                    tl.to(dot.ry.baseVal, duration, {value: 0, ease: Quart.easeIn}, delay+duration)
                }
              
                const addUnderlineTween = (tl, ul, duration, x2, y2, x1, y1, delay) => {
                  tl.to(ul.x2.baseVal, duration, {value: x2, ease: Quad.easeInOut}, delay)
                  tl.to(ul.y2.baseVal, duration, {value: y2, ease: Quad.easeInOut}, delay)
                  tl.to(ul.x1.baseVal, duration, {value: x1, ease: Quad.easeInOut}, delay+duration)
                  tl.to(ul.y1.baseVal, duration, {value: y1, ease: Quad.easeInOut}, delay+duration)
                }
                
                // for Safari
                const updatePolyline = (line, points) => {
                  if (points.x3) {
                    line.setAttribute('points', points.x0+','+points.y0+' '+points.x1+','+points.y1+' '+points.x2+','+points.y2+' '+points.x3+','+points.y3)
                  } else {
                    line.setAttribute('points', points.x0+','+points.y0+' '+points.x1+','+points.y1+' '+points.x2+','+points.y2)
                  }
                }


                // MAIN TIMELINE
                 const mainTimeline = new TimelineLite()
       
                 // T TIMELINE
                 const tline = new TimelineLite()
                 tline
                   .to(t2.current.x2.baseVal, 0.4, {value: 200.6, ease: Back.easeInOut}, 0)
                   .to(t2.current.y2.baseVal, 0.4, {value: 58.6, ease: Back.easeInOut}, 0)
                   .to(t1.current.y2.baseVal, 0.5, {value: 156.4, ease: Back.easeInOut}, 0.1)
                   .to(t2.current, 0.01, {opacity: 1}, 0)
                   .to(t1.current, 0.01, {opacity: 1}, 0.3)
                   addLineDecTween(tline, t2d[0], 0.2, 200, 51, 0.1)
                   addLineDecTween(tline, t2d[1], 0.2, 170, 48, 0.2)
                   addLineDecTween(tline, t2d[2], 0.2, 150, 44, 0.3)
                   addLineDecTween(tline, t1d[0], 0.2, 160, 159, 0.2)
                   addLineDecTween(tline, t1d[1], 0.2, 165, 130, 0.3)
                 mainTimeline.add(tline, 0.5)
               
                 // H TIMELINE
                 const hline = new TimelineLite()
                 hline
                   .to(h1.current.y2.baseVal, 0.5, {value: 145.4, ease: Back.easeInOut}, 0)
                   .to(h2.current.x2.baseVal, 0.4, {value: 217.1, ease: Back.easeInOut}, 0.2)
                   .to(h2.current.y2.baseVal, 0.4, {value: 102.6, ease: Back.easeInOut}, 0.2)
                   .to(h3.current.y2.baseVal, 0.5, {value: 130.4, ease: Back.easeInOut}, 0.3)
                   .to(h1.current, 0.01, {opacity: 1}, 0)
                   .to(h2.current, 0.01, {opacity: 1}, 0.2)
                   .to(h3.current, 0.01, {opacity: 1}, 0.3)
                   addDotDecTween(hline, h3d[0], 0.25, 2, 0.2)
                   addDotDecTween(hline, h3d[1], 0.25, 2, 0.4)
                   addDotDecTween(hline, h3d[2], 0.25, 2, 0.6)
                   addDotDecTween(hline, h3d[3], 0.25, 2, 0.8)
                   addLineDecTween(hline, h2d[0], 0.3, 270, 93, 0.1)
                   addLineDecTween(hline, h2d[1], 0.3, 256, 104, 0.2)
                   addLineDecTween(hline, h2d[2], 0.3, 242, 114, 0.3)
                 mainTimeline.add(hline, 0.9)
               
                 // A TIMELINE
                 const aline = new TimelineLite()
                 if(a1.current.points[0]) {
                   aline
                   .to(a1.current.points[0], 0.2, {x: 305.6, y: 138.6, ease: Quad.easeIn}, 0)
                   .to(a1.current.points[0], 0.5, {x: 282.6, ease: Back.easeOut}, 'a1')
                   .to(a1.current.points[2], 0.2, {x: 305.6, y: 138.6, ease: Quad.easeIn}, 0)
                   .to(a1.current.points[2], 0.5, {x: 330.6, ease: Back.easeOut}, 'a1')
                 } else {
                   const apoly = {x0: 305.6, y0: 51.6, x1: 305.6, y1: 51.6, x2: 305.6, y2: 51.6}
                   aline
                     .to(apoly, 0.2, {x0: 305.6, y0: 138.6, x2: 305.6, y2: 138.6, ease: Quad.easeIn, onUpdate: function() {
                       updatePolyline(a1.current, apoly)
                 }}, 0)
                     .to(apoly, 0.5, {x0: 282.6, x2: 330.6, ease: Back.easeOut, onUpdate: function() {
                       updatePolyline(a1.current, apoly)
                     }}, 'a1')
                 }
                 aline
                   .to(a2.current.x1.baseVal, 0.4, {value: 319.6, ease: Back.easeInOut}, 0.2)
                   .to(a1.current, 0.01, {opacity: 1}, 0)
                   .to(a2.current, 0.01, {opacity: 1}, 0.2)
                   addLineDecOutTween(aline, a2d[0], 0.2, 295, 120, 319, 120, 0.2)
                 addLineDecOutTween(aline, a2d[1], 0.2, 293, 127, 321, 127, 0.3)
                 addLineDecOutTween(aline, a2d[2], 0.2, 291, 134, 322, 134, 0.4)
                 mainTimeline.add(aline, 1.2)
               
                 // N TIMELINE
                 const nline = new TimelineLite()
                 if(n1.current.points[1]) {
                   nline
                   .to(n1.current.points[1], 0.2, {y: 51.6, ease: Quad.easeOut}, 0)
                   .to(n1.current.points[3], 0.2, {y: 51.6, ease: Quad.easeOut}, 0)
                   .to(n1.current.points[2], 0.2, {x: 391.6, y: 138.6}, 'n1')
                   .to(n1.current.points[3], 0.2, {x: 391.6, y: 62.4, ease: Quad.easeOut}, 0.4)
                 } else {
                   const npoly = {x0: 352, y0: 147, x1: 358, y1: 147, x2: 363, y2: 147, x3: 365, y3: 74}
                   nline
                     .to(npoly, 0.2, {y1: 51.6, y3: 51.6, ease: Quad.easeOut, onUpdate: function() {
                       updatePolyline(n1.current, npoly)
                 }}, 0)
                     .to(npoly, 0.2, {x2: 391.6, x3: 391.6, y2: 138.6, y3: 62.4, ease: Quad.easeOut, onUpdate: function() {
                       updatePolyline(n1.current, npoly)
                     }}, 0.2)
                 }
                 nline
                   .to(n1.current, 0.01, {opacity: 1}, 0)
                   addLineDecTween(nline, n1d[0], 0.3, 352, 70, 0.1)
                   addLineDecTween(nline, n1d[1], 0.3, 358, 102, 0.2)
                   addLineDecTween(nline, n1d[2], 0.3, 363, 124, 0.3)
                   addLineDecTween(nline, n1d[3], 0.3, 385, 80, 0.4)
                   addLineDecTween(nline, n1d[4], 0.3, 385, 74, 0.5)
                 mainTimeline.add(nline, 1.5)
               
                 // K TIMELINE
                 const kline = new TimelineLite()
                 if (k2.current.points[0]) {
                   kline
                     .to(k2.current.points[0], 0.2, {x: 452.6, y: 51.6, ease: Back.easeOut}, 0.2)
                     .to(k2.current.points[2], 0.2, {x: 452.6, y: 145.6, ease: Back.easeOut}, 0.3)
                 } else {
                   const kpoly = {x0: 414.1, y0: 97.6, x1: 414.1, y1: 97.6, x2: 414.1, y2: 97.6}
                   kline
                     .to(kpoly, 0.2, {x0: 452.6, y0: 51.6, x2: 452.6, y2: 145.6, ease: Back.easeOut, onUpdate: function() {
                       updatePolyline(k2.current, kpoly)
                 }}, 0.2)
                 }
                 
                 kline
                   .to(k1.current.y2.baseVal, 0.4, {value: 138.4, ease: Back.easeInOut}, 0)
                   .to(k1.current, 0.01, {opacity: 1}, 0)
                   .to(k2.current, 0.01, {opacity: 1}, 0.2)
                   addLineDecTween(kline, k1d1.current, 0.3, 419, 139, 0.1)
                   addDotDecTween(kline, k2d[0], 0.25, 2, 0.2)
                   addDotDecTween(kline, k2d[1], 0.25, 2, 0.4)
                   addDotDecTween(kline, k2d[2], 0.25, 2, 0.6)
                   addDotDecTween(kline, k2d[3], 0.25, 2, 0.8)
                 mainTimeline.add(kline, 1.7)
               
                 // Y TIMELINE
                 const yline = new TimelineLite()
                 yline
                   .to(y1.current.x2.baseVal, 0.3, {value: 493.6, ease: Back.easeOut}, 0)
                   .to(y1.current.y2.baseVal, 0.3, {value: 112.6, ease: Back.easeOut}, 0)
                   .to(y2.current.x2.baseVal, 0.4, {value: 472.6, ease: Back.easeOut}, 0.15)
                   .to(y2.current.y2.baseVal, 0.4, {value: 168.6, ease: Back.easeOut}, 0.15)
                   .to(y1.current, 0.01, {opacity: 1}, 0)
                   .to(y2.current, 0.01, {opacity: 1}, 0.15)
                   addLineDecTween(yline, y1d[0], 0.3, 470, 155, 0.3)
                   addLineDecTween(yline, y1d[1], 0.3, 478, 120, 0.4)
                   addDotDecTween(yline, y2d[0], 0.25, 2, 0.1)
                   addDotDecTween(yline, y2d[1], 0.25, 2, 0.2)
                 mainTimeline.add(yline, 2)
               
                 // O TIMELINE
                 const oline = new TimelineLite()
                 o1.current.style.opacity = 1
                 oline
                   .to(o1.current.rx.baseVal, 0.5, {value: 27, ease: Back.easeOut}, 0)
                   .to(o1.current.ry.baseVal, 0.5, {value: 40.5, ease: Back.easeOut}, 0)
                   .to(o1d[0].rx.baseVal, 0.6, {value: 27, ease: Back.easeOut}, 0.1)
                   .to(o1d[0].ry.baseVal, 0.6, {value: 40.5, ease: Back.easeOut}, 0.1)
                   .to(o1d[1].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.2)
                   .to(o1d[1].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.2)
                   .to(o1d[2].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.3)
                   .to(o1d[2].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.3)
                   .to(o1d[3].rx.baseVal, 0.6, {value: 27, ease: Quad.easeOut}, 0.4)
                   .to(o1d[3].ry.baseVal, 0.6, {value: 40.5, ease: Quad.easeOut}, 0.4)
                 mainTimeline.add(oline, 2.2)
               
                 // U TIMELINE
                 const uline = new TimelineLite()
                 const length = u1.current.getTotalLength()
                 u1.current.style.opacity = 1
                 u1.current.style.strokeDasharray = length
                 u1.current.style.strokeDashoffset = length
                 uline
                   .to(u1.current, 0.5, {strokeDashoffset: 0, ease: Quad.easeInOut}, 0)
                 addLineDecTween(uline, u1d[0], 0.3, 626, 60, 0.3)
                   addLineDecTween(uline, u1d[1], 0.3, 620, 60, 0.4)
                 mainTimeline.add(uline, 2.4)
               
                 // ! TIMELINE
                 const eline = new TimelineLite()
                 e2.current.style.opacity = 1
                 eline
                   .to(e2.current.rx.baseVal, 0.3, {value: 6, ease: Back.easeOut}, 0.3)
                   .to(e2.current.ry.baseVal, 0.3, {value: 6, ease: Back.easeOut}, 0.3)
                   .to(e1.current.x2.baseVal, 0.3, {value: 658.6, ease: Back.easeInOut}, 0)
                   .to(e1.current.y2.baseVal, 0.3, {value: 130.6, ease: Back.easeInOut}, 0)
                   .to(e1.current, 0.01, {opacity: 1}, 0)
                 addLineDecTween(eline, e1d[0], 0.3, 653, 118, 0.1)
                 addLineDecTween(eline, e1d[1], 0.3, 650, 110, 0.2)
                 addLineDecTween(eline, e1d[2], 0.3, 673, 86, 0.3)
                 mainTimeline.add(eline, 2.6)
               
                 // TEXT TIMELINE
                 
                 const textTl = new TimelineLite()
                 if(tspans[0].dx.baseVal[0]) {
                   textTl.to(tspans[0].dx.baseVal[0], 0.6, {value: 0, ease: Cubic.easeOut}, 1)
                   textTl.to(tspans[0].dy.baseVal[0], 0.6, {value: -1, ease: Cubic.easeOut}, 1)
                 } else {
                   tspans[0].setAttribute('dx', '0')
                   tspans[0].setAttribute('dy', '0')
                 }
                 for (let i = tspans.length-1; i >= 0; i--) {
                     textTl.to(tspans[i], 0.3, {opacity: 1}, 1 + (tspans.length-1-i)*0.05)
                   }
                 addUnderlineTween(textTl, underlines[0], 0.5, 664, 153, 370, 167, 0.2)
                 addUnderlineTween(textTl, underlines[1], 0.51, 670, 160, 370, 175, 0.3)
                 addUnderlineTween(textTl, underlines[2], 0.52, 678, 168, 370, 183, 0.4)
                 addUnderlineTween(textTl, underlines[3], 0.53, 686, 176, 370, 191, 0.5)
               
                 mainTimeline.add(textTl, 2) 
               
                 mainTimeline.timescale = 0.6
                 mainTimeline.play()
               
     }, [])

    

    return (
            <svg ref={svgRef} className={styles.thankYouSvg} version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 800 280" enableBackground="new 0 0 800 280">
                
                {/* underlines */}
                <line ref={underline1} className={`${styles.underline} ${styles.plum}`} x1="146" y1="176" x2="146" y2="176"/>
                <line ref={underline2} className={`${styles.underline} ${styles.blue}`} x1="146" y1="184" x2="146" y2="184"/>
                <line ref={underline3} className={`${styles.underline} ${styles.purple}`} x1="146" y1="192" x2="146" y2="192"/>
                <line ref={underline4} className={`${styles.underline} ${styles.lime}`} x1="146" y1="200" x2="146" y2="200"/>
                
                {/* T */}
                <line ref={t1} x1="151.6" y1="68.4" x2="151.6" y2="68.4"/>
                <line ref={t1d1} className={`${styles.dec} ${styles.blue}`} x1="159" y1="70" x2="159" y2="70" />
                <line ref={t1d2} className={`${styles.dec} ${styles.lime}`} x1="165" y1="70" x2="165" y2="70" />
                <line ref={t2} x1="113.6" y1="70.6" x2="113.6" y2="70.6"/>
                <line ref={t2d1} className={`${styles.dec} ${styles.purple}`} x1="106" y1="62" x2="106" y2="62" />
                <line ref={t2d2} className={`${styles.dec} ${styles.lime}`} x1="102" y1="55" x2="102" y2="55" />
                <line ref={t2d3} className={`${styles.dec} ${styles.plum}`} x1="98" y1="50" x2="98" y2="50" />
                
                {/* H */}
                <line ref={h1} id="h1" x1="214.6" y1="51.4" x2="214.6" y2="51.4"/>
                <line ref={h2} id="h2" x1="267.6" y1="86.6" x2="267.6" y2="86.6"/>
                <line ref={h2d1} id="h2d1" className={`${styles.dec} ${styles.purple}`} x1="220" y1="109" x2="220" y2="109" />
                <line ref={h2d2} id="h2d2" className={`${styles.dec} ${styles.plum}`} x1="220" y1="115" x2="220" y2="115" />
                <line ref={h2d3} id="h2d3" className={`${styles.dec} ${styles.lime}`} x1="220" y1="121" x2="220" y2="121" />
                <line ref={h3} id="h3" x1="264.6" y1="47.4" x2="264.6" y2="47.4"/>
                <ellipse ref={h3d1} id="h3d1" className={`${styles.dec} ${styles.blue}`} cx="256" cy="51" rx="0" ry="0"/>
                <ellipse ref={h3d2} id="h3d2" className={`${styles.dec} ${styles.dot} ${styles.plum}`} cx="256" cy="61" rx="0" ry="0"/>
                <ellipse ref={h3d3} id="h3d3" className={`${styles.dec} ${styles.dot} ${styles.purple}`} cx="256" cy="71" rx="0" ry="0"/>
                <ellipse ref={h3d4} id="h3d4" className={`${styles.dec} ${styles.dot} ${styles.lime}`} cx="256" cy="81" rx="0" ry="0"/>
                
                {/* A */}
                <polyline ref={a1} id="a1" points="305.6,51.6 305.6,51.6 305.6,51.6 "/>
                <line ref={a2} id="a2" x1="293.6" y1="101.4" x2="293.6" y2="101.4"/>
                <line ref={a2d1} id="a2d1" className={`${styles.dec} ${styles.blue}`} x1="307" y1="120" x2="307" y2="120" />
                <line ref={a2d2} id="a2d2" className={`${styles.dec} ${styles.lime}`} x1="307" y1="127" x2="307" y2="127" />
                <line ref={a2d3} id="a2d3" className={`${styles.dec} ${styles.plum}`} x1="307" y1="134" x2="307" y2="134" />
                
                {/* N */}
                <line ref={n1d1} id="n1d1" className={`${styles.dec} ${styles.purple}`} x1="352" y1="147" x2="352" y2="147" />
                <line ref={n1d2} id="n1d2" className={`${styles.dec} ${styles.blue}`} x1="358" y1="147" x2="358" y2="147" />
                <line ref={n1d3} id="n1d3" className={`${styles.dec} ${styles.plum}`} x1="363" y1="147" x2="363" y2="147" />
                <line ref={n1d4} id="n1d4" className={`${styles.dec} ${styles.lime}`} x1="369" y1="80" x2="369" y2="80" />
                <line ref={n1d5} id="n1d5" className={`${styles.dec} ${styles.plum}`} x1="365" y1="74" x2="365" y2="74" />
                <polyline ref={n1} id="n1" points="345.6,145.4 345.6,145.4 345.6,145.4 
                345.6,145.4 "/>
                
                {/* K */}
                <line ref={k1d1} id="k1d1" className={`${styles.dec} ${styles.blue}`} x1="419" y1="60" x2="419" y2="60" />
                <line ref={k1} id="k1" x1="411.6" y1="56.4" x2="411.6" y2="56.4"/>
                <polyline ref={k2} id="k2" points="414.1,97.6 414.1,97.6 414.1,97.6 "/>
                <ellipse ref={k2d1} id="k2d1" className={`${styles.dec} ${styles.blue}`} cx="430" cy="103" rx="0" ry="0"/>
                <ellipse ref={k2d2} id="k2d2" className={`${styles.dec} ${styles.dot} ${styles.plum}`} cx="439" cy="112" rx="0" ry="0"/>
                <ellipse ref={k2d3} id="k2d3" className={`${styles.dec} ${styles.dot} ${styles.purple}`} cx="447" cy="121" rx="0" ry="0"/>
                <ellipse ref={k2d4} id="k2d4" className={`${styles.dec} ${styles.dot} ${styles.lime}`} cx="455" cy="130" rx="0" ry="0"/>
                
                {/* Y */}
                <line ref={y1d1} id="y1d1" className={`${styles.dec} ${styles.plum}`} x1="510" y1="56" x2="510" y2="56" />
                <line ref={y1d2} id="y1d2" className={`${styles.dec} ${styles.blue}`} x1="502" y1="60" x2="502" y2="60" />
                <line ref={y1} id="y1" x1="463.6" y1="62.6" x2="463.6" y2="62.6"/>
                <line ref={y2} id="y2" x1="517.6" y1="56.6" x2="517.6" y2="56.6"/>
                <ellipse ref={y2d1} id="y2d1" className={`${styles.dec} ${styles.dot} ${styles.purple}`} cx="459" cy="75" rx="0" ry="0"/>
                <ellipse ref={y2d2} id="y2d2" className={`${styles.dec} ${styles.dot} ${styles.lime}`} cx="465" cy="84" rx="0" ry="0"/>
                
                {/* O */}
                <ellipse ref={o1d1} id="o1d1" className={`${styles.dec} ${styles.dot} ${styles.purple}`} cx="544.6" cy="110.1" rx="0" ry="0"/>
                <ellipse ref={o1d2} id="o1d2" className={`${styles.dec} ${styles.dot} ${styles.plum}`} cx="544.6" cy="110.1" rx="0" ry="0"/>
                <ellipse ref={o1d3} id="o1d3" className={`${styles.dec} ${styles.blue}`} cx="544.6" cy="110.1" rx="0" ry="0"/>
                <ellipse ref={o1d4} id="o1d4" className={`${styles.dec} ${styles.dot} ${styles.lime}`} cx="544.6" cy="110.1" rx="0" ry="0"/>
                <ellipse ref={o1} id="o1" cx="544.6" cy="110.1" rx="0" ry="0"/>
                
                {/* U */}
                <path ref={u1} id="u1" d="M580.6,63.4v43.1c0,0,3.2,42,26.2,44
                    s26.8-43.5,26.8-43.5V63.4"/>
                <line ref={u1d1} id="u1d1" className={`${styles.dec} ${styles.purple}`} x1="626" y1="114" x2="626" y2="114" />
                <line ref={u1d2} id="u1d2" className={`${styles.dec} ${styles.plum}`} x1="620" y1="106" x2="620" y2="106" />
                
                {/* ! */}
                <line ref={e1} id="e1" x1="669.6" y1="56.6" x2="669.6" y2="56.6"/>
                <line ref={e1d1} id="e1d1" className={`${styles.dec} ${styles.lime}`} x1="662" y1="56" x2="662" y2="56" />
                <line ref={e1d2} id="e1d2" className={`${styles.dec} ${styles.blue}`} x1="658" y1="56" x2="658" y2="56" />
                <line ref={e1d3} id="e1d3" className={`${styles.dec} ${styles.plum}`} x1="677" y1="56" x2="677" y2="56" />
                <ellipse ref={e2} id="e2" cx="655" cy="150" rx="0" ry="0"/>
                
                {/* you're awesome */}
                <text ref={text} x="150" y="203" fontSize="30" id="text">
                    <tspan ref={tspan1} dx="-380" dy="20">+</tspan>
                    <tspan ref={tspan2} dy="-0.7">{amount}</tspan>
                    <tspan ref={tspan3} dy="-0.7">&nbsp;</tspan>
                    <tspan ref={tspan4} dy="-0.7">L</tspan>
                    <tspan ref={tspan5} dy="-0.7">O</tspan>
                    <tspan ref={tspan6} dy="-0.7">V</tspan>
                    <tspan ref={tspan7} dy="-0.7">E</tspan>
                    <tspan ref={tspan8} dy="-0.7">&nbsp;</tspan>
                    <tspan ref={tspan9} dy="-0.7">P</tspan>
                    <tspan ref={tspan10} dy="-0.7">O</tspan>
                    <tspan ref={tspan11} dy="-0.7">I</tspan>
                    <tspan ref={tspan12} dy="-0.7">N</tspan>
                    <tspan ref={tspan13} dy="-0.7">T</tspan>
                    <tspan ref={tspan14} dy="-0.7">{amount > 1 ? 'S' : ''}</tspan>
                </text>
            </svg>
    )
}

export default ThankYou