# Consultant Pipeline - 博客网站

一个现代化的全栈博客网站，使用 React、Express、TypeScript 和 PostgreSQL 构建。

## 功能特性

- 📝 博客文章展示和管理
- 📧 邮件订阅功能
- 🎨 现代化的 UI 设计（基于 shadcn/ui）
- 📱 响应式设计，支持移动端
- ⚡ 快速开发体验（Vite + HMR）
- 🔒 TypeScript 类型安全
- 🗄️ PostgreSQL 数据库支持

## 技术栈

### 前端
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具和开发服务器
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库
- **TanStack Query** - 数据获取和缓存
- **Wouter** - 轻量级路由

### 后端
- **Express** - Web 框架
- **TypeScript** - 类型安全
- **Drizzle ORM** - 数据库 ORM
- **PostgreSQL** - 关系型数据库
- **Zod** - 数据验证

## 项目结构

```
ConsultantPipeline/
├── client/              # 前端代码
│   ├── src/
│   │   ├── components/  # React 组件
│   │   ├── pages/      # 页面组件
│   │   ├── hooks/      # 自定义 Hooks
│   │   └── lib/        # 工具函数
│   └── public/         # 静态资源
├── server/             # 后端代码
│   ├── index.ts        # 服务器入口
│   ├── routes.ts       # API 路由
│   └── storage.ts      # 数据存储层
├── shared/             # 共享代码
│   └── schema.ts       # 数据库 Schema
└── attached_assets/    # 附件资源
```

## 开始使用

### 前置要求

- Node.js 18+ 
- PostgreSQL 数据库
- npm 或 yarn 或 pnpm

### 安装步骤

1. **克隆仓库**
```bash
git clone <repository-url>
cd ConsultantPipeline
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**

创建 `.env` 文件（参考 `.env.example`）：
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PORT=5000
NODE_ENV=development
```

4. **初始化数据库**

运行数据库迁移：
```bash
npm run db:push
```

5. **启动开发服务器**
```bash
npm run dev
```

服务器将在 `http://localhost:5000` 启动。

## 可用脚本

- `npm run dev` - 启动开发服务器（包含 HMR）
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run check` - 运行 TypeScript 类型检查
- `npm run db:push` - 推送数据库 Schema 变更

## API 端点

### 博客文章
- `GET /api/posts` - 获取所有博客文章
- `GET /api/posts/:slug` - 根据 slug 获取单篇文章

### 邮件订阅
- `POST /api/newsletter/subscribe` - 订阅邮件列表

## 开发指南

### 添加新的博客文章

目前使用内存存储（`MemStorage`），可以在 `server/storage.ts` 中的 `initializeSampleData` 方法中添加示例数据。

要使用真实的数据库存储，需要：
1. 配置 PostgreSQL 连接
2. 实现基于 Drizzle ORM 的存储类
3. 替换 `server/storage.ts` 中的 `MemStorage`

### 样式定制

项目使用 Tailwind CSS，配置文件位于 `tailwind.config.ts`。主题颜色在 `client/src/index.css` 中定义。

### 组件开发

UI 组件位于 `client/src/components/ui/`，基于 shadcn/ui。可以使用以下命令添加新组件：

```bash
npx shadcn-ui@latest add [component-name]
```

## 部署

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 环境变量

确保在生产环境中设置以下变量：
- `DATABASE_URL` - PostgreSQL 连接字符串
- `PORT` - 服务器端口（默认 5000）
- `NODE_ENV=production`

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 作者

21centurytech Team

