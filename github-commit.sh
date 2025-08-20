#!/bin/bash

# Script para fazer commit individual de cada arquivo do projeto React
# Algoritmos e Complexidade

echo "🚀 Iniciando commits individuais dos arquivos..."
echo "📍 Projeto: Algoritmos e Complexidade - ReactJS"
echo ""

# Função para fazer commit de um arquivo
commit_file() {
    local file="$1"
    local message="$2"
    
    if [ -f "$file" ]; then
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

# Verificar se estamos em um repositório git
if [ ! -d ".git" ]; then
    echo "🔧 Inicializando repositório Git..."
    git init
    echo ""
fi

# Commits dos arquivos principais
commit_file "package.json" "feat: add package.json with dependencies for React educational platform"

commit_file "public/index.html" "feat: add enhanced index.html with loading screen and meta tags"

commit_file "src/index.js" "feat: add main index.js entry point for React application"

commit_file "src/App.js" "feat: add main App component with routing and state management"

commit_file "src/styles/App.css" "style: add comprehensive CSS styles for the entire application"

# Commits dos componentes Header
commit_file "src/components/Header/Header.js" "feat: add Header component with course information and professor details"

commit_file "src/components/Header/Header.css" "style: add Header component styles with gradient and info cards"

# Commits dos componentes Navigation
commit_file "src/components/Navigation/Navigation.js" "feat: add Navigation component with Material-UI tabs"

commit_file "src/components/Navigation/Navigation.css" "style: add Navigation component styles with hover effects"

# Commits dos componentes Sections
commit_file "src/components/Sections/MainContent.js" "feat: add MainContent component for section rendering logic"

commit_file "src/components/Sections/MainContent.css" "style: add MainContent component base styles"

commit_file "src/components/Sections/OverviewSection.js" "feat: add OverviewSection with course statistics and methodology"

commit_file "src/components/Sections/OverviewSection.css" "style: add OverviewSection styles with highlight boxes and stats grid"

commit_file "src/components/Sections/EmentaSection.js" "feat: add EmentaSection with curriculum and evaluation system"

commit_file "src/components/Sections/AulasSection.js" "feat: add AulasSection with classes list and PDF downloads"

commit_file "src/components/Sections/AulasSection.css" "style: add AulasSection styles with gradient cards and hover effects"

commit_file "src/components/Sections/ExerciciosSection.js" "feat: add ExerciciosSection with exercise lists and requirements"

commit_file "src/components/Sections/RecursosSection.js" "feat: add RecursosSection with code examples and online resources"

commit_file "src/components/Sections/CronogramaSection.js" "feat: add CronogramaSection with custom timeline and milestones"

# Commits dos componentes Chat
commit_file "src/components/Chat/ChatModal.js" "feat: add ChatModal with Gemini AI integration and course context"

commit_file "src/components/Chat/ChatModal.css" "style: add ChatModal styles with chat bubbles and animations"

# Commits dos componentes CodeEditor
commit_file "src/components/CodeEditor/CodeEditorModal.js" "feat: add CodeEditorModal with C/Python support and code execution simulation"

# Commits dos componentes Modals
commit_file "src/components/Modals/AulaModal.js" "feat: add AulaModal for displaying class content with navigation"

commit_file "src/components/Modals/ExercicioModal.js" "feat: add ExercicioModal for displaying exercise lists and requirements"

commit_file "src/components/Modals/DocsModal.js" "feat: add DocsModal for displaying documentation and setup guides"

# Commits dos arquivos de dados
commit_file "src/data/aulasData.js" "data: add aulasData with complete class content and exercise information"

commit_file "src/config/index.js" "config: add project configuration with API keys and theme settings"

# Commits dos arquivos de documentação
commit_file "README.md" "docs: add comprehensive README with installation and usage instructions"

# Commit de arquivos de exemplo (se existirem)
commit_file "public/exemplos/c/busca_binaria.c" "example: add binary search example in C with detailed comments"

commit_file "public/exemplos/python/busca_binaria.py" "example: add binary search example in Python with documentation"

# Commits de arquivos de configuração adicionais
commit_file ".gitignore" "config: add .gitignore for React project with common exclusions"

commit_file "scripts/dev-server.js" "script: add development server script with auto-open browser"

# Verificar status final
echo "📊 Status final do repositório:"
git status

echo ""
echo "📈 Histórico de commits:"
git log --oneline -10

echo ""
echo "🎉 Todos os commits foram realizados com sucesso!"
echo "📁 Total de arquivos commitados: $(git rev-list --count HEAD) commits"
echo ""
echo "🔧 Para enviar ao GitHub:"
echo "   git remote add origin https://github.com/SEU_USUARIO/algoritmos-complexidade-react.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "🚀 Para iniciar o projeto:"
echo "   npm start"