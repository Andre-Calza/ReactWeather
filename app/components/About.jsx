var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-hifen">Sobre</h1>
      <p>Esta é uma aplicação de temperatura construída com o React. Eu construí isso para o curso "Complete React Web App Developer Course" do Udemy</p>
      <p>Aqui estão algumas das ferramentas que utilizei:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Este é o framework Javascript que utilizei.
        </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - Eu utilizei o "Open Weather Map" para pesquisar pelos dados de temperatura de uma determinada cidade.
          </li>
      </ul>
    </div>
  );
};

module.exports = About;
