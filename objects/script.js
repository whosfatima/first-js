// const card= {};
// const obb= {...card};

// card.name= 'ali';
// card.codeing= function(){
//   return 'im cooding ...'
// }

// console.log(card);

const card = {
  name : 'ali',
  lastName: 'mohammade',
  age: 55,
}
const added= {...card};

added.FullName= function(){
  return this.name + ' ' + this.lastName;
}
console.log(added);
