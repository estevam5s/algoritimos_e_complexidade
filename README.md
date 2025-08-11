# Algoritmos e Complexidade Computacional

**Curso:** Sistemas de Informação  
**Disciplina:** ARA0174 - Algoritmos e Complexidade  
**Professor:** Vagner Cordeiro  
**Período:** 2025.2  
**Carga Horária:** 80 horas (4 horas/semana)  

## 👨‍🏫 Apresentação da Disciplina

Bem-vindos ao repositório oficial da disciplina **Algoritmos e Complexidade Computacional**! 

Este material foi desenvolvido especialmente para os estudantes do curso de **Sistemas de Informação** e contém todo o conteúdo teórico e prático necessário para dominar os fundamentos da computação eficiente.

### 🎯 Por que estudar Algoritmos?

A disciplina de Algoritmos e Complexidade é **fundamental** para qualquer profissional de Sistemas de Informação, pois fornece:

- **Base sólida** para desenvolvimento de software eficiente
- **Capacidade analítica** para resolver problemas computacionais
- **Conhecimento essencial** para entrevistas técnicas
- **Fundamentos** para áreas avançadas como IA, Big Data e Sistemas Distribuídos

## 📚 Ementa da Disciplina

### **Unidade I: Fundamentos Teóricos (20h)**
- Conceitos básicos de algoritmos
- Análise de complexidade temporal e espacial
- Notações assintóticas (Big O, Omega, Theta)
- Técnicas de análise matemática

### **Unidade II: Estruturas de Dados (25h)**
- Arrays e listas
- Pilhas e filas
- Listas ligadas e suas variações
- Árvores binárias e árvores de busca
- Tabelas hash

### **Unidade III: Algoritmos Fundamentais (20h)**
- Algoritmos de ordenação (Bubble, Selection, Insertion, Merge, Quick)
- Algoritmos de busca (Linear, Binária)
- Algoritmos em grafos (DFS, BFS)

### **Unidade IV: Técnicas Avançadas (15h)**
- Programação dinâmica
- Algoritmos gulosos
- Divisão e conquista
- Análise de problemas NP

## 📖 Guia de Estudos por Aulas

### **📘 Aula 01: Introdução aos Algoritmos**
- **Conteúdo:** Definições, propriedades e importância
- **Duração:** 2 horas
- **Arquivo:** [`aulas/aula01.md`](aulas/aula01.md)
- **Objetivos:**
  - Compreender o conceito de algoritmo
  - Identificar características de algoritmos eficientes
  - Aplicar análise básica de complexidade

### **📗 Aula 02: Notação Assintótica e Análise**
- **Conteúdo:** Big O, Omega, Theta e análise matemática
- **Duração:** 2 horas
- **Arquivo:** [`aulas/aula02.md`](aulas/aula02.md)
- **Objetivos:**
  - Dominar notações assintóticas
  - Analisar complexidade de algoritmos
  - Resolver recorrências simples

### **📙 Aula 03: Estruturas de Dados Lineares**
- **Conteúdo:** Arrays, listas, pilhas e filas
- **Duração:** 2 horas
- **Arquivo:** [`aulas/aula03.md`](aulas/aula03.md)
- **Objetivos:**
  - Implementar estruturas lineares
  - Comparar eficiência das operações
  - Escolher estrutura adequada para cada problema

### **📕 Próximas Aulas (em desenvolvimento)**
- Aula 04: Algoritmos de Ordenação I
- Aula 05: Algoritmos de Ordenação II
- Aula 06: Algoritmos de Busca
- Aula 07: Introdução a Grafos
- Aula 08: Programação Dinâmica

## 💻 Exercícios Práticos

### **Lista 01: Análise de Complexidade**
- **Arquivo:** [`exercicios/lista01.md`](exercicios/lista01.md)
- **Foco:** Análise teórica e prática de algoritmos
- **Linguagens:** C e Python
- **Prazo:** 2 semanas

### **Lista 02: Estruturas de Dados Básicas**
- **Arquivo:** [`exercicios/lista02.md`](exercicios/lista02.md)
- **Foco:** Implementação de estruturas lineares
- **Linguagens:** C e Python
- **Prazo:** 2 semanas

## 🔧 Ambiente de Desenvolvimento

### **Linguagens Utilizadas**
- **C**: Para compreender implementações de baixo nível
- **Python**: Para prototipagem rápida e visualização

