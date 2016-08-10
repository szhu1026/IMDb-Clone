"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/")
    }
  },

	handleLinkChange: function(){
		this.setState({
			username: "",
			password: ""
		})
	},

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="errors">{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

    let navLink;
		let formtype = this.formType() === "login" ? "Sign In" : "Sign Up"
    if (this.formType() === "login") {
      navLink = (
				<div className="signupin_link">
					<p> New to SZIMDb?
					 <Link className="link" onClick={this.handleLinkChange}
					 to="/signup"> Create your account. </Link>
					</p>
				</div>
			);
    } else {
      navLink = (
				<div className="signupin_link">
					<p> Already have an account?
						<Link className="link" onClick={this.handleLinkChange}
						to="/login">Sign in.</Link>
					</p>
				</div>
			);
    }

		return (
			<div className="login-form-container group">
				<img className="login-logo" src={window.logo}/>
				<form onSubmit={this.handleSubmit} className="login-form-box">
	        <p className="login-header"> {formtype} </p>
	        { this.fieldErrors("base") }
					<div className="login-form">
						<label> Username:
		          { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input" />
						</label>

		        <br />
						<label> Password:
		          { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>

		        <br />
						<input className="submit" type="submit" value="Submit" />
						{navLink}
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
