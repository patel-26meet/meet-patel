const WorkoutTracker = () => {
  return (
    <div className="workout-tracker-overview">
      <h1>Workout Tracker Application</h1>
      <p>
        The Workout Tracker Application is a React-based web application designed to help users track their
        workouts, manage fitness routines, and analyze workout history. The application allows users to log
        exercises, muscle groups worked, and track their progress over time. Key features include user
        authentication, workout history views, and personalized exercise recommendations to enhance the overall
        fitness experience.
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Recommendation System: Provides personalized workout recommendations based on the user's goals.</li>
        <li>User Authentication: Users can securely register, log in, and manage their accounts.</li>
        <li>Workout Logging: Users can log workouts, add exercises, define sets and reps, and include notes for each session.</li>
        <li>View Workout History: Easily view and filter past workout history by muscle groups or specific exercises.</li>
        <li>Responsive Design: Optimized for various screen sizes to ensure a seamless experience across devices.</li>
      </ul>

      <h2>Project Structure</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js with TypeScript, CSS Modules for styling.</li>
        <li><strong>Backend:</strong> Node.js, Express.js for REST APIs.</li>
        <li><strong>Database:</strong> MongoDB for data storage.</li>
      </ul>

      <h2>Main Components</h2>
      <ul>
        <li>
          <strong>Dashboard:</strong> A central place for users to track workouts, view their progress, and start
          new sessions.
        </li>
        <li>
          <strong>User Authentication:</strong> A login and signup system that handles new user registration, login,
          and session management.
        </li>
        <li>
          <strong>Recommendation System:</strong> An intelligent feature that analyzes past workouts and suggests
          exercises based on the user's preferences and fitness level.
        </li>
      </ul>

      <h2>Installation</h2>
      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js and npm (Node Package Manager)</li>
        <li>MongoDB (can be local or cloud-based like MongoDB Atlas)</li>
      </ul>

      <h3>Setup Instructions</h3>
      <ol>
        <li>
          Clone the Repository:
          <pre>
            <code>
              git clone https://github.com/your-username/workout-tracker.git
              cd workout-tracker
            </code>
          </pre>
        </li>
        <li>Install server-side dependencies:
          <pre>
            <code>
              cd backend
              npm install
            </code>
          </pre>
        </li>
        <li>Install client-side dependencies:
          <pre>
            <code>
              cd ../frontend
              npm install
            </code>
          </pre>
        </li>
        <li>
          Set Up Environment Variables:
          <pre>
            <code>
              Create an .env file in the backend directory with the following:
              MONGO_URI=your_mongo_database_url
              JWT_SECRET=your_jwt_secret_key
            </code>
          </pre>
        </li>
        <li>
          Run the Application:
          <ul>
            <li>Start the backend server:
              <pre>
                <code>
                  cd backend
                  npm start
                </code>
              </pre>
            </li>
            <li>Start the frontend development server:
              <pre>
                <code>
                  cd ../frontend
                  npm start
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ol>
      <p>The application will be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

      <h2>Usage</h2>
      <ul>
        <li><strong>Sign Up/Login:</strong> Register a new account or log in using existing credentials.</li>
        <li>
          <strong>Log Workouts:</strong> Navigate to the dashboard to start logging your workout for the day, including
          exercises, reps, weight, and muscle groups.
        </li>
        <li>
          <strong>View History:</strong> Go to the "View History" section to see all previous workouts and filter by
          muscle group.
        </li>
        <li>
          <strong>Get Recommendations:</strong> Use the recommendations to plan future workouts based on your personal
          goals.
        </li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js, TypeScript, CSS Modules</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
        <li><strong>API Client:</strong> Axios for HTTP requests</li>
      </ul>

      <h2>Folder Structure</h2>
      <ul>
        <li><strong>frontend/:</strong> Contains the React client for user interaction</li>
        <li><strong>src/components/:</strong> Reusable React components, e.g., Dashboard, Login, Signup</li>
        <li><strong>src/context/:</strong> Context for state management</li>
        <li><strong>src/styles/:</strong> CSS Modules for styling</li>
        <li><strong>backend/:</strong> Node.js API server to handle data and authentication</li>
        <li><strong>controllers/:</strong> API logic for workouts, users, etc.</li>
        <li><strong>models/:</strong> Mongoose models for data representation</li>
        <li><strong>routes/:</strong> API route definitions</li>
      </ul>

      <h2>Future Enhancements</h2>
      <ul>
        <li>Social Features: Allow users to share workouts and follow others.</li>
        <li>Mobile Application: Develop a mobile app version using React Native.</li>
        <li>Data Visualization: Include charts to visualize progress over time.</li>
        <li>Notifications: Add reminders and motivational push notifications for users.</li>
      </ul>

      <h2>Contributing</h2>
      <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch for your feature or bug fix.</li>
        <li>Make your changes and commit them.</li>
        <li>Push to your fork and create a pull request.</li>
      </ol>

      <h2>Contact</h2>
      <p>
        For any questions or suggestions, please reach out:
        <ul>
          <li>Email: <a href="mailto:patel26meet@gmail.com">patel26meet@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/patel-26meet" target="_blank">patel-26meet</a></li>
        </ul>
      </p>
      <p>Thank you for checking out the Workout Tracker Application! Stay fit and keep improving!</p>
    </div>
  );
};

export default WorkoutTracker;