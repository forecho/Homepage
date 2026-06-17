# forecho 手绘设计系统（Hand-Drawn Design System）

> 纸笔 / 速写本风格的个人站点设计规范。来源：Claude Design 导出的 `forecho-hand-drawn-design-system` 设计包，已落地到本项目。
> token 源在 `styles/globals.css` 的 `:root` 与 `[data-theme="dark"]`，组件在 `components/`、`components/ui/`。

## 整体气质

温暖纸张 + 圆点颗粒底纹、歪扭不规则边框、硬实色偏移阴影（无模糊）、手写字体、轻微倾斜，配合胶带 / 图钉 / 荧光笔点缀。

**绝对不要**：直角 / 规则圆角、emoji、柔和模糊阴影、渐变。

## 配色（Color）

「文具」调色板：铅笔黑、纸白、马克笔橙、圆珠笔蓝、便签黄。永远不用纯黑、不用纯白做表面。

### 基础色（raw）

| 名称 | 值 | 用途 |
| --- | --- | --- |
| `--paper` | `#FDFBF7` | 暖纸底 |
| `--paper-2` | `#FFFFFF` | 干净纸面 |
| `--pencil` | `#2D2D2D` | 柔铅笔黑 |
| `--pencil-soft` | `#44423E` | 浅石墨 |
| `--erased` | `#E5E0D8` | 旧纸 / 擦除痕 |
| `--muted-ink` | `#8C887E` | 褪色笔记 |
| `--marker-orange` | `#D5642E` | 烧橘色马克笔（**主强调色**） |
| `--marker-red` | `#FF4D4D` | 修改红（备用） |
| `--ballpoint` | `#2D5DA1` | 圆珠笔蓝（次强调色） |
| `--postit` | `#FFF9C4` | 便签黄 |
| `--highlighter` | `#FFE9A8` | 荧光笔划痕 |

### 语义别名（Light — 标准模式）

`--bg`→paper、`--surface`→paper-2、`--surface-alt`→erased、`--fg`→pencil、`--fg-soft`→pencil-soft、`--muted`→muted-ink、`--border`→pencil、`--accent`→marker-orange、`--accent-2`→ballpoint、`--on-accent`→`#FFFFFF`、`--hl`→highlighter、`--note`→postit、`--dot`→erased。
`--accent-soft: rgba(213,100,46,.14)`、`--hover: rgba(45,45,45,.05)`。

### Dark（黑板 / 暗纸，`[data-theme="dark"]`）

bg `#211F1A`、surface `#2A2823`、surface-alt `#35322B`、fg `#F2ECE0`、fg-soft `#D8D2C5`、muted `#908B7E`、border `#F2ECE0`、accent `#E8763E`、accent-2 `#6CA0E0`、on-accent `#211F1A`、hl `#C9A227`、note `#4A4524`、dot `#35322B`。

> 主题切换用 `next-themes`，`attribute="data-theme"`，与 token 作用域一致。

## 字体与排版（Typography）

全程手写体：标题用马克笔感，正文用清晰手写体。字号跳跃大，像被强调的笔记。

- **Latin 显示**：Kalam 700（粗毡尖马克笔）
- **Latin 正文**：Patrick Hand 400（清晰手写）
- **中文正文**：ZCOOL KuaiLe（站酷快乐体）
- **中文显示**：Ma Shan Zheng（马善政，毛笔感）
- 通过 Google Fonts CDN 加载（需联网）。

字体族变量：
```css
--font-display: "Kalam", "Ma Shan Zheng", "ZCOOL KuaiLe", "Comic Sans MS", cursive;
--font-body:    "Patrick Hand", "ZCOOL KuaiLe", "Comic Sans MS", cursive;
```

字号刻度：`--text-xs` 13px、`--text-sm` 15px、`--text-base` 18px（正文）、`--text-lg` 21px、`--text-xl` 26px（卡片标题）、`--text-2xl` 32px、`--text-3xl` 44px（分区标题）、`--text-4xl` clamp(2.75rem,5vw,4rem)、`--text-5xl` clamp(3.25rem,7vw,5.25rem)（Hero）。

行高：tight 1.05 / snug 1.25 / body 1.7。字距：tight -0.01em / wide 0.04em。

## 效果（Effects）— 风格签名

