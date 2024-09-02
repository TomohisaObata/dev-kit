# ビルドステージ
FROM node:18 AS build

# 作業ディレクトリを指定します
WORKDIR /app

# package.json と package-lock.json をコピーします
COPY package.json package-lock.json ./

# 依存関係をインストールします
RUN npm install

# アプリケーションのソースコードをコピーします
COPY . .

# ビルド
RUN npm run build

# 実行ステージ
FROM nginx:alpine

# Nginx の設定ファイルをコピーします
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./site.jp /etc/nginx/sites-available/site.jp

# シンボリックリンクを作成
RUN mkdir -p /etc/nginx/sites-enabled && \
    ln -s /etc/nginx/sites-available/site.jp /etc/nginx/sites-enabled/site.jp

# ビルドアーティファクトを Nginx の HTML ディレクトリにコピーします
COPY --from=build /app/build /usr/share/nginx/html

# ポートを公開します
EXPOSE 443
EXPOSE 80

# Nginx を起動します
CMD ["nginx", "-g", "daemon off;"]
