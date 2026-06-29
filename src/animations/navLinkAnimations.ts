import gsap from 'gsap';

const HOVER_SCALE = 1.3333;
const INACTIVE_SCALE = 0.666;

export const stretchOnHoverEnter = (letters: HTMLElement[]) => {
  const mid = (letters.length - 1) / 2;

  gsap.to(letters, {
    scale: HOVER_SCALE,
    duration: 0.35,
    ease: 'power2.out',
    stagger: {
      each: 0.02,
      from: 'center',
    },
  });

  letters.forEach((letter, i) => {
    const distanceFromCenter = i - mid;
    gsap.to(letter, {
      x: distanceFromCenter * 5,
      duration: 0.35,
      ease: 'power2.out',
    });
  });
};

export const stretchOnHoverLeave = (letters: HTMLElement[]) => {
  gsap.to(letters, {
    scale: 1,
    x: 0,
    duration: 0.6,
    ease: 'elastic.out(1, 0.4)',
    stagger: {
      each: 0.02,
      from: 'center',
    },
  });
};

export const startActiveGradientLoop = (element: HTMLElement) => {
  return gsap.to(element, {
    backgroundPosition: '300% center',
    duration: 4,
    ease: 'linear',
    repeat: -1,
  });
};

/**
 * Joué quand un lien INACTIF devient ACTIF.
 * Tout démarre dès le clic, en parallèle : leave des lettres en arrière-plan,
 * fade-out rapide des lettres, fade-in + scale permanent du gradient, et son sweep gauche -> droite.
 */
export const activateEnterAnimation = (
  letters: HTMLElement[],
  gradientEl: HTMLElement,
  lettersWrapperEl: HTMLElement,
  onSweepComplete?: () => void
) => {
  gsap.set(gradientEl, { backgroundPosition: '0% center' });

  const tl = gsap.timeline();

  // 1. Leave classique des lettres séparées (en arrière-plan, ne bloque plus l'apparition du gradient)
  if (letters.length) {
    tl.to(letters, {
      scale: 1,
      x: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
      stagger: {
        each: 0.02,
        from: 'center',
      },
    }, 0);
  }

  // Fade-out quasi immédiat de la couche "lettres"
  tl.to(
    lettersWrapperEl,
    {
      opacity: 0,
      duration: 0.15,
      ease: 'power1.out',
    },
    0
  );

  // 2. Fade-in + montée à l'échelle active finale (reste à HOVER_SCALE), dès le clic
  tl.to(
    gradientEl,
    {
      opacity: 1,
      scale: HOVER_SCALE,
      duration: 0.3,
      ease: 'power2.out',
    },
    0
  );

  // 3. Sweep ponctuel du dégradé, gauche -> droite, démarre aussitôt aussi
  tl.to(
    gradientEl,
    {
      backgroundPosition: '100% center',
      duration: 0.5,
      ease: 'power2.inOut',
    },
    0
  );

  if (onSweepComplete) {
    tl.call(onSweepComplete);
  }

  return tl;
};

/**
 * Joué quand un lien ACTIF devient INACTIF.
 * Le span gradient rétrécit à INACTIVE_SCALE en élastique (même easing que le leave classique),
 * tandis que le dégradé fade-out et la couche "lettres" (couleur inactive) fade-in en simultané.
 */
export const deactivateLeaveAnimation = (
  gradientEl: HTMLElement,
  lettersWrapperEl: HTMLElement,
  onComplete?: () => void
) => {
  gsap.set(lettersWrapperEl, { opacity: 0 });

  const tl = gsap.timeline({ onComplete });

  tl.to(gradientEl, {
    scale: INACTIVE_SCALE,
    duration: 0.6,
    ease: 'elastic.out(1, 0.4)',
  });

  tl.to(
    gradientEl,
    {
      opacity: 0,
      duration: 0.4,
      ease: 'power1.inOut',
    },
    '<'
  );

  tl.to(
    lettersWrapperEl,
    {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut',
    },
    '<'
  );

  return tl;
};