# DESIGN.md — PLACZ Group Brand Design System

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> PLACZ Group 傘下プロジェクトの共通ブランドデザインシステムを定義しています。
> 新規プロジェクト開始時にこのファイルをプロジェクトルートにコピーし、プロジェクト固有の値を上書きしてください。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プロフェッショナル・信頼感・洗練
- **ブランドアイデンティティ**: ダークネイビー × ゴールドの高級感ある配色。日本の伝統的な「品格」と現代のテクノロジーの融合を表現
- **キーワード**: Professional / Trustworthy / Elegant / Modern / Japanese
- **テーマ選択**: プロジェクト性質に応じて以下から選択
  - **ライトテーマ** (Own Story 型): ユーザー向けサービス・コンシューマー向け
  - **ダークテーマ** (PLACZ Group サイト型): コーポレート・投資家向け・重厚感が必要な場面

---

## 2. Color Palette & Roles

### Primary Brand Colors（ブランドカラー）

- **Gold** (`#c9a84c`): メインアクセント。CTA ボタン、ボーダー装飾、強調要素
- **Gold Light** (`#e8c14a`): ゴールドのホバー・ハイライト状態
- **Gold Dark** (`#b8942e`): ゴールドのアクティブ・プレス状態
- **Navy Deepest** (`#0f1520`): 最も暗い背景（ヒーロー等）
- **Navy Dark** (`#1a2332`): プライマリ暗背景（ダークテーマの基本背景）
- **Navy Mid** (`#1f3a66`): ブランドネイビー（グラデーション終端等）
- **Navy Surface** (`#1e2a3a`): ダークテーマのカード背景
- **Navy Surface Light** (`#253347`): ダークテーマのホバー面

### Semantic（意味的な色）

- **Danger** (`#ef4444`): エラー、削除、危険な操作
- **Warning** (`#f59e0b`): 警告、注意喚起
- **Success** (`#10b981`): 成功、完了、承認

### Light Theme Neutral（ライトテーマ用）

- **Background** (`#f8fafc`): ページ背景
- **Background Secondary** (`#f1f5f9`): セカンダリ背景、ホバー面
- **Surface** (`#ffffff`): カード・モーダル等の面
- **Text Primary** (`#0f172a`): 本文テキスト
- **Text Secondary** (`#64748b`): 補足テキスト、ラベル
- **Text Disabled** (`#94a3b8`): 無効状態のテキスト
- **Border** (`#e2e8f0`): 区切り線、入力欄の枠

### Dark Theme Neutral（ダークテーマ用）

- **Background** (`#202833`): ページ背景
- **Background Light** (`#2a3340`): セカンダリ背景
- **Text Primary** (`#ffffff`): 本文テキスト
- **Text Secondary** (`rgba(255,255,255,0.7)`): 補足テキスト
- **Text Disabled** (`rgba(255,255,255,0.4)`): 無効状態
- **Border** (`rgba(255,255,255,0.15)`): 区切り線、枠

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP（必須）
- **明朝体**: Noto Serif JP（装飾的な見出しに限定使用）

### 3.2 欧文フォント

- **サンセリフ**: Inter（必須・数字・英字の主力）
- **等幅**: SFMono-Regular, Consolas, Menlo（コードブロック用）

### 3.3 font-family 指定

```css
/* 本文・UI全般 */
font-family: 'Inter', 'Noto Sans JP', sans-serif;

/* 装飾見出し（コーポレートサイト等） */
font-family: 'Inter', 'Noto Serif JP', serif;

/* コードブロック */
font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
```

**CDN読み込み（Google Fonts）**:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Next.js の場合（next/font）**:
```ts
import { Inter, Noto_Sans_JP } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })
```

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Display | 48–60px | 700 | 1.2 | -0.02em | ヒーロータイトル |
| Heading 1 | 32–36px | 700 | 1.3 | -0.01em | セクション見出し |
| Heading 2 | 24–28px | 600 | 1.4 | 0 | サブ見出し |
| Heading 3 | 20px | 600 | 1.5 | 0 | 小見出し |
| Body | 16px | 400 | 1.8 | 0.02em | 本文（日本語） |
| Caption | 14px | 400 | 1.6 | 0.02em | 補足・ラベル |
| Small | 12px | 400 | 1.5 | 0.02em | 最小テキスト |
| Nav | 14px | 600 | — | 0.03em | ナビゲーション |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（日本語標準。PLACZ サイト実績値）
- **見出しの行間**: 1.2〜1.4
- **本文の字間 (letter-spacing)**: 0.02em〜0.04em
- **見出しの字間**: -0.01em〜0（引き締まった印象）

### 3.6 禁則処理

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
/* 見出し・ナビゲーション向け */
font-feature-settings: "palt" 1, "kern" 1;

