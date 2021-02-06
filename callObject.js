//https://web.programming-hero.com/course/video/web-3-25-2-object-method-property-review

// creating function like object inside a object.
const officer = {
    firstName: 'Nur',
    lastName: 'Nabi',
    salary: 50000,
    getName: function(){
        console.log(this.firstName, this.lastName);
    },
    cutSalary: function(amount){
         this.salary = this.salary - amount;
        return this.salary;
    },
}
officer.getName();

officer.cutSalary(1000);
console.log(officer.salary);

officer.cutSalary(9000);
console.log(officer.salary);