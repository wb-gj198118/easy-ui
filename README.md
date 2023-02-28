# easy-ui
学习monorepo， 基于vue3 + vite4 + typescript4 组件库的搭建的ui库

# 依赖安装
```
// 全局依赖
pnpm install

// 项目启动
pnpm dev
```

# monorepo 子项目之间相互依赖
```
// 添加dev依赖
pnpm install <packageName> -Dw
// 添加prod依赖
pnpm install <packageName> -w
```

