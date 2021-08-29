// const person: {
//     name: string;
//     age: number;
// } 
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Max",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// };

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

// person.role.push("admin");
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["Sports"];
console.log(person.name)