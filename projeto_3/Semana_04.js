/*Exercício 01 )
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/


nome = "Iride"
function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`)
}

cumprimentar(nome)



/*Exercício 02 )
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

idade_anos=25
const idade_dias = a => a*365
console.log(idade_dias(idade_anos))


/*Exercício 03 )
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês
*/

const salario = (h,s) => console.log(`Salário igual a R$ ${h*s}`)
salario(150, 40.5)

/*Exercício 04 )
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function nome_do_mes(n){
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho" , "julho", "agosto", "setembro"," outubro", "novembro", "dezembro"]
  console.log(meses[n-1])
}

nome_do_mes(12)

/*Exercício 05 )
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

const maior = (n1, n2)=>(n1>=n2) ? true:false

console.log(maior(5, "1"))


/*Exercício 06 )
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function inverso(param){
  if (!isNaN(param)){

    if (param===true)
      return false
    else if(param === false)
      return true
    else if (!isNaN(param))
      return -param
  }

  if(isNaN(param))
      console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof(param)}`)
}

param = "olá"


inverso(param)


/*Exercício 07 )
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre ( n, min, max, inclusivo = false){
  if (inclusivo){
    if (min < max){
      if (n>=min && n <= max)
        return true
      else
        return false
    }
    else{
      if (n<=min && n >= max)
        return true
      else
        return false
    }
  }
  else{
    if (min < max){
      if (n>min && n < max)
        return true
      else
        return false
    }
    else{
      if (n<min && n > max)
        return true
      else
        return false
    }
  }
}

console.log(estaEntre(10, 30, 25))

/*Exercício 08 )
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(x,y){
  if (x>0 && y>0){
    p=0
    for(let i = 1; i<=y; i++){
      p += x
    }
    return console.log(p)
  }
  else if (x ===0 || y === 0)
    return console.log(0)
  else
    return console.log(isNaN)
}

multiplicar(2,8)


/*Exercício 09 )
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir (par,num){
  if(!isNaN(num)){
    const array = new Array()
    for(let i =0; i< num; i++){
      array.push(par)
    }
    return console.log(array)
  }
  else
    return console.log(isNaN)
  
}

repetir("ola", 5)

/*Exercício 10 )
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

const simbolo = numero => "+".repeat(numero)

console.log(simbolo(10))



/*Exercício 11 )
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array
*/

const primeiroEultimo = array => console.log(new Array(array[0], array.pop()))

primeiroEultimo([7, 14, "olá"])
primeiroEultimo([-100, "aplicativo",16, 542])


/*Exercício 12 )
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
*/


const set = {
  id : 20,
  nome : "caneta",
  descricao: "Não preenchido"
}

function removerPropriedade (obj, prop){
  delete obj[prop]
  return console.log(obj)
}

removerPropriedade(set, "descricao")


/*Exercício 13 )
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function filtrarNumeros(array){
  const p = new Array()
  for (i in array){
    if (typeof(array[i]) === "number"){
      p.push(array[i])
    }
  }
  return console.log(p)
}

filtrarNumeros(["JavaScript", 1, "3", "Web", 20])


/*Exercício 14 )
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

obj = {
  nome : "Maria",
  profissao: "Desenvolvedora"
}

function objetoParaArray (obj){
  let array_1 = new Array()
  let array_2 = new Array()
  let array_3 = new Array()
  array_1=Object.keys(obj)
  array_2=Object.values(obj)
  for(let i =  0; i< Object.keys(obj).length; i++){
    array_3.push([array_1[i], array_2[i]])
  }
  return console.log(array_3)
}

objetoParaArray(obj)


/*Exercício 15 )
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function receberSomenteOsParesDeIndicesPares(array){
  const array_2 = new Array()
  array.forEach((numero,indice) => {
    if(numero%2 == 0 && indice%2 == 0)
      array_2.push(array[indice])
  });
  return console.log(array_2)
}

receberSomenteOsParesDeIndicesPares([10,70,22,43])

/*Exercício 16 )
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/


const checarAnoBissexto = num => (num%400==0)? true: ((num%4==0 && num%100 != 0)?true:false)

console.log(checarAnoBissexto(2016))
console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))

/*Exercício 17 )
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array
*/

