# Aula 05: Desenvolvendo Algoritmos com Recursividade

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos de Aprendizagem

- Aplicar recursividade em problemas complexos
- Implementar algoritmos de backtracking
- Desenvolver soluções recursivas para permutações e combinações
- Otimizar algoritmos recursivos

## 1. Backtracking

### 1.1 Conceito de Backtracking

**Backtracking** é uma técnica algorítmica que considera buscar toda solução possível para um problema computacional, incrementalmente abandonando candidatos ("backtrack") quando determinado que não pode produzir uma solução válida.

### 1.2 Problema das N-Rainhas

```c
#include <stdio.h>
#include <stdbool.h>

bool eh_seguro(int tabuleiro[][8], int linha, int coluna, int n) {
    // Verifica coluna
    for (int i = 0; i < linha; i++) {
        if (tabuleiro[i][coluna] == 1) {
            return false;
        }
    }
    
    // Verifica diagonal superior esquerda
    for (int i = linha - 1, j = coluna - 1; i >= 0 && j >= 0; i--, j--) {
        if (tabuleiro[i][j] == 1) {
            return false;
        }
    }
    
    // Verifica diagonal superior direita
    for (int i = linha - 1, j = coluna + 1; i >= 0 && j < n; i--, j++) {
        if (tabuleiro[i][j] == 1) {
            return false;
        }
    }
    
    return true;
}

bool resolver_nrainhas(int tabuleiro[][8], int linha, int n) {
    // Caso base: todas as rainhas foram colocadas
    if (linha >= n) {
        return true;
    }
    
    // Tenta colocar rainha em cada coluna da linha atual
    for (int coluna = 0; coluna < n; coluna++) {
        if (eh_seguro(tabuleiro, linha, coluna, n)) {
            tabuleiro[linha][coluna] = 1;
            
            // Recurse para próxima linha
            if (resolver_nrainhas(tabuleiro, linha + 1, n)) {
                return true;
            }
            
            // Backtrack: remove rainha se não leva à solução
            tabuleiro[linha][coluna] = 0;
        }
    }
    
    return false; // Não há solução
}

void imprimir_tabuleiro(int tabuleiro[][8], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("%s ", tabuleiro[i][j] ? "Q" : ".");
        }
        printf("\n");
    }
}

int main() {
    int n = 8;
    int tabuleiro[8][8] = {0};
    
    if (resolver_nrainhas(tabuleiro, 0, n)) {
        printf("Solução encontrada:\n");
        imprimir_tabuleiro(tabuleiro, n);
    } else {
        printf("Não há solução.\n");
    }
    
    return 0;
}
```

### 1.3 Labirinto

```c
#include <stdio.h>
#include <stdbool.h>

#define N 4

bool eh_valido(int x, int y, int labirinto[N][N]) {
    return (x >= 0 && x < N && y >= 0 && y < N && labirinto[x][y] == 1);
}

bool resolver_labirinto(int labirinto[N][N], int x, int y, int solucao[N][N]) {
    // Chegou ao destino
    if (x == N-1 && y == N-1) {
        solucao[x][y] = 1;
        return true;
    }
    
    // Verifica se posição atual é válida
    if (eh_valido(x, y, labirinto)) {
        solucao[x][y] = 1;
        
        // Move para direita
        if (resolver_labirinto(labirinto, x, y+1, solucao)) {
            return true;
        }
        
        // Move para baixo
        if (resolver_labirinto(labirinto, x+1, y, solucao)) {
            return true;
        }
        
        // Backtrack
        solucao[x][y] = 0;
        return false;
    }
    
    return false;
}

int main() {
    int labirinto[N][N] = {
        {1, 1, 0, 1},
        {1, 1, 1, 1},
        {0, 1, 0, 1},
        {1, 1, 1, 1}
    };
    
    int solucao[N][N] = {0};
    
    if (resolver_labirinto(labirinto, 0, 0, solucao)) {
        printf("Solução do labirinto:\n");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                printf("%d ", solucao[i][j]);
            }
            printf("\n");
        }
    } else {
        printf("Não há solução.\n");
    }
    
    return 0;
}
```

## 2. Permutações e Combinações

### 2.1 Gerando Permutações

```c
#include <stdio.h>

void trocar(char *a, char *b) {
    char temp = *a;
    *a = *b;
    *b = temp;
}

void gerar_permutacoes(char *str, int inicio, int fim) {
    if (inicio == fim) {
        printf("%s\n", str);
        return;
    }
    
    for (int i = inicio; i <= fim; i++) {
        trocar(&str[inicio], &str[i]);
        gerar_permutacoes(str, inicio + 1, fim);
        trocar(&str[inicio], &str[i]); // Backtrack
    }
}

int main() {
    char str[] = "ABC";
    int n = strlen(str);
    
    printf("Permutações de %s:\n", str);
    gerar_permutacoes(str, 0, n - 1);
    
    return 0;
}
```

### 2.2 Gerando Combinações

```c
#include <stdio.h>

void gerar_combinacoes(int arr[], int n, int r, int index, int data[], int i) {
    // Combinação atual está completa
    if (index == r) {
        for (int j = 0; j < r; j++) {
            printf("%d ", data[j]);
        }
        printf("\n");
        return;
    }
    
    // Quando não há mais elementos para escolher
    if (i >= n) {
        return;
    }
    
    // Inclui elemento atual e recurse
    data[index] = arr[i];
    gerar_combinacoes(arr, n, r, index + 1, data, i + 1);
    
    // Exclui elemento atual e recurse
    gerar_combinacoes(arr, n, r, index, data, i + 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    int r = 3;
    int data[r];
    
    printf("Combinações de %d elementos tomados %d a %d:\n", n, r, r);
    gerar_combinacoes(arr, n, r, 0, data, 0);
    
    return 0;
}
```

