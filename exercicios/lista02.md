# Lista de Exercícios 02: Estruturas de Dados Básicas

**Professor:** Vagner Cordeiro  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Data de Entrega:** 08 de setembro de 2025  
**Valor:** 2,5 pontos  

## 📋 Instruções Gerais

1. **Implementar** todos os algoritmos em **C** e **Python**
2. **Analisar** a complexidade de tempo e espaço de cada implementação
3. **Testar** com diferentes cenários de entrada
4. **Comparar** diferentes abordagens quando aplicável
5. **Documentar** todo o desenvolvimento no relatório

## 🎯 Objetivos

- Implementar estruturas de dados lineares
- Compreender operações fundamentais em arrays
- Aplicar conceitos de ponteiros e gerenciamento de memória
- Desenvolver habilidades de programação defensiva
- Analisar trade-offs entre diferentes implementações

## 📝 Exercícios

### Exercício 1: Array Dinâmico Completo (2,0 pontos)

**Problema**: Implementar um array dinâmico completo com todas as operações básicas.

#### Especificações:

**Em C:**
```c
typedef struct {
    int* data;
    int size;
    int capacity;
} DynamicArray;

// Operações obrigatórias:
DynamicArray* create_array(int initial_capacity);
void destroy_array(DynamicArray* arr);
int get(DynamicArray* arr, int index);
void set(DynamicArray* arr, int index, int value);
void push_back(DynamicArray* arr, int value);
void push_front(DynamicArray* arr, int value);
int pop_back(DynamicArray* arr);
int pop_front(DynamicArray* arr);
void insert(DynamicArray* arr, int index, int value);
void remove_at(DynamicArray* arr, int index);
int find(DynamicArray* arr, int value);
void resize(DynamicArray* arr, int new_capacity);
void print_array(DynamicArray* arr);
```

**Em Python:**
```python
class DynamicArray:
    def __init__(self, initial_capacity=4):
        """Inicializa array dinâmico"""
        pass
    
    def __len__(self):
        """Retorna tamanho atual"""
        pass
    
    def __getitem__(self, index):
        """Acesso por índice"""
        pass
    
    def __setitem__(self, index, value):
        """Atribuição por índice"""
        pass
    
    def append(self, value):
        """Adiciona no final"""
        pass
    
    def prepend(self, value):
        """Adiciona no início"""
        pass
    
    def pop(self):
        """Remove do final"""
        pass
    
    def pop_front(self):
        """Remove do início"""
        pass
    
    def insert(self, index, value):
        """Insere em posição específica"""
        pass
    
    def remove_at(self, index):
        """Remove por índice"""
        pass
    
    def find(self, value):
        """Busca elemento"""
        pass
    
    def __str__(self):
        """Representação string"""
        pass
```

#### Requisitos Específicos:
1. **Redimensionamento automático**: Duplicar capacidade quando cheio, reduzir pela metade quando 1/4 ocupado
2. **Tratamento de erros**: Verificar índices inválidos
3. **Análise de complexidade**: Para cada operação
4. **Testes unitários**: Verificar todas as operações

#### Casos de Teste Obrigatórios:
- Array vazio
- Inserção até redimensionamento
- Remoção até redução de capacidade
- Operações em índices extremos (0, último)
- Índices inválidos

---

### Exercício 2: Matriz Esparsa (2,0 pontos)

**Problema**: Implementar uma matriz esparsa (matriz com muitos zeros) usando três representações diferentes.

#### Abordagem 1: Lista de Triplas
```c
typedef struct {
    int row;
    int col;
    int value;
} Triple;

typedef struct {
    Triple* elements;
    int num_elements;
    int capacity;
    int rows;
    int cols;
} SparseMatrix;
```

#### Abordagem 2: Array de Listas (Python)
```python
class SparseMatrix:
    def __init__(self, rows, cols):
        """Inicializa matriz esparsa usando dicionário"""
        self.rows = rows
        self.cols = cols
        self.data = {}  # (row, col) -> value
    
    def set(self, row, col, value):
        """Define valor em posição"""
        pass
    
    def get(self, row, col):
        """Obtém valor de posição"""
        pass
    
    def add(self, other):
        """Soma duas matrizes esparsas"""
        pass
    
    def multiply(self, other):
        """Multiplica duas matrizes esparsas"""
        pass
```

