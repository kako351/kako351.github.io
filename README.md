# kako351.github.io

`kako351` のポートフォリオサイトです。  
Next.js (App Router) + TypeScript + Tailwind CSS で構築し、静的エクスポートして配信しています。

公開URL: https://portfolio.kako351.dev/

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

- 開発サーバー: `http://localhost:3000`

## ビルド

```bash
npm run build
```

- `next.config.ts` で `output: "export"` を指定しているため、静的ファイルが生成されます。
- 出力先は `out/` ディレクトリです。

## 本番起動（Node サーバー起動時）

```bash
npm run start
```

## Lint

```bash
npm run lint
```

## ディレクトリ構成

```text
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── public/
├── out/
├── policy.html
├── tokutei.html
└── index.html
```

## ページ構成（`src/app/page.tsx`）

- Header
- Hero
- About
- Career
- Products
- GitHub
- Blog
- Talks
- TechBooks
- Business
- Footer

## メモ

- `policy.html` / `tokutei.html` は法務関連の静的ページです。
- ルート直下の `index.html` や `css/`, `images/` は旧構成の資産です（用途に応じて整理可能）。
