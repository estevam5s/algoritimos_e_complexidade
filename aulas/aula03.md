# Aula 03: Estruturas de Dados Lineares

**Professor:** Vagner Cordeiro  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Duração:** 2 horas  
**Data:** 25 de agosto de 2025  

## 🎯 Objetivos da Aula

Ao final desta aula, o estudante será capaz de:

1. **Compreender** estruturas de dados lineares e suas características
2. **Implementar** arrays estáticos e dinâmicos em C e Python
3. **Analisar** a complexidade das operações em arrays
4. **Aplicar** técnicas de manipulação eficiente de arrays
5. **Comparar** diferentes representações de dados lineares

## 📚 Conteúdo Programático

### 1. O que são Estruturas de Dados Lineares?

**Estruturas de dados lineares** são organizações onde os elementos são dispostos sequencialmente, onde cada elemento (exceto o primeiro e último) possui exatamente um predecessor e um sucessor.

#### Características:
- **Sequência**: Elementos organizados em ordem
- **Acesso**: Cada elemento tem uma posição definida
- **Percurso**: Pode ser percorrida do início ao fim

#### Tipos Principais:
- **Arrays (Vetores)**
- **Listas Ligadas**
- **Pilhas (Stacks)**
- **Filas (Queues)**

### 2. Arrays (Vetores)

Um **array** é uma estrutura de dados que armazena elementos do mesmo tipo em posições contíguas de memória.

#### Características dos Arrays:
- **Tamanho fixo** (em arrays estáticos)
- **Acesso direto** por índice: O(1)
- **Localização**: Elementos em endereços consecutivos
- **Índices**: Começam em 0 (na maioria das linguagens)

### 3. Arrays em C

Em C, arrays são estruturas de baixo nível com controle direto de memória.

#### 3.1 Array Estático
```c
#include <stdio.h>

int main() {
    // Declaração e inicialização
    int arr[5] = {10, 20, 30, 40, 50};
    
    // Acesso aos elementos
    printf("Primeiro elemento: %d\n", arr[0]);
    printf("Último elemento: %d\n", arr[4]);
    
    // Modificação
    arr[2] = 99;
    
    // Percorrendo o array
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }
    
    return 0;
}
```

#### 3.2 Array Dinâmico
```c
#include <stdio.h>
#include <stdlib.h>

// Estrutura para array dinâmico
typedef struct {
    int* data;      // Ponteiro para os dados
    int size;       // Tamanho atual
    int capacity;   // Capacidade máxima
} DynamicArray;

// Criar array dinâmico
DynamicArray* create_array(int initial_capacity) {
    DynamicArray* arr = malloc(sizeof(DynamicArray));
    arr->data = malloc(initial_capacity * sizeof(int));
    arr->size = 0;
    arr->capacity = initial_capacity;
    return arr;
}

// Redimensionar array
void resize_array(DynamicArray* arr, int new_capacity) {
    arr->data = realloc(arr->data, new_capacity * sizeof(int));
    arr->capacity = new_capacity;
}

// Inserir elemento no final
void push_back(DynamicArray* arr, int value) {
    if (arr->size >= arr->capacity) {
        resize_array(arr, arr->capacity * 2);  // Duplicar capacidade
    }
    arr->data[arr->size] = value;
    arr->size++;
}

// Obter elemento por índice
int get_element(DynamicArray* arr, int index) {
    if (index < 0 || index >= arr->size) {
        printf("Índice fora dos limites!\n");
        return -1;
    }
    return arr->data[index];
}

// Definir elemento por índice
void set_element(DynamicArray* arr, int index, int value) {
    if (index < 0 || index >= arr->size) {
        printf("Índice fora dos limites!\n");
        return;
    }
    arr->data[index] = value;
}

// Liberar memória
void free_array(DynamicArray* arr) {
    free(arr->data);
    free(arr);
}

// Imprimir array
void print_array(DynamicArray* arr) {
    printf("[");
    for (int i = 0; i < arr->size; i++) {
        printf("%d", arr->data[i]);
        if (i < arr->size - 1) printf(", ");
    }
    printf("]\n");
}
```

