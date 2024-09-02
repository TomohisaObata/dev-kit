# ベースイメージとして公式のNode.jsイメージを使用します
FROM node:18

# 作業ディレクトリを指定します
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーします
COPY package.json package-lock.json ./

# 依存関係をインストールします
RUN npm install

# アプリケーションのソースコードをコピーします
COPY . .

# Expose the port the app runs on
EXPOSE 8085

# サーバーを起動します
CMD ["node", "server.js"]