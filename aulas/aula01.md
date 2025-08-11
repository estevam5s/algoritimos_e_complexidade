# Aula 01: Introdução a Algoritmos e Complexidade

**Professor:** Vagner Cordeiro  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Duração:** 2 horas  
**Data:** 11 de agosto de 2025  

## 🎯 Objetivos da Aula

Ao final desta aula, o estudante será capaz de:

1. **Definir** o que são algoritmos e sua importância na computação
2. **Identificar** as características de um bom algoritmo
3. **Compreender** os conceitos básicos de complexidade computacional
4. **Diferenciar** complexidade de tempo e espaço
5. **Aplicar** análise básica de algoritmos simples

## 📚 Conteúdo Programático

### 1. O que são Algoritmos?

Um **algoritmo** é uma sequência finita de instruções bem definidas e não ambíguas, cada uma das quais pode ser executada mecanicamente em um período de tempo finito e com uma quantidade de esforço finita.

#### Características de um Algoritmo:
- **Finitude**: Deve terminar após um número finito de passos
- **Definitude**: Cada passo deve ser precisamente definido
- **Entrada**: Zero ou mais entradas
- **Saída**: Uma ou mais saídas
- **Efetividade**: Cada operação deve ser básica o suficiente

#### Exemplo Prático: Algoritmo para Fazer Café
```
1. Início
2. Pegar água
3. Colocar água na cafeteira
4. Adicionar pó de café
5. Ligar a cafeteira
6. Esperar o café ficar pronto
7. Servir o café
8. Fim
```

### 2. Importância dos Algoritmos

Os algoritmos são fundamentais porque:
- Resolvem problemas computacionais
- Otimizam recursos (tempo e memória)
- Permitem automação de tarefas
- São a base de toda programação

### 3. Análise de Algoritmos

A análise de algoritmos nos ajuda a:
- **Prever** o comportamento do algoritmo
- **Comparar** diferentes soluções
- **Otimizar** o desempenho
- **Escolher** a melhor abordagem

### 4. Complexidade Computacional

#### 4.1 Complexidade de Tempo
Mede quanto tempo um algoritmo leva para executar em função do tamanho da entrada.

#### 4.2 Complexidade de Espaço
Mede quanta memória um algoritmo usa em função do tamanho da entrada.

## 💻 Exemplos Práticos

### Exemplo 1: Soma de Números (C)

```c
#include <stdio.h>

// Algoritmo simples: Soma de dois números
int soma(int a, int b) {
    return a + b;  // Complexidade: O(1)
}

int main() {
    int num1 = 5, num2 = 3;
    int resultado = soma(num1, num2);
    printf("A soma de %d + %d = %d\n", num1, num2, resultado);
    return 0;
}
```

### Exemplo 1: Soma de Números (Python)

```python
# Algoritmo simples: Soma de dois números
def soma(a, b):
    return a + b  # Complexidade: O(1)

# Teste
num1 = 5
num2 = 3
resultado = soma(num1, num2)
print(f"A soma de {num1} + {num2} = {resultado}")
```

### Exemplo 2: Busca Linear (C)

```c
#include <stdio.h>

// Busca linear em array
int busca_linear(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {        // Loop executa n vezes
        if (arr[i] == x) {               // Comparação: O(1)
            return i;                    // Elemento encontrado
        }
    }
    return -1;                           // Elemento não encontrado
}
// Complexidade de Tempo: O(n)
// Complexidade de Espaço: O(1)

int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int n = 5;
    int x = 6;
    
    int resultado = busca_linear(arr, n, x);
    if (resultado != -1) {
        printf("Elemento %d encontrado na posição %d\n", x, resultado);
    } else {
        printf("Elemento %d não encontrado\n", x);
    }
    
    return 0;
}
```

### Exemplo 2: Busca Linear (Python)

```python
# Busca linear em lista
def busca_linear(lista, x):
    for i in range(len(lista)):          # Loop executa n vezes
        if lista[i] == x:                # Comparação: O(1)
            return i                     # Elemento encontrado
    return -1                            # Elemento não encontrado

# Complexidade de Tempo: O(n)
# Complexidade de Espaço: O(1)

# Teste
lista = [2, 4, 6, 8, 10]
x = 6

resultado = busca_linear(lista, x)
if resultado != -1:
    print(f"Elemento {x} encontrado na posição {resultado}")
else:
    print(f"Elemento {x} não encontrado")
```

### Exemplo 3: Algoritmo Quadrático (C)

