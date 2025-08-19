
/*
 * Exemplo de Algoritmo - Busca Binária
 * Professor: Vagner Cordeiro
 * Disciplina: ARA0174 - Algoritmos e Complexidade
 */

#include <stdio.h>
#include <stdlib.h>

// Busca binária recursiva
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

int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    
    int resultado = busca_binaria(arr, 0, n - 1, x);
    
    if (resultado == -1)
        printf("Elemento não encontrado\n");
    else
        printf("Elemento encontrado no índice %d\n", resultado);
    
    return 0;
}
