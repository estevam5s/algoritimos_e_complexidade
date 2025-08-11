# Lista de Exercícios 01: Análise de Complexidade

**Professor:** Vagner Cordeiro  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Data de Entrega:** 25 de agosto de 2025  
**Valor:** 2,0 pontos  

## 📋 Instruções Gerais

1. **Implementar** todos os algoritmos em **C** e **Python**
2. **Analisar** a complexidade de tempo e espaço de cada algoritmo
3. **Testar** com diferentes tamanhos de entrada
4. **Documentar** todo o processo no relatório
5. **Entregar** até a data limite no formato especificado

## 🎯 Objetivos

- Aplicar conceitos de análise de complexidade
- Praticar implementação em C e Python
- Desenvolver habilidades de análise algorítmica
- Comparar teoria com resultados práticos

## 📝 Exercícios

### Exercício 1: Busca do Elemento Máximo (1,0 ponto)

**Problema**: Implementar um algoritmo que encontre o maior elemento em um array de inteiros.

#### Requisitos:
- Implementar em C e Python
- Analisar complexidade de tempo e espaço
- Testar com arrays de tamanhos: 10, 100, 1000, 10000

#### Código Base (C):
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Implementar esta função
int encontrar_maximo(int arr[], int n) {
    // SEU CÓDIGO AQUI
}

// Função para medir tempo de execução
double medir_tempo(int arr[], int n) {
    clock_t inicio = clock();
    int max = encontrar_maximo(arr, n);
    clock_t fim = clock();
    return ((double)(fim - inicio)) / CLOCKS_PER_SEC;
}

int main() {
    // Testar com diferentes tamanhos
    int tamanhos[] = {10, 100, 1000, 10000};
    int num_testes = 4;
    
    for (int i = 0; i < num_testes; i++) {
        int n = tamanhos[i];
        int* arr = malloc(n * sizeof(int));
        
        // Preencher array com valores aleatórios
        for (int j = 0; j < n; j++) {
            arr[j] = rand() % 1000;
        }
        
        double tempo = medir_tempo(arr, n);
        printf("Tamanho: %d, Tempo: %f segundos\n", n, tempo);
        
        free(arr);
    }
    
    return 0;
}
```

#### Código Base (Python):
```python
import time
import random

def encontrar_maximo(lista):
    """
    Encontra o maior elemento em uma lista
    
    Args:
        lista: Lista de inteiros
        
    Returns:
        int: Maior elemento da lista
    """
    # SEU CÓDIGO AQUI
    pass

def medir_tempo(lista):
    """Mede o tempo de execução do algoritmo"""
    inicio = time.time()
    maximo = encontrar_maximo(lista)
    fim = time.time()
    return fim - inicio

def main():
    # Testar com diferentes tamanhos
    tamanhos = [10, 100, 1000, 10000]
    
    for n in tamanhos:
        # Criar lista com valores aleatórios
        lista = [random.randint(0, 999) for _ in range(n)]
        
        tempo = medir_tempo(lista)
        print(f"Tamanho: {n}, Tempo: {tempo:.6f} segundos")

if __name__ == "__main__":
    main()
```

#### Questões para Responder:
1. Qual a complexidade de tempo do seu algoritmo?
2. Qual a complexidade de espaço?
3. Como o tempo de execução varia com o tamanho da entrada?
4. O algoritmo tem diferentes complexidades para melhor/pior caso?

---

### Exercício 2: Verificação de Array Ordenado (1,5 pontos)

**Problema**: Implementar um algoritmo que verifique se um array está ordenado em ordem crescente.

#### Requisitos:
- Implementar versão iterativa e recursiva
- Comparar complexidade das duas versões
- Testar com arrays ordenados, desordenados e parcialmente ordenados

#### Código Base (C):
```c
#include <stdio.h>
#include <stdbool.h>

// Versão iterativa
bool esta_ordenado_iterativo(int arr[], int n) {
    // SEU CÓDIGO AQUI
}

// Versão recursiva
bool esta_ordenado_recursivo(int arr[], int n, int index) {
    // SEU CÓDIGO AQUI
}

// Função wrapper para versão recursiva
bool esta_ordenado_rec(int arr[], int n) {
    return esta_ordenado_recursivo(arr, n, 0);
}

int main() {
    // Casos de teste
    int arr1[] = {1, 2, 3, 4, 5};        // Ordenado
    int arr2[] = {5, 4, 3, 2, 1};        // Desordenado
    int arr3[] = {1, 2, 5, 3, 4};        // Parcialmente ordenado
    
    printf("Array 1 (iterativo): %s\n", 
           esta_ordenado_iterativo(arr1, 5) ? "Ordenado" : "Desordenado");
    printf("Array 1 (recursivo): %s\n", 
           esta_ordenado_rec(arr1, 5) ? "Ordenado" : "Desordenado");
           
    // Continuar testes...
    
    return 0;
}
```

#### Código Base (Python):
```python
def esta_ordenado_iterativo(lista):
    """
    Verifica se a lista está ordenada (versão iterativa)
    
    Args:
        lista: Lista de inteiros
        
    Returns:
        bool: True se ordenada, False caso contrário
    """
    # SEU CÓDIGO AQUI
    pass

def esta_ordenado_recursivo(lista, index=0):
    """
    Verifica se a lista está ordenada (versão recursiva)
    
    Args:
        lista: Lista de inteiros
        index: Índice atual (para recursão)
        
    Returns:
        bool: True se ordenada, False caso contrário
    """
    # SEU CÓDIGO AQUI
    pass

def main():
    # Casos de teste
    testes = [
        [1, 2, 3, 4, 5],        # Ordenado
        [5, 4, 3, 2, 1],        # Desordenado
        [1, 2, 5, 3, 4],        # Parcialmente ordenado
        [1],                    # Um elemento
        [],                     # Lista vazia
        [1, 1, 1, 1]           # Elementos iguais
    ]
    
    for i, teste in enumerate(testes):
        print(f"Teste {i+1}: {teste}")
        print(f"  Iterativo: {esta_ordenado_iterativo(teste)}")
        print(f"  Recursivo: {esta_ordenado_recursivo(teste)}")
        print()

if __name__ == "__main__":
    main()
```

#### Questões para Responder:
1. Compare a complexidade de tempo das versões iterativa e recursiva
2. Compare a complexidade de espaço das duas versões
3. Qual versão é mais eficiente e por quê?
4. Como cada versão se comporta no melhor e pior caso?

---

### Exercício 3: Contagem de Elementos Únicos (2,0 pontos)

**Problema**: Implementar um algoritmo que conte quantos elementos únicos existem em um array.

#### Requisitos:
- Implementar pelo menos duas abordagens diferentes
- Uma abordagem deve ter complexidade O(n²)
- Outra abordagem deve usar estrutura auxiliar
- Comparar as complexidades e tempos de execução

#### Questões Teóricas:
1. **Abordagem 1 (O(n²))**: Para cada elemento, contar quantas vezes aparece
2. **Abordagem 2**: Usar array auxiliar ou estrutura de dados apropriada

#### Código Base (C):
```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Abordagem 1: O(n²)
int contar_unicos_v1(int arr[], int n) {
    // SEU CÓDIGO AQUI
}

// Abordagem 2: Com estrutura auxiliar
int contar_unicos_v2(int arr[], int n) {
    // SEU CÓDIGO AQUI
    // Dica: Pode usar array auxiliar para marcar elementos já vistos
}

int main() {
    int arr[] = {1, 2, 3, 2, 1, 4, 5, 4, 6};
    int n = 9;
    
    printf("Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    
    printf("Elementos únicos (v1): %d\n", contar_unicos_v1(arr, n));
    printf("Elementos únicos (v2): %d\n", contar_unicos_v2(arr, n));
    
    return 0;
}
```

#### Código Base (Python):
```python
def contar_unicos_v1(lista):
    """
    Conta elementos únicos - Abordagem O(n²)
    
    Args:
        lista: Lista de inteiros
        
    Returns:
        int: Número de elementos únicos
    """
    # SEU CÓDIGO AQUI
    pass

def contar_unicos_v2(lista):
    """
    Conta elementos únicos - Abordagem com estrutura auxiliar
    
    Args:
        lista: Lista de inteiros
        
    Returns:
        int: Número de elementos únicos
    """
    # SEU CÓDIGO AQUI
    pass

def contar_unicos_v3(lista):
    """
    Conta elementos únicos - Usando set (Python)
    
    Args:
        lista: Lista de inteiros
        
    Returns:
        int: Número de elementos únicos
    """
    # SEU CÓDIGO AQUI
    pass

def main():
    testes = [
        [1, 2, 3, 2, 1, 4, 5, 4, 6],
        [1, 1, 1, 1],
        [1, 2, 3, 4, 5],
        [],
        [42]
    ]
    
    for i, teste in enumerate(testes):
        print(f"Teste {i+1}: {teste}")
        print(f"  V1 (O(n²)): {contar_unicos_v1(teste)}")
        print(f"  V2 (auxiliar): {contar_unicos_v2(teste)}")
        print(f"  V3 (set): {contar_unicos_v3(teste)}")
        print()

if __name__ == "__main__":
    main()
```

#### Questões para Responder:
1. Analise a complexidade de cada abordagem
2. Qual abordagem é mais eficiente para arrays grandes?
3. Existe trade-off entre tempo e espaço?
4. Como as abordagens se comportam com dados duplicados?

---

### Exercício 4: Análise Teórica (1,5 pontos)

**Problema**: Analisar a complexidade dos seguintes códigos sem implementá-los.

#### Código A:
```c
void algoritmo_a(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            for (int k = 0; k < j; k++) {
                printf("(%d, %d, %d)\n", i, j, k);
            }
        }
    }
}
```

#### Código B:
```python
def algoritmo_b(n):
    i = 1
    while i < n:
        j = 0
        while j < i:
            print(f"i={i}, j={j}")
            j += 1
        i *= 2