```c
#include <stdio.h>

// Impressão de matriz quadrada
void imprime_matriz(int n) {
    for (int i = 0; i < n; i++) {        // Loop externo: n iterações
        for (int j = 0; j < n; j++) {    // Loop interno: n iterações
            printf("(%d,%d) ", i, j);   // Operação: O(1)
        }
        printf("\n");
    }
}
// Complexidade de Tempo: O(n²)
// Complexidade de Espaço: O(1)

int main() {
    int n = 3;
    printf("Matriz %dx%d:\n", n, n);
    imprime_matriz(n);
    return 0;
}
```

### Exemplo 3: Algoritmo Quadrático (Python)

```python
# Impressão de matriz quadrada
def imprime_matriz(n):
    for i in range(n):                   # Loop externo: n iterações
        for j in range(n):               # Loop interno: n iterações
            print(f"({i},{j})", end=" ") # Operação: O(1)
        print()                          # Nova linha

# Complexidade de Tempo: O(n²)
# Complexidade de Espaço: O(1)

# Teste
n = 3
print(f"Matriz {n}x{n}:")
imprime_matriz(n)
```

## 📊 Análise Comparativa

| Algoritmo | Complexidade de Tempo | Complexidade de Espaço |
|-----------|----------------------|------------------------|
| Soma | O(1) | O(1) |
| Busca Linear | O(n) | O(1) |
| Matriz Quadrada | O(n²) | O(1) |

## 🔍 Conceitos Importantes

### Melhor, Pior e Caso Médio

- **Melhor Caso**: Menor tempo possível de execução
- **Pior Caso**: Maior tempo possível de execução
- **Caso Médio**: Tempo esperado de execução

### Exemplo: Busca Linear
- **Melhor Caso**: O(1) - elemento está na primeira posição
- **Pior Caso**: O(n) - elemento está na última posição ou não existe
- **Caso Médio**: O(n/2) ≈ O(n) - elemento está no meio

## 🧠 Exercícios em Aula

### Exercício 1: Análise Básica
Analise a complexidade do seguinte algoritmo:

```c
int maximo(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

**Resposta**: 
- Complexidade de Tempo: O(n)
- Complexidade de Espaço: O(1)

### Exercício 2: Comparação de Algoritmos
Compare os seguintes algoritmos para somar todos os elementos de um array:

#### Versão 1:
```python
def soma_v1(lista):
    total = 0
    for elemento in lista:
        total += elemento
    return total
```

#### Versão 2:
```python
def soma_v2(lista):
    if len(lista) == 0:
        return 0
    return lista[0] + soma_v2(lista[1:])
```

**Resposta**:
- Versão 1: Tempo O(n), Espaço O(1)
- Versão 2: Tempo O(n), Espaço O(n) devido à recursão

## 🏠 Tarefa para Casa

1. **Implementar** um algoritmo em C e Python que encontre o menor elemento em um array
2. **Analisar** a complexidade de tempo e espaço do algoritmo
3. **Testar** o algoritmo com diferentes tamanhos de entrada
4. **Documentar** os resultados em um relatório de uma página

### Modelo de Entrega:
```
Relatório - Aula 01
Nome: [Seu Nome]
Data: [Data de Entrega]

1. Código em C:
[Seu código aqui]

2. Código em Python:
[Seu código aqui]

3. Análise de Complexidade:
- Tempo: O(?)
- Espaço: O(?)
- Justificativa: [Sua explicação]

4. Testes Realizados:
- Array de tamanho 5: [resultados]
- Array de tamanho 100: [resultados]
- Array de tamanho 1000: [resultados]

5. Conclusões:
[Suas observações]
```

## 📚 Material de Apoio

### Leitura Recomendada
- Capítulo 1 do Cormen et al. - "Introduction to Algorithms"
- Seção 2.1 do Sedgewick - "Algorithms"

### Vídeos Complementares
- [Link para vídeo sobre análise de algoritmos]
- [Link para vídeo sobre complexidade computacional]

### Sites Úteis
- [Visualizador de algoritmos online]
- [Calculadora de complexidade]

## 🔄 Próxima Aula

**Aula 02: Notação Big O e Análise Assintótica**
- Notação O, Ω e Θ
- Propriedades da notação assintótica
- Exercícios de análise avançada

---

**Preparação necessária:**
- Revisar conceitos de matemática básica (logaritmos, exponenciais)
- Praticar implementação de algoritmos simples
- Ler material sobre notação Big O

---

*Material preparado pelo Prof. Vagner Cordeiro - ARA0174*
