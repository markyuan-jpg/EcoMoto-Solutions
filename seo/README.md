# EcoMoto Solutions SEO 优化项目

## 项目信息

- **域名**: www.ecomotosolutions.com
- **框架**: Next.js (App Router)
- **行业**: 电动商用车辆（B2B 外贸）
- **目标市场**: 通用英文 SEO

---

## 检测结果

### Router 类型确认

✅ **App Router** (Next.js 13+)

项目使用 `app/` 目录结构，layout.tsx 使用新的 `metadata` API。

---

## 任务清单

### 一、一次性任务（代码生成/配置）

#### 技术基础 SEO

- [x] robots.txt → 已创建 `/seo/robots.txt` + App Router 版本 `/seo/robots.ts`
- [x] sitemap.xml → 已创建 `/seo/sitemap.xml` + App Router 版本 `/seo/sitemap.ts`
- [x] GA4 代码 → 已创建 `/seo/ga4-setup.md`
- [x] GSC 验证 → 已创建 `/seo/google-search-console.md`
- [x] Core Web Vitals 清单 → 已创建 `/seo/core-web-vitals.md`
- [x] 移动端适配清单 → 已创建 `/seo/mobile-adaptation.md`
- [x] HTTPS 检查清单 → 已创建 `/seo/https-checklist.md`
- [x] 图片优化清单 → 已创建 `/seo/image-optimization.md`
- [x] 重定向和 404 检查清单 → 已创建 `/seo/redirect-404-check.md`

#### 页面 SEO

- [x] SEO 标题和描述 → 已创建 `/seo/seo-titles-meta.md`
- [x] 社交媒体标签 → 已创建 `/seo/social-media-tags.md`

#### 结构化数据

- [x] Organization Schema → 已创建 `components/SEO/OrganizationSchema.tsx`
- [x] Product Schema → 已创建 `components/SEO/ProductSchema.tsx`
- [x] FAQ Schema → 已创建 `components/SEO/FAQSchema.tsx`
- [x] Breadcrumb Schema → 已创建 `components/SEO/BreadcrumbSchema.tsx`
- [x] Schema 指南 → 已创建 `/seo/schema-markup.md`

#### 关键词研究

- [x] 关键词框架 → 已创建 `/seo/keywords-research.md`

#### 内容营销

- [x] 内容日历 → 已创建 `/seo/content-calendar.md`

#### 外链建设

- [x] 外链计划 → 已创建 `/seo/backlink-building.md`

#### 监控优化

- [x] 监控指南 → 已创建 `/seo/monitoring-guide.md`

---

### 二、需要手动操作的任务

#### 注册账号

