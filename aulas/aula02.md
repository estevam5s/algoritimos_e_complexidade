# Aula 02: Notação Big O e Análise Assintótica

**Professor:** Vagner Cordeiro  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Duração:** 2 horas  
**Data:** 18 de agosto de 2025  

## 🎯 Objetivos da Aula

Ao final desta aula, o estudante será capaz de:

1. **Compreender** a notação Big O, Omega e Theta
2. **Aplicar** análise assintótica em algoritmos
3. **Calcular** a complexidade de algoritmos iterativos e recursivos
4. **Comparar** eficiência de algoritmos usando notação assintótica
5. **Identificar** padrões comuns de complexidade

## 📚 Conteúdo Programático

### 1. Motivação para Análise Assintótica

Quando analisamos algoritmos, precisamos de uma forma **matemática precisa** para:
- Comparar eficiência de diferentes algoritmos
- Prever comportamento com entradas grandes
- Ignorar detalhes de implementação e hardware

### 2. Notação Big O (O)

A notação **O(f(n))** descreve o **limite superior** do crescimento de uma função.

#### Definição Formal:
```
f(n) = O(g(n)) se existem constantes positivas c e n₀ 
tais que 0 ≤ f(n) ≤ c·g(n) para todo n ≥ n₀
```

#### Interpretação:
- **f(n)** não cresce mais rápido que **g(n)** (assintoticamente)
- Representa o **pior caso** do algoritmo

### 3. Notação Omega (Ω)

A notação **Ω(f(n))** descreve o **limite inferior** do crescimento de uma função.

#### Definição Formal:
```
f(n) = Ω(g(n)) se existem constantes positivas c e n₀ 
tais que 0 ≤ c·g(n) ≤ f(n) para todo n ≥ n₀
```

#### Interpretação:
- **f(n)** cresce pelo menos tão rápido quanto **g(n)**
- Representa o **melhor caso** do algoritmo

### 4. Notação Theta (Θ)

A notação **Θ(f(n))** descreve o **crescimento exato** de uma função.

#### Definição Formal:
```
f(n) = Θ(g(n)) se f(n) = O(g(n)) e f(n) = Ω(g(n))
```

#### Interpretação:
- **f(n)** cresce exatamente como **g(n)**
- Limite superior e inferior **coincidem**

## 📊 Hierarquia de Complexidades

Em ordem crescente de complexidade:

| Notação | Nome | Exemplo |
|---------|------|---------|
| O(1) | Constante | Acesso a array por índice |
| O(log n) | Logarítmica | Busca binária |
| O(n) | Linear | Busca linear |
| O(n log n) | Linearítmica | Merge sort, Quick sort |
| O(n²) | Quadrática | Bubble sort, Selection sort |
| O(n³) | Cúbica | Multiplicação de matrizes naive |
| O(2ⁿ) | Exponencial | Torres de Hanói |
| O(n!) | Fatorial | Problema do caixeiro viajante (força bruta) |

## 💻 Exemplos Práticos

### Exemplo 1: Algoritmo O(1) - Constante

```c
// Acesso direto a elemento de array
int obter_primeiro(int arr[]) {
    return arr[0];  // Sempre 1 operação
}
```

```python
# Acesso direto a elemento de lista
def obter_primeiro(lista):
    return lista[0]  # Sempre 1 operação
```

**Análise**: Independente do tamanho do array, sempre executa 1 operação.

### Exemplo 2: Algoritmo O(log n) - Busca Binária

```c
#include <stdio.h>

// Busca binária em array ordenado
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
```

```python
# Busca binária em lista ordenada
def busca_binaria(lista, esquerda, direita, x):
    if direita >= esquerda:
        meio = esquerda + (direita - esquerda) // 2
        
        if lista[meio] == x:
            return meio
        elif lista[meio] > x:
            return busca_binaria(lista, esquerda, meio - 1, x)
        else:
            return busca_binaria(lista, meio + 1, direita, x)
    return -1
```

**Análise**: A cada iteração, o espaço de busca é dividido pela metade.
- T(n) = T(n/2) + O(1)
- **Complexidade**: O(log n)

### Exemplo 3: Algoritmo O(n²) - Bubble Sort

```c
#include <stdio.h>

// Bubble sort
void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {          // Loop externo: n-1 vezes
        for (int j = 0; j < n-i-1; j++) {    // Loop interno: decresce a cada i
            if (arr[j] > arr[j+1]) {
                // Troca elementos
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

```python
# Bubble sort
def bubble_sort(lista):
    n = len(lista)
    for i in range(n-1):                     # Loop externo: n-1 vezes
        for j in range(n-i-1):               # Loop interno: decresce a cada i
            if lista[j] > lista[j+1]:
                # Troca elementos
                lista[j], lista[j+1] = lista[j+1], lista[j]
```

**Análise**: 
- Total de comparações: (n-1) + (n-2) + ... + 1 = n(n-1)/2
- **Complexidade**: O(n²)

## 🔍 Técnicas de Análise

### 1. Análise de Loops

#### Loop Simples:
```c
for (int i = 0; i < n; i++) {
    // Operação O(1)
}
// Complexidade: O(n)
```

#### Loops Aninhados:
```c
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // Operação O(1)
    }
}
// Complexidade: O(n²)
```

#### Loop com Incremento Variável:
```c
for (int i = 1; i < n; i *= 2) {
    // Operação O(1)
}
// Complexidade: O(log n)
```

### 2. Análise de Recursão

#### Método da Árvore de Recursão
Para analisar recursões, desenhe a árvore de chamadas:

```
T(n) = T(n/2) + O(1)

