import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Paper
} from '@mui/material';
import {
  Close as CloseIcon,
  ArrowBack as PrevIcon,
  ArrowForward as NextIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const aulasData = {
  'aula01': {
    title: '📘 Aula 01: Algoritmos - Funções e Passagem de Parâmetros',
    pdf: '/aulas/pdf/aula01.pdf',
    content: `
    <h1>Aula 01: Algoritmos - Funções e Passagem de Parâmetros</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#conceitos">1. Conceitos Fundamentais de Algoritmos</a></li>
        <li><a href="#funcoes">2. Funções em Algoritmos</a></li>
        <li><a href="#parametros">3. Passagem de Parâmetros</a></li>
        <li><a href="#escopo">4. Escopo de Variáveis</a></li>
        <li><a href="#exemplos">5. Exemplos Práticos</a></li>
        <li><a href="#exercicios">6. Exercícios</a></li>
    </ul>

    <h2 id="conceitos">1. Conceitos Fundamentais de Algoritmos</h2>

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

    <h2 id="funcoes">2. Funções em Algoritmos</h2>

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

    <h2 id="parametros">3. Passagem de Parâmetros</h2>

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

    <h2 id="escopo">4. Escopo de Variáveis</h2>

    <h3>4.1 Variáveis Locais</h3>
    <p>Variáveis declaradas dentro de uma função são <strong>locais</strong> e só existem durante a execução da função.</p>

    <h3>4.2 Variáveis Globais</h3>
    <p>Variáveis declaradas fora de qualquer função são <strong>globais</strong> e podem ser acessadas por qualquer função do programa.</p>

    <h3>4.3 Exemplo de Escopo</h3>
    <pre><code>#include &lt;stdio.h&gt;

int global = 100; // Variável global

void funcao_teste() {
    int local = 50; // Variável local
    printf("Dentro da função - Global: %d, Local: %d\\n", global, local);
    global = 200; // Modifica variável global
}

int main() {
    printf("Antes da função - Global: %d\\n", global);
    funcao_teste();
    printf("Depois da função - Global: %d\\n", global);
    // printf("Local: %d\\n", local); // ERRO! local não existe aqui
    return 0;
}</code></pre>

    <h2 id="exemplos">5. Exemplos Práticos</h2>

    <h3>5.1 Calculadora Simples</h3>
    <pre><code>#include &lt;stdio.h&gt;

float somar(float a, float b) {
    return a + b;
}

float subtrair(float a, float b) {
    return a - b;
}

float multiplicar(float a, float b) {
    return a * b;
}

float dividir(float a, float b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("Erro: Divisão por zero!\\n");
        return 0;
    }
}

int main() {
    float num1, num2;
    char operador;
    
    printf("Digite dois números e um operador (+, -, *, /): ");
    scanf("%f %f %c", &num1, &num2, &operador);
    
    switch (operador) {
        case '+':
            printf("%.2f + %.2f = %.2f\\n", num1, num2, somar(num1, num2));
            break;
        case '-':
            printf("%.2f - %.2f = %.2f\\n", num1, num2, subtrair(num1, num2));
            break;
        case '*':
            printf("%.2f * %.2f = %.2f\\n", num1, num2, multiplicar(num1, num2));
            break;
        case '/':
            printf("%.2f / %.2f = %.2f\\n", num1, num2, dividir(num1, num2));
            break;
        default:
            printf("Operador inválido!\\n");
    }
    
    return 0;
}</code></pre>

    <h3>5.2 Função para Verificar Número Primo</h3>
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int eh_primo(int numero) {
    if (numero <= 1) return 0;
    if (numero <= 3) return 1;
    if (numero % 2 == 0 || numero % 3 == 0) return 0;
    
    for (int i = 5; i * i <= numero; i += 6) {
        if (numero % i == 0 || numero % (i + 2) == 0) {
            return 0;
        }
    }
    return 1;
}

int main() {
    int num;
    printf("Digite um número: ");
    scanf("%d", &num);
    
    if (eh_primo(num)) {
        printf("%d é um número primo.\\n", num);
    } else {
        printf("%d não é um número primo.\\n", num);
    }
    
    return 0;
}</code></pre>

    <h2 id="exercicios">6. Exercícios</h2>

    <h3>Exercício 1</h3>
    <p>Implemente uma função que receba três números e retorne o maior deles.</p>

    <h3>Exercício 2</h3>
    <p>Crie uma função que calcule o fatorial de um número usando iteração.</p>

    <h3>Exercício 3</h3>
    <p>Desenvolva uma função que receba um array e seu tamanho, e retorne a média dos elementos.</p>

    <h3>Exercício 4</h3>
    <p>Implemente funções para converter temperatura entre Celsius, Fahrenheit e Kelvin.</p>

    <h3>Exercício 5</h3>
    <p>Crie uma função que verifique se uma string é palíndromo (usando ponteiros).</p>
    `
  },
  'aula02': {
    title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
    pdf: '/aulas/pdf/aula02.pdf',
    content: `
    <h1>Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#conceitos">1. Estruturas de Dados: Conceitos Fundamentais</a></li>
        <li><a href="#homogeneas">2. Estruturas Homogêneas (Arrays)</a></li>
        <li><a href="#ponteiros">3. Ponteiros: Conceitos Avançados</a></li>
        <li><a href="#heterogeneas">4. Estruturas Heterogêneas (Structs)</a></li>
        <li><a href="#matrizes">5. Matrizes e Arrays Bidimensionais</a></li>
        <li><a href="#exemplos">6. Exemplos Práticos</a></li>
    </ul>

    <h2 id="conceitos">1. Estruturas de Dados: Conceitos Fundamentais</h2>

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

    <h2 id="homogeneas">2. Arrays (Vetores) - Estruturas Homogêneas</h2>

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

    <h3>Operações Fundamentais</h3>
    <pre><code>#include &lt;stdio.h&gt;

// Busca linear em array
int busca_linear(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i; // Retorna índice
        }
    }
    return -1; // Não encontrado
}

// Inserção em posição específica
void inserir_elemento(int arr[], int *n, int pos, int valor) {
    for (int i = *n; i > pos; i--) {
        arr[i] = arr[i-1];
    }
    arr[pos] = valor;
    (*n)++;
}

// Remoção de elemento
void remover_elemento(int arr[], int *n, int pos) {
    for (int i = pos; i < *n - 1; i++) {
        arr[i] = arr[i+1];
    }
    (*n)--;
}</code></pre>

    <h2 id="ponteiros">3. Ponteiros: Conceitos Avançados</h2>

    <h3>Definição Formal</h3>
    <p>Um ponteiro é uma abstração para endereçamento indireto:</p>
    <p><strong>ptr: Endereço → Valor</strong></p>

    <h3>Aritmética de Ponteiros</h3>
    <pre><code>int array[5] = {10, 20, 30, 40, 50};
int *p = array;  // p aponta para array[0]

// Navegação por aritmética
printf("p[0] = %d\\n", *p);        // 10
printf("p[1] = %d\\n", *(p+1));    // 20  
printf("p[2] = %d\\n", *(p+2));    // 30

// Equivalências importantes
*(p+i) ≡ p[i] ≡ array[i]</code></pre>

    <h3>Ponteiros e Funções</h3>
    <pre><code>#include &lt;stdio.h&gt;

// Função que modifica array via ponteiro
void dobrar_valores(int *arr, int n) {
    for (int i = 0; i < n; i++) {
        arr[i] *= 2;  // Modifica o array original
    }
}

// Função que retorna ponteiro para maior elemento
int* encontrar_maior(int *arr, int n) {
    int *maior = arr;
    for (int i = 1; i < n; i++) {
        if (arr[i] > *maior) {
            maior = &arr[i];
        }
    }
    return maior;
}

int main() {
    int numeros[] = {3, 7, 2, 9, 1};
    int n = 5;
    
    printf("Array original: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", numeros[i]);
    }
    
    int *ptr_maior = encontrar_maior(numeros, n);
    printf("\\nMaior elemento: %d\\n", *ptr_maior);
    
    dobrar_valores(numeros, n);
    printf("Array dobrado: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", numeros[i]);
    }
    
    return 0;
}</code></pre>

    <h2 id="heterogeneas">4. Estruturas Heterogêneas (Structs)</h2>

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

// Usando typedef para simplificar
typedef struct {
    double x, y, z;
} Ponto3D;</code></pre>

    <h3>Operações com Structs</h3>
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

typedef struct {
    double x, y;
} Ponto2D;

// Função que calcula distância entre pontos
double distancia(Ponto2D p1, Ponto2D p2) {
    double dx = p2.x - p1.x;
    double dy = p2.y - p1.y;
    return sqrt(dx*dx + dy*dy);
}

// Função que move um ponto
void mover_ponto(Ponto2D *p, double dx, double dy) {
    p->x += dx;
    p->y += dy;
}

int main() {
    Ponto2D origem = {0.0, 0.0};
    Ponto2D destino = {3.0, 4.0};
    
    printf("Distância: %.2f\\n", distancia(origem, destino));
    
    mover_ponto(&origem, 1.0, 1.0);
    printf("Nova origem: (%.1f, %.1f)\\n", origem.x, origem.y);
    
    return 0;
}</code></pre>

    <h3>Arrays de Structs</h3>
    <pre><code>typedef struct {
    char nome[50];
    int idade;
    float nota;
} Aluno;

int main() {
    Aluno turma[3] = {
        {"João", 20, 8.5},
        {"Maria", 19, 9.0},
        {"Pedro", 21, 7.5}
    };
    
    // Buscar aluno com maior nota
    float maior_nota = turma[0].nota;
    int indice_melhor = 0;
    
    for (int i = 1; i < 3; i++) {
        if (turma[i].nota > maior_nota) {
            maior_nota = turma[i].nota;
            indice_melhor = i;
        }
    }
    
    printf("Melhor aluno: %s (%.1f)\\n", 
           turma[indice_melhor].nome, 
           turma[indice_melhor].nota);
    
    return 0;
}</code></pre>

    <h2 id="matrizes">5. Matrizes e Arrays Bidimensionais</h2>

    <h3>Endereçamento</h3>
    <p><strong>Row-major order (C):</strong></p>
    <p>endereco(M[i][j]) = base + (i × n + j) × sizeof(T)</p>

    <h3>Implementação e Operações</h3>
    <pre><code>#include &lt;stdio.h&gt;

// Declaração de matrizes
int matriz_fixa[3][4];
int matriz_inicializada[2][3] = {{1,2,3}, {4,5,6}};

// Função para imprimir matriz
void imprimir_matriz(int mat[][4], int linhas, int colunas) {
    for (int i = 0; i < linhas; i++) {
        for (int j = 0; j < colunas; j++) {
            printf("%4d", mat[i][j]);
        }
        printf("\\n");
    }
}

// Multiplicação de matrizes
void multiplicar_matrizes(int A[][3], int B[][3], int C[][3], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = 0;
            for (int k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

// Busca em matriz ordenada
int buscar_matriz_ordenada(int mat[][4], int linhas, int colunas, int x) {
    int i = 0, j = colunas - 1;
    
    while (i < linhas && j >= 0) {
        if (mat[i][j] == x) {
            return 1; // Encontrado
        } else if (mat[i][j] > x) {
            j--;      // Move para esquerda
        } else {
            i++;      // Move para baixo
        }
    }
    return 0; // Não encontrado
}</code></pre>

    <h2 id="exemplos">6. Exemplos Práticos</h2>

    <h3>6.1 Sistema de Gerenciamento de Produtos</h3>
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

#define MAX_PRODUTOS 100

typedef struct {
    int codigo;
    char nome[50];
    float preco;
    int estoque;
} Produto;

typedef struct {
    Produto produtos[MAX_PRODUTOS];
    int total;
} Estoque;

// Adicionar produto
void adicionar_produto(Estoque *est, int codigo, char *nome, float preco, int quantidade) {
    if (est->total < MAX_PRODUTOS) {
        Produto *p = &est->produtos[est->total];
        p->codigo = codigo;
        strcpy(p->nome, nome);
        p->preco = preco;
        p->estoque = quantidade;
        est->total++;
    }
}

// Buscar produto por código
Produto* buscar_produto(Estoque *est, int codigo) {
    for (int i = 0; i < est->total; i++) {
        if (est->produtos[i].codigo == codigo) {
            return &est->produtos[i];
        }
    }
    return NULL;
}

// Listar produtos
void listar_produtos(Estoque *est) {
    printf("Código | Nome                | Preço   | Estoque\\n");
    printf("-------|--------------------|---------|---------\\n");
    for (int i = 0; i < est->total; i++) {
        Produto *p = &est->produtos[i];
        printf("%6d | %-18s | %7.2f | %7d\\n", 
               p->codigo, p->nome, p->preco, p->estoque);
    }
}

int main() {
    Estoque estoque = {0};
    
    adicionar_produto(&estoque, 1001, "Notebook", 2500.00, 10);
    adicionar_produto(&estoque, 1002, "Mouse", 50.00, 100);
    adicionar_produto(&estoque, 1003, "Teclado", 150.00, 50);
    
    listar_produtos(&estoque);
    
    Produto *p = buscar_produto(&estoque, 1002);
    if (p != NULL) {
        printf("\\nProduto encontrado: %s - R$ %.2f\\n", p->nome, p->preco);
    }
    
    return 0;
}</code></pre>

    <h3>6.2 Jogo da Velha</h3>
    <pre><code>#include &lt;stdio.h&gt;

#define TAMANHO 3

typedef struct {
    char tabuleiro[TAMANHO][TAMANHO];
    char jogador_atual;
} JogoDaVelha;

// Inicializar jogo
void inicializar_jogo(JogoDaVelha *jogo) {
    for (int i = 0; i < TAMANHO; i++) {
        for (int j = 0; j < TAMANHO; j++) {
            jogo->tabuleiro[i][j] = ' ';
        }
    }
    jogo->jogador_atual = 'X';
}

// Imprimir tabuleiro
void imprimir_tabuleiro(JogoDaVelha *jogo) {
    printf("\\n  0   1   2\\n");
    for (int i = 0; i < TAMANHO; i++) {
        printf("%d", i);
        for (int j = 0; j < TAMANHO; j++) {
            printf(" %c ", jogo->tabuleiro[i][j]);
            if (j < TAMANHO - 1) printf("|");
        }
        printf("\\n");
        if (i < TAMANHO - 1) printf("  -----------\\n");
    }
    printf("\\n");
}

// Verificar vitória
int verificar_vitoria(JogoDaVelha *jogo) {
    char (*t)[TAMANHO] = jogo->tabuleiro;
    
    // Verificar linhas e colunas
    for (int i = 0; i < TAMANHO; i++) {
        if ((t[i][0] == t[i][1] && t[i][1] == t[i][2] && t[i][0] != ' ') ||
            (t[0][i] == t[1][i] && t[1][i] == t[2][i] && t[0][i] != ' ')) {
            return 1;
        }
    }
    
    // Verificar diagonais
    if ((t[0][0] == t[1][1] && t[1][1] == t[2][2] && t[0][0] != ' ') ||
        (t[0][2] == t[1][1] && t[1][1] == t[2][0] && t[0][2] != ' ')) {
        return 1;
    }
    
    return 0;
}

int main() {
    JogoDaVelha jogo;
    inicializar_jogo(&jogo);
    
    int linha, coluna;
    int jogadas = 0;
    
    while (jogadas < 9) {
        imprimir_tabuleiro(&jogo);
        printf("Jogador %c, escolha posição (linha coluna): ", jogo.jogador_atual);
        scanf("%d %d", &linha, &coluna);
        
        if (linha >= 0 && linha < TAMANHO && coluna >= 0 && coluna < TAMANHO &&
            jogo.tabuleiro[linha][coluna] == ' ') {
            
            jogo.tabuleiro[linha][coluna] = jogo.jogador_atual;
            jogadas++;
            
            if (verificar_vitoria(&jogo)) {
                imprimir_tabuleiro(&jogo);
                printf("Jogador %c venceu!\\n", jogo.jogador_atual);
                break;
            }
            
            jogo.jogador_atual = (jogo.jogador_atual == 'X') ? 'O' : 'X';
        } else {
            printf("Posição inválida! Tente novamente.\\n");
        }
    }
    
    if (jogadas == 9) {
        imprimir_tabuleiro(&jogo);
        printf("Empate!\\n");
    }
    
    return 0;
}</code></pre>
    `
  },
  'aula03': {
    title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
    pdf: '/aulas/pdf/aula03.pdf',
    content: `
    <h1>Aula 03: Análise de Algoritmos e Prática de Análise</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#introducao">1. Introdução à Análise de Algoritmos</a></li>
        <li><a href="#notacoes">2. Notações Assintóticas</a></li>
        <li><a href="#complexidade">3. Análise de Complexidade</a></li>
        <li><a href="#casos">4. Casos de Análise</a></li>
        <li><a href="#exemplos">5. Exemplos Práticos</a></li>
        <li><a href="#hierarquia">6. Hierarquia de Complexidades</a></li>
    </ul>

    <h2 id="introducao">1. Introdução à Análise de Algoritmos</h2>

    <h3>1.1 Por que Analisar Algoritmos?</h3>
    <ul>
        <li><strong>Predizer performance</strong>: Estimar tempo de execução</li>
        <li><strong>Comparar algoritmos</strong>: Escolher a melhor solução</li>
        <li><strong>Identificar gargalos</strong>: Pontos de otimização</li>
        <li><strong>Escalar soluções</strong>: Comportamento com dados grandes</li>
    </ul>

    <h3>1.2 Recursos Computacionais</h3>
    <ul>
        <li><strong>Tempo</strong>: Número de operações executadas</li>
        <li><strong>Espaço</strong>: Quantidade de memória utilizada</li>
        <li><strong>Comunicação</strong>: Dados transferidos (sistemas distribuídos)</li>
        <li><strong>Energia</strong>: Consumo energético (dispositivos móveis)</li>
    </ul>

    <h2 id="notacoes">2. Notações Assintóticas</h2>

    <h3>2.1 Notação Big-O (O)</h3>
    <p>Define o <strong>limite superior</strong> do crescimento de uma função.</p>
    <p><strong>Definição formal:</strong> f(n) = O(g(n)) se existem constantes c > 0 e n₀ ≥ 0 tais que f(n) ≤ c·g(n) para todo n ≥ n₀</p>

    <h4>Exemplo:</h4>
    <pre><code>f(n) = 3n² + 5n + 2
f(n) = O(n²) porque 3n² + 5n + 2 ≤ 4n² para n ≥ 6</code></pre>

    <h3>2.2 Notação Omega (Ω)</h3>
    <p>Define o <strong>limite inferior</strong> do crescimento de uma função.</p>
    <p><strong>Definição formal:</strong> f(n) = Ω(g(n)) se existem constantes c > 0 e n₀ ≥ 0 tais que f(n) ≥ c·g(n) para todo n ≥ n₀</p>

    <h3>2.3 Notação Theta (Θ)</h3>
    <p>Define o <strong>limite exato</strong> do crescimento de uma função.</p>
    <p><strong>Definição formal:</strong> f(n) = Θ(g(n)) se f(n) = O(g(n)) e f(n) = Ω(g(n))</p>

    <h3>2.4 Propriedades das Notações</h3>
    <ul>
        <li><strong>Transitividade:</strong> Se f = O(g) e g = O(h), então f = O(h)</li>
        <li><strong>Reflexividade:</strong> f = O(f)</li>
        <li><strong>Simetria (Θ):</strong> Se f = Θ(g), então g = Θ(f)</li>
    </ul>

    <h2 id="complexidade">3. Análise de Complexidade</h2>

    <h3>3.1 Complexidade de Tempo</h3>
    <p>Mede o <strong>número de operações elementares</strong> executadas pelo algoritmo.</p>

    <h4>Exemplo: Busca Linear</h4>
    <pre><code>int busca_linear(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {        // n+1 comparações
        if (arr[i] == x) {               // n comparações (pior caso)
            return i;                    // 1 operação
        }
    }
    return -1;                           // 1 operação
}
// Complexidade: O(n)</code></pre>

    <h4>Análise detalhada:</h4>
    <ul>
        <li><strong>Melhor caso:</strong> Elemento na primeira posição → O(1)</li>
        <li><strong>Pior caso:</strong> Elemento na última posição ou ausente → O(n)</li>
        <li><strong>Caso médio:</strong> Elemento em posição aleatória → O(n/2) = O(n)</li>
    </ul>

    <h3>3.2 Complexidade de Espaço</h3>
    <p>Mede a <strong>quantidade de memória adicional</strong> usada pelo algoritmo.</p>

    <h4>Exemplo: Soma Recursiva</h4>
    <pre><code>int soma_recursiva(int n) {
    if (n <= 0) return 0;               // Caso base
    return n + soma_recursiva(n-1);     // Chamada recursiva
}
// Complexidade de espaço: O(n) - pilha de recursão</code></pre>

    <h3>3.3 Técnicas de Análise</h3>

    <h4>Método de Contagem</h4>
    <pre><code>void exemplo_contagem(int n) {
    int count = 0;
    
    for (int i = 0; i < n; i++) {       // n iterações
        for (int j = 0; j < n; j++) {   // n iterações para cada i
            count++;                    // 1 operação
        }
    }
    // Total: n × n × 1 = n² operações → O(n²)
}</code></pre>

    <h4>Método de Somatórios</h4>
    <pre><code>void exemplo_somatorio(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            // operação O(1)
        }
    }
    // Análise: Σ(i=1 to n) i = n(n+1)/2 = O(n²)
}</code></pre>

    <h2 id="casos">4. Casos de Análise</h2>

    <h3>4.1 Melhor Caso</h3>
    <p>Entrada que resulta no <strong>menor tempo de execução</strong>.</p>

    <h3>4.2 Pior Caso</h3>
    <p>Entrada que resulta no <strong>maior tempo de execução</strong>.</p>

    <h3>4.3 Caso Médio</h3>
    <p><strong>Tempo esperado</strong> considerando todas as entradas possíveis.</p>

    <h4>Exemplo: Insertion Sort</h4>
    <pre><code>void insertion_sort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}</code></pre>

    <ul>
        <li><strong>Melhor caso:</strong> Array já ordenado → O(n)</li>
        <li><strong>Pior caso:</strong> Array em ordem decrescente → O(n²)</li>
        <li><strong>Caso médio:</strong> Array aleatório → O(n²)</li>
    </ul>

    <h2 id="exemplos">5. Exemplos Práticos</h2>

    <h3>5.1 Bubble Sort</h3>
    <pre><code>void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {          // n-1 iterações
        for (int j = 0; j < n-i-1; j++) {    // (n-i-1) iterações
            if (arr[j] > arr[j+1]) {
                // Troca elementos
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
// Análise: Σ(i=0 to n-2) (n-i-1) = (n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²)</code></pre>

    <h3>5.2 Busca Binária</h3>
    <pre><code>int busca_binaria(int arr[], int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        
        if (arr[mid] == x) return mid;
        
        if (arr[mid] > x)
            return busca_binaria(arr, l, mid-1, x);
        
        return busca_binaria(arr, mid+1, r, x);
    }
    return -1;
}
// Análise: T(n) = T(n/2) + O(1) → T(n) = O(log n)</code></pre>

    <h3>5.3 Multiplicação de Matrizes</h3>
    <pre><code>void multiplicar_matrizes(int A[][N], int B[][N], int C[][N], int n) {
    for (int i = 0; i < n; i++) {        // n iterações
        for (int j = 0; j < n; j++) {    // n iterações
            C[i][j] = 0;
            for (int k = 0; k < n; k++) { // n iterações
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}
// Complexidade: O(n³)</code></pre>

    <h3>5.4 Fibonacci Recursivo vs Iterativo</h3>
    <pre><code>// Versão recursiva - INEFICIENTE
int fib_recursivo(int n) {
    if (n <= 1) return n;
    return fib_recursivo(n-1) + fib_recursivo(n-2);
}
// Complexidade: O(2ⁿ)

// Versão iterativa - EFICIENTE  
int fib_iterativo(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// Complexidade: O(n)</code></pre>

    <h2 id="hierarquia">6. Hierarquia de Complexidades</h2>

    <h3>6.1 Ordem Crescente de Complexidade</h3>
    <ol>
        <li><strong>O(1)</strong> - Constante</li>
        <li><strong>O(log n)</strong> - Logarítmica</li>
        <li><strong>O(n)</strong> - Linear</li>
        <li><strong>O(n log n)</strong> - Linearítmica</li>
        <li><strong>O(n²)</strong> - Quadrática</li>
        <li><strong>O(n³)</strong> - Cúbica</li>
        <li><strong>O(2ⁿ)</strong> - Exponencial</li>
        <li><strong>O(n!)</strong> - Fatorial</li>
    </ol>

    <h3>6.2 Comparação Prática</h3>
    <table>
        <tr>
            <th>n</th>
            <th>O(1)</th>
            <th>O(log n)</th>
            <th>O(n)</th>
            <th>O(n log n)</th>
            <th>O(n²)</th>
            <th>O(2ⁿ)</th>
        </tr>
        <tr>
            <td>10</td>
            <td>1</td>
            <td>3</td>
            <td>10</td>
            <td>33</td>
            <td>100</td>
            <td>1024</td>
        </tr>
        <tr>
            <td>100</td>
            <td>1</td>
            <td>7</td>
            <td>100</td>
            <td>664</td>
            <td>10.000</td>
            <td>1.2×10³⁰</td>
        </tr>
        <tr>
            <td>1000</td>
            <td>1</td>
            <td>10</td>
            <td>1000</td>
            <td>9966</td>
            <td>1.000.000</td>
            <td>∞</td>
        </tr>
    </table>

    <h3>6.3 Regras Práticas</h3>
    <ul>
        <li><strong>Constantes são ignoradas:</strong> O(5n) = O(n)</li>
        <li><strong>Termo dominante:</strong> O(n² + n + 1) = O(n²)</li>
        <li><strong>Logaritmos têm base irrelevante:</strong> O(log₂ n) = O(log₁₀ n)</li>
        <li><strong>Multiplicação:</strong> O(f(n)) × O(g(n)) = O(f(n) × g(n))</li>
        <li><strong>Adição:</strong> O(f(n)) + O(g(n)) = O(max(f(n), g(n)))</li>
    </ul>

    <h2>7. Exercícios Práticos</h2>

    <h3>Exercício 1: Análise de Loops</h3>
    <p>Analise a complexidade dos seguintes códigos:</p>
    <pre><code>// Código A
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        printf("%d %d\\n", i, j);
    }
}

// Código B
int i = n;
while (i > 0) {
    for (int j = 0; j < i; j++) {
        printf("%d\\n", j);
    }
    i = i / 2;
}

// Código C
void funcao(int n) {
    if (n <= 1) return;
    for (int i = 0; i < n; i++) {
        printf("%d\\n", i);
    }
    funcao(n/2);
    funcao(n/2);
}</code></pre>

    <h3>Exercício 2: Otimização</h3>
    <p>Otimize o seguinte código para melhorar sua complexidade:</p>
    <pre><code>int contar_pares(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i+1; j < n; j++) {
            if (arr[i] + arr[j] == 0) {
                count++;
            }
        }
    }
    return count;
}</code></pre>

    <h3>Exercício 3: Comparação</h3>
    <p>Compare as complexidades de diferentes algoritmos de ordenação e justifique quando usar cada um.</p>
    `
  },
  'aula04': {
    title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
    pdf: '/aulas/pdf/aula04.pdf',
    content: `
    <h1>Aula 04: Definições Recursivas e Como Implementar Recursividade</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#conceitos">1. Conceitos Fundamentais</a></li>
        <li><a href="#matematicos">2. Exemplos Matemáticos</a></li>
        <li><a href="#arrays">3. Recursão com Arrays</a></li>
        <li><a href="#strings">4. Recursão com Strings</a></li>
        <li><a href="#classicos">5. Problemas Clássicos</a></li>
        <li><a href="#analise">6. Análise de Complexidade</a></li>
        <li><a href="#otimizacoes">7. Otimizações</a></li>
    </ul>

    <h2 id="conceitos">1. Conceitos Fundamentais</h2>

    <h3>1.1 Definição de Recursividade</h3>
    <p>Uma função é <strong>recursiva</strong> quando chama a si mesma para resolver uma versão menor do mesmo problema.</p>

    <h3>1.2 Componentes Essenciais</h3>
    <ul>
        <li><strong>Caso base:</strong> Condição de parada (problema mais simples)</li>
        <li><strong>Caso recursivo:</strong> Chamada da função para problema menor</li>
        <li><strong>Convergência:</strong> Garantia de que chegará ao caso base</li>
        <li><strong>Progresso:</strong> Cada chamada deve simplificar o problema</li>
    </ul>

    <h3>1.3 Estrutura Geral</h3>
    <pre><code>tipo_retorno funcao_recursiva(parametros) {
    // Caso base - condição de parada
    if (condicao_parada) {
        return valor_base;
    }
    
    // Caso recursivo - problema menor
    return combinar(funcao_recursiva(problema_menor));
}</code></pre>

    <h2 id="matematicos">2. Exemplos Matemáticos</h2>

    <h3>2.1 Fatorial</h3>
    <p><strong>Definição matemática:</strong> n! = n × (n-1)!</p>
    <pre><code>int fatorial(int n) {
    // Caso base
    if (n <= 1) {
        return 1;
    }
    // Caso recursivo
    return n * fatorial(n-1);
}

// Exemplo de execução: fatorial(4)
// fatorial(4) = 4 * fatorial(3)
// fatorial(3) = 3 * fatorial(2)  
// fatorial(2) = 2 * fatorial(1)
// fatorial(1) = 1
// Resultado: 4 * 3 * 2 * 1 = 24</code></pre>

    <h3>2.2 Fibonacci</h3>
    <p><strong>Definição matemática:</strong> F(n) = F(n-1) + F(n-2)</p>
    <pre><code>int fibonacci(int n) {
    // Casos base
    if (n <= 1) {
        return n;
    }
    // Caso recursivo
    return fibonacci(n-1) + fibonacci(n-2);
}

// Sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</code></pre>

    <h3>2.3 Potência</h3>
    <p><strong>Definição matemática:</strong> a^n = a × a^(n-1)</p>
    <pre><code>int potencia(int base, int exp) {
    // Caso base
    if (exp == 0) {
        return 1;
    }
    // Caso recursivo
    return base * potencia(base, exp-1);
}

// Versão otimizada (exponenciação rápida)
int potencia_rapida(int base, int exp) {
    if (exp == 0) return 1;
    if (exp == 1) return base;
    
    if (exp % 2 == 0) {
        int temp = potencia_rapida(base, exp/2);
        return temp * temp;
    } else {
        return base * potencia_rapida(base, exp-1);
    }
}
// Complexidade: O(log n) vs O(n)</code></pre>

    <h3>2.4 Máximo Divisor Comum (MDC)</h3>
    <p><strong>Algoritmo de Euclides:</strong> mdc(a,b) = mdc(b, a mod b)</p>
    <pre><code>int mdc(int a, int b) {
    // Caso base
    if (b == 0) {
        return a;
    }
    // Caso recursivo
    return mdc(b, a % b);
}

// Exemplo: mdc(48, 18)
// mdc(48, 18) = mdc(18, 12) = mdc(12, 6) = mdc(6, 0) = 6</code></pre>

    <h2 id="arrays">3. Recursão com Arrays</h2>

    <h3>3.1 Soma de Array</h3>
    <pre><code>int soma_array(int arr[], int n) {
    // Caso base
    if (n <= 0) {
        return 0;
    }
    // Caso recursivo
    return arr[n-1] + soma_array(arr, n-1);
}

// Versão com índices
int soma_array_idx(int arr[], int inicio, int fim) {
    if (inicio > fim) {
        return 0;
    }
    if (inicio == fim) {
        return arr[inicio];
    }
    
    int meio = (inicio + fim) / 2;
    return soma_array_idx(arr, inicio, meio) + 
           soma_array_idx(arr, meio+1, fim);
}</code></pre>

    <h3>3.2 Busca em Array</h3>
    <pre><code>int busca_recursiva(int arr[], int n, int x) {
    // Caso base - não encontrado
    if (n <= 0) {
        return -1;
    }
    // Caso base - encontrado
    if (arr[n-1] == x) {
        return n-1;
    }
    // Caso recursivo
    return busca_recursiva(arr, n-1, x);
}

// Busca binária recursiva
int busca_binaria_rec(int arr[], int l, int r, int x) {
    if (l <= r) {
        int mid = l + (r - l) / 2;
        
        if (arr[mid] == x) return mid;
        
        if (arr[mid] > x) 
            return busca_binaria_rec(arr, l, mid-1, x);
        else
            return busca_binaria_rec(arr, mid+1, r, x);
    }
    return -1;
}</code></pre>

    <h3>3.3 Encontrar Máximo/Mínimo</h3>
    <pre><code>int encontrar_maximo(int arr[], int n) {
    // Caso base
    if (n == 1) {
        return arr[0];
    }
    
    // Caso recursivo
    int max_resto = encontrar_maximo(arr + 1, n - 1);
    return (arr[0] > max_resto) ? arr[0] : max_resto;
}

// Versão divide e conquista
int max_divide_conquista(int arr[], int l, int r) {
    if (l == r) {
        return arr[l];
    }
    
    int mid = (l + r) / 2;
    int max_esq = max_divide_conquista(arr, l, mid);
    int max_dir = max_divide_conquista(arr, mid+1, r);
    
    return (max_esq > max_dir) ? max_esq : max_dir;
}</code></pre>

    <h2 id="strings">4. Recursão com Strings</h2>

    <h3>4.1 Inversão de String</h3>
    <pre><code>void inverte_string(char str[], int inicio, int fim) {
    // Caso base
    if (inicio >= fim) {
        return;
    }
    
    // Troca caracteres
    char temp = str[inicio];
    str[inicio] = str[fim];
    str[fim] = temp;
    
    // Caso recursivo
    inverte_string(str, inicio+1, fim-1);
}

// Versão com um parâmetro
void inverte_simples(char str[], int n) {
    if (n <= 1) return;
    
    char temp = str[0];
    str[0] = str[n-1];
    str[n-1] = temp;
    
    inverte_simples(str+1, n-2);
}</code></pre>

    <h3>4.2 Verificação de Palíndromo</h3>
    <pre><code>int eh_palindromo(char str[], int inicio, int fim) {
    // Caso base
    if (inicio >= fim) {
        return 1; // É palíndromo
    }
    
    // Verifica caracteres atuais
    if (str[inicio] != str[fim]) {
        return 0; // Não é palíndromo
    }
    
    // Caso recursivo
    return eh_palindromo(str, inicio+1, fim-1);
}

// Versão com tratamento de caso
int palindromo_completo(char str[]) {
    int len = strlen(str);
    return eh_palindromo(str, 0, len-1);
}</code></pre>

    <h3>4.3 Contagem de Caracteres</h3>
    <pre><code>int contar_char(char str[], char c) {
    // Caso base
    if (*str == '\\0') {
        return 0;
    }
    
    // Caso recursivo
    int count = (*str == c) ? 1 : 0;
    return count + contar_char(str + 1, c);
}

// Contagem de vogais
int contar_vogais(char str[]) {
    if (*str == '\\0') return 0;
    
    char c = tolower(*str);
    int eh_vogal = (c == 'a' || c == 'e' || c == 'i' || 
                    c == 'o' || c == 'u') ? 1 : 0;
    
    return eh_vogal + contar_vogais(str + 1);
}</code></pre>

    <h2 id="classicos">5. Problemas Clássicos</h2>

    <h3>5.1 Torres de Hanói</h3>
    <pre><code>void hanoi(int n, char origem, char destino, char auxiliar) {
    // Caso base
    if (n == 1) {
        printf("Mover disco de %c para %c\\n", origem, destino);
        return;
    }
    
    // Mover n-1 discos para auxiliar
    hanoi(n-1, origem, auxiliar, destino);
    
    // Mover disco maior para destino
    printf("Mover disco de %c para %c\\n", origem, destino);
    
    // Mover n-1 discos do auxiliar para destino
    hanoi(n-1, auxiliar, destino, origem);
}

// Número de movimentos: 2^n - 1</code></pre>

    <h3>5.2 Combinações (C(n,k))</h3>
    <pre><code>int combinacoes(int n, int k) {
    // Casos base
    if (k == 0 || k == n) {
        return 1;
    }
    if (k > n) {
        return 0;
    }
    
    // Caso recursivo: C(n,k) = C(n-1,k-1) + C(n-1,k)
    return combinacoes(n-1, k-1) + combinacoes(n-1, k);
}</code></pre>

    <h3>5.3 Ackermann</h3>
    <pre><code>int ackermann(int m, int n) {
    if (m == 0) {
        return n + 1;
    }
    if (m > 0 && n == 0) {
        return ackermann(m - 1, 1);
    }
    if (m > 0 && n > 0) {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}
// Função de crescimento extremamente rápido!</code></pre>

    <h2 id="analise">6. Análise de Complexidade</h2>

    <h3>6.1 Fatorial</h3>
    <ul>
        <li><strong>Tempo:</strong> O(n) - n chamadas recursivas</li>
        <li><strong>Espaço:</strong> O(n) - pilha de recursão com n frames</li>
    </ul>

    <h3>6.2 Fibonacci (versão ingênua)</h3>
    <ul>
        <li><strong>Tempo:</strong> O(2ⁿ) - árvore binária de chamadas</li>
        <li><strong>Espaço:</strong> O(n) - profundidade máxima da pilha</li>
        <li><strong>Problema:</strong> Recálculo dos mesmos valores</li>
    </ul>

    <h3>6.3 Torres de Hanói</h3>
    <ul>
        <li><strong>Tempo:</strong> O(2ⁿ) - cada disco dobra o trabalho</li>
        <li><strong>Espaço:</strong> O(n) - pilha de recursão</li>
        <li><strong>Movimentos:</strong> Exatamente 2ⁿ - 1</li>
    </ul>

    <h3>6.4 Busca Binária</h3>
    <ul>
        <li><strong>Tempo:</strong> O(log n) - divide problema pela metade</li>
        <li><strong>Espaço:</strong> O(log n) - profundidade da recursão</li>
    </ul>

    <h2 id="otimizacoes">7. Otimizações</h2>

    <h3>7.1 Memoização</h3>
    <pre><code>int memo[100]; // Array para memorizar resultados

int fibonacci_memo(int n) {
    // Verificar se já foi calculado
    if (memo[n] != -1) {
        return memo[n];
    }
    
    // Casos base
    if (n <= 1) {
        memo[n] = n;
        return n;
    }
    
    // Calcular e memorizar
    memo[n] = fibonacci_memo(n-1) + fibonacci_memo(n-2);
    return memo[n];
}

// Inicialização
void inicializar_memo() {
    for (int i = 0; i < 100; i++) {
        memo[i] = -1;
    }
}</code></pre>

    <h3>7.2 Tail Recursion (Recursão de Cauda)</h3>
    <pre><code>// Fatorial com tail recursion
int fatorial_tail(int n, int acumulador) {
    if (n <= 1) {
        return acumulador;
    }
    return fatorial_tail(n-1, n * acumulador);
}

int fatorial_otimizado(int n) {
    return fatorial_tail(n, 1);
}

// Fibonacci com tail recursion
int fibonacci_tail(int n, int a, int b) {
    if (n == 0) return a;
    if (n == 1) return b;
    return fibonacci_tail(n-1, b, a+b);
}

int fibonacci_otimizado(int n) {
    return fibonacci_tail(n, 0, 1);
}</code></pre>

    <h3>7.3 Conversão para Iterativo</h3>
    <pre><code>// Fatorial iterativo
int fatorial_iterativo(int n) {
    int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Fibonacci iterativo
int fibonacci_iterativo(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}</code></pre>

    <h2>8. Exercícios Práticos</h2>

    <h3>Exercício 1</h3>
    <p>Implemente uma função recursiva que calcule a soma dos dígitos de um número.</p>

    <h3>Exercício 2</h3>
    <p>Crie uma função recursiva que verifique se um número é potência de 2.</p>

    <h3>Exercício 3</h3>
    <p>Desenvolva uma função recursiva que conte o número de ocorrências de um elemento em um array.</p>

    <h3>Exercício 4</h3>
    <p>Implemente merge sort usando recursão.</p>

    <h3>Exercício 5</h3>
    <p>Crie uma função recursiva que gere todas as permutações de uma string.</p>
    `
  },
  'aulas05-14': {
    title: '📚 Aulas 05-14: Conteúdo Avançado',
    content: `
    <h1>Aulas 05-14: Conteúdo Avançado</h1>
    
    <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
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
    `
  },
  'slides': {
    title: '🎯 Slides das Aulas',
    content: `
    <h1>🎯 Slides das Aulas</h1>
    
    <div style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 25px; border-radius: 15px; margin: 20px 0; border-left: 5px solid #e17055;">
        <h4 style="color: #2d3436; margin-bottom: 15px; font-size: 1.3rem; display: flex; align-items: center;">
            📊 Apresentações Interativas
        </h4>
        <p>Todas as apresentações estão em formato Marp para aulas dinâmicas e interativas.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
        <a href="aulas/slides_aula01.md" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📊 Slides Aula 01 (Markdown)
        </a>
        <a href="aulas/slides_aula02.md" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📊 Slides Aula 02 (Markdown)
        </a>
        <a href="aulas/pdf/slides_aula01.pdf" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📄 Slides Aula 01 (PDF)
        </a>
        <a href="aulas/pdf/slides_aula01_premium.pdf" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📄 Slides Aula 01 Premium (PDF)
        </a>
        <a href="aulas/pdf/slides_aula02.pdf" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📄 Slides Aula 02 (PDF)
        </a>
        <a href="aulas/pdf/slides_aula02_melhorado.pdf" target="_blank" style="background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: all 0.3s ease;">
            📄 Slides Aula 02 Melhorado (PDF)
        </a>
    </div>

    <h2>📋 Características dos Slides</h2>
    <ul>
        <li><strong>Formato Marp:</strong> Apresentações modernas e interativas</li>
        <li><strong>Design Responsivo:</strong> Adapta-se a diferentes telas</li>
        <li><strong>Conteúdo Didático:</strong> Exemplos práticos e visuais</li>
        <li><strong>Código Integrado:</strong> Exemplos de implementação</li>
        <li><strong>Navegação Fluida:</strong> Transições suaves entre slides</li>
    </ul>

    <h2>🎨 Recursos Visuais</h2>
    <ul>
        <li><strong>Diagramas Interativos:</strong> Visualização de algoritmos</li>
        <li><strong>Animações:</strong> Demonstrações passo a passo</li>
        <li><strong>Código Colorido:</strong> Syntax highlighting</li>
        <li><strong>Gráficos:</strong> Análise de complexidade visual</li>
    </ul>
    `
  }
};

const AulaModal = ({ open, onClose, aulaId, onAulaChange }) => {
  const [currentAula, setCurrentAula] = useState(aulaId || 'aula01');
  
  const aulaKeys = Object.keys(aulasData);
  const currentIndex = aulaKeys.indexOf(currentAula);
  const aula = aulasData[currentAula];

  useEffect(() => {
    if (aulaId) {
      setCurrentAula(aulaId);
    }
  }, [aulaId]);

  const navigateAula = (direction) => {
    let newIndex;
    if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < aulaKeys.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      return;
    }
    
    const newAulaId = aulaKeys[newIndex];
    setCurrentAula(newAulaId);
    if (onAulaChange) {
      onAulaChange(newAulaId);
    }
  };

  if (!aula) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{aula.title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {/* Navigation */}
        <Paper sx={{ 
          p: 2, 
          mb: 2, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'rgba(52, 152, 219, 0.1)',
          borderRadius: '10px'
        }}>
          <Button
            startIcon={<PrevIcon />}
            onClick={() => navigateAula('prev')}
            disabled={currentIndex === 0}
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
              color: 'white',
              borderRadius: '25px',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              },
              '&:disabled': {
                opacity: 0.5
              }
            }}
          >
            ⬅ Anterior
          </Button>
          
          <Typography variant="h6" sx={{ mx: 2, textAlign: 'center', fontWeight: 'bold' }}>
            {aula.title}
          </Typography>
          
          <Button
            endIcon={<NextIcon />}
            onClick={() => navigateAula('next')}
            disabled={currentIndex === aulaKeys.length - 1}
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
              color: 'white',
              borderRadius: '25px',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              },
              '&:disabled': {
                opacity: 0.5
              }
            }}
          >
            Próxima ➡
          </Button>
        </Paper>

        {/* PDF Download */}
        {aula.pdf && (
          <Paper sx={{ 
            p: 2, 
            mb: 2, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)', 
            color: 'white',
            borderRadius: '15px'
          }}>
            <Button
              startIcon={<DownloadIcon />}
              href={aula.pdf}
              target="_blank"
              variant="contained"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }
              }}
            >
              📄 Download PDF Completo
            </Button>
          </Paper>
        )}

        {/* Content */}
        <Paper sx={{ p: 3 }}>
          <Box 
            dangerouslySetInnerHTML={{ __html: aula.content }}
            sx={{
              '& h1': { color: '#2c3e50', fontSize: '2rem', mb: 2 },
              '& h2': { color: '#34495e', fontSize: '1.5rem', mt: 3, mb: 2 },
              '& h3': { color: '#2980b9', fontSize: '1.3rem', mt: 2, mb: 1 },
              '& h4': { color: '#8e44ad', fontSize: '1.1rem', mt: 1, mb: 1 },
              '& p': { mb: 2, lineHeight: 1.6 },
              '& ul, & ol': { mb: 2, pl: 3 },
              '& li': { mb: 1 },
              '& strong': { fontWeight: 600 },
              '& pre': { 
                background: '#2d3748', 
                color: '#e2e8f0', 
                p: 2, 
                borderRadius: 1, 
                overflow: 'auto',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                mb: 2
              },
              '& code': { 
                background: '#f8f9fa', 
                color: '#e83e8c', 
                p: 0.5, 
                borderRadius: 0.5,
                fontFamily: 'Monaco, Consolas, "Courier New", monospace'
              },
              '& pre code': {
                background: 'transparent',
                color: '#e2e8f0',
                p: 0
              },
              '& a': {
                color: '#3498db',
                textDecoration: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'background 0.3s ease',
                '&:hover': {
                  background: 'rgba(52, 152, 219, 0.1)',
                  textDecoration: 'underline'
                }
              },
              '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                margin: '20px 0'
              },
              '& th, & td': {
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left'
              },
              '& th': {
                background: '#f8f9fa',
                fontWeight: 'bold'
              }
            }}
          />
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default AulaModal;