#### Operações Necessárias:
- Criação e inicialização
- Inserção e remoção de elementos
- Soma de matrizes
- Multiplicação de matrizes
- Transposição
- Conversão para matriz densa

---

### Exercício 3: Algoritmos de Manipulação de Arrays (1,5 pontos)

**Problema**: Implementar algoritmos específicos para manipulação de arrays.

#### 3.1 Rotação de Array
```c
// Rotacionar array k posições à direita
// Exemplo: [1,2,3,4,5], k=2 → [4,5,1,2,3]
void rotate_right(int arr[], int n, int k);
void rotate_left(int arr[], int n, int k);
```

#### 3.2 Produtos de Array
```python
def produto_exceto_self(nums):
    """
    Retorna array onde cada posição contém o produto
    de todos os elementos exceto o da posição atual
    Exemplo: [1,2,3,4] → [24,12,8,6]
    Restrição: Não usar divisão
    """
    pass
```

#### 3.3 Subarray de Soma Máxima (Algoritmo de Kadane)
```c
// Encontrar subarray contíguo com maior soma
int max_subarray_sum(int arr[], int n);
void max_subarray_indices(int arr[], int n, int* start, int* end);
```

#### 3.4 Merge de K Arrays Ordenados
```python
def merge_k_arrays(arrays):
    """
    Combina k arrays ordenados em um array ordenado
    Input: [[1,4,5], [1,3,4], [2,6]]
    Output: [1,1,2,3,4,4,5,6]
    """
    pass
```

---

### Exercício 4: Análise de Performance (1,0 ponto)

**Problema**: Implementar e comparar diferentes versões de algoritmos básicos.

#### 4.1 Busca Linear vs Busca Binária
Comparar performance com:
- Arrays de tamanhos: 1K, 10K, 100K, 1M
- Diferentes posições do elemento (início, meio, fim)
- Elemento não encontrado

#### 4.2 Ordenação: Implementações Otimizadas
```c
// Bubble Sort otimizado (parar se não houver trocas)
void bubble_sort_optimized(int arr[], int n);

// Insertion Sort binário (usar busca binária para posição)
void insertion_sort_binary(int arr[], int n);

// Selection Sort com busca de min e max simultânea
void selection_sort_double(int arr[], int n);
```

#### 4.3 Análise Empírica
Para cada algoritmo, medir:
- Tempo de execução
- Número de comparações
- Número de trocas/movimentações
- Uso de memória

---

### Exercício 5: Problemas Aplicados (1,5 pontos)

#### 5.1 Sistema de Controle de Estoque
```c
typedef struct {
    int codigo;
    char nome[50];
    int quantidade;
    float preco;
} Produto;

typedef struct {
    Produto* produtos;
    int num_produtos;
    int capacidade;
} Estoque;

// Implementar:
Estoque* criar_estoque(int capacidade);
void adicionar_produto(Estoque* est, Produto prod);
int buscar_produto(Estoque* est, int codigo);
void atualizar_quantidade(Estoque* est, int codigo, int nova_qtd);
void remover_produto(Estoque* est, int codigo);
void listar_produtos(Estoque* est);
float valor_total_estoque(Estoque* est);
void produtos_baixo_estoque(Estoque* est, int limite);
```

#### 5.2 Buffer Circular para Streaming
```python
class CircularBuffer:
    """Buffer circular para dados em tempo real"""
    
    def __init__(self, capacity):
        pass
    
    def put(self, item):
        """Adiciona item (sobrescreve se cheio)"""
        pass
    
    def get(self):
        """Remove e retorna item mais antigo"""
        pass
    
    def peek(self):
        """Visualiza próximo item sem remover"""
        pass
    
    def is_full(self):
        """Verifica se buffer está cheio"""
        pass
    
    def is_empty(self):
        """Verifica se buffer está vazio"""
        pass
    
    def average(self):
        """Calcula média dos valores no buffer"""
        pass
```

