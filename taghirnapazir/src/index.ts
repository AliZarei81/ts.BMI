
type Person = {
  id: string;
  name: string;
  age: number;
};
type reperson = {
  readonly id: string;
  name: string;
  age: number;
};
function excludeYoungPersons(persons: ReadonlyArray<Person>):ReadonlyArray<reperson>{
  
  return persons
  .filter(person => person.age >= 30)
   .map((Person)=>{
    const sw :reperson = {
      id:Person.id,
      name:Person.name,
      age:Person.age,
    };
    return sw
   })
}


export { excludeYoungPersons };