### 歪扭圆角（“没有直线”规则）
```css
--wobbly:        255px 15px 225px 15px / 15px 225px 15px 255px;
--wobbly-md:     22px 8px 26px 10px / 12px 24px 10px 22px;
--wobbly-sm:     14px 6px 16px 8px / 8px 15px 7px 14px;
--wobbly-circle: 50% 48% 52% 47% / 47% 52% 48% 53%;
```

### 边框宽度（粗且多变）
`--bw-1` 2px（最小）、`--bw-2` 2.5px（卡片）、`--bw-3` 3px（按钮 / 强调）、`--bw-4` 4px（重强调）。

### 硬偏移阴影（无模糊、实心铅笔色）
`--shadow-sm` 3/3、`--shadow` 5/5、`--shadow-lg` 8/8、`--shadow-lift` 9/9（hover 抬起）、`--shadow-press` 2/2（按下压平）、`--shadow-soft` 3/3 半透明（安静容器）、`--shadow-accent` 5/5 用强调色。

### 纸张颗粒
```css
--paper-grain: radial-gradient(var(--dot) 1.4px, transparent 1.4px);
--paper-grain-size: 24px 24px;
```
作为某个 surface 的 `background-image` 使用。

### 倾斜与动效
倾斜：`--tilt-sm` -1deg、`--tilt` -2deg、`--tilt-pos` 2deg。
动效要快、要利落，不能飘：`--ease-snap: cubic-bezier(.34,1.56,.64,1)`、`--dur-fast` 100ms、`--dur` 160ms。

## 间距与布局（Spacing & Layout）

4px 基准。内容保持窄而聚焦的栏宽，速写本式留白。

- 间距：space-1…space-20（4px→80px），section 内边距常用 `--space-20` 80px。
- 容器宽度：`--max-w`、`--max-w-prose` 768px（阅读栏）、`--max-w-wide`。
  > 本项目已将 `--max-w` / `--max-w-wide` 调整为 **75rem（1200px）** 以求更大气，项目网格为 3 列（≤1024px 2 列、≤620px 1 列）。
- 栅格间距：`--gap` 32px、`--gap-sm` 20px。触控目标 `--tap` 48px。

## 组件（Components）

本项目把设计包的 5 个核心组件移植到 `components/ui/`（React + 内联样式引用 CSS 变量），图标在 `components/Icons.js`。

### Button — `components/ui/Button.js`
歪扭马克笔按钮 + 硬偏移阴影。`variant`: `primary`（橘色填充）/ `secondary`（蓝色填充）/ `ghost`（虚线、无阴影）；`size`: `sm|md|lg`；传 `href` 渲染为 `<a>`。hover 朝光标抬起，按下把阴影压平；图标用 `icon` / `iconRight`。

### Card — `components/ui/Card.js`
剪纸容器。`variant`: `default`（白纸）/ `note`（便签黄）/ `speech`（带尾巴，适合证言）；`decoration`: `tape`（胶带）/ `tack`（图钉）；`tilt` 设静止旋转；`interactive` 在 hover 时摆正并抬起。

### Badge — `components/ui/Badge.js`
便签 / 马克笔标签。`variant`: `note` / `solid`（强调色填充）/ `outline`（虚线框）；`tilt` 控制翘起角度（默认 -1.5°）。

### Avatar — `components/ui/Avatar.js`
「胶带照片」头像。`shape`: `wobbly`（圆角矩形框）/ `circle`（不规则近圆）；`tape` 顶部半透明胶带；`tilt` 旋转。多个叠放时用负水平外边距。

### Input（设计包内含，本项目暂未使用）
满框手写输入框。可选 `label` 在上方；聚焦时边框转圆珠笔蓝并加柔环，无默认浏览器 outline。

## 文案口吻（Voice）

双语（英文标题 + 中文正文）、第一人称、谦逊、手作 / maker 气质，**不用 emoji**。

## 落地位置速查

| 内容 | 文件 |
| --- | --- |
| 全部 token + 页面布局类 | `styles/globals.css` |
| 主题切换（data-theme） | `pages/_app.js`（next-themes）、`components/Header.js` |
| Hero / 简介 / 社交 | `components/Hero.js` |
| 项目卡片（含「已下线」态） | `components/Projects.js` |
| 站点数据（项目、社交、简介） | `constants/data.js` |
| 图标集 | `components/Icons.js` |
| UI 原子组件 | `components/ui/{Button,Card,Badge,Avatar}.js` |
