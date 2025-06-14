# KakuJS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.16.0-brightgreen.svg)](https://nodejs.org/)

日本語のモックデータを生成するための TypeScript ライブラリです。  
KakuJS は、日本の名前、住所、電話番号、その他の文化的に特化したテストデータを生成するためのユーティリティを提供します。

## 特徴

- 🎌 **日本向け**: 日本語のモックデータ生成に特化
- 🚀 **軽量**: 最小限の依存関係、高速実行
- 📦 **デュアルモジュール対応**: ESM と CommonJS の両方で動作
- 🔒 **型安全**: TypeScript で書かれており、完全な型定義を提供
- 🧪 **十分にテスト済み**: 包括的なテストカバレッジ

## インストール

```bash
npm install kakujs
```

または

```bash
pnpm add kakujs
```

または

```bash
yarn add kakujs
```

## 使用方法

### UUID 生成

```typescript
import { uuid } from 'kakujs';

// ランダムな UUID v4 を生成
const id = uuid();
console.log(id); // 例: "123e4567-e89b-12d3-a456-426614174000"
```

### 代替使用パターン

```typescript
// string モジュールを使用
import { string } from 'kakujs';
const id = string.uuid();

// メイン kaku オブジェクトを使用
import { kaku } from 'kakujs';
const id = kaku.string.uuid();
```

### CommonJS での使用

```javascript
const { uuid } = require('kakujs');

const id = uuid();
console.log(id);
```

## API ドキュメント

### 文字列ユーティリティ

#### `uuid(): string`

Math.random() を使用してランダムな UUID v4 文字列を生成します。

**戻り値**: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` 形式の文字列

**例**:
```typescript
import { uuid } from 'kakujs';

const id = uuid();
// "550e8400-e29b-41d4-a716-446655440000"
```

**利用可能なインポートパターン**:
```typescript
// 直接関数をインポート
import { uuid } from 'kakujs';
uuid();

// string モジュールをインポート
import { string } from 'kakujs';
string.uuid();

// メインオブジェクトをインポート
import { kaku } from 'kakujs';
kaku.string.uuid();
```

## 開発

### 前提条件

- [mise](https://mise.jdx.dev/) (存在しない場合は自動的にインストールされます)
- Node.js >= 22.16.0
- pnpm >= 10.11.1

### クイックスタート

```bash
# リポジトリをクローン
git clone https://github.com/albelium/kakujs.git
cd kakujs

# ブートストラップを実行（すべてのツールと依存関係をインストール）
mise run bootstrap
# または
./scripts/bootstrap.sh

# テストを実行
pnpm test

# ライブラリをビルド
pnpm build
```

### 利用可能なスクリプト

- `pnpm test` - すべてのテストを実行
- `pnpm test:watch` - ウォッチモードでテストを実行
- `pnpm test:coverage` - カバレッジレポートと共にテストを実行
- `pnpm build` - プロダクション用にライブラリをビルド
- `pnpm lint` - ESLint を実行
- `pnpm lint:fix` - 自動修正付きで ESLint を実行
- `pnpm type-check` - TypeScript の型チェックを実行

### プロジェクト構造

```
kakujs/
├── src/              # ソースコード
│   └── modules/      # 機能モジュール
│       └── string/   # 文字列ユーティリティ
├── test/             # テストファイル
├── dist/             # ビルド出力（生成されます）
└── scripts/          # ユーティリティスクリプト
```

## コントリビューション

コントリビューションを歓迎します！詳細については [コントリビューションガイド](CONTRIBUTING.md) をご覧ください。

### 開発ワークフロー

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feat/amazing-feature`)
3. conventional commits を使用して変更をコミット (`git commit -m 'feat: add amazing feature'`)
4. ブランチにプッシュ (`git push origin feat/amazing-feature`)
5. プルリクエストを開く

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細については [LICENSE](LICENSE) ファイルをご覧ください。

## 謝辞

- [TypeScript](https://www.typescriptlang.org/) でビルド
- [Vitest](https://vitest.dev/) でテスト
- [tsup](https://tsup.egoist.dev/) でバンドル
