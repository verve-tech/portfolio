FROM oven/bun:debian AS dependencies

WORKDIR /app

COPY package.json bun.lock .husky ./

RUN bun install

# ====================

FROM oven/bun:debian

WORKDIR /app

COPY --from=dependencies /app/ .

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
