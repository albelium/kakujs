# Contributing to KakuJS

KakuJS プロジェクトへの貢献に興味を持っていただき、ありがとうございます！  
このガイドでは、プロジェクトに貢献する際のルールとガイドラインを説明します。

## 開発環境のセットアップ

```bash
# 初回セットアップ
mise run bootstrap
# または
./scripts/bootstrap.sh

# 依存関係のインストール
pnpm install
```

## 開発ルール

### JSDoc 規約

インターフェースをもつ関数には必ず JSDoc を記載してください。

**必須要素:**
- `description`: 日本語での機能説明
- `@param`: パラメータの説明（該当する場合）
- `@example`: 実用的な使用例
- `@see`: 関連する機能やドキュメントへの参照
- `@since`: 追加されたバージョン

**例:**
```typescript
/**
 * ランダムな料理を生成します
 *
 * @param options - 料理生成のオプション
 * @param options.cuisine - 料理の種類 (例: 'japanese', 'italian')
 *
 * @example
 * kaku.food.dish() // 'カレーライス'
 * kaku.food.dish({ cuisine: 'italian' }) // 'パスタアラビアータ'
 *
 * @see kaku.food.dessert
 *
 * @since 1.0.0
 * 
 * @deprecated Use `kaku.food.hoge()` instead.
 */
function dish(options?: { cuisine?: string }): string {
  // 実装
}
```

### コーディング規約

- **TypeScript**: 厳密モードを使用
- **ES2022**: ターゲット環境
- **Node.js**: 22.16.0 以上をサポート
- **Dual Format**: ESM と CommonJS 両方をサポート

### コミット規約

Conventional Commits を使用してください：

```
type: description

例:
feat: add Japanese name generator
fix: resolve undefined behavior in dish()
docs: update JSDoc examples
```

**利用可能なタイプ:**
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント更新
- `style`: コードスタイル変更
- `refactor`: リファクタリング
- `perf`: パフォーマンス改善
- `test`: テスト追加・修正
- `build`: ビルド関連
- `ci`: CI設定
- `chore`: その他
- `revert`: コミット取り消し

## テスト

- **カバレッジ**: 80% 以上を維持
- **テストファイル**: `*.test.ts` として配置
- **フレームワーク**: Vitest 使用

```bash
# テスト実行
pnpm run test:run

# カバレッジ付きテスト
pnpm run test:coverage
```

## Pull Request

1. フォークしてブランチを作成
2. 変更を実装
3. テストを追加・更新
4. リンターとタイプチェックを実行
5. Pull Request を作成

```bash
# 品質チェック
pnpm run lint:fix
pnpm run type-check
pnpm run test:run
```

## サポート

質問や提案がありましたら、Issue を作成してください。

---

貢献いただき、ありがとうございます！🎉