- [ ] **Google Search Console**
  - 操作步骤：
    1. 访问 [search.google.com/search-console](https://search.google.com/search-console)
    2. 添加属性：`https://www.ecomotosolutions.com`
    3. 选择 HTML 标签验证方法
    4. 复制验证代码到网站
    5. 点击验证

- [ ] **Google Analytics 4**
  - 操作步骤：
    1. 访问 [analytics.google.com](https://analytics.google.com)
    2. 创建属性 → 输入名称 → 创建
    3. 获取 Measurement ID (G-XXXXXXXXXX)
    4. 部署到网站

- [ ] **社交媒体账号**（如需要）
  - LinkedIn 公司主页
  - YouTube 频道

#### 网站配置

- [ ] **将 sitemap.ts 复制到 app/ 目录**
  - 从 `/seo/sitemap.ts` 复制到 `app/sitemap.ts`

- [ ] **将 robots.ts 复制到 app/ 目录**
  - 从 `/seo/robots.ts` 复制到 `app/robots.ts`

- [ ] **配置 GA4**
  - 在 `app/layout.tsx` 添加 GA4 代码
  - 将 `{{G-XXXXXXXXXX}}` 替换为真实 ID

- [ ] **添加 Organization Schema**
  - 在 `app/layout.tsx` 引入 OrganizationSchema 组件

- [ ] **更新各页面 metadata**
  - 使用 `/seo/seo-titles-meta.md` 中的标题和描述

- [ ] **添加社交媒体标签**
  - 使用 `/seo/social-media-tags.md` 中的代码

---

### 三、持续优化任务

#### 每周任务

- [ ] 检查 GSC 收录情况
  - 步骤：登录 GSC → 覆盖率报告 → 检查错误

- [ ] 检查 GA4 数据
  - 步骤：登录 GA4 → 查看实时用户 → 检查询盘事件

#### 每月任务

- [ ] 运行 Screaming Frog 扫描
  - 工具：[screamingfrog.co.uk](https://www.screamingfrog.co.uk/seo-spider/)
  - 检查：404 错误、缺失 meta、重复标题

- [ ] 更新 SEO 报告
  - 记录：流量变化、关键词排名、询盘数量

#### 每季度任务

- [ ] 全面网站审计
- [ ] 内容更新检查
- [ ] 外链审查

---

## 生成的文件清单

| 文件 | 路径 | 用途 |
| :--- | :--- | :--- |
| robots.txt | `/seo/robots.txt` | 静态站点使用 |
| robots.ts | `/seo/robots.ts` | App Router 使用 → 复制到 `app/robots.ts` |
| sitemap.xml | `/seo/sitemap.xml` | 静态站点使用 |
| sitemap.ts | `/seo/sitemap.ts` | App Router 使用 → 复制到 `app/sitemap.ts` |
| ga4-setup.md | `/seo/ga4-setup.md` | GA4 配置指南 |
| google-search-console.md | `/seo/google-search-console.md` | GSC 验证指南 |
| core-web-vitals.md | `/seo/core-web-vitals.md` | 性能优化清单 |
| mobile-adaptation.md | `/seo/mobile-adaptation.md` | 移动端适配清单 |
| https-checklist.md | `/seo/https-checklist.md` | HTTPS 配置清单 |
| image-optimization.md | `/seo/image-optimization.md` | 图片优化指南 |
| redirect-404-check.md | `/seo/redirect-404-check.md` | 404 检查指南 |
| seo-titles-meta.md | `/seo/seo-titles-meta.md` | 所有页面标题/描述 |
| social-media-tags.md | `/seo/social-media-tags.md` | OG/Twitter 标签 |
| schema-markup.md | `/seo/schema-markup.md` | Schema 使用指南 |
| keywords-research.md | `/seo/keywords-research.md` | 关键词框架 |
| content-calendar.md | `/seo/content-calendar.md` | 博客内容日历 |
| backlink-building.md | `/seo/backlink-building.md` | 外链建设计划 |
| monitoring-guide.md | `/seo/monitoring-guide.md` | 监控优化指南 |
| OrganizationSchema.tsx | `components/SEO/OrganizationSchema.tsx` | 组织信息 Schema |
| ProductSchema.tsx | `components/SEO/ProductSchema.tsx` | 产品 Schema |
| FAQSchema.tsx | `components/SEO/FAQSchema.tsx` | FAQ Schema |
| BreadcrumbSchema.tsx | `components/SEO/BreadcrumbSchema.tsx` | 面包屑 Schema |

---

## 代码片段

### 1. sitemap.ts (App Router)

复制到 `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ecomotosolutions.com'
  const now = new Date().toISOString().split('T')[0]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // ... 其他页面
  ]
}
```

### 2. robots.ts (App Router)

复制到 `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://www.ecomotosolutions.com/sitemap.xml',
  }
}
```

### 3. GA4 代码

在 `app/layout.tsx` 中添加:

```tsx
import Script from 'next/script'

// 在 </body> 前添加:
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id={{G-XXXXXXXXXX}}"
/>
<Script id="ga4-config" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{G-XXXXXXXXXX}}');
  `}
</Script>
```

### 4. GSC 验证标签

在 `app/layout.tsx` 的 metadata 中添加:

```typescript
export const metadata: Metadata = {
  // ...
  verification: {
    google: 'YOUR_VERIFICATION_CODE',
  },
}
```

### 5. 页面 Metadata 示例

在 `app/page.tsx` 中:

```typescript
export const metadata: Metadata = {
  title: 'Electric Cargo Tricycle Manufacturer | EcoMoto Solutions',
  description: 'EcoMoto Solutions is a leading manufacturer of electric cargo tricycles, passenger motorcycles, and LFP batteries. CE certified. Contact us for bulk pricing.',
  openGraph: {
    title: 'EcoMoto Solutions - Electric Fleet Solutions',
    description: 'Power your fleet with electric commercial vehicles.',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoMoto Solutions',
  },
}
```

### 6. Organization Schema

在 `app/layout.tsx` 中引入:

```tsx
import OrganizationSchema from '@/components/SEO/OrganizationSchema'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <OrganizationSchema />
      </body>
    </html>
  )
}
```

### 7. Product Schema

在产品详情页中使用:

```tsx
import ProductSchema from '@/components/SEO/ProductSchema'

export default function ProductPage({ params }) {
  return (
    <>
      {/* 产品内容 */}
      <ProductSchema
        name="City Feeder Series"
        description="Light-duty electric cargo tricycle"
        slug="city-feeder"
        image="/images/city-feeder.jpg"
      />
    </>
  )
}
```

### 8. 询盘事件追踪

在联系表单提交时触发:

```javascript
// 在表单提交处理函数中
if (typeof gtag !== 'undefined') {
  gtag('event', 'generate_lead', {
    event_category: 'form',
    event_label: 'contact-form',
  })
}
```

---

## 部署检查清单

### 部署前确认

- [ ] 已将 `app/sitemap.ts` 复制到项目
- [ ] 已将 `app/robots.ts` 复制到项目
- [ ] 已将 `components/SEO/` 文件夹复制到项目
- [ ] GA4 Measurement ID 已配置
- [ ] GSC 验证已完成
- [ ] 所有图片已转换为 WebP 格式
- [ ] 已测试移动端显示正常

### 部署后验证

- [ ] 访问 `https://www.ecomotosolutions.com/sitemap.xml` 确认可访问
- [ ] 访问 `https://www.ecomotosolutions.com/robots.txt` 确认可访问
- [ ] 在 GSC 提交 sitemap
- [ ] 在 PageSpeed Insights 测试分数
- [ ] 检查所有页面 title/description 是否正确

---

## SEO 见效时间线

| 时间 | 预期结果 |
| :--- | :--- |
| **第1个月** | GSC 收录增加，GA4 看到少量流量 |
| **第3个月** | 长尾关键词开始出排名，询盘开始出现 |
| **第6个月** | 核心词排名提升，自然流量明显增长 |
| **第12个月** | SEO 成为主要询盘渠道之一 |

---

## 后续步骤

1. **立即执行**：将 `sitemap.ts` 和 `robots.ts` 复制到 `app/` 目录
2. **立即执行**：将 `components/SEO/` 组件复制到项目
3. **注册 GSC**：完成域名验证
4. **注册 GA4**：获取 Measurement ID 并部署
5. **每周检查**：GSC 和 GA4 数据
6. **持续优化**：根据监控指南执行每月/每季度任务
