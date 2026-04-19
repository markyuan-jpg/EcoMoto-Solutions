# Tailwind CSS 配置修复计划

## 问题
网站设计和排版一团糟，原因是缺少 Tailwind CSS 配置文件。

## 根因
- 缺少 `tailwind.config.ts` 配置文件
- 缺少 `postcss.config.js` 配置文件（Next.js 需要）
- 可能缺少 `autoprefixer` 依赖

## 修复步骤

### 步骤 1: 创建 Tailwind 配置文件
创建 `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D9488",
          hover: "#0F766E",
          light: "#14b8a6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

### 步骤 2: 创建 PostCSS 配置
创建 `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 步骤 3: 检查并更新 package.json 依赖
确保包含:
- `tailwindcss`
- `autoprefixer` (可能需要添加)
- `postcss`

### 步骤 4: 本地构建测试
运行 `npm run build` 确认样式正确编译。

### 步骤 5: 推送到 GitHub
提交并推送，触发 Vercel 重新构建。

## 预期结果
- Tailwind CSS 样式正确编译
- 网站设计和排版恢复正常
- 所有 Tailwind 类（如 `bg-teal-600`, `text-white` 等）正常工作

## 验证方式
访问 https://www.ecomotosolutions.com/ 检查设计是否正常显示。