var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Exemplos</h1>
      <p>Aqui estão alguns exemplos de cidades para pesquisar:</p>
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
