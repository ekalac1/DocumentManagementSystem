import Ember from 'ember';

export default Ember.Controller.extend({
	korisnikService: Ember.inject.service('korisnik-service'),
	usernameError: false,
	passwordError: false,
	emailError: false,
	imeError: false,
	serverSuccess: false,
	serverError: false,
	serverErrorText: "",
	ponovljeniPass: "",
	ponovljeniPassError: false,


	validiraj: function(){

		//ne diraj, koristis
		let ispravno = true;

		let _usernameError = false;
		let _passwordError = false;
		let _emailError = false;
		let _imeError = false;
		let _ponovljeniPassError = false;

		//email unicode
		let re1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


		if (this.get("username") == null || this.get("username").length < 1 || !this.get("username").match(/^[0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-_\.]{2,30}$/i)){
			ispravno = false;
			_usernameError = true;
			this.set("imeVarijable", "Korisničko ime se može sastojati samo od slova, brojeva i znakova . _ -!");
		}
		else{
			this.set("imeVarijable", "");
		}


		if (this.get("password") == null || this.get("password").length < 6 || !this.get("password").match(/^[0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\_\+\-\*\:\.\,\;\?\!\$\#]{6,30}$/gi)){
			ispravno = false;
			_passwordError = true;
		}

		if (!_passwordError)
		{
			if (this.get("ponovljeniPass") == null || (this.get("ponovljeniPass") !== this.get("password")))
			{
				ispravno = false;
				_ponovljeniPassError = true;
			}
		}

		if (this.get("email") == null || !re1.test(this.get("email"))){
			ispravno = false;
			_emailError = true;
		}


		if (this.get("ime") == null || this.get("ime").length > 15 || this.get("ime").replace(/\s/g,"").length < 1 || !this.get("ime").match(/^[ a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)){
			ispravno = false;
			_imeError = true;
		}

		this.set("usernameError", _usernameError);
		this.set("passwordError", _passwordError);
		this.set("emailError", _emailError);
		this.set("imeError", _imeError);
		this.set("ponovljeniPassError", _ponovljeniPassError);

		return ispravno;

	},

	register: function(korisnik) {
		var self = this;
		this.set("serverErrorText", "");

		this.get('korisnikService').register(korisnik).then(data => {
			self.set("serverSuccess", true);
			self.set("serverError", false);
			self.set("serverErrorText", "");

		}).catch(err => {
			self.set("serverError", true);
			self.set("serverSuccess", false);
			self.set("serverErrorText", err.responseText);

		});
	},
	
	actions: {
		register: function(){
			let korisnik = this.getProperties('username', 'password', 'email', 'ime');

			if (this.validiraj()){
				this.register(korisnik);
			}
		}
	}
});
