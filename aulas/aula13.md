# Aula 13: Roteiro de Laboratório

## Objetivos
- Aplicar conceitos teóricos em implementações práticas
- Desenvolver habilidades de programação em C
- Analisar complexidade de algoritmos implementados
- Resolver problemas complexos usando estruturas de dados

---

## Laboratório 1: Implementação e Análise de Algoritmos de Ordenação

### Parte A: Implementação Comparativa
Implemente os seguintes algoritmos de ordenação:

```c
// Arquivo: lab_ordenacao.c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

// Bubble Sort
void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// Quick Sort
void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

// Merge Sort
void merge_sort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        merge_sort(arr, l, m);
        merge_sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int *L = malloc(n1 * sizeof(int));
    int *R = malloc(n2 * sizeof(int));
    
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    free(L);
    free(R);
}
```

### Atividades:
1. **Medição de Tempo:** Implemente função para medir tempo de execução
2. **Análise Empírica:** Compare tempos para arrays de diferentes tamanhos
3. **Diferentes Cenários:** Teste com arrays ordenados, reversos e aleatórios

---

## Laboratório 2: Árvore Binária de Busca Completa

### Implementação Completa
```c
// Arquivo: lab_bst.c
#include <stdio.h>
#include <stdlib.h>

typedef struct No {
    int data;
    struct No *esquerda, *direita;
    int altura;  // Para futuro uso em AVL
} No;

// Funções básicas implementadas anteriormente...

// Função adicional: Validar se é BST
int eh_bst(No *raiz, int min_val, int max_val) {
    if (raiz == NULL) return 1;
    
    if (raiz->data <= min_val || raiz->data >= max_val)
        return 0;
    
    return eh_bst(raiz->esquerda, min_val, raiz->data) &&
           eh_bst(raiz->direita, raiz->data, max_val);
}

// Função para encontrar k-ésimo menor elemento
void kth_smallest(No *raiz, int k, int *counter, int *result) {
    if (raiz == NULL || *counter >= k) return;
    
    kth_smallest(raiz->esquerda, k, counter, result);
    
    (*counter)++;
    if (*counter == k) {
        *result = raiz->data;
        return;
    }
    
    kth_smallest(raiz->direita, k, counter, result);
}

// Converter BST para array ordenado
void bst_to_array(No *raiz, int arr[], int *index) {
    if (raiz != NULL) {
        bst_to_array(raiz->esquerda, arr, index);
        arr[(*index)++] = raiz->data;
        bst_to_array(raiz->direita, arr, index);
    }
}
```

### Atividades:
1. **Menu Interativo:** Implemente interface para todas as operações
2. **Estatísticas:** Calcule altura, número de nós, nós folhas
3. **Visualização:** Imprima árvore em formato visual

---

## Laboratório 3: Sistema de Grafos com Algoritmos

### Sistema Completo de Grafos
```c
// Arquivo: lab_grafos.c
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Estruturas definidas anteriormente...

// Algoritmo de Dijkstra
void dijkstra(int grafo[][MAX_VERTICES], int origem, int vertices) {
    int dist[MAX_VERTICES];
    int visitado[MAX_VERTICES];
    
    for (int i = 0; i < vertices; i++) {
        dist[i] = INT_MAX;
        visitado[i] = 0;
    }
    
    dist[origem] = 0;
    
    for (int count = 0; count < vertices - 1; count++) {
        int u = encontrar_minimo_dist(dist, visitado, vertices);
        visitado[u] = 1;
        
        for (int v = 0; v < vertices; v++) {
            if (!visitado[v] && grafo[u][v] && 
                dist[u] != INT_MAX && 
                dist[u] + grafo[u][v] < dist[v]) {
                dist[v] = dist[u] + grafo[u][v];
            }
        }
    }
    
    imprimir_distancias(dist, vertices, origem);
}

// Detecção de ciclo usando DFS
int tem_ciclo_util(GrafoLista *g, int v, int *visitado, int *rec_stack) {
    visitado[v] = 1;
    rec_stack[v] = 1;
    
    NoLista *atual = g->listas[v];
    while (atual) {
        if (!visitado[atual->vertice]) {
            if (tem_ciclo_util(g, atual->vertice, visitado, rec_stack))
                return 1;
        } else if (rec_stack[atual->vertice]) {
            return 1;
        }
        atual = atual->proximo;
    }
    
    rec_stack[v] = 0;
    return 0;
}

int tem_ciclo(GrafoLista *g) {
    int *visitado = calloc(g->num_vertices, sizeof(int));
    int *rec_stack = calloc(g->num_vertices, sizeof(int));
    
    for (int i = 0; i < g->num_vertices; i++) {
        if (!visitado[i]) {
            if (tem_ciclo_util(g, i, visitado, rec_stack)) {
                free(visitado);
                free(rec_stack);
                return 1;
            }
        }
    }
    
    free(visitado);
    free(rec_stack);
    return 0;
}
```

