# Aula 07: Análise Ordenação Elementar e Mergesort

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos de Aprendizagem

- Compreender algoritmos de ordenação elementares
- Analisar complexidade dos algoritmos O(n²)
- Implementar e otimizar Bubble, Selection e Insertion Sort
- Dominar o algoritmo Merge Sort e divide-and-conquer

## 1. Algoritmos de Ordenação Elementares

### 1.1 Bubble Sort

**Conceito:** Compara elementos adjacentes e os troca se estiverem fora de ordem.

```c
#include <stdio.h>

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca elementos
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Versão otimizada com flag
void bubble_sort_otimizado(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int trocou = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                trocou = 1;
            }
        }
        // Se não houve troca, array já está ordenado
        if (trocou == 0) {
            break;
        }
    }
}

void imprimir_array(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    
    printf("Array original: ");
    imprimir_array(arr, n);
    
    bubble_sort(arr, n);
    
    printf("Array ordenado: ");
    imprimir_array(arr, n);
    
    return 0;
}
```

**Análise de Complexidade:**
- **Melhor caso:** O(n) - array já ordenado (versão otimizada)
- **Pior caso:** O(n²) - array em ordem decrescente
- **Caso médio:** O(n²)
- **Espaço:** O(1)

### 1.2 Selection Sort

**Conceito:** Encontra o menor elemento e o coloca na primeira posição, depois o segundo menor, e assim por diante.

```c
#include <stdio.h>

void selection_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        
        // Encontra o menor elemento no array não ordenado
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Troca o menor elemento encontrado com o primeiro elemento
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

// Versão que conta comparações e trocas
void selection_sort_analise(int arr[], int n, int *comparacoes, int *trocas) {
    *comparacoes = 0;
    *trocas = 0;
    
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        
        for (int j = i + 1; j < n; j++) {
            (*comparacoes)++;
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
            (*trocas)++;
        }
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11, 90};
    int n = 6;
    int comparacoes, trocas;
    
    printf("Array original: ");
    imprimir_array(arr, n);
    
    selection_sort_analise(arr, n, &comparacoes, &trocas);
    
    printf("Array ordenado: ");
    imprimir_array(arr, n);
    printf("Comparações: %d, Trocas: %d\n", comparacoes, trocas);
    
    return 0;
}
```

**Análise de Complexidade:**
- **Todos os casos:** O(n²)
- **Espaço:** O(1)
- **Vantagem:** Sempre faz O(n) trocas

### 1.3 Insertion Sort

**Conceito:** Constrói o array ordenado um elemento por vez, inserindo cada elemento na posição correta.

```c
#include <stdio.h>

void insertion_sort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int chave = arr[i];
        int j = i - 1;
        
        // Move elementos maiores que a chave para frente
        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = chave;
    }
}

// Versão com busca binária para otimizar busca da posição
int busca_binaria_posicao(int arr[], int val, int inicio, int fim) {
    if (inicio == fim) {
        return (arr[inicio] > val) ? inicio : inicio + 1;
    }
    
    if (inicio > fim) {
        return inicio;
    }
    
    int meio = (inicio + fim) / 2;
    
    if (arr[meio] < val) {
        return busca_binaria_posicao(arr, val, meio + 1, fim);
    } else if (arr[meio] > val) {
        return busca_binaria_posicao(arr, val, inicio, meio - 1);
    } else {
        return meio;
    }
}

void insertion_sort_binario(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int chave = arr[i];
        int j = busca_binaria_posicao(arr, chave, 0, i - 1);
        
        // Move elementos para fazer espaço
        for (int k = i - 1; k >= j; k--) {
            arr[k + 1] = arr[k];
        }
        arr[j] = chave;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = 5;
    
    printf("Array original: ");
    imprimir_array(arr, n);
    
    insertion_sort(arr, n);
    
    printf("Array ordenado: ");
    imprimir_array(arr, n);
    
    return 0;
}
```

**Análise de Complexidade:**
- **Melhor caso:** O(n) - array já ordenado
- **Pior caso:** O(n²) - array em ordem decrescente
- **Caso médio:** O(n²)
- **Espaço:** O(1)

## 2. Merge Sort - Divide and Conquer

### 2.1 Conceito de Divide and Conquer

1. **Divide:** Divide o problema em subproblemas menores
2. **Conquer:** Resolve os subproblemas recursivamente
3. **Combine:** Combina as soluções dos subproblemas

### 2.2 Implementação do Merge Sort

```c
#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Arrays temporários
    int *L = (int*)malloc(n1 * sizeof(int));
    int *R = (int*)malloc(n2 * sizeof(int));
    
    // Copia dados para arrays temporários
    for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    // Merge dos arrays temporários de volta em arr[left..right]
    int i = 0, j = 0, k = left;
    
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
    
    // Copia elementos restantes de L[], se houver
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copia elementos restantes de R[], se houver
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    free(L);
    free(R);
}

void merge_sort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Ordena primeira e segunda metades
        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);
        
        // Merge das metades ordenadas
        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = 7;
    
    printf("Array original: ");
    imprimir_array(arr, n);
    
    merge_sort(arr, 0, n - 1);
    
    printf("Array ordenado: ");
    imprimir_array(arr, n);
    
    return 0;
}
```

