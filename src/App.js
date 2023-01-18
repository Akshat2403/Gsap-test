import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function App() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".blue",
          markers: true,
          start: "top 0%",
          end: "bottom -100%",
          scrub: true,
          pin: true,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="green"></div>
    </>
  );
}

export default App;
