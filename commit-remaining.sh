#!/bin/bash

# Script para commitar os arquivos restantes
# Algoritmos e Complexidade Computacional - ReactJS

echo "🚀 Commitando arquivos restantes..."
echo "📍 Projeto: Algoritmos e Complexidade Computacional - ReactJS"
echo ""

# Função para fazer commit de um arquivo
commit_file() {
    local file="$1"
    local message="$2"
    
    if [ -f "$file" ] || [ -d "$file" ]; then
        echo "📦 Adicionando: $file"
        git add "$file"
        echo "✅ Commit: $message"
        git commit -m "$message"
        echo ""
    else
        echo "❌ Arquivo não encontrado: $file"
        echo ""
    fi
}

# Commitar arquivos de configuração do projeto
commit_file "commit.sh" "script: add commit script for individual file commits"

commit_file "setup-reactjs.js" "script: add setup script for automated React project creation"

# Commitar arquivos de configuração do VS Code
if [ -d ".vscode" ]; then
    echo "📦 Adicionando: .vscode/"
    git add .vscode/
    echo "✅ Commit: config: add VS Code workspace settings and extensions"
    git commit -m "config: add VS Code workspace settings and extensions"
    echo ""
fi

# Commitar documentação adicional
commit_file "docs/README.md" "docs: add additional documentation in docs folder"

# Commitar arquivos públicos do React
commit_file "public/favicon.ico" "asset: add favicon for the web application"

commit_file "public/logo192.png" "asset: add 192px logo for PWA and mobile"

commit_file "public/logo512.png" "asset: add 512px logo for PWA and desktop"

commit_file "public/manifest.json" "config: add PWA manifest for installable web app"

commit_file "public/robots.txt" "seo: add robots.txt for search engine optimization"

# Commitar CSS adicional
commit_file "src/index.css" "style: add additional global CSS styles"

# Verificar se existe arquivo .md vazio e removê-lo ou commitá-lo
if [ -f ".md" ]; then
    if [ -s ".md" ]; then
        # Arquivo tem conteúdo
        commit_file ".md" "docs: add markdown documentation file"
    else
        # Arquivo vazio, remover
        echo "🗑️ Removendo arquivo .md vazio..."
        rm ".md"
        echo ""
    fi
fi

# Verificar se há mais arquivos não rastreados
echo "📊 Verificando arquivos restantes..."
untracked_files=$(git ls-files --others --exclude-standard)

if [ -z "$untracked_files" ]; then
    echo "✅ Todos os arquivos foram commitados!"
else
    echo "⚠️ Ainda existem arquivos não rastreados:"
    echo "$untracked_files"
    echo ""
    echo "🔧 Para adicionar todos de uma vez:"
    echo "git add ."
    echo "git commit -m 'feat: add remaining project files'"
fi

echo ""
echo "📈 Status final:"
git status --short

echo ""
echo "📈 Últimos commits:"
git log --oneline -5

echo ""
echo "🚀 Para enviar ao GitHub:"
echo "git push origin main"