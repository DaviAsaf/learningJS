function criaMultiplicador(multiplicador){
    //2
    return function (n){
        //2
        return n * multiplicador
    };
};

const duplicador = criaMultiplicador(2)
const triplicador = criaMultiplicador(3)
const quadruplicador = criaMultiplicador(4)


console.log(duplicador(2))
console.log(triplicador(2))
console.log(quadruplicador(2))
