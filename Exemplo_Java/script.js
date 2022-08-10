function Exemplo() {
    var nome = "Adryan";
    function alertNome() {
        alert(nome);
    }
    return alertNome;
}

var myExemplo = Exemplo();
myExemplo();






/*
//class 1
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
//alert(person1.getFullName());
//alert(person1.firstName + " " + person1.lastName);


var person2 = new Person();
person2.firstName = "BIll";
person2.lastName = "Gates";
//alert(person2.getFullName());


//Exemplo 2
function Person2(FirstName, LastName, Age) {
    this.firstName2 = FirstName || "unknown";
    this.lastName2 = LastName || "unknown";
    this.age2 = Age || 25;

    this.getFullName2 = function () {
        return this.firstName2 + " " + this.lastName2 + ", idade " + this.age2;
    }
};

var person3 = new Person2("James", "Bond", 50);
//alert(person3.getFullName2());

var person4 = new Person2("Tom", "Paul");
//alert(person4.getFullName2());


//Exemplo3
function Person3() {
    var _fistName = "unknown";
    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _fistName;
            },
            set: function (value) {
                _fistName = value;
            }
        }
    });
};

var person5 = new Person3();
person5.FirstName = "João";
//alert(person5.FirstName);

var person6 = new Person3();
person6.FirstName = "Maria";
//alert(person6.FirstName);

//Classes com multiplos metodos
function Person4(firstName, lastName, age) {
    var _fistName = firstName || "unknown";
    var _lastName = lastName || "unknown";
    var _age = age || 25;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _fistName
            },
            set: function (value) {
                _fistName = value
            }
        },
        "LastName": {
            get: function () {
                return _lastName
            },
            set: function (value) {
                _lastName = value
            }
        },
        "Age": {
            get: function () {
                return _age
            },
            set: function (value) {
                _age = value
            }
        },
    });

    this.getFullName3 = function () {
        return this.FirstName + " " + this.LastName + ", idade: " + this.Age;
    }
};

var person_1 = new Person4();
person_1.FirstName = "John";
person_1.LastName = "Bond";
//alert(person_1.getFullName3());

//classes e Keys
function StudentX() {

}*/