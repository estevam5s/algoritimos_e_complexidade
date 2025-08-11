# Aula 08: Quicksort e Shellsort

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos de Aprendizagem

- Dominar o algoritmo Quick Sort e suas variações
- Compreender o processo de particionamento
- Analisar melhor e pior caso do Quick Sort
- Implementar e otimizar o Shell Sort
- Comparar todos os algoritmos de ordenação estudados

## 1. Quick Sort

### 1.1 Conceito e Funcionamento

O **Quick Sort** é um algoritmo de ordenação baseado na estratégia "divide and conquer" que:
1. Escolhe um elemento como **pivot**
2. **Particiona** o array em torno do pivot
3. Recursivamente ordena as partições

### 1.2 Implementação Básica

```c
#include <stdio.h>
#include <stdlib.h>

void trocar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int particionar(int arr[], int baixo, int alto) {
    int pivot = arr[alto];    // Último elemento como pivot
    int i = (baixo - 1);      // Índice do menor elemento
    
    for (int j = baixo; j <= alto - 1; j++) {
        // Se elemento atual é menor ou igual ao pivot
        if (arr[j] <= pivot) {
            i++;
            trocar(&arr[i], &arr[j]);
        }
    }
    trocar(&arr[i + 1], &arr[alto]);
    return (i + 1);
}

void quick_sort(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar(arr, baixo, alto);
        
        // Ordena elementos antes e depois da partição
        quick_sort(arr, baixo, pi - 1);
        quick_sort(arr, pi + 1, alto);
    }
}

void imprimir_array(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = 6;
    
    printf("Array original: ");
    imprimir_array(arr, n);
    
    quick_sort(arr, 0, n - 1);
    
    printf("Array ordenado: ");
    imprimir_array(arr, n);
    
    return 0;
}
```

### 1.3 Variações de Particionamento

#### 1.3.1 Particionamento de Lomuto (implementado acima)

#### 1.3.2 Particionamento de Hoare

```c
int particionar_hoare(int arr[], int baixo, int alto) {
    int pivot = arr[baixo];
    int i = baixo - 1;
    int j = alto + 1;
    
    while (1) {
        // Encontra elemento >= pivot da esquerda
        do {
            i++;
        } while (arr[i] < pivot);
        
        // Encontra elemento <= pivot da direita
        do {
            j--;
        } while (arr[j] > pivot);
        
        // Se índices se cruzaram, particionamento está completo
        if (i >= j) {
            return j;
        }
        
        trocar(&arr[i], &arr[j]);
    }
}

void quick_sort_hoare(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar_hoare(arr, baixo, alto);
        
        quick_sort_hoare(arr, baixo, pi);
        quick_sort_hoare(arr, pi + 1, alto);
    }
}
```

### 1.4 Escolha do Pivot

#### 1.4.1 Pivot Aleatório

```c
#include <time.h>

int particionar_aleatorio(int arr[], int baixo, int alto) {
    srand(time(NULL));
    int indice_aleatorio = baixo + rand() % (alto - baixo + 1);
    trocar(&arr[indice_aleatorio], &arr[alto]);
    return particionar(arr, baixo, alto);
}

void quick_sort_aleatorio(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar_aleatorio(arr, baixo, alto);
        
        quick_sort_aleatorio(arr, baixo, pi - 1);
        quick_sort_aleatorio(arr, pi + 1, alto);
    }
}
```

#### 1.4.2 Mediana de Três

```c
int mediana_de_tres(int arr[], int baixo, int alto) {
    int meio = baixo + (alto - baixo) / 2;
    
    if (arr[meio] < arr[baixo]) {
        trocar(&arr[meio], &arr[baixo]);
    }
    if (arr[alto] < arr[baixo]) {
        trocar(&arr[alto], &arr[baixo]);
    }
    if (arr[alto] < arr[meio]) {
        trocar(&arr[alto], &arr[meio]);
    }
    
    // Coloca mediana no final
    trocar(&arr[meio], &arr[alto]);
    return alto;
}

int particionar_mediana(int arr[], int baixo, int alto) {
    mediana_de_tres(arr, baixo, alto);
    return particionar(arr, baixo, alto);
}

void quick_sort_mediana(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar_mediana(arr, baixo, alto);
        
        quick_sort_mediana(arr, baixo, pi - 1);
        quick_sort_mediana(arr, pi + 1, alto);
    }
}
```

### 1.5 Quick Sort Iterativo

