# Aula 06: Quando Não Usar Recursividade

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos de Aprendizagem

- Identificar limitações da recursividade
- Reconhecer quando a iteração é mais apropriada
- Converter algoritmos recursivos em iterativos
- Aplicar técnicas de otimização de memória

## 1. Limitações da Recursividade

### 1.1 Stack Overflow

**Problema:** Cada chamada recursiva consome espaço na pilha de execução.

```c
#include <stdio.h>

// PERIGOSO: Pode causar stack overflow
int fibonacci_ineficiente(int n) {
    if (n <= 1) return n;
    return fibonacci_ineficiente(n-1) + fibonacci_ineficiente(n-2);
}

// Demonstração do problema
int main() {
    printf("Fibonacci(40) = %d\n", fibonacci_ineficiente(40)); // Muito lento!
    // printf("Fibonacci(50) = %d\n", fibonacci_ineficiente(50)); // Pode travar!
    return 0;
}
```

### 1.2 Complexidade Exponencial

**Problema:** Algumas recursões geram complexidade exponencial desnecessária.

```c
#include <stdio.h>
#include <time.h>

// Análise de chamadas do Fibonacci recursivo
int contador = 0;

int fib_com_contador(int n) {
    contador++;
    if (n <= 1) return n;
    return fib_com_contador(n-1) + fib_com_contador(n-2);
}

int main() {
    clock_t inicio = clock();
    
    contador = 0;
    int resultado = fib_com_contador(30);
    
    clock_t fim = clock();
    double tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    
    printf("Fibonacci(30) = %d\n", resultado);
    printf("Número de chamadas: %d\n", contador);
    printf("Tempo: %.4f segundos\n", tempo);
    
    return 0;
}
```

### 1.3 Consumo Excessivo de Memória

```c
#include <stdio.h>

// Recursão que consome muita memória
void recursao_profunda(int n) {
    char buffer[1000]; // 1KB por chamada
    
    if (n <= 0) {
        printf("Chegou ao fim com n = %d\n", n);
        return;
    }
    
    printf("Nível %d\n", n);
    recursao_profunda(n - 1);
}

int main() {
    // Cuidado: pode causar stack overflow
    recursao_profunda(1000); // 1MB+ de uso da pilha
    return 0;
}
```

## 2. Quando Evitar Recursividade

### 2.1 Problemas com Sobreposição de Subproblemas

**Evitar quando:** Há repetição desnecessária de cálculos.

```c
// ❌ RUIM: Recursão ineficiente
int fibonacci_ruim(int n) {
    if (n <= 1) return n;
    return fibonacci_ruim(n-1) + fibonacci_ruim(n-2);
}

// ✅ BOM: Versão iterativa eficiente
int fibonacci_bom(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

### 2.2 Processamento de Grandes Volumes

**Evitar quando:** Processando arrays muito grandes.

```c
#include <stdio.h>

// ❌ RUIM: Recursão para array grande
int soma_array_recursivo(int arr[], int n) {
    if (n <= 0) return 0;
    return arr[n-1] + soma_array_recursivo(arr, n-1);
}

// ✅ BOM: Iteração para array grande
int soma_array_iterativo(int arr[], int n) {
    int soma = 0;
    for (int i = 0; i < n; i++) {
        soma += arr[i];
    }
    return soma;
}

int main() {
    int grande_array[10000];
    for (int i = 0; i < 10000; i++) {
        grande_array[i] = i + 1;
    }
    
    // soma_array_recursivo(grande_array, 10000); // Stack overflow!
    printf("Soma iterativa: %d\n", soma_array_iterativo(grande_array, 10000));
    
    return 0;
}
```

### 2.3 Operações Simples em Loop

**Evitar quando:** A iteração é mais natural e eficiente.

```c
// ❌ RUIM: Recursão desnecessária
void imprimir_numeros_recursivo(int n) {
    if (n <= 0) return;
    printf("%d ", n);
    imprimir_numeros_recursivo(n - 1);
}

