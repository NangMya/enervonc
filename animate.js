import "/style.css"
document.addEventListener("DOMContentLoaded", function () {
  const focusFrame = document.querySelector(".focus-frame");
  const sceneEl = document.querySelector("a-scene");

  // CTA Button အတွက် event listener ကို target entity ပေါ်တွင်သာ ထားသင့်သည်
  // Global scene click ကို ဖျက်လိုက်ပြီး ctaButton ပေါ်တွင်သာ ထားမည် (အောက်ပါ targetFound တွင်)
  // sceneEl.addEventListener("click", () => {
  //   alert("CTA Button Clicked!");
  // });


  document.querySelector("a-scene").addEventListener("loaded", () => {
    focusFrame.style.display = "block";
    
    // ... (အခြား code များ မပြောင်းလဲပါ)
    const smallImages = [
      "envc",
      "image1",
      "image2",
      "image3",
      "man",
      "text",
      "center_medicine",
      "ctaButton",
      "learnMore",
    ];

    function getElementsByIds(ids) {
      return ids.map((id) => document.getElementById(id));
    }

    const [
      envc,
      image1,
      image2,
      image3,
      man,
      text,
      center_medicine,
      ctaButton,
      learnMore,
    ] = getElementsByIds(smallImages);
    
    // ... (resetElementAnimations and resetAnimations functions များ မပြောင်းလဲပါ)
    function resetElementAnimations(elements) {
      elements.forEach((el) => {
        el.setAttribute("opacity", "0");
        // existing attribute removals
        el.removeAttribute("animation__opacity");
        el.removeAttribute("animation__opacity_out");
        el.removeAttribute("animation_cale");
        el.removeAttribute("animation__position");
        el.removeAttribute("animation__position_change");
        el.removeAttribute("animation__position_animated");
        el.removeAttribute("animation__scale_out");
        el.removeAttribute("animation__move_curve1");
        el.removeAttribute("animation__move_curve2");
        el.removeAttribute("animation__move_curve3");
        el.removeAttribute("animation__move_curve4");
        el.removeAttribute("animation__move_curve5");
        el.removeAttribute("animation__move_curve6");
        el.removeAttribute("animation__move_curve7");
        el.removeAttribute("animation__move_curve8");
        el.setAttribute("visible", "true");
      });
    }

    function resetAnimations() {
      const allImages = [...smallImages].map((id) =>
        document.getElementById(id)
      );
      resetElementAnimations(allImages);
    }

    // ... (targetLost event listener မပြောင်းလဲပါ)
    const smallTarget = document.querySelector("#smallTarget");

    smallTarget.addEventListener("targetLost", (event) => {
      focusFrame.style.display = "block";
    });
    
    smallTarget.addEventListener("targetFound", (event) => {
      focusFrame.style.display = "none";
      resetAnimations();

      // CTA Button အတွက် click listener ထည့်သည်
      ctaButton.addEventListener("click", () => {
        // window.location.href = "https://www.youtube.com/"; // လိုအပ်ပါက ပြန်ဖွင့်နိုင်သည်
        alert("Learn More Button Clicked!");
      });

      // HTML တွင် ပြောင်းထားသော original position & scale ကို set ပြန်လုပ်သည်
      center_medicine.setAttribute("position", "0 0.06 0.25");
      center_medicine.setAttribute("scale", "0.5 0.2 0.5");


      // ----------------------------------------------------
      // PHASE 1: Initial fade in (Smoothness အတွက် duration တိုပြီး easing ပြောင်းသည်)
      // ----------------------------------------------------
      envc.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 500; delay: 500; easing: easeOutQuad;"
      );
      
      // Arrow images: Opacity and initial drop animation
      image1.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 500; delay: 1000;"
      );
      image2.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 500; delay: 1000;"
      );
      image3.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 500; delay: 1000;"
      );

      // Initial position: ပိုဝေးတဲ့ Z-axis ကနေ စဆင်းလာအောင် ပြင်ဆင်သည်
      image1.setAttribute(
        "animation__position",
        "property: position; from: 0 1.5 0.5; to: 0 0.75 0.2; dur: 800; delay: 1000; easing: easeOutBack;" // P: 0 0.75 0.2 (HTML နေရာ)
      );
      image2.setAttribute(
        "animation__position",
        "property: position; from: -0.8 1.5 0.5; to: -0.45 0.7 0.15; dur: 800; delay: 1000; easing: easeOutBack;" // P: -0.45 0.7 0.15
      );
      image3.setAttribute(
        "animation__position",
        "property: position; from: 0.8 1.5 0.5; to: 0.45 0.72 0.1; dur: 800; delay: 1000; easing: easeOutBack;" // P: 0.45 0.72 0.1
      );

      // Floating animation (Duration ကို နှေးအောင် လုပ်လိုက်သည်)
      image1.setAttribute(
        "animation__position_animated",
        "property: position; from: 0 0.75 0.2; to: 0 0.85 0.2; dur: 2000; delay: 1800; easing: easeInOutSine; dir: alternate; loop: true"
      );
      image2.setAttribute(
        "animation__position_animated",
        "property: position; from: -0.45 0.7 0.15; to: -0.5 0.8 0.15; dur: 2000; delay: 1800; easing: easeInOutSine; dir: alternate; loop: true"
      );
      image3.setAttribute(
        "animation__position_animated",
        "property: position; from: 0.45 0.72 0.1; to: 0.5 0.82 0.1; dur: 2000; delay: 1800; easing: easeInOutSine; dir: alternate; loop: true"
      );
      
      // ----------------------------------------------------
      // PHASE 2: Center Medicine Animation
      // ----------------------------------------------------
      center_medicine.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 4000; easing: easeInQuad;"
      );

      // Scale down to a smaller, rounder pill shape before moving
      center_medicine.setAttribute(
        "animation__scale_out",
        "property: scale; from: 0.5 0.2 0.5; to: 0.2 0.05 0.2; dur: 1000; delay: 6000; easing: easeInOutQuad;"
      );

      // Smooth Curve Movement (Duration နှေးပြီး လမ်းကြောင်း တိုတောင်းအောင် ချိန်ညှိသည်)
      const curveDelay = 7000;
      const curveDur = 300; 
      center_medicine.setAttribute(
        "animation__move_curve1",
        `property: position; to: 0.3 0.2 0.35; dur: ${curveDur}; delay: ${curveDelay}; easing: easeInOutSine;`
      );
      center_medicine.setAttribute(
        "animation__move_curve2",
        `property: position; to: 0.5 0.4 0.45; dur: ${curveDur}; delay: ${curveDelay + curveDur}; easing: easeInOutSine;`
      );
      center_medicine.setAttribute(
        "animation__move_curve3",
        `property: position; to: 0.7 0.6 0.55; dur: ${curveDur}; delay: ${curveDelay + curveDur * 2}; easing: easeInOutSine;`
      );
      // Reaches destination and bounces (Easing: easeOutBounce for realistic bounce)
      center_medicine.setAttribute(
        "animation__move_curve4",
        `property: position; to: 0.35 0.5 0.55; dur: 800; delay: ${curveDelay + curveDur * 3}; easing: easeOutBounce;` 
      );
      
      // Arrow 3 goes out
      const outDelay = curveDelay + curveDur * 3 + 800; // After bounce completes
      image3.setAttribute(
        "animation__position_change",
        `property: position; to: 0.5 2 0.05; dur: 500; delay: ${outDelay}; easing: easeInQuad;`
      );
      image3.setAttribute(
        "animation__opacity_out",
        `property: opacity; from: 1; to: 0; dur: 500; delay: ${outDelay};`
      );

      // Curve 5 - Move left (Z-axis is not changing to maintain distance)
      const curve5Delay = outDelay + 500;
      center_medicine.setAttribute(
        "animation__move_curve5",
        `property: position; to: 0.1 0.5 0.55; dur: 500; delay: ${curve5Delay}; easing: easeOutBounce;`
      );

      // Arrow 1 goes out
      const outDelay2 = curve5Delay + 500;
      image1.setAttribute(
        "animation__position_change",
        `property: position; to: 0 2 0.1; dur: 500; delay: ${outDelay2}; easing: easeInQuad;`
      );
      image1.setAttribute(
        "animation__opacity_out",
        `property: opacity; from: 1; to: 0; dur: 500; delay: ${outDelay2};`
      );
      
      // Curve 6 - Move further left
      const curve6Delay = outDelay2 + 500;
      center_medicine.setAttribute(
        "animation__move_curve6",
        `property: position; to: -0.28 0.5 0.55; dur: 500; delay: ${curve6Delay}; easing: easeOutBounce;`
      );

      // Arrow 2 goes out
      const outDelay3 = curve6Delay + 500;
      image2.setAttribute(
        "animation__position_change",
        `property: position; to:-0.45 2 0.1; dur: 500; delay: ${outDelay3}; easing: easeInQuad;`
      );
      image2.setAttribute(
        "animation__opacity_out",
        `property: opacity; from: 1; to: 0; dur: 500; delay: ${outDelay3};`
      );

      // Center medicine fades out at the end of the arrow animation
      center_medicine.setAttribute(
        "animation__opacity_out",
        `property: opacity; from: 1; to: 0; dur: 500; delay: ${outDelay3};`
      );

      // ----------------------------------------------------
      // PHASE 3: Final Man/Text/Button Animation (Delay ချိန်ညှိသည်)
      // ----------------------------------------------------
      const finalDelay = outDelay3 + 1000;
      
      man.setAttribute(
        "animation__opacity",
        `property: opacity; from: 0; to: 1; dur: 800; delay: ${finalDelay};`
      );
      man.setAttribute(
        "animation__position",
        `property: position; from: 0 0 -0.5; to: 0 0.58 0.3; dur: 1500; delay: ${finalDelay}; easing: easeOutQuart;`
      );

      text.setAttribute(
        "animation__opacity",
        `property: opacity; from: 0; to: 1; dur: 800; delay: ${finalDelay + 500};`
      );
      text.setAttribute(
        "animation__position",
        `property: position; from: 0 1.5 0.35; to: 0 1.2 0.35; dur: 1500; delay: ${finalDelay + 500}; easing: easeOutQuart;`
      );

      ctaButton.setAttribute(
        "animation__opacity",
        `property: opacity; from: 0; to: 1; dur: 800; delay: ${finalDelay + 1000};`
      );
      learnMore.setAttribute(
        "animation__opacity",
        `property: opacity; from: 0; to: 1; dur: 800; delay: ${finalDelay + 1000};`
      );


      // ... (animationcomplete event listeners မပြောင်းလဲပါ)
      // hide element for animation complete
      image1.addEventListener("animationcomplete", (event) => {
        if (event.detail.name === "animation__opacity_out") {
          image1.setAttribute("opacity", "0");
          image1.setAttribute("visible", "false");
        }
      });
      image2.addEventListener("animationcomplete", (event) => {
        if (event.detail.name === "animation__opacity_out") {
          image2.setAttribute("opacity", "0");
          image2.setAttribute("visible", "false");
        }
      });
      image3.addEventListener("animationcomplete", (event) => {
        if (event.detail.name === "animation__opacity_out") {
          image3.setAttribute("opacity", "0");
          image3.setAttribute("visible", "false");
        }
      });

      center_medicine.addEventListener("animationcomplete", (event) => {
        if (event.detail.name === "animation__opacity_out") {
          center_medicine.setAttribute("opacity", "0");
          center_medicine.setAttribute("visible", "false");
        }
      });
    });
  });
});