```c
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

void empilhar(Pilha *p, int item) {
    if (p->topo < p->capacidade - 1) {
        p->dados[++p->topo] = item;
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

void quick_sort_iterativo(int arr[], int baixo, int alto) {
    Pilha *pilha = criar_pilha(alto - baixo + 1);
    
    empilhar(pilha, baixo);
    empilhar(pilha, alto);
    
    while (!esta_vazia(pilha)) {
        alto = desempilhar(pilha);
        baixo = desempilhar(pilha);
        
        int pi = particionar(arr, baixo, alto);
        
        // Se há elementos à esquerda do pivot, empilha
        if (pi - 1 > baixo) {
            empilhar(pilha, baixo);
            empilhar(pilha, pi - 1);
        }
        
        // Se há elementos à direita do pivot, empilha
        if (pi + 1 < alto) {
            empilhar(pilha, pi + 1);
            empilhar(pilha, alto);
        }
    }
    
    free(pilha->dados);
    free(pilha);
}
```

## 2. Análise do Quick Sort

### 2.1 Complexidade Temporal

**Melhor Caso:** O(n log n)
- Pivot sempre divide array pela metade
- Recorrência: T(n) = 2T(n/2) + O(n)

**Pior Caso:** O(n²)
- Pivot sempre é o menor ou maior elemento
- Recorrência: T(n) = T(n-1) + O(n)

**Caso Médio:** O(n log n)
- Análise probabilística mostra comportamento logarítmico

### 2.2 Complexidade Espacial

- **Melhor/Médio:** O(log n) - pilha de recursão
- **Pior caso:** O(n) - array já ordenado

### 2.3 Demonstração da Análise

```c
#include <stdio.h>
#include <time.h>

int comparacoes = 0;

int particionar_com_contador(int arr[], int baixo, int alto) {
    int pivot = arr[alto];
    int i = (baixo - 1);
    
    for (int j = baixo; j <= alto - 1; j++) {
        comparacoes++;
        if (arr[j] <= pivot) {
            i++;
            trocar(&arr[i], &arr[j]);
        }
    }
    trocar(&arr[i + 1], &arr[alto]);
    return (i + 1);
}

void quick_sort_analise(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar_com_contador(arr, baixo, alto);
        quick_sort_analise(arr, baixo, pi - 1);
        quick_sort_analise(arr, pi + 1, alto);
    }
}

void analisar_quicksort(int *arr, int n, char *tipo) {
    comparacoes = 0;
    clock_t inicio = clock();
    
    quick_sort_analise(arr, 0, n - 1);
    
    clock_t fim = clock();
    double tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    
    printf("%s: %d comparações, %.6f segundos\n", tipo, comparacoes, tempo);
}

int main() {
    int n = 1000;
    
    // Array já ordenado (pior caso)
    int *arr_ordenado = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) arr_ordenado[i] = i;
    
    // Array aleatório (caso médio)
    int *arr_aleatorio = malloc(n * sizeof(int));
    srand(time(NULL));
    for (int i = 0; i < n; i++) arr_aleatorio[i] = rand() % 1000;
    
    // Array reverso (pior caso)
    int *arr_reverso = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) arr_reverso[i] = n - i;
    
    printf("Análise Quick Sort para %d elementos:\n", n);
    analisar_quicksort(arr_ordenado, n, "Array ordenado");
    analisar_quicksort(arr_aleatorio, n, "Array aleatório");
    analisar_quicksort(arr_reverso, n, "Array reverso");
    
    free(arr_ordenado);
    free(arr_aleatorio);
    free(arr_reverso);
    
    return 0;
}
```

## 3. Shell Sort

### 3.1 Conceito

O **Shell Sort** é uma generalização do Insertion Sort que:
- Compara elementos distantes por um "gap"
- Reduz o gap gradualmente
- Termina com gap = 1 (Insertion Sort normal)

### 3.2 Implementação Básica

```c
#include <stdio.h>

void shell_sort(int arr[], int n) {
    // Inicia com gap = n/2, reduz gap pela metade a cada iteração
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Faz insertion sort para elementos com gap atual
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            // Desloca elementos que estão gap posições antes
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}

void imprimir_passo(int arr[], int n, int gap) {
    printf("Gap %d: ", gap);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void shell_sort_detalhado(int arr[], int n) {
    printf("Array inicial: ");
    imprimir_passo(arr, n, 0);
    
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
        
        imprimir_passo(arr, n, gap);
    }
}

int main() {
    int arr[] = {12, 34, 54, 2, 3};
    int n = 5;
    
    shell_sort_detalhado(arr, n);
    
    return 0;
}
```

### 3.3 Sequências de Gap

#### 3.3.1 Sequência de Shell (n/2, n/4, ..., 1)

```c
void shell_sort_original(int arr[], int n) {
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}
```

#### 3.3.2 Sequência de Knuth (3k+1)/2

```c
void shell_sort_knuth(int arr[], int n) {
    // Calcula gaps da sequência de Knuth
    int gaps[20];
    int num_gaps = 0;
    
    // Gera gaps: 1, 4, 13, 40, 121, ...
    int gap = 1;
    while (gap < n) {
        gaps[num_gaps++] = gap;
        gap = gap * 3 + 1;
    }
    
    // Aplica shell sort com gaps de Knuth (em ordem decrescente)
    for (int g = num_gaps - 1; g >= 0; g--) {
        gap = gaps[g];
        
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}
```

