var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Campinas'>Campinas, SP</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio de Janeiro, RJ</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
