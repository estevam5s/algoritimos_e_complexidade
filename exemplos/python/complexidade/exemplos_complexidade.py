"""
Exemplos de Algoritmos com Diferentes Complexidades
Professor: Vagner Cordeiro
Disciplina: ARA0174 - Algoritmos e Complexidade
"""

import time
import random
from typing import List, Tuple

# =================================
# ALGORITMOS O(1) - CONSTANTE
# =================================

def obter_primeiro(lista: List[int]) -> int:
    """Acesso direto a elemento - O(1)"""
    return lista[0]

def soma_dois_numeros(a: int, b: int) -> int:
    """Operação aritmética simples - O(1)"""
    return a + b

# =================================
# ALGORITMOS O(n) - LINEAR
# =================================

def busca_linear(lista: List[int], x: int) -> int:
    """Busca linear - O(n)"""
    for i in range(len(lista)):
        if lista[i] == x:
            return i
    return -1

def soma_lista(lista: List[int]) -> int:
    """Soma de lista - O(n)"""
    total = 0
    for elemento in lista:
        total += elemento
    return total

def imprimir_lista(lista: List[int]) -> None:
    """Impressão de lista - O(n)"""
    for elemento in lista:
        print(elemento, end=" ")
    print()

# =================================
# ALGORITMOS O(log n) - LOGARÍTMICO
# =================================

def busca_binaria_recursiva(lista: List[int], esquerda: int, direita: int, x: int) -> int:
    """Busca binária recursiva - O(log n)"""
    if direita >= esquerda:
        meio = esquerda + (direita - esquerda) // 2
        
        if lista[meio] == x:
            return meio
        elif lista[meio] > x:
            return busca_binaria_recursiva(lista, esquerda, meio - 1, x)
        else:
            return busca_binaria_recursiva(lista, meio + 1, direita, x)
    return -1

def busca_binaria_iterativa(lista: List[int], x: int) -> int:
    """Busca binária iterativa - O(log n)"""
    esquerda, direita = 0, len(lista) - 1
    
    while esquerda <= direita:
        meio = esquerda + (direita - esquerda) // 2
        
        if lista[meio] == x:
            return meio
        elif lista[meio] < x:
            esquerda = meio + 1
        else:
            direita = meio - 1
    return -1

# =================================
# ALGORITMOS O(n²) - QUADRÁTICO
# =================================

