//create parent class School

 class School {
     constructor(name,level,numberOfStudents) {
         this._name = name;
         this._level = level;
         this._numberOfStudents = numberOfStudents;
     }
     get name() {
         return this._name;
     }
     get level() {
         return this._level
     }
     get numberOfStudents() {
         return this._numberOfStudents;
     }
     set numberOfStudents(num) {
         if(isNaN(num)) {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
             
         } else {
           this._numberOfStudents = num;
         }
        }
         quickFacts() {
             console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
         }
         static pickSubstituteTeacher(substituteTeachers) {
             const randTeacher = Math.floor(substituteTeachers.length * Math.random());
             return substituteTeachers[randTeacher];
         }
     }

     //create PrimarySchool subclass

     class PrimarySchool extends School {
         constructor(name, numberOfStudents, pickupPolicy) {
             super(name, 'primary', numberOfStudents);
            this._pickupPolicy = pickupPolicy;
             }
             get pickupPolicy(){
                 return this._pickupPolicy;
             }
     }

     //create HishSchool subclass

     class highSchool extends School {
         constructor(name, numberOfStudents, sportsTeams) {
             super(name, 'high', numberOfStudents);
             this._sportsTeams = sportsTeams;
         }
         get sportsTeams() {
             return this._sportsTeams;
         }
     }

     class middleSchool extends School {
         constructor(name, numberOfStudents, actingClasses){
             super(name, 'middle', numberOfStudents);
             this._actingClasses = actingClasses
         }
         get actingClasses(){
             return this._actingClasses;
         }
     }
 
     //create PrimarySchool instance
     const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
     //console.log(lorraineHansbury);
     //console.log(lorraineHansbury.quickFacts());
    // console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

    //create highSchool instance;
    const alSmith = new highSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
    //console.log(alSmith);

    //create middleSchool instance
    const saintPat = new middleSchool('Saint Patrick', 302, ['Black Swan', 'Desperate Youth']);
    console.log(saintPat);
