FROM node:20.17.0-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - production
FROM node:20.17.0-alpine AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.ts .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
#COPY --from=builder /app/static ./static
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["npm", "start"]