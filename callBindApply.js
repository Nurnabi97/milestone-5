//https://web.programming-hero.com/course/video/web-3-25-3-object-use-bind-to-borrow-method-from-another-object

// cuSalary method use other method.
const officer = {
    firstName: 'Nur',
    lastName: 'Nabi',
    salary: 50000,
    getName: function () {
        console.log(this.firstName, this.lastName);
    },
    cutSalary: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    },
};
const deputy = {
    firstName: 'Hasan',
    lastName: 'Ali',
    salary: 60000,
};

const assistant = {
    firstName: 'Hamidur',
    lastName: 'Rahman',
    salary: 55000,
};

//officer salary cut.
officer.cutSalary(1000);
console.log(officer.salary);

//salary cut using bind method.
//deputy salary cut.
const hasanAli = officer.cutSalary.bind(deputy);
hasanAli(2000);
console.log(deputy.salary);

//assistant salary cut.
const hamidurRhaman = officer.cutSalary.bind(assistant);
hamidurRhaman(3000);
console.log(assistant.salary);


//salary cut using call method.***
officer.cutSalary.call(deputy, 500);    //if cutSalary = amount, tax, trips code will bellow.
console.log(deputy.salary);             //.call(deputy, 500, 200, 100);

//assistant salary cut.
officer.cutSalary.call(assistant, 500);
console.log(assistant.salary);


//salary cut using apply method.***
officer.cutSalary.apply(deputy, [500]);    //if cutSalary = amount, tax, trips code will bellow.
console.log(deputy.salary);             //.call(deputy, [500, 200, 100]); //like array input.

//assistant salary cut.
officer.cutSalary.call(assistant, [500]);
console.log(assistant.salary);