def bubble_sort(lista: List[int]) -> None:
    """Bubble Sort - O(n²)"""
    n = len(lista)
    for i in range(n-1):
        for j in range(n-i-1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

def selection_sort(lista: List[int]) -> None:
    """Selection Sort - O(n²)"""
    n = len(lista)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if lista[j] < lista[min_idx]:
                min_idx = j
        lista[i], lista[min_idx] = lista[min_idx], lista[i]

def insertion_sort(lista: List[int]) -> None:
    """Insertion Sort - O(n²)"""
    for i in range(1, len(lista)):
        chave = lista[i]
        j = i - 1
        while j >= 0 and lista[j] > chave:
            lista[j + 1] = lista[j]
            j -= 1
        lista[j + 1] = chave

def tem_duplicatas(lista: List[int]) -> bool:
    """Verifica duplicatas - O(n²)"""
    n = len(lista)
    for i in range(n):
        for j in range(i + 1, n):
            if lista[i] == lista[j]:
                return True
    return False

# =================================
# ALGORITMOS O(n log n) - LINEARÍTMICO
# =================================

def merge_sort(lista: List[int]) -> List[int]:
    """Merge Sort - O(n log n)"""
    if len(lista) <= 1:
        return lista
    
    meio = len(lista) // 2
    esquerda = merge_sort(lista[:meio])
    direita = merge_sort(lista[meio:])
    
    return merge(esquerda, direita)

def merge(esquerda: List[int], direita: List[int]) -> List[int]:
    """Função auxiliar para merge - O(n)"""
    resultado = []
    i = j = 0
    
    while i < len(esquerda) and j < len(direita):
        if esquerda[i] <= direita[j]:
            resultado.append(esquerda[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1
    
    resultado.extend(esquerda[i:])
    resultado.extend(direita[j:])
    return resultado

def quick_sort(lista: List[int]) -> List[int]:
    """Quick Sort - O(n log n) médio, O(n²) pior caso"""
    if len(lista) <= 1:
        return lista
    
    pivot = lista[len(lista) // 2]
    esquerda = [x for x in lista if x < pivot]
    meio = [x for x in lista if x == pivot]
    direita = [x for x in lista if x > pivot]
    
    return quick_sort(esquerda) + meio + quick_sort(direita)

# =================================
# ALGORITMOS O(2^n) - EXPONENCIAL
# =================================

def fibonacci_recursivo(n: int) -> int:
    """Fibonacci recursivo ineficiente - O(2^n)"""
    if n <= 1:
        return n
    return fibonacci_recursivo(n-1) + fibonacci_recursivo(n-2)

def fibonacci_memo(n: int, memo: dict = None) -> int:
    """Fibonacci com memoização - O(n)"""
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

def torre_hanoi(n: int, origem: str, destino: str, auxiliar: str) -> None:
    """Torre de Hanói - O(2^n)"""
    if n == 1:
        print(f"Mover disco 1 de {origem} para {destino}")
        return
    
    torre_hanoi(n-1, origem, auxiliar, destino)
    print(f"Mover disco {n} de {origem} para {destino}")
    torre_hanoi(n-1, auxiliar, destino, origem)

# =================================
# FUNÇÕES DE UTILIDADE
# =================================

def gerar_lista_aleatoria(n: int, max_valor: int = 1000) -> List[int]:
    """Gera lista com números aleatórios"""
    return [random.randint(0, max_valor) for _ in range(n)]

def gerar_lista_ordenada(n: int) -> List[int]:
    """Gera lista ordenada"""
    return list(range(1, n + 1))

def medir_tempo(func, *args) -> Tuple[float, any]:
    """Mede tempo de execução de uma função"""
    inicio = time.time()
    resultado = func(*args)
    fim = time.time()
    return fim - inicio, resultado

def medir_tempo_ordenacao(algoritmo, lista: List[int]) -> float:
    """Mede tempo de algoritmo de ordenação (modifica a lista)"""
    inicio = time.time()
    algoritmo(lista)
    fim = time.time()
    return fim - inicio

# =================================
# ANÁLISE COMPARATIVA
# =================================

def comparar_algoritmos_busca(lista: List[int], elemento: int) -> None:
    """Compara algoritmos de busca"""
    print(f"Buscando elemento {elemento} em lista de tamanho {len(lista)}")
    
    # Busca linear
    tempo, pos = medir_tempo(busca_linear, lista, elemento)
    print(f"Busca Linear: {tempo:.6f}s, posição: {pos}")
    
    # Busca binária (lista deve estar ordenada)
    lista_ordenada = sorted(lista)
    tempo, pos = medir_tempo(busca_binaria_iterativa, lista_ordenada, elemento)
    print(f"Busca Binária: {tempo:.6f}s, posição: {pos}")

def comparar_algoritmos_ordenacao(tamanhos: List[int]) -> None:
    """Compara algoritmos de ordenação"""
    print("=== COMPARAÇÃO DE ALGORITMOS DE ORDENAÇÃO ===")
    
    for n in tamanhos:
        print(f"\nTamanho: {n}")
        lista_original = gerar_lista_aleatoria(n)
        
        # Bubble Sort
        lista_copia = lista_original.copy()
        tempo = medir_tempo_ordenacao(bubble_sort, lista_copia)
        print(f"Bubble Sort:    {tempo:.6f}s")
        
        # Selection Sort
        lista_copia = lista_original.copy()
        tempo = medir_tempo_ordenacao(selection_sort, lista_copia)
        print(f"Selection Sort: {tempo:.6f}s")
        
        # Insertion Sort
        lista_copia = lista_original.copy()
        tempo = medir_tempo_ordenacao(insertion_sort, lista_copia)
        print(f"Insertion Sort: {tempo:.6f}s")
        
        # Merge Sort
        tempo, _ = medir_tempo(merge_sort, lista_original)
        print(f"Merge Sort:     {tempo:.6f}s")
        
        # Quick Sort
        tempo, _ = medir_tempo(quick_sort, lista_original)
        print(f"Quick Sort:     {tempo:.6f}s")
        
        # Python sorted() (Timsort)
        tempo, _ = medir_tempo(sorted, lista_original)
        print(f"Python sorted(): {tempo:.6f}s")

def demonstrar_crescimento_fibonacci(max_n: int) -> None:
    """Demonstra diferença entre Fibonacci recursivo e com memoização"""
    print("=== FIBONACCI: RECURSIVO vs MEMOIZAÇÃO ===")
    
    for n in range(max_n + 1):
        # Fibonacci com memoização
        tempo_memo, resultado = medir_tempo(fibonacci_memo, n)
        
        # Fibonacci recursivo (apenas para n pequenos)
        if n <= 35:  # Limite para não demorar muito
            tempo_rec, _ = medir_tempo(fibonacci_recursivo, n)
            print(f"F({n}): {resultado}, Recursivo: {tempo_rec:.6f}s, Memo: {tempo_memo:.6f}s")
        else:
            print(f"F({n}): {resultado}, Memo: {tempo_memo:.6f}s (recursivo muito lento)")

# =================================
# FUNÇÃO PRINCIPAL
# =================================

def main():
    print("=== EXEMPLOS DE COMPLEXIDADE DE ALGORITMOS ===\n")
    
    # Demonstração 1: Algoritmos O(1)
    print("1. ALGORITMOS O(1) - CONSTANTE")
    lista_teste = [5, 2, 8, 1, 9, 3]
    print(f"Lista: {lista_teste}")
    print(f"Primeiro elemento: {obter_primeiro(lista_teste)}")
    print(f"Soma 5 + 3: {soma_dois_numeros(5, 3)}\n")
    
    # Demonstração 2: Algoritmos O(n)
    print("2. ALGORITMOS O(n) - LINEAR")
    print(f"Busca pelo 8: posição {busca_linear(lista_teste, 8)}")
    print(f"Soma da lista: {soma_lista(lista_teste)}\n")
    
    # Demonstração 3: Algoritmos O(log n)
    print("3. ALGORITMOS O(log n) - LOGARÍTMICO")
    lista_ordenada = [1, 3, 5, 7, 9, 11, 13, 15]
    print(f"Lista ordenada: {lista_ordenada}")
    print(f"Busca binária pelo 7: posição {busca_binaria_iterativa(lista_ordenada, 7)}")
    print(f"Busca binária pelo 6: posição {busca_binaria_iterativa(lista_ordenada, 6)}\n")
    
    # Demonstração 4: Algoritmos O(n²)
    print("4. ALGORITMOS O(n²) - QUADRÁTICO")
    lista_desordenada = [64, 34, 25, 12, 22, 11, 90]
    print(f"Lista original: {lista_desordenada}")
    
    lista_bubble = lista_desordenada.copy()
    bubble_sort(lista_bubble)
    print(f"Após Bubble Sort: {lista_bubble}")
    
    lista_selection = lista_desordenada.copy()
    selection_sort(lista_selection)
    print(f"Após Selection Sort: {lista_selection}\n")
    
    # Demonstração 5: Algoritmos O(n log n)
    print("5. ALGORITMOS O(n log n) - LINEARÍTMICO")
    resultado_merge = merge_sort(lista_desordenada)
    print(f"Merge Sort: {resultado_merge}")
    
    resultado_quick = quick_sort(lista_desordenada)
    print(f"Quick Sort: {resultado_quick}\n")
    
    # Demonstração 6: Algoritmos O(2^n)
    print("6. ALGORITMOS O(2^n) - EXPONENCIAL")
    print(f"Fibonacci de 10 (recursivo): {fibonacci_recursivo(10)}")
    print(f"Fibonacci de 10 (memoização): {fibonacci_memo(10)}")
    print("Torre de Hanói para 3 discos:")
    torre_hanoi(3, 'A', 'C', 'B')
    print()
    
    # Comparações de performance
    print("7. COMPARAÇÕES DE PERFORMANCE")
    
    # Comparar busca
    print("\n--- Comparação de Busca ---")
    lista_grande = gerar_lista_aleatoria(10000)
    elemento_busca = lista_grande[5000]  # Elemento no meio
    comparar_algoritmos_busca(lista_grande, elemento_busca)
    
    # Comparar ordenação
    comparar_algoritmos_ordenacao([100, 500, 1000])
    
    # Demonstrar crescimento Fibonacci
    print()
    demonstrar_crescimento_fibonacci(10)

if __name__ == "__main__":
    main()
