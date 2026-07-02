/* ============================================================
   desafios.js  —  LISTA DE DESAFIOS (você escreve aqui)
   ------------------------------------------------------------
   COMO RODAR:
     1. Abra o arquivo  desafios.html  no navegador.
     2. Aperte F12 e deixe aberta a aba "Console".
     3. Escreva a resposta de cada desafio aqui embaixo, salve e
        aperte F5. O resultado aparece no Console.

   REGRA DE OURO: o índice começa no 0, e a última posição de um
   array é  (tamanho - 1),  ou seja  array.length - 1.

   Cada desafio tem: OBJETIVO, DICA e MODELO (exemplo parecido).
   Escreva no espaço  ">>> sua resposta <<<".
   ============================================================ */


/* ===== PARTE A — LER O ARRAY ===== */

/* DESAFIO 1
   OBJETIVO: criar um array 'filmes' com 5 filmes e mostrar no
             console o PRIMEIRO e o ÚLTIMO filme.
   DICA: primeiro -> filmes[0]   ;   último -> filmes[filmes.length - 1]
   MODELO:
       let cores = ["azul", "verde", "rosa"];
       console.log(cores[0]);
       console.log(cores[cores.length - 1]);
*/
// >>> sua resposta do DESAFIO 1 <<<

let filmes = ["Matrix", "Coringa", "Duna", "Titanic", "Up"];
console.log("D1:", filmes[0], "/", filmes[filmes.length- 1]);


/* DESAFIO 2
   OBJETIVO: mostrar a frase "Minha lista tem X filmes" (X = quantos).
   DICA: quantos itens -> filmes.length ; junte textos com +
   MODELO:
       console.log("Tenho " + cores.length + " cores");
*/
// >>> sua resposta do DESAFIO 2 <<<

 console.log("D2: Minha lista tem " + filmes.length + "filmes");

/* ===== PARTE B — MODIFICAR O ARRAY ===== */

/* DESAFIO 3
   OBJETIVO: começar com ["pão", "leite"], adicionar "ovos" e
             "café" no fim (push), remover o último (pop) e mostrar.
   DICA: adicionar -> array.push("x")  ;  remover último -> array.pop()
   MODELO:
       let compras = ["pão", "leite"];
       compras.push("ovos");
       compras.pop();
       console.log(compras);
*/
// >>> sua resposta do DESAFIO 3 <<<

let compras = ["pão", "leite"];
compras.push("ovos");
compras.pop();
console.log("D3", compras);


/* DESAFIO 4
   OBJETIVO: no array de compras, trocar a POSIÇÃO 0 por "pão integral".
   DICA: trocar um item -> array[0] = "novo valor";
   MODELO:
       compras[1] = "leite desnatado";
       console.log(compras);
*/
// >>> sua resposta do DESAFIO 4 <<<

compras[0] = "pão integral";
console.log("D4:", compras);


/* ===== PARTE C — PERCORRER COM for ===== */

/* DESAFIO 5
   OBJETIVO: criar 'turma' com 4 nomes e mostrar cada um assim:
             "1 - Ana", "2 - Bruno" ... (numerando a partir de 1).
   DICA: dentro do for, o aluno da vez é turma[i]; mostre (i + 1).
   MODELO:
       let dias = ["seg", "ter", "qua"];
       for (let i = 0; i < dias.length; i++) {
         console.log((i + 1) + " - " + dias[i]);
       }
*/
// >>> sua resposta do DESAFIO 5 <<<

let turma = ["Ana", "Bruno", "Carla", "Diego"];
for (let i = 0; i < turma.length; i++){
   console.log("D5: " + (i+1) + " - " + turma[i]);
}


/* DESAFIO 6
   OBJETIVO: dado precos = [10, 25, 8, 42], somar TODOS e mostrar o total.
   DICA: crie um "acumulador" que começa em 0 ANTES do for, e vá
         somando dentro do for:  total = total + precos[i];
   MODELO:
       let notas = [7, 9, 6];
       let soma = 0;
       for (let i = 0; i < notas.length; i++) {
         soma = soma + notas[i];
       }
       console.log("Soma: " + soma);
*/
// >>> sua resposta do DESAFIO 6 <<<

       let precos = [10, 25, 8, 42];
       let total = 0;
       for (let i = 0; i < precos.length; i++) {
         total = total + precos[i];
       }
       console.log("D6: Total = " + total);

/* DESAFIO 7
   OBJETIVO: criar 'palavras' com 5 palavras e contar quantas têm
             MAIS DE 5 letras. Mostrar o total.
   DICA: o tamanho de UMA palavra também é .length -> palavras[i].length
         Use um contador que começa em 0 e some 1 quando > 5:
             if (palavras[i].length > 5) { conta = conta + 1; }
   MODELO:
       let nomes = ["Ana", "Bernardo"];
       let conta = 0;
       for (let i = 0; i < nomes.length; i++) {
         if (nomes[i].length > 5) { conta = conta + 1; }
       }
       console.log(conta);
*/
// >>> sua resposta do DESAFIO 7 <<<

let palavras = ["sol", "banana", "casa", "computador", "rua"];
       let conta = 0;
       for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length > 5) { 
      conta = conta + 1; 
       }
       }
      console.log("D7: " + conta + " palavras com mais de 5 letras");
   
/* ===== PARTE D — PROJETO ===== */

/* DESAFIO 8
   OBJETIVO: começar com um array VAZIO 'convidados', adicionar 3
             nomes com push e mostrar "Total de convidados: X".
   DICA: array vazio -> let convidados = [];  ; contar -> .length
   MODELO:
       let fila = [];
       fila.push("João");
       console.log("Total: " + fila.length);
*/
// >>> sua resposta do DESAFIO 8 <<<

let convidados = [];
convidados.push("Ana");
convidados.push("Bruno");
convidados.push("Carla");
console.log("D8: Total de convidados: " + convidados.length);


/* ===== DESAFIOS EXTRAS (★ para quem terminar antes) ===== */

/* DESAFIO 9 ★
   OBJETIVO: dado numeros = [7, 2, 19, 5, 11], descobrir o MAIOR.
   DICA: guarde um "maior até agora" começando com o PRIMEIRO item
         (numeros[0]); a cada volta, se achar um maior, atualize.
   MODELO:
       let idades = [30, 45, 22];
       let maior = idades[0];
       for (let i = 1; i < idades.length; i++) {
         if (idades[i] > maior) { maior = idades[i]; }
       }
       console.log("Maior: " + maior);
*/
// >>> sua resposta do DESAFIO 9 <<<

let numeros = [7, 2, 19, 5, 11];
let maior = numeros[0]
for (let i = 1; i < numeros.length; i++) {
   if (numeros[i] > maior) {
      maior = numeros[i];
   }
}
console.log("D9: Maior = " + maior);

/* DESAFIO 10 ★
   OBJETIVO: dado turma = ["Ana", "Bruno", "Carla"], mostrar os nomes
             DE TRÁS PARA FRENTE (Carla, Bruno, Ana).
   DICA: um for que COMEÇA no fim e diminui:
             for (let i = turma.length - 1; i >= 0; i--) { ... }
   MODELO:
       let letras = ["a", "b", "c"];
       for (let i = letras.length - 1; i >= 0; i--) {
         console.log(letras[i]);
       }
*/
// >>> sua resposta do DESAFIO 10 <<<

let turma10 = ["Ana", "Bruno", "Carla"];
for (let i = turma10.length - 1; i >= 0; i--) {
   console.log("D10: " + turma10[i]);
}