## 3. Subconjuntos (Power Set)

```c
#include <stdio.h>

void gerar_subconjuntos(int arr[], int n, int index, int subset[], int subset_size) {
    // Imprime subconjunto atual
    printf("{ ");
    for (int i = 0; i < subset_size; i++) {
        printf("%d ", subset[i]);
    }
    printf("}\n");
    
    // Gera subconjuntos incluindo elementos restantes
    for (int i = index; i < n; i++) {
        subset[subset_size] = arr[i];
        gerar_subconjuntos(arr, n, i + 1, subset, subset_size + 1);
    }
}

int main() {
    int arr[] = {1, 2, 3};
    int n = 3;
    int subset[n];
    
    printf("Todos os subconjuntos:\n");
    gerar_subconjuntos(arr, n, 0, subset, 0);
    
    return 0;
}
```

## 4. Problema da Soma de Subconjuntos

```c
#include <stdio.h>
#include <stdbool.h>

bool existe_soma(int conjunto[], int n, int soma) {
    // Caso base
    if (soma == 0) {
        return true;
    }
    if (n == 0 && soma != 0) {
        return false;
    }
    
    // Se último elemento é maior que soma, ignore
    if (conjunto[n-1] > soma) {
        return existe_soma(conjunto, n-1, soma);
    }
    
    // Retorna true se soma pode ser obtida incluindo ou excluindo último elemento
    return existe_soma(conjunto, n-1, soma) || 
           existe_soma(conjunto, n-1, soma - conjunto[n-1]);
}

void imprimir_subset_soma(int conjunto[], int n, int soma, int subset[], int subset_size) {
    if (soma == 0) {
        printf("Subconjunto encontrado: { ");
        for (int i = 0; i < subset_size; i++) {
            printf("%d ", subset[i]);
        }
        printf("}\n");
        return;
    }
    
    if (n == 0) {
        return;
    }
    
    // Inclui elemento atual
    if (conjunto[n-1] <= soma) {
        subset[subset_size] = conjunto[n-1];
        imprimir_subset_soma(conjunto, n-1, soma - conjunto[n-1], subset, subset_size + 1);
    }
    
    // Exclui elemento atual
    imprimir_subset_soma(conjunto, n-1, soma, subset, subset_size);
}

int main() {
    int conjunto[] = {3, 34, 4, 12, 5, 2};
    int soma = 9;
    int n = 6;
    
    if (existe_soma(conjunto, n, soma)) {
        printf("Existe subconjunto com soma %d\n", soma);
        int subset[n];
        imprimir_subset_soma(conjunto, n, soma, subset, 0);
    } else {
        printf("Não existe subconjunto com soma %d\n", soma);
    }
    
    return 0;
}
```

## 5. Otimizações em Recursão

### 5.1 Memoização

```c
#include <stdio.h>
#include <string.h>

#define MAX_N 100
int memo[MAX_N];

int fibonacci_memo(int n) {
    if (n <= 1) {
        return n;
    }
    
    if (memo[n] != -1) {
        return memo[n];
    }
    
    memo[n] = fibonacci_memo(n-1) + fibonacci_memo(n-2);
    return memo[n];
}

int main() {
    memset(memo, -1, sizeof(memo));
    
    int n = 40;
    printf("Fibonacci(%d) = %d\n", n, fibonacci_memo(n));
    
    return 0;
}
```

### 5.2 Eliminação de Recursão de Cauda

```c
#include <stdio.h>

// Versão recursiva tradicional
int fatorial_recursivo(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * fatorial_recursivo(n - 1);
}

// Versão com recursão de cauda
int fatorial_cauda_aux(int n, int acc) {
    if (n <= 1) {
        return acc;
    }
    return fatorial_cauda_aux(n - 1, n * acc);
}

int fatorial_cauda(int n) {
    return fatorial_cauda_aux(n, 1);
}

// Versão iterativa (conversão da recursão de cauda)
int fatorial_iterativo(int n) {
    int acc = 1;
    while (n > 1) {
        acc = n * acc;
        n = n - 1;
    }
    return acc;
}

int main() {
    int n = 10;
    
    printf("Fatorial recursivo: %d\n", fatorial_recursivo(n));
    printf("Fatorial cauda: %d\n", fatorial_cauda(n));
    printf("Fatorial iterativo: %d\n", fatorial_iterativo(n));
    
    return 0;
}
```

## 6. Exercícios Práticos

### 6.1 Problemas de Backtracking
1. Implemente o Sudoku Solver
2. Resolva o problema do Cavalo no Tabuleiro
3. Encontre todas as soluções do problema das N-Rainhas

### 6.2 Problemas de Combinatória
4. Gere todas as partições de um número
5. Encontre todas as formas de fazer troco para uma quantia
6. Implemente o problema da mochila usando backtracking

### 6.3 Otimização
7. Compare performance de Fibonacci com e sem memoização
8. Converta algoritmos recursivos para iterativos
9. Implemente programação dinâmica para problemas clássicos

## 7. Próxima Aula

Na **Aula 06**, estudaremos:
- Limitações da recursividade
- Problemas de performance e stack overflow
- Quando escolher iteração ao invés de recursão
- Técnicas de conversão recursão → iteração

## Bibliografia da Aula

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 15
- Sedgewick, R. *Algorithms*, 4ª ed., Cap. 2.3
- Skiena, S.S. *The Algorithm Design Manual*, 3ª ed., Cap. 7-8
