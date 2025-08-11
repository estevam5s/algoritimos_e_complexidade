# Aula 01: Algoritmos - Funções e Passagem de Parâmetros

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos de Aprendizagem

Ao final desta aula, o estudante será capaz de:
- Compreender conceitos fundamentais de algoritmos
- Dominar a criação e uso de funções
- Aplicar diferentes formas de passagem de parâmetros
- Analisar o escopo de variáveis em funções

## 1. Conceitos Fundamentais de Algoritmos

### 1.1 Definição de Algoritmo

Um **algoritmo** é uma sequência finita e ordenada de instruções não ambíguas que resolve um problema específico ou realiza uma tarefa computacional.

### 1.2 Características Essenciais

- **Finitude**: Deve terminar após um número finito de passos
- **Definição**: Cada instrução deve ser clara e precisa
- **Entrada**: Zero ou mais valores de entrada
- **Saída**: Um ou mais valores de saída
- **Efetividade**: Cada operação deve ser realizável

## 2. Funções em Algoritmos

### 2.1 Conceito de Função

Uma **função** é um bloco de código que executa uma tarefa específica e pode ser reutilizado em diferentes partes do programa.

### 2.2 Vantagens das Funções

- **Modularidade**: Divisão do problema em partes menores
- **Reutilização**: Código pode ser usado múltiplas vezes
- **Manutenibilidade**: Facilita correções e melhorias
- **Legibilidade**: Torna o código mais compreensível

### 2.3 Sintaxe de Funções em C

```c
tipo_retorno nome_funcao(tipo_parametro1 parametro1, tipo_parametro2 parametro2) {
    // Corpo da função
    return valor; // opcional para funções void
}
```

### 2.4 Exemplo Prático

```c
#include <stdio.h>

// Função que calcula o quadrado de um número
int quadrado(int numero) {
    return numero * numero;
}

// Função que verifica se um número é par
int eh_par(int numero) {
    return (numero % 2 == 0);
}

int main() {
    int valor = 5;
    printf("O quadrado de %d é %d\n", valor, quadrado(valor));
    printf("%d é %s\n", valor, eh_par(valor) ? "par" : "ímpar");
    return 0;
}
```

## 3. Passagem de Parâmetros

### 3.1 Passagem por Valor

Na **passagem por valor**, uma cópia do valor é enviada para a função. Mudanças no parâmetro não afetam a variável original.

```c
#include <stdio.h>

void incrementa_valor(int x) {
    x = x + 1;
    printf("Dentro da função: %d\n", x);
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\n", numero);
    incrementa_valor(numero);
    printf("Depois da função: %d\n", numero);
    return 0;
}
```

**Saída:**
```
Antes da função: 10
Dentro da função: 11
Depois da função: 10
```

### 3.2 Passagem por Referência (Ponteiros)

Na **passagem por referência**, o endereço da variável é enviado. Mudanças no parâmetro afetam a variável original.

```c
#include <stdio.h>

void incrementa_referencia(int *x) {
    *x = *x + 1;
    printf("Dentro da função: %d\n", *x);
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\n", numero);
    incrementa_referencia(&numero);
    printf("Depois da função: %d\n", numero);
    return 0;
}
```

**Saída:**
```
Antes da função: 10
Dentro da função: 11
Depois da função: 11
```

### 3.3 Passagem de Arrays

Arrays são sempre passados por referência em C:

```c
#include <stdio.h>

void imprime_array(int arr[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void dobra_valores(int arr[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        arr[i] = arr[i] * 2;
    }
}

int main() {
    int numeros[] = {1, 2, 3, 4, 5};
    int tam = 5;
    
    printf("Array original: ");
    imprime_array(numeros, tam);
    
    dobra_valores(numeros, tam);
    
    printf("Array modificado: ");
    imprime_array(numeros, tam);
    
    return 0;
}
```

## 4. Escopo de Variáveis

### 4.1 Variáveis Locais

Variáveis declaradas dentro de uma função são **locais** e só existem dentro dessa função:

```c
#include <stdio.h>

void funcao_exemplo() {
    int local = 20;  // Variável local
    printf("Variável local: %d\n", local);
}

int main() {
    int local = 10;  // Outra variável local (diferente da anterior)
    printf("Variável local do main: %d\n", local);
    funcao_exemplo();
    // printf("%d", local); // Ainda imprime 10, não 20
    return 0;
}
```