### **Requisitos do Sistema**
- **Para C**: GCC 7.0+ ou Visual Studio
- **Para Python**: Python 3.8+ com bibliotecas padrão
- **Editor**: VS Code (recomendado) ou similar

### **Configuração Inicial**
```bash
# Clonar repositório
git clone https://github.com/cordeirotelecom/algoritimos_e_complexidade.git

# Navegar para a pasta
cd algoritimos_e_complexidade

# Testar Python
python exemplos/python/complexidade/exemplos_complexidade.py

# Compilar exemplos C
gcc -Wall -O2 -o bin/teste exemplos/c/complexidade/exemplos_complexidade.c
```

## 📊 Sistema de Avaliação

| **Avaliação** | **Peso** | **Descrição** | **Data** |
|---------------|----------|---------------|----------|
| **Prova 1** | 25% | Fundamentos e análise | Semana 8 |
| **Prova 2** | 25% | Estruturas de dados | Semana 12 |
| **Prova 3** | 25% | Algoritmos fundamentais | Semana 16 |
| **Exercícios** | 15% | Listas práticas | Contínuo |
| **Projeto** | 10% | Implementação completa | Final |

### **Critérios de Aprovação**
- Nota final ≥ 6,0
- Frequência ≥ 75%
- Entrega de pelo menos 80% dos exercícios

## 📋 Estrutura do Repositório

```
algoritimos_e_complexidade/
├── README.md                    # Este arquivo
├── aulas/                       # Material teórico
│   ├── aula01.md               # Introdução
│   ├── aula02.md               # Notação assintótica
│   └── aula03.md               # Estruturas lineares
├── exercicios/                  # Listas práticas
│   ├── lista01.md              # Análise de complexidade
│   └── lista02.md              # Estruturas de dados
├── exemplos/                    # Códigos de referência
│   ├── c/complexidade/         # Implementações C
│   └── python/complexidade/    # Implementações Python
├── docs/                        # Documentação técnica
│   └── compilacao_execucao.md  # Guia de configuração
└── bin/                         # Executáveis compilados
```

## 📚 Bibliografia

### **Bibliografia Básica**
1. **Cormen, T.H. et al.** *Introduction to Algorithms*, 4ª ed. MIT Press, 2022
2. **Sedgewick, R.; Wayne, K.** *Algorithms*, 4ª ed. Addison-Wesley, 2011
3. **Skiena, S.S.** *The Algorithm Design Manual*, 3ª ed. Springer, 2020

### **Bibliografia Complementar**
1. **Kleinberg, J.; Tardos, É.** *Algorithm Design*. Addison-Wesley, 2006
2. **Dasgupta, S. et al.** *Algorithms*. McGraw-Hill, 2008
3. **Levitin, A.** *Introduction to the Design and Analysis of Algorithms*, 3ª ed. Pearson, 2012

### **Recursos Online**
- [Visualização de Algoritmos](https://visualgo.net/)
- [Prática de Programação](https://www.hackerrank.com/)
- [Teoria Complementar](https://www.khanacademy.org/computing/computer-science/algorithms)

## 📞 Contato e Suporte

### **Professor Responsável**
**Prof. Vagner Cordeiro**  
📧 Email: vagner.cordeiro@universidade.edu.br  
🏢 Sala: Bloco A-205  
⏰ Atendimento: Segunda e Quarta, 14h-16h  

### **Monitoria**
⏰ Horário: Terça e Quinta, 16h-18h  
📍 Local: Laboratório de Informática 2  

### **Grupo de Estudos**
💬 Discord: [Link do servidor]  
📱 WhatsApp: [Link do grupo]  

## 🎯 Dicas para o Sucesso

1. **Pratique regularmente**: Algoritmos exigem prática constante
2. **Implemente os exemplos**: Não apenas leia, execute o código
3. **Participe das aulas**: Discussões em classe são fundamentais
4. **Forme grupos de estudo**: Aprender com colegas potencializa o aprendizado
5. **Use os recursos online**: Visualizações ajudam na compreensão
6. **Não deixe dúvidas acumularem**: Procure ajuda nos primeiros sinais de dificuldade

---

**Última atualização:** 11 de agosto de 2025  
**Versão do material:** 1.0  

*"A única maneira de aprender algoritmos é programando algoritmos."*  
— Prof. Vagner Cordeiro
