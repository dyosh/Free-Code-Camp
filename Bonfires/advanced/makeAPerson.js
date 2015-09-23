var Person = function(firstAndLast) {

    var name = firstAndLast.split(" ");
    var firstName = name[0];
    var lastName = name[1];
  
  	this.getFirstName = function(){
  		return firstName;
  	};
  	this.getLastName = function(){
  		return lastName;
  	};
  	this.getFullName = function(){
  		return firstName + " " + lastName;
  	};
  	this.setFirstName = function(first){
  		firstName = first;
  	};
  	this.setLastName = function(last){
  		lastName = last;
  	};
  	this.setFullName = function(firstAndLast){
  		name = firstAndLast.split(" ");
	    firstName = name[0];
	    lastName = name[1];
  	}
  	
};

var bob = new Person('Bob Ross');
bob.getFullName();