### 4.2 Variáveis Globais

Variáveis declaradas fora de todas as funções são **globais** e podem ser acessadas por qualquer função:

```c
#include <stdio.h>

int global = 100;  // Variável global

void modifica_global() {
    global = global + 50;
    printf("Global modificada: %d\n", global);
}

int main() {
    printf("Global inicial: %d\n", global);
    modifica_global();
    printf("Global no main: %d\n", global);
    return 0;
}
```

## 5. Exemplos Práticos Completos

### 5.1 Calculadora com Funções

```c
#include <stdio.h>

float somar(float a, float b) {
    return a + b;
}

float subtrair(float a, float b) {
    return a - b;
}

float multiplicar(float a, float b) {
    return a * b;
}

float dividir(float a, float b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("Erro: Divisão por zero!\n");
        return 0;
    }
}

void menu() {
    printf("\n=== CALCULADORA ===\n");
    printf("1. Somar\n");
    printf("2. Subtrair\n");
    printf("3. Multiplicar\n");
    printf("4. Dividir\n");
    printf("5. Sair\n");
    printf("Escolha uma opção: ");
}

int main() {
    int opcao;
    float num1, num2, resultado;
    
    do {
        menu();
        scanf("%d", &opcao);
        
        if (opcao >= 1 && opcao <= 4) {
            printf("Digite o primeiro número: ");
            scanf("%f", &num1);
            printf("Digite o segundo número: ");
            scanf("%f", &num2);
            
            switch (opcao) {
                case 1:
                    resultado = somar(num1, num2);
                    printf("Resultado: %.2f + %.2f = %.2f\n", num1, num2, resultado);
                    break;
                case 2:
                    resultado = subtrair(num1, num2);
                    printf("Resultado: %.2f - %.2f = %.2f\n", num1, num2, resultado);
                    break;
                case 3:
                    resultado = multiplicar(num1, num2);
                    printf("Resultado: %.2f * %.2f = %.2f\n", num1, num2, resultado);
                    break;
                case 4:
                    resultado = dividir(num1, num2);
                    if (num2 != 0) {
                        printf("Resultado: %.2f / %.2f = %.2f\n", num1, num2, resultado);
                    }
                    break;
            }
        }
    } while (opcao != 5);
    
    printf("Calculadora encerrada!\n");
    return 0;
}
```

### 5.2 Funções Matemáticas

```c
#include <stdio.h>

int fatorial(int n) {
    if (n <= 1) {
        return 1;
    }
    int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

int eh_primo(int n) {
    if (n <= 1) return 0;
    if (n <= 3) return 1;
    if (n % 2 == 0 || n % 3 == 0) return 0;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return 0;
        }
    }
    return 1;
}

int main() {
    int numero = 10;
    
    printf("Número: %d\n", numero);
    printf("Fatorial: %d\n", fatorial(numero));
    printf("Fibonacci: %d\n", fibonacci(numero));
    printf("É primo? %s\n", eh_primo(numero) ? "Sim" : "Não");
    
    return 0;
}
```

## 6. Exercícios Práticos

### 6.1 Exercícios Básicos

1. Crie uma função que calcule a área de um círculo
2. Implemente uma função que converta temperatura de Celsius para Fahrenheit
3. Desenvolva uma função que encontre o maior entre três números

### 6.2 Exercícios Intermediários

4. Crie uma função que inverta os elementos de um array
5. Implemente uma função que conte quantas vezes um elemento aparece em um array
6. Desenvolva uma função que ordene um array usando bubble sort

### 6.3 Exercícios Avançados

7. Crie um sistema de funções para manipular uma lista de estudantes (adicionar, remover, buscar)
8. Implemente funções para operações com matrizes (soma, multiplicação)
9. Desenvolva um conjunto de funções para validação de dados (CPF, email, etc.)

## 7. Próxima Aula

Na **Aula 02**, estudaremos:
- Estruturas de dados homogêneas (arrays)
- Estruturas de dados heterogêneas (structs)
- Conceitos e uso de ponteiros
- Gerenciamento de memória

## Bibliografia da Aula

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 1
- Kernighan, B.W.; Ritchie, D.M. *The C Programming Language*, 2ª ed., Cap. 1-4
- Sedgewick, R. *Algorithms in C*, Cap. 1-2