### 4. Arrays em Python

Python oferece listas dinâmicas que funcionam como arrays redimensionáveis.

#### 4.1 Lista Básica
```python
# Criação e inicialização
lista = [10, 20, 30, 40, 50]

# Acesso aos elementos
print(f"Primeiro elemento: {lista[0]}")
print(f"Último elemento: {lista[-1]}")  # Índice negativo

# Modificação
lista[2] = 99

# Percorrendo a lista
for i, valor in enumerate(lista):
    print(f"lista[{i}] = {valor}")

# Operações comuns
lista.append(60)        # Adicionar no final
lista.insert(0, 5)      # Inserir no início
elemento = lista.pop()  # Remover do final
del lista[1]           # Remover por índice
```

#### 4.2 Classe Array Personalizada
```python
class DynamicArray:
    """Array dinâmico personalizado para demonstração"""
    
    def __init__(self, initial_capacity=4):
        self._data = [None] * initial_capacity
        self._size = 0
        self._capacity = initial_capacity
    
    def __len__(self):
        """Retorna o tamanho do array"""
        return self._size
    
    def __getitem__(self, index):
        """Acesso por índice: arr[index]"""
        if 0 <= index < self._size:
            return self._data[index]
        raise IndexError("Índice fora dos limites")
    
    def __setitem__(self, index, value):
        """Atribuição por índice: arr[index] = value"""
        if 0 <= index < self._size:
            self._data[index] = value
        else:
            raise IndexError("Índice fora dos limites")
    
    def _resize(self, new_capacity):
        """Redimensiona o array interno"""
        old_data = self._data
        self._data = [None] * new_capacity
        self._capacity = new_capacity
        
        for i in range(self._size):
            self._data[i] = old_data[i]
    
    def append(self, value):
        """Adiciona elemento no final - O(1) amortizado"""
        if self._size >= self._capacity:
            self._resize(self._capacity * 2)
        
        self._data[self._size] = value
        self._size += 1
    
    def insert(self, index, value):
        """Insere elemento em posição específica - O(n)"""
        if index < 0 or index > self._size:
            raise IndexError("Índice fora dos limites")
        
        if self._size >= self._capacity:
            self._resize(self._capacity * 2)
        
        # Desloca elementos para a direita
        for i in range(self._size, index, -1):
            self._data[i] = self._data[i-1]
        
        self._data[index] = value
        self._size += 1
    
    def remove_at(self, index):
        """Remove elemento por índice - O(n)"""
        if index < 0 or index >= self._size:
            raise IndexError("Índice fora dos limites")
        
        # Desloca elementos para a esquerda
        for i in range(index, self._size - 1):
            self._data[i] = self._data[i+1]
        
        self._size -= 1
        
        # Reduz capacidade se necessário
        if self._size < self._capacity // 4:
            self._resize(self._capacity // 2)
    
    def __str__(self):
        """Representação string do array"""
        return '[' + ', '.join(str(self._data[i]) for i in range(self._size)) + ']'
```

## 📊 Análise de Complexidade

### Operações em Arrays

| Operação | Array Estático | Array Dinâmico | Descrição |
|----------|----------------|----------------|-----------|
| **Acesso** | O(1) | O(1) | Acesso direto por índice |
| **Busca** | O(n) | O(n) | Busca linear |
| **Inserção (final)** | - | O(1)* | *Amortizado |
| **Inserção (meio)** | - | O(n) | Requer deslocamento |
| **Remoção (final)** | - | O(1) | Remove último elemento |
| **Remoção (meio)** | - | O(n) | Requer deslocamento |

### Análise Detalhada: Inserção no Final

```python
def analise_insercao():
    """Demonstra complexidade amortizada de inserção"""
    
    # Cenário: Inserir n elementos
    # Capacidades: 1, 2, 4, 8, 16, 32, ...
    # Redimensionamentos: posições 1, 2, 4, 8, 16, ...
    
    n = 32
    custos = []
    capacidade = 1
    
    for i in range(1, n + 1):
        if i > capacidade:
            # Redimensionamento: custo O(i)
            custo = i
            capacidade *= 2
        else:
            # Inserção normal: custo O(1)
            custo = 1
        
        custos.append(custo)
        print(f"Inserção {i}: custo = {custo}")
    
    custo_total = sum(custos)
    custo_amortizado = custo_total / n
    
    print(f"\nCusto total: {custo_total}")
    print(f"Custo amortizado: {custo_amortizado:.2f} = O(1)")
```

