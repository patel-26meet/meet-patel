const Resume = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '20px', color: '#333' }}>
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
          Coursework: Database Systems, Object Oriented Programming, Data Structures and Algorithms,
          Operating Systems, Compiler Construction, Design and Analysis of Algorithms, Cryptography
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
        Implemented several functional components contributing to front-end development with React/JavaScript/CSS
        </li>
        <li>
        Successfully parallelized Cypress test automation reducing E2E testing time by 90% (3+ hours to 30 minutes)
        </li>
        <li>
          Authored shell scripts for YAML-to-JSON configuration of multiple key-value pairs</li>
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
          Created a full-stack fitness application featuring user authentication and workout
          recommendations
        </li>
        <li>
          Built a dynamic dashboard for workout logging and historical performance analysis
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
          Engineered a chess engine implementing algorithms like Alpha-Beta pruning and dynamic
          programming (transposition tables and Zobrist hashing) for position caching
        </li>
        <li>
          Designed a comprehensive chess evaluation algorithm incorporating piece values, positional
          tables, mobility metrics, and space control factors with distinct midgame/endgame
          weighting distinctions.
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
          Developed a Discord clone featuring real-time messaging and comprehensive server/member
          management
        </li>
        <li>
          Implemented functionalities such as unique invite links, sharing of images/PDFs, real-time
          message editing and deletion
        </li>
        <li>Tools Used: Next.js, Prisma, Clerk, Tailwind CSS, ShadcnUI, MySQL</li>
      </ul>

      <h3>Password Manager</h3>
      <p>Mar 2022 - Apr 2022</p>
      <ul>
        <li>Created a password manager to store, manage, and encrypt passwords</li>
        <li>
          Implemented functionalities such as unique invite links, sharing of images/PDFs, real-time
          message editing and deletion
        </li>
        <li>Tools Used: MySQL, Node.js, React, Express</li>
      </ul>

      <h2>Technical Proficiency</h2>
      <p>
        <strong>Languages:</strong> React, Node, JavaScript, TypeScript, Next.js, C++, C, Java,
        Python
      </p>
      <p>
        <strong>Databases:</strong> MySQL, MongoDB
      </p>
      <p>
        <strong>Testing Frameworks:</strong> Cypress
      </p>
      <p>
        <strong>DevOps Tool:</strong> Git
      </p>

      <h2>Positions of Responsibility</h2>
      <h3>Gurjari Cultural Association, BITS Pilani</h3>
      <p>Sept 2022 - May 2024</p>
      <p>
        <strong>Roles:</strong> President, Secretary
      </p>
      <ul>
        <li>Led a team of 150+ members to organize 10+ events throughout the years</li>
        <li>
          Organized the biggest cultural event on campus with a footfall of 2000+ and generated 2
          lakhs of revenue
        </li>
      </ul>

      <h4>Need a PDF?</h4>
      <a href={`${process.env.PUBLIC_URL}/Meet Patel.pdf`} download="Resume-Meet Patel.pdf">
          Download it here!
      </a>

    </div>
  );
};

export default Resume;
