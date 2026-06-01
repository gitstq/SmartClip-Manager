<div align="center">

# 🧠 SmartClip

**AI 驱动的智能剪贴板管理器**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tauri](https://img.shields.io/badge/Tauri-1.6-blue?logo=tauri)](https://tauri.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Rust](https://img.shields.io/badge/Rust-1.70-orange?logo=rust)](https://www.rust-lang.org)

[English](README.md) | [简体中文](README_CN.md) | [繁體中文](README_TW.md)

<img src="https://raw.githubusercontent.com/gitstq/SmartClip-Manager/main/assets/screenshot.png" alt="SmartClip 截图" width="800">

</div>

---

## 🎉 项目介绍

**SmartClip** 是一款智能剪贴板管理器，彻底改变了您管理复制粘贴历史的方式。与传统剪贴板管理器不同，SmartClip 使用 **AI 驱动的内容检测** 自动将剪贴板项目分类为文本、代码、链接和图片。

### 🌟 为什么选择 SmartClip？

- **🤖 智能分类**：自动检测内容类型（代码、链接、文本、图片）
- **⚡ 极速体验**：基于 Rust + Tauri 构建，原生性能
- **🔍 模糊搜索**：使用 Fuse.js 驱动，瞬间找到任何内容
- **🎯 全局快捷键**：从任何地方使用 `Cmd/Ctrl+Shift+V` 快速访问
- **💾 持久历史**：保留最近 1000 条剪贴板记录
- **🌙 精美界面**：现代深色主题，流畅动画

---

## ✨ 核心特性

### 📋 智能内容检测
- **代码检测**：自动识别代码片段（JavaScript、TypeScript、Python、Rust 等）
- **链接识别**：检测 URL 和网页链接
- **图片支持**：处理 Base64 编码的图片
- **文本分类**：智能标签，更好的组织

### 🔎 强大的搜索功能
- **模糊搜索**：即使打错字也能找到项目
- **多字段搜索**：在内容和标签中搜索
- **实时过滤**：输入时即时显示结果
- **类型过滤**：按文本、代码、链接或图片筛选

### ⌨️ 键盘优先设计
- **全局热键**：`Cmd/Ctrl+Shift+V` 切换显示
- **快捷操作**：使用键盘复制、删除和导航
- **系统托盘**：在后台安静运行

### 🎨 现代界面
- **深色主题**：护眼设计
- **响应式布局**：自适应不同窗口大小
- **流畅动画**：精致的用户体验
- **详情面板**：复制前预览完整内容

---

## 🚀 快速开始

### 系统要求

- **macOS**：10.13 或更高版本
- **Windows**：Windows 10 或更高版本
- **Linux**：Ubuntu 18.04+ / Debian 10+

### 安装

#### 下载预编译二进制文件

为您的平台下载最新版本：

| 平台 | 下载 |
|------|------|
| macOS (Intel) | [SmartClip-x64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| macOS (Apple Silicon) | [SmartClip-arm64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Windows | [SmartClip-setup.exe](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Linux | [Smartclip.AppImage](https://github.com/gitstq/SmartClip-Manager/releases/latest) |

#### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/gitstq/SmartClip-Manager.git
cd SmartClip-Manager

# 安装依赖
npm install

# 开发模式运行
npm run tauri-dev

# 生产构建
npm run tauri-build
```

### 首次启动

1. **安装** SmartClip 到您的系统
2. **启动** 应用程序
3. **授予权限**：根据提示允许辅助功能权限（剪贴板监控所需）
4. **开始使用**：按 `Cmd/Ctrl+Shift+V` 打开 SmartClip

---

## 📖 详细使用指南

### 基本用法

1. **正常复制** 任何内容（Ctrl+C / Cmd+C）
2. **打开 SmartClip**：使用 `Cmd/Ctrl+Shift+V`
3. **搜索** 您的项目：使用搜索栏
4. **点击** 任意项目将其复制回剪贴板

### 键盘快捷键

| 快捷键 | 操作 |
|--------|------|
| `Cmd/Ctrl+Shift+V` | 切换 SmartClip 窗口 |
| `↑/↓` | 在项目间导航 |
| `Enter` | 复制选中项目 |
| `Delete` | 删除选中项目 |
| `Esc` | 关闭窗口 |
| `Cmd/Ctrl+K` | 聚焦搜索栏 |

### 内容类型

SmartClip 自动对剪贴板进行分类：

| 类型 | 图标 | 描述 |
|------|------|------|
| 📝 文本 | `FileText` | 纯文本、笔记、文档 |
| 💻 代码 | `Code` | 代码片段、脚本 |
| 🔗 链接 | `Link` | URL、网页地址 |
| 🖼️ 图片 | `Image` | Base64 编码的图片 |

### 搜索技巧

- **模糊匹配**：输入 "js" 查找 JavaScript 代码
- **标签搜索**：搜索标签如 "npm"、"git"、"react"
- **内容搜索**：在实际剪贴板内容中搜索
- **组合使用**：混合内容和类型过滤器进行精确搜索

---

## 💡 设计理念与路线图

### 为什么选择 Tauri + React？

我们选择 **Tauri** 而非 Electron，因为：
- **更小的包体积**：约 3MB 对比 100MB+
- **更好的性能**：原生 Rust 后端
- **更低的内存占用**：无 Chromium 开销
- **原生系统集成**：更好的系统托盘、快捷键和通知

**React** 提供：
- **组件可复用性**：模块化 UI 架构
- **TypeScript 支持**：类型安全的开发
- **丰富的生态系统**：访问 Fuse.js 等库

### 未来路线图

- [ ] **云同步**：跨设备同步剪贴板历史
- [ ] **AI 摘要**：自动总结长文本片段
- [ ] **OCR 支持**：从复制的图片中提取文字
- [ ] **自定义主题**：浅色模式和自定义配色
- [ ] **插件系统**：通过插件扩展功能
- [ ] **端到端加密**：安全的云存储

---

## 📦 打包与部署

### 构建命令

```bash
# 开发模式
npm run tauri-dev

# 为当前平台构建
npm run tauri-build

# 为特定目标构建
cargo tauri build --target x86_64-pc-windows-msvc
cargo tauri build --target x86_64-apple-darwin
cargo tauri build --target aarch64-apple-darwin
cargo tauri build --target x86_64-unknown-linux-gnu
```

### 平台特定说明

**macOS**：
- 需要 Xcode 命令行工具
- 建议进行代码签名以分发
- 需要公证以符合 Gatekeeper

**Windows**：
- 需要 Microsoft Visual C++ 构建工具
- 建议使用证书进行代码签名
- 自动生成 MSI 安装程序

**Linux**：
- 需要 `libgtk-3-dev`、`libwebkit2gtk-4.0-dev`
- 生成 AppImage 和 .deb 包

---

## 🤝 贡献指南

我们欢迎贡献！请参阅我们的 [贡献指南](CONTRIBUTING.md) 了解详情。

### 开发环境设置

```bash
# Fork 并克隆
git clone https://github.com/your-username/SmartClip-Manager.git

# 安装依赖
npm install

# 开发模式运行
npm run tauri-dev
```

### 提交更改

1. 创建功能分支：`git checkout -b feature/amazing-feature`
2. 提交更改：`git commit -m 'feat: 添加神奇功能'`
3. 推送到分支：`git push origin feature/amazing-feature`
4. 打开 Pull Request

### 提交规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新功能
- `fix:` 错误修复
- `docs:` 文档更改
- `style:` 代码风格更改
- `refactor:` 代码重构
- `perf:` 性能改进
- `test:` 测试更改
- `chore:` 构建/工具更改

---

## 📄 开源协议

SmartClip 基于 [MIT 协议](LICENSE) 发布。

```
MIT 协议

版权 (c) 2025 SmartClip 团队

特此免费授予任何获得本软件及相关文档文件（"软件"）的人
无限制地处理本软件的权利，包括但不限于使用、复制、修改、
合并、发布、分发、再许可和/或销售软件副本的权利，
并允许向其提供软件的人这样做，但须符合以下条件：

上述版权声明和本许可声明应包含在本软件的所有副本或实质性部分中。
```

---

## 🙏 致谢

- [Tauri](https://tauri.app) - 使这一切成为可能的框架
- [React](https://react.dev) - UI 库
- [Fuse.js](https://fusejs.io) - 模糊搜索
- [Lucide](https://lucide.dev) - 精美图标
- [date-fns](https://date-fns.org) - 日期格式化

---

<div align="center">

**由 SmartClip 团队用 ❤️ 制作**

[⭐ 在 GitHub 上给我们 Star](https://github.com/gitstq/SmartClip-Manager) | [🐛 报告问题](https://github.com/gitstq/SmartClip-Manager/issues) | [💡 请求功能](https://github.com/gitstq/SmartClip-Manager/issues)

</div>