## 💻 Exemplos Práticos

### Exemplo 1: Operações Básicas em Array (C)

```c
#include <stdio.h>
#include <stdlib.h>

// Buscar elemento
int buscar(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) return i;
    }
    return -1;
}

// Inserir no final (se houver espaço)
int inserir_final(int arr[], int *n, int capacidade, int x) {
    if (*n >= capacidade) return 0;  // Array cheio
    arr[*n] = x;
    (*n)++;
    return 1;  // Sucesso
}

// Inserir em posição específica
int inserir_posicao(int arr[], int *n, int capacidade, int pos, int x) {
    if (*n >= capacidade || pos < 0 || pos > *n) return 0;
    
    // Desloca elementos para direita
    for (int i = *n; i > pos; i--) {
        arr[i] = arr[i-1];
    }
    
    arr[pos] = x;
    (*n)++;
    return 1;
}

// Remover por posição
int remover_posicao(int arr[], int *n, int pos) {
    if (pos < 0 || pos >= *n) return 0;
    
    // Desloca elementos para esquerda
    for (int i = pos; i < *n - 1; i++) {
        arr[i] = arr[i+1];
    }
    
    (*n)--;
    return 1;
}

int main() {
    int arr[10] = {1, 2, 3, 4, 5};
    int n = 5;
    
    printf("Array inicial: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    
    // Buscar
    int pos = buscar(arr, n, 3);
    printf("Posição do 3: %d\n", pos);
    
    // Inserir no final
    inserir_final(arr, &n, 10, 6);
    printf("Após inserir 6: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    
    // Inserir na posição 2
    inserir_posicao(arr, &n, 10, 2, 99);
    printf("Após inserir 99 na posição 2: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    
    // Remover posição 1
    remover_posicao(arr, &n, 1);
    printf("Após remover posição 1: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    
    return 0;
}
```

### Exemplo 2: Operações Avançadas (Python)

```python
def demonstrar_operacoes():
    """Demonstra operações em arrays/listas"""
    
    # Criação
    numeros = [1, 2, 3, 4, 5]
    print(f"Lista inicial: {numeros}")
    
    # Busca
    elemento = 3
    try:
        posicao = numeros.index(elemento)
        print(f"Posição do {elemento}: {posicao}")
    except ValueError:
        print(f"{elemento} não encontrado")
    
    # Inserções
    numeros.append(6)  # Final
    print(f"Após append(6): {numeros}")
    
    numeros.insert(0, 0)  # Início
    print(f"Após insert(0, 0): {numeros}")
    
    numeros.insert(3, 2.5)  # Meio
    print(f"Após insert(3, 2.5): {numeros}")
    
    # Remoções
    numeros.pop()  # Remove último
    print(f"Após pop(): {numeros}")
    
    numeros.remove(2.5)  # Remove por valor
    print(f"Após remove(2.5): {numeros}")
    
    del numeros[0]  # Remove por índice
    print(f"Após del numeros[0]: {numeros}")
    
    # Operações de slice
    print(f"Slice [1:4]: {numeros[1:4]}")
    print(f"Slice [::2]: {numeros[::2]}")  # Elementos pares
    
    # Operações funcionais
    quadrados = [x**2 for x in numeros]
    print(f"Quadrados: {quadrados}")
    
    pares = [x for x in numeros if x % 2 == 0]
    print(f"Números pares: {pares}")
```

## 🧠 Exercícios em Aula

### Exercício 1: Rotação de Array
Implementar função que rotaciona array k posições à direita.

```c
// Exemplo: [1,2,3,4,5], k=2 → [4,5,1,2,3]
void rotacionar_direita(int arr[], int n, int k) {
    // SEU CÓDIGO AQUI
}
```

