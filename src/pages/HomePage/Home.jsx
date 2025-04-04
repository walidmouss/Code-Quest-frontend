import "./Home.css"
import React from 'react';
import styled from 'styled-components';
import { useCallback } from "react";  // React Hook to optimize re-renders
import Particles from "react-tsparticles";  // Main component
import { loadFull } from "tsparticles";  // Loads all particle features


function Home() {
    
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return(
        <div className="home_page">
            <div className="hero">
                <div className="hero_title">
                    <h1>Master Competitive <br></br> Programming <span className="highlight">Effortlessly</span></h1>
                    <p>Personalized coding challenges, curated for your skill level.
                    Solve. Learn. Improve.</p>
                    <button>Start Solving</button>
                    
                </div>
            </div>
            <div className="features">
                <p>4 boxes in a square grid</p>
                <p>AI-Powered Recommendations</p>
                <p>Track Your Progress</p>
                <p>Code in Our Built-in Editor</p>
                <p>Syncs with Codeforces</p>

            </div>
            <div className="testimonials">
            </div>
            <div className="problems">
                <p> horizontally scrollable trending problem card </p>
            </div>
            <div className="FAQ">

            </div>
        </div>

    );
}
export default Home;
