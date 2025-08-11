# Aula 04: Definições Recursivas e Como Implementar Recursividade

**Disciplina:** Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Carga Horária:** 4 horas  

## Objetivos

- Compreender conceitos de recursividade
- Implementar funções recursivas corretamente
- Identificar casos base e recursivos
- Aplicar recursão em problemas práticos

## 1. Conceitos Fundamentais

### 1.1 Definição de Recursividade
Uma função é **recursiva** quando chama a si mesma para resolver uma versão menor do mesmo problema.

### 1.2 Componentes Essenciais
- **Caso base:** Condição de parada
- **Caso recursivo:** Chamada da função para problema menor
- **Convergência:** Garantia de que chegará ao caso base

## 2. Exemplos Matemáticos

### 2.1 Fatorial
```c
int fatorial(int n) {
    if (n <= 1) {           // Caso base
        return 1;
    }
    return n * fatorial(n-1); // Caso recursivo
}
```

### 2.2 Fibonacci
```c
int fibonacci(int n) {
    if (n <= 1) {           // Caso base
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2); // Caso recursivo
}
```

### 2.3 Potência
```c
int potencia(int base, int exp) {
    if (exp == 0) {         // Caso base
        return 1;
    }
    return base * potencia(base, exp-1); // Caso recursivo
}
```

## 3. Recursão com Arrays

### 3.1 Soma de Array
```c
int soma_array(int arr[], int n) {
    if (n <= 0) {           // Caso base
        return 0;
    }
    return arr[n-1] + soma_array(arr, n-1); // Caso recursivo
}
```

### 3.2 Busca em Array
```c
int busca_recursiva(int arr[], int n, int x) {
    if (n <= 0) {           // Caso base - não encontrado
        return -1;
    }
    if (arr[n-1] == x) {    // Caso base - encontrado
        return n-1;
    }
    return busca_recursiva(arr, n-1, x); // Caso recursivo
}
```

## 4. Recursão com Strings

### 4.1 Inversão de String
```c
void inverte_string(char str[], int inicio, int fim) {
    if (inicio >= fim) {    // Caso base
        return;
    }
    // Troca caracteres
    char temp = str[inicio];
    str[inicio] = str[fim];
    str[fim] = temp;
    
    inverte_string(str, inicio+1, fim-1); // Caso recursivo
}
```

### 4.2 Palíndromo
```c
int eh_palindromo(char str[], int inicio, int fim) {
    if (inicio >= fim) {    // Caso base
        return 1;           // É palíndromo
    }
    if (str[inicio] != str[fim]) { // Caracteres diferentes
        return 0;           // Não é palíndromo
    }
    return eh_palindromo(str, inicio+1, fim-1); // Caso recursivo
}
```

## 5. Problemas Clássicos

### 5.1 Torres de Hanói
```c
void hanoi(int n, char origem, char destino, char auxiliar) {
    if (n == 1) {           // Caso base
        printf("Mover disco de %c para %c\n", origem, destino);
        return;
    }
    // Mover n-1 discos para auxiliar
    hanoi(n-1, origem, auxiliar, destino);
    
    // Mover disco maior para destino
    printf("Mover disco de %c para %c\n", origem, destino);
    
    // Mover n-1 discos do auxiliar para destino
    hanoi(n-1, auxiliar, destino, origem);
}
```

### 5.2 Máximo Divisor Comum (MDC)
```c
int mdc(int a, int b) {
    if (b == 0) {           // Caso base
        return a;
    }
    return mdc(b, a % b);   // Caso recursivo
}
```

## 6. Exercícios Práticos

1. Implemente soma dos dígitos de um número
2. Calcule o n-ésimo termo da sequência de Fibonacci
3. Verifique se uma string é palíndromo
4. Implemente busca binária recursiva
5. Calcule a potência usando recursão otimizada

## Bibliografia

- Cormen, T.H. et al. *Introduction to Algorithms*, 4ª ed., Cap. 2
- Sedgewick, R. *Algorithms*, 4ª ed., Cap. 1.1