/* 本文には適用しない（可読性優先） */
```

### 3.8 縦書き

対応なし（横書き専用）

---

## 4. Component Stylings

### Buttons

**Primary（Gold）**
- Background: `#c9a84c`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `8px`
- Font Size: `15px`
- Font Weight: `600`
- Hover: Background `#e8c14a`, Shadow `0 0 20px rgba(201,168,76,0.25)`

**Secondary**
- Background: `transparent`
- Text: `#c9a84c`
- Border: `1px solid #c9a84c`
- Padding: `10px 24px`
- Border Radius: `8px`

**Ghost（ライトテーマ）**
- Background: `transparent`
- Text: `#0f172a`
- Border: `1px solid #e2e8f0`
- Hover: Background `#f1f5f9`

### Inputs

**ライトテーマ**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Border (focus): `1px solid #c9a84c`
- Border Radius: `8px`
- Padding: `10px 16px`
- Font Size: `16px`
- Height: `44px`

**ダークテーマ**
- Background: `#1e2a3a`
- Border: `1px solid rgba(255,255,255,0.15)`
- Border (focus): `1px solid #c9a84c`

### Cards

**ライトテーマ**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Border Radius: `12px`
- Padding: `24px`
- Shadow: `0 1px 6px rgba(0,0,0,0.06)`

**ダークテーマ**
- Background: `#1e2a3a`
- Border: `1px solid rgba(255,255,255,0.08)`
- Border Radius: `12px`
- Shadow: `0 4px 24px rgba(0,0,0,0.4)`

**Gold Accent Card**
- 上記 Card に `border-left: 4px solid #c9a84c` を追加（重要コンテンツの強調）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 4px | アイコン間隔等 |
| S | 8px | コンポーネント内余白 |
| M | 16px | 標準パディング |
| L | 24px | カードパディング |
| XL | 40px | セクション内余白 |
| XXL | 80px | セクション間余白 |
| Section | 120px | セクション上下パディング（コーポレートサイト） |

### Container

- Max Width: `1200px`（標準）
- Max Width: `1400px`（ワイドレイアウト用）
- Padding (horizontal): `20px`

### Grid

- Columns: 12
- Gutter: `24px`

### ナビゲーション

- Header Height: `80px`
- Fixed ヘッダー使用（`position: fixed; z-index: 1000`）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | フラットな要素 |
| 1 | `0 1px 6px rgba(0,0,0,0.06)` | ライトテーマ カード |
| 2 | `0 4px 24px rgba(0,0,0,0.4)` | ダークテーマ カード、モーダル |
| 3 | `0 8px 32px rgba(0,0,0,0.5)` | ダイアログ、フローティング |
| Gold Glow | `0 0 20px rgba(201,168,76,0.15)` | Gold アクセント要素 |
| Gold Glow Large | `0 0 40px rgba(201,168,76,0.2)` | ヒーロー Gold 装飾 |

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは必ず `Inter → Noto Sans JP → sans-serif` のフォールバックチェーンを使う
- 日本語本文の `line-height` は **1.8** を基準にする
- アクセントカラーはゴールド (`#c9a84c`) に統一する
- カードの左ボーダーにゴールドを使い、重要コンテンツを視覚的に区別する
- コントラスト比は WCAG AA 以上を確保する
- タッチターゲットは最小 **44×44px** を維持する
- ヘッダーは `position: fixed` で固定する

### Don't（禁止）

- `font-family` に和文フォント1つだけを指定しない（環境依存になる）
- 日本語本文に `line-height: 1.2` 以下を使わない
- テキストカラーに純粋な `#000000` を使わない（`#0f172a` を使う）
- ダークテーマで白背景のカードを使わない
- ゴールドカラーを本文テキストに多用しない（アクセントとして限定的に使う）
- ブランドカラー以外の派手な色を追加しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Desktop | ≥ 768px | デスクトップレイアウト |

> PLACZ Group サイトはブレークポイントが **768px の1点のみ**。新規プロジェクトでは Tablet を追加してもよい。

### モバイル対応ルール

- ナビゲーション: ハンバーガーメニュー（固定ヘッダー内）
- コンテナ Padding: `20px`
- フォントサイズ: 本文 14–16px、見出しはデスクトップの 70–80%
- カードは1カラムに折り返す

---

## 9. Agent Prompt Guide

### クイックリファレンス（ライトテーマ）

```
Primary Accent: #c9a84c (Gold)
Background: #f8fafc
Surface (Card): #ffffff
Text Primary: #0f172a
Text Secondary: #64748b
Border: #e2e8f0
Font: 'Inter', 'Noto Sans JP', sans-serif
Body Size: 16px / Line Height: 1.8
Border Radius: 8px (button/input), 12px (card)
```

### クイックリファレンス（ダークテーマ）

