# Sisvetor Landing Page - React

Esta é a versão em React do portal de notícias Sisvetor, convertida da aplicação original em Svelte.

## Estrutura do Projeto

app/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx      # Cabeçalho de navegação
│   └── Footer.tsx      # Rodapé do site
├── lib/
│   ├── api/           # Camada de API
│   │   ├── noticia.ts         # Definições de tipos
│   │   ├── noticiaRequest.ts  # Cliente HTTP
│   │   └── noticiaController.ts # Funções da API
│   └── utils.ts       # Funções utilitárias (slugify, etc.)
├── routes/            # Componentes de página
│   ├── home.tsx       # Página inicial
│   ├── noticias.tsx   # Listagem de notícias
│   ├── noticias.$slug.tsx # Artigos de notícias individuais
│   └── contato.tsx    # Página de contato
├── app.css           # Estilos globais com o tema DaisyUI
└── routes.ts         # Configuração de rotas

## Primeiros Passos

1. Instale as dependências:
   npm install

2. Inicie o servidor de desenvolvimento:
   npm run dev

3. Gere a build para produção:
   npm run build

## Configuração da API

A aplicação espera uma API de notícias rodando em http://localhost:9995/api/v1/noticias. Atualize a URL base em app/lib/api/noticiaController.ts se a sua API estiver rodando em um endpoint diferente.

## Dependências

- React Router 7 para roteamento e SSR (Renderização no Lado do Servidor)
- DaisyUI para componentes de interface (UI)
- TailwindCSS para estilização
- TypeScript para tipagem segura

## Primeiros Passos

### Instalação

Instale as dependências:

npm install

### Desenvolvimento

Inicie o servidor de desenvolvimento com HMR (Hot Module Replacement):

npm run dev

Sua aplicação estará disponível em http://localhost:5173.

## Gerando a Build para Produção

Crie uma build de produção:

npm run build

## Implantação (Deployment)

### Implantação com Docker

Para buildar e rodar utilizando o Docker:

docker build -t my-app .

# Executar o container
docker run -p 3000:3000 my-app