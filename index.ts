function sum(a: number, b: number){
    return a + b
}

console.log(sum(10,20));

// types = definir uma estrura de dados (juntar diferentes interfaces) para fazer junções das interfaces
// interfaces = definir contratos de estruturas de dados

interface IAnimal {
    nome: string
    tipo: 'terrestre' |'aquatico'
    domestico: boolean
}

interface IFelino extends IAnimal {
    visaoNotirna: boolean
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'

}

type Idomestico = IFelino | ICanino

const animal: Idomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: "terrestre",
}

console.log(animal);


const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: true,
    visaoNotirna: true
}

console.log(felino);

const input = document.getElementById('input') as HTMLInputElement
input.addEventListener('input', (event) =>{
    const i = event.currentTarget as HTMLInputElement
    
    console.log(i.value);
    
})

// generic types

function adicionaApendiceLista <T> (array: any[], valor: number) {
    return array.map(item => item * valor)
}

console.log(adicionaApendiceLista([1, 2, 3], 5))
//---------------------------------------------------------------------------
interface IUsuario {
    id: string
    email: string
    cargo?: 'gerente' | 'coordenador' | 'supervisor'
}

// function redirecione(usuario: IUsuario | IAdmin){
//     // in = utilizar para verificar se existe o parametro na interface desejada
//     if('cargo' in usuario){
//         return 'admin'
        
//         // redirecionar para a area da administração
//     }
//     return 'usuario'
    
//     //  redirecionar para area do usuario
// }

// console.log(redirecione(IUsuario))

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        
        // redirecionar(usuario.cargo)
    }
    // redirecionar par area de usuario
}

// ================================================================================

interface Cachorro {
    nome: string
    idade: number
    nomeParqueFavorito?: string
}

type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k]
}

class MeuCachorro implements Cachorro {
    readonly idade
    readonly nome
    readonly nomeParqueFavorito


    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const cao = new MeuCachorro('Apolo', 14)

console.log(cao);

