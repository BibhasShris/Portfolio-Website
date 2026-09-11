import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import SelectedWorks from "../components/SelectedWorks";
import heroImg from "../assets/Hero_Image.png";

export default function HomePage() {
  const heroRef = useRef(null); // wrapper for GSAP + magnifier

  const [isHovering, setIsHovering] = useState(false);
  const [lensStyle, setLensStyle] = useState({});

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO FADE + SCALE IN
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // HERO ORGANIC FLOAT (x + y drift)
      gsap.to(heroRef.current, {
        x: () => gsap.utils.random(-12, 12),
        y: () => gsap.utils.random(-12, 12),
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHeroMove = (e) => {
    const wrapper = heroRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoom = 2;
    const lensSize = 160;
    const lensRadius = lensSize / 2;

    setLensStyle({
      left: x,
      top: y,
      width: lensSize,
      height: lensSize,
      backgroundImage: `url(${heroImg})`,
      backgroundSize: `${rect.width * zoom}px ${rect.height * zoom}px`,
      backgroundPosition: `${-(x * zoom - lensRadius)}px ${-(
        y * zoom -
        lensRadius
      )}px`,
    });
  };

  const scrollToWork = () => {
    const el = document.getElementById("selected-works"); // <- match section id
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="page">
      {/* ABOUT ME SECTION */}
      <section id="about" className="section about-section">
        <div className="content-container about-layout">
          <div className="about-text">
            <h1 className="section-title">ABOUT ME</h1>
            <p className="body-text">
              Hi, I’m Bibhas, a Creative Designer who has experience with
              graphic design, UI/UX, photography, and video production. I’m
              passionate about blending creativity, storytelling, and technology
              to solve design problems. I think every problem has a story, and
              great design begins by understanding it.
            </p>
          </div>

          <div className="about-graphic">
            <div
              className="hero-wrapper"
              ref={heroRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleHeroMove}
            >
              <img
                src={heroImg}
                alt="Bibhas skills hero"
                className="hero-image"
              />

              {isHovering && (
                <div className="hero-magnifier" style={lensStyle} />
              )}
            </div>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <div className="scroll-indicator" onClick={scrollToWork}>
          <span className="scroll-label">SCROLL DOWN</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* SELECTED WORKS (data-driven + animated) */}
      <SelectedWorks />
    </main>
  );
}
