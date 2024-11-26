import pdf from '../assets/pdf.png'
const Resume = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '20px', color: '#333' }}>
      <div style={{ position: 'absolute', top: '75px', right: '55px', zIndex: 10 }}>
        <a href={`${process.env.PUBLIC_URL}/Meet_Patel.pdf`} download="Resume-Meet Patel.pdf">
          <img
            src={pdf}
            alt="Download Resume"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          />
        </a>
      </div>
      <h1>Meet Patel</h1>
      <p>
        <strong>Email:</strong> 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patel26meet@gmail.com" target="_blank">patel26meet@gmail.com</a> &nbsp;|&nbsp;
        <strong>Phone:</strong> +91 9879259389 &nbsp;|&nbsp;
        <strong>GitHub:</strong> <a href="https://github.com/patel-26meet" target="_blank">github.com/patel-26meet</a>
      </p>

      <h2>Education</h2>
      <h3>Birla Institute of Technology and Science, Pilani</h3>
      <p>B.E. in Computer Science</p>
      <p>Minor in Finance</p>
      <p>Sept 2020 – May 2024</p>
      <ul>
        <li>
          Coursework: Database Systems, Object Oriented Programming, Data Structures and Algorithms, Cryptography,
          Operating Systems, Security analysis and Portfoliio Management
        </li>
      </ul>

      <h2>Experience</h2>
      <h3>Associate Software Engineer Intern</h3>
      <p>
        <strong>Company:</strong> Digicert, Inc.<br />
        <strong>Location:</strong> Bengaluru, India<br />
        <strong>Duration:</strong> Jul 2023 – Dec 2023
      </p>
      <ul>
        <li>
        Successfully parallelized Cypress test automation reducing E2E testing time by <span style={{fontWeight: 'bold'}}>90%(3+ hours to 30 mins)</span>
        </li>
        <li>
        Contributed to front-end development by creating functional components for using <span style={{fontStyle: 'italic'}}>React/JavaScript/CSS</span> 
        </li>
        <li>
        Configured .json files to ensure proper access control resolving IDOR vulnerabilities for <span style={{fontWeight: 'bold'}}>3 </span>customers
        </li>
        <li>
        Authored shell scripts for YAML-to-JSON configuration of key-value pairs reducing effort by <span style={{fontWeight: 'bold'}}>15%</span>
        </li>      
        <li>
        Tools Used: React, Cypress, JavaScript/CSS, Shell        
        </li> 
      </ul>

      <h2>Projects</h2>

      <h3>
        Workout Tracker &nbsp;
        <a href="https://github.com/patel-26meet/workout-tracker" target="_blank">
          github.com/patel-26meet/workout-tracker
        </a>
      </h3>
      <ul>
        <li>
        Built a full-stack application with <span style={{fontWeight: 'bold'}}>JSON Web Token</span> based authentication and <span style={{fontStyle: 'italic'}}>RESTful APIs</span> for workout management
        </li>
        <li>
        Implemented <span style={{fontWeight: 'bold'}}></span>custom middleware for user <span style={{fontStyle: 'italic'}}>session handling</span> and <span style={{fontStyle: 'italic'}}>data validation</span> to ensure secure data access
        </li>
        <li>
        Designed a responsive dashboard featuring <span style={{fontStyle: 'italic'}}>workout tracking</span> with graphical representations showing progress
        </li>
        <li>Tools Used: React, Node, MongoDB Atlas</li>
      </ul>

      <h3>
        Binary Bishop - Chess Engine &nbsp;
        <a href="https://github.com/patel-26meet/binary-bishop" target="_blank">
          github.com/patel-26meet/binary-bishop
        </a>
      </h3>
      <ul>
        <li>
        Engineered a chess engine, implementing algorithms like <span style={{fontWeight: 'bold'}}>Alpha-Beta pruning</span> for efficient move evaluation
        </li>
        <li>
        Optimized engine performance using dynamic programming with <span style={{fontStyle: 'italic'}}>transposition tables</span> and <span style={{fontStyle: 'italic'}}>zobrist hashing</span>
        for <span style={{fontWeight: 'bold'}}></span>position caching
        </li>
        <li>
        Designed an <span style={{fontWeight: 'bold'}}>evaluation algorithm</span> on <span style={{fontWeight: 'bold'}}>piece and mobility values, positional tables, and space control factors</span>
        </li>
        <li>Tools Used: Python, python-chess</li>
      </ul>

      <h3>
        Discord Clone &nbsp;
        <a href="https://github.com/patel-26meet/discord-clone" target="_blank">
          github.com/patel-26meet/discord-clone
        </a>
      </h3>
      <ul>
        <li>
        Developed a Discord clone featuring <span style={{fontWeight: 'bold'}}>real-time messaging</span> with WebSocket integration for instant updates
        </li>
        <li>
        Implemented comprehensive <span style={{fontWeight: 'bold'}}>server/member management</span> system with role-based access control
        </li>
        <li>
        Built advanced features including <span style={{fontStyle: 'italic'}}>unique invite links, file sharing, and real-time message editing/deletion</span>
        </li>
        <li>Tools Used: Next.js, Prisma, Clerk, Tailwind CSS, ShadcnUI, MySQL</li>
      </ul>

      <h3>Password Manager</h3>
      <p>Mar 2022 - Apr 2022</p>
      <ul>
        <li>
        Developed a password manager to <span style={{fontWeight: 'bold'}}>store, manage and encrypt</span> passwords
        </li>
        <li>
        Implemented secure features including <span style={{fontStyle: 'italic'}}>password generation</span> and <span style={{fontStyle: 'italic'}}></span>password sharing
        </li>
        <li>
        Stored the required information using MySQL and enabled two-factor authentication
        </li>
        <li>Tools Used: MySQL, Node.js, React, Express</li>
      </ul>

      <h2>Technical Proficiency</h2>
      <p>
        <strong>Technologies/frameworks:</strong> React, Node.js, Next.js, Express, Git, Cypress
      </p>
      <p>
        <strong>Languages:</strong> JavaScript, TypeScript, Python, Java, C++, C
      </p>
      <p>
        <strong>Databases:</strong> MySQL, MongoDB
      </p>

      <h2>Positions of Responsibility</h2>
      <h3>Gurjari Cultural Association, BITS Pilani</h3>
      <p>Sept 2022 - May 2024</p>
      <p>
        <strong>Roles:</strong> President, Secretary
      </p>
      <ul>
        <li>Led a team of <span style={{fontWeight: 'bold'}}></span>150+ members to organize <span style={{fontWeight: 'bold'}}></span>10+ events throughout the years</li>
        <li>
          Organized the biggest cultural event on campus with a footfall of <span style={{fontWeight: 'bold'}}>2000+</span> and generated <span style={{fontWeight: 'bold'}}>2
          lakhs of revenue</span>
        </li>
      </ul>

      <h4>Need a PDF?</h4>
      <a href={`${process.env.PUBLIC_URL}/Meet_Patel.pdf`} download="Resume-Meet Patel.pdf">
          Download it here!
      </a>

    </div>
  );
};

export default Resume;
