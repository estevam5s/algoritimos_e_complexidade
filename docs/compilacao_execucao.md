# Guia de Compilação e Execução

## 📋 Pré-requisitos

### Para C:
- **GCC** (GNU Compiler Collection)
- **Windows**: MinGW-w64 ou Visual Studio
- **Linux/Mac**: gcc instalado via package manager

### Para Python:
- **Python 3.8+**
- **Bibliotecas**: time, random (built-in)

## 🔧 Compilação dos Exemplos em C

### Compilação Básica
```bash
# Exemplo de complexidade
gcc -o exemplos_complexidade exemplos/c/complexidade/exemplos_complexidade.c

# Com flags de otimização e debug
gcc -Wall -g -O2 -o exemplos_complexidade exemplos/c/complexidade/exemplos_complexidade.c
```

### Compilação em Lote (Windows PowerShell)
```powershell
# Compilar todos os exemplos C
Get-ChildItem -Path "exemplos/c" -Filter "*.c" -Recurse | ForEach-Object {
    $outputName = $_.BaseName
    $inputPath = $_.FullName
    gcc -Wall -g -o "bin/$outputName" $inputPath
}
```

### Makefile (Opcional)
```makefile
CC=gcc
CFLAGS=-Wall -g -O2
SRCDIR=exemplos/c
BINDIR=bin

# Alvos
all: exemplos_complexidade

exemplos_complexidade: $(SRCDIR)/complexidade/exemplos_complexidade.c
	$(CC) $(CFLAGS) -o $(BINDIR)/$@ $<

clean:
	rm -f $(BINDIR)/*

.PHONY: all clean
```

## ▶️ Execução dos Exemplos

### C (após compilação):
```bash
# Windows
.\bin\exemplos_complexidade.exe

# Linux/Mac
./bin/exemplos_complexidade
```

### Python:
```bash
# Executar diretamente
python exemplos/python/complexidade/exemplos_complexidade.py

# Com medição de tempo
python -m cProfile exemplos/python/complexidade/exemplos_complexidade.py
```

## 🧪 Scripts de Teste

### Script de Teste Automatizado (Python)
```python
#!/usr/bin/env python3
"""
Script para testar todos os exemplos de código
"""

import subprocess
import os
import sys

def compilar_c():
    """Compila todos os arquivos C"""
    print("Compilando exemplos em C...")
    
    c_files = []
    for root, dirs, files in os.walk("exemplos/c"):
        for file in files:
            if file.endswith(".c"):
                c_files.append(os.path.join(root, file))
    
    os.makedirs("bin", exist_ok=True)
    
    for c_file in c_files:
        basename = os.path.splitext(os.path.basename(c_file))[0]
        output = f"bin/{basename}"
        
        try:
            subprocess.run([
                "gcc", "-Wall", "-g", "-O2", 
                "-o", output, c_file
            ], check=True)
            print(f"✓ {c_file} compilado com sucesso")
        except subprocess.CalledProcessError:
            print(f"✗ Erro ao compilar {c_file}")

def executar_testes():
    """Executa todos os testes"""
    print("\nExecutando testes...")
    
    # Testar executáveis C
    for exe in os.listdir("bin"):
        if os.path.isfile(f"bin/{exe}"):
            print(f"\n--- Executando {exe} ---")
            try:
                subprocess.run([f"bin/{exe}"], check=True)
                print(f"✓ {exe} executado com sucesso")
            except subprocess.CalledProcessError:
                print(f"✗ Erro ao executar {exe}")
    
    # Testar scripts Python
    python_files = []
    for root, dirs, files in os.walk("exemplos/python"):
        for file in files:
            if file.endswith(".py"):
                python_files.append(os.path.join(root, file))
    
    for py_file in python_files:
        print(f"\n--- Executando {py_file} ---")
        try:
            subprocess.run([sys.executable, py_file], check=True)
            print(f"✓ {py_file} executado com sucesso")
        except subprocess.CalledProcessError:
            print(f"✗ Erro ao executar {py_file}")

if __name__ == "__main__":
    compilar_c()
    executar_testes()
```

### Script PowerShell para Windows
```powershell
# test_all.ps1
Write-Host "=== TESTE AUTOMÁTICO DOS EXEMPLOS ===" -ForegroundColor Green

# Criar diretório bin se não existir
if (-not (Test-Path "bin")) {
    New-Item -ItemType Directory -Name "bin"
}

# Compilar arquivos C
Write-Host "`nCompilando exemplos em C..." -ForegroundColor Yellow
Get-ChildItem -Path "exemplos/c" -Filter "*.c" -Recurse | ForEach-Object {
    $outputName = $_.BaseName
    $inputPath = $_.FullName
    
    Write-Host "Compilando $($_.Name)..." -ForegroundColor Cyan
    gcc -Wall -g -O2 -o "bin/$outputName" $inputPath
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Compilado com sucesso" -ForegroundColor Green
    } else {
        Write-Host "✗ Erro na compilação" -ForegroundColor Red
    }
}

