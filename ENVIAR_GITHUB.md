# 🚀 COMANDOS PARA ENVIAR AO GITHUB

## Passo 1: Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em "New repository"
3. Nome: `algoritmos-complexidade`
4. Descrição: `Material didático - Algoritmos e Complexidade`
5. Deixe público
6. NÃO marque "Add README"
7. Clique "Create repository"

## Passo 2: Conectar e Enviar
Execute estes comandos no PowerShell (substitua SEU_USUARIO):

```powershell
# 1. Adicionar origem remota
git remote add origin https://github.com/SEU_USUARIO/algoritmos-complexidade.git

# 2. Renomear branch para main
git branch -M main

# 3. Enviar para GitHub
git push -u origin main
```

## Passo 3: Verificar
Acesse: https://github.com/SEU_USUARIO/algoritmos-complexidade

## ✅ Seu material estará disponível online!

### Estrutura que será publicada:
- README.md (página principal)
- 3 aulas completas
- 2 listas de exercícios  
- Códigos C e Python
- Documentação técnica
- Instruções de compilação

### Para futuras atualizações:
```powershell
git add .
git commit -m "Descrição da mudança"
git push
```
