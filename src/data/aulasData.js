export const aulasData = {
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
    <table border="1">
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
  'aula05': {
    title: '🔄 Aula 05: Desenvolvendo Algoritmos com Recursividade',
    content: `
    <h1>Aula 05: Desenvolvendo Algoritmos com Recursividade</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#backtracking">1. Backtracking</a></li>
        <li><a href="#permutacoes">2. Geração de Permutações</a></li>
        <li><a href="#busca">3. Problemas de Busca</a></li>
        <li><a href="#dividir">4. Dividir e Conquistar</a></li>
        <li><a href="#analise">5. Análise de Complexidade</a></li>
    </ul>

    <h2 id="backtracking">1. Backtracking</h2>
    <p><strong>Backtracking</strong> é uma técnica algorítmica que considera buscar toda solução possível para um problema computacional, incrementalmente abandonando candidatos quando determinado que não pode produzir uma solução válida.</p>

    <h3>1.1 Estrutura Geral do Backtracking</h3>
    <pre><code>bool backtrack(estado_atual) {
    if (eh_solucao_completa(estado_atual)) {
        processar_solucao(estado_atual);
        return true;
    }
    
    for (cada candidato c) {
        if (eh_valido(c, estado_atual)) {
            aplicar_candidato(c, estado_atual);
            
            if (backtrack(estado_atual)) {
                return true;
            }
            
            desfazer_candidato(c, estado_atual); // Backtrack
        }
    }
    
    return false;
}</code></pre>

    <h3>1.2 Problema das N-Rainhas</h3>
    <p>Colocar N rainhas em um tabuleiro N×N de forma que nenhuma ataque outra.</p>
    
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdbool.h&gt;

#define N 8

bool eh_seguro(int tabuleiro[N][N], int linha, int coluna) {
    int i, j;
    
    // Verificar coluna
    for (i = 0; i < linha; i++) {
        if (tabuleiro[i][coluna] == 1) {
            return false;
        }
    }
    
    // Verificar diagonal superior esquerda
    for (i = linha - 1, j = coluna - 1; i >= 0 && j >= 0; i--, j--) {
        if (tabuleiro[i][j] == 1) {
            return false;
        }
    }
    
    // Verificar diagonal superior direita
    for (i = linha - 1, j = coluna + 1; i >= 0 && j < N; i--, j++) {
        if (tabuleiro[i][j] == 1) {
            return false;
        }
    }
    
    return true;
}

bool resolver_nrainhas(int tabuleiro[N][N], int linha) {
    // Caso base: todas as rainhas foram colocadas
    if (linha >= N) {
        return true;
    }
    
    // Tentar colocar rainha em cada coluna desta linha
    for (int col = 0; col < N; col++) {
        if (eh_seguro(tabuleiro, linha, col)) {
            tabuleiro[linha][col] = 1; // Colocar rainha
            
            // Recursivamente colocar rainhas nas próximas linhas
            if (resolver_nrainhas(tabuleiro, linha + 1)) {
                return true;
            }
            
            tabuleiro[linha][col] = 0; // Backtrack
        }
    }
    
    return false; // Não foi possível colocar rainha nesta linha
}

void imprimir_tabuleiro(int tabuleiro[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%c ", (tabuleiro[i][j] == 1) ? 'Q' : '.');
        }
        printf("\\n");
    }
}</code></pre>

    <h3>1.3 Sudoku Solver</h3>
    <pre><code>#define SIZE 9

bool eh_seguro_sudoku(int grid[SIZE][SIZE], int linha, int col, int num) {
    // Verificar linha
    for (int x = 0; x < SIZE; x++) {
        if (grid[linha][x] == num) {
            return false;
        }
    }
    
    // Verificar coluna
    for (int x = 0; x < SIZE; x++) {
        if (grid[x][col] == num) {
            return false;
        }
    }
    
    // Verificar quadrado 3x3
    int start_linha = linha - linha % 3;
    int start_col = col - col % 3;
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (grid[i + start_linha][j + start_col] == num) {
                return false;
            }
        }
    }
    
    return true;
}

bool resolver_sudoku(int grid[SIZE][SIZE]) {
    int linha, col;
    
    // Encontrar célula vazia
    bool encontrou_vazia = false;
    for (linha = 0; linha < SIZE; linha++) {
        for (col = 0; col < SIZE; col++) {
            if (grid[linha][col] == 0) {
                encontrou_vazia = true;
                break;
            }
        }
        if (encontrou_vazia) break;
    }
    
    // Se não há células vazias, sudoku está resolvido
    if (!encontrou_vazia) {
        return true;
    }
    
    // Tentar números de 1 a 9
    for (int num = 1; num <= 9; num++) {
        if (eh_seguro_sudoku(grid, linha, col, num)) {
            grid[linha][col] = num;
            
            if (resolver_sudoku(grid)) {
                return true;
            }
            
            grid[linha][col] = 0; // Backtrack
        }
    }
    
    return false;
}</code></pre>

    <h2 id="permutacoes">2. Geração de Permutações</h2>

    <h3>2.1 Permutações de String</h3>
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

void trocar(char *x, char *y) {
    char temp = *x;
    *x = *y;
    *y = temp;
}

void permutar_string(char str[], int inicio, int fim) {
    if (inicio == fim) {
        printf("%s\\n", str);
        return;
    }
    
    for (int i = inicio; i <= fim; i++) {
        // Trocar caracteres
        trocar(&str[inicio], &str[i]);
        
        // Recursão para permutações do restante
        permutar_string(str, inicio + 1, fim);
        
        // Backtrack - desfazer troca
        trocar(&str[inicio], &str[i]);
    }
}

// Uso
int main() {
    char str[] = "ABC";
    int n = strlen(str);
    permutar_string(str, 0, n - 1);
    return 0;
}</code></pre>

    <h3>2.2 Permutações sem Repetição</h3>
    <pre><code>void permutar_sem_repeticao(char str[], int inicio, int fim) {
    if (inicio == fim) {
        printf("%s\\n", str);
        return;
    }
    
    bool usado[256] = {false}; // Para caracteres ASCII
    
    for (int i = inicio; i <= fim; i++) {
        if (!usado[str[i]]) {
            usado[str[i]] = true;
            
            trocar(&str[inicio], &str[i]);
            permutar_sem_repeticao(str, inicio + 1, fim);
            trocar(&str[inicio], &str[i]);
        }
    }
}</code></pre>

    <h3>2.3 Combinações</h3>
    <pre><code>void gerar_combinacoes(int arr[], int n, int r, int indice, 
                       int dados[], int i) {
    // Caso base: combinação completa
    if (indice == r) {
        for (int j = 0; j < r; j++) {
            printf("%d ", dados[j]);
        }
        printf("\\n");
        return;
    }
    
    // Se não há mais elementos
    if (i >= n) {
        return;
    }
    
    // Incluir elemento atual
    dados[indice] = arr[i];
    gerar_combinacoes(arr, n, r, indice + 1, dados, i + 1);
    
    // Excluir elemento atual
    gerar_combinacoes(arr, n, r, indice, dados, i + 1);
}

// Função wrapper
void combinacoes(int arr[], int n, int r) {
    int dados[r];
    gerar_combinacoes(arr, n, r, 0, dados, 0);
}</code></pre>

    <h2 id="busca">3. Problemas de Busca</h2>

    <h3>3.1 Labirinto</h3>
    <pre><code>#define TAMANHO 4

bool eh_posicao_valida(int labirinto[][TAMANHO], int x, int y) {
    return (x >= 0 && x < TAMANHO && y >= 0 && y < TAMANHO && 
            labirinto[x][y] == 1);
}

bool resolver_labirinto(int labirinto[][TAMANHO], int x, int y, 
                        int solucao[][TAMANHO]) {
    // Se chegou ao destino
    if (x == TAMANHO-1 && y == TAMANHO-1) {
        solucao[x][y] = 1;
        return true;
    }
    
    // Verificar se a posição atual é válida
    if (eh_posicao_valida(labirinto, x, y)) {
        solucao[x][y] = 1; // Marcar como parte da solução
        
        // Mover para direita
        if (resolver_labirinto(labirinto, x + 1, y, solucao)) {
            return true;
        }
        
        // Mover para baixo
        if (resolver_labirinto(labirinto, x, y + 1, solucao)) {
            return true;
        }
        
        // Mover para esquerda
        if (resolver_labirinto(labirinto, x - 1, y, solucao)) {
            return true;
        }
        
        // Mover para cima
        if (resolver_labirinto(labirinto, x, y - 1, solucao)) {
            return true;
        }
        
        // Se nenhuma direção funciona, backtrack
        solucao[x][y] = 0;
        return false;
    }
    
    return false;
}

int main() {
    int labirinto[TAMANHO][TAMANHO] = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };
    
    int solucao[TAMANHO][TAMANHO] = {0};
    
    if (resolver_labirinto(labirinto, 0, 0, solucao)) {
        printf("Solução encontrada:\\n");
        for (int i = 0; i < TAMANHO; i++) {
            for (int j = 0; j < TAMANHO; j++) {
                printf("%d ", solucao[i][j]);
            }
            printf("\\n");
        }
    } else {
        printf("Não existe solução\\n");
    }
    
    return 0;
}</code></pre>

    <h3>3.2 Problema da Mochila (0/1)</h3>
    <pre><code>int max(int a, int b) {
    return (a > b) ? a : b;
}

int mochila_recursiva(int W, int pesos[], int valores[], int n) {
    // Caso base
    if (n == 0 || W == 0) {
        return 0;
    }
    
    // Se o peso do item n-1 é maior que a capacidade W,
    // este item não pode ser incluído
    if (pesos[n-1] > W) {
        return mochila_recursiva(W, pesos, valores, n-1);
    }
    
    // Retorna o máximo entre:
    // 1. Item n-1 incluído
    // 2. Item n-1 não incluído
    return max(
        valores[n-1] + mochila_recursiva(W - pesos[n-1], pesos, valores, n-1),
        mochila_recursiva(W, pesos, valores, n-1)
    );
}</code></pre>

    <h2 id="dividir">4. Dividir e Conquistar</h2>

    <h3>4.1 Merge Sort</h3>
    <pre><code>void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    
    // Arrays temporários
    int L[n1], R[n2];
    
    // Copiar dados para arrays temporários
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    // Merge dos arrays temporários de volta em arr[l..r]
    int i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copiar elementos restantes
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        // Encontrar ponto médio
        int m = l + (r - l) / 2;
        
        // Ordenar primeira e segunda metades
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        
        // Merge das metades ordenadas
        merge(arr, l, m, r);
    }
}</code></pre>

    <h3>4.2 Quick Sort</h3>
    <pre><code>void trocar_int(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int particionar(int arr[], int baixo, int alto) {
    int pivot = arr[alto]; // Último elemento como pivot
    int i = (baixo - 1);   // Índice do menor elemento
    
    for (int j = baixo; j <= alto - 1; j++) {
        // Se elemento atual é menor ou igual ao pivot
        if (arr[j] <= pivot) {
            i++;
            trocar_int(&arr[i], &arr[j]);
        }
    }
    trocar_int(&arr[i + 1], &arr[alto]);
    return (i + 1);
}

void quickSort(int arr[], int baixo, int alto) {
    if (baixo < alto) {
        // pi é índice de partição
        int pi = particionar(arr, baixo, alto);
        
        // Ordenar elementos antes e depois da partição
        quickSort(arr, baixo, pi - 1);
        quickSort(arr, pi + 1, alto);
    }
}</code></pre>

    <h3>4.3 Busca do Elemento Majoritário</h3>
    <pre><code>int contar_occorrencias(int arr[], int num, int baixo, int alto) {
    int count = 0;
    for (int i = baixo; i <= alto; i++) {
        if (arr[i] == num) {
            count++;
        }
    }
    return count;
}

int elemento_majoritario_rec(int arr[], int baixo, int alto) {
    // Caso base: um elemento
    if (baixo == alto) {
        return arr[baixo];
    }
    
    // Dividir array pela metade
    int meio = (alto - baixo) / 2 + baixo;
    int esquerda = elemento_majoritario_rec(arr, baixo, meio);
    int direita = elemento_majoritario_rec(arr, meio + 1, alto);
    
    // Se ambas as metades concordam no elemento majoritário
    if (esquerda == direita) {
        return esquerda;
    }
    
    // Contar ocorrências de cada candidato
    int count_esq = contar_occorrencias(arr, esquerda, baixo, alto);
    int count_dir = contar_occorrencias(arr, direita, baixo, alto);
    
    return (count_esq > count_dir) ? esquerda : direita;
}</code></pre>

    <h2 id="analise">5. Análise de Complexidade</h2>

    <h3>5.1 N-Rainhas</h3>
    <ul>
        <li><strong>Tempo:</strong> O(N!) - fatorial das posições possíveis</li>
        <li><strong>Espaço:</strong> O(N) - pilha de recursão + tabuleiro</li>
        <li><strong>Otimizações:</strong> Poda inteligente pode reduzir drasticamente</li>
    </ul>

    <h3>5.2 Permutações</h3>
    <ul>
        <li><strong>Tempo:</strong> O(N! × N) - N! permutações, N para imprimir cada uma</li>
        <li><strong>Espaço:</strong> O(N) - pilha de recursão</li>
        <li><strong>Total de permutações:</strong> N! para N elementos distintos</li>
    </ul>

    <h3>5.3 Combinações</h3>
    <ul>
        <li><strong>Tempo:</strong> O(2ⁿ) - cada elemento pode estar ou não</li>
        <li><strong>Espaço:</strong> O(n) - profundidade da recursão</li>
        <li><strong>Total de combinações:</strong> C(n,r) = n!/(r!(n-r)!)</li>
    </ul>

    <h3>5.4 Merge Sort</h3>
    <ul>
        <li><strong>Tempo:</strong> O(N log N) - divisão logarítmica, merge linear</li>
        <li><strong>Espaço:</strong> O(N) - arrays auxiliares para merge</li>
        <li><strong>Estabilidade:</strong> Algoritmo estável</li>
    </ul>

    <h3>5.5 Quick Sort</h3>
    <ul>
        <li><strong>Melhor caso:</strong> O(N log N) - partições balanceadas</li>
        <li><strong>Pior caso:</strong> O(N²) - array já ordenado com pivot ruim</li>
        <li><strong>Caso médio:</strong> O(N log N)</li>
        <li><strong>Espaço:</strong> O(log N) - pilha de recursão</li>
    </ul>

    <h2>6. Estratégias de Otimização</h2>

    <h3>6.1 Poda (Pruning)</h3>
    <pre><code>// Exemplo: melhorar N-Rainhas com poda
bool resolver_nrainhas_otimizado(int tabuleiro[][N], int linha, 
                                 bool col_usada[], bool diag1_usada[], 
                                 bool diag2_usada[]) {
    if (linha >= N) {
        return true;
    }
    
    for (int coluna = 0; coluna < N; coluna++) {
        // Verificação rápida usando arrays booleanos
        if (!col_usada[coluna] && 
            !diag1_usada[linha + coluna] && 
            !diag2_usada[linha - coluna + N - 1]) {
            
            // Marcar como usado
            tabuleiro[linha][coluna] = 1;
            col_usada[coluna] = true;
            diag1_usada[linha + coluna] = true;
            diag2_usada[linha - coluna + N - 1] = true;
            
            if (resolver_nrainhas_otimizado(tabuleiro, linha + 1, 
                                          col_usada, diag1_usada, diag2_usada)) {
                return true;
            }
            
            // Backtrack
            tabuleiro[linha][coluna] = 0;
            col_usada[coluna] = false;
            diag1_usada[linha + coluna] = false;
            diag2_usada[linha - coluna + N - 1] = false;
        }
    }
    
    return false;
}</code></pre>

    <h3>6.2 Memoização para Problemas de Decisão</h3>
    <pre><code>int memo_mochila[1001][1001]; // Inicializar com -1

int mochila_memo(int W, int pesos[], int valores[], int n) {
    if (n == 0 || W == 0) {
        return 0;
    }
    
    if (memo_mochila[n][W] != -1) {
        return memo_mochila[n][W];
    }
    
    if (pesos[n-1] > W) {
        memo_mochila[n][W] = mochila_memo(W, pesos, valores, n-1);
    } else {
        memo_mochila[n][W] = max(
            valores[n-1] + mochila_memo(W - pesos[n-1], pesos, valores, n-1),
            mochila_memo(W, pesos, valores, n-1)
        );
    }
    
    return memo_mochila[n][W];
}</code></pre>

    <h2>7. Exercícios Práticos</h2>

    <h3>Exercício 1: Coloração de Grafos</h3>
    <p>Implemente um algoritmo que determine se é possível colorir um grafo com K cores usando backtracking.</p>

    <h3>Exercício 2: Subconjunto com Soma Específica</h3>
    <p>Encontre se existe um subconjunto de um array cuja soma seja igual a um valor target.</p>

    <h3>Exercício 3: Palavras Cruzadas</h3>
    <p>Resolva um puzzle de palavras cruzadas dados um grid e uma lista de palavras.</p>

    <h3>Exercício 4: Knight's Tour</h3>
    <p>Encontre uma sequência de movimentos para um cavalo visitar todas as casas de um tabuleiro de xadrez exatamente uma vez.</p>

    <h3>Exercício 5: Partição de Array</h3>
    <p>Determine se um array pode ser particionado em dois subconjuntos com somas iguais.</p>

    <h2>8. Dicas e Boas Práticas</h2>

    <h3>8.1 Quando Usar Backtracking</h3>
    <ul>
        <li>Problemas de busca exaustiva</li>
        <li>Quando não há algoritmo polinomial conhecido</li>
        <li>Problemas de otimização combinatória</li>
        <li>Puzzles e jogos</li>
    </ul>

    <h3>8.2 Otimizações Importantes</h3>
    <ul>
        <li><strong>Poda:</strong> Eliminar ramos impossíveis cedo</li>
        <li><strong>Ordenação:</strong> Tentar candidatos mais promissores primeiro</li>
        <li><strong>Memoização:</strong> Evitar recálculos em subproblemas</li>
        <li><strong>Representação eficiente:</strong> Usar estruturas de dados adequadas</li>
    </ul>

    <h3>8.3 Debugging Recursivo</h3>
    <ul>
        <li>Imprimir o estado em cada chamada</li>
        <li>Verificar casos base cuidadosamente</li>
        <li>Garantir que o backtrack desfaz todas as mudanças</li>
        <li>Usar indentação para visualizar profundidade</li>
    </ul>
    `
  },
  'aula06': {
    title: '⚠️ Aula 06: Quando Não Usar Recursividade',
    content: `
    <h1>Aula 06: Quando Não Usar Recursividade</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>📚 Índice</h2>
    <ul>
        <li><a href="#limitacoes">1. Limitações da Recursividade</a></li>
        <li><a href="#problemas">2. Problemas Clássicos</a></li>
        <li><a href="#conversao">3. Conversão Recursão → Iteração</a></li>
        <li><a href="#pilhas">4. Uso de Pilhas Explícitas</a></li>
        <li><a href="#quando">5. Quando Usar Cada Abordagem</a></li>
        <li><a href="#otimizacoes">6. Técnicas de Otimização</a></li>
        <li><a href="#comparacao">7. Comparação de Performance</a></li>
    </ul>

    <h2 id="limitacoes">1. Limitações da Recursividade</h2>

    <h3>1.1 Stack Overflow</h3>
    <p>Cada chamada recursiva consome espaço na pilha de execução. Para recursões muito profundas, isso pode causar estouro da pilha.</p>

    <pre><code>// Exemplo que pode causar stack overflow
int soma_ate_n_ruim(int n) {
    if (n <= 0) return 0;
    return n + soma_ate_n_ruim(n - 1);
}
// Para n = 1000000, pode causar stack overflow</code></pre>

    <h3>1.2 Complexidade Exponencial Desnecessária</h3>
    <p>Algumas recursões geram complexidade exponencial devido a recálculos repetidos.</p>

    <h3>1.3 Overhead de Chamadas de Função</h3>
    <p>Cada chamada recursiva tem overhead de:</p>
    <ul>
        <li>Salvar contexto na pilha</li>
        <li>Criar novo frame de ativação</li>
        <li>Copiar parâmetros</li>
        <li>Restaurar contexto no retorno</li>
    </ul>

    <h3>1.4 Consumo Excessivo de Memória</h3>
    <p>A pilha de recursão pode crescer linearmente com a profundidade, consumindo mais memória que versões iterativas.</p>

    <h2 id="problemas">2. Problemas Clássicos</h2>

    <h3>2.1 Fibonacci: O Exemplo Clássico</h3>

    <h4>❌ Versão Recursiva Ineficiente</h4>
    <pre><code>int fibonacci_ruim(int n) {
    if (n <= 1) return n;
    return fibonacci_ruim(n-1) + fibonacci_ruim(n-2);
}
// Complexidade: O(2^n) - EXPONENCIAL!</code></pre>

    <h4>Problema: Recálculos Redundantes</h4>
    <pre><code>fibonacci(5)
├── fibonacci(4)
│   ├── fibonacci(3)
│   │   ├── fibonacci(2)
│   │   │   ├── fibonacci(1) = 1
│   │   │   └── fibonacci(0) = 0
│   │   └── fibonacci(1) = 1
│   └── fibonacci(2)       // RECALCULADO!
│       ├── fibonacci(1) = 1
│       └── fibonacci(0) = 0
└── fibonacci(3)           // RECALCULADO NOVAMENTE!
    ├── fibonacci(2)
    │   ├── fibonacci(1) = 1
    │   └── fibonacci(0) = 0
    └── fibonacci(1) = 1</code></pre>

    <h4>✅ Versão Iterativa Eficiente</h4>
    <pre><code>int fibonacci_bom(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// Complexidade: O(n) - LINEAR!</code></pre>

    <h3>2.2 Fatorial: Comparação</h3>

    <h4>Recursivo</h4>
    <pre><code>int fatorial_recursivo(int n) {
    if (n <= 1) return 1;
    return n * fatorial_recursivo(n-1);
}
// Espaço: O(n) - pilha de recursão</code></pre>

    <h4>Iterativo - Mais Eficiente</h4>
    <pre><code>int fatorial_iterativo(int n) {
    int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
// Espaço: O(1) - constante</code></pre>

    <h3>2.3 Soma de Array</h3>

    <h4>Recursivo</h4>
    <pre><code>int soma_recursiva(int arr[], int n) {
    if (n <= 0) return 0;
    return arr[n-1] + soma_recursiva(arr, n-1);
}
// Espaço: O(n), Tempo: O(n)</code></pre>

    <h4>Iterativo - Mais Simples e Eficiente</h4>
    <pre><code>int soma_iterativa(int arr[], int n) {
    int soma = 0;
    for (int i = 0; i < n; i++) {
        soma += arr[i];
    }
    return soma;
}
// Espaço: O(1), Tempo: O(n)</code></pre>

    <h2 id="conversao">3. Conversão Recursão → Iteração</h2>

    <h3>3.1 Recursão Linear (Tail Recursion)</h3>
    <p>Recursões lineares podem ser facilmente convertidas para loops.</p>

    <h4>Padrão de Conversão:</h4>
    <pre><code>// Recursivo
int funcao_rec(int n) {
    if (caso_base(n)) return valor_base;
    return combinar(funcao_rec(proximo(n)));
}

// Iterativo
int funcao_iter(int n) {
    int resultado = valor_inicial;
    while (!caso_base(n)) {
        resultado = combinar(resultado);
        n = proximo(n);
    }
    return resultado;
}</code></pre>

    <h3>3.2 Exemplo: Potência</h3>

    <h4>Recursivo</h4>
    <pre><code>int potencia_rec(int base, int exp) {
    if (exp == 0) return 1;
    return base * potencia_rec(base, exp - 1);
}</code></pre>

    <h4>Iterativo</h4>
    <pre><code>int potencia_iter(int base, int exp) {
    int resultado = 1;
    while (exp > 0) {
        resultado *= base;
        exp--;
    }
    return resultado;
}</code></pre>

    <h3>3.3 Exemplo: MDC (Euclides)</h3>

    <h4>Recursivo</h4>
    <pre><code>int mdc_rec(int a, int b) {
    if (b == 0) return a;
    return mdc_rec(b, a % b);
}</code></pre>

    <h4>Iterativo</h4>
    <pre><code>int mdc_iter(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}</code></pre>

    <h2 id="pilhas">4. Uso de Pilhas Explícitas</h2>

    <p>Para recursões mais complexas, podemos usar pilhas explícitas para simular o comportamento recursivo.</p>

    <h3>4.1 Traversal de Árvore sem Recursão</h3>

    <h4>Estrutura da Árvore</h4>
    <pre><code>typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;</code></pre>

    <h4>In-order Traversal Iterativo</h4>
    <pre><code>#include &lt;stack&gt; // C++ STL ou implementar pilha

void inorder_iterativo(TreeNode* root) {
    if (root == NULL) return;
    
    std::stack&lt;TreeNode*&gt; s;
    TreeNode* atual = root;
    
    while (atual != NULL || !s.empty()) {
        // Ir para o nó mais à esquerda
        while (atual != NULL) {
            s.push(atual);
            atual = atual->left;
        }
        
        // Processar nó atual
        atual = s.top();
        s.pop();
        printf("%d ", atual->data);
        
        // Mover para subárvore direita
        atual = atual->right;
    }
}</code></pre>

    <h4>Pre-order Traversal Iterativo</h4>
    <pre><code>void preorder_iterativo(TreeNode* root) {
    if (root == NULL) return;
    
    std::stack&lt;TreeNode*&gt; s;
    s.push(root);
    
    while (!s.empty()) {
        TreeNode* atual = s.top();
        s.pop();
        
        printf("%d ", atual->data);
        
        // Empurrar filhos (direito primeiro para que esquerdo seja processado primeiro)
        if (atual->right) s.push(atual->right);
        if (atual->left) s.push(atual->left);
    }
}</code></pre>

    <h3>4.2 DFS em Grafo sem Recursão</h3>
    <pre><code>void dfs_iterativo(int grafo[][MAX], int vertices, int inicio, bool visitado[]) {
    std::stack&lt;int&gt; s;
    s.push(inicio);
    
    while (!s.empty()) {
        int v = s.top();
        s.pop();
        
        if (!visitado[v]) {
            visitado[v] = true;
            printf("%d ", v);
            
            // Adicionar vizinhos não visitados
            for (int i = vertices - 1; i >= 0; i--) {
                if (grafo[v][i] == 1 && !visitado[i]) {
                    s.push(i);
                }
            }
        }
    }
}</code></pre>

    <h2 id="quando">5. Quando Usar Cada Abordagem</h2>

    <h3>5.1 Use Recursão Quando:</h3>
    <ul>
        <li>O problema tem <strong>estrutura naturalmente recursiva</strong> (árvores, fractais)</li>
        <li>A <strong>profundidade é limitada</strong> e conhecida</li>
        <li>A <strong>clareza do código</strong> é mais importante que performance</li>
        <li>Implementando <strong>algoritmos de dividir e conquistar</strong></li>
        <li>Trabalhando com <strong>estruturas de dados recursivas</strong></li>
        <li><strong>Backtracking</strong> e busca exaustiva</li>
    </ul>

    <h3>5.2 Use Iteração Quando:</h3>
    <ul>
        <li>A <strong>performance é crítica</strong></li>
        <li>A <strong>profundidade pode ser muito grande</strong></li>
        <li>Há <strong>risco de stack overflow</strong></li>
        <li>O algoritmo pode ser expresso <strong>simplesmente com loops</strong></li>
        <li>Há <strong>recomputações desnecessárias</strong> na versão recursiva</li>
        <li><strong>Memória é limitada</strong></li>
    </ul>

    <h3>5.3 Exemplos Práticos de Decisão</h3>

    <h4>✅ Recursão Apropriada:</h4>
    <ul>
        <li>Merge Sort, Quick Sort</li>
        <li>Parsing de expressões</li>
        <li>Traversal de árvores pequenas</li>
        <li>Problemas de backtracking</li>
    </ul>

    <h4>❌ Recursão Inapropriada:</h4>
    <ul>
        <li>Fibonacci simples</li>
        <li>Fatorial</li>
        <li>Busca linear em arrays</li>
        <li>Cálculos matemáticos simples</li>
    </ul>

    <h2 id="otimizacoes">6. Técnicas de Otimização</h2>

    <h3>6.1 Memoização</h3>
    <p>Armazenar resultados de subcálculos para evitar recomputação.</p>

    <pre><code>int memo[1000];
bool calculado[1000] = {false};

int fibonacci_memo(int n) {
    if (n <= 1) return n;
    
    if (calculado[n]) {
        return memo[n];
    }
    
    memo[n] = fibonacci_memo(n-1) + fibonacci_memo(n-2);
    calculado[n] = true;
    return memo[n];
}
// Complexidade: O(n) tempo, O(n) espaço</code></pre>

    <h3>6.2 Tail Recursion Optimization</h3>
    <p>Converter recursão geral em recursão de cauda.</p>

    <pre><code>// Fatorial com tail recursion
int fatorial_tail(int n, int acc) {
    if (n <= 1) return acc;
    return fatorial_tail(n-1, n * acc);
}

int fatorial_otimizado(int n) {
    return fatorial_tail(n, 1);
}

// Compiladores modernos podem otimizar para iteração</code></pre>

    <h3>6.3 Programação Dinâmica</h3>
    <p>Abordagem bottom-up que evita recursão completamente.</p>

    <pre><code>int fibonacci_dp(int n) {
    if (n <= 1) return n;
    
    int dp[n+1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}</code></pre>

    <h3>6.4 Otimização de Espaço</h3>
    <pre><code>int fibonacci_otimizado(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1, current;
    for (int i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current;
}
// Espaço: O(1), Tempo: O(n)</code></pre>

    <h2 id="comparacao">7. Comparação de Performance</h2>

    <h3>7.1 Medições Experimentais</h3>

    <pre><code>#include &lt;time.h&gt;

void comparar_fibonacci(int n) {
    clock_t inicio, fim;
    
    // Versão recursiva
    inicio = clock();
    int result_rec = fibonacci_ruim(n);
    fim = clock();
    double time_rec = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    
    // Versão iterativa
    inicio = clock();
    int result_iter = fibonacci_bom(n);
    fim = clock();
    double time_iter = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    
    printf("n = %d\\n", n);
    printf("Recursivo: %d (%.6f segundos)\\n", result_rec, time_rec);
    printf("Iterativo: %d (%.6f segundos)\\n", result_iter, time_iter);
    printf("Speedup: %.2fx\\n\\n", time_rec / time_iter);
}</code></pre>

    <h3>7.2 Tabela de Comparação</h3>

    <table border="1">
        <tr>
            <th>Algoritmo</th>
            <th>Recursivo</th>
            <th>Iterativo</th>
            <th>Recomendação</th>
            <th>Motivo</th>
        </tr>
        <tr>
            <td>Fibonacci</td>
            <td>O(2ⁿ)</td>
            <td>O(n)</td>
            <td>Iterativo</td>
            <td>Evita recálculos</td>
        </tr>
        <tr>
            <td>Fatorial</td>
            <td>O(n)</td>
            <td>O(n)</td>
            <td>Iterativo</td>
            <td>Menor uso de memória</td>
        </tr>
        <tr>
            <td>Busca Binária</td>
            <td>O(log n)</td>
            <td>O(log n)</td>
            <td>Tanto faz</td>
            <td>Complexidade similar</td>
        </tr>
        <tr>
            <td>Merge Sort</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>Recursivo</td>
            <td>Mais claro</td>
        </tr>
        <tr>
            <td>DFS</td>
            <td>O(V + E)</td>
            <td>O(V + E)</td>
            <td>Depende</td>
            <td>Profundidade do grafo</td>
        </tr>
        <tr>
            <td>Torres de Hanói</td>
            <td>O(2ⁿ)</td>
            <td>O(2ⁿ)</td>
            <td>Recursivo</td>
            <td>Estrutura natural</td>
        </tr>
    </table>

    <h3>7.3 Benchmarks Reais</h3>

    <pre><code>// Teste com diferentes tamanhos
int main() {
    printf("Comparação Fibonacci:\\n");
    for (int n = 30; n <= 40; n += 2) {
        comparar_fibonacci(n);
    }
    
    printf("\\nComparação Fatorial:\\n");
    for (int n = 1000; n <= 10000; n += 1000) {
        comparar_fatorial(n);
    }
    
    return 0;
}</code></pre>

    <h2>8. Exercícios Práticos</h2>

    <h3>Exercício 1: Conversão</h3>
    <p>Converta as seguintes funções recursivas para versões iterativas:</p>
    <ul>
        <li>Soma dos dígitos de um número</li>
        <li>Inversão de string</li>
        <li>Busca em array</li>
    </ul>

    <h3>Exercício 2: Otimização</h3>
    <p>Otimize a função recursiva de Fibonacci usando:</p>
    <ul>
        <li>Memoização</li>
        <li>Programação dinâmica</li>
        <li>Versão iterativa com O(1) espaço</li>
    </ul>

    <h3>Exercício 3: Análise</h3>
    <p>Compare a performance de versões recursivas vs iterativas para:</p>
    <ul>
        <li>Cálculo de potência</li>
        <li>Contagem de elementos em array</li>
        <li>Verificação de palíndromo</li>
    </ul>

    <h3>Exercício 4: Pilha Explícita</h3>
    <p>Implemente post-order traversal de árvore binária usando pilha explícita.</p>

    <h3>Exercício 5: Decisão</h3>
    <p>Para cada cenário, justifique se usaria recursão ou iteração:</p>
    <ul>
        <li>Parser de JSON</li>
        <li>Cálculo de média de array</li>
        <li>Algoritmo de pathfinding</li>
        <li>Geração de permutações</li>
    </ul>

    <h2>9. Conclusões</h2>

    <h3>9.1 Princípios Gerais</h3>
    <ul>
        <li><strong>Clareza vs Performance:</strong> Balance entre legibilidade e eficiência</li>
        <li><strong>Contexto é crucial:</strong> Considere tamanho dos dados e limitações</li>
        <li><strong>Profile antes de otimizar:</strong> Meça performance real</li>
        <li><strong>Considere alternativas:</strong> Memoização, DP, pilhas explícitas</li>
    </ul>

    <h3>9.2 Checklist de Decisão</h3>
    <ol>
        <li>O problema tem estrutura naturalmente recursiva?</li>
        <li>Qual é a profundidade máxima esperada?</li>
        <li>Há recálculos redundantes?</li>
        <li>Performance é crítica?</li>
        <li>Há limitações de memória?</li>
        <li>A clareza do código é importante?</li>
    </ol>

    <p><strong>Lembre-se:</strong> A recursão é uma ferramenta poderosa, mas deve ser usada conscientemente, considerando suas limitações e alternativas.</p>
    `
  }
};

