import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./How.css";

export default function How() {
    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="how-container">
            {/* Background Layer */}
            <div className="background"></div>

            {/* Main Content */}
            <div className="how-content">
                <h1 className="how-title">Astronaut Sleep-Integrated Training System</h1>

                {/* Buttons */}
                <div className="how-buttons">
                    <button className="btn pink" onClick={() => setShowVideo(true)}>
                        🎥 Watch Demo
                    </button>
                    <button className="btn green" onClick={() => navigate('/simulation')}>
                        🚀 Try Simulation
                    </button>
                </div>

                {/* How It Works Section */}
                <section className="section-container">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <span className="step-card-icon">🌙</span>
                            <h3>Before Sleep</h3>
                            <p>Astronaut selects a training scenario via neural headset interface with real-time brainwave monitoring.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">📊</span>
                            <h3>Sleep Monitoring</h3>
                            <p>Advanced AI system detects REM sleep patterns using multi-channel EEG signals and machine learning algorithms.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">🎯</span>
                            <h3>Dream Nudging</h3>
                            <p>Precision audio, light, and haptic cues gently steer the dream toward mission-specific training objectives.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">🚀</span>
                            <h3>Dream Training</h3>
                            <p>Lucid-trained astronauts practice complex tasks while others benefit from subconscious skill conditioning.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">📝</span>
                            <h3>Wake-Up Analysis</h3>
                            <p>Comprehensive EEG data combined with self-reports analyzed for performance insights and optimization.</p>
                        </div>
                    </div>
                </section>

                {/* System Capabilities Section */}
                <section className="section-container">
                    <h2 className="section-title">System Capabilities</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <span className="step-card-icon">🔥</span>
                            <h3>Lucid Dream Training</h3>
                            <p>Conscious control and awareness in dream state for deliberate practice and skill refinement.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">🧠</span>
                            <h3>Cognitive Reinforcement</h3>
                            <p>Enhanced memory consolidation and skill retention through targeted sleep-stage interventions.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">💪</span>
                            <h3>Stress Inoculation</h3>
                            <p>Safe exposure to high-pressure scenarios in controlled dream environments for resilience building.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">📚</span>
                            <h3>Memory Boost</h3>
                            <p>Strengthened procedural and declarative memory through optimized sleep architecture manipulation.</p>
                        </div>
                        <div className="step-card">
                            <span className="step-card-icon">🎮</span>
                            <h3>Simulation Replay</h3>
                            <p>Repeat and refine dream scenarios for mastery and confidence building in mission-critical tasks.</p>
                        </div>
                    </div>
                </section>

                {/* Video Modal */}
                {showVideo && (
                    <div className="video-modal">
                        <div className="video-content">
                            <button onClick={() => setShowVideo(false)}>✖</button>
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