function soma(array){
  let v =0
  array.forEach(function(num){
    v+=num
  })
  return v
}

console.log(soma([10,10,10]))

/*Exercício 18 )
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/



function despesasTotais(array){
  let v=0
  array.forEach(function(prod){
    v+=prod.preco
    })
  return console.log(v)
} 


despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome:"Cinema", categoria: "Entreterimento", preco: 150}
])



/*Exercício 19 )
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números
*/

function calcularMedia(array){
  let v =0
  let i
  array.forEach(function(numero, indice){
    v +=numero 
    i =indice 
  })
  i++
  console.log(v/i)
}

calcularMedia([1,2,3,4,5])

/*Exercício 20 )
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

const area = function(x,y){
  x=(x*y)/2
  console.log(x.toFixed(2))
}

area(10,15)

/*Exercício 21 )
Criar uma função que receba um array de números e retorne o menor número desse array.
*/

const menorNumero = array=>(array.sort(function(a,b){return a-b})[0])

console.log(menorNumero([10, 2, -10, 50]))

/*Exercício 22 )
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

const funcaoDaSorte = function(num, v= new Array()){
  v.push(Math.floor(Math.random()*10+1))
  console.log(v[0])
  num === v[0]? console.log(`Parabéns! O número sorteado foi o ${num}`):console.log(`Que pena! O número sorteado foi o ${v[0]}`)
}
funcaoDaSorte(9)



/*Exercício 23 )
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

const contarPalavras = function(frase, palavras=0) { 
  for (i in frase){ if(frase[i]==" "){palavras++}}
  console.log(palavras+1)
}

contarPalavras("Olá meu nome é iride")

/*Exercício 24 )
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/

function contarCaracter (c,f){
  let v =0
  for(i in f){
    if(c === f[i])
      v++
  }
  return console.log(v)
}

contarCaracter("r", "A soRte favorece os audazes")

/*Exercício 25 )
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/
//nao terminei ainda

function buscarPalavrasSemelhantes(palavra, array){

}


/*Exercício 26 )
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
*/

const removerVogais = frase => frase.replace(/[aeiouáàíãúéê]/gi,"")

console.log(removerVogais("LAte mais alto que daqui eu não te escuto"))

/*Exercício 27 )
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/

//não terminei ainda
function inverter(obj){
  let v1,v2
  const obj_1 = new Object()
  v1 = Object.keys(obj)
  v2 = Object.values(obj)
  for(i in v2){
    
  }
  return console.log(obj_1)
}

inverter({a:'1', b:'2', c:'3'})


/*Exercício 28 )
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function filtrarPorQuantidadeDeDigitos(array, dig){
  const array_1 = new Array()
  for(numero of array){
    if(String(numero).length == dig )
      array_1.push(numero)
  }
  return console.log(array_1)
}

filtrarPorQuantidadeDeDigitos([38,2,365,10,125,11],2)

/*Exercício 29 )
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array
*/

const segundoMaior= array => console.log(array.sort((a,b)=>b-a)[1])


segundoMaior([12,16,1,5])

/*Exercício 30 )
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

function receberMelhorEstudante(obj){
  const array_nome = Object.keys(obj)
  const array_notas = Object.values(obj)
  const obj_retorno = new Object()
  let media_maior =0
  let pessoa = 0
  for(notas of array_notas){
    soma_notas = notas.reduce((acum,va)=>acum+va)
    media = soma_notas/(notas.length)    
    if(media > media_maior){
      media_maior = media
      pessoa++
    }
  }
  pessoa--
  
  obj_retorno.nome = array_nome[pessoa]
  obj_retorno.media = media_maior

  return console.log(obj_retorno)
}

receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9] // média 7.75
  })