```python
def rotacionar_direita(lista, k):
    """Rotaciona lista k posições à direita"""
    # SEU CÓDIGO AQUI
    pass
```

### Exercício 2: Remover Duplicatas
Remover todos os elementos duplicados mantendo ordem.

```python
def remover_duplicatas(lista):
    """Remove duplicatas mantendo primeira ocorrência"""
    # SEU CÓDIGO AQUI
    pass
```

### Exercício 3: Merge de Arrays Ordenados
Combinar dois arrays ordenados em um array ordenado.

```c
void merge_arrays(int arr1[], int n1, int arr2[], int n2, int resultado[]) {
    // SEU CÓDIGO AQUI
}
```

## 🔍 Aplicações Práticas

### 1. Buffer Circular
```python
class BufferCircular:
    """Buffer circular para streaming de dados"""
    
    def __init__(self, capacity):
        self.buffer = [None] * capacity
        self.capacity = capacity
        self.size = 0
        self.head = 0
        self.tail = 0
    
    def put(self, item):
        """Adiciona item ao buffer"""
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.capacity
        
        if self.size < self.capacity:
            self.size += 1
        else:
            self.head = (self.head + 1) % self.capacity
    
    def get(self):
        """Remove e retorna item do buffer"""
        if self.size == 0:
            return None
        
        item = self.buffer[self.head]
        self.head = (self.head + 1) % self.capacity
        self.size -= 1
        return item
```

### 2. Array 2D (Matriz)
```c
// Matriz como array de arrays
int matriz[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Acesso: matriz[linha][coluna]
printf("Elemento (1,2): %d\n", matriz[1][2]);  // 7

// Matriz como array 1D
int matriz_1d[12];
// Mapeamento: posição = linha * num_colunas + coluna
int obter_elemento(int matriz[], int linha, int coluna, int num_colunas) {
    return matriz[linha * num_colunas + coluna];
}
```

## 🏠 Tarefa para Casa

### Implementar Sistema de Notas
Criar um sistema que:

1. **Armazene** notas de estudantes em array/lista
2. **Calcule** média, maior e menor nota
3. **Ordene** as notas
4. **Busque** nota específica
5. **Conte** quantos alunos ficaram acima da média

#### Estrutura em C:
```c
typedef struct {
    char nome[50];
    float nota;
} Estudante;

typedef struct {
    Estudante* estudantes;
    int quantidade;
    int capacidade;
} SistemaNotas;

// Implementar funções:
SistemaNotas* criar_sistema(int capacidade);
void adicionar_estudante(SistemaNotas* sistema, char* nome, float nota);
float calcular_media(SistemaNotas* sistema);
void ordenar_por_nota(SistemaNotas* sistema);
int buscar_estudante(SistemaNotas* sistema, char* nome);
void relatorio_completo(SistemaNotas* sistema);
```

#### Estrutura em Python:
```python
class SistemaNotas:
    def __init__(self):
        self.estudantes = []
    
    def adicionar_estudante(self, nome, nota):
        """Adiciona estudante ao sistema"""
        pass
    
    def calcular_media(self):
        """Calcula média das notas"""
        pass
    
    def obter_maior_menor(self):
        """Retorna (maior_nota, menor_nota)"""
        pass
    
    def ordenar_por_nota(self, decrescente=True):
        """Ordena estudantes por nota"""
        pass
    
    def buscar_estudante(self, nome):
        """Busca estudante por nome"""
        pass
    
    def contar_acima_media(self):
        """Conta estudantes acima da média"""
        pass
    
    def relatorio_completo(self):
        """Gera relatório completo"""
        pass
```

## 📚 Material Complementar

### Leitura Recomendada
- Capítulo 2 do Cormen - "Getting Started"
- Seção 1.3 do Sedgewick - "Bags, Queues, and Stacks"

### Conceitos para Próxima Aula
- Pilhas (Stacks)
- Operações push e pop
- Aplicações de pilhas

---

**Preparação necessária:**
- Revisar ponteiros e gerenciamento de memória em C
- Praticar operações básicas em arrays
- Implementar os exercícios propostos

---

*Material preparado pelo Prof. Vagner Cordeiro - ARA0174*
