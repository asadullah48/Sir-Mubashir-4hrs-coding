console.log('Start');
let username = 'Asadullah Shafique';
console.log(username); // 5
let age = 48;
if (age < 18) {
    console.log('you are not an adult');
}
else {
    console.log('you are an adult');
}
const bestFriends = ['Usman', 'Mansoor', 'Ifrahim', 'Moshin'];
for (let i = 0; i < bestFriends.length; i++) {
    console.log(`${bestFriends[i]} is my best friend!`);
}
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    isUsed: false,
    year: 2012,
};
console.log(car['brand']);
console.log(car.model);
console.log('The End');
export {};
