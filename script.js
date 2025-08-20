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
            <a href="aulas/pdf/aula14.pdf" class="pdf-download-item" target="_blank">📄 Aula 14 PDF</a>
        </div>
        `
    }
};