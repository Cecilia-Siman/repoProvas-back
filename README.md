# <p align='center'> Projeto Repoprovas :pencil: </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-CECÍLIA_SIMAN_SALEMA-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/CECÍLIA_SIMAN_SALEMA/REPOPROVAS?color=4dae71&style=flat-square" />
</p>

##  :clipboard: Descrição

Uma Api para armazenar e compartilhar provas. 

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Postgres & Prisma

***

## :rocket: Rotas

```yml
POST /cadastro
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPasword": "loremipsum"}
```

```yml
POST /login
    - Rota para login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum" }
```

```yml
POST /newTest (autenticada)
    - Rota para cadastrar uma nova provas
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "name": "loremipsum",
        "pdfUrl": "http://loremipsum.com",
        "categoryId": "1",
        "teacherId": "1",
        "disciplineId": "1"}
```

```yml
GET /findtest/disciplines (autenticada)
    - Rota para buscar todas as provas organizadas por disciplina
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /findtest/teachers (autenticada)
    - Rota para buscar todas as provas organizadas por docente
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```


## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/Cecilia-Siman/projeto20-back.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start