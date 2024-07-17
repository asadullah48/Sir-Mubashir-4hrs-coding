const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!!');
    }, 1500);
  });
  
  returnMoney
    .then((value) => {
      console.log(value);
      console.log("Jazak Allah, for returning money");
    })
    .catch((value) => {
      console.log(value);
      console.log("Sorry, I'm unable to return money");
    })
    .finally(() => {
      console.log("I'll not give you money again!");
    });