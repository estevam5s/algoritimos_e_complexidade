# Aula 14: Projetos Finais

## Objetivos
- Aplicar conhecimentos adquiridos em projetos práticos complexos
- Desenvolver sistemas completos integrando múltiplas estruturas de dados
- Demonstrar domínio em análise de algoritmos e otimização
- Apresentar soluções técnicas de forma profissional

---

## Estrutura dos Projetos

### Formato de Apresentação
- **Duração:** 15-20 minutos por equipe
- **Composição:** 2-3 alunos por equipe
- **Demonstração:** Sistema funcionando + código + análise
- **Documentação:** Relatório técnico completo

### Critérios de Avaliação
1. **Complexidade Técnica (25%):** Uso adequado de estruturas de dados
2. **Implementação (25%):** Qualidade do código e funcionalidade
3. **Análise (20%):** Complexidade computacional e otimizações
4. **Apresentação (15%):** Clareza e profissionalismo
5. **Documentação (15%):** Relatório técnico e comentários

---

## Projeto 1: Sistema de Roteamento de Rede

### Descrição
Desenvolva um simulador de roteamento de pacotes em uma rede de computadores.

### Requisitos Técnicos
- **Representação da Rede:** Grafo ponderado (latência/bandwidth)
- **Algoritmos de Roteamento:** Dijkstra, Bellman-Ford, Floyd-Warshall
- **Tabelas de Roteamento:** Hash tables para busca rápida
- **Simulação de Tráfego:** Filas de prioridade para pacotes

### Estrutura Base
```c
typedef struct Pacote {
    int id;
    int origem;
    int destino;
    int prioridade;
    double timestamp;
    int tamanho_bytes;
} Pacote;

typedef struct No_Rede {
    int id;
    char nome[50];
    int capacidade;
    Queue *buffer_pacotes;
    HashTable *tabela_roteamento;
} No_Rede;

typedef struct Rede {
    GrafoLista *topologia;
    No_Rede *nos;
    int num_nos;
    PriorityQueue *fila_eventos;
} Rede;
```

### Funcionalidades Obrigatórias
1. **Carregamento de Topologia:** Leitura de arquivo de configuração
2. **Cálculo de Rotas:** Implementar múltiplos algoritmos
3. **Simulação de Tráfego:** Geração e roteamento de pacotes
4. **Análise de Performance:** Latência, throughput, taxa de perda
5. **Visualização:** Saída gráfica ou textual das rotas

### Entregáveis
- Simulador funcional com interface de linha de comando
- Análise comparativa dos algoritmos de roteamento
- Relatório com métricas de performance da rede

---

## Projeto 2: Sistema de Gerenciamento de Banco de Dados Simples

### Descrição
Implemente um SGBD básico com suporte a índices e consultas.

### Requisitos Técnicos
- **Armazenamento:** Árvores B+ para índices primários
- **Índices Secundários:** Hash tables para busca por atributos
- **Buffer Pool:** LRU cache para páginas
- **Parser SQL:** Análise de comandos SELECT, INSERT, DELETE

### Estrutura Base
```c
typedef struct Registro {
    int id;
    char dados[256];
    int ativo;
} Registro;

typedef struct Pagina {
    Registro registros[MAX_REGISTROS_PAGINA];
    int num_registros;
    int pagina_id;
    int dirty;
} Pagina;

typedef struct Indice {
    BPlusTree *arvore_primaria;
    HashTable **indices_secundarios;
    int num_indices_sec;
} Indice;

typedef struct SGBD {
    Pagina **buffer_pool;
    int tamanho_buffer;
    Indice indice;
    FILE *arquivo_dados;
    LRUCache *cache;
} SGBD;
```

### Funcionalidades Obrigatórias
1. **DDL Básico:** CREATE TABLE, DROP TABLE
2. **DML Básico:** INSERT, SELECT, DELETE, UPDATE
3. **Índices:** Criação automática de índices
4. **Otimização:** Query planner básico
5. **Persistência:** Salvamento em arquivo binário

### Entregáveis
- SGBD funcional com comandos SQL básicos
- Análise de performance com diferentes índices
- Comparação com sistemas existentes (SQLite)

---

## Projeto 3: Compilador para Linguagem Simples

### Descrição
Desenvolva um compilador completo para uma linguagem de programação simples.

### Requisitos Técnicos
- **Análise Léxica:** Tokenização usando autômatos finitos
- **Análise Sintática:** Parser recursivo descendente
- **Tabela de Símbolos:** Hash table com escopo aninhado
- **Geração de Código:** Assembly ou bytecode

### Estrutura Base
```c
typedef enum {
    TOKEN_NUMERO, TOKEN_IDENTIFICADOR, TOKEN_OPERADOR,
    TOKEN_PALAVRA_CHAVE, TOKEN_DELIMITADOR, TOKEN_EOF
} TipoToken;

typedef struct Token {
    TipoToken tipo;
    char lexema[100];
    int linha;
    int coluna;
} Token;

typedef struct NoAST {
    enum { NO_PROGRAMA, NO_DECLARACAO, NO_EXPRESSAO, NO_COMANDO } tipo;
    struct NoAST **filhos;
    int num_filhos;
    Token token;
} NoAST;

typedef struct Simbolo {
    char nome[100];
    enum { TIPO_INT, TIPO_FLOAT, TIPO_STRING } tipo;
    int escopo;
    int endereco;
} Simbolo;
```

