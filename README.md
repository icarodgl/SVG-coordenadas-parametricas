# Trabalho de Calculo II

## Integrantes

    - Icaro Duarte Gavazza Lima
    - Jadson Pereira
    - Magno Macedo de Oliveira

## Orientadora

    - Adriana Padua Lovatte

## Objetivo

        O objetivo do trabalho é relacionar os assuntos ligados à Cálculo Diferencial e Integral
    com programação, verificando que curvas paramétricas e coordenadas polares podem ser implementadas
    para gráficos de curvas não usuais e com movimentos.

        O Trabalho consiste em utilizar curvas paramétricas, coordenadas polares ou superfícies cônicas
    ou ambas para obter a Construção de um emoji com movimento.

## Introdução

        Para implementar o emoji com movimentos, nós utilizamos o HTML para estruturar a página, o CSS
    que é um mecanismo para adicionar um estilo na página web e a linguagem JavaScript para poder desenhar
    e fazer a animação.
        Na implementação do nosso emoji, utilizamos o circulo para representar o rosto, os cardioides para
    representar os corações sobrevoando a cabeça do emoji, a espirais para representar os olhos e gráficos
    variados do seno para representar a boca.

## Curvas usadas

    Theta:
    - parametrização ex: de -100 a 100

    Frame:
    - variavel incremental
    - usada para modificar as funções de um frame para o outro

    Carinha:
    - x: cos(theta)*200
    - y: sen(theta)*200

    Olhos:
    - x: Math.cos((theta-frame))* index)
    - y: Math.sin((theta-frame))* index)

    Boca:
    - x: theta*8
    - y: Math.sin(theta)*Math.sin(frame)*6

    Corações:
    - x: Math.sin(theta + frame) * index + Math.sin(frame) * 100
    - y: -1 * (Math.cos(theta) * index) + 256

## Resultado

![Emoji_Animado](Emoji_Animado.gif)

## Referencias

- STEWART, J. Cálculo. Vol. 2. 7a ed. São Paulo: Cengage Learning, 2009.
- W3Schools https://www.w3schools.com/graphics/svg_intro.asp acessado em 05 de julho de 2019
