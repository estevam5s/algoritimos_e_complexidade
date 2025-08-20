import React, { useState, useRef, useEffect } from 'react';
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  Box,
  CircularProgress,
  Chip,
  Tooltip
} from '@mui/material';
import { 
  Send as SendIcon, 
  ClearAll as ClearIcon,
  DeleteSweep as DeleteSweepIcon
} from '@mui/icons-material';
import './ChatSection.css';

// Importar dados das aulas do script.js
const aulasData = {
    'aula01': {
        title: '📘 Aula 01: Algoritmos - Funções e Passagem de Parâmetros',
        pdf: 'aulas/pdf/aula01.pdf',
        content: `
        <h1>Aula 01: Algoritmos - Funções e Passagem de Parâmetros</h1>
        
        <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
        <strong>Professor:</strong> Vagner Cordeiro<br>
        <strong>Carga Horária:</strong> 4 horas</p>

        <h2>Objetivos de Aprendizagem</h2>
        <p>Ao final desta aula, o estudante será capaz de:</p>
        <ul>
            <li>Compreender conceitos fundamentais de algoritmos</li>
            <li>Dominar a criação e uso de funções</li>
            <li>Aplicar diferentes formas de passagem de parâmetros</li>
            <li>Analisar o escopo de variáveis em funções</li>
        </ul>

        <h2>1. Conceitos Fundamentais de Algoritmos</h2>

        <h3>1.1 Definição de Algoritmo</h3>
        <p>Um <strong>algoritmo</strong> é uma sequência finita e ordenada de instruções não ambíguas que resolve um problema específico ou realiza uma tarefa computacional.</p>

        <h3>1.2 Características Essenciais</h3>
        <ul>
            <li><strong>Finitude</strong>: Deve terminar após um número finito de passos</li>
            <li><strong>Definição</strong>: Cada instrução deve ser clara e precisa</li>
            <li><strong>Entrada</strong>: Zero ou mais valores de entrada</li>
            <li><strong>Saída</strong>: Um ou mais valores de saída</li>
            <li><strong>Efetividade</strong>: Cada operação deve ser realizável</li>
        </ul>

        <h2>2. Funções em Algoritmos</h2>

        <h3>2.1 Conceito de Função</h3>
        <p>Uma <strong>função</strong> é um bloco de código que executa uma tarefa específica e pode ser reutilizado em diferentes partes do programa.</p>

        <h3>2.2 Vantagens das Funções</h3>
        <ul>
            <li><strong>Modularidade</strong>: Divisão do problema em partes menores</li>
            <li><strong>Reutilização</strong>: Código pode ser usado múltiplas vezes</li>
            <li><strong>Manutenibilidade</strong>: Facilita correções e melhorias</li>
            <li><strong>Legibilidade</strong>: Torna o código mais compreensível</li>
        </ul>

        <h3>2.3 Sintaxe de Funções em C</h3>
        <pre><code>tipo_retorno nome_funcao(tipo_parametro1 parametro1, tipo_parametro2 parametro2) {
    // Corpo da função
    return valor; // opcional para funções void
}</code></pre>

        <h3>2.4 Exemplo Prático</h3>
        <pre><code>#include &lt;stdio.h&gt;

// Função que calcula o quadrado de um número
int quadrado(int numero) {
    return numero * numero;
}

// Função que verifica se um número é par
int eh_par(int numero) {
    return (numero % 2 == 0);
}

int main() {
    int valor = 5;
    printf("O quadrado de %d é %d\\n", valor, quadrado(valor));
    printf("%d é %s\\n", valor, eh_par(valor) ? "par" : "ímpar");
    return 0;
}</code></pre>

        <h2>3. Passagem de Parâmetros</h2>

        <h3>3.1 Passagem por Valor</h3>
        <p>Na <strong>passagem por valor</strong>, uma cópia do valor é enviada para a função. Mudanças no parâmetro não afetam a variável original.</p>

        <pre><code>#include &lt;stdio.h&gt;

void incrementa_valor(int x) {
    x = x + 1;
    printf("Dentro da função: %d\\n", x);
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\\n", numero);
    incrementa_valor(numero);
    printf("Depois da função: %d\\n", numero);
    return 0;
}</code></pre>

        <p><strong>Saída:</strong></p>
        <pre>Antes da função: 10
Dentro da função: 11
Depois da função: 10</pre>

        <h3>3.2 Passagem por Referência (Ponteiros)</h3>
        <p>Na <strong>passagem por referência</strong>, o endereço da variável é enviado. Mudanças no parâmetro afetam a variável original.</p>

        <pre><code>#include &lt;stdio.h&gt;

void incrementa_referencia(int *x) {
    *x = *x + 1;
    printf("Dentro da função: %d\\n", *x);
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\\n", numero);
    incrementa_referencia(&numero);
    printf("Depois da função: %d\\n", numero);
    return 0;
}</code></pre>

        <p><strong>Saída:</strong></p>
        <pre>Antes da função: 10
Dentro da função: 11
Depois da função: 11</pre>

        <div class="pdf-download-grid" style="margin-top: 30px;">
            <a href="aulas/pdf/aula01.pdf" class="pdf-download-item" target="_blank">📄 Download PDF Completo</a>
        </div>
        `
    },
    'aula02': {
        title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
        pdf: 'aulas/pdf/aula02.pdf',
        content: `
        <h1>Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros</h1>
        
        <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
        <strong>Professor:</strong> Vagner Cordeiro<br>
        <strong>Carga Horária:</strong> 4 horas</p>

        <h2>Objetivos de Aprendizagem</h2>
        <ul>
            <li>Compreender estruturas de dados homogêneas e heterogêneas</li>
            <li>Dominar conceitos avançados de ponteiros</li>
            <li>Implementar arrays e matrizes eficientemente</li>
            <li>Aplicar structs para organização de dados complexos</li>
        </ul>

        <h2>1. Estruturas de Dados: Conceitos Fundamentais</h2>

        <h3>Definição Formal de Estrutura de Dados</h3>
        <p>Uma estrutura de dados é um sistema matemático organizado:</p>
        <p><strong>S = (D, O, R)</strong></p>
        <p>Onde:</p>
        <ul>
            <li><strong>D</strong> = Conjunto finito de dados armazenados</li>
            <li><strong>O</strong> = Conjunto de operações primitivas permitidas</li>
            <li><strong>R</strong> = Conjunto de relações e invariantes entre elementos</li>
        </ul>

        <h3>Taxonomia Fundamental</h3>
        <p><strong>Por Homogeneidade:</strong></p>
        <ul>
            <li><strong>Homogêneas</strong>: Todos elementos do mesmo tipo</li>
            <li><strong>Heterogêneas</strong>: Elementos de tipos diferentes</li>
        </ul>

        <p><strong>Por Organização:</strong></p>
        <ul>
            <li><strong>Lineares</strong>: Sequência ordenada</li>
            <li><strong>Não-lineares</strong>: Estruturas hierárquicas</li>
        </ul>

        <h2>2. Arrays (Vetores) - Estruturas Homogêneas</h2>

        <h3>Definição Matemática</h3>
        <p>Um array é uma função que mapeia índices para valores:</p>
        <p><strong>A: {0, 1, 2, ..., n-1} → T</strong></p>

        <h3>Características Computacionais</h3>
        <ul>
            <li><strong>Acesso Aleatório</strong>: O(1) constante</li>
            <li><strong>Localidade Espacial</strong>: Elementos contíguos</li>
            <li><strong>Eficiência de Cache</strong>: Alta taxa de hits</li>
        </ul>

        <h3>Declaração e Inicialização</h3>
        <pre><code>// Diferentes métodos de inicialização
int array_basico[5];                    // Não inicializado
int array_inicializado[5] = {1,2,3,4,5}; // Completa
int array_parcial[5] = {1,2};           // Parcial: {1,2,0,0,0}
int array_zero[5] = {0};                // Todos zeros
int array_automatico[] = {1,2,3,4,5};   // Tamanho inferido</code></pre>

        <h2>3. Ponteiros: Conceitos Avançados</h2>

        <h3>Definição Formal</h3>
        <p>Um ponteiro é uma abstração para endereçamento indireto:</p>
        <p><strong>ptr: Endereço → Valor</strong></p>

        <h3>Aritmética de Ponteiros</h3>
        <pre><code>int array[5] = {10, 20, 30, 40, 50};
int *p = array;  // p aponta para array[0]

// Navegação por aritmética
printf("p[0] = %d\\n", *p);        // 10
printf("p[1] = %d\\n", *(p+1));    // 20  
printf("p[2] = %d\\n", *(p+2));    // 30</code></pre>

        <h2>4. Estruturas Heterogêneas (Structs)</h2>

        <h3>Definição e Uso</h3>
        <pre><code>// Definição da estrutura
struct Ponto {
    double x;
    double y;
    double z;
};

// Diferentes formas de declaração
struct Ponto p1;
struct Ponto p2 = {1.0, 2.0, 3.0};

// Usando typedef
typedef struct {
    double x, y, z;
} Ponto3D;</code></pre>

        <h3>Acesso aos Membros</h3>
        <pre><code>// Acesso direto
p1.x = 10.5;
p1.y = 20.3;

// Acesso via ponteiro
Ponto3D *ptr = &origem;
ptr->x = 15.0;  // Equivale a (*ptr).x = 15.0
ptr->y = 25.0;</code></pre>

        <h2>5. Matrizes e Arrays Bidimensionais</h2>

        <h3>Endereçamento</h3>
        <p><strong>Row-major order (C):</strong></p>
        <p>endereco(M[i][j]) = base + (i × n + j) × sizeof(T)</p>

        <h3>Implementação</h3>
        <pre><code>// Declaração de matrizes
int matriz_fixa[3][4];
int matriz_inicializada[2][3] = {{1,2,3}, {4,5,6}};

// Operações matriciais
void adicionar_matrizes(int A[][4], int B[][4], int C[][4], 
                       int linhas, int colunas) {
    for (int i = 0; i < linhas; i++) {
        for (int j = 0; j < colunas; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
}</code></pre>

        <div class="pdf-download-grid" style="margin-top: 30px;">
            <a href="aulas/pdf/aula02.pdf" class="pdf-download-item" target="_blank">📄 Download PDF Completo</a>
        </div>
        `
    },
    'aula03': {
        title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
        pdf: 'aulas/pdf/aula03.pdf',
        content: `
        <h1>Aula 03: Análise de Algoritmos e Prática de Análise</h1>
        
        <p><em>Conteúdo detalhado da Aula 03 não está disponível no arquivo markdown. Consulte o PDF para conteúdo completo.</em></p>

        <h2>Tópicos Abordados</h2>
        <ul>
            <li>Análise de complexidade de tempo e espaço</li>
            <li>Notações assintóticas (Big-O, Ω, Θ)</li>
            <li>Análise de melhor, pior e caso médio</li>
            <li>Técnicas de análise prática</li>
            <li>Benchmarking e medição de performance</li>
        </ul>

        <div class="pdf-download-grid" style="margin-top: 30px;">
            <a href="aulas/pdf/aula03.pdf" class="pdf-download-item" target="_blank">📄 Download PDF Completo</a>
        </div>
        `
    },
    'aula04': {
        title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
        pdf: 'aulas/pdf/aula04.pdf',
        content: `
        <h1>Aula 04: Definições Recursivas e Como Implementar Recursividade</h1>
        
        <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
        <strong>Professor:</strong> Vagner Cordeiro<br>
        <strong>Carga Horária:</strong> 4 horas</p>

        <h2>Objetivos</h2>
        <ul>
            <li>Compreender conceitos de recursividade</li>
            <li>Implementar funções recursivas corretamente</li>
            <li>Identificar casos base e recursivos</li>
            <li>Aplicar recursão em problemas práticos</li>
        </ul>

        <h2>1. Conceitos Fundamentais</h2>

        <h3>1.1 Definição de Recursividade</h3>
        <p>Uma função é <strong>recursiva</strong> quando chama a si mesma para resolver uma versão menor do mesmo problema.</p>

        <h3>1.2 Componentes Essenciais</h3>
        <ul>
            <li><strong>Caso base:</strong> Condição de parada</li>
            <li><strong>Caso recursivo:</strong> Chamada da função para problema menor</li>
            <li><strong>Convergência:</strong> Garantia de que chegará ao caso base</li>
        </ul>

        <h2>2. Exemplos Matemáticos</h2>

        <h3>2.1 Fatorial</h3>
        <pre><code>int fatorial(int n) {
    if (n <= 1) {           // Caso base
        return 1;
    }
    return n * fatorial(n-1); // Caso recursivo
}</code></pre>

        <h3>2.2 Fibonacci</h3>
        <pre><code>int fibonacci(int n) {
    if (n <= 1) {           // Caso base
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2); // Caso recursivo
}</code></pre>

        <h3>2.3 Potência</h3>
        <pre><code>int potencia(int base, int exp) {
    if (exp == 0) {         // Caso base
        return 1;
    }
    return base * potencia(base, exp-1); // Caso recursivo
}</code></pre>

        <h2>3. Recursão com Arrays</h2>

        <h3>3.1 Soma de Array</h3>
        <pre><code>int soma_array(int arr[], int n) {
    if (n <= 0) {           // Caso base
        return 0;
    }
    return arr[n-1] + soma_array(arr, n-1); // Caso recursivo
}</code></pre>

        <h3>3.2 Busca em Array</h3>
        <pre><code>int busca_recursiva(int arr[], int n, int x) {
    if (n <= 0) {           // Caso base - não encontrado
        return -1;
    }
    if (arr[n-1] == x) {    // Caso base - encontrado
        return n-1;
    }
    return busca_recursiva(arr, n-1, x); // Caso recursivo
}</code></pre>

        <h2>4. Recursão com Strings</h2>

        <h3>4.1 Inversão de String</h3>
        <pre><code>void inverte_string(char str[], int inicio, int fim) {
    if (inicio >= fim) {    // Caso base
        return;
    }
    // Troca caracteres
    char temp = str[inicio];
    str[inicio] = str[fim];
    str[fim] = temp;
    
    inverte_string(str, inicio+1, fim-1); // Caso recursivo
}</code></pre>

        <h3>4.2 Palíndromo</h3>
        <pre><code>int eh_palindromo(char str[], int inicio, int fim) {
    if (inicio >= fim) {    // Caso base
        return 1;           // É palíndromo
    }
    if (str[inicio] != str[fim]) { // Caracteres diferentes
        return 0;           // Não é palíndromo
    }
    return eh_palindromo(str, inicio+1, fim-1); // Caso recursivo
}</code></pre>

        <h2>5. Problemas Clássicos</h2>

        <h3>5.1 Torres de Hanói</h3>
        <pre><code>void hanoi(int n, char origem, char destino, char auxiliar) {
    if (n == 1) {           // Caso base
        printf("Mover disco de %c para %c\\n", origem, destino);
        return;
    }
    // Mover n-1 discos para auxiliar
    hanoi(n-1, origem, auxiliar, destino);
    
    // Mover disco maior para destino
    printf("Mover disco de %c para %c\\n", origem, destino);
    
    // Mover n-1 discos do auxiliar para destino
    hanoi(n-1, auxiliar, destino, origem);
}</code></pre>

        <h3>5.2 Máximo Divisor Comum (MDC)</h3>
        <pre><code>int mdc(int a, int b) {
    if (b == 0) {           // Caso base
        return a;
    }
    return mdc(b, a % b);   // Caso recursivo
}</code></pre>

        <h2>6. Exercícios Práticos</h2>
        <ol>
            <li>Implemente soma dos dígitos de um número</li>
            <li>Calcule o n-ésimo termo da sequência de Fibonacci</li>
            <li>Verifique se uma string é palíndromo</li>
            <li>Implemente busca binária recursiva</li>
            <li>Calcule a potência usando recursão otimizada</li>
        </ol>

        <div class="pdf-download-grid" style="margin-top: 30px;">
            <a href="aulas/pdf/aula04.pdf" class="pdf-download-item" target="_blank">📄 Download PDF Completo</a>
        </div>
        `
    },
    'aulas05-14': {
        title: '📚 Aulas 05-14: Conteúdo Avançado',
        content: `
        <h1>Aulas 05-14: Conteúdo Avançado</h1>
        
        <div class="content-toc">
            <h4>📚 Índice das Aulas</h4>
            <ul>
                <li><a href="#aula05">Aula 05: Desenvolvendo Algoritmos com Recursividade</a></li>
                <li><a href="#aula06">Aula 06: Quando Não Usar Recursividade</a></li>
                <li><a href="#aula07">Aula 07: Análise Ordenação Elementar e Mergesort</a></li>
                <li><a href="#aula08">Aula 08: Quicksort e Shellsort</a></li>
                <li><a href="#aula09-12">Aulas 09-12: Árvores e Grafos</a></li>
                <li><a href="#aula13">Aula 13: Roteiro de Laboratório</a></li>
                <li><a href="#aula14">Aula 14: Projetos Finais</a></li>
            </ul>
        </div>

        <h2 id="aula05">Aula 05: Desenvolvendo Algoritmos com Recursividade</h2>
        <p><strong>Objetivos:</strong> Aplicar recursividade em problemas complexos, implementar backtracking e desenvolver soluções recursivas para permutações.</p>

        <h3>1. Backtracking</h3>
        <p><strong>Backtracking</strong> é uma técnica algorítmica que considera buscar toda solução possível para um problema computacional, incrementalmente abandonando candidatos quando determinado que não pode produzir uma solução válida.</p>

        <h3>2. Problema das N-Rainhas</h3>
        <pre><code>bool eh_seguro(int tabuleiro[][8], int linha, int coluna, int n) {
    // Verifica coluna
    for (int i = 0; i < linha; i++) {
        if (tabuleiro[i][coluna] == 1) {
            return false;
        }
    }
    
    // Verifica diagonais
    for (int i = linha - 1, j = coluna - 1; i >= 0 && j >= 0; i--, j--) {
        if (tabuleiro[i][j] == 1) {
            return false;
        }
    }
    
    return true;
}</code></pre>

        <h2 id="aula06">Aula 06: Quando Não Usar Recursividade</h2>
        <p><strong>Objetivos:</strong> Identificar limitações da recursividade e reconhecer quando a iteração é mais apropriada.</p>

        <h3>1. Limitações da Recursividade</h3>
        <ul>
            <li><strong>Stack Overflow:</strong> Cada chamada recursiva consome espaço na pilha</li>
            <li><strong>Complexidade Exponencial:</strong> Algumas recursões geram complexidade desnecessária</li>
            <li><strong>Consumo de Memória:</strong> Uso excessivo da pilha de execução</li>
        </ul>

        <h3>2. Fibonacci: Problema Clássico</h3>
        <pre><code>// ❌ RUIM: Recursão ineficiente
int fibonacci_ruim(int n) {
    if (n <= 1) return n;
    return fibonacci_ruim(n-1) + fibonacci_ruim(n-2);
}

// ✅ BOM: Versão iterativa eficiente
int fibonacci_bom(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}</code></pre>

        <h2 id="aula07">Aula 07: Análise Ordenação Elementar e Mergesort</h2>
        <p><strong>Objetivos:</strong> Compreender algoritmos de ordenação elementares e dominar o Merge Sort.</p>

        <h3>Algoritmos de Ordenação Elementares</h3>

        <h4>1. Bubble Sort</h4>
        <pre><code>void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}</code></pre>
        <p><strong>Complexidade:</strong> O(n²) - Melhor caso: O(n) com otimização</p>

        <h4>2. Selection Sort</h4>
        <pre><code>void selection_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}</code></pre>
        <p><strong>Complexidade:</strong> O(n²) - Sempre faz O(n) trocas</p>

        <h4>3. Merge Sort</h4>
        <pre><code>void merge_sort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);
        
        merge(arr, left, mid, right);
    }
}</code></pre>
        <p><strong>Complexidade:</strong> O(n log n) - Todos os casos</p>

        <h2 id="aula08">Aula 08: Quicksort e Shellsort</h2>
        <p><strong>Objetivos:</strong> Dominar o Quick Sort e compreender o Shell Sort.</p>

        <h3>Quick Sort</h3>
        <pre><code>void quick_sort(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        int pi = particionar(arr, baixo, alto);
        
        quick_sort(arr, baixo, pi - 1);
        quick_sort(arr, pi + 1, alto);
    }
}</code></pre>
        <p><strong>Análise:</strong></p>
        <ul>
            <li><strong>Melhor Caso:</strong> O(n log n)</li>
            <li><strong>Pior Caso:</strong> O(n²)</li>
            <li><strong>Caso Médio:</strong> O(n log n)</li>
        </ul>

        <h2 id="aula09-12">Aulas 09-12: Árvores e Grafos</h2>

        <h3>Aula 09: Árvore Binária de Busca</h3>
        <p><strong>Objetivos:</strong> Compreender conceitos de árvores binárias e implementar BST.</p>

        <pre><code>typedef struct No {
    int data;
    struct No *esquerda, *direita;
} No;

No* inserir(No *raiz, int data) {
    if (raiz == NULL) return criar_no(data);
    
    if (data < raiz->data)
        raiz->esquerda = inserir(raiz->esquerda, data);
    else if (data > raiz->data)
        raiz->direita = inserir(raiz->direita, data);
    
    return raiz;
}</code></pre>

        <h3>Aula 10: Percurso em Árvores Binárias</h3>
        <p><strong>Tipos de Percurso:</strong></p>
        <ul>
            <li><strong>Em Ordem (In-order):</strong> Esquerda → Raiz → Direita</li>
            <li><strong>Pré-ordem (Pre-order):</strong> Raiz → Esquerda → Direita</li>
            <li><strong>Pós-ordem (Post-order):</strong> Esquerda → Direita → Raiz</li>
            <li><strong>Por Nível (Level-order):</strong> Usando fila</li>
        </ul>

        <h3>Aula 11: Balanceamento de Árvore e Árvore AVL</h3>
        <p><strong>Conceitos:</strong></p>
        <ul>
            <li><strong>Fator de Balanceamento:</strong> altura(direita) - altura(esquerda)</li>
            <li><strong>Árvore AVL:</strong> |fator de balanceamento| ≤ 1</li>
            <li><strong>Rotações:</strong> Simples e duplas</li>
        </ul>

        <h3>Aula 12: Grafos - Conceitos e Representação</h3>
        <p><strong>Definições:</strong></p>
        <ul>
            <li><strong>Grafo:</strong> G = (V, E) onde V são vértices e E são arestas</li>
            <li><strong>Representações:</strong> Matriz de adjacência e Lista de adjacência</li>
            <li><strong>Algoritmos:</strong> DFS e BFS</li>
        </ul>

        <h2 id="aula13">Aula 13: Roteiro de Laboratório</h2>
        <p><strong>Objetivos:</strong> Aplicar conceitos teóricos em implementações práticas.</p>

        <h3>Laboratórios Principais:</h3>
        <ul>
            <li><strong>Lab 1:</strong> Implementação e Análise de Algoritmos de Ordenação</li>
            <li><strong>Lab 2:</strong> Árvore Binária de Busca Completa</li>
            <li><strong>Lab 3:</strong> Sistema de Grafos com Algoritmos</li>
            <li><strong>Lab 4:</strong> Projeto Integrador - Sistema de Gerenciamento</li>
        </ul>

        <h2 id="aula14">Aula 14: Projetos Finais</h2>
        <p><strong>Objetivos:</strong> Aplicar conhecimentos em projetos práticos complexos.</p>

        <h3>Estrutura dos Projetos:</h3>
        <ul>
            <li><strong>Duração:</strong> 15-20 minutos por equipe</li>
            <li><strong>Composição:</strong> 2-3 alunos por equipe</li>
            <li><strong>Demonstração:</strong> Sistema funcionando + código + análise</li>
            <li><strong>Documentação:</strong> Relatório técnico completo</li>
        </ul>

        <h3>Projetos Disponíveis:</h3>
        <ol>
            <li><strong>Sistema de Roteamento de Rede</strong></li>
            <li><strong>Sistema de Gerenciamento de Banco de Dados Simples</strong></li>
            <li><strong>Compilador para Linguagem Simples</strong></li>
            <li><strong>Sistema de Recomendação Inteligente</strong></li>
            <li><strong>Simulador de Sistema Operacional</strong></li>
            <li><strong>Engine de Jogos 2D com IA</strong></li>
        </ol>

        <div class="pdf-download-grid" style="margin-top: 30px;">
            <a href="aulas/pdf/aulas09-12.pdf" class="pdf-download-item" target="_blank">📄 Aulas 09-12 PDF</a>
            <a href="aulas/pdf/aula13.pdf" class="pdf-download-item" target="_blank">📄 Aula 13 PDF</a>
            <a href="aulas/pdf/aula14.pdf" class="pdf-download-item" target="_blank">📄 Download PDF Completo</a>
        </div>
        `
    }
};