```

#### Código C:
```c
int algoritmo_c(int arr[], int n) {
    if (n <= 1) return 0;
    
    int meio = n / 2;
    int custo = algoritmo_c(arr, meio) + algoritmo_c(arr + meio, n - meio);
    
    for (int i = 0; i < n; i++) {
        // Operação O(1)
    }
    
    return custo + n;
}
```

#### Questões:
1. Determine a complexidade de tempo de cada algoritmo
2. Justifique sua resposta com cálculos detalhados
3. Identifique padrões de crescimento
4. Para o Código C, use o Teorema Mestre se aplicável

---

## 📊 Formato do Relatório

Entregar um único arquivo PDF com a seguinte estrutura:

```
RELATÓRIO - LISTA DE EXERCÍCIOS 01
Nome: [Seu Nome Completo]
Matrícula: [Sua Matrícula]
Data: [Data de Entrega]

=== EXERCÍCIO 1: BUSCA DO MÁXIMO ===

1.1 Implementação em C:
[Cole seu código C aqui]

1.2 Implementação em Python:
[Cole seu código Python aqui]

1.3 Análise de Complexidade:
- Complexidade de Tempo: O(?)
- Complexidade de Espaço: O(?)
- Justificativa: [Sua explicação detalhada]

1.4 Resultados Experimentais:
[Tabela com tempos de execução]

1.5 Conclusões:
[Suas observações]

=== EXERCÍCIO 2: VERIFICAÇÃO DE ORDENAÇÃO ===
[Mesmo formato...]

=== EXERCÍCIO 3: CONTAGEM DE ÚNICOS ===
[Mesmo formato...]

=== EXERCÍCIO 4: ANÁLISE TEÓRICA ===
[Suas análises...]

=== CONCLUSÕES GERAIS ===
[Resumo do que aprendeu]
```

## 🎯 Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| **Corretude** | 30% | Algoritmos funcionam corretamente |
| **Complexidade** | 25% | Análise correta da complexidade |
| **Implementação** | 20% | Qualidade do código (C e Python) |
| **Experimentação** | 15% | Testes adequados e resultados |
| **Documentação** | 10% | Relatório claro e bem estruturado |

## 📚 Dicas para Sucesso

### Implementação:
- **Teste** seus algoritmos com casos simples primeiro
- **Verifique** casos extremos (array vazio, um elemento)
- **Documente** seu código com comentários claros

### Análise:
- **Conte** operações fundamentais (comparações, atribuições)
- **Considere** melhor, pior e caso médio
- **Use** a notação assintótica corretamente

### Experimentação:
- **Meça** tempos de execução múltiplas vezes
- **Calcule** médias para reduzir variação
- **Compare** resultados com análise teórica

## 🆘 Suporte

- **Horário de atendimento**: Terças 14h-16h
- **Email**: [email do professor]
- **Fórum da disciplina**: [link]

## 📅 Cronograma

- **Lançamento**: 11 de agosto de 2025
- **Dúvidas**: Até 22 de agosto de 2025
- **Entrega**: 25 de agosto de 2025, 23:59h
- **Feedback**: 01 de setembro de 2025

---

**Boa sorte e bons estudos!**

*Prof. Vagner Cordeiro - ARA0174*
