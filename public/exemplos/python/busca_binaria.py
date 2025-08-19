
"""
Exemplo de Algoritmo - Busca Binária
Professor: Vagner Cordeiro
Disciplina: ARA0174 - Algoritmos e Complexidade
"""

def busca_binaria(arr, esquerda, direita, x):
    """Busca binária recursiva - O(log n)"""
    if direita >= esquerda:
        meio = esquerda + (direita - esquerda) // 2
        
        if arr[meio] == x:
            return meio
        elif arr[meio] > x:
            return busca_binaria(arr, esquerda, meio - 1, x)
        else:
            return busca_binaria(arr, meio + 1, direita, x)
    
    return -1

def main():
    arr = [2, 3, 4, 10, 40]
    x = 10
    
    resultado = busca_binaria(arr, 0, len(arr) - 1, x)
    
    if resultado == -1:
        print("Elemento não encontrado")
    else:
        print(f"Elemento encontrado no índice {resultado}")

if __name__ == "__main__":
    main()