# Executar exemplos C
Write-Host "`nExecutando exemplos em C..." -ForegroundColor Yellow
Get-ChildItem -Path "bin" -Filter "*.exe" | ForEach-Object {
    Write-Host "Executando $($_.Name)..." -ForegroundColor Cyan
    & $_.FullName
    Write-Host "--- Fim de $($_.Name) ---`n" -ForegroundColor Gray
}

# Executar exemplos Python
Write-Host "Executando exemplos em Python..." -ForegroundColor Yellow
Get-ChildItem -Path "exemplos/python" -Filter "*.py" -Recurse | ForEach-Object {
    Write-Host "Executando $($_.Name)..." -ForegroundColor Cyan
    python $_.FullName
    Write-Host "--- Fim de $($_.Name) ---`n" -ForegroundColor Gray
}

Write-Host "=== TESTES CONCLUÍDOS ===" -ForegroundColor Green
```

## 📊 Medição de Performance

### Script de Benchmark (Python)
```python
"""
Script para medir performance dos algoritmos
"""

import time
import random
import csv
import matplotlib.pyplot as plt

def medir_algoritmo(func, dados, num_execucoes=10):
    """Mede tempo médio de execução"""
    tempos = []
    
    for _ in range(num_execucoes):
        dados_copia = dados.copy()
        inicio = time.perf_counter()
        func(dados_copia)
        fim = time.perf_counter()
        tempos.append(fim - inicio)
    
    return sum(tempos) / len(tempos)

def benchmark_ordenacao():
    """Benchmark de algoritmos de ordenação"""
    from exemplos.python.complexidade.exemplos_complexidade import (
        bubble_sort, selection_sort, insertion_sort, merge_sort, quick_sort
    )
    
    algoritmos = {
        'Bubble Sort': bubble_sort,
        'Selection Sort': selection_sort,
        'Insertion Sort': insertion_sort,
        'Merge Sort': lambda x: merge_sort(x),
        'Quick Sort': lambda x: quick_sort(x)
    }
    
    tamanhos = [100, 200, 500, 1000, 2000]
    resultados = {}
    
    for nome, algoritmo in algoritmos.items():
        resultados[nome] = []
        print(f"Testando {nome}...")
        
        for tamanho in tamanhos:
            dados = [random.randint(0, 1000) for _ in range(tamanho)]
            tempo = medir_algoritmo(algoritmo, dados)
            resultados[nome].append(tempo)
            print(f"  Tamanho {tamanho}: {tempo:.6f}s")
    
    # Salvar resultados em CSV
    with open('benchmark_results.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Algoritmo', 'Tamanho', 'Tempo'])
        
        for nome, tempos in resultados.items():
            for i, tempo in enumerate(tempos):
                writer.writerow([nome, tamanhos[i], tempo])
    
    return resultados, tamanhos

if __name__ == "__main__":
    resultados, tamanhos = benchmark_ordenacao()
    print("\nBenchmark concluído! Resultados salvos em 'benchmark_results.csv'")
```

## 🐛 Debugging

### Flags Úteis para Compilação C
```bash
# Debug completo
gcc -Wall -Wextra -g -fsanitize=address -o programa programa.c

# Análise estática
gcc -Wall -Wextra -Wpedantic -g -o programa programa.c

# Otimização máxima
gcc -Wall -O3 -DNDEBUG -o programa programa.c
```

### Debugging com GDB
```bash
# Compilar com símbolos de debug
gcc -g -o programa programa.c

# Executar com GDB
gdb ./programa

# Comandos úteis no GDB:
# (gdb) break main
# (gdb) run
# (gdb) step
# (gdb) print variavel
# (gdb) continue
```

### Profiling Python
```bash
# Profile básico
python -m cProfile script.py

# Profile detalhado
python -m cProfile -o profile.stats script.py

# Análise dos resultados
python -c "import pstats; pstats.Stats('profile.stats').sort_stats('cumulative').print_stats()"
```

## 📁 Estrutura de Diretórios Recomendada

```
algoritimos_github/
├── bin/                    # Executáveis compilados
├── exemplos/
│   ├── c/
│   │   ├── complexidade/
│   │   ├── estruturas/
│   │   └── algoritmos/
│   └── python/
│       ├── complexidade/
│       ├── estruturas/
│       └── algoritmos/
├── tests/                  # Scripts de teste
├── docs/                   # Documentação adicional
├── assets/                 # Recursos (imagens, etc.)
└── tools/                  # Ferramentas auxiliares
```

## 🔗 Recursos Adicionais

### Ferramentas Online
- **Compiler Explorer**: https://godbolt.org/
- **Repl.it**: https://repl.it/
- **Python Tutor**: http://pythontutor.com/

### Visualizadores de Algoritmos
- **Algorithm Visualizer**: https://algorithm-visualizer.org/
- **VisuAlgo**: https://visualgo.net/
- **Sorting Algorithms Visualization**: https://www.sortvisualizer.com/

---

*Guia preparado pelo Prof. Vagner Cordeiro - ARA0174*
