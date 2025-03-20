import AutoImport from "unplugin-auto-import/vite";

import type { Options } from "unplugin-auto-import/types";

const config: Options = {
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
  ],
  dts: "src/types/auto-imports.d.ts", // 生成自动引入的 TypeScript 类型
  imports: [
    "react", // 自动引入 react
    {
      antd: [
        "message", // 自动引入 antd 的 message 组件
        "notification", // 自动引入 antd 的 notification 组件
      ],
      "react-i18next": ["useTranslation"], // 自动引入 react-i18next 的 useTranslation
    },
  ],
};

const autoImport = () => {
  return AutoImport(config);
};

export default autoImport;
