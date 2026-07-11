import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Users, 
  Calendar, 
  Building, 
  BookOpen, 
  Wrench 
} from 'lucide-react';
import './MerlinDetail.css';

const MerlinDetail = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="merlin-detail">
      {/* Immersive Hero Header with cover.png as background */}
      <div className="merlin-hero-banner">
        <div className="merlin-hero-banner-overlay"></div>
        <div className="container merlin-hero-banner-content">
          <Link to="/#projects" className="back-link-over-bg">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          
          <div className="merlin-hero-banner-grid">
            <div className="merlin-titles-over-bg">
              <h1 className="merlin-main-title-over-bg">Designing Merlin</h1>
              <p className="merlin-main-subheading-over-bg">An AI-Assisted Workspace for Tiered Intelligence Reporting</p>
              
              <div className="merlin-meta-pills-over-bg">
                <span className="meta-pill-over-bg">Studio Project</span>
                <span className="meta-pill-over-bg">Enterprise UX</span>
                <span className="meta-pill-over-bg">Human-AI Collaboration</span>
              </div>
            </div>

            <div className="merlin-info-panel-over-bg glass-card-over-bg">
              <h3 className="info-panel-title-over-bg">Project Information</h3>
              <div className="info-items-over-bg">
                <div className="info-item-over-bg">
                  <span className="info-label-over-bg"><User size={16} /> Role</span>
                  <span className="info-value-over-bg">UX Research • UX Design • UI Design</span>
                </div>
                <div className="info-item-over-bg">
                  <span className="info-label-over-bg"><Users size={16} /> Team</span>
                  <span className="info-value-over-bg">3 Designers</span>
                </div>
                <div className="info-item-over-bg">
                  <span className="info-label-over-bg"><Calendar size={16} /> Duration</span>
                  <span className="info-value-over-bg">February 2026 – April 2026</span>
                </div>
                <div className="info-item-over-bg">
                  <span className="info-label-over-bg"><Building size={16} /> Partner</span>
                  <span className="info-value-over-bg">Laboratory of Analytical Sciences (LAS)</span>
                </div>
                <div className="info-item-over-bg">
                  <span className="info-label-over-bg"><BookOpen size={16} /> Course</span>
                  <span className="info-value-over-bg">MGXD Design Studio II</span>
                </div>
                <div className="info-item-over-bg" style={{ alignItems: 'center' }}>
                  <span className="info-label-over-bg"><Wrench size={16} /> Tools</span>
                  <span className="info-value-over-bg tools-icons-grid">
                    <span className="tool-tile figma-tile" data-tooltip="Figma">
                      <svg viewBox="0 0 38 38" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.5C19 6.46 16.54 4 13.5 4S8 6.46 8 9.5 10.46 15 13.5 15c3.04 0 5.5-2.46 5.5-5.5Z" fill="#F24E1E"/>
                        <path d="M19 9.5c0 3.04 2.46 5.5 5.5 5.5S30 12.54 30 9.5 27.54 4 24.5 4 19 6.46 19 9.5Z" fill="#FF7262"/>
                        <path d="M19 19c0-3.04-2.46-5.5-5.5-5.5S8 15.96 8 19s2.46 5.5 5.5 5.5c3.04 0 5.5-2.46 5.5-5.5Z" fill="#A259FF"/>
                        <path d="M19 28.5c0-3.04-2.46-5.5-5.5-5.5S8 25.46 8 28.5 10.46 34 13.5 34c3.04 0 5.5-2.46 5.5-5.5Z" fill="#1ABCFE"/>
                        <path d="M19 19c0 3.04 2.46 5.5 5.5 5.5S30 22.04 30 19s-2.46-5.5-5.5-5.5S19 15.96 19 19Z" fill="#0ACF83"/>
                      </svg>
                    </span>
                    <span className="tool-tile figjam-tile" data-tooltip="FigJam">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#FF70A6"/>
                      </svg>
                    </span>
                    <span className="tool-tile ae-tile" data-tooltip="Adobe After Effects">
                      Ae
                    </span>
                    <span className="tool-tile ai-tile" data-tooltip="Adobe Illustrator">
                      Ai
                    </span>
                    <span className="tool-tile notebooklm-tile" data-tooltip="NotebookLM">
                      NLM
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container merlin-container">

        {/* Overview */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Overview</h2>
          <div className="section-content-text">
            <p>
              Intelligence analysts work in environments where every reporting decision has operational consequences. A single report may need to be rewritten multiple times for different audiences, each with its own security clearance, mission requirements, and level of technical detail. This process, known as tiered reporting, requires analysts to preserve analytical intent while ensuring that sensitive information is appropriately sanitized before dissemination.
            </p>
            <p className="mt-4">
              Our studio partnered with the Laboratory of Analytical Sciences (LAS) to explore how AI could support this highly collaborative workflow without replacing human judgement.
            </p>
            <p className="mt-4">
              Working in a team of three, we focused on the perspective of Aisha, a Senior Report Releaser responsible for making final dissemination decisions. Through extensive workflow analysis, interviews with intelligence analysts, iterative prototyping, and multiple rounds of expert feedback, we designed Merlin.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="merlin-section">
          <h2 className="section-title-bold">The Challenge</h2>
          <div className="challenge-subsections mt-6">
            <div className="challenge-block">
              <h3 className="section-subheading-bold">Research Question</h3>
              <p className="highlight-quote">
                How might the design of an interface automate the tiered reporting process, so that reporter might more efficiently and knowledgeably team with AI to sanitize and deliver sensitive information across appropriate tiers?
              </p>
            </div>
            <div className="challenge-block mt-6">
              <h3 className="section-subheading-bold">Problem Space</h3>
              <p>
                Instead of redesigning the reporting workflow itself, our challenge was to design an interface that strengthened collaboration between analysts and AI while supporting three critical needs.
              </p>
            </div>
          </div>
        </section>

        {/* User Persona */}
        <section className="merlin-section">
          <h2 className="section-title-bold">USER PERSONA</h2>
          <div className="persona-box glass-card mt-6">
            <h3 className="persona-name">Meet Aisha – Senior Report Releaser</h3>
            <p className="persona-description-text">
              Drawing on eight years of intelligence experience including three as a releaser, Aisha makes final determinations on report dissemination, ensuring proper classification and setting appropriate distribution channels. She excels under pressure while balancing security concerns against customer information needs.
            </p>
          </div>
        </section>

        {/* Interview Insights */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Interview Insights</h2>
          <p className="mt-4">
            We conducted an interview with the reporter analysts,
          </p>
          
          <div className="insights-goals-grid mt-6">
            <div className="goal-card rounded-rect">
              <span className="goal-num">Goal 1</span>
              <p>Understand the responsibilities of a Senior Report Releaser.</p>
            </div>
            <div className="goal-card rounded-rect">
              <span className="goal-num">Goal 2</span>
              <p>Identify workflow bottlenecks and repetitive tasks.</p>
            </div>
            <div className="goal-card rounded-rect">
              <span className="goal-num">Goal 3</span>
              <p>Explore how AI could support, rather than replace, analyst decision-making.</p>
            </div>
          </div>

          <div className="key-insights-block mt-8">
            <h3 className="section-subheading-bold">Key insights:</h3>
            <div className="key-insights-table-container mt-4">
              <table className="key-insights-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Insight</th>
                    <th style={{ width: '70%' }}>Observation & Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="insight-highlight">Accuracy takes priority over speed</td>
                    <td>Analysts consistently emphasized that they would rather delay a report than release information they could not fully trust.</td>
                  </tr>
                  <tr>
                    <td className="insight-highlight">Revision tracking is highly manual</td>
                    <td>Comparing report versions often requires rereading entire documents to identify changes.</td>
                  </tr>
                  <tr>
                    <td className="insight-highlight">Policy knowledge is largely experience-based</td>
                    <td>Many release decisions depend on institutional memory rather than centralized guidance.</td>
                  </tr>
                  <tr>
                    <td className="insight-highlight">Coordination extends beyond the reporting tool</td>
                    <td>External approvals and communication frequently happen through email and phone calls, making progress difficult to track.</td>
                  </tr>
                  <tr>
                    <td className="insight-highlight">Analysts need foresight, not just notifications</td>
                    <td>Understanding what work is approaching their queue helps them plan and prioritize more effectively.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-image-container mt-8">
            <img 
              src="/projects/merlin/Pics/interview.png" 
              alt="Interview Insights" 
              className="merlin-inline-img" 
            />
          </div>
        </section>

        {/* Mapping Aisha's Workflow */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Mapping Aisha's Workflow:</h2>
          <p className="mt-4">
            Before designing any interface concepts, we mapped her responsibilities throughout the reporting lifecycle to understand where she gathered information, where decisions were made, and where uncertainty entered the process.
          </p>

          <div className="section-image-container mt-6">
            <img 
              src="/projects/merlin/Pics/user_journey_map.png" 
              alt="User Journey Map" 
              className="merlin-inline-img" 
            />
            <span className="image-caption">
              The journey map helped us identify recurring pain points, emotional highs and lows, coordination challenges, and opportunities for AI-assisted support throughout Aisha's workflow.
            </span>
          </div>
        </section>

        {/* Key Pain Points Considered */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Key Pain Points Considered:</h2>
          <div className="pain-points-grid mt-6">
            <div className="pain-point-card rounded-rect">
              <h3 className="card-item-title text-glow-blue">Lacks Personalized Workspace</h3>
              <p>Despite seeing team-wide workflows, senior releasers can’t efficiently prioritize tasks or customize report review queues.</p>
            </div>
            <div className="pain-point-card rounded-rect">
              <h3 className="card-item-title text-glow-purple">Analytical Drift Risk</h3>
              <p>As intelligence is sanitized across tiers, senior releasers risk introducing subtle shifts in meaning that can affect downstream interpretation.</p>
            </div>
            <div className="pain-point-card rounded-rect">
              <h3 className="card-item-title text-glow-blue">Revision Visibility Gap</h3>
              <p>Revised reports lack edit tracking, so senior reporters must often re-read full reports just to identify what has been changed or removed.</p>
            </div>
          </div>
        </section>

        {/* Exploring Ideas */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Exploring Ideas:</h2>
          <p className="mt-4">
            Here, we began exploring multiple interface concepts through rapid sketching. Rather than committing to a single solution, each team member independently generated concepts
          </p>
        </section>

        {/* Designing Through Critique */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Designing Through Critique:</h2>
          <p className="mt-4">
            Through classroom critiques and discussions with our instructor, we refined these ideas into clearer interaction patterns before translating them into mid-fidelity screens.
          </p>

          <div className="critique-comparison-container mt-8">
            <div className="comparison-images-grid">
              <div className="comparison-image-item">
                <img src="/projects/merlin/Pics/initial.png" alt="Initial screens" />
                <span>Initial Idea Sketches</span>
              </div>
              <div className="comparison-image-item">
                <img src="/projects/merlin/Pics/concepts.png" alt="Concept Sketch" />
                <span>Concepts Sketches</span>
              </div>
              <div className="comparison-image-item">
                <img src="/projects/merlin/Pics/final.png" alt="Final Screens" />
                <span>Final Variation Sketches</span>
              </div>
            </div>
          </div>
        </section>

        {/* Refining the Workflow */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Refining the Workflow:</h2>
          <p className="mt-4">
            As our understanding of Aisha's responsibilities evolved, we realized that her work extended across three distinct but interconnected activities. Rather than designing one large interface, we reorganized the workflow into focused segments that reflected how she actually approached report dissemination.
          </p>

          {/* Workflow flow chart */}
          <div className="workflow-flowchart-container mt-8">
            <div className="flowchart-box">Customer Management</div>
            <div className="flowchart-arrow">↓</div>
            <div className="flowchart-box">Aisha’s understanding of the Report</div>
            <div className="flowchart-arrow">↓</div>
            <div className="flowchart-box">Team’s understanding of Aisha’s Feedback</div>
          </div>

          <div className="section-image-container mt-8">
            <img 
              src="/projects/merlin/Pics/workflow.png" 
              alt="Workflow Process Diagram" 
              className="merlin-inline-img" 
            />
          </div>
        </section>

        {/* Bringing Ideas Back to the Experts */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Bringing Ideas Back to the Experts:</h2>
          <div className="section-content-text">
            <p>
              Rather than treating our first prototypes as finished solutions, we presented them to intelligence analysts for another round of evaluation. This session allowed us to validate whether our concepts aligned with real reporting practices and identify areas that required further refinement.
            </p>
            <p className="mt-4">
              One of the strongest themes from this feedback was the importance of reducing visual complexity. Analysts explained that their work already involved extensive reading and careful attention to detail, so any interface that introduced unnecessary visual noise would increase rather than reduce cognitive effort.
            </p>
            <p className="mt-4">
              These conversations significantly influenced the next iteration of Merlin, leading us to simplify layouts, clarify hierarchy, and rethink how AI assistance should be introduced throughout the workflow.
            </p>
          </div>
        </section>

        {/* Introducing Merlin */}
        <section className="merlin-section text-center-section">
          <h2 className="introducing-merlin-title">Introducing Merlin</h2>
          <p className="introducing-merlin-tagline">Aligned Intelligence,Trusted Dissemination.</p>
          <p className="introducing-merlin-desc mt-6">
            Merlin is a digital platform that helps intelligence reporters manage the controlled review and dissemination of tiered reports. It surfaces analytical drift, contextual insights, and customer impact across multiple tiers. It supports streamlined tier comparison through a highlighting and querying interaction, alongside full report dependency mapping and AI task suggestions.
          </p>
        </section>

        {/* Design System */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Design System:</h2>
          <p className="mt-4">
            Since analysts spend long periods reading, reviewing, and comparing intelligence reports, the interface needed to remain visually calm while supporting large amounts of complex information.
          </p>
          <p className="mt-4">
            We developed a lightweight design system that emphasized readability, hierarchy, consistency, and accessibility. Every component—from typography and spacing to status indicators and color usage—was intentionally designed to reduce cognitive effort and help analysts focus on decision-making rather than interface navigation.
          </p>
        </section>

        {/* Designing the Final Workflow */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Designing the Final Workflow:</h2>
          <p className="mt-4">
            Throughout the design process, two interaction models consistently emerged during concept exploration. One emphasized a familiar document-based reporting workspace, while the other introduced a node-based visualization that exposed relationships between reports, decisions, and workflow dependencies.
          </p>
          <p className="mt-4">
            Rather than choosing one over the other, we combined the strengths of both approaches.
          </p>
          <p className="mt-4">
            The final interface allows analysts to comfortably work within a traditional report editor while seamlessly switching to a node-based view whenever they need additional context, traceability, or visibility into report relationships.
          </p>
        </section>

        {/* Final Scenario Video */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Final Scenario Video:</h2>
          
          <p className="mt-4 mb-6">
            In this scenario, Aisha, a senior report releaser, uses an AI-augmented workspace to manage and disseminate intelligence ahead of the peace talks between Behrainabad and Zendia. The system surfaces relevant reports, flags policy and alignment issues, and supports her in comparing tiered narratives. With AI assistance, she resolves framing conflicts and ensures intelligence is accurate, compliant, and delivered to the right customers.
          </p>

          <div className="merlin-video-card glass-card">
            <iframe 
              src="https://drive.google.com/file/d/1yyUjp0x5rsI3npByHh5uFrBGNIkM1Qhg/preview" 
              className="merlin-full-video"
              allow="autoplay"
              title="Final Scenario Video"
              style={{ border: 'none' }}
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://drive.google.com/file/d/1yyUjp0x5rsI3npByHh5uFrBGNIkM1Qhg/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Watch on Google Drive
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Features:</h2>
          
          <div className="features-showcase-container mt-6">
            
            {/* Feature 1 */}
            <div className="feature-block-item mt-8">
              <h3 className="feature-block-title">Feature 1:Node-Based Traceability.</h3>
              <div className="feature-media-desc-grid mt-4">
                <div className="feature-gif-wrapper">
                  <img src="/projects/merlin/gifs/node.gif" alt="Node-Based Traceability" className="feature-gif" />
                </div>
                <div className="feature-desc-text">
                  <p>
                    Aisha can view a full node map of each report, showing its history of revisions and external decisions across tiers. The nodes also connect related reports and preserve AI-human interactions, giving Aisha full transparency into how decisions and edits were made.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-block-item mt-12">
              <h3 className="feature-block-title">Feature 2:Customer Group Management</h3>
              <div className="feature-media-desc-grid mt-4">
                <div className="feature-gif-wrapper">
                  <img src="/projects/merlin/gifs/customer.gif" alt="Customer Group Management" className="feature-gif" />
                </div>
                <div className="feature-desc-text">
                  <p>
                    Aisha can review, approve, or edit based on customer distribution groups directly within the report view. She can approve expansion requests instantly or route them to a senior authority, ensuring flexible yet policy-compliant dissemination control.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-block-item mt-12">
              <h3 className="feature-block-title">Feature 3:Cross-Tier Highlight Synchronization</h3>
              <div className="feature-media-desc-grid mt-4">
                <div className="feature-gif-wrapper">
                  <img src="/projects/merlin/gifs/highlight.gif" alt="Cross-Tier Highlight Synchronization" className="feature-gif" />
                </div>
                <div className="feature-desc-text">
                  <p>
                    When Aisha highlights content in one tier, the system automatically reflects corresponding changes across all opened tiers. She can also query the AI to compare relevant sections, and add annotations that route back to other analysts.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-block-item mt-12">
              <h3 className="feature-block-title">Feature 4:Multi-tier Viewing</h3>
              <div className="feature-media-desc-grid mt-4">
                <div className="feature-gif-wrapper">
                  <img src="/projects/merlin/gifs/multi.gif" alt="Multi-tier Viewing" className="feature-gif" />
                </div>
                <div className="feature-desc-text">
                  <p>
                    While reviewing a report, Aisha is able to pull up to five tiers beside each other to run comparisons with the AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="feature-block-item mt-12">
              <h3 className="feature-block-title">Feature 5:Release Checklist</h3>
              <div className="feature-media-desc-grid mt-4">
                <div className="feature-gif-wrapper">
                  <img src="/projects/merlin/gifs/checklist.gif" alt="Release Checklist" className="feature-gif" />
                </div>
                <div className="feature-desc-text">
                  <p>
                    Before releasing a report, Aisha gets a consolidated checklist of all completed requirements. It highlights key confirmations like classification, source protection, and tier approvals in one place for quick validation. This checklist is also accessible anytime through the expanded report view to support ongoing release readiness.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Impact */}
        <section className="merlin-section">
          <h2 className="section-title-bold">Impact:</h2>
          <div className="impact-grid mt-6">
            <div className="impact-card rounded-rect text-center">
              <h3 className="card-item-title text-glow-blue">Improved Transparency</h3>
              <p className="mt-2">Visualizes report evolution, AI recommendations, and workflow dependencies.</p>
            </div>
            <div className="impact-card rounded-rect text-center">
              <h3 className="card-item-title text-glow-purple">Reduced Cognitive Load</h3>
              <p className="mt-2">Minimizes repetitive comparisons and manual tracking across report tiers.</p>
            </div>
            <div className="impact-card rounded-rect text-center">
              <h3 className="card-item-title text-glow-blue">Greater Analyst Confidence</h3>
              <p className="mt-2">Supports informed, policy-aware decisions while maintaining human oversight.</p>
            </div>
          </div>
        </section>

        {/* Centered Small Footer */}
        <div className="merlin-page-credits text-center mt-12">
          <p className="credits-small-text">
            A project completed in collaboration with the Laboratory of Analytical Sciences (LAS) as part of the MGXD Design Studio.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MerlinDetail;