### Atividades:
1. **Representações:** Compare matriz vs lista de adjacência
2. **Algoritmos de Busca:** Implemente e teste DFS e BFS
3. **Caminhos Mínimos:** Implemente Dijkstra e Floyd-Warshall
4. **Aplicações:** Modele problemas reais usando grafos

---

## Laboratório 4: Projeto Integrador - Sistema de Gerenciamento

### Especificação do Sistema
Desenvolva um sistema que integre múltiplas estruturas de dados:

**Sistema de Biblioteca Digital:**
- **Árvore BST:** Índice de livros por ID
- **Hash Table:** Busca rápida por título
- **Lista Ligada:** Fila de reservas
- **Grafo:** Recomendações baseadas em similaridade

### Estrutura Base
```c
// Arquivo: sistema_biblioteca.c
typedef struct Livro {
    int id;
    char titulo[100];
    char autor[100];
    int disponivel;
} Livro;

typedef struct Sistema {
    No *indice_id;          // BST para IDs
    HashTable *indice_titulo; // Hash para títulos
    Lista *fila_reservas;   // Lista de reservas
    GrafoLista *recomendacoes; // Grafo de similaridade
} Sistema;

// Operações principais
Sistema* inicializar_sistema();
void adicionar_livro(Sistema *s, Livro livro);
Livro* buscar_por_id(Sistema *s, int id);
Livro* buscar_por_titulo(Sistema *s, char *titulo);
void emprestar_livro(Sistema *s, int id, int usuario_id);
void devolver_livro(Sistema *s, int id);
void listar_recomendacoes(Sistema *s, int livro_id);
void gerar_relatorio(Sistema *s);
```

### Funcionalidades Obrigatórias:
1. **CRUD Completo:** Create, Read, Update, Delete
2. **Múltiplas Buscas:** Por ID, título, autor
3. **Sistema de Reservas:** Fila de espera
4. **Relatórios:** Estatísticas de uso
5. **Persistência:** Salvar/carregar dados

---

## Laboratório 5: Análise de Performance e Otimização

