<div align="center">

# 🧠 SmartClip

**AI 驅動的智能剪貼簿管理器**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tauri](https://img.shields.io/badge/Tauri-1.6-blue?logo=tauri)](https://tauri.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Rust](https://img.shields.io/badge/Rust-1.70-orange?logo=rust)](https://www.rust-lang.org)

[English](README.md) | [简体中文](README_CN.md) | [繁體中文](README_TW.md)

<img src="https://raw.githubusercontent.com/gitstq/SmartClip-Manager/main/assets/screenshot.png" alt="SmartClip 截圖" width="800">

</div>

---

## 🎉 專案介紹

**SmartClip** 是一款智能剪貼簿管理器，徹底改變了您管理複製貼上歷史的方式。與傳統剪貼簿管理器不同，SmartClip 使用 **AI 驅動的內容檢測** 自動將剪貼簿項目分類為文字、程式碼、連結和圖片。

### 🌟 為什麼選擇 SmartClip？

- **🤖 智能分類**：自動檢測內容類型（程式碼、連結、文字、圖片）
- **⚡ 極速體驗**：基於 Rust + Tauri 構建，原生效能
- **🔍 模糊搜尋**：使用 Fuse.js 驅動，瞬間找到任何內容
- **🎯 全域快捷鍵**：從任何地方使用 `Cmd/Ctrl+Shift+V` 快速存取
- **💾 持久歷史**：保留最近 1000 條剪貼簿記錄
- **🌙 精美介面**：現代深色主題，流暢動畫

---

## ✨ 核心特性

### 📋 智能內容檢測
- **程式碼檢測**：自動識別程式碼片段（JavaScript、TypeScript、Python、Rust 等）
- **連結識別**：檢測 URL 和網頁連結
- **圖片支援**：處理 Base64 編碼的圖片
- **文字分類**：智能標籤，更好的組織

### 🔎 強大的搜尋功能
- **模糊搜尋**：即使打錯字也能找到項目
- **多欄位搜尋**：在內容和標籤中搜尋
- **即時過濾**：輸入時即時顯示結果
- **類型過濾**：按文字、程式碼、連結或圖片篩選

### ⌨️ 鍵盤優先設計
- **全域熱鍵**：`Cmd/Ctrl+Shift+V` 切換顯示
- **快捷操作**：使用鍵盤複製、刪除和導航
- **系統托盤**：在背景安靜運行

### 🎨 現代介面
- **深色主題**：護眼設計
- **響應式佈局**：自適應不同視窗大小
- **流暢動畫**：精緻的使用者體驗
- **詳情面板**：複製前預覽完整內容

---

## 🚀 快速開始

### 系統需求

- **macOS**：10.13 或更高版本
- **Windows**：Windows 10 或更高版本
- **Linux**：Ubuntu 18.04+ / Debian 10+

### 安裝

#### 下載預編譯二進位檔案

為您的平台下載最新版本：

| 平台 | 下載 |
|------|------|
| macOS (Intel) | [SmartClip-x64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| macOS (Apple Silicon) | [SmartClip-arm64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Windows | [SmartClip-setup.exe](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Linux | [Smartclip.AppImage](https://github.com/gitstq/SmartClip-Manager/releases/latest) |

#### 從原始碼構建

```bash
# 克隆倉庫
git clone https://github.com/gitstq/SmartClip-Manager.git
cd SmartClip-Manager

# 安裝依賴
npm install

# 開發模式運行
npm run tauri-dev

# 生產構建
npm run tauri-build
```

### 首次啟動

1. **安裝** SmartClip 到您的系統
2. **啟動** 應用程式
3. **授予權限**：根據提示允許輔助功能權限（剪貼簿監控所需）
4. **開始使用**：按 `Cmd/Ctrl+Shift+V` 打開 SmartClip

---

## 📖 詳細使用指南

### 基本用法

1. **正常複製** 任何內容（Ctrl+C / Cmd+C）
2. **打開 SmartClip**：使用 `Cmd/Ctrl+Shift+V`
3. **搜尋** 您的項目：使用搜尋欄
4. **點擊** 任意項目將其複製回剪貼簿

### 鍵盤快捷鍵

| 快捷鍵 | 操作 |
|--------|------|
| `Cmd/Ctrl+Shift+V` | 切換 SmartClip 視窗 |
| `↑/↓` | 在項目間導航 |
| `Enter` | 複製選中項目 |
| `Delete` | 刪除選中項目 |
| `Esc` | 關閉視窗 |
| `Cmd/Ctrl+K` | 聚焦搜尋欄 |

### 內容類型

SmartClip 自動對剪貼簿進行分類：

| 類型 | 圖示 | 描述 |
|------|------|------|
| 📝 文字 | `FileText` | 純文字、筆記、文件 |
| 💻 程式碼 | `Code` | 程式碼片段、腳本 |
| 🔗 連結 | `Link` | URL、網頁地址 |
| 🖼️ 圖片 | `Image` | Base64 編碼的圖片 |

### 搜尋技巧

- **模糊匹配**：輸入 "js" 查找 JavaScript 程式碼
- **標籤搜尋**：搜尋標籤如 "npm"、"git"、"react"
- **內容搜尋**：在實際剪貼簿內容中搜尋
- **組合使用**：混合內容和類型過濾器進行精確搜尋

---

## 💡 設計理念與路線圖

### 為什麼選擇 Tauri + React？

我們選擇 **Tauri** 而非 Electron，因為：
- **更小的套件大小**：約 3MB 對比 100MB+
- **更好的效能**：原生 Rust 後端
- **更低的記憶體占用**：無 Chromium 開銷
- **原生系統整合**：更好的系統托盤、快捷鍵和通知

**React** 提供：
- **元件可複用性**：模組化 UI 架構
- **TypeScript 支援**：型別安全的開發
- **豐富的生態系統**：存取 Fuse.js 等函式庫

### 未來路線圖

- [ ] **雲端同步**：跨裝置同步剪貼簿歷史
- [ ] **AI 摘要**：自動總結長文字片段
- [ ] **OCR 支援**：從複製的圖片中提取文字
- [ ] **自訂主題**：淺色模式和自訂配色
- [ ] **外掛系統**：透過外掛擴展功能
- [ ] **端到端加密**：安全的雲端儲存

---

## 📦 打包與部署

### 構建命令

```bash
# 開發模式
npm run tauri-dev

# 為當前平台構建
npm run tauri-build

# 為特定目標構建
cargo tauri build --target x86_64-pc-windows-msvc
cargo tauri build --target x86_64-apple-darwin
cargo tauri build --target aarch64-apple-darwin
cargo tauri build --target x86_64-unknown-linux-gnu
```

### 平台特定說明

**macOS**：
- 需要 Xcode 命令列工具
- 建議進行程式碼簽署以分發
- 需要公證以符合 Gatekeeper

**Windows**：
- 需要 Microsoft Visual C++ 建置工具
- 建議使用憑證進行程式碼簽署
- 自動生成 MSI 安裝程式

**Linux**：
- 需要 `libgtk-3-dev`、`libwebkit2gtk-4.0-dev`
- 生成 AppImage 和 .deb 套件

---

## 🤝 貢獻指南

我們歡迎貢獻！請參閱我們的 [貢獻指南](CONTRIBUTING.md) 了解詳情。

### 開發環境設定

```bash
# Fork 並克隆
git clone https://github.com/your-username/SmartClip-Manager.git

# 安裝依賴
npm install

# 開發模式運行
npm run tauri-dev
```

### 提交更改

1. 建立功能分支：`git checkout -b feature/amazing-feature`
2. 提交更改：`git commit -m 'feat: 新增神奇功能'`
3. 推送到分支：`git push origin feature/amazing-feature`
4. 開啟 Pull Request

### 提交規範

我們遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新功能
- `fix:` 錯誤修正
- `docs:` 文件更改
- `style:` 程式碼風格更改
- `refactor:` 程式碼重構
- `perf:` 效能改進
- `test:` 測試更改
- `chore:` 建置/工具更改

---

## 📄 開源授權

SmartClip 基於 [MIT 授權](LICENSE) 發布。

```
MIT 授權

版權 (c) 2025 SmartClip 團隊

特此免費授予任何獲得本軟體及相關文件檔案（"軟體"）的人
無限制地處理本軟體的權利，包括但不限於使用、複製、修改、
合併、發布、分發、再授權和/或銷售軟體副本的權利，
並允許向其提供軟體的人這樣做，但須符合以下條件：

上述版權聲明和本授權聲明應包含在本軟體的所有副本或實質性部分中。
```

---

## 🙏 致謝

- [Tauri](https://tauri.app) - 使這一切成為可能的框架
- [React](https://react.dev) - UI 函式庫
- [Fuse.js](https://fusejs.io) - 模糊搜尋
- [Lucide](https://lucide.dev) - 精美圖示
- [date-fns](https://date-fns.org) - 日期格式化

---

<div align="center">

**由 SmartClip 團隊用 ❤️ 製作**

[⭐ 在 GitHub 上給我們 Star](https://github.com/gitstq/SmartClip-Manager) | [🐛 報告問題](https://github.com/gitstq/SmartClip-Manager/issues) | [💡 請求功能](https://github.com/gitstq/SmartClip-Manager/issues)

</div>
