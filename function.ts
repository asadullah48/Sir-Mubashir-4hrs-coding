//EXPECT NUMBER
function add(a: number, b: number): number {
    return a + b;
  }
  
  //EXPECT STRING
  
  function greet(name: string): string {
    return `Assalaam O alikum ${name}`;
  }
  
  //EXPECT BOOLEAN
  function powerOutage(light: boolean): void {
    if (light) {
      console.log('There is light Alhamdurillah');
    } else {
      console.log('Power outage , will get resolve soon In shaa Allah');
    }
  }
  
  //EXPECT ARRAY
  function customFind(arr: string[], element: string): boolean | void {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
  }
  
  //EXPECT OBJECT
  function logPersonName(person: TPerson): void {
    console.log(person.name);
  }
  
  type TPerson = {
    name: string;
    age: number;
  };
  
  const person: TPerson = {
    name: 'Asad',
    age: 48,
  };
  
  logPersonName(person);