### Framework de Benchmark
```c
// Arquivo: benchmark.c
#include <time.h>
#include <sys/time.h>

typedef struct {
    char nome[50];
    double tempo_ms;
    long memoria_bytes;
} ResultadoBenchmark;

double medir_tempo(void (*funcao)(int*, int), int *dados, int tamanho) {
    struct timeval inicio, fim;
    gettimeofday(&inicio, NULL);
    
    funcao(dados, tamanho);
    
    gettimeofday(&fim, NULL);
    
    double tempo = (fim.tv_sec - inicio.tv_sec) * 1000.0;
    tempo += (fim.tv_usec - inicio.tv_usec) / 1000.0;
    
    return tempo;
}

void benchmark_ordenacao() {
    int tamanhos[] = {1000, 5000, 10000, 50000, 100000};
    int num_tamanhos = sizeof(tamanhos) / sizeof(int);
    
    printf("Tamanho\tBubble\tQuick\tMerge\tHeap\n");
    
    for (int i = 0; i < num_tamanhos; i++) {
        int *dados1 = gerar_dados_aleatorios(tamanhos[i]);
        int *dados2 = copiar_array(dados1, tamanhos[i]);
        int *dados3 = copiar_array(dados1, tamanhos[i]);
        int *dados4 = copiar_array(dados1, tamanhos[i]);
        
        double t1 = medir_tempo(bubble_sort, dados1, tamanhos[i]);
        double t2 = medir_tempo_quick(dados2, 0, tamanhos[i]-1);
        double t3 = medir_tempo_merge(dados3, 0, tamanhos[i]-1);
        double t4 = medir_tempo(heap_sort, dados4, tamanhos[i]);
        
        printf("%d\t%.2f\t%.2f\t%.2f\t%.2f\n", 
               tamanhos[i], t1, t2, t3, t4);
        
        free(dados1); free(dados2); free(dados3); free(dados4);
    }
}
```

### Atividades de Análise:
1. **Profile de Algoritmos:** Meça tempo e espaço
2. **Análise de Complexidade:** Compare teoria vs prática
3. **Otimizações:** Identifique gargalos e otimize
4. **Relatório Técnico:** Documente resultados

---

## Laboratório 6: Problemas Avançados e Competição

### Problemas Desafiadores

#### Problema 1: Merge de K Arrays Ordenados
```c
typedef struct {
    int valor;
    int array_index;
    int element_index;
} HeapNode;

int* merge_k_arrays(int **arrays, int *tamanhos, int k, int *resultado_tamanho) {
    // Implementar usando heap mínimo
    // Complexidade: O(N log k) onde N é total de elementos
}
```

#### Problema 2: Árvore de Segmentos
```c
typedef struct {
    int *tree;
    int n;
} SegmentTree;

SegmentTree* construir_seg_tree(int arr[], int n);
int query_range(SegmentTree *st, int l, int r);
void update_point(SegmentTree *st, int index, int novo_valor);
```

#### Problema 3: Sistema de Union-Find
```c
typedef struct {
    int *parent;
    int *rank;
} UnionFind;

UnionFind* criar_union_find(int n);
int find(UnionFind *uf, int x);
void union_sets(UnionFind *uf, int x, int y);
```

### Critérios de Avaliação:
- **Corretude:** Solução funciona para todos os casos de teste
- **Eficiência:** Complexidade adequada
- **Código Limpo:** Organização e comentários
- **Criatividade:** Soluções elegantes e inovadoras

---

## Entrega e Avaliação

### Estrutura de Entrega:
```
laboratorio_[numero]/
├── src/
│   ├── main.c
│   ├── estruturas.c
│   ├── algoritmos.c
│   └── utils.c
├── docs/
│   ├── relatorio.md
│   └── analise_complexidade.md
├── testes/
│   ├── dados_teste/
│   └── resultados/
└── Makefile
```

### Critérios de Avaliação:
1. **Implementação (40%):** Corretude e completude
2. **Análise (30%):** Complexidade e performance
3. **Documentação (20%):** Relatórios e comentários
4. **Criatividade (10%):** Soluções inovadoras

### Prazos:
- **Lab 1-3:** 2 semanas cada
- **Lab 4:** 3 semanas (projeto integrador)
- **Lab 5-6:** 2 semanas cada

---

## Recursos de Apoio

### Ferramentas Recomendadas:
- **Compilador:** GCC com flags de debug (-g -Wall -Wextra)
- **Debugger:** GDB para depuração
- **Profiler:** Valgrind para análise de memória
- **IDE:** Code::Blocks, Dev-C++, ou VSCode

### Bibliografia de Apoio:
- Cormen et al. - Introduction to Algorithms
- Sedgewick - Algorithms in C
- Kernighan & Ritchie - The C Programming Language

### Contato:
- **Professor:** Prof. Vagner Cordeiro
- **Email:** [email do professor]
- **Horário de Atendimento:** [horários]
