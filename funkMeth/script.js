let names= [
    'maryam',
    'James',
    'Michael',
    'John',
    'Robert',
    'David	',
    'William',
    'Richard	',
    'Joseph	',
    'Thomas',
    'Christopher',
    'Charles	',
] 

let Allname= (char) => {
    let letterName=[]
    for (let i =0; i < names.length; i++ ){
        if(names[i].startsWith(char)){
            letterName.push(names[i])
        }
    }
    return letterName;
}
console.log(Allname('W'));
