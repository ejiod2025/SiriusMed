# syntax=docker/dockerfile:1

FROM node:22-slim AS build
ENV NODE_ENV=development
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Prune dev dependencies for smaller runtime image
RUN npm prune --omit=dev


FROM node:22-slim AS runner
ENV NODE_ENV=production
WORKDIR /app

# Copy minimal runtime artifacts
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Cloud Run provides PORT; default to 8080 for local runs
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
