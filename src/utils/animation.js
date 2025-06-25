import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animationWithGsap = ( target, animationProps, scrollProps ) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: "top 85%",
            // end: "bottom 20%",
            // scrub: true,
            ...scrollProps,
        },
    }); // تأكد من أن العنصر الذي تريد تحريكه موجود هنا
}

export const animationWithGsapTimeLine = ( timeline,
    rotationRef,
    rotationState,
    firstTarget,
    animationProps,
    secondTarget
) => {
    // الرسم المتحرك الأساسي للدوران
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    });
     // رسوم متحركة متزامنة (باستخدام '<')
    timeline.to(
        firstTarget,
        {
        ...animationProps, // تأكد أن animationProps يحتوي على خصائص مثل x, y, opacity, etc.
        ease: "power2.inOut",
        },
        "<" // اختصار لـ 'بعد بدء الرسم المتحرك السابق مباشرة'
    );
    timeline.to(
        secondTarget,
        {
          ...animationProps,
          ease: "power2.inOut",
        },
        "<" // نفس التوقيت السابق
      );
}