```
Primary Accent: #c9a84c (Gold)
Background: #202833
Surface (Card): #1e2a3a
Text Primary: #ffffff
Text Secondary: rgba(255,255,255,0.7)
Border: rgba(255,255,255,0.15)
Font: 'Inter', 'Noto Sans JP', sans-serif
Body Size: 16px / Line Height: 1.8
```

### プロンプト例

```
このサービスのデザインシステムに従って、ユーザー一覧テーブルを作成してください。
- テーマ: ライト
- プライマリアクセント: #c9a84c (Gold)
- フォント: 'Inter', 'Noto Sans JP', sans-serif
- 本文行間: 1.8
- カード背景: #ffffff / ボーダー: #e2e8f0 / 角丸: 12px
- 重要行には left-border: 4px solid #c9a84c で強調
```

---

## 10. Presentation Slides（プレゼンスライド）

> HTMLで16:9（1920x1080px）のスライドを作成し、PDF書き出しする方式。
> Canvaのテキストボックス制約を受けず、自由にレイアウトできる。
> **テンプレート**: `~/.claude/templates/slide-template.html`

### 10.1 基本仕様

| 項目 | 値 |
|------|------|
| サイズ | 1920 x 1080px（16:9） |
| 作成方式 | HTML + CSS → ブラウザプレビュー → PDF書き出し |
| フォント | **Noto Sans JP**（Google Fonts CDN読み込み） |
| フォントカラー | `#202833` |
| スライド背景色 | `#202833` |
| アクセントカラー | `#BA9A5C` |

### 10.2 基本フォーマット（全スライド共通）

#### 白カード（最下層）
- **形状**: 角丸四角形（`border-radius: 20px` / 印刷時 `0.4cm`）
- **サイズ**: 幅 33.26cm × 高さ 18.44cm（1920px換算: 1886 × 1045px）
- **配置**: スライド中央（上下左右中央揃え）
- **塗りつぶし**: `#ffffff`
- **枠線**: なし
- **z-index**: 0（最下層）

#### フッター
- **テキスト**: `Confidential copyright all right reserved © PLACZ Group, Ltd.`
- **位置**: 左右中央・スライド最下部
- **フォントサイズ**: 10pt（HTML表示: 20px、PDF出力: 10pt）
- **フォントカラー**: `#808080`
- **文字揃え**: 中央揃え

### 10.3 レイアウトルール

- **padding**: コンテンツエリア 60px（白カード内）
- **ヘッダー見出し**: `border-left: 5px solid #BA9A5C` で統一
- **コンテンツエリア**: `position: absolute; z-index: 1`

### 10.4 文字サイズ階層（スライド専用）

| Role | Size (px) | Weight | 用途 |
|------|-----------|--------|------|
| スライドタイトル | 72〜80px | 900 | 表紙・次回予告 |
| ページ見出し | 48〜52px | 800 | 各スライドの見出し |
| カード見出し | 36〜40px | 700 | カード内タイトル |
| 本文・説明 | 28〜32px | 400〜500 | 説明文・箇条書き |
| テーブルセル | 28〜32px | 400（値）/ 600（アクセント強調） | 比較表 |
| ラベル・補足 | 22〜24px | 400 | 補足テキスト |
| セクションラベル | 15〜16px | 600 | 英字ラベル |
| フッター | 20px（= 10pt） | 400 | 著作権表示 |

**重要**: カード内見出しは36px以上、説明文は28px以上を厳守する。

### 10.5 カラー（スライド専用）

```css
--bg:          #202833;   /* スライド背景 */
--card:        #ffffff;   /* 白カード */
--accent:      #BA9A5C;   /* アクセントゴールド */
--accent-pale: rgba(186, 154, 92, 0.12);  /* アクセント薄背景 */
--text:        #202833;   /* 本文テキスト */
--text-muted:  #808080;   /* フッター・補足 */
--border:      #e2e8f0;   /* 区切り線 */
```

### 10.6 コンポーネント

- **アクセントカード**: `border-left: 4px solid #BA9A5C`, `background: accent-pale`
- **ナンバーバッジ**: 44〜56px丸, `background: #BA9A5C`, `color: #ffffff`, Noto Sans JP 700
- **フローアロー**: `color: #BA9A5C`, `font-size: 36〜44px`
- **アクセントバー**: `width: 60〜100px`, `height: 4px`, `background: #BA9A5C`, `border-radius: 2px`

### 10.7 Do's and Don'ts（スライド固有）

**Do**:
- フォントは必ず Noto Sans JP を使用する
- 白カードは常に最下層（z-index: 0）に置く
- アクセントカラーは `#BA9A5C` に統一する
- カード内文字はカードサイズに対して十分大きくする（見出し36px以上、本文28px以上）
- 1スライド1メッセージを原則とする

**Don't**:
- Canvaで作成しない（テキストボックス制約で文字が圧縮される）
- Inter フォントをメインフォントに使わない（Noto Sans JP が基本）
- フッターテキストを変更しない
- 白カードの枠線を追加しない
