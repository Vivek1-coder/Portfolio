import React from 'react'

import HaloBackground from '@/components/HomeBackground'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Pop up
</div> */}
const Home = () => {
  // const vantaRef = useRef(null);
  // const [vantaEffect, setVantaEffect] = useState(null);

  // useEffect(() => {
  //   // Dynamically load VANTA.HALO from CDN
  //   const loadVanta = async () => {
  //     if (!vantaEffect) {
  //       const VANTA = await import("vanta/dist/vanta.halo.min"); // or local file if not in NPM
  //       setVantaEffect(
  //         VANTA.default({
  //           el: vantaRef.current,
  //           THREE: THREE,
  //           mouseControls: true,
  //           touchControls: true,
  //           gyroControls: false,
  //           minHeight: 200.0,
  //           minWidth: 200.0,
  //           baseColor: 0xff00ff,
  //           backgroundColor: 0x000000,
  //           amplitudeFactor: 1.2,
  //           size: 1.5,
  //         })
  //       );
  //     }
  //   };

  //   loadVanta();

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  return (
  
     <HaloBackground/>

  )
}

export default Home
