# 🛡️ Reto 1 - Login Vulnerable a Inyección NoSQL

Este proyecto es parte de una serie de retos de ciberseguridad, enfocados en mostrar vulnerabilidades comunes en aplicaciones web. En este caso, se ha desarrollado una aplicación con un sistema de login **vulnerable a inyección NoSQL**, simulando un entorno real de prueba.

---

## 🎯 Objetivo

Simular una aplicación vulnerable para:
- Comprender cómo se produce una inyección NoSQL.
- Practicar técnicas básicas de pentesting ético.
- Aplicar buenas prácticas de desarrollo seguro.

---

## ⚙️ Tecnologías utilizadas

- 🟢 **Node.js** con Express (Backend)
- 🍃 **MongoDB** y Mongoose (Base de datos)
- 🌐 **HTML + JavaScript** (Frontend)
- 📁 Variables de entorno con `dotenv`

---
## 🔧 Requisitos

- Node.js (v18+ recomendado)
- Una cuenta de MongoDB Atlas (o instancia local de MongoDB)

---
## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/dinovillalobos/LoginVulnerable.git
   cd LoginVulnerable

2. **Instalar dependencias**
   ```bash
   cd backend
   npm install
   npm init -y
   npm install dotenv


3. **Configurar variables de entorno**
   Crea un archivo .env dentro del directorio backend con el siguiente contenido
   ```bash
   PORT=3000
   MONGODB_URI=tu_uri_de_mongodb_aqui
   
---
## 🖥️ Ejecutar el proyecto

1. **Desde la carpeta backend, corre el servidor:**
   ```bash
   node server.js

2. **Abre tu navegador y entra a:**
   ```bash
   http://localhost:3000

## 🧪 Prueba de inyección NoSQL

- Usuario
   ```bash
  { "$ne": null }

- Contraseña
   ```bash
  { "$ne": null }
