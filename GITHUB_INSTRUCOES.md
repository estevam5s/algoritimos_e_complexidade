# Instruções para Publicação no GitHub

## Como Enviar seu Material para o GitHub

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New repository"** (verde)
3. Preencha os dados:
   - **Repository name**: `algoritmos-complexidade`
   - **Description**: `Material didático para disciplina de Algoritmos e Complexidade`
   - Deixe **Public** marcado
   - **NÃO** marque "Add a README file" (já temos um)
4. Clique em **"Create repository"**

### 2. Conectar seu Repositório Local ao GitHub

Abra o PowerShell na pasta do projeto e execute:

```powershell
# Adicionar origem remota (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/algoritmos-complexidade.git

# Renomear branch principal para 'main' (padrão do GitHub)
git branch -M main

# Enviar arquivos para o GitHub
git push -u origin main
```

### 3. Verificar se Funcionou

1. Acesse seu repositório no GitHub
2. Você deve ver todos os arquivos e pastas:
   - `README.md`
   - `aulas/` (3 arquivos)
   - `exercicios/` (2 arquivos)
   - `exemplos/` (códigos C e Python)
   - `docs/` (documentação)

### 4. Atualizar o Material

Sempre que fizer mudanças nos arquivos:

```powershell
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição da mudança"

# Enviar para GitHub
git push
```

## Estrutura Final no GitHub

Seu repositório terá esta estrutura profissional:

```
algoritmos-complexidade/
├── README.md                    # Página principal do curso
├── aulas/                       # Material teórico
│   ├── aula01.md               # Introdução e conceitos
│   ├── aula02.md               # Notação assintótica  
│   └── aula03.md               # Estruturas lineares
├── exercicios/                  # Listas práticas
│   ├── lista01.md              # Análise de complexidade
│   └── lista02.md              # Estruturas de dados
├── exemplos/                    # Códigos de referência
│   ├── c/complexidade/         # Implementações C
│   └── python/complexidade/    # Implementações Python
├── docs/                        # Documentação técnica
│   └── compilacao_execucao.md
└── bin/                         # Executáveis compilados
```

## Acessar o Material

Após publicar, estudantes podem:

1. **Visualizar online**: Diretamente no GitHub
2. **Clonar repositório**: `git clone https://github.com/SEU_USUARIO/algoritmos-complexidade.git`
3. **Download ZIP**: Botão verde "Code" > "Download ZIP"

## Link Final

Seu material estará disponível em:
`https://github.com/SEU_USUARIO/algoritmos-complexidade`