const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Função para converter HTML em texto plano para a IA
const htmlToText = (html) => {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
};

// Gerar contexto detalhado das aulas
const generateDetailedContext = () => {
  let detailedContent = '';
  Object.entries(aulasData).forEach(([aulaId, aula]) => {
    detailedContent += `\n=== ${aula.title} ===\n`;
    detailedContent += htmlToText(aula.content);
    detailedContent += '\n\n';
  });
  return detailedContent;
};

const COURSE_CONTEXT = `
Você é um assistente virtual ALTAMENTE ESPECIALIZADO na disciplina "Algoritmos e Complexidade" (ARA0174) do curso de Sistemas de Informação, ministrada pelo Prof. Vagner Cordeiro.

🎯 PAPEL E EXPERTISE:
Você é um expert em algoritmos, estruturas de dados, análise de complexidade e programação em C e Python. Você tem acesso completo a todo o conteúdo das aulas da disciplina e pode explicar conceitos detalhadamente, resolver exercícios, criar exemplos práticos e ajudar com implementações.

📚 INFORMAÇÕES DA DISCIPLINA:
- Código: ARA0174 - Algoritmos e Complexidade
- Carga Horária: 80 horas (4 horas/semana)
- Período: 2025.2
- Professor: Vagner Cordeiro
- Curso: Sistemas de Informação

🗓️ EMENTA DETALHADA:
Unidade I (16h): Fundamentos e Funções
- Conceitos básicos de algoritmos e suas características essenciais
- Funções: criação, uso, vantagens (modularidade, reutilização, manutenibilidade)
- Passagem de parâmetros: por valor vs por referência (ponteiros)
- Estruturas homogêneas (arrays) e heterogêneas (structs)
- Ponteiros: definição formal, aritmética, endereçamento indireto
- Análise de complexidade introdutória

Unidade II (16h): Recursividade
- Definições recursivas e componentes essenciais
- Casos base, casos recursivos, garantia de convergência
- Implementação de algoritmos recursivos clássicos
- Limitações: stack overflow, complexidade exponencial
- Quando usar recursão vs iteração
- Backtracking e algoritmos avançados

Unidade III (16h): Algoritmos de Ordenação
- Algoritmos elementares: Bubble Sort O(n²), Selection Sort O(n²), Insertion Sort
- Algoritmos eficientes: Merge Sort O(n log n), Quick Sort (melhor O(n log n), pior O(n²))
- Shell Sort e suas características
- Análise comparativa de complexidades
- Implementações práticas e otimizações

Unidade IV (16h): Estruturas Avançadas
- Árvores binárias de busca (BST): conceitos, implementação, operações
- Percursos: em ordem, pré-ordem, pós-ordem, por nível
- Árvores AVL: balanceamento, fatores, rotações simples e duplas
- Grafos: definições G = (V, E), representações (matriz/lista adjacência)
- Algoritmos fundamentais: DFS, BFS

Unidade V (16h): Projetos e Laboratório
- Laboratórios práticos com implementações completas
- Projetos integradores: sistemas complexos
- Análise de performance e benchmarks
- Documentação técnica

📖 CONTEÚDO DETALHADO DAS AULAS:
${generateDetailedContext()}

📝 EXERCÍCIOS E AVALIAÇÕES:
Listas de Exercícios:
- Lista 01: Análise de Complexidade (2,0 pontos, prazo 25/08/2025)
- Lista 02: Estruturas de Dados Básicas (2,5 pontos, prazo 08/09/2025)
- Lista 03: Algoritmos Recursivos (2,0 pontos, prazo 22/09/2025)
- Lista 04: Algoritmos de Ordenação (3,0 pontos, prazo 06/10/2025)

Sistema de Avaliação:
- Prova 1: 25% (Fundamentos, funções, análise de complexidade)
- Prova 2: 25% (Estruturas de dados, ponteiros, recursividade)
- Prova 3: 25% (Algoritmos de ordenação, árvores, grafos)
- Exercícios: 15% (Listas práticas com implementações)
- Projeto Final: 10% (Sistema completo demonstrando todos os conceitos)

💻 LINGUAGENS E FERRAMENTAS:
- Linguagem C: Implementações de baixo nível, controle de memória, ponteiros
- Python: Prototipagem rápida, análise de dados, comparações
- Compiladores: GCC para C, Python 3.8+ 
- Ferramentas: Git, debuggers, profilers de performance

⏰ CRONOGRAMA DETALHADO:
- Semanas 1-4: Fundamentos (Aulas 01-04) - Base teórica sólida
- Semanas 5-8: Recursividade (Aulas 05-06) + Prova 1
- Semanas 9-12: Algoritmos de Ordenação (Aulas 07-08) + Análise prática
- Semanas 13-16: Estruturas Avançadas (Aulas 09-12) + Prova 2
- Semanas 17-20: Laboratório e Projetos (Aulas 13-14) + Prova 3

🎓 METODOLOGIA PEDAGÓGICA:
- Abordagem rigorosa com fundamentação matemática
- Teoria sempre acompanhada de implementações práticas
- Análise comparativa com benchmarks e medições reais
- Desenvolvimento incremental de complexidade
- Foco na compreensão profunda dos conceitos

🤖 DIRETRIZES PARA RESPOSTA:
1. Seja ALTAMENTE TÉCNICO e PRECISO
2. Use exemplos de código em C e Python quando relevante
3. Explique a complexidade algorítmica (Big-O, Omega, Theta)
4. Relacione conceitos com o conteúdo específico das aulas
5. Ofereça múltiplas perspectivas (teórica, prática, comparativa)
6. Use emojis relevantes para melhor engajamento
7. Sugira exercícios práticos quando apropriado
8. Referencie as aulas específicas quando aplicável
9. Seja didático mas mantenha rigor acadêmico
10. Ajude com debugging e otimização de código

Você tem conhecimento COMPLETO de todo o material da disciplina e pode ajudar desde conceitos básicos até implementações avançadas. Seja proativo em sugerir melhorias e extensões dos tópicos discutidos.
`;

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const suggestions = [
    '🎯 Explique Big-O, Omega e Theta com exemplos práticos',
    '🔄 Implemente fatorial recursivo vs iterativo em C e Python',
    '⚡ Compare Merge Sort O(n log n) vs Quick Sort - quando usar cada um?',
    '🌳 Como implementar uma BST com inserção, busca e remoção?',
    '📝 Resolva exercício: encontrar complexidade de loops aninhados',
    '🚀 Quando usar ponteiros vs referências? Mostre exemplos',
    '🔍 Implemente busca binária recursiva e iterativa',
    '⚖️ Fibonacci recursivo é O(2^n) - mostre a versão O(n)',
    '🏗️ Crie um array dinâmico completo com realloc em C',
    '📊 Análise de complexidade: melhor caso, pior caso, caso médio',
    '🎭 Backtracking: problema das N-Rainhas passo a passo',
    '🌲 Percursos em árvores: in-order, pre-order, post-order',
    '🔢 Torres de Hanói: análise matemática e implementação',
    '📈 Árvores AVL: rotações simples e duplas com exemplos',
    '🗺️ Grafos: DFS vs BFS - implementação e aplicações'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Função para limpar o chat completamente
  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
    // Adicionar mensagem de confirmação
    setTimeout(() => {
      const clearMessage = { 
        text: 'Chat limpo! 🧹 Histórico de contexto também foi removido. Você pode começar uma nova conversa.', 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: '✨ <strong>Chat limpo!</strong> 🧹 Histórico de contexto também foi removido. Você pode começar uma nova conversa.'
      };
      setMessages([clearMessage]);
    }, 300);
  };

  // Função para limpar apenas as mensagens visíveis (manter histórico para contexto)
  const clearMessages = () => {
    setMessages([]);
    // Adicionar mensagem de confirmação
    setTimeout(() => {
      const clearMessage = { 
        text: 'Mensagens removidas! 🧹 O histórico de contexto foi mantido para continuidade da conversa.', 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: '✨ <strong>Mensagens removidas!</strong> 🧹 O histórico de contexto foi mantido para continuidade da conversa.'
      };
      setMessages([clearMessage]);
    }, 300);
  };

  // Função para detectar tópicos na pergunta do usuário
  const detectTopics = (message) => {
    const topics = [];
    const messageLower = message.toLowerCase();
    
    // Detectar tópicos específicos para adicionar contexto relevante
    if (messageLower.includes('complexidade') || messageLower.includes('big-o') || 
        messageLower.includes('análise') || messageLower.includes('notação')) {
      topics.push('complexidade');
    }
    if (messageLower.includes('recursiv') || messageLower.includes('fatorial') || 
        messageLower.includes('fibonacci') || messageLower.includes('hanoi')) {
      topics.push('recursividade');
    }
    if (messageLower.includes('sort') || messageLower.includes('ordenação') || 
        messageLower.includes('bubble') || messageLower.includes('quick') || 
        messageLower.includes('merge')) {
      topics.push('ordenacao');
    }
    if (messageLower.includes('árvore') || messageLower.includes('bst') || 
        messageLower.includes('avl') || messageLower.includes('percurso')) {
      topics.push('arvores');
    }
    if (messageLower.includes('grafo') || messageLower.includes('dfs') || 
        messageLower.includes('bfs') || messageLower.includes('dijkstra')) {
      topics.push('grafos');
    }
    if (messageLower.includes('ponteiro') || messageLower.includes('array') || 
        messageLower.includes('struct') || messageLower.includes('malloc')) {
      topics.push('estruturas');
    }
    
    return topics;
  };

  const callGeminiAPI = async (message) => {
    // Detectar tópicos relevantes
    const detectedTopics = detectTopics(message);
    
    // Construir contexto inteligente baseado nos tópicos
    let enhancedContext = COURSE_CONTEXT;
    
    // Adicionar contexto específico baseado nos tópicos detectados
    if (detectedTopics.includes('complexidade')) {
      enhancedContext += `\n\n🔍 FOCO ESPECIAL EM ANÁLISE DE COMPLEXIDADE:
      - Big-O (limite superior): O(f(n)) - pior caso
      - Omega (limite inferior): Ω(f(n)) - melhor caso  
      - Theta (limite exato): Θ(f(n)) - todos os casos
      - Regras: somar loops sequenciais, multiplicar loops aninhados
      - Complexidades comuns: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n), O(n!)`;
    }
    
    if (detectedTopics.includes('recursividade')) {
      enhancedContext += `\n\n🔄 FOCO ESPECIAL EM RECURSIVIDADE:
      - Componentes: caso base, caso recursivo, convergência
      - Evitar: stack overflow, complexidade exponencial desnecessária
      - Torres de Hanói: 2^n - 1 movimentos, T(n) = 2*T(n-1) + 1
      - Fibonacci iterativo: O(n) vs recursivo: O(2^n)
      - Backtracking: tentativa e erro com retrocesso inteligente`;
    }
    
    let contextWithHistory = enhancedContext + "\n\n📝 HISTÓRICO DA CONVERSA:\n";
    chatHistory.slice(-8).forEach(item => {
      contextWithHistory += `${item.role === 'user' ? '👤 USUÁRIO' : '🤖 ASSISTENTE'}: ${item.content}\n`;
    });
    contextWithHistory += `\n👤 USUÁRIO: ${message}\n🤖 ASSISTENTE:`;

    const requestBody = {
      contents: [{
        parts: [{
          text: contextWithHistory
        }]
      }],
      generationConfig: {
        temperature: 0.3, // Mais determinístico para respostas técnicas
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 3000, // Mais tokens para respostas detalhadas
        candidateCount: 1,
        stopSequences: []
      }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Atualizar histórico
      setChatHistory(prev => [
        ...prev.slice(-18), // Manter últimas 18 mensagens
        { role: 'user', content: message },
        { role: 'assistant', content: aiResponse }
      ]);
      
      return aiResponse;
    } else {
      throw new Error('Resposta inválida da API');
    }
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #e83e8c;">$1</code>')
      .replace(/\n/g, '<br>')
      .replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre style="background: #2d3748; color: #e2e8f0; padding: 15px; border-radius: 8px; overflow-x: auto; margin: 10px 0;"><code>${code.trim()}</code></pre>`;
      });
  };

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { 
      text, 
      sender: 'user', 
      timestamp: new Date(),
      formatted: text
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await callGeminiAPI(text);
      const assistantMessage = { 
        text: response, 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: formatMessage(response)
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao chamar API:', error);
      const errorMessage = { 
        text: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.', 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.'
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    // Atalho: Ctrl+L ou Cmd+L para limpar chat
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
      e.preventDefault();
      clearMessages();
    }
    // Atalho: Ctrl+Shift+L ou Cmd+Shift+L para limpar tudo
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
      e.preventDefault();
      clearChat();
    }
  };

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🤖 IA Assistant - Algoritmos e Complexidade
      </Typography>

      <Paper sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        p: 3, 
        mb: 3, 
        borderRadius: '15px' 
      }}>
        <Typography variant="h6" gutterBottom>
          🤖 Assistente IA Especializado - Algoritmos e Complexidade
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sou seu expert virtual na disciplina <strong>ARA0174</strong> com Professor Vagner Cordeiro. 
          Tenho conhecimento completo de todas as aulas e posso ajudar com:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {[
            '🎯 Análise de Complexidade (Big-O, Ω, Θ)',
            '🔄 Algoritmos Recursivos & Backtracking',
            '⚡ Algoritmos de Ordenação (Merge, Quick, etc)',
            '🌳 Árvores Binárias & AVL',
            '🗺️ Grafos (DFS, BFS)',
            '💻 Implementações em C e Python',
            '📝 Resolução de Exercícios',
            '🏗️ Estruturas de Dados Avançadas'
          ].map((skill, idx) => (
            <Chip 
              key={idx} 
              label={skill} 
              size="small" 
              sx={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontSize: '0.7rem'
              }} 
            />
          ))}
        </Box>
      </Paper>

      <Box sx={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
        {/* Header com botões de controle */}
        {messages.length > 0 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 2,
            p: 2,
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '10px'
          }}>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
              💬 {messages.length} mensagem{messages.length !== 1 ? 's' : ''} na conversa
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Limpar mensagens visíveis (manter contexto)">
                <IconButton 
                  onClick={clearMessages}
                  size="small"
                  sx={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    color: '#ff9800',
                    '&:hover': {
                      background: 'rgba(255, 193, 7, 0.2)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Limpar tudo (mensagens + histórico de contexto)">
                <IconButton 
                  onClick={clearChat}
                  size="small"
                  sx={{
                    background: 'rgba(244, 67, 54, 0.1)',
                    color: '#f44336',
                    '&:hover': {
                      background: 'rgba(244, 67, 54, 0.2)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <DeleteSweepIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        )}
        
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '20px', 
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '15px',
          mb: 2
        }}>
          {messages.length === 0 && (
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#667eea', fontWeight: 'bold' }}>
                🚀 Perguntas Inteligentes para Começar
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
                Clique em qualquer pergunta abaixo para obter explicações detalhadas com exemplos de código:
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
                {suggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                      color: '#667eea',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      padding: '12px 16px',
                      height: 'auto',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      border: '1px solid rgba(102, 126, 234, 0.2)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }
                    }}
                  />
                ))}
              </Box>
              <Typography variant="caption" sx={{ display: 'block', mt: 2, color: '#999', fontStyle: 'italic' }}>
                💡 Dica: Faça perguntas específicas para obter respostas mais detalhadas e exemplos práticos!
              </Typography>
            </Box>
          )}
          
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                marginBottom: '15px',
                alignItems: 'flex-start',
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <Box sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                margin: '0 10px',
                flexShrink: 0,
                background: message.sender === 'user' 
                  ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
                  : 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
                color: 'white'
              }}>
                {message.sender === 'user' ? '👤' : '🤖'}
              </Box>
              <Paper sx={{
                maxWidth: '70%',
                padding: '15px 20px',
                borderRadius: '20px',
                position: 'relative',
                lineHeight: 1.5,
                background: message.sender === 'user'
                  ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
                  : 'white',
                color: message.sender === 'user' ? 'white' : '#2c3e50',
                borderBottomRightRadius: message.sender === 'user' ? '5px' : '20px',
                borderBottomLeftRadius: message.sender === 'assistant' ? '5px' : '20px',
                boxShadow: message.sender === 'assistant' ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
              }}>
                <Typography 
                  component="div"
                  dangerouslySetInnerHTML={{ __html: message.formatted || message.text }} 
                />
                <Typography variant="caption" sx={{ 
                  opacity: 0.7,
                  marginTop: '5px',
                  display: 'block'
                }}>
                  {message.timestamp.toLocaleTimeString()}
                </Typography>
              </Paper>
            </Box>
          ))}
          
          {loading && (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 20px',
              background: 'white',
              borderRadius: '20px',
              borderBottomLeftRadius: '5px',
              marginLeft: '50px',
              marginBottom: '15px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}>
              <CircularProgress size={20} />
              <Typography variant="body2">Pensando... 🤔</Typography>
            </Box>
          )}
          
          <div ref={messagesEndRef} />
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          gap: '10px', 
          alignItems: 'flex-end',
          paddingTop: '20px',
          borderTop: '1px solid #e2e8f0'
        }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="Digite sua pergunta sobre algoritmos, estruturas de dados, exercícios..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
            }}
          />
          <IconButton 
            onClick={() => sendMessage()} 
            disabled={loading || !input.trim()}
            sx={{
              width: 50,
              height: 50,
              ml: 1,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                transform: 'scale(1.05)',
              },
              '&:disabled': {
                opacity: 0.5,
                transform: 'none',
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>

        {/* Atalhos de teclado */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 1,
          gap: 2
        }}>
          <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
            ⌨️ <strong>Enter:</strong> Enviar | <strong>Shift+Enter:</strong> Nova linha
          </Typography>
          <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
            🧹 <strong>Ctrl+L:</strong> Limpar chat | <strong>Ctrl+Shift+L:</strong> Limpar tudo
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatSection;