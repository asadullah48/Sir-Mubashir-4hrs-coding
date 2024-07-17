//EXPECT NUMBER
function add(a, b) {
    return a + b;
}
//EXPECT STRING
function greet(name) {
    return `Assalaam O alikum ${name}`;
}
//EXPECT BOOLEAN
function powerOutage(light) {
    if (light) {
        console.log('There is light Alhamdurillah');
    }
    else {
        console.log('Power outage , will get resolve soon In shaa Allah');
    }
}
//EXPECT ARRAY
function customFind(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
//EXPECT OBJECT
function logPersonName(person) {
    console.log(person.name);
}
const person = {
    name: 'Asad',
    age: 48,
};
logPersonName(person);
export {};
