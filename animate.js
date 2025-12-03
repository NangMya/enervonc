document.addEventListener("DOMContentLoaded", function () {
  const focusFrame = document.querySelector(".focus-frame");

  const sceneEl = document.querySelector("a-scene");

  sceneEl.addEventListener("click", () => {
    //window.location.href = "https://www.youtube.com/";
    alert("CTA Button Clicked!");
  });

  document.querySelector("a-scene").addEventListener("loaded", () => {
    focusFrame.style.display = "block";
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

    function resetElementAnimations(elements) {
      elements.forEach((el) => {
        el.setAttribute("opacity", "0");
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

    const smallTarget = document.querySelector("#smallTarget");

    smallTarget.addEventListener("targetLost", (event) => {
      focusFrame.style.display = "block";
    });
    smallTarget.addEventListener("targetFound", (event) => {
      focusFrame.style.display = "none";
      resetAnimations();
      center_medicine.setAttribute("position", "0.01 0.06 0.2");
      center_medicine.setAttribute("scale", "0.53 0.2 0.1");
      envc.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 1000;"
      );
      image1.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 1500;"
      );
      image2.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 1500;"
      );
      image3.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 1500;"
      );

      man.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 12000;"
      );
      text.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 13000;"
      );
      ctaButton.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 13000;"
      );
      learnMore.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay: 13000;"
      );

      image1.setAttribute(
        "animation__position",
        "property: position; from: 0 2 0.1; to: 0 0.75 0.1; dur: 1000; delay: 1500; easing: easeInOutSine;"
      );
      image2.setAttribute(
        "animation__position",
        "property: position; from: -0.45 2 0.1; to: -0.45 0.7 0.1; dur: 1000; delay: 1500; easing: easeInOutSine;"
      );
      image3.setAttribute(
        "animation__position",
        "property: position; from: 0.45 2 0.05; to: 0.45 0.72 0.05; dur: 1000; delay: 1500; easing: easeInOutSine;"
      );

      image1.setAttribute(
        "animation__position_animated",
        "property: position; from: 0 0.75 0.1; to: 0 0.85 0.1; dur: 1000; delay:2000; easing: easeInOutSine; loop: true"
      );
      image2.setAttribute(
        "animation__position_animated",
        "property: position; from: -0.45 0.7 0.1; to: -0.5 0.8 0.1; dur: 1000; delay:2000; easing: easeInOutSine; loop: true"
      );
      image3.setAttribute(
        "animation__position_animated",
        "property: position; from: 0.45 0.71 0.05; to: 0.5 0.81 0.05; dur: 1000; delay:2000; easing: easeInOutSine; loop: true"
      );

      center_medicine.setAttribute(
        "animation__opacity",
        "property: opacity; from: 0; to: 1; dur: 1000; delay:5000;"
      );
      center_medicine.setAttribute(
        "animation__scale_out",
        "property: scale; from: 0.53 0.2 0.1; to:0.2 0.05 0.2; dur: 1500; delay:8000; easing: easeInOutSine;"
      );

      center_medicine.setAttribute(
        "animation__move_curve1",
        "property: position; from: 0.01 0.06; to: 0.3 0.06 0.3; dur: 200; delay: 8000; easing: easeInOutSine;"
      );
      center_medicine.setAttribute(
        "animation__move_curve2",
        "property: position; from: 0.3 0.06 0.3; to: 0.4 0.22 0.35; dur: 200; delay: 8200; easing: easeInOutSine;"
      );
      center_medicine.setAttribute(
        "animation__move_curve3",
        "property: position; from: 0.4 0.22 0.35; to: 0.5 0.32 0.4; dur: 200; delay: 84000; easing: easeInOutSine;"
      );

      center_medicine.setAttribute(
        "animation__move_curve4",
        "property: position;from:0.5 0.32 0.4; to: 0.6 0.42 0.45; dur: 200; delay: 8600; easing: easeInOutSine;"
      );
      center_medicine.setAttribute(
        "animation__move_curve5",
        "property: position;from: 0.6 0.42 0.45;  to: 0.7 0.52 0.51; dur: 200; delay: 8800; easing: easeInOutSine;"
      );
      center_medicine.setAttribute(
        "animation__move_curve6",
        "property: position;from:  0.7 0.52 0.51;  to: 0.35 0.52 0.55; dur: 500; delay: 9000; easing: easeInElastic;"
      );

      image3.setAttribute(
        "animation__position_change",
        "property: position; from: 0.45 0.71 0.05; to: 0.5 2 0.05; dur: 500; delay: 9500; easing: easeInOutSine;"
      );
      image3.setAttribute(
        "animation__opacity_out",
        "property: opacity; from: 1; to: 0; dur: 500; delay: 9500;"
      );

      center_medicine.setAttribute(
        "animation__move_curve7",
        "property: position;from:  0.35 0.52 0.55;  to: 0.1 0.52 0.55; dur: 500; delay: 9500; easing: easeInElastic;"
      );
      image1.setAttribute(
        "animation__position_change",
        "property: position; from: 0 0.75 0.1; to: 0 2 0.1; dur: 500; delay: 10000; easing: easeInOutSine;"
      );
      image1.setAttribute(
        "animation__opacity_out",
        "property: opacity; from: 1; to: 0; dur: 500; delay: 10000;"
      );
      center_medicine.setAttribute(
        "animation__move_curve8",
        "property: position;from:  0.1 0.52 0.55;  to: -0.28 0.52 0.55; dur: 500; delay: 10500; easing: easeInElastic;"
      );

      image2.setAttribute(
        "animation__position_change",
        "property: position; from: -0.45 0.7 0.1; to:-0.45 2 0.1; dur: 500; delay: 11000; easing: easeInOutSine;"
      );
      image2.setAttribute(
        "animation__opacity_out",
        "property: opacity; from: 1; to: 0; dur: 500; delay: 11000;"
      );

      center_medicine.setAttribute(
        "animation__opacity_out",
        "property: opacity; from: 1; to: 0; dur: 1000; delay: 10500;"
      );

      man.setAttribute(
        "animation__position",
        "property: position; from: 0 0 -0.2; to: 0 0.58 0.07; dur: 2000; delay: 12000; easing: easeInOutSine;"
      );
      text.setAttribute(
        "animation__position",
        "property: position; from: 0 0 0; to: 0 1.1 0.2; dur: 2000; delay: 13000; easing: easeInOutSine;"
      );

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
