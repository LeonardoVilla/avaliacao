# 📊 Sistema de Avaliação de Conhecimento: 
https://avaliacao-bice.vercel.app/

Este é um sistema de **avaliação de conhecimento** desenvolvido com [Next.js](https://nextjs.org), inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). O objetivo é fornecer uma experiência dinâmica para responder a questionários, acompanhar o progresso e visualizar os resultados em tempo real.

## 🚀 Funcionalidades

✅ Questões aleatórias sobre tecnologia e outros temas configuráveis  
✅ Navegação entre as questões com botões de **próximo** e **voltar**  
✅ Sumário lateral com círculos numerados para acessar qualquer questão diretamente  
✅ Interface moderna e responsiva  
✅ Armazenamento das respostas do usuário para análise posterior  

## 🛠 Como começar

1️⃣ Instale as dependências:

```bash
npm install
# ou
yarn install
```

2️⃣ Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

3️⃣ Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o sistema em funcionamento.

Você pode modificar as questões e configurações editando o arquivo `data/questions.ts`.

## 🎯 Estrutura do Projeto

- `app/page.tsx` → Página principal do quiz  
- `data/questions.ts` → Banco de dados local das questões  
- `components/Quiz.tsx` → Componente principal do questionário  
- `components/Summary.tsx` → Componente do sumário lateral  

## 📚 Saiba mais sobre Next.js

- [Documentação Oficial](https://nextjs.org/docs)  
- [Tutorial Interativo](https://nextjs.org/learn)  
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js)  

## 🚀 Implantação no Vercel

A melhor forma de implantar este sistema é utilizando a plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos desenvolvedores do Next.js.

Confira nossa [documentação de implantação](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
