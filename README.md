# @kernelift/ai-chat

[![npm version](https://badge.fury.io/js/%40kernelift%2Fai-chat.svg)](https://badge.fury.io/js/%40kernelift%2Fai-chat)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

基于 Vue 3 + TypeScript 的现代化 AI 聊天框组件，提供企业级的对话界面解决方案。

## ✨ 特性

- 🚀 **现代化架构** - 基于 Vue 3 Composition API + TypeScript
- 💬 **流式对话** - 支持 SSE 实时通信和流式消息显示
- 🎨 **主题系统** - 内置亮色/暗色主题，支持自定义主题色
- 📱 **响应式设计** - 完美适配桌面端和移动端，流畅的动画过渡
- 📚 **历史管理** - 智能的对话历史记录管理
- 🛠️ **高度可定制** - 丰富的插槽和配置选项
- 🌐 **国际化** - 内置中英文支持
- 🧠 **AI 能力** - 支持深度思考、联网搜索等 AI 功能
- ✨ **流畅动画** - 侧边栏和工作区均支持平滑的展开/收起动画
- 📝 **智能输入** - 输入框自动高度调整（2-N 行），移动端优化的键盘行为
- 🔍 **用户消息导航** - 双击头部或点击图标快速查看和跳转到历史提问
- ⬇️ **滚动控制** - 智能滚动到底部按钮，自动暂停跟随机制
- 👁️ **输入框显隐** - 支持隐藏输入框获得更大阅读空间，移动端友好

## 📦 安装

```bash
# 使用 pnpm
pnpm add @kernelift/ai-chat

# 使用 npm
npm install @kernelift/ai-chat

# 使用 yarn
yarn add @kernelift/ai-chat
```

### 依赖要求

- Vue 3.3+
- TypeScript 5.0+
- @kernelift/markdown (workspace:\*)

## 🚀 快速开始

### 基础用法

```vue
<template>
  <ChatContainer
    v-model:messages="messages"
    v-model:inputText="inputText"
    v-model:loading="loading"
    :records="records"
    @send="handleSend"
    @bubble-event="handleBubbleEvent"
  />
</template>

<script setup>
import { ref } from 'vue'
import { ChatContainer } from '@kernelift/ai-chat'
import '@kernelift/ai-chat/style.css'
import type { ChatMessage, ChatRecord, BubbleEvent } from '@kernelift/ai-chat'

const messages = ref<ChatMessage[]>([])
const inputText = ref('')
const loading = ref(false)
const records = ref<ChatRecord[]>([])

const handleSend = (text: string) => {
  console.log('发送消息:', text)
}

const handleBubbleEvent = (eventName: BubbleEvent, data: ChatMessage) => {
  console.log('气泡事件:', eventName, data)
}
</script>
```

## 📚 目录

- [组件架构](#组件架构)
- [组件详解](#组件详解)
- [事件处理](#事件处理)
- [样式定制](#样式定制)
- [完整示例](#完整示例)
- [API 文档](#api-文档)
- [常见问题](#常见问题)

## 🏗️ 组件架构

### 组件层次结构

```
ChatContainer (主容器)
├── ChatSidebar (侧边栏)
│   ├── Logo 区域
│   ├── 新建聊天按钮
│   ├── 聊天记录列表
│   └── 记录操作菜单
├── ChatHeader (头部)
│   ├── Logo 显示
│   └── 主题切换按钮
├── 消息区域
│   ├── ChatBubble (消息气泡)
│   │   ├── 用户消息
│   │   └── AI 助手消息
│   │       ├── 思考过程 (ThinkingProcess)
│   │       ├── 消息内容
│   │       └── 操作按钮
│   └── 空状态提示
└── ChatSender (发送器)
    ├── 工具按钮区域
    ├── 输入框
    └── 发送按钮
```

### 数据流

```
用户输入 → ChatSender → send事件 → 父组件处理 → 更新messages → ChatBubble渲染
                ↓
        AI响应处理 → 流式更新 → 实时显示
```

## 🧩 组件详解

### ChatContainer - 主容器

主容器组件，负责整体布局和状态管理。

```vue
<template>
  <ChatContainer
    v-model:messages="messages"
    v-model:inputText="inputText"
    v-model:loading="loading"
    v-model:record-id="activeRecordId"
    v-model:enable-think="enableThink"
    v-model:enable-net="enableNet"
    :records="records"
    :theme-mode="themeMode"
    :primary-color="#615ced"
    :has-header="true"
    :has-theme-mode="true"
    :show-workspace="true"
    :input-height="140"
    @send="handleSend"
    @bubble-event="handleBubbleEvent"
    @change-record="handleChangeRecord"
    @change-theme="handleThemeChange"
  >
    <!-- 插槽内容 -->
  </ChatContainer>
</template>
```

### ChatBubble - 消息气泡

负责显示单条消息，支持多种消息类型和交互操作。

```vue
<template>
  <ChatBubble
    v-model="message"
    :is-last="isLastMessage"
    :markdown-class="customMarkdownClass"
    @bubble-event="handleBubbleEvent"
  >
    <!-- 自定义消息头部 -->
    <template #header>
      <div class="message-time">
        {{ formatTime(message.timestamp) }}
      </div>
    </template>

    <!-- 自定义思考过程头部 -->
    <template #thinking-header>
      <div class="thinking-label">推理过程</div>
    </template>

    <!-- 自定义操作按钮 -->
    <template #bubble-event>
      <el-button @click="handleCustomAction(message)"> 自定义操作 </el-button>
    </template>
  </ChatBubble>
</template>
```

#### 自定义操作按钮（数据驱动）

操作按钮（复制/重新生成/点赞/点踩）已数据驱动，并可通过 `ext-events` 追加自定义事件，事件名称会在 `bubble-event` 中透出：

```vue
<ChatBubble
  v-model="message"
  :ext-events="[
    {
      key: 'bookmark',
      icon: 'material-symbols--star-outline',
      iconActive: 'material-symbols--star',
      label: '收藏',
      active: message.isBookmarked,
      activeColor: '#f59e0b'
    },
    {
      key: 'share',
      icon: 'material-symbols--share',
      label: '分享'
    }
  ]"
  @bubble-event="
    (event, msg) => {
      if (event === 'bookmark') msg.isBookmarked = !msg.isBookmarked;
      if (event === 'share') shareMessage(msg);
    }
  "
/>
```

#### 消息类型支持

- **用户消息** (`role: 'user'`) - 右对齐，蓝色背景
- **AI 助手消息** (`role: 'assistant'`) - 左对齐，白色背景
- **系统消息** (`role: 'system'`) - 居中显示，特殊样式

#### 消息状态

- `loading` - 正在生成中，显示加载动画
- `isThinking` - 正在思考，显示思考过程
- `isError` - 错误状态，显示错误信息
- `isTerminated` - 已终止生成

### ChatSender - 消息发送器

提供消息输入、工具按钮和发送功能。

```vue
<template>
  <ChatSender
    v-model="inputText"
    :loading="isSending"
    :has-thinking="true"
    :has-net-search="true"
    :input-height="140"
    :is-mobile="isMobile"
    @send="handleSend"
  >
    <!-- 自定义工具 -->
    <template #tools="{ value, loading }">
      <el-tooltip content="清空输入">
        <el-button :disabled="!value" @click="inputText = ''">
          <IconRender icon="material-symbols:clear" />
        </el-button>
      </el-tooltip>
    </template>

    <!-- 自定义发送按钮 -->
    <template #send-button="{ state, execute }">
      <button :disabled="!state.inputValue || state.loading" @click="execute">
        {{ state.loading ? '停止' : '发送' }}
      </button>
    </template>
  </ChatSender>
</template>
```

#### 功能特性

- **自动调整高度** - 初始 2 行（62px），输入第 3 行时自动扩展至最大高度
- **快捷键支持** - 桌面端 Enter 发送，Shift+Enter 换行；移动端 Enter 换行
- **工具按钮** - 支持深度思考、联网搜索等功能
- **粘贴处理** - 智能处理粘贴的文本和图片
- **移动端优化** - Enter 键自动换行，需点击发送按钮发送消息

### ChatSidebar - 侧边栏

管理对话历史记录和导航。

```vue
<template>
  <ChatSidebar
    v-model="activeRecord"
    :data="records"
    :collapse="isCollapsed"
    :theme-mode="theme"
    @change="handleRecordChange"
    @change-collapse="handleCollapse"
    @change-theme="handleThemeChange"
    @click-logo="handleLogoClick"
  >
    <!-- 自定义 Logo -->
    <template #logo>
      <div class="brand-logo">
        <img src="/brand-logo.png" alt="Brand" />
        <span>AI对话平台</span>
      </div>
    </template>

    <!-- 自定义新建按钮 -->
    <template #new-chat-button>
      <button class="new-chat-btn">+ 新建对话</button>
    </template>
  </ChatSidebar>
</template>
```

#### 功能特性

- **历史记录管理** - 创建、切换、删除对话记录
- **搜索功能** - 快速搜索历史对话
- **折叠展开** - 支持侧边栏折叠以节省空间
- **拖拽调整** - 可拖拽调整侧边栏宽度

## 🎯 高级功能

### 用户消息导航

快速查看和跳转到历史提问记录。

#### 桌面端使用

- 双击聊天头部区域打开用户消息列表
- 点击列表中任意消息可平滑滚动到对应位置

#### 移动端使用

- 双击头部区域打开用户消息列表
- 或点击折叠头部的 📄 图标按钮
- 点击消息项跳转，自动关闭面板

```vue
<template>
  <ChatContainer
    v-model:messages="messages"
    :i18n="{
      chat: {
        userMessages: '我的提问',
        noUserMessages: '暂无提问记录'
      }
    }"
  />
</template>
```

### 智能滚动控制

消息区域的自动滚动和手动控制。

#### 自动滚动

- 新消息到达时自动滚动到底部
- 流式生成时实时跟随显示
- 用户手动滚动时暂停自动跟随（默认 3 秒后恢复）

#### 滚动到底部按钮

- 当消息区域有滚动条且未在底部时显示
- 点击平滑滚动到最新消息
- 支持淡入淡出动画效果

```vue
<template>
  <ChatContainer
    v-model:messages="messages"
    :auto-scroll="true"
    :auto-scroll-pause-time="3000"
    :i18n="{
      chat: {
        scrollToBottom: '滚动到底部'
      }
    }"
  />
</template>
```

### 输入框显隐控制

隐藏输入框获得更大的阅读空间（移动端特别有用）。

#### 使用方式

- 点击折叠头部的键盘图标切换输入框显隐
- 图标会根据状态切换：
  - 🎹 `keyboard-hide` - 输入框可见，点击隐藏
  - ⌨️ `keyboard` - 输入框隐藏，点击显示
- 状态会自动保存在 localStorage

#### 工具栏联动

```vue
<template>
  <ChatContainer
    v-model:messages="messages"
    :show-sender="true"
    :has-sender-tools="true"
    :always-show-sender-tools="false"
  />
</template>
```

配置说明：

- `always-show-sender-tools="false"` - 隐藏输入框时同时隐藏工具栏
- `always-show-sender-tools="true"` - 输入框隐藏时工具栏仍然显示

### ThinkingProcess - 思考过程

展示 AI 的思考推理过程。

```vue
<template>
  <ThinkingProcess
    v-model:collapse="isThoughtCollapsed"
    :data="thoughtContent"
    :loading="isThinking"
    :markdown-class="thoughtStyle"
  >
    <!-- 自定义头部 -->
    <template #header>
      <div class="thought-title">
        <IconRender icon="material-symbols:psychology" />
        AI思考过程
      </div>
    </template>
  </ThinkingProcess>
</template>
```

#### 功能特性

- **折叠展开** - 支持思考过程的折叠和展开
- **Markdown 渲染** - 思考过程支持 Markdown 格式
- **实时更新** - 思考过程中实时显示内容

## 🎯 事件处理

### 消息发送事件

```typescript
// 发送消息
const handleSend = (text: string, isEnableThink?: boolean, isEnableNet?: boolean) => {
  // 1. 添加用户消息
  messages.value.push({
    id: generateId(),
    role: 'user',
    content: text,
    timestamp: Date.now(),
    isThinking: isEnableThink,
    extraData: {
      question: text
    }
  });

  // 2. 调用AI接口
  callAI(text, isEnableThink, isEnableNet).then((response) => {
    // 处理AI响应
  });
};
```

### 气泡交互事件

```typescript
const handleBubbleEvent = (eventName: BubbleEvent, message: ChatMessage) => {
  switch (eventName) {
    case 'like':
      // 点赞处理
      message.isLiked = !message.isLiked;
      message.isDisliked = false;
      break;

    case 'dislike':
      // 点踩处理
      message.isDisliked = !message.isDisliked;
      message.isLiked = false;
      break;

    case 'copy':
      // 复制消息
      navigator.clipboard.writeText(message.content);
      ElMessage.success('已复制到剪贴板');
      break;

    case 'reload':
      // 重新生成
      handleRegenerate(message);
      break;

    case 'terminate':
      // 终止生成
      handleTerminate(message);
      break;

    case 'bookmark':
      // 收藏消息
      message.isBookmarked = !message.isBookmarked;
      break;
  }
};
```

### 记录管理事件

```typescript
// 发送消息（组件会自动传递 needCreateRecord 标志）
const handleSend = (
  text: string,
  enableThink?: boolean,
  enableNet?: boolean,
  needCreateRecord?: boolean
) => {
  // 添加用户消息
  messages.value.push({
    id: Date.now().toString(),
    role: 'user',
    content: text,
    timestamp: Date.now()
  });

  // 如果需要创建新记录（当前没有激活的记录）
  if (needCreateRecord) {
    const newRecord: ChatRecord = {
      id: generateId(),
      name: text.slice(0, 30) + (text.length > 30 ? '...' : ''),
      content: text,
      type: 'text',
      createTime: new Date().toLocaleDateString(),
      userId: 'current-user',
      extraData: { messages: messages.value }
    };

    records.value.unshift(newRecord);
    activeRecordId.value = newRecord.id;
  }

  // 调用 AI API 处理响应
  callAIAPI(text, enableThink, enableNet);
};

// 切换记录
const handleChangeRecord = (record?: ChatRecord) => {
  if (record) {
    messages.value = record.extraData?.messages || [];
    activeRecordId.value = record.id;
  }
};

// 删除记录
const handleDeleteRecord = (record: ChatRecord) => {
  const index = records.value.findIndex((r) => r.id === record.id);
  if (index > -1) {
    records.value.splice(index, 1);
    if (activeRecordId.value === record.id) {
      activeRecordId.value = null;
      messages.value = [];
    }
  }
};
```

### 流式消息处理

```typescript
import { SSEClient } from '@kernelift/ai-chat';

const handleStreamResponse = async (question: string, enableThink?: boolean) => {
  const client = new SSEClient('your-token', 'https://api.example.com');

  let currentMessage: ChatMessage = {
    id: generateId(),
    role: 'assistant',
    content: '',
    timestamp: Date.now(),
    loading: true,
    isThinking: enableThink
  };

  messages.value.push(currentMessage);

  const handlers = {
    onContent: (content: string) => {
      currentMessage.content += content;
    },

    onThinkingDelta: (content: string) => {
      if (!currentMessage.thoughtProcess) {
        currentMessage.thoughtProcess = '';
      }
      currentMessage.thoughtProcess += content;
    },

    onToolCallDelta: (data: any) => {
      // 处理工具调用
      if (!currentMessage.toolCalls) {
        currentMessage.toolCalls = [];
      }
      currentMessage.toolCalls.push(data);
    },

    onComplete: (finalData: { content: string; toolCalls: any[] }) => {
      currentMessage.content = finalData.content;
      currentMessage.toolCalls = finalData.toolCalls;
      currentMessage.loading = false;
    },

    onError: (error: Error) => {
      console.error('流式响应错误:', error);
      currentMessage.loading = false;
      currentMessage.isError = true;
      currentMessage.error = error.message;
    }
  };

  await client.connect('/api/chat/stream', handlers, {
    body: { question, enable_thinking: enableThink }
  });
};
```

## 🎨 样式定制

### CSS 变量定制

```css
/* 全局样式变量 */
:root {
  /* 主题色 */
  --kl-chat-primary-color: #615ced;
  --kl-chat-primary-rgb: 97, 92, 237;

  /* 文本颜色 */
  --kl-text-color: #1b1b1b;
  --kl-note-color: #9ca3af;
  --kl-process-text-color: #61666b;

  /* 背景色 */
  --kl-background-color: #fff;
  --kl-main-background-color: #f7f8fc;
  --kl-sender-background-color: #fff;

  /* 输入框 */
  --kl-sender-text-color: #4a4a4a;
  --kl-tool-button-default-color: #7d7d7d;

  /* 边框 */
  --kl-border-color: #d1d5db;

  /* 主题色衍生 */
  --kl-color-primary: var(--kl-chat-primary-color);
  --kl-color-primary-light-3: #8a86f1;
  --kl-color-primary-light-5: #a9a6f5;
  --kl-color-primary-light-7: #c8c6f8;
  --kl-color-primary-light-8: #dddafc;
  --kl-color-primary-light-9: #f2f1fe;
}

/* 暗色主题 */
.dark {
  --kl-chat-primary-color: #8a86f1;
  --kl-text-color: #e5e7eb;
  --kl-note-color: #9ca3af;
  --kl-background-color: #1a1a1a;
  --kl-main-background-color: #262626;
  --kl-sender-background-color: #2d2d2d;
  --kl-sender-text-color: #e5e7eb;
  --kl-border-color: #374151;
  --kl-process-text-color: #9ca3af;
}
```

### SCSS 样式定制

```scss
// 自定义主题
.kernelift-chat-container {
  // 主容器样式
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &__aside {
    // 侧边栏样式
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    border-right: 1px solid var(--kl-border-color);
  }

  &__messages-section {
    // 消息区域样式
    background-color: var(--kl-main-background-color);
  }

  &__sender {
    // 发送器样式
    background-color: var(--kl-sender-background-color);
    border-top: 1px solid var(--kl-border-color);
  }
}

// 自定义消息气泡
.custom-chat-bubble {
  .kernelift-chat-bubble__assistant {
    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
    border: 1px solid #e1e8ff;
    border-radius: 12px;

    &:hover {
      box-shadow: 0 4px 12px rgba(97, 92, 237, 0.1);
    }
  }

  .kernelift-chat-bubble__user {
    &-content {
      background: linear-gradient(135deg, var(--kl-chat-primary-color) 0%, #8a86f1 100%);
      color: white;
      border-radius: 12px;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}

// 自定义发送器
.custom-chat-sender {
  .kernelift-chat-sender__textarea {
    border-radius: 8px;
    border: 2px solid var(--kl-border-color);

    &:focus {
      border-color: var(--kl-chat-primary-color);
      box-shadow: 0 0 0 3px rgba(97, 92, 237, 0.1);
    }
  }

  .kernelift-chat-sender__send-button {
    background: linear-gradient(135deg, var(--kl-chat-primary-color) 0%, #8a86f1 100%);
    border-radius: 8px;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(97, 92, 237, 0.3);
    }
  }
}
```

### 响应式设计与动画

组件内置了完整的移动端支持和流畅的动画效果：

**移动端特性：**

- 📱 **侧边栏**：从左侧滑入（80%宽度），带半透明遮罩层（#1b1b1b56），点击遮罩自动关闭
- 📱 **工作区**：从右侧滑入全屏显示，流畅的 slide + fade 动画
- 📱 **自动布局**：聊天区域自适应宽度，输入框自动调整高度

**动画详情：**

- 侧边栏：`transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)` - Material Design 缓动曲线
- 工作区：`slideInFromRight` 关键帧动画（translateX: 100% → 0, opacity: 0 → 1）
- 遮罩层：`background-color 0.3s ease` + `opacity 0.3s ease`

```scss
// 移动端自动适配（768px 断点）
@media (max-width: 768px) {
  // 侧边栏自动应用遮罩层和滑入动画
  .mobile-aside {
    background-color: #1b1b1b56; // 半透明遮罩
    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
  }

  // 工作区自动全屏并应用滑入动画
  .mobile-workspace {
    animation: slideInFromRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .kernelift-chat-bubble {
    margin: 8px 12px;

    &__actions {
      opacity: 1; // 移动端始终显示操作按钮
    }
  }
}
```

## 💻 完整示例

### 基础聊天应用

```vue
<template>
  <div class="chat-app">
    <ChatContainer
      v-model="inputText"
      v-model:loading="senderLoading"
      v-model:messages="messages"
      v-model:record-id="activeRecordId"
      :records="records"
      :theme-mode="themeMode"
      :is-generate-loading="generateLoading"
      :record-actions="recordActions"
      has-theme-mode
      has-thinking
      :markdown-class-name="themeMode === 'dark' ? 'prose-invert' : 'prose'"
      @send="handleSend"
      @cancel="handleCancel"
      @change-record="handleChangeRecord"
      @bubble-event="handleBubbleEvent"
      @change-theme="(mode) => (themeMode = mode)"
    >
      <!-- 自定义空状态 -->
      <template #empty>
        <div class="empty-state">
          <div class="welcome-title">AI 助手</div>
          <div class="welcome-desc">你好！有什么可以帮助你的吗？</div>
        </div>
      </template>

      <!-- 自定义 Logo -->
      <template #logo>
        <div class="brand-logo">
          <IconRender icon="material-symbols:chat" />
          <span>AI 对话</span>
        </div>
      </template>
    </ChatContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import {
  ChatContainer,
  type BubbleEvent,
  type ChatMessage,
  type ChatRecord,
  type ChatRecordAction
} from '@kernelift/ai-chat';
import '@kernelift/ai-chat/style.css';
import { useStorage } from '@vueuse/core';

// 状态管理
const inputText = ref('');
const messages = ref<ChatMessage[]>([]);
const records = useStorage<ChatRecord[]>('chat-records', []);
const activeRecordId = ref<string | null>(null);
const senderLoading = ref(false);
const generateLoading = ref(false);
const themeMode = ref<'light' | 'dark'>('light');

// 记录操作
const recordActions: ChatRecordAction[] = [
  {
    id: 'edit',
    name: '编辑',
    icon: 'edit',
    action: (record) => {
      console.log('编辑记录:', record);
    }
  },
  {
    id: 'delete',
    name: '删除',
    icon: 'delete',
    action: (record) => {
      records.value = records.value.filter((r) => r.id !== record.id);
    }
  }
];

// 发送消息（包含记录创建逻辑）
const handleSend = async (
  text: string,
  enableThink?: boolean,
  enableNet?: boolean,
  needCreateRecord?: boolean
) => {
  inputText.value = '';

  // 添加用户消息
  messages.value.push({
    id: Date.now().toString(),
    role: 'user',
    content: text,
    timestamp: Date.now(),
    isThinking: enableThink
  });

  // 如果需要创建新记录（当前没有激活的记录）
  if (needCreateRecord) {
    const newRecord: ChatRecord = {
      id: Date.now().toString(),
      name: text.slice(0, 30) + (text.length > 30 ? '...' : ''),
      content: text,
      type: 'text',
      createTime: new Date().toLocaleDateString(),
      userId: 'current-user',
      extraData: { messages: messages.value }
    };

    records.value.unshift(newRecord);
    activeRecordId.value = newRecord.id;
  }

  senderLoading.value = true;
  generateLoading.value = true;

  try {
    // 模拟 AI 响应
    await simulateAIResponse(text, enableThink);
  } catch (error) {
    console.error('发送失败:', error);
  } finally {
    senderLoading.value = false;
    generateLoading.value = false;
  }
};

// 模拟 AI 响应
const simulateAIResponse = async (text: string, enableThink?: boolean) => {
  const responseId = Date.now().toString();

  messages.value.push({
    id: responseId,
    role: 'assistant',
    content: '',
    timestamp: Date.now(),
    loading: true,
    isThinking: enableThink
  });

  const targetMessage = messages.value.find((m) => m.id === responseId)!;

  // 模拟思考过程
  if (enableThink) {
    targetMessage.thoughtProcess = '正在分析用户问题...\n';
    await new Promise((resolve) => setTimeout(resolve, 1000));
    targetMessage.thoughtProcess += '整理相关信息...\n';
    await new Promise((resolve) => setTimeout(resolve, 1000));
    targetMessage.thoughtProcess += '生成回答...\n';
    await new Promise((resolve) => setTimeout(resolve, 500));
    targetMessage.isThinking = false;
  }

  // 模拟流式响应
  const response = `这是对"${text}"的回答。`;
  for (let i = 0; i < response.length; i++) {
    targetMessage.content += response[i];
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  targetMessage.loading = false;
};

// 取消生成
const handleCancel = () => {
  generateLoading.value = false;
  senderLoading.value = false;

  const lastMessage = messages.value[messages.value.length - 1];
  if (lastMessage?.loading) {
    lastMessage.loading = false;
    lastMessage.isTerminated = true;
  }
};

// 处理气泡事件
const handleBubbleEvent = (event: BubbleEvent, data: ChatMessage) => {
  switch (event) {
    case 'like':
      data.isLiked = !data.isLiked;
      data.isDisliked = false;
      break;
    case 'dislike':
      data.isDisliked = !data.isDisliked;
      data.isLiked = false;
      break;
    case 'copy':
      navigator.clipboard.writeText(data.content);
      break;
    case 'bookmark':
      data.isBookmarked = !data.isBookmarked;
      break;
  }
};

// 注意：记录创建逻辑已集成到 handleSend 函数中
// 当 needCreateRecord 为 true 时，在发送消息的同时创建新记录

// 切换记录
const handleChangeRecord = (record?: ChatRecord) => {
  if (record) {
    messages.value = record.extraData?.messages || [];
    activeRecordId.value = record.id;
  } else {
    messages.value = [];
    activeRecordId.value = null;
  }
};
</script>

<style scoped>
.chat-app {
  height: 100vh;
  padding: 20px;
  background: #f5f5f5;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.welcome-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--kl-chat-primary-color);
}

.welcome-desc {
  font-size: 16px;
  color: var(--kl-note-color);
  line-height: 1.6;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

## 📖 API 文档

### CSS 变量定制

```css
/* 在全局样式或组件样式中覆盖 */
:root {
  --kl-chat-primary-color: #615ced;
  --kl-chat-primary-rgb: 97, 92, 237;

  --kl-color-primary: var(--kl-chat-primary-color);
  --kl-color-primary-light-3: v-bind(lightColors[0]);
  --kl-color-primary-light-5: v-bind(lightColors[1]);
  --kl-color-primary-light-7: v-bind(lightColors[2]);
  --kl-color-primary-light-8: v-bind(lightColors[3]);
  --kl-color-primary-light-9: v-bind(lightColors[4]);
  --kl-text-color: #1b1b1b;
  --kl-note-color: #9ca3af;
  --kl-background-color: #fff;
  --kl-main-background-color: #f7f8fc;
  --kl-sender-background-color: #fff;
  --kl-sender-text-color: #4a4a4a;
  --kl-tool-button-default-color: #7d7d7d;
  --kl-border-color: #d1d5db;
  --kl-process-text-color: #61666b;
}

/* 暗色主题 */
.dark {
  --kl-chat-primary-color: #8a86f1;
  --dark-background-color: #1a1a1a;
}
```

### SCSS 样式定制

```scss
// 自定义主题
.kernelift-chat-container {
  // 修改主容器样式
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  &__aside {
    // 修改侧边栏样式
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  }

  &__messages-section {
    // 修改消息区域样式
    background-color: #fafbfc;
  }
}

// 自定义消息气泡
.custom-chat-bubble {
  .kernelift-chat-bubble__assistant {
    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
    border: 1px solid #e1e8ff;
  }

  .kernelift-chat-bubble__user {
    &-content {
      background: linear-gradient(135deg, var(--kl-chat-primary-color) 0%, #8a86f1 100%);
      color: white;
    }
  }
}
```

## 使用示例

### 完整聊天应用

```vue
<script setup lang="ts">
import {
  ChatContainer,
  type BubbleEvent,
  type ChatMessage,
  type ChatRecord,
  type ChatRecordAction
} from '@kernelift/ai-chat';
import '@kernelift/ai-chat/style.css';
import OpenAI from 'openai';
import { useStorage } from '@vueuse/core';
import type { ChatCompletionCreateParamsStreaming } from 'openai/resources';
import { onUnmounted, ref, shallowRef } from 'vue';

// 当前显示的消息列表
const demoMessages = ref<ChatMessage[]>([]);
// 所有消息记录
const demoRecords = useStorage<ChatRecord[]>('demo-records', []);
// 显示工作区
const showWorkspace = ref(false);
// 发送中
const senderLoading = ref(false);
// 生成中
const generateLoading = ref(false);
// 当前激活的记录
const activeRecordId = ref<string | null>(null);

//

// 流式传输
const streamMode = ref<boolean>(true);
// 输入问题
const userQuestion = ref('');

// const chatModel = ref('deepseek-ai/DeepSeek-V3.1-Terminus');

const client = new OpenAI({
  apiKey: 'sk-xxx',
  baseURL: 'https://api.siliconflow.cn/v1',
  // 危险，此处仅作为示范使用
  dangerouslyAllowBrowser: true
});

// 创建 AbortController
const controller = shallowRef(new AbortController());

/**
 * @description 发送消息
 * @param value
 * @param enableThink
 * @param enableNet
 */
async function handleSend(value: string, enableThink?: boolean) {
  // 1. 清空输入框
  userQuestion.value = '';
  // 2. 添加用户输入记录
  demoMessages.value.push({
    id: Date.now().toString(),
    role: 'user',
    content: value,
    timestamp: Date.now(),
    isThinking: enableThink,
    extraData: {
      question: value
    }
  });
  // 3. 添加机器人输入记录
  senderLoading.value = true;
  generateLoading.value = true;
  if (streamMode.value) {
    try {
      const stream = await client.chat.completions.create(
        {
          model: 'deepseek-ai/DeepSeek-V3.1-Terminus',
          messages: demoMessages.value.map((item) => {
            return {
              role: item.role,
              content: item.content
            };
          }),
          stream: true,
          enable_thinking: !!enableThink
        } as ChatCompletionCreateParamsStreaming,
        {
          signal: controller.value.signal
        }
      );
      // 4. 载入响应数据，并关闭生成加载
      generateLoading.value = false;

      const targetId = Date.now().toString();
      demoMessages.value.push({
        id: targetId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
        isThinking: false
      });
      const targetMessage = demoMessages.value.find((item) => item.id === targetId)!;
      for await (const chunk of stream) {
        targetMessage.loading = true;
        if (
          enableThink &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (chunk.choices[0]?.delta as any).reasoning_content &&
          targetMessage.content.length === 0 &&
          !chunk.choices[0]?.delta.content
        ) {
          if (!targetMessage.thoughtProcess) {
            targetMessage.thoughtProcess = '';
          }
          targetMessage.isThinking = true;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          targetMessage.thoughtProcess += (chunk.choices[0]?.delta as any).reasoning_content || '';
        } else {
          targetMessage.isThinking = false;
        }
        targetMessage.content = targetMessage.content + (chunk.choices[0]?.delta.content || '');
        targetMessage.timestamp = Date.now();
      }
      targetMessage.loading = false;
    } catch {
      // 请求失败处理
      // TODO
      // ElNotification.error('请求失败，请稍后重试');
      const targetMessage = demoMessages.value[demoMessages.value.length - 1]!;
      targetMessage.loading = false;
      targetMessage.timestamp = Date.now();
      targetMessage.error = '请求失败，请稍后重试';
    } finally {
      senderLoading.value = false;
    }
  } else {
    try {
      const response = await client.chat.completions.create(
        {
          model: 'deepseek-ai/DeepSeek-V3.1-Terminus',
          messages: demoMessages.value.map((item) => {
            return {
              role: item.role,
              content: item.content
            };
          }),
          stream: false
        },
        {
          signal: controller.value.signal
        }
      );

      demoMessages.value.push({
        id: Date.now().toString(),
        role: 'assistant',
        content: response.choices[0]?.message.content || '请求失败，请稍后重试',
        timestamp: Date.now(),
        isThinking: false
      });
    } catch {
      // TODO: 错误处理
      // ElNotification.error('请求失败，请稍后重试');
    } finally {
      // 4. 载入响应数据，并关闭生成加载
      senderLoading.value = false;
      generateLoading.value = false;
    }
  }
}

function handleCancel() {
  controller.value.abort();
  controller.value = new AbortController();
  if (generateLoading.value) {
  }
  generateLoading.value = false;
  senderLoading.value = false;
}

onUnmounted(() => {
  controller.value.abort();
});

// 记录创建逻辑已整合到 handleSend 中
// 通过 needCreateRecord 参数判断是否需要创建新记录

function handleChangeRecord(record?: ChatRecord) {
  demoMessages.value = record?.extraData?.messages || [];
}

function handleBubbleEvent(event: BubbleEvent, data: ChatMessage) {
  switch (event) {
    case 'like':
      data.isLiked = !data.isLiked;
      break;
    case 'dislike':
      data.isDisliked = !data.isDisliked;
      break;
    case 'bookmark':
      data.isBookmarked = !data.isBookmarked;
      break;
    case 'terminate':
      data.isTerminated = true;
      break;
    case 'copy':
      navigator.clipboard.writeText(data.content);
    // TODO: 添加复制成功提示
    // ElMessage.success('复制成功');
  }
}

const recordButtons: ChatRecordAction[] = [
  {
    id: 'edit',
    name: '编辑',
    icon: 'edit',
    action: () => {}
  },
  {
    id: 'delete',
    name: '删除',
    icon: 'delete',
    action: (record) => {
      demoRecords.value = demoRecords.value.filter((item) => item.id !== record.id);
    }
  }
];

const themeMode = ref<'light' | 'dark'>('light');

function handleScrollBottom() {
  // TODO: 滚动到底部
  console.log('滚动到底部');
}
</script>

<template>
  <div class="w-full h-full relative">
    <ChatContainer
      v-model="userQuestion"
      v-model:loading="senderLoading"
      v-model:messages="demoMessages"
      v-model:record-id="activeRecordId"
      :is-generate-loading="generateLoading"
      :records="demoRecords"
      :record-actions="recordButtons"
      :show-workspace="showWorkspace"
      :has-sender-tools="true"
      :show-sender="true"
      has-theme-mode
      :markdown-class-name="themeMode === 'dark' ? 'prose-invert' : 'prose'"
      :enable-think="true"
      :enable-net="false"
      :theme-mode="themeMode"
      :input-height="80"
      @send="handleSend"
      @cancel="handleCancel"
      @close-workspace="showWorkspace = false"
      @change-record="handleChangeRecord"
      @bubble-event="handleBubbleEvent"
      @change-theme="(mode) => (themeMode = mode)"
      @scroll-bottom="handleScrollBottom"
    >
      <template #sender-tools>
        <div class="px-3 flex items-center h-full">
          <div
            class="border border-amber-600 rounded py-1 px-2 text-sm ml-auto text-amber-600 hover:brightness-125 hover:bg-amber-500/15 cursor-pointer"
            @click="showWorkspace = !showWorkspace"
          >
            会话空间
          </div>
        </div>
      </template>
      <template #empty>
        <div class="text-center">
          <div class="italic font-bold text-3xl mb-3">AI计量助手</div>
          <div>
            你好！很高兴见到你！😊
            <div>
              有什么我可以帮助你的吗？无论是回答问题、聊天还是其他任何需要，我都很乐意为你提供帮助！
            </div>
          </div>
        </div>
      </template>
      <template #logo>
        <div class="text-xl mb-2 font-bold">AI计量助手</div>
      </template>
      <template #header-logo>
        <div class="text-lg font-bold ml-3">AI计量助手</div>
      </template>

      <template #workspace="{ record }">
        <div class="p-3 relative overflow-auto w-full h-full workspace-area">
          在工作区展示记录的一些详细信息或额外内容
          <div class="text-base mt-8 whitespace-pre-line bg-gray-200 p-3">
            {{ record }}
          </div>
        </div>
      </template>

      <template #record-dropdown>
        <div class="text-gray-300 italic absolute top-0 right-0">记录下拉菜单</div>
      </template>

      <template #bubble-header="{ data }">
        <div v-if="data.id === '1765436189938'" class="text-gray-300 italic">气泡头部</div>
      </template>
      <template #bubble-footer="{ data }">
        <div v-if="data.id === '1765436189938'" class="text-gray-300 italic">
          气泡底部会覆盖掉操作按钮
        </div>
      </template>
      <template #bubble-event="{ data }">
        <div v-if="data.id === '1765436289340'" class="ml-auto">可以有很多其他按钮</div>
      </template>
      <template #bubble-content-header="{ data }">
        <div v-if="data.id === '1765436189938'" class="text-gray-300 italic">
          我这里可以插入头部
        </div>
      </template>
      <template #bubble-content-footer="{ data }">
        <div v-if="data.id === '1765436189938'" class="text-gray-300 italic">
          我这里可以插入底部
        </div>
      </template>

      <template #bubble-thinking-header="{ data }">
        <div v-if="data.id === '1765436189938'" class="text-gray-300 italic">
          在思考区域搞点事情
        </div>
      </template>

      <template #sender-footer-tools>
        <div class="text-gray-300 italic">这里可以插入一些按钮元素</div>
      </template>

      <template #sender-button>
        <div class="border border-gray-300 bg-amber-600">发送</div>
      </template>
    </ChatContainer>
  </div>
</template>

<style lang="scss">
.workspace-area {
  --scrollbar-width: 8px;
  --scrollbar-border-radius: 4px;
  --scrollbar-track-color: transparent;
  --scrollbar-thumb-color: rgba(var(--kl-chat-primary-rgb), 0.3);
  --scrollbar-thumb-hover-color: rgba(var(--kl-chat-primary-rgb), 0.6);
  --scrollbar-thumb-active-color: rgba(var(--kl-chat-primary-rgb), 0.8);

  &::-webkit-scrollbar {
    width: var(--scrollbar-width);
    height: var(--scrollbar-width);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color);
    border-radius: var(--scrollbar-border-radius);
    margin: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color);
    border-radius: var(--scrollbar-border-radius);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: var(--scrollbar-thumb-hover-color);
    }

    &:active {
      background: var(--scrollbar-thumb-active-color);
    }
  }
}
</style>
```

### Props 属性

| 属性名                  | 类型                     | 默认值      | 说明                                               |
| ----------------------- | ------------------------ | ----------- | -------------------------------------------------- |
| `records`               | `ChatRecord[]`           | `[]`        | 聊天记录列表                                       |
| `recordActions`         | `ChatRecordAction[]`     | `[]`        | 记录操作按钮配置                                   |
| `hasHeader`             | `boolean`                | `true`      | 是否显示头部                                       |
| `headerHeight`          | `number`                 | `62`        | 头部高度 (px)                                      |
| `hasThemeMode`          | `boolean`                | `false`     | 是否支持主题切换                                   |
| `hasThinking`           | `boolean`                | `true`      | 是否支持深度思考                                   |
| `hasNetSearch`          | `boolean`                | `false`     | 是否支持联网搜索                                   |
| `hasSenderTools`        | `boolean`                | `false`     | 是否显示发送工具区                                 |
| `alwaysShowSenderTools` | `boolean`                | `false`     | 是否始终显示发送工具区（即使 showSender 为 false） |
| `showWorkspace`         | `boolean`                | `true`      | 是否显示工作区                                     |
| `showSender`            | `boolean`                | `true`      | 是否显示发送框                                     |
| `isGenerateLoading`     | `boolean`                | `undefined` | 是否正在生成                                       |
| `defaultRecordId`       | `string`                 | `undefined` | 默认记录ID                                         |
| `defaultCollapse`       | `boolean`                | `false`     | 侧边栏默认折叠                                     |
| `defaultAsideWidth`     | `number`                 | `250`       | 侧边栏默认宽度                                     |
| `markdownClassName`     | `string`                 | `undefined` | Markdown 样式类名                                  |
| `primaryColor`          | `string`                 | `'#615ced'` | 主题色                                             |
| `themeMode`             | `'light' \| 'dark'`      | `'light'`   | 主题模式                                           |
| `enableNet`             | `boolean`                | `undefined` | 联网搜索启用状态                                   |
| `enableThink`           | `boolean`                | `undefined` | 深度思考启用状态                                   |
| `inputHeight`           | `number`                 | `140`       | 输入框高度                                         |
| `onCopy`                | `(code: string) => void` | `undefined` | 复制代码回调                                       |
| `i18n`                  | `Record<string, any>`    | `zhCN`      | 国际化配置                                         |
| `markdownPlugins`       | `any[]`                  | `[]`        | Markdown 插件列表                                  |
| `markdownOptions`       | `any`                    | `{}`        | Markdown 配置选项                                  |
| `markdownRender`        | `Component`              | `MdRender`  | 自定义 markdown 渲染组件                           |
| `onMarkdownAfterRender` | `(md: any) => void`      | `undefined` | Markdown 渲染后回调                                |

### v-model 双向绑定

| 属性名                | 类型             | 说明             |
| --------------------- | ---------------- | ---------------- |
| `v-model`             | `string`         | 输入框文本       |
| `v-model:messages`    | `ChatMessage[]`  | 消息列表         |
| `v-model:loading`     | `boolean`        | 发送加载状态     |
| `v-model:recordId`    | `string \| null` | 当前记录ID       |
| `v-model:enableThink` | `boolean`        | 深度思考启用状态 |
| `v-model:enableNet`   | `boolean`        | 联网搜索启用状态 |

### Events 事件

| 事件名               | 参数                                                                                     | 说明                                              |
| -------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `send`               | `(text: string, enableThink?: boolean, enableNet?: boolean, needCreateRecord?: boolean)` | 发送消息，needCreateRecord 表示是否需要创建新记录 |
| `cancel`             | -                                                                                        | 取消生成                                          |
| `clear`              | -                                                                                        | 清空聊天                                          |
| `change-record`      | `(record?: ChatRecord)`                                                                  | 切换记录                                          |
| `change-collapse`    | `(collapse: boolean)`                                                                    | 折叠状态改变                                      |
| `change-theme`       | `(theme: 'light' \| 'dark')`                                                             | 主题切换                                          |
| `change-aside-width` | `(width: number)`                                                                        | 侧边栏宽度改变                                    |
| `click-logo`         | -                                                                                        | 点击Logo                                          |
| `bubble-event`       | `(event: BubbleEvent \| string, message: ChatMessage)`                                   | 气泡交互事件（内置事件 + 自定义 ext-events）      |
| `close-workspace`    | -                                                                                        | 关闭工作区                                        |
| `scroll-bottom`      | -                                                                                        | 滚动到底部                                        |

### Slots 插槽

| 插槽名                   | 参数                                                                    | 说明           |
| ------------------------ | ----------------------------------------------------------------------- | -------------- |
| `left-aside`             | `{ mobile: boolean }`                                                   | 左侧边栏       |
| `aside`                  | `{ record: ChatRecord \| undefined, mobile: boolean }`                  | 主侧边栏       |
| `logo`                   | `{ mobile: boolean }`                                                   | Logo区域       |
| `new-chat-button`        | `{ mobile: boolean }`                                                   | 新建聊天按钮   |
| `record-dropdown`        | `{ mobile: boolean }`                                                   | 记录下拉菜单   |
| `header`                 | `{ record: ChatRecord \| undefined, mobile: boolean }`                  | 头部区域       |
| `header-logo`            | `{ mobile: boolean }`                                                   | 头部Logo       |
| `bubble-header`          | `{ data: ChatMessage, mobile: boolean }`                                | 气泡头部       |
| `bubble-footer`          | `{ data: ChatMessage, mobile: boolean }`                                | 气泡底部       |
| `bubble-event`           | `{ data: ChatMessage, mobile: boolean }`                                | 气泡操作区     |
| `bubble-content-header`  | `{ data: ChatMessage, mobile: boolean }`                                | 气泡内容头部   |
| `bubble-content-footer`  | `{ data: ChatMessage, mobile: boolean }`                                | 气泡内容底部   |
| `bubble-thinking-header` | `{ data: ChatMessage, mobile: boolean }`                                | 思考过程头部   |
| `bubble-loading-content` | `{ mobile: boolean }`                                                   | 加载内容       |
| `empty`                  | `{ mobile: boolean }`                                                   | 空状态         |
| `sender-tools`           | `{ mobile: boolean }`                                                   | 发送工具区     |
| `sender-footer-tools`    | `{ value: string, loading: boolean, mobile: boolean }`                  | 发送器底部工具 |
| `footer`                 | `{ mobile: boolean }`                                                   | 底部区域       |
| `workspace`              | `{ record: ChatRecord \| undefined, mobile: boolean }`                  | 工作区         |
| `send-button`            | `{ state: object, execute: Function, mobile: boolean }`                 | 发送按钮       |
| `think-button`           | `{ state: object, execute: Function, mobile: boolean }`                 | 思考按钮       |
| `net-button`             | `{ state: object, execute: Function, mobile: boolean }`                 | 联网按钮       |
| `sender-textarea`        | `{ state: object, execute: Function, mobile: boolean, height: number }` | 输入框         |

### 类型定义

#### ChatMessage

```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  loading?: boolean;
  isThinking?: boolean;
  thoughtCollapse?: boolean;
  thoughtProcess?: string;
  timestamp: number;
  isTerminated?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
  isError?: boolean;
  error?: string;
  isBookmarked?: boolean;
  nextTips?: string[];
  toolCalls?: any[];
  hideFooterTools?: boolean;
  extraData?: Record<string, any>;
}
```

#### ChatRecord

```typescript
interface ChatRecord {
  id: string;
  name: string;
  content: string;
  type: string;
  createTime: string;
  userId: string;
  updateTime?: string;
  extraData?: Record<string, any>;
}
```

#### BubbleEvent

```typescript
// 内置事件；通过 ext-events 可扩展自定义 string 事件
type BubbleEvent = 'like' | 'dislike' | 'bookmark' | 'terminate' | 'reload' | 'copy';
```

#### ChatRecordAction

```typescript
interface ChatRecordAction {
  id: string;
  name: string;
  icon?: string | Component;
  divided?: boolean;
  disabled?: boolean;
  action: (record: ChatRecord) => void;
}
```

## ❓ 常见问题

### Q: 如何自定义主题色？

A: 通过 `primary-color` 属性和 CSS 变量可以自定义主题色：

```vue
<ChatContainer primary-color="#ff6b6b" />
```

```css
:root {
  --kl-chat-primary-color: #ff6b6b;
}
```

### Q: 如何集成 AI 服务？

A: 在 `send` 事件中调用你的 AI 服务接口：

```typescript
const handleSend = async (text: string) => {
  // 添加用户消息
  messages.value.push({
    id: generateId(),
    role: 'user',
    content: text,
    timestamp: Date.now()
  });

  try {
    // 调用 AI 服务
    const response = await yourAIService.chat(text);

    // 添加 AI 响应
    messages.value.push({
      id: generateId(),
      role: 'assistant',
      content: response.content,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('AI 服务错误:', error);
  }
};
```

### Q: 如何实现流式响应？

A: 使用内置的 SSEClient 或其他流式处理方案：

```typescript
import { SSEClient } from '@kernelift/ai-chat';

const handleStreamResponse = async (question: string) => {
  const client = new SSEClient('token', 'https://api.example.com');

  const currentMessage = {
    id: generateId(),
    role: 'assistant',
    content: '',
    timestamp: Date.now(),
    loading: true
  };

  messages.value.push(currentMessage);

  await client.connect('/chat/stream', {
    onContent: (content) => {
      currentMessage.content += content;
    },
    onComplete: () => {
      currentMessage.loading = false;
    },
    onError: (error) => {
      currentMessage.loading = false;
      currentMessage.isError = true;
    }
  });
};
```

### Q: 如何在移动端使用？

A: 组件内置了响应式支持，移动端会自动适配。可以通过 `mobile` 插槽参数进行移动端特定定制：

```vue
<template #sender-footer-tools="{ mobile }">
  <div v-if="mobile" class="mobile-tools">
    <!-- 移动端特定工具 -->
  </div>
</template>
```

### Q: 如何持久化聊天记录？

A: 使用 `useStorage` 或其他持久化方案：

```typescript
import { useStorage } from '@vueuse/core';

const records = useStorage<ChatRecord[]>('chat-records', []);
const messages = useStorage<ChatMessage[]>('current-messages', []);
```

### Q: 如何处理长对话？

A: 建议实现分页加载或记录分割：

```typescript
const handleLoadMore = async () => {
  const olderMessages = await loadOlderMessages(currentPage);
  messages.value.unshift(...olderMessages);
};
```

### Q: 如何添加自定义工具按钮？

A: 通过 `sender-tools` 插槽添加：

```vue
<template #sender-tools>
  <el-tooltip content="自定义工具">
    <el-button @click="handleCustomTool">
      <IconRender icon="custom-icon" />
    </el-button>
  </el-tooltip>
</template>
```

## 📄 许可证

GPL-3.0 License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**版本**: 2.0.0  
**更新时间**: 2024-12-25