export const exerciciosData = {
  'lista01': {
    title: 'Lista de Exercícios 01: Análise de Complexidade',
    description: 'Exercícios focados em análise teórica e prática de algoritmos em C e Python.',
    prazo: '25 de agosto de 2025',
    valor: '2,0 pontos',
    content: `
    <h1>Lista de Exercícios 01: Análise de Complexidade</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 25 de agosto de 2025<br>
    <strong>Valor:</strong> 2,0 pontos</p>

    <h2>📋 Instruções Gerais</h2>
    <ol>
        <li><strong>Implementar</strong> todos os algoritmos em <strong>C</strong> e <strong>Python</strong></li>
        <li><strong>Analisar</strong> a complexidade de tempo e espaço de cada algoritmo</li>
        <li><strong>Testar</strong> com diferentes tamanhos de entrada</li>
        <li><strong>Documentar</strong> todo o processo no relatório</li>
        <li><strong>Entregar</strong> até a data limite no formato especificado</li>
    </ol>

    <h2>🎯 Objetivos</h2>
    <ul>
        <li>Aplicar conceitos de análise de complexidade</li>
        <li>Praticar implementação em C e Python</li>
        <li>Desenvolver habilidades de análise algorítmica</li>
        <li>Comparar teoria com resultados práticos</li>
    </ul>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Busca do Elemento Máximo (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que encontre o maior elemento em um array de inteiros.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar em C e Python</li>
        <li>Analisar complexidade de tempo e espaço</li>
        <li>Testar com arrays de tamanhos: 10, 100, 1000, 10000</li>
    </ul>

    <h3>Exercício 2: Verificação de Array Ordenado (1,5 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que verifique se um array está ordenado em ordem crescente.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar versão iterativa e recursiva</li>
        <li>Comparar complexidade das duas versões</li>
        <li>Testar com arrays ordenados, desordenados e parcialmente ordenados</li>
    </ul>

    <h3>Exercício 3: Contagem de Elementos Únicos (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que conte quantos elementos únicos existem em um array.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar pelo menos duas abordagens diferentes</li>
        <li>Uma abordagem deve ter complexidade O(n²)</li>
        <li>Outra abordagem deve usar estrutura auxiliar</li>
        <li>Comparar as complexidades e tempos de execução</li>
    </ul>

    <h3>Exercício 4: Análise Teórica (1,5 pontos)</h3>
    <p><strong>Problema:</strong> Analisar a complexidade dos códigos fornecidos sem implementá-los.</p>

    <h4>Códigos para Análise:</h4>
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

    <h2>🎯 Critérios de Avaliação</h2>
    <table>
        <tr>
            <th>Critério</th>
            <th>Peso</th>
            <th>Descrição</th>
        </tr>
        <tr>
            <td><strong>Corretude</strong></td>
            <td>30%</td>
            <td>Algoritmos funcionam corretamente</td>
        </tr>
        <tr>
            <td><strong>Complexidade</strong></td>
            <td>25%</td>
            <td>Análise correta da complexidade</td>
        </tr>
        <tr>
            <td><strong>Implementação</strong></td>
            <td>20%</td>
            <td>Qualidade do código (C e Python)</td>
        </tr>
        <tr>
            <td><strong>Experimentação</strong></td>
            <td>15%</td>
            <td>Testes adequados e resultados</td>
        </tr>
        <tr>
            <td><strong>Documentação</strong></td>
            <td>10%</td>
            <td>Relatório claro e bem estruturado</td>
        </tr>
    </table>

    <h2>📦 Formato de Entrega</h2>
    <ul>
        <li><strong>Código fonte:</strong> Arquivos .c e .py separados por exercício</li>
        <li><strong>Relatório:</strong> PDF com análises e resultados</li>
        <li><strong>Makefile:</strong> Para compilação dos códigos C</li>
        <li><strong>README:</strong> Instruções de execução</li>
    </ul>
    `
  },
  'lista02': {
    title: 'Lista de Exercícios 02: Estruturas de Dados Básicas',
    description: 'Implementação de estruturas lineares, arrays dinâmicos e análise de performance.',
    prazo: '08 de setembro de 2025',
    valor: '2,5 pontos',
    content: `
    <h1>Lista de Exercícios 02: Estruturas de Dados Básicas</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 08 de setembro de 2025<br>
    <strong>Valor:</strong> 2,5 pontos</p>

    <h2>📋 Instruções Gerais</h2>
    <ol>
        <li><strong>Implementar</strong> todos os algoritmos em <strong>C</strong> e <strong>Python</strong></li>
        <li><strong>Analisar</strong> a complexidade de tempo e espaço de cada implementação</li>
        <li><strong>Testar</strong> com diferentes cenários de entrada</li>
        <li><strong>Comparar</strong> diferentes abordagens quando aplicável</li>
        <li><strong>Documentar</strong> todo o desenvolvimento no relatório</li>
    </ol>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Array Dinâmico Completo (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um array dinâmico completo com todas as operações básicas.</p>
    
    <h4>Operações Obrigatórias:</h4>
    <ul>
        <li>create_array(), destroy_array()</li>
        <li>get(), set(), push_back(), push_front()</li>
        <li>pop_back(), pop_front()</li>
        <li>insert(), remove_at(), find()</li>
        <li>resize(), print_array()</li>
    </ul>

    <h3>Exercício 2: Matriz Esparsa (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar uma matriz esparsa usando três representações diferentes.</p>
    
    <h4>Abordagens:</h4>
    <ul>
        <li><strong>Lista de Triplas:</strong> (linha, coluna, valor)</li>
        <li><strong>Array de Listas:</strong> Uma lista por linha</li>
        <li><strong>Hash Table:</strong> Chave (linha,coluna) → valor</li>
    </ul>

    <h3>Exercício 3: Algoritmos de Manipulação de Arrays (1,5 pontos)</h3>
    <p><strong>Problemas:</strong></p>
    <ul>
        <li><strong>Rotação de Array:</strong> k posições à direita/esquerda</li>
        <li><strong>Produtos de Array:</strong> Produto exceto o próprio elemento</li>
        <li><strong>Subarray de Soma Máxima:</strong> Algoritmo de Kadane</li>
        <li><strong>Merge de K Arrays Ordenados:</strong> Combinação eficiente</li>
    </ul>

    <h3>Exercício 4: Análise de Performance (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Implementar e comparar versões otimizadas de algoritmos básicos.</p>
    
    <h4>Comparações:</h4>
    <ul>
        <li><strong>Busca Linear vs Busca Binária:</strong> Arrays de 1K a 1M elementos</li>
        <li><strong>Ordenação Otimizada:</strong> Bubble Sort, Insertion Sort, Selection Sort</li>
        <li><strong>Análise Empírica:</strong> Tempo, comparações, trocas, memória</li>
    </ul>

    <h3>Exercício 5: Problemas Aplicados (1,5 pontos)</h3>
    <p><strong>Sistemas Práticos:</strong></p>
    <ul>
        <li><strong>Sistema de Controle de Estoque:</strong> CRUD completo</li>
        <li><strong>Buffer Circular:</strong> Para streaming de dados</li>
        <li><strong>Cache LRU:</strong> Política Least Recently Used</li>
    </ul>
    `
  },
  'lista03': {
    title: 'Lista de Exercícios 03: Algoritmos Recursivos',
    description: 'Implementação e análise de algoritmos recursivos com casos práticos.',
    prazo: '22 de setembro de 2025',
    valor: '2,0 pontos',
    content: `
    <h1>Lista de Exercícios 03: Algoritmos Recursivos</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 22 de setembro de 2025<br>
    <strong>Valor:</strong> 2,0 pontos</p>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Fibonacci Otimizado (1,5 pontos)</h3>
    <p><strong>Problema:</strong> Implementar diferentes versões do algoritmo de Fibonacci.</p>
    
    <h4>Implementações Requeridas:</h4>
    <ul>
        <li>Recursão simples</li>
        <li>Recursão com memoização</li>
        <li>Versão iterativa</li>
        <li>Comparação de performance</li>
    </ul>

    <h3>Exercício 2: Torres de Hanói (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Resolver o problema clássico das Torres de Hanói.</p>
    
    <h3>Exercício 3: Busca em Árvore Binária (1,5 pontos)</h3>
    <p><strong>Problema:</strong> Implementar busca recursiva em árvore binária.</p>

    <h3>Exercício 4: Backtracking - N-Rainhas (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Resolver o problema das N-Rainhas usando backtracking.</p>

    <h3>Exercício 5: Análise de Complexidade (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Analisar a complexidade dos algoritmos implementados.</p>

    <h3>Exercício 6: Conversão para Iterativo (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Converter alguns algoritmos recursivos para versões iterativas.</p>
    `
  },
  'lista04': {
    title: 'Lista de Exercícios 04: Algoritmos de Ordenação',
    description: 'Implementação e comparação de diferentes algoritmos de ordenação.',
    prazo: '06 de outubro de 2025',
    valor: '3,0 pontos',
    content: `
    <h1>Lista de Exercícios 04: Algoritmos de Ordenação</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 06 de outubro de 2025<br>
    <strong>Valor:</strong> 3,0 pontos</p>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Algoritmos Elementares (1,0 ponto)</h3>
    <p><strong>Implementar:</strong> Bubble Sort, Selection Sort, Insertion Sort</p>
    
    <h3>Exercício 2: Merge Sort (1,0 ponto)</h3>
    <p><strong>Implementar:</strong> Merge Sort completo com análise</p>

    <h3>Exercício 3: Quick Sort (1,0 ponto)</h3>
    <p><strong>Implementar:</strong> Quick Sort com diferentes estratégias de pivot</p>

    <h3>Exercício 4: Shell Sort (0,5 pontos)</h3>
    <p><strong>Implementar:</strong> Shell Sort com diferentes sequências de gaps</p>

    <h3>Exercício 5: Heap Sort (1,0 ponto)</h3>
    <p><strong>Implementar:</strong> Heap Sort com heap binário</p>

    <h3>Exercício 6: Counting Sort (0,5 pontos)</h3>
    <p><strong>Implementar:</strong> Counting Sort para números inteiros</p>

    <h3>Exercício 7: Análise Comparativa (2,0 pontos)</h3>
    <p><strong>Comparar:</strong> Todos os algoritmos implementados com diferentes:</p>
    <ul>
        <li>Tamanhos de entrada</li>
        <li>Tipos de dados (ordenados, aleatórios, reversos)</li>
        <li>Métricas (tempo, comparações, trocas)</li>
    </ul>
    `
  }
};