Nível 0:     T(n)           - custo: O(1)
Nível 1:     T(n/2)         - custo: O(1)
Nível 2:     T(n/4)         - custo: O(1)
...
Nível k:     T(1)           - custo: O(1)

Altura da árvore: log n
Custo total: O(log n)
```

#### Teorema Mestre
Para recursões da forma: **T(n) = aT(n/b) + f(n)**

1. Se f(n) = O(n^(log_b(a) - ε)), então T(n) = Θ(n^log_b(a))
2. Se f(n) = Θ(n^log_b(a)), então T(n) = Θ(n^log_b(a) × log n)
3. Se f(n) = Ω(n^(log_b(a) + ε)), então T(n) = Θ(f(n))

## 🧮 Exercícios Resolvidos

### Exercício 1: Análise de Algoritmo Simples

```c
int soma_array(int arr[], int n) {
    int soma = 0;                    // O(1)
    for (int i = 0; i < n; i++) {    // O(n)
        soma += arr[i];              // O(1)
    }
    return soma;                     // O(1)
}
```

**Análise**:
- Inicialização: O(1)
- Loop executa n vezes: O(n)
- Cada iteração: O(1)
- **Complexidade total**: O(1) + O(n) × O(1) + O(1) = **O(n)**

### Exercício 2: Algoritmo com Loops Aninhados

```python
def imprime_pares(n):
    for i in range(n):           # O(n)
        for j in range(i):       # O(i) em média O(n/2)
            print(f"{i}, {j}")   # O(1)

# Total de iterações: 0 + 1 + 2 + ... + (n-1) = n(n-1)/2
# Complexidade: O(n²)
```

### Exercício 3: Busca em Array 2D

```c
int busca_matriz(int matriz[][100], int linhas, int colunas, int x) {
    for (int i = 0; i < linhas; i++) {       // O(linhas)
        for (int j = 0; j < colunas; j++) {  // O(colunas)
            if (matriz[i][j] == x) {         // O(1)
                return 1;                    // Encontrado
            }
        }
    }
    return 0;                                // Não encontrado
}
```

**Análise**:
- **Melhor caso**: O(1) - elemento na posição [0][0]
- **Pior caso**: O(linhas × colunas) = O(m×n)
- **Caso médio**: O(m×n/2) = O(m×n)

## 📈 Gráfico de Crescimento das Funções

```
      |
10⁶   |                                    O(n!)
      |                               O(2ⁿ)
10⁵   |                          O(n³)
      |                     O(n²)
10⁴   |               O(n log n)
      |          O(n)
10³   |     O(log n)
      |O(1)
      +--------------------------------→ n
      1    10    100   1000  10000
```

## 🎯 Exercícios para Prática

### Exercício 1: Determine a Complexidade

```c
void algoritmo1(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            printf("(%d, %d)\n", i, j);
        }
    }
}
```

**Resposta**: O(n²) - Total de iterações: n + (n-1) + (n-2) + ... + 1 = n(n+1)/2

### Exercício 2: Análise de Recursão

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

**Resposta**: O(2ⁿ) - Cada chamada gera duas novas chamadas

### Exercício 3: Loop com Divisão

```c
void algoritmo3(int n) {
    for (int i = n; i > 1; i /= 2) {
        printf("%d\n", i);
    }
}
```

**Resposta**: O(log n) - A cada iteração, i é dividido por 2

## 🏠 Tarefa para Casa

### Implementação e Análise

1. **Implementar** em C e Python os seguintes algoritmos:
   - Busca do maior e menor elemento simultaneamente
   - Verificação se um array está ordenado
   - Contagem de inversões em um array

2. **Analisar** a complexidade de cada algoritmo

3. **Comparar** experimentalmente os tempos de execução

### Modelo de Entrega:

```markdown
# Relatório - Aula 02
Nome: [Seu Nome]
Data: [Data]

## Algoritmo 1: Busca Maior e Menor

### Código C:
```c
[Seu código]
```

### Código Python:
```python
[Seu código]
```

### Análise:
- Melhor caso: O(?)
- Pior caso: O(?)
- Caso médio: O(?)
- Justificativa: [Explicação]

[Repetir para todos os algoritmos]

## Testes Experimentais:
- Array 100 elementos: [tempos]
- Array 1000 elementos: [tempos]
- Array 10000 elementos: [tempos]

## Conclusões:
[Suas observações sobre teoria vs prática]
```

## 📚 Material Complementar

### Leitura Obrigatória
- Capítulo 3 do Cormen - "Growth of Functions"
- Seção 1.4 do Sedgewick - "Analysis of Algorithms"

### Exercícios Adicionais
- Lista de exercícios sobre notação assintótica
- Problemas de análise de complexidade

### Ferramentas Online
- [Calculator de complexidade Big O]
- [Visualizador de crescimento de funções]

## 🔄 Próxima Aula

**Aula 03: Estruturas de Dados Lineares**
- Arrays e suas operações
- Análise de complexidade de operações em arrays
- Implementação eficiente de operações básicas

**Preparação necessária:**
- Revisar ponteiros em C
- Praticar análise de complexidade
- Implementar os exercícios desta aula

---

*Material preparado pelo Prof. Vagner Cordeiro - ARA0174*
