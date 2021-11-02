var i: number = 0;
var n: number = 100;

for(i = 1; i <= n; i++) {
  let s: string = "";

  if(i % 3 === 0) {
    s += "fizz";
  }
  if(i % 5 === 0) {
    s += "buzz";
  }
  if(s === "") {
    s += i;
  }

  console.log(s);
}