### Funcionalidades Obrigatórias
1. **Sintaxe Básica:** Variáveis, expressões aritméticas, controle de fluxo
2. **Funções:** Declaração e chamada de funções
3. **Tipos de Dados:** int, float, string, arrays
4. **Tratamento de Erros:** Mensagens detalhadas de erro
5. **Otimizações:** Constant folding, dead code elimination

### Entregáveis
- Compilador funcional com gramática documentada
- Suite de testes com programas de exemplo
- Análise de complexidade do compilador

---

## Projeto 4: Sistema de Recomendação Inteligente

### Descrição
Desenvolva um sistema de recomendação usando algoritmos de filtragem colaborativa.

### Requisitos Técnicos
- **Grafo de Usuários:** Similaridade baseada em preferências
- **Matriz de Avaliações:** Representação esparsa eficiente
- **Algoritmos ML:** k-NN, clustering, SVD
- **Índices:** Busca eficiente por similaridade

### Estrutura Base
```c
typedef struct Usuario {
    int id;
    char nome[100];
    HashMap *avaliacoes;  // item_id -> rating
    Vector *preferencias;
} Usuario;

typedef struct Item {
    int id;
    char titulo[200];
    char categoria[50];
    Vector *caracteristicas;
    double rating_medio;
} Item;

typedef struct SistemaRecomendacao {
    Usuario *usuarios;
    Item *itens;
    int num_usuarios, num_itens;
    MatrizEsparsa *matriz_avaliacoes;
    GrafoLista *grafo_similaridade;
} SistemaRecomendacao;
```

### Funcionalidades Obrigatórias
1. **Cálculo de Similaridade:** Cosine, Pearson, Jaccard
2. **Recomendação por Conteúdo:** Baseada em características
3. **Filtragem Colaborativa:** User-based e item-based
4. **Algoritmos Híbridos:** Combinação de técnicas
5. **Avaliação:** Métricas de precisão e recall

### Entregáveis
- Sistema de recomendação com interface web/CLI
- Análise comparativa de diferentes algoritmos
- Dataset de teste e métricas de avaliação

---

## Projeto 5: Simulador de Sistema Operacional

### Descrição
Implemente um simulador de sistema operacional com escalonamento e gerência de memória.

### Requisitos Técnicos
- **Escalonamento:** FIFO, SJF, Round Robin, Prioridade
- **Gerência de Memória:** Paginação, algoritmos de substituição
- **Sistema de Arquivos:** Estrutura hierárquica com índices
- **Sincronização:** Semáforos e monitores

### Estrutura Base
```c
typedef struct Processo {
    int pid;
    int tempo_chegada;
    int tempo_execucao;
    int tempo_restante;
    int prioridade;
    enum { NOVO, PRONTO, EXECUTANDO, BLOQUEADO, TERMINADO } estado;
    int *paginas;
    int num_paginas;
} Processo;

typedef struct Memoria {
    int *frames;
    int num_frames;
    Queue *fila_substituicao;
    int page_faults;
} Memoria;

typedef struct SO {
    Queue **filas_prioridade;
    Memoria memoria;
    Processo *processos;
    int num_processos;
    int tempo_atual;
} SO;
```

### Funcionalidades Obrigatórias
1. **Criação de Processos:** Geração dinâmica com parâmetros
2. **Algoritmos de Escalonamento:** Múltiplas políticas
3. **Simulação de Memória:** Paginação com algoritmos LRU, FIFO
4. **Estatísticas:** Tempo médio de espera, throughput
5. **Visualização:** Gráficos de estado dos processos

### Entregáveis
- Simulador com interface gráfica ou textual
- Comparação de políticas de escalonamento
- Análise de performance de algoritmos de memória

---

## Projeto 6: Engine de Jogos 2D com IA

### Descrição
Desenvolva uma engine de jogos 2D com inteligência artificial para NPCs.

### Requisitos Técnicos
- **Estruturas Espaciais:** Quadtree para detecção de colisão
- **Pathfinding:** A* para navegação
- **IA Comportamental:** Máquinas de estado finitas
- **Sistema de Entidades:** Component-based architecture

### Estrutura Base
```c
typedef struct Entidade {
    int id;
    float x, y;
    float velocidade_x, velocidade_y;
    ComponenteMask componentes;
    void *dados_componentes[MAX_COMPONENTES];
} Entidade;

typedef struct Quadtree {
    struct Quadtree *filhos[4];
    Lista *entidades;
    float x, y, largura, altura;
    int nivel;
} Quadtree;

typedef struct EstadoIA {
    enum { PATRULHAR, PERSEGUIR, ATACAR, FUGIR } estado_atual;
    Entidade *alvo;
    Lista *caminho;
    float tempo_estado;
} EstadoIA;
```

