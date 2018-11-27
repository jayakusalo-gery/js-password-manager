var React = require('react');
var ReactDOM = require('react-dom');

class login extends React.component {
     constructor(props) {
    super(props);
  }
    
    
    render() {


    
    return (

      <form action = "/" method = "GET">
         username: <input type = "text" name = "username">  <br>
         password: <input type = "password" name = "password">
         <input type = "submit" value = "Submit">
      </form>
        <div className="error">
        </div>

    );
  }
    
}


function main() {
  return (
     <div className="login"></div>
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(login, domContainer);