#### 3.3.3 Sequência de Sedgewick

```c
void shell_sort_sedgewick(int arr[], int n) {
    // Sequência de Sedgewick: 1, 5, 19, 41, 109, ...
    int gaps[] = {1, 5, 19, 41, 109, 209, 505, 929, 2161, 3905, 8929};
    int num_gaps = 11;
    
    // Encontra o maior gap menor que n
    int start_gap = 0;
    for (int i = 0; i < num_gaps; i++) {
        if (gaps[i] < n) {
            start_gap = i;
        } else {
            break;
        }
    }
    
    // Aplica shell sort com gaps de Sedgewick
    for (int g = start_gap; g >= 0; g--) {
        int gap = gaps[g];
        
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}
```

### 3.4 Análise do Shell Sort

**Complexidade:** Depende da sequência de gaps
- **Shell original:** O(n²)
- **Knuth:** O(n^(3/2))
- **Sedgewick:** O(n^(4/3))

## 4. Comparação Completa dos Algoritmos

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

void comparacao_completa(int tamanho) {
    printf("\n=== Comparação para %d elementos ===\n", tamanho);
    
    // Gera array aleatório
    int *arr_original = malloc(tamanho * sizeof(int));
    int *arr_teste = malloc(tamanho * sizeof(int));
    
    srand(time(NULL));
    for (int i = 0; i < tamanho; i++) {
        arr_original[i] = rand() % (tamanho * 10);
    }
    
    clock_t inicio, fim;
    double tempo;
    
    // Algorithms comparison
    struct {
        char nome[20];
        void (*funcao)(int[], int);
    } algoritmos[] = {
        {"Bubble Sort", bubble_sort_otimizado},
        {"Selection Sort", selection_sort},
        {"Insertion Sort", insertion_sort},
        {"Shell Sort", shell_sort},
        {"Shell Knuth", shell_sort_knuth}
    };
    
    int num_algoritmos = 5;
    
    for (int i = 0; i < num_algoritmos; i++) {
        memcpy(arr_teste, arr_original, tamanho * sizeof(int));
        
        inicio = clock();
        if (strcmp(algoritmos[i].nome, "Quick Sort") == 0) {
            quick_sort(arr_teste, 0, tamanho - 1);
        } else if (strcmp(algoritmos[i].nome, "Merge Sort") == 0) {
            merge_sort(arr_teste, 0, tamanho - 1);
        } else {
            algoritmos[i].funcao(arr_teste, tamanho);
        }
        fim = clock();
        
        tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
        printf("%-15s: %.6f segundos\n", algoritmos[i].nome, tempo);
    }
    
    // Quick Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    inicio = clock();
    quick_sort(arr_teste, 0, tamanho - 1);
    fim = clock();
    tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("%-15s: %.6f segundos\n", "Quick Sort", tempo);
    
    // Merge Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    inicio = clock();
    merge_sort(arr_teste, 0, tamanho - 1);
    fim = clock();
    tempo = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("%-15s: %.6f segundos\n", "Merge Sort", tempo);
    
    free(arr_original);
    free(arr_teste);
}

int main() {
    comparacao_completa(1000);
    comparacao_completa(5000);
    comparacao_completa(10000);
    
    return 0;
}
```

## 5. Resumo dos Algoritmos de Ordenação

| Algoritmo | Melhor | Médio | Pior | Espaço | Estável |
|-----------|--------|-------|------|--------|---------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Sim |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | Não |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Sim |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Sim |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | Não |
| Shell Sort | O(n log n) | O(n^(4/3)) | O(n²) | O(1) | Não |

## 6. Exercícios Práticos

### 6.1 Quick Sort
1. Implemente Quick Sort com diferentes estratégias de pivot
2. Crie versão que evita pior caso O(n²)
3. Implemente Quick Sort para arrays de strings

### 6.2 Shell Sort
4. Teste diferentes sequências de gap
5. Compare performance das variações
6. Implemente versão adaptativa

### 6.3 Análise
7. Meça performance em diferentes cenários
8. Analise comportamento com dados duplicados
9. Implemente algoritmo híbrido (Quick + Insertion)

## 7. Próxima Aula

Na **Aula 09**, estudaremos:
- Conceitos básicos de árvores binárias
- Árvores binárias de busca (BST)
- Operações fundamentais: inserção, busca e remoção
- Propriedades e invariantes de BST

## Bibliografia da Aula

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 7
- Sedgewick, R. *Algorithms*, 4ª ed., Cap. 2.3
- Knuth, D.E. *The Art of Computer Programming*, Vol. 3, Cap. 5
