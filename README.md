# :computer: Trybe-Bonus-Project-Color-Guess :computer:

Nesse projeto foi desenvolvido uma aplicação onde é possível jogar um jogo de adivinhação de cores. Foram utilizados HTML, CSS e JavaScript no desenvolvimento.


# Acesse o projeto clicando [aqui](https://fredericotp.github.io/trybe-bonus-project-color-guess/)! :green_heart:

<br />

<details>
<summary>
  
## 1- Requisitos
  
</summary>
 
### 1 - Adicione no seu site um título com o nome do seu jogo

Adicione à sua página um título com o nome do seu jogo utilizando a tag `h1` com o id `title`<br />

### 2 - Adicione um texto com o código RGB a ser adivinhado

Sua página deverá conter uma tag `p` com o conteúdo da cor a ser adivinhada no formato rgb `(168, 34, 1)` e com o id `rgb-color`<br />

### 3 - Adicione à página opções de cores para serem adivinhadas

Sua página deverá conter 6 círculos. A esses círculos deve ser adicionada a classe `ball` e todos devem ter o mesmo tamanho para largura e altura.<br />

### 4 - Adicione cores aos círculos, que devem ser geradas dinamicamente

As cores dos círculos são geradas via JavaScript como opção de cor de adivinhação<br />

### 5 - Ao clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

<details>
  <summary>Sua página deverá ter uma tag `p` com id `answer` que mudará conforme a situação do jogo</summary><br />

  Quando o jogo é iniciado, o conteúdo do texto da tag `p` exibido deve ser `"Escolha uma cor"`;

  - Se o círculo colorido for o **correto**, deve ser exibido o texto `"Acertou!"`;

  - Se o círculo colorido for o **incorreto**, deve ser exibido o texto `"Errou! Tente novamente!"`.

</details>

### 6 - Crie um botão para iniciar/reiniciar o jogo

<details>
  <summary>Sua página deverá possuir um botão com id `reset-game` que possibilite reiniciar o jogo e jogar novamente</summary><br />

 - Lembrando de que quando o jogo é iniciado o elemento com id `answer` deve exibir o texto `"Escolha uma cor"`, as cores dos círculos devem ser geradas novamante e o elemento com id `rgb-color` deve ser atualizado.

</details>

## Requisito Bônus

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

<details>
  <summary>Sua página deverá conter um elemento que vai marcar o placar da pessoa jogadora com id `score`</summary><br />

  Situação do jogo:

  - O valor inicial do placar deve ser 0;

  - Para cada acerto incrementar 3 pontos ao placar;

  - Ao clicar no botão que reinicia o jogo, o placar **NÃO** deve ser redefinido.

</details>

</details>
<br />

## 2- Nota do Projeto

## 100% :heavy_check_mark:

![Project-Bonus-Color-Guess-Grade](https://github.com/FredericoTP/trybe-bonus-project-color-guess/blob/main/images/color-guess-grade.png?raw=true)

<br />

## 3- Preview

![Project-Bonus-Color-Guess-Preview](https://github.com/FredericoTP/trybe-bonus-project-color-guess/blob/main/images/color-guess-preview.png?raw=true)
