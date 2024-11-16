const BinaryBishop = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI', fontSize: '16px', color: '#333' }}>
      <h1>
        binary-bishop <a href="https://github.com/patel-26meet/binary-bishop" target="_blank" rel="noopener noreferrer">(github.com/patel-26meet/binary-bishop)</a>
      </h1>
      <h2>Overview</h2>
      <p>
        <strong>binary-bishop</strong> is an advanced chess engine developed using Python and the <code>python-chess</code> library.
        With an estimated Elo rating of approximately 1300, it even managed to defeat me once! :)
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Implements the Universal Chess Interface (UCI) protocol</li>
        <li>Utilizes advanced algorithms including Alpha-Beta pruning</li>
        <li>Employs dynamic programming techniques with transposition tables and Zobrist hashing for efficient position caching</li>
        <li>Features a comprehensive chess evaluation algorithm</li>
        <li>Includes extensive logging and testing functionalities</li>
        <li>Compatible with most UCI-supported chess interfaces</li>
      </ul>

      <h2>Technical Details</h2>
      <p>The engine incorporates several sophisticated techniques to enhance its performance:</p>
      <ul>
        <li>
          <strong>Alpha-Beta Pruning:</strong> Improves the efficiency of the minimax algorithm by eliminating branches that don't need
          to be searched.
        </li>
        <li>
          <strong>Dynamic Programming:</strong> Utilizes transposition tables and Zobrist hashing for quick position lookup and reduced
          redundant calculations.
        </li>
        <li>
          <strong>Evaluation Algorithm:</strong> A complex evaluation function that considers:
          <ul>
            <li>Piece values</li>
            <li>Positional tables</li>
            <li>Mobility metrics</li>
            <li>Space control factors</li>
            <li>Distinct midgame and endgame weightings</li>
          </ul>
        </li>
      </ul>

      <h2>Tools and Technologies</h2>
      <ul>
        <li>Python</li>
        <li>python-chess library</li>
      </ul>

      <h2>Future Plans</h2>
      <ul>
        <li>A more optimized version is planned for release as a Lichess bot in the near future.</li>
        <li>Continuous improvement of the evaluation algorithm and search techniques.</li>
      </ul>

      <h2>Getting Started</h2>
      <ul>
        <li>Follow the instructions on the github link to use the bot</li>
      </ul>

    </div>
  );
};

export default BinaryBishop;
