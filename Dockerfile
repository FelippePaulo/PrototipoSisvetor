FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app

# Sem PORT definida, o react-router-serve tenta a 3000 e cai numa porta aleatória se ela estiver
# ocupada — o que tornaria o mapeamento de portas do container imprevisível.
ENV PORT=3000
EXPOSE 3000

# URL pública do backend, lida em runtime pelo loader do root.tsx. Sobrescreva por ambiente
# (docker run -e API_URL=... / environment no compose).
ENV API_URL=http://localhost:9995

CMD ["npm", "run", "start"]