// ✅ BOM: Iteração simples
void imprimir_numeros_iterativo(int n) {
    for (int i = n; i > 0; i--) {
        printf("%d ", i);
    }
}
```

## 3. Técnicas de Conversão

### 3.1 Recursão Linear → Iteração

```c
#include <stdio.h>

// Recursão linear
int fatorial_recursivo(int n) {
    if (n <= 1) return 1;
    return n * fatorial_recursivo(n - 1);
}

// Conversão para iteração
int fatorial_iterativo(int n) {
    int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Usando pilha explícita para simular recursão
#include <stdlib.h>

typedef struct {
    int *dados;
    int topo;
    int capacidade;
} Pilha;

Pilha* criar_pilha(int capacidade) {
    Pilha *p = malloc(sizeof(Pilha));
    p->dados = malloc(capacidade * sizeof(int));
    p->topo = -1;
    p->capacidade = capacidade;
    return p;
}

void empilhar(Pilha *p, int valor) {
    if (p->topo < p->capacidade - 1) {
        p->dados[++p->topo] = valor;
    }
}

int desempilhar(Pilha *p) {
    if (p->topo >= 0) {
        return p->dados[p->topo--];
    }
    return -1;
}

int esta_vazia(Pilha *p) {
    return p->topo == -1;
}

int fatorial_com_pilha(int n) {
    Pilha *pilha = criar_pilha(n + 1);
    int resultado = 1;
    
    // Empilha todos os valores
    for (int i = n; i > 1; i--) {
        empilhar(pilha, i);
    }
    
    // Calcula resultado
    while (!esta_vazia(pilha)) {
        resultado *= desempilhar(pilha);
    }
    
    free(pilha->dados);
    free(pilha);
    return resultado;
}
```

### 3.2 Recursão de Cauda → Iteração

```c
// Recursão de cauda
int potencia_recursiva_cauda(int base, int exp, int acc) {
    if (exp == 0) return acc;
    return potencia_recursiva_cauda(base, exp - 1, acc * base);
}

// Conversão direta para iteração
int potencia_iterativa(int base, int exp) {
    int acc = 1;
    while (exp > 0) {
        acc = acc * base;
        exp = exp - 1;
    }
    return acc;
}
```

### 3.3 Recursão Múltipla → Programação Dinâmica

```c
#include <stdio.h>
#include <string.h>

#define MAX_N 100

// ❌ RUIM: Fibonacci recursivo exponencial
int fib_recursivo(int n) {
    if (n <= 1) return n;
    return fib_recursivo(n-1) + fib_recursivo(n-2);
}

// ✅ BOM: Programação dinâmica (bottom-up)
int fib_dp(int n) {
    if (n <= 1) return n;
    
    int dp[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// ✅ ÓTIMO: Programação dinâmica otimizada (O(1) espaço)
int fib_otimizado(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1, atual;
    
    for (int i = 2; i <= n; i++) {
        atual = prev1 + prev2;
        prev2 = prev1;
        prev1 = atual;
    }
    
    return atual;
}
```

## 4. Comparação de Performance

```c
#include <stdio.h>
#include <time.h>

void comparar_fibonacci(int n) {
    clock_t inicio, fim;
    double tempo;
    
    printf("\n=== Comparação Fibonacci(%d) ===\n", n);
    
    // Versão iterativa
    inicio = clock();
    int resultado_iter = fib_otimizado(n);
    fim = clock();
    tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Iterativo: %d (%.6f segundos)\n", resultado_iter, tempo);
    
    // Versão DP
    inicio = clock();
    int resultado_dp = fib_dp(n);
    fim = clock();
    tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Prog. Dinâmica: %d (%.6f segundos)\n", resultado_dp, tempo);
    
    // Versão recursiva (apenas para n pequeno)
    if (n <= 35) {
        inicio = clock();
        int resultado_rec = fib_recursivo(n);
        fim = clock();
        tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
        printf("Recursivo: %d (%.6f segundos)\n", resultado_rec, tempo);
    } else {
        printf("Recursivo: Muito lento para n=%d\n", n);
    }
}

int main() {
    comparar_fibonacci(30);
    comparar_fibonacci(40);
    comparar_fibonacci(50);
    
    return 0;
}
```

## 5. Alternativas à Recursividade

### 5.1 Usando Estruturas de Dados

```c
#include <stdio.h>
#include <stdlib.h>

// Travessia de árvore sem recursão
typedef struct No {
    int data;
    struct No *esquerda, *direita;
} No;

No* criar_no(int data) {
    No *novo = malloc(sizeof(No));
    novo->data = data;
    novo->esquerda = novo->direita = NULL;
    return novo;
}

// Travessia em ordem iterativa
void inorder_iterativo(No *raiz) {
    if (raiz == NULL) return;
    
    No **pilha = malloc(1000 * sizeof(No*));
    int topo = -1;
    No *atual = raiz;
    
    while (atual != NULL || topo >= 0) {
        // Vai para o nó mais à esquerda
        while (atual != NULL) {
            pilha[++topo] = atual;
            atual = atual->esquerda;
        }
        
        // Atual é NULL, então processa nó do topo da pilha
        atual = pilha[topo--];
        printf("%d ", atual->data);
        
        // Agora vai para subárvore direita
        atual = atual->direita;
    }
    
    free(pilha);
}
```

### 5.2 Usando Loops com Estado

```c
// Busca em árvore binária sem recursão
No* buscar_iterativo(No *raiz, int valor) {
    while (raiz != NULL) {
        if (valor == raiz->data) {
            return raiz;
        } else if (valor < raiz->data) {
            raiz = raiz->esquerda;
        } else {
            raiz = raiz->direita;
        }
    }
    return NULL;
}

// Inserção em árvore binária sem recursão
No* inserir_iterativo(No *raiz, int valor) {
    No *novo_no = criar_no(valor);
    
    if (raiz == NULL) {
        return novo_no;
    }
    
    No *atual = raiz;
    No *pai = NULL;
    
    while (atual != NULL) {
        pai = atual;
        if (valor < atual->data) {
            atual = atual->esquerda;
        } else {
            atual = atual->direita;
        }
    }
    
    if (valor < pai->data) {
        pai->esquerda = novo_no;
    } else {
        pai->direita = novo_no;
    }
    
    return raiz;
}
```

## 6. Diretrizes de Decisão

### 6.1 Use Recursividade Quando:
- O problema é naturalmente recursivo (árvores, grafos)
- A profundidade é limitada e previsível
- A legibilidade é mais importante que performance
- Implementando divide-and-conquer

### 6.2 Evite Recursividade Quando:
- Há sobreposição excessiva de subproblemas
- A profundidade pode ser muito grande
- Performance é crítica
- Processando grandes volumes de dados

## 7. Exercícios Práticos

### 7.1 Conversão de Algoritmos
1. Converta busca binária recursiva para iterativa
2. Transforme quick sort recursivo em iterativo
3. Implemente merge sort sem recursão

### 7.2 Otimização
4. Compare performance de diferentes versões do Fibonacci
5. Meça uso de memória em algoritmos recursivos vs iterativos
6. Implemente memoização para otimizar recursão

### 7.3 Análise
7. Identifique casos onde recursão é inadequada
8. Calcule complexidade espacial de algoritmos recursivos
9. Proponha alternativas iterativas para problemas recursivos

## 8. Próxima Aula

Na **Aula 07**, estudaremos:
- Algoritmos de ordenação elementares
- Bubble Sort, Selection Sort, Insertion Sort
- Análise de complexidade O(n²)
- Introdução ao Merge Sort

## Bibliografia da Aula

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 2-4
- Sedgewick, R. *Algorithms*, 4ª ed., Cap. 2.1-2.2
- Knuth, D.E. *The Art of Computer Programming*, Vol. 1, Cap. 2
