import { useEffect, useRef, useState } from "react";

const VantaFog = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadScripts = async () => {
      // Load THREE.js if not already present
      if (!window.THREE) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      // Load VANTA.FOG
      if (!window.VANTA || !window.VANTA.FOG) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js";
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      // Apply the effect
      if (!vantaEffect && window.VANTA && window.THREE) {
        const effect = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xdf76ed,
          midtoneColor: 0xdfb1ed,
          lowlightColor: 0xb81bd9,
          baseColor: 0x6919ef,
          blurFactor: 0.57,
          speed: 2.1,
        });
        setVantaEffect(effect);
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen" />;
};

export default VantaFog;
