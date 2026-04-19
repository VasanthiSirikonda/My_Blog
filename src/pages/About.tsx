import { useState } from 'react';
import './About.css';

function About() {
  const [activeCategory, setActiveCategory] = useState('experience');

  const workExperience = [
    {
      id: 1,
      company: 'Infinite Computer Solutions',
      client: 'Verizon',
      position: 'Associate Software Engineer — Frontend',
      period: 'Aug 2023 – Present',
      location: 'Hyderabad',
      category: 'experience',
      projects: [
        {
          name: 'VISIBLE — Verizon E-Commerce Platform',
          period: 'Dec 2025 – Mar 2026',
          highlights: [
            'Engineered responsive PLP and PDP pages, driving 25% lift in user engagement',
            'Optimized React rendering and asset delivery, cutting page load time by 30%',
            'Built end-to-end cart, EMI options, and payment integration flows',
            'Implemented Figma designs with cross-browser and cross-device consistency'
          ]
        },
        {
          name: 'ELVIS — Customer Experience Platform',
          period: 'Aug 2024 – Nov 2025',
          highlights: [
            'Architected reusable React/TypeScript component library adopted across teams',
            'Improved WCAG accessibility compliance through systematic UI audits',
            'Enhanced customer financing workflows, reducing user drop-off',
            'Collaborated with backend engineers on REST API contracts'
          ]
        },
        {
          name: 'SRE — Site Reliability & Full-Stack Development',
          period: 'Aug 2023 – Aug 2024',
          highlights: [
            'Designed LLM-powered unit test generation framework, eliminating 40% of manual QA effort',
            'Developed REST APIs using Java, Python, and MySQL for internal tooling',
            'Built full-stack Library Management System with React.js and chatbot integration',
            'Supported incident management using Elasticsearch and Kibana dashboards'
          ]
        }
      ]
    }
  ];

  const technicalSkills = [
    {
      category: 'Frontend',
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Streamlit']
    },
    {
      category: 'Testing & Automation',
      skills: ['Jest', 'LLM-based Test Automation', 'Unit Testing', 'Integration Testing']
    },
    {
      category: 'Backend & APIs',
      skills: ['Java', 'Spring Boot', 'Python', 'RESTful APIs', 'REST']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Elasticsearch']
    },
    {
      category: 'DevOps & Tooling',
      skills: ['Docker', 'Jenkins', 'GitLab CI/CD', 'AWS', 'Kibana', 'SonarQube']
    },
    {
      category: 'AI Tools',
      skills: ['OpenAI (ChatGPT)', 'Google Gemini', 'GitHub Copilot', 'Claude']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science',
      institution: 'Swarna Bharathi Institute of Science and Technology',
      year: '2019 – 2023',
      location: 'Telangana',
      cgpa: '7.9 / 10.0',
      category: 'education'
    },
    {
      id: 2,
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      year: '2017 – 2019',
      location: 'Telangana',
      cgpa: '93.6%',
      category: 'education'
    },
    {
      id: 3,
      degree: 'SSC',
      institution: 'Bomma Brilliant Grammar School',
      year: '2016 – 2017',
      location: 'Telangana',
      cgpa: 'CGPA: 9.2',
      category: 'education'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'CRM Web Application',
      type: 'Capstone Project (2023)',
      description: 'Built e-commerce platform with product browsing, ticketing, and FAQ management.',
      category: 'projects'
    },
    {
      id: 2,
      title: 'Automating E-Government Services with AI/ML',
      type: 'Major Project (2022–23)',
      description: 'Applied ML models to streamline government service workflows.',
      category: 'projects'
    },
    {
      id: 3,
      title: 'Library Management System',
      type: 'Full-Stack Project (2023–24)',
      description: 'Full-stack system with React.js, REST APIs, and integrated chatbot support.',
      category: 'projects'
    }
  ];

  const certifications = [
    'TCS Career Edge — Young Professional',
    'Data Visualization with Python — Swecha Organization',
    'Cloud Computing Certification — Solvency Software Solutions'
  ];

  const renderExperience = () => (
    <section className="section-content">
      <h3>Professional Experience</h3>
      <div className="experience-container">
        {workExperience.map(exp => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div>
                <h4>{exp.position}</h4>
                <p className="company-info">{exp.company} (Client: {exp.client})</p>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
            
            <div className="projects-list">
              {exp.projects.map((proj, idx) => (
                <div key={idx} className="project-item">
                  <h5>📌 {proj.name}</h5>
                  <p className="project-period">{proj.period}</p>
                  <ul className="highlights">
                    {proj.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderSkills = () => (
    <section className="section-content">
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <h5>{skillGroup.category}</h5>
            <div className="skill-tags">
              {skillGroup.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderEducation = () => (
    <section className="section-content">
      <h3>Education</h3>
      <div className="education-container">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <h4>{edu.degree}</h4>
              <span className="education-year">{edu.year}</span>
            </div>
            <p className="institution">{edu.institution}</p>
            <p className="location">📍 {edu.location}</p>
            <p className="cgpa">CGPA: {edu.cgpa}</p>
          </div>
        ))}
      </div>

      <div className="certifications-section">
        <h4>Certifications</h4>
        <ul className="certifications-list">
          {certifications.map((cert, idx) => (
            <li key={idx}>✅ {cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="section-content">
      <h3>Academic & Side Projects</h3>
      <div className="projects-grid">
        {projects.map(proj => (
          <div key={proj.id} className="project-card">
            <span className="project-type">{proj.type}</span>
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="about">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Frontend Engineer | React Specialist | Building High-Performance Web Applications</p>
      </section>

      <section className="bio-section">
        <div className="container">
          <h2>Professional Summary</h2>
          <div className="bio-content">
            <p>
              Frontend engineer with 3 years of production experience building high-performance React applications 
              at enterprise scale. I shipped core e-commerce features — including PLP, PDP, cart, and payment flows — 
              for Verizon's Visible platform. I reduced page load time by 30% and eliminated 40% of manual QA effort 
              by designing an LLM-powered test automation framework.
            </p>
            <p>
              TypeScript-first developer with a strong focus on reusable component architecture, accessibility, and 
              measurable performance outcomes. I'm comfortable collaborating across backend, design, and DevOps teams 
              to deliver products that matter.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30%</div>
              <div className="stat-label">Page Load Reduction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40%</div>
              <div className="stat-label">QA Automation Gain</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25%</div>
              <div className="stat-label">User Engagement Lift</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="category-tabs">
            <button
              className={`tab ${activeCategory === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveCategory('experience')}
            >
              💼 Experience
            </button>
            <button
              className={`tab ${activeCategory === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveCategory('skills')}
            >
              🛠️ Skills
            </button>
            <button
              className={`tab ${activeCategory === 'education' ? 'active' : ''}`}
              onClick={() => setActiveCategory('education')}
            >
              🎓 Education
            </button>
            <button
              className={`tab ${activeCategory === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveCategory('projects')}
            >
              📚 Projects
            </button>
          </div>

          {activeCategory === 'experience' && renderExperience()}
          {activeCategory === 'skills' && renderSkills()}
          {activeCategory === 'education' && renderEducation()}
          {activeCategory === 'projects' && renderProjects()}
        </div>
      </section>

      <section className="interests-section">
        <div className="container">
          <h2>What I'm Passionate About</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <span className="interest-icon">⚡</span>
              <h4>Performance Optimization</h4>
              <p>Building fast, responsive applications that deliver great user experiences.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🎨</span>
              <h4>Clean Code Architecture</h4>
              <p>Writing maintainable, scalable code with reusable components and patterns.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🤖</span>
              <h4>AI-Assisted Development</h4>
              <p>Exploring intelligent tools like LLMs to enhance developer productivity.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">♿</span>
              <h4>Web Accessibility</h4>
              <p>Creating inclusive digital experiences that work for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>Have an interesting project or opportunity? I'd love to chat!</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </section>
    </div>
  );
}

export default About;
