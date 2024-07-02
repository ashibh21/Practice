let obj1 = {
  name: "Ashish",
  class: 10,
};
function printit(arg) {
  console.log(this.name + " class = " + this.class + " address = " + arg);
}
let obj2 = {
  name: "Suresh",
  class: 11,
};
let neww = printit.bind(obj2, ["India"]);
// console.log(neww);
neww();
