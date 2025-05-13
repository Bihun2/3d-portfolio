import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper"><a
            href="https://master.d1nl23ybi4cd28.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="first-project-link"
            style={{ display: 'block' }}
          >
              <img src="/images/project1.jpg" alt="3D Printing Marketplace" />
            </a>
            </div>
            <div className="text-content">
              <h2>
                A 3D printing marketplace with working cart and checkout.
              </h2>
              <p className="text-white-50 md:text-xl">
                A website built with Angular as Frontend, NodeJS as Backend, PostgreSQL as Database.
                Everything is currently hosted on AWS.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.jpg"
                  alt="Cooking App"
                />
              </div>
              <h2>Cooking App written in Flutter with Firebase Authentication and database</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.jpg" alt="FPKM" />
              </div>
              <h2>Full digital cluster dashboard. C++ embedded project.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