### Funcionalidades Obrigatórias
1. **Sistema de Física:** Detecção e resolução de colisões
2. **Rendering:** Sistema básico de desenho 2D
3. **IA de NPCs:** Comportamentos complexos
4. **Sistema de Eventos:** Publisher-subscriber pattern
5. **Editor de Mapas:** Ferramenta para criação de levels

### Entregáveis
- Engine funcional com jogo demonstrativo
- Documentação da arquitetura da engine
- Análise de performance de algoritmos espaciais

---

## Cronograma de Apresentações

### Semana 1: Propostas de Projeto
- Apresentação das ideias (5 min por equipe)
- Feedback e refinamento dos requisitos
- Formação definitiva das equipes

### Semana 2-4: Desenvolvimento
- Checkpoint semanal de progresso
- Mentoria individual por equipe
- Resolução de dúvidas técnicas

### Semana 5: Apresentações Finais

#### Formato da Apresentação:
1. **Introdução (3 min):** Problema e solução proposta
2. **Demonstração (8 min):** Sistema funcionando
3. **Aspectos Técnicos (5 min):** Estruturas de dados e algoritmos
4. **Análise (3 min):** Performance e complexidade
5. **Perguntas (2 min):** Arguição da banca

### Cronograma Detalhado:
```
Segunda: Projetos 1 e 2 (Rede e SGBD)
Terça: Projetos 3 e 4 (Compilador e Recomendação)
Quarta: Projetos 5 e 6 (SO e Engine de Jogos)
Quinta: Apresentações extras e arguição
Sexta: Entrega dos relatórios finais
```

---

## Recursos e Suporte

### Ferramentas Recomendadas
- **Desenvolvimento:** GCC, Make, Git
- **Debugging:** GDB, Valgrind
- **Profiling:** gprof, perf
- **Documentação:** Doxygen, Markdown
- **Apresentação:** PowerPoint, LaTeX Beamer

### Bibliotecas Permitidas
- **Gráficas:** SDL2, SFML (apenas para interface)
- **Estruturas Básicas:** Implementação própria obrigatória
- **Utilitários:** matemática padrão (math.h)

### Material de Apoio
- **Código Base:** Templates disponíveis no repositório
- **Datasets:** Dados de teste para cada projeto
- **Exemplos:** Implementações de referência

### Suporte Técnico
- **Horário Estendido:** Atendimento durante o desenvolvimento
- **Fórum Online:** Dúvidas e discussões entre equipes
- **Code Review:** Revisão de código antes da apresentação

---

## Avaliação e Notas

### Distribuição de Pontos
- **Projeto Final:** 60% da nota do bimestre
- **Laboratórios:** 30% da nota do bimestre
- **Participação:** 10% da nota do bimestre

### Critérios Detalhados

#### Complexidade Técnica (25 pontos)
- **Excelente (23-25):** Uso avançado de múltiplas estruturas
- **Bom (20-22):** Uso adequado das estruturas necessárias
- **Regular (15-19):** Uso básico com algumas limitações
- **Insuficiente (0-14):** Estruturas inadequadas ou incorretas

#### Implementação (25 pontos)
- **Excelente (23-25):** Código limpo, eficiente e sem bugs
- **Bom (20-22):** Funcional com pequenos problemas
- **Regular (15-19):** Funcional com limitações significativas
- **Insuficiente (0-14):** Não funcional ou com bugs graves

#### Análise Técnica (20 pontos)
- **Excelente (18-20):** Análise completa com otimizações
- **Bom (16-17):** Análise adequada da complexidade
- **Regular (12-15):** Análise básica presente
- **Insuficiente (0-11):** Sem análise ou incorreta

#### Apresentação (15 pontos)
- **Excelente (14-15):** Clara, profissional e dentro do tempo
- **Bom (12-13):** Bem estruturada com pequenas falhas
- **Regular (9-11):** Compreensível mas com problemas
- **Insuficiente (0-8):** Confusa ou muito superficial

#### Documentação (15 pontos)
- **Excelente (14-15):** Completa e bem estruturada
- **Bom (12-13):** Adequada com pequenas omissões
- **Regular (9-11):** Básica mas presente
- **Insuficiente (0-8):** Inadequada ou ausente

### Entrega do Relatório Final
```
relatorio_final/
├── resumo_executivo.md
├── especificacao_tecnica.md
├── analise_complexidade.md
├── manual_usuario.md
├── codigo_fonte/
├── testes/
└── apresentacao.pdf
```

---

## Considerações Finais

Este projeto final representa a culminação do aprendizado em Algoritmos e Complexidade. É uma oportunidade de demonstrar não apenas conhecimento técnico, mas também capacidade de análise, síntese e apresentação profissional.

**Lembre-se:**
- A originalidade e criatividade são valorizadas
- A qualidade é mais importante que a quantidade de features
- A análise teórica deve estar alinhada com os resultados práticos
- A apresentação é parte fundamental da avaliação

**Boa sorte e excelente trabalho a todos!**

---

**Prof. Vagner Cordeiro**  
Sistemas de Informação  
Algoritmos e Complexidade - 2024
