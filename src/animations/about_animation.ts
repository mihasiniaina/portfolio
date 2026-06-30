import gsap from "gsap";

/* ----------------------------------------------------------------------- */
/* STATS — remplissage violet progressif gauche->droite + légère inclinaison */
/* ----------------------------------------------------------------------- */

export const statHoverEnter = (fillEl: HTMLElement, cardEl: HTMLElement) => {
  gsap.killTweensOf(fillEl);
  gsap.killTweensOf(cardEl);

  gsap.fromTo(
    fillEl,
    { scaleX: 0 },
    { scaleX: 1, duration: 0.45, ease: "power2.out", transformOrigin: "left center" }
  );

  gsap.to(cardEl, {
    skewX: -3,
    duration: 0.35,
    ease: "power2.out",
  });
};

export const statHoverLeave = (fillEl: HTMLElement, cardEl: HTMLElement) => {
  gsap.killTweensOf(fillEl);
  gsap.killTweensOf(cardEl);

  gsap.to(fillEl, {
    scaleX: 0,
    duration: 0.35,
    ease: "power2.in",
    transformOrigin: "right center",
  });

  gsap.to(cardEl, {
    skewX: 0,
    duration: 0.35,
    ease: "power2.out",
  });
};

/* ----------------------------------------------------------------------- */
/* SKILL CARDS — effet de brillance (shine) qui balaie la carte au survol  */
/* ----------------------------------------------------------------------- */

export const skillShineEnter = (shineEl: HTMLElement, cardEl: HTMLElement) => {
  gsap.killTweensOf(shineEl);
  gsap.fromTo(
    shineEl,
    { xPercent: -150, opacity: 0 },
    { xPercent: 150, opacity: 1, duration: 0.9, ease: "power2.inOut" }
  );

  gsap.to(cardEl, {
    borderColor: "rgba(167,139,250,0.55)",
    boxShadow: "0 0 24px rgba(124,58,237,0.25)",
    duration: 0.35,
    ease: "power2.out",
  });
};

export const skillShineLeave = (shineEl: HTMLElement, cardEl: HTMLElement) => {
  gsap.to(shineEl, {
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  gsap.to(cardEl, {
    borderColor: "rgba(124,58,237,0.2)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    duration: 0.4,
    ease: "power2.out",
  });
};

/* ----------------------------------------------------------------------- */
/* ICONES — fond en linear-gradient qui ne scintille QUE pendant le hover  */
/* ----------------------------------------------------------------------- */

export const iconGradientHoverEnter = (el: HTMLElement): gsap.core.Tween => {
  gsap.set(el, { backgroundPosition: "0% center" });

  return gsap.to(el, {
    backgroundPosition: "300% center",
    duration: 1.4,
    ease: "linear",
    repeat: -1,
  });
};

export const iconGradientHoverLeave = (el: HTMLElement, tween: gsap.core.Tween | null) => {
  tween?.kill();
  gsap.to(el, {
    backgroundPosition: "0% center",
    duration: 0.3,
    ease: "power2.out",
  });
};

/* ----------------------------------------------------------------------- */
/* TITRE — texte en linear-gradient (même palette que la navbar) qui boucle */
/* ----------------------------------------------------------------------- */

export const TITLE_GRADIENT =
  "linear-gradient(90deg, #a855f7, #ec4899, #38bdf8, #a855f7)";

export const startTitleGradientLoop = (el: HTMLElement) => {
  gsap.set(el, { backgroundSize: "300% auto", backgroundPosition: "0% center" });

  return gsap.to(el, {
    backgroundPosition: "300% center",
    duration: 4,
    ease: "linear",
    repeat: -1,
  });
};

export const stopTitleGradientLoop = (tween: gsap.core.Tween | null) => {
  tween?.kill();
};