### 2.3 Análise do Merge Sort

**Recorrência:** T(n) = 2T(n/2) + O(n)

Usando o Método Mestre:
- a = 2, b = 2, f(n) = O(n)
- n^(log_b a) = n^(log_2 2) = n
- Como f(n) = Θ(n), temos caso 2 do Método Mestre
- **Resultado:** T(n) = O(n log n)

**Análise de Complexidade:**
- **Todos os casos:** O(n log n)
- **Espaço:** O(n)

### 2.4 Merge Sort Iterativo

```c
#include <stdio.h>
#include <stdlib.h>

void merge_iterativo(int arr[], int left, int mid, int right) {
    // Mesma implementação da função merge anterior
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int *L = (int*)malloc(n1 * sizeof(int));
    int *R = (int*)malloc(n2 * sizeof(int));
    
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
    
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }
    
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
    
    free(L);
    free(R);
}

void merge_sort_iterativo(int arr[], int n) {
    // Tamanho atual dos subvetores a serem mesclados
    for (int tamanho_atual = 1; tamanho_atual <= n - 1; tamanho_atual = 2 * tamanho_atual) {
        // Escolhe ponto de partida do lado esquerdo
        for (int left = 0; left < n - 1; left += 2 * tamanho_atual) {
            int mid = left + tamanho_atual - 1;
            int right = (left + 2 * tamanho_atual - 1 < n - 1) ? 
                        left + 2 * tamanho_atual - 1 : n - 1;
            
            if (mid < right) {
                merge_iterativo(arr, left, mid, right);
            }
        }
    }
}
```

## 3. Comparação dos Algoritmos

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

void comparar_algoritmos(int tamanho) {
    int *arr_original = (int*)malloc(tamanho * sizeof(int));
    int *arr_teste = (int*)malloc(tamanho * sizeof(int));
    
    // Gera array aleatório
    srand(time(NULL));
    for (int i = 0; i < tamanho; i++) {
        arr_original[i] = rand() % 1000;
    }
    
    printf("\n=== Comparação para %d elementos ===\n", tamanho);
    
    // Bubble Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    clock_t inicio = clock();
    bubble_sort_otimizado(arr_teste, tamanho);
    clock_t fim = clock();
    double tempo_bubble = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Bubble Sort: %.6f segundos\n", tempo_bubble);
    
    // Selection Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    inicio = clock();
    selection_sort(arr_teste, tamanho);
    fim = clock();
    double tempo_selection = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Selection Sort: %.6f segundos\n", tempo_selection);
    
    // Insertion Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    inicio = clock();
    insertion_sort(arr_teste, tamanho);
    fim = clock();
    double tempo_insertion = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Insertion Sort: %.6f segundos\n", tempo_insertion);
    
    // Merge Sort
    memcpy(arr_teste, arr_original, tamanho * sizeof(int));
    inicio = clock();
    merge_sort(arr_teste, 0, tamanho - 1);
    fim = clock();
    double tempo_merge = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Merge Sort: %.6f segundos\n", tempo_merge);
    
    free(arr_original);
    free(arr_teste);
}

int main() {
    comparar_algoritmos(1000);
    comparar_algoritmos(5000);
    comparar_algoritmos(10000);
    
    return 0;
}
```

## 4. Quando Usar Cada Algoritmo

### 4.1 Bubble Sort
- **Use quando:** Arrays muito pequenos (< 10 elementos)
- **Vantagem:** Simples de implementar
- **Desvantagem:** Muito ineficiente para arrays grandes

### 4.2 Selection Sort
- **Use quando:** Número de trocas deve ser minimizado
- **Vantagem:** Sempre faz O(n) trocas
- **Desvantagem:** Sempre O(n²), mesmo para arrays ordenados

### 4.3 Insertion Sort
- **Use quando:** Arrays pequenos ou quase ordenados
- **Vantagem:** O(n) para arrays ordenados, estável
- **Desvantagem:** O(n²) para arrays grandes desordenados

### 4.4 Merge Sort
- **Use quando:** Performance consistente é necessária
- **Vantagem:** Sempre O(n log n), estável
- **Desvantagem:** Usa O(n) espaço extra

## 5. Exercícios Práticos

### 5.1 Implementação
1. Implemente versões recursivas dos algoritmos elementares
2. Crie versões que ordenem em ordem decrescente
3. Implemente contadores de comparações e trocas

### 5.2 Otimização
4. Otimize Insertion Sort para arrays quase ordenados
5. Implemente Merge Sort in-place
6. Crie versão híbrida (Merge + Insertion para arrays pequenos)

### 5.3 Análise
7. Meça performance com diferentes tipos de arrays
8. Analise comportamento com arrays já ordenados
9. Compare uso de memória dos algoritmos

## 6. Próxima Aula

Na **Aula 08**, estudaremos:
- Algoritmo Quick Sort e particionamento
- Análise de melhor e pior caso do Quick Sort
- Shell Sort e suas variações
- Comparação completa de algoritmos de ordenação

## Bibliografia da Aula

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 2
- Sedgewick, R. *Algorithms*, 4ª ed., Cap. 2.1-2.2
- Knuth, D.E. *The Art of Computer Programming*, Vol. 3, Cap. 5