#### 5.3 Cache LRU (Least Recently Used)
```python
class LRUCache:
    """Cache com política LRU usando array"""
    
    def __init__(self, capacity):
        pass
    
    def get(self, key):
        """Obtém valor e marca como recentemente usado"""
        pass
    
    def put(self, key, value):
        """Insere/atualiza valor"""
        pass
    
    def display(self):
        """Mostra estado atual do cache"""
        pass
```

---

## 📊 Formato do Relatório

```
RELATÓRIO - LISTA DE EXERCÍCIOS 02
Nome: [Seu Nome Completo]
Matrícula: [Sua Matrícula]
Data: [Data de Entrega]

=== EXERCÍCIO 1: ARRAY DINÂMICO ===

1.1 Implementação em C:
[Código completo com comentários]

1.2 Implementação em Python:
[Código completo com comentários]

1.3 Análise de Complexidade:
Operação          | Melhor Caso | Caso Médio | Pior Caso | Espaço
------------------|-------------|------------|-----------|--------
get/set           | O(?)        | O(?)       | O(?)      | O(?)
push_back         | O(?)        | O(?)       | O(?)      | O(?)
push_front        | O(?)        | O(?)       | O(?)      | O(?)
insert            | O(?)        | O(?)       | O(?)      | O(?)
[continuar...]

1.4 Resultados dos Testes:
[Evidências de que todos os casos funcionam]

1.5 Medições de Performance:
[Gráficos ou tabelas com tempos medidos]

=== EXERCÍCIO 2: MATRIZ ESPARSA ===
[Mesmo formato...]

=== EXERCÍCIO 3: ALGORITMOS DE MANIPULAÇÃO ===
[Mesmo formato...]

=== EXERCÍCIO 4: ANÁLISE DE PERFORMANCE ===
[Mesmo formato...]

=== EXERCÍCIO 5: PROBLEMAS APLICADOS ===
[Mesmo formato...]

=== CONCLUSÕES GERAIS ===
1. Qual estrutura foi mais desafiadora de implementar?
2. Que diferenças observou entre C e Python?
3. Como o gerenciamento de memória impactou as implementações?
4. Que otimizações foram mais efetivas?
5. Lições aprendidas sobre estruturas de dados lineares.
```

## 🎯 Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| **Corretude** | 30% | Implementações funcionam corretamente |
| **Completude** | 25% | Todos os exercícios implementados |
| **Análise** | 20% | Análise de complexidade e performance |
| **Qualidade** | 15% | Código limpo, comentado e eficiente |
| **Documentação** | 10% | Relatório claro e bem estruturado |

## 📚 Dicas para Sucesso

### Implementação:
- **Comece simples**: Implemente operações básicas primeiro
- **Teste incrementalmente**: Verifique cada função antes de prosseguir
- **Trate erros**: Sempre valide entradas e índices
- **Documente**: Comente código complexo

### Performance:
- **Meça sempre**: Use ferramentas de timing
- **Compare abordagens**: Teste diferentes implementações
- **Considere casos extremos**: Arrays muito grandes/pequenos
- **Analise gargalos**: Identifique operações custosas

### Debugging:
- **Use debugging tools**: gdb para C, pdb para Python
- **Print statements**: Para rastrear fluxo de execução
- **Valgrind**: Para verificar vazamentos de memória em C
- **Unit tests**: Teste cada função isoladamente

## 🔗 Recursos Úteis

### Ferramentas:
- **Valgrind**: Detecção de vazamentos de memória
- **GDB**: Debugging para C
- **cProfile**: Profiling para Python
- **matplotlib**: Gráficos de performance

### Referências:
- Capítulo 10 do Cormen: "Elementary Data Structures"
- Seção 1.3 do Sedgewick: "Bags, Queues, and Stacks"

## 📅 Cronograma

- **Lançamento**: 25 de agosto de 2025
- **Checkpoint 1**: 30 de agosto (Exercícios 1-2)
- **Checkpoint 2**: 04 de setembro (Exercícios 3-4)
- **Entrega Final**: 08 de setembro de 2025, 23:59h
- **Apresentação**: 10 de setembro de 2025

---

**Boa sorte e mãos à obra!**

*Prof. Vagner Cordeiro - ARA0174*
