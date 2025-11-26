# 👥 Integrantes do Projeto  
### **Pedro Henrique Nascimento — 2513145**  
### **Vitor Rezende — 2507074**  
### **Mateus Ramos Medeiros — 2508960**  
### **Emanuel Blummer Nieton — 2409398**

---

# 🍕 Pizzaria Anchieta — Sistema de Pedidos Online

Este projeto consiste em uma aplicação web desenvolvida com **React + TypeScript**, permitindo que o usuário faça login, se cadastre, escolha uma pizza, selecione tamanho, adicionais e finalize o pedido com confirmação visual.

Foi pensado para ser simples, rápido e com design moderno em **tons de azul**, oferecendo uma experiência amigável tanto para estudo quanto para demonstração.

---

## 🚀 Funcionalidades

### 👤 Autenticação
- Tela de **Login**
- Tela de **Cadastro**
- Troca de telas de forma suave

### 🍕 Montagem da Pizza
- Seleção de **sabor**
- Seleção de **tamanho (P, M, G)**
- Adicionais opcionais (borda, bacon, queijo, etc.)
- Cálculo automático do valor total

### ✅ Finalização
Após clicado em **Confirmar Pedido**, aparece uma tela de:

> **Pedido enviado com sucesso!**

Simples, funcional e intuitivo.

---

## 🧩 Desafios Enfrentados Durante o Desenvolvimento

Durante o desenvolvimento do projeto, alguns pontos exigiram atenção especial:

### 🔹 Navegação por telas sem usar React Router  
O projeto utiliza **controle manual de telas via useState**, o que exigiu cuidado para evitar conflitos e manter a navegação fluida.

### 🔹 Cálculo dinâmico de preço  
Criar um sistema que:
- Modifica preço conforme tamanho  
- Soma adicionais  
- Impede erros quando nada está selecionado  
Foi um desafio divertido.

### 🔹 Estilização moderna (efeito blur)  
O design utiliza:
- **backdrop-filter**
- **transparências**
- **contraste de fontes**

Isso exigiu ajustes de compatibilidade no CSS.

### 🔹 Organização do estado  
Com diversas seleções (sabor, tamanho, adicionais), precisou-se garantir que cada escolha atualizasse corretamente o estado global da tela.

---

## 🎨 Visual e Design

- Paleta em **azul** moderna e suave  
- Botões claros e destacados  
- Layout centralizado e limpo  
- Efeito “glassmorphism” no container  
- Textos aumentados para melhor leitura  

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **CSS moderno**
- Hooks (useState)

---

## 📁 Estrutura do Projeto
