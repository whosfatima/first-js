function EvenNume(NumeEven) {
    let evennume = [];
    for ( let i =0; i < NumeEven.length; i++){
        if( NumeEven[i] % 2 == 0) {
            evennume.push(NumeEven[i])
        }
    }
    return evennume;
}

console.log(EvenNume([5, 8, 6, 2, 1, 11]));
