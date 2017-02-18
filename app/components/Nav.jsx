var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Calma jovem, uma coisa de cada vez!');
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Obter temperatura</IndexLink>
            </li>
            <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Sobre</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Exemplos</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Digite o nome da cidade" />
              </li>
              <li>
                <input type="submit" className="button" value="Obter temperatura" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
