let React = require('react');
let Search = require('./instant_box_component');
let Link = require('react-router').Link;
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');


let SearchSelector = React.createClass({
    getInitialState:function(){
      return {selectValue:'Movies'};
    },
    handleChange: function(e){
    this.setState({selectValue:e.target.value});
    },
    componentDidMount: function(){
      this.sessionlistener = SessionStore.addListener(this.forceUpdate.bind(this));
      // SessionStore.isUserLoggedIn() === true
    },
    componentWillUnmount: function(){
      this.sessionlistener.remove();
    },
    _handleLogOut(){
      SessionActions.logOut();
    },
    _handleGuestLogIn(){
      SessionActions.guestLogIn();
    },
    render: function() {

      let sessionstatus;
      if (SessionStore.isUserLoggedIn() === true) {
        sessionstatus = (
          <ul className="session" onClick= {this._handleLogOut}>
            <li> Hello, {SessionStore.currentUser().username}</li>
            <li> Log Out </li>
          </ul>
        );
      }
      else {
        sessionstatus = (
          <ul className="session">
            <Link to='/login'>
              <li> Log In </li>
            </Link>
            <li onClick = {this._handleGuestLogIn}> Guest </li>
          </ul>
        );
      }


      // <ul className="session" onClick= {this._handleLogOut}>
      //   <li> {sessionstatus} </li>
      // </ul>
      // <Link to='/login'>
      //   <ul className="session">
      //     <li> {sessionstatus} </li>
      //   </ul>
      // </Link>

      // <ul className="options">
      //   <Link to="/index/hotmovies"> <li> Hot Movies </li>  </Link>
      //   <Link to="/index/intheatres"> <li> In Theatres Now </li> </Link>
      // </ul>


      return (
        <div className="Full-Search-Bar group">
          <Link to="/">  <img className="logo" src={window.logo}/> </Link>
          <select className="toggle"
            value={this.state.selectValue}
            onChange={this.handleChange}>
             <option value="Movies">Movies</option>
             <option value="Actors">Actors</option>
          </select>
          {this.state.selectValue === "Movies" ? <Search type="MovieSearch"/> : <Search type="ActorSearch"/>}
          {sessionstatus}
        </div>
      );
    }
});


module.exports = SearchSelector;
