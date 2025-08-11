/*
 * Exemplos de Algoritmos com Diferentes Complexidades
 * Professor: Vagner Cordeiro
 * Disciplina: ARA0174 - Algoritmos e Complexidade
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// =================================
// ALGORITMOS O(1) - CONSTANTE
// =================================

// Acesso direto a elemento
int obter_primeiro(int arr[]) {
    return arr[0];  // Sempre 1 operação
}

// Operação aritmética simples
int soma_dois_numeros(int a, int b) {
    return a + b;   // Sempre 1 operação
}

// =================================
// ALGORITMOS O(n) - LINEAR
// =================================

// Busca linear
int busca_linear(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

// Soma de array
int soma_array(int arr[], int n) {
    int soma = 0;
    for (int i = 0; i < n; i++) {
        soma += arr[i];
    }
    return soma;
}

// Impressão de array
void imprimir_array(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// =================================
// ALGORITMOS O(log n) - LOGARÍTMICO
// =================================

// Busca binária (array deve estar ordenado)
int busca_binaria(int arr[], int esquerda, int direita, int x) {
    if (direita >= esquerda) {
        int meio = esquerda + (direita - esquerda) / 2;
        
        if (arr[meio] == x)
            return meio;
        
        if (arr[meio] > x)
            return busca_binaria(arr, esquerda, meio - 1, x);
        
        return busca_binaria(arr, meio + 1, direita, x);
    }
    return -1;
}

// Busca binária iterativa
int busca_binaria_iterativa(int arr[], int n, int x) {
    int esquerda = 0, direita = n - 1;
    
    while (esquerda <= direita) {
        int meio = esquerda + (direita - esquerda) / 2;
        
        if (arr[meio] == x)
            return meio;
        
        if (arr[meio] < x)
            esquerda = meio + 1;
        else
            direita = meio - 1;
    }
    return -1;
}

// =================================
// ALGORITMOS O(n²) - QUADRÁTICO
// =================================

// Bubble Sort
void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Troca
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// Selection Sort
void selection_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Troca
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Verificar se existem elementos duplicados
int tem_duplicatas(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                return 1;  // Tem duplicata
            }
        }
    }
    return 0;  // Não tem duplicata
}

// =================================
// ALGORITMOS O(n log n) - LINEARÍTMICO
// =================================

// Merge Sort - Função auxiliar para merge
void merge(int arr[], int esquerda, int meio, int direita) {
    int n1 = meio - esquerda + 1;
    int n2 = direita - meio;
    
    // Arrays temporários
    int* L = malloc(n1 * sizeof(int));
    int* R = malloc(n2 * sizeof(int));
    
    // Copiar dados para arrays temporários
    for (int i = 0; i < n1; i++)
        L[i] = arr[esquerda + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[meio + 1 + j];
    
    // Merge dos arrays temporários de volta em arr[]
    int i = 0, j = 0, k = esquerda;
    
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
    
    // Copiar elementos restantes
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

// Merge Sort principal
void merge_sort(int arr[], int esquerda, int direita) {
    if (esquerda < direita) {
        int meio = esquerda + (direita - esquerda) / 2;
        
        merge_sort(arr, esquerda, meio);
        merge_sort(arr, meio + 1, direita);
        
        merge(arr, esquerda, meio, direita);
    }
}

// =================================
// ALGORITMOS O(2^n) - EXPONENCIAL
// =================================

// Fibonacci recursivo (ineficiente)
int fibonacci_recursivo(int n) {
    if (n <= 1)
        return n;
    return fibonacci_recursivo(n-1) + fibonacci_recursivo(n-2);
}

// Torre de Hanói
void torre_hanoi(int n, char origem, char destino, char auxiliar) {
    if (n == 1) {
        printf("Mover disco 1 de %c para %c\n", origem, destino);
        return;
    }
    torre_hanoi(n-1, origem, auxiliar, destino);
    printf("Mover disco %d de %c para %c\n", n, origem, destino);
    torre_hanoi(n-1, auxiliar, destino, origem);
}

// =================================
// FUNÇÕES DE TESTE E MEDIÇÃO
// =================================

// Função para gerar array aleatório
void gerar_array_aleatorio(int arr[], int n, int max_valor) {
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % max_valor;
    }
}

// Função para gerar array ordenado
void gerar_array_ordenado(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
}

// Função para copiar array
void copiar_array(int origem[], int destino[], int n) {
    for (int i = 0; i < n; i++) {
        destino[i] = origem[i];
    }
}

// Medir tempo de execução
double medir_tempo_ordenacao(void (*algoritmo)(int[], int), int arr[], int n) {
    clock_t inicio = clock();
    algoritmo(arr, n);
    clock_t fim = clock();
    return ((double)(fim - inicio)) / CLOCKS_PER_SEC;
}

// =================================
// FUNÇÃO PRINCIPAL E TESTES
// =================================

int main() {
    printf("=== EXEMPLOS DE COMPLEXIDADE DE ALGORITMOS ===\n\n");
    
    // Teste 1: Algoritmos O(1)
    printf("1. ALGORITMOS O(1) - CONSTANTE\n");
    int arr_teste[] = {5, 2, 8, 1, 9, 3};
    printf("Primeiro elemento: %d\n", obter_primeiro(arr_teste));
    printf("Soma 5 + 3: %d\n", soma_dois_numeros(5, 3));
    printf("\n");
    
    // Teste 2: Algoritmos O(n)
    printf("2. ALGORITMOS O(n) - LINEAR\n");
    int n = 6;
    printf("Array: ");
    imprimir_array(arr_teste, n);
    printf("Busca pelo 8: posição %d\n", busca_linear(arr_teste, n, 8));
    printf("Soma do array: %d\n", soma_array(arr_teste, n));
    printf("\n");
    
    // Teste 3: Algoritmos O(log n)
    printf("3. ALGORITMOS O(log n) - LOGARÍTMICO\n");
    int arr_ordenado[] = {1, 3, 5, 7, 9, 11, 13, 15};
    int n_ord = 8;
    printf("Array ordenado: ");
    imprimir_array(arr_ordenado, n_ord);
    printf("Busca binária pelo 7: posição %d\n", 
           busca_binaria(arr_ordenado, 0, n_ord-1, 7));
    printf("Busca binária pelo 6: posição %d\n", 
           busca_binaria(arr_ordenado, 0, n_ord-1, 6));
    printf("\n");
    
    // Teste 4: Algoritmos O(n²)
    printf("4. ALGORITMOS O(n²) - QUADRÁTICO\n");
    int arr_desordenado[] = {64, 34, 25, 12, 22, 11, 90};
    int n_des = 7;
    printf("Array original: ");
    imprimir_array(arr_desordenado, n_des);
    
    // Teste Bubble Sort
    int arr_bubble[7];
    copiar_array(arr_desordenado, arr_bubble, n_des);
    bubble_sort(arr_bubble, n_des);
    printf("Após Bubble Sort: ");
    imprimir_array(arr_bubble, n_des);
    
    // Teste Selection Sort
    int arr_selection[7];
    copiar_array(arr_desordenado, arr_selection, n_des);
    selection_sort(arr_selection, n_des);
    printf("Após Selection Sort: ");
    imprimir_array(arr_selection, n_des);
    printf("\n");
    
    // Teste 5: Algoritmos O(n log n)
    printf("5. ALGORITMOS O(n log n) - LINEARÍTMICO\n");
    int arr_merge[7];
    copiar_array(arr_desordenado, arr_merge, n_des);
    printf("Array original: ");
    imprimir_array(arr_merge, n_des);
    merge_sort(arr_merge, 0, n_des-1);
    printf("Após Merge Sort: ");
    imprimir_array(arr_merge, n_des);
    printf("\n");
    
    // Teste 6: Algoritmos O(2^n)
    printf("6. ALGORITMOS O(2^n) - EXPONENCIAL\n");
    printf("Fibonacci de 10: %d\n", fibonacci_recursivo(10));
    printf("Torre de Hanói para 3 discos:\n");
    torre_hanoi(3, 'A', 'C', 'B');
    printf("\n");
    
    // Teste de Performance
    printf("7. COMPARAÇÃO DE PERFORMANCE\n");
    int tamanhos[] = {100, 500, 1000};
    int num_testes = 3;
    
    for (int i = 0; i < num_testes; i++) {
        int size = tamanhos[i];
        int* arr = malloc(size * sizeof(int));
        int* arr_copia = malloc(size * sizeof(int));
        
        gerar_array_aleatorio(arr, size, 1000);
        
        // Teste Bubble Sort
        copiar_array(arr, arr_copia, size);
        double tempo_bubble = medir_tempo_ordenacao(bubble_sort, arr_copia, size);
        
        // Teste Selection Sort
        copiar_array(arr, arr_copia, size);
        double tempo_selection = medir_tempo_ordenacao(selection_sort, arr_copia, size);
        
        printf("Tamanho %d:\n", size);
        printf("  Bubble Sort: %.6f segundos\n", tempo_bubble);
        printf("  Selection Sort: %.6f segundos\n", tempo_selection);
        
        free(arr);
        free(arr_copia);
    }
    
    return 0;
}
