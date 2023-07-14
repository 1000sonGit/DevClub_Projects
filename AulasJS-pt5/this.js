/*

THIS

this em inglês significa => este, esta, isto ...

No JavaScript, o this faz referência:

Node => module.exports (Quando está no escopo GLOBAL), no escopo local ele se referencia a um objeto ou variável
Web => window

Escopo:

    => Global -> Quando começamos a escrever nossa aplicação.
        No contexto global, o this faz referência ao objeto global,
        que é o "objeto window" no navegador de internet ou ao "objeto global" no Node.js.
        OBS: Tanto o objeto window e global, são módulos nativos do JS e contêm diversas funções.

    => Local -> Por exemplo, dentro de uma função!

const name = "João" //Escopo Global

function myName(){
    const myName = "João" //Escopo Local

}
*/

const people = {
    name: "Milson",
    age: 39,
    talk: function (){
        console.log(this.name) // Escopo local: se referencia a uma variável/objeto que está acima dele
    }
}

function myFunction(){
    console.log(this) //Nesse caso, como não tem ninguém acima do this, ele se comporta como o módulo nativo "global"
}

people.talk()
//Uso do this no Escopo GLOBAL
//module.exports = people
this.person = people // Tive que mudar o nome porque estava dando erro (nome já declarado!)