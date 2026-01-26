# @gci/ai-chat

[![npm version](https://badge.fury.io/js/%40gci%2Fai-chat.svg)](https://badge.fury.io/js/%40gci%2Fai-chat)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

- 在线预览地址： https://gci-labs.github.io/playground/#/ai-chat
- demo工程： https://github.com/gci-labs/playground

基于 Vue 3 + TypeScript 的现代化 AI 聊天框组件，提供企业级的对话界面解决方案。无UI库绑定。

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
pnpm add @gci/ai-chat

# 使用 npm
npm install @gci/ai-chat

# 使用 yarn
yarn add @gci/ai-chat
```

### 依赖要求

- Vue 3.3+
- TypeScript 5.0+
- @gci/markdown (workspace:\*)

## 🚀 快速开始

### 基础用法

```vue
<template>
  <AiChat
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
import { AiChat } from '@gci/ai-chat'
import '@gci/ai-chat/style.css'
import type { ChatMessage, ChatRecord, BubbleEvent } from '@gci/ai-chat'

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
AiChat (主容器)
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

### AiChat - 主容器

主容器组件，负责整体布局和状态管理。

```vue
<template>
  <AiChat
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
  </AiChat>
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
  <AiChat
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
  <AiChat
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
  <AiChat
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
import { SSEClient } from '@gci/ai-chat';

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
.gci-chat-container {
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
  .gci-chat-bubble__assistant {
    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
    border: 1px solid #e1e8ff;
    border-radius: 12px;

    &:hover {
      box-shadow: 0 4px 12px rgba(97, 92, 237, 0.1);
    }
  }

  .gci-chat-bubble__user {
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
  .gci-chat-sender__textarea {
    border-radius: 8px;
    border: 2px solid var(--kl-border-color);

    &:focus {
      border-color: var(--kl-chat-primary-color);
      box-shadow: 0 0 0 3px rgba(97, 92, 237, 0.1);
    }
  }

  .gci-chat-sender__send-button {
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

  .gci-chat-bubble {
    margin: 8px 12px;

    &__actions {
      opacity: 1; // 移动端始终显示操作按钮
    }
  }
}
```

## 💻 完整示例

基于硅基流动api和 primevue ui库的demo实现如下

### vue展示层

```vue
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';
import { AiChat } from '@gci/ai-chat';
import { useChat } from './use-chat';
import '@gci/ai-chat/style.css';
import { CHAT_BASE_URL, CHAT_DEFAULT_MODEL } from './constants';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import { useStorage } from '@vueuse/core';

defineOptions({
  name: 'AiChat'
});

const CHAT_API_KEY = useStorage('CHAT_API_KEY', ''); // 从本地存储获取 API Key

const {
  isNewRecord,
  chatModel,
  availableModels,
  showWorkspace,
  userQuestion,
  chatRecords,
  chatMessages,
  generateLoading,
  senderLoading,
  isLoadingModels,
  handleSend,
  handleCancel,
  chatRecordActions,
  handleChangeRecord,
  handleCreateRecord,
  changeShowWorkspace,
  changeModel,
  showEditNameDialog,
  editRecord,
  updateRecordName,

  bubbleEventActions,
  handleBubbleEvent,

  themeMode,
  changeThemeMode,

  showMessageDetailDialog,
  messageDetail,
  showEditMessageDialog,
  editMessage,
  handleEditMessageContent,
  activeRecordId,
  showEditPromptDialog,
  editPromptRecord,
  promptContent,
  updateRecordPrompt,
  handleShowEditPrompt
} = useChat({
  apiKey: CHAT_API_KEY.value,
  baseURL: CHAT_BASE_URL,
  uuid: 'openai',
  model: CHAT_DEFAULT_MODEL
});

const tempEditContent = ref('');
const isRecording = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let recognition: any = null;

const showApiKeyDialog = ref(false);
const tempApiKey = ref('');

function toggleSpeech() {
  if (isRecording.value) {
    if (recognition) {
      recognition.stop();
    }
    isRecording.value = false;
    return;
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('当前浏览器不支持语音输入');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'zh-CN';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = () => {
    isRecording.value = true;
  };

  recognition.onend = () => {
    isRecording.value = false;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onresult = (event: any) => {
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        userQuestion.value += event.results[i][0].transcript;
      }
    }
  };

  recognition.start();
}

watch(showEditMessageDialog, (val) => {
  if (val && editMessage.value) {
    tempEditContent.value = editMessage.value.content;
  }
});

/**
 * 处理键盘事件
 * Enter: 发送消息
 * Shift + Enter: 换行
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleKeydown(event: KeyboardEvent, execute: any) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    execute();
  }
  // Shift + Enter 默认行为（换行）会自动生效
}

function checkApiKey() {
  if (!CHAT_API_KEY.value || CHAT_API_KEY.value.trim() === '') {
    showApiKeyDialog.value = true;
  }
}

function saveApiKey() {
  if (tempApiKey.value && tempApiKey.value.trim() !== '') {
    CHAT_API_KEY.value = tempApiKey.value.trim();
    showApiKeyDialog.value = false;
    tempApiKey.value = '';

    nextTick(() => {
      location.reload();
    });
  }
}

onMounted(() => {
  checkApiKey();
});
</script>

<template>
  <div class="w-full h-full relative">
    <AiChat
      v-model="userQuestion"
      v-model:loading="senderLoading"
      v-model:messages="chatMessages"
      v-model:record-id="activeRecordId"
      :records="chatRecords"
      :is-generate-loading="generateLoading"
      primary-color="#46139b"
      :show-workspace="showWorkspace"
      :markdown-class-name="`prose ${themeMode === 'dark' ? 'prose-invert' : ''}`"
      :has-sender-tools="true"
      uuid="openai"
      has-theme-mode
      :theme-mode="themeMode"
      :input-height="180"
      :default-input-height="80"
      :record-actions="chatRecordActions"
      :bubble-ext-events="bubbleEventActions"
      @send="handleSend"
      @cancel="handleCancel"
      @change-record="handleChangeRecord"
      @clear="handleCreateRecord"
      @close-workspace="showWorkspace = false"
      @bubble-event="handleBubbleEvent"
      @change-theme="changeThemeMode"
    >
      <template #logo>
        <div class="mt-2 mb-3">
          <img src="./logo.avif" alt="logo" style="width: 7.5rem; height: 1.1rem" />
        </div>
      </template>

      <template #header-logo>
        <div class="mx-2">
          <img src="./logo.avif" alt="header-logo" style="width: 8.8rem; height: 1.3rem" />
        </div>
      </template>

      <template #send-button="{ state, execute }">
        <Button
          size="small"
          :disabled="!state.inputText && !state.loading"
          rounded
          :icon="state.loading ? 'pi pi-stop' : 'pi pi-send'"
          :aria-label="state.loading ? 'Cancel' : 'Send'"
          @click="execute"
        />
      </template>

      <template #think-button="{ state, execute }">
        <Button
          size="small"
          :severity="state.enableThink ? undefined : 'secondary'"
          variant="outlined"
          icon="pi pi-lightbulb"
          rounded
          label="深度思考"
          :style="
            state.enableThink
              ? {
                  background: 'rgba(var(--kl-chat-primary-rgb), 0.1)',
                  height: '2rem'
                }
              : {
                  height: '2rem'
                }
          "
          @click="execute"
        ></Button>
      </template>

      <template #sender-textarea="{ height, execute }">
        <Textarea
          v-model="userQuestion"
          class="w-full"
          :style="{
            height: height + 'px',
            resize: 'none',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            '--p-textarea-padding-x': '0.3rem'
          }"
          @keydown="handleKeydown($event, execute)"
        ></Textarea>
      </template>

      <template #empty>
        <div class="flex items-center justify-center flex-col">
          <img src="./logo.avif" alt="header-logo" style="width: 10rem" />
          <div class="p-4 text-center text-surface-600">
            本工程基于硅基流动API进行开发，提供智能对话服务，支持多种模型选择与个性化配置。
          </div>
        </div>
      </template>

      <template #new-chat-button="{ execute, disabled }">
        <Button
          label="新建对话"
          icon="pi pi-plus"
          class="w-full"
          rounded
          :disabled="disabled"
          style="height: 2.5rem"
          @click="execute"
        ></Button>
      </template>

      <template #sender-tools>
        <div class="h-9 w-full flex items-center gap-2 px-3">
          <div>
            <!-- 模型选择 -->
            <Select
              v-model="chatModel"
              :options="availableModels"
              option-label="label"
              option-value="value"
              size="small"
              filter
              placeholder="选择模型"
              style="border-radius: 0.9rem"
              :loading="isLoadingModels"
              :disabled="senderLoading"
              overlay-class="text-sm small-dropdown"
              @change="changeModel($event.value)"
            />
          </div>

          <div class="ml-auto">
            <!-- 提示词管理 -->
            <Button
              v-if="activeRecordId"
              icon="pi pi-book"
              class="mr-3"
              size="small"
              rounded
              :variant="showEditPromptDialog ? undefined : 'outlined'"
              @click="() => handleShowEditPrompt()"
            ></Button>
            <Button
              v-if="!isNewRecord"
              icon="pi pi-sitemap"
              size="small"
              rounded
              :variant="showWorkspace ? undefined : 'outlined'"
              @click="changeShowWorkspace"
            />
          </div>
        </div>
      </template>

      <template #bubble-event="{ data }">
        <div class="flex gap-3 ml-auto items-center" v-if="data.role === 'assistant'">
          <div class="chat-bubble__event-item" @click="handleBubbleEvent('delete', data)">
            <i class="pi pi-trash" style="font-size: 0.95rem"></i>
          </div>
          <div class="chat-bubble__event-item" @click="handleBubbleEvent('edit', data)">
            <i class="pi pi-pencil" style="font-size: 0.95rem"></i>
          </div>
        </div>
      </template>

      <template #workspace="{ record: activeRecord }">
        <div class="p-4 h-full overflow-auto">
          <div v-if="activeRecord" class="space-y-4">
            <div class="border-b border-gray-300 pb-4">
              <h3 class="text-lg font-semibold mb-2">会话信息</h3>
            </div>

            <div class="space-y-3">
              <div>
                <label class="text-sm font-medium text-surface-600">会话名称</label>
                <p class="mt-1 text-surface-900">{{ activeRecord.name }}</p>
              </div>

              <div>
                <label class="text-sm font-medium text-surface-600">创建时间</label>
                <p class="mt-1 text-surface-900">{{ activeRecord.createTime }}</p>
              </div>

              <div>
                <label class="text-sm font-medium text-surface-600">会话ID</label>
                <p class="mt-1 text-surface-900 text-xs font-mono">{{ activeRecord.id }}</p>
              </div>

              <div>
                <label class="text-sm font-medium text-surface-600">消息数量</label>
                <p class="mt-1 text-surface-900">{{ chatMessages.length }} 条消息</p>
              </div>

              <div v-if="activeRecord.extraData">
                <label class="text-sm font-medium text-surface-600">首条消息</label>
                <p class="mt-1 text-surface-900 text-sm">{{ activeRecord.content }}</p>
              </div>
            </div>

            <div class="border-t border-gray-300 pt-4 mt-4">
              <h4 class="text-sm font-semibold mb-2">会话统计</h4>
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-surface-50 p-3 rounded border border-gray-300">
                  <div class="text-xs text-surface-600">用户消息</div>
                  <div class="text-lg font-semibold">
                    {{ chatMessages.filter((m) => m.role === 'user').length }}
                  </div>
                </div>
                <div class="bg-surface-50 p-3 rounded border border-gray-300">
                  <div class="text-xs text-surface-600">AI回复</div>
                  <div class="text-lg font-semibold">
                    {{ chatMessages.filter((m) => m.role === 'assistant').length }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex items-center justify-center h-full text-surface-500">
            <div class="text-center">
              <i class="pi pi-inbox text-4xl mb-3"></i>
              <p>选择一个会话查看详情</p>
            </div>
          </div>
        </div>
      </template>

      <template #sender-footer-tools>
        <Button
          size="small"
          rounded
          :icon="'pi pi-microphone'"
          :severity="isRecording ? 'danger' : 'secondary'"
          @click="toggleSpeech"
        />
      </template>
    </AiChat>

    <Dialog
      v-if="editRecord"
      v-model:visible="showEditNameDialog"
      header="编辑会话名称"
      :modal="true"
      :closable="true"
      :dismissable-mask="true"
      :style="{ width: '400px' }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-semibold">新名称</label>
          <Textarea
            v-model="editRecord.name"
            rows="2"
            class="w-full"
            placeholder="输入新的会话名称"
          />
        </div>
        <div class="flex justify-end gap-2 mt-4">
          <Button
            label="取消"
            icon="pi pi-times"
            severity="secondary"
            @click="showEditNameDialog = false"
          />
          <Button
            label="保存"
            icon="pi pi-save"
            @click="
              updateRecordName(editRecord, editRecord.name);
              showEditNameDialog = false;
            "
          />
        </div>
      </div>
    </Dialog>

    <!-- 消息详情弹窗 -->
    <Dialog
      v-if="messageDetail"
      v-model:visible="showMessageDetailDialog"
      header="消息详情"
      :modal="true"
      :closable="true"
      :dismissable-mask="true"
      :style="{ width: '500px' }"
    >
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-sm font-medium text-surface-600">消息ID</label>
          <div
            class="mt-1 p-2 bg-surface-50 rounded text-xs font-mono break-all border border-surface-200"
          >
            {{ messageDetail.id }}
          </div>
        </div>
        <div>
          <label class="text-sm font-medium text-surface-600">角色</label>
          <div class="mt-1">
            <span
              :class="{
                'bg-blue-100 text-blue-700': messageDetail.role === 'user',
                'bg-purple-100 text-purple-700': messageDetail.role === 'assistant'
              }"
              class="px-2 py-1 rounded text-xs font-medium"
            >
              {{ messageDetail.role }}
            </span>
          </div>
        </div>
        <div>
          <label class="text-sm font-medium text-surface-600">发送时间</label>
          <div class="mt-1 text-sm text-surface-900">
            {{ new Date(messageDetail.timestamp).toLocaleString() }}
          </div>
        </div>
        <div>
          <label class="text-sm font-medium text-surface-600">内容统计</label>
          <div class="mt-1 text-sm text-surface-900">{{ messageDetail.content.length }} 字符</div>
        </div>
        <div v-if="messageDetail.extraData && Object.keys(messageDetail.extraData).length > 0">
          <label class="text-sm font-medium text-surface-600">元数据</label>
          <pre
            class="mt-1 text-xs bg-surface-50 p-2 rounded overflow-auto border border-surface-200 max-h-40"
            >{{ JSON.stringify(messageDetail.extraData, null, 2) }}</pre
          >
        </div>
      </div>
    </Dialog>

    <!-- 编辑消息弹窗 -->
    <Dialog
      v-if="editMessage"
      v-model:visible="showEditMessageDialog"
      header="编辑消息内容"
      :modal="true"
      :closable="true"
      :dismissable-mask="true"
      :style="{ width: '600px' }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-semibold text-sm">消息内容</label>
          <Textarea
            v-model="tempEditContent"
            rows="10"
            class="w-full font-mono text-sm leading-relaxed"
            style="resize: vertical; min-height: 200px"
          />
        </div>
        <div class="flex justify-end gap-2">
          <Button
            label="取消"
            icon="pi pi-times"
            severity="secondary"
            @click="showEditMessageDialog = false"
          />
          <Button
            label="保存"
            icon="pi pi-save"
            @click="
              handleEditMessageContent(tempEditContent);
              showEditMessageDialog = false;
            "
          />
        </div>
      </div>
    </Dialog>

    <!-- 编辑提示词弹窗 -->
    <Dialog
      v-model:visible="showEditPromptDialog"
      modal
      header="设置提示词"
      :style="{ width: '50rem' }"
    >
      <div class="flex flex-col gap-4">
        <label for="prompt" class="font-semibold text-lg">系统提示词</label>
        <Textarea
          id="prompt"
          v-model="promptContent"
          rows="10"
          placeholder="请输入系统提示词，这将作为 System Message 发送给模型..."
          class="w-full"
        />
      </div>
      <template #footer>
        <Button label="取消" text severity="secondary" @click="showEditPromptDialog = false" />
        <Button
          label="保存"
          @click="
            () => {
              if (editPromptRecord) {
                updateRecordPrompt(editPromptRecord, promptContent);
              }
              showEditPromptDialog = false;
            }
          "
        />
      </template>
    </Dialog>

    <!-- API Key 输入弹窗 -->
    <Dialog
      v-model:visible="showApiKeyDialog"
      header="API Key 配置"
      :modal="true"
      :closable="false"
      :dismissable-mask="false"
      :style="{ width: '500px' }"
    >
      <div class="flex flex-col gap-4">
        <div class="text-sm text-surface-600 mb-2">
          <i class="pi pi-exclamation-triangle text-orange-500 mr-2"></i>
          请输入您的 API Key 以使用 AI 对话功能。
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-semibold">API Key</label>
          <Textarea
            v-model="tempApiKey"
            rows="3"
            class="w-full"
            placeholder="请输入您的 API Key"
            @keydown="handleKeydown($event, saveApiKey)"
          />
        </div>
        <div class="flex justify-end gap-2 mt-2">
          <Button
            label="保存"
            icon="pi pi-check"
            :disabled="!tempApiKey || tempApiKey.trim() === ''"
            @click="saveApiKey"
          />
        </div>
      </div>
    </Dialog>

    <Toast />
    <ConfirmDialog />
  </div>
</template>

<style lang="scss" scoped>
.chat-bubble__event-item {
  padding: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  // width: 1.625rem;
  // height: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    color: #6b7280; // gray-500
    background-color: rgba(var(--kl-chat-primary-rgb), 0.13);
  }

  // 只有支持悬停的设备才应用悬停效果
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #6b7280; // gray-500
      background-color: rgba(var(--kl-chat-primary-rgb), 0.13);
    }
  }
}
</style>

<style>
/* Override PrimeVue primary color for this page */
:root {
  --p-primary-50: #f5f3ff;
  --p-primary-100: #ede9fe;
  --p-primary-200: #ddd6fe;
  --p-primary-300: #c4b5fd;
  --p-primary-400: #a78bfa;
  --p-primary-500: #7624fe;
  --p-primary-600: #6b21d8;
  --p-primary-700: #5b21b6;
  --p-primary-800: #4c1d95;
  --p-primary-900: #3b1a7a;
  --p-primary-950: #2e1065;
}

.small-dropdown {
  border-radius: 1rem !important;
  overflow: hidden;
}

.small-dropdown .p-inputtext {
  padding-block: 0.3rem; /* 调整内边距以适应较小的字体 */
}
</style>
```

### hook逻辑调用

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BubbleEventAction, ChatMessage, ChatRecord, ChatRecordAction } from '@gci/ai-chat';
import { formatDate, useAsyncState, useStorage } from '@vueuse/core';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { OpenAI } from 'openai/client';
import type { ChatCompletionCreateParamsStreaming } from 'openai/resources/chat/completions/completions.mjs';
import { computed, onUnmounted, ref, shallowRef } from 'vue';
import { getModelList } from './api';

interface ChatError {
  message: string;
  code?: string;
  timestamp: number;
}

interface ReasoningDelta {
  reasoning_content?: string;
}

export const useChat = (options: {
  apiKey: string;
  baseURL?: string;
  model?: string;
  uuid?: string;
}) => {
  const { apiKey, baseURL, model, uuid } = options;
  // 当前显示的消息列表
  const chatMessages = ref<ChatMessage[]>([]);
  // 所有消息记录
  const chatRecords = useStorage<ChatRecord[]>(`${uuid}-records`, []);
  // 显示工作区
  const showWorkspace = ref(false);
  // 发送中
  const senderLoading = ref(false);
  // 生成中
  const generateLoading = ref(false);
  // 新记录Id
  const newRecordId = ref<string | null>(null);
  // 当前激活的记录
  const activeRecordId = ref<string | null>(null);
  // 错误状态
  const lastError = ref<ChatError | null>(null);

  const toast = useToast();
  const confirm = useConfirm();

  const isNewRecord = computed(() => {
    return !!newRecordId.value && activeRecordId.value === null;
  });

  // 流式传输
  const streamMode = ref<boolean>(true);
  // 输入问题
  const userQuestion = ref('');
  // 聊天模型
  const chatModel = ref(model || 'deepseek-ai/DeepSeek-V3.1-Terminus');
  // 主题模式
  const themeMode = ref<'light' | 'dark'>('light');

  /**
   * @description 切换主题模式
   * @param mode
   */
  function changeThemeMode() {
    themeMode.value = themeMode.value === 'light' ? 'dark' : 'light';
  }

  /**
   * @description 切换模型
   * @param newModel
   */
  function changeModel(newModel: string) {
    chatModel.value = newModel;
  }

  /**
   * @description 切换工作区显示状态
   */
  function changeShowWorkspace() {
    showWorkspace.value = !showWorkspace.value;
  }

  /**
   * @description 切换流式传输模式
   * @param isStream
   */
  function changeStreamMode(isStream: boolean) {
    streamMode.value = isStream;
  }

  const client = new OpenAI({
    apiKey: apiKey,
    baseURL: baseURL,
    // 危险，此处仅作为示范使用
    dangerouslyAllowBrowser: true
  });

  /**
   * @description 创建错误消息
   */
  function createErrorMessage(error: unknown): ChatError {
    let message = '请求失败，请稍后重试';
    let code: string | undefined;

    if (error instanceof Error) {
      message = error.message;
      if ('code' in error) {
        code = String(error.code);
      }
    } else if (typeof error === 'string') {
      message = error;
    }

    // Handle specific error types
    if (message.includes('abort')) {
      message = '请求已取消';
      code = 'ABORTED';
    } else if (message.includes('network')) {
      message = '网络连接失败，请检查网络设置';
      code = 'NETWORK_ERROR';
    } else if (message.includes('timeout')) {
      message = '请求超时，请稍后重试';
      code = 'TIMEOUT';
    } else if (message.includes('401')) {
      message = 'API密钥无效，请检查配置';
      code = 'UNAUTHORIZED';
    } else if (message.includes('429')) {
      message = '请求过于频繁，请稍后再试';
      code = 'RATE_LIMIT';
    }

    return {
      message,
      code,
      timestamp: Date.now()
    };
  }

  /**
   * @description 添加错误消息到聊天记录
   */
  function addErrorMessage(error: ChatError) {
    const lastMessage = chatMessages.value[chatMessages.value.length - 1];
    if (lastMessage && lastMessage.role === 'assistant') {
      lastMessage.error = error.message;
      lastMessage.loading = false;
    } else {
      chatMessages.value.push({
        id: Date.now().toString(),
        role: 'assistant',
        content: `<span style="color: red;">${error.message}</span>`,
        timestamp: Date.now(),
        error: error.message,
        isThinking: false
      });
    }
    lastError.value = error;
  }

  // 创建 AbortController
  const controller = shallowRef(new AbortController());

  function getMessagesWithPrompt() {
    const messages = chatMessages.value.map((item) => ({
      role: item.role,
      content: item.content
    }));

    if (activeRecordId.value) {
      const record = chatRecords.value.find((r) => r.id === activeRecordId.value);
      if (record && record.extraData?.prompt) {
        messages.unshift({
          role: 'system',
          content: record.extraData.prompt
        });
      }
    }
    return messages;
  }

  /**
   * @description 发送消息
   * @param value
   * @param enableThink
   * @param enableNet
   * @param needCreateRecord
   */
  async function handleSend(
    value: string,
    enableThink?: boolean,
    enableNet?: boolean,
    needCreateRecord?: boolean
  ) {
    // 0. 清除之前的错误状态
    lastError.value = null;

    // 1. 清空输入框
    userQuestion.value = '';
    // 2. 添加用户输入记录
    chatMessages.value.push({
      id: Date.now().toString(),
      role: 'user',
      content: value,
      timestamp: Date.now(),
      isThinking: enableThink,
      extraData: {
        question: value
      }
    });

    // 3. 如果需要创建记录，立即创建
    if (needCreateRecord) {
      const recordId = newRecordId.value || 'record-' + Date.now().toString();
      newRecordId.value = null;
      chatRecords.value.push({
        id: recordId,
        name: value.slice(0, 30) + (value.length > 30 ? '...' : ''),
        content: value,
        type: 'chat',
        createTime: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        userId: uuid || 'default',
        extraData: {
          messages: chatMessages.value
        }
      });
      activeRecordId.value = recordId;
    }

    // 4. 添加机器人输入记录
    senderLoading.value = true;
    generateLoading.value = true;
    if (streamMode.value) {
      try {
        const stream = await client.chat.completions.create(
          {
            model: chatModel.value,
            messages: getMessagesWithPrompt() as any,
            stream: true,
            enable_thinking: !!enableThink
          } as ChatCompletionCreateParamsStreaming,
          {
            signal: controller.value.signal
          }
        );
        // 5. 载入响应数据，并关闭生成加载
        generateLoading.value = false;

        const targetId = Date.now().toString();
        chatMessages.value.push({
          id: targetId,
          role: 'assistant',
          content: '',
          timestamp: Date.now(),
          isThinking: false,
          extraData: {
            model: chatModel.value,
            userQuestion: value
          }
        });
        const targetMessage = chatMessages.value.find((item) => item.id === targetId)!;
        for await (const chunk of stream) {
          targetMessage.loading = true;
          const delta = chunk.choices[0]?.delta as ReasoningDelta | undefined;

          if (
            enableThink &&
            delta?.reasoning_content &&
            targetMessage.content.length === 0 &&
            !chunk.choices[0]?.delta.content
          ) {
            if (!targetMessage.thoughtProcess) {
              targetMessage.thoughtProcess = '';
            }
            targetMessage.isThinking = true;
            targetMessage.thoughtProcess += delta.reasoning_content || '';
          } else {
            targetMessage.isThinking = false;
          }
          targetMessage.content += chunk.choices[0]?.delta.content || '';
          targetMessage.timestamp = Date.now();
        }
        targetMessage.loading = false;
      } catch (error: unknown) {
        const chatError = createErrorMessage(error);
        const targetMessage = chatMessages.value[chatMessages.value.length - 1];

        if (targetMessage && targetMessage.role === 'assistant') {
          targetMessage.loading = false;
          targetMessage.timestamp = Date.now();
          targetMessage.error = chatError.message;
        } else {
          addErrorMessage(chatError);
        }

        console.error('[AI Chat] Stream request failed:', error);
      } finally {
        senderLoading.value = false;
      }
    } else {
      try {
        const response = await client.chat.completions.create(
          {
            model: chatModel.value,
            messages: getMessagesWithPrompt() as any,
            stream: false
          },
          {
            signal: controller.value.signal
          }
        );

        chatMessages.value.push({
          id: Date.now().toString(),
          role: 'assistant',
          content: response.choices[0]?.message.content || '请求失败，请稍后重试',
          timestamp: Date.now(),
          isThinking: false,
          extraData: {
            model: chatModel.value,
            userQuestion: value
          }
        });
      } catch (error: unknown) {
        const chatError = createErrorMessage(error);
        addErrorMessage(chatError);
        console.error('[AI Chat] Non-stream request failed:', error);
      } finally {
        // 4. 载入响应数据，并关闭生成加载
        senderLoading.value = false;
        generateLoading.value = false;
      }
    }
  }

  /**
   * @description 取消当前请求
   */
  function handleCancel() {
    // 中止当前请求
    controller.value.abort();

    // 创建新的控制器供下次使用
    controller.value = new AbortController();

    // 如果正在生成，标记最后一条消息为已取消
    if (generateLoading.value || senderLoading.value) {
      const lastMessage = chatMessages.value[chatMessages.value.length - 1];
      if (lastMessage && lastMessage.role === 'assistant') {
        lastMessage.loading = false;
        // 如果消息内容为空，添加取消提示
        if (!lastMessage.content && !lastMessage.error) {
          lastMessage.error = '生成已取消';
        }
        lastMessage.timestamp = Date.now();
        lastMessage.content = '生成已取消，请重试。';
      }
    }

    // 重置加载状态
    generateLoading.value = false;
    senderLoading.value = false;

    console.log('[AI Chat] Request cancelled by user');
  }

  onUnmounted(() => {
    controller.value.abort();
  });

  /**
   * @description 重试最后一条失败的消息
   */
  function handleRetry() {
    if (chatMessages.value.length < 2) return;

    const lastAssistantMsg = chatMessages.value[chatMessages.value.length - 1];
    const lastUserMsg = chatMessages.value[chatMessages.value.length - 2];

    if (lastAssistantMsg?.error && lastUserMsg?.role === 'user') {
      // 移除错误的助手消息
      chatMessages.value.pop();
      // 重新发送用户消息
      const userContent = lastUserMsg.content;
      const isThinking = lastUserMsg.isThinking;
      handleSend(userContent, isThinking, false, false);
    }
  }

  /**
   * @description 处理记录变更
   * @param record
   */
  function handleChangeRecord(record?: ChatRecord) {
    if (record) {
      activeRecordId.value = record?.id || null;
      newRecordId.value = null;
    }
    chatMessages.value = record?.extraData?.messages || [];
  }

  function handleCreateRecord() {
    chatMessages.value = [];
    newRecordId.value = 'record-' + Date.now().toString();
    activeRecordId.value = null;
  }
  handleCreateRecord();

  const { state: availableModels, isLoading: isLoadingModels } = useAsyncState(
    async () => {
      const response = await getModelList();
      return response.data.data.map((item) => ({
        label: item.id,
        value: item.id
      }));
    },
    [],
    {
      immediate: true
    }
  );

  const showEditNameDialog = ref(false);
  const editRecord = ref<ChatRecord | null>(null);

  const showEditPromptDialog = ref(false);
  const promptContent = ref('');
  const editPromptRecord = ref<ChatRecord | null>(null);

  function handleShowEditPrompt(record?: ChatRecord) {
    if (record) {
      editPromptRecord.value = record;
      promptContent.value = record.extraData?.prompt || '';
      showEditPromptDialog.value = true;
    } else {
      const activeRecord = chatRecords.value.find((item) => item.id === activeRecordId.value);
      if (activeRecord) {
        editPromptRecord.value = activeRecord;
        promptContent.value = activeRecord.extraData?.prompt || '';
        showEditPromptDialog.value = true;
      }
    }
  }

  const chatRecordActions: ChatRecordAction[] = [
    {
      key: 'prompt',
      label: '提示词',
      icon: 'pi pi-book text-sm',
      handler: (record: ChatRecord) => {
        handleShowEditPrompt(record);
      }
    },
    {
      key: 'edit',
      label: '编辑名称',
      icon: 'pi pi-pencil text-sm',
      handler: (record: ChatRecord) => {
        editRecord.value = record;
        showEditNameDialog.value = true;
      }
    },
    {
      key: 'delete',
      label: '删除',
      icon: 'pi pi-trash text-sm',
      handler: (record: ChatRecord) => {
        confirm.require({
          message: '确定要删除这条对话记录吗？',
          header: '确认删除',
          icon: 'pi pi-exclamation-triangle',
          rejectProps: {
            label: '取消',
            severity: 'secondary',
            text: true
          },
          acceptProps: {
            label: '删除',
            severity: 'danger'
          },
          accept: () => {
            const index = chatRecords.value.findIndex((item) => item.id === record.id);
            if (index !== -1) {
              chatRecords.value.splice(index, 1);
              toast.add({
                severity: 'success',
                summary: '提示',
                detail: '删除成功',
                life: 3000
              });
            }
            // 如果删除的是当前激活的记录，清空消息列表
            if (activeRecordId.value === record.id) {
              chatMessages.value = [];
              activeRecordId.value = null;
            }
          }
        });
      }
    }
  ];

  /**
   * @description 更新记录名称
   * @param record
   * @param newName
   */
  function updateRecordName(record: ChatRecord, newName: string) {
    const targetRecord = chatRecords.value.find((item) => item.id === record.id);
    if (targetRecord) {
      targetRecord.content = newName;
    }
  }

  /**
   * @description 更新记录提示词
   * @param record
   * @param prompt
   */
  function updateRecordPrompt(record: ChatRecord, prompt: string) {
    const targetRecord = chatRecords.value.find((item) => item.id === record.id);
    if (targetRecord) {
      if (!targetRecord.extraData) {
        targetRecord.extraData = {};
      }
      targetRecord.extraData.prompt = prompt;
    }
  }

  const bubbleEventActions: BubbleEventAction[] = [
    {
      key: 'info',
      icon: 'pi pi-info-circle',
      label: '信息'
    }
  ];

  const showMessageDetailDialog = ref(false);
  const messageDetail = ref<ChatMessage | null>(null);

  const showEditMessageDialog = ref(false);
  const editMessage = ref<ChatMessage | null>(null);
  function handleEditMessageContent(newContent: string) {
    if (editMessage.value) {
      editMessage.value.content = newContent;
    }
  }

  function handleBubbleEvent(event: string, data: ChatMessage) {
    switch (event) {
      case 'like':
        data.isLiked = !data.isLiked;
        break;
      case 'dislike':
        data.isDisliked = !data.isDisliked;
        break;
      case 'delete':
        confirm.require({
          message: '确定要删除这条消息吗？',
          header: '确认删除',
          icon: 'pi pi-exclamation-triangle',
          rejectProps: {
            label: '取消',
            severity: 'secondary',
            text: true
          },
          acceptProps: {
            label: '删除',
            severity: 'danger'
          },
          accept: () => {
            const index = chatMessages.value.findIndex((item) => item.id === data.id);
            if (index !== -1) {
              chatMessages.value.splice(index, 1);
              toast.add({
                severity: 'success',
                summary: '提示',
                detail: '删除成功',
                life: 3000
              });
            }
          }
        });
        break;
      case 'terminate':
        handleCancel();
        break;
      case 'reload':
        userQuestion.value = data.extraData?.question || '';
        break;
      case 'copy':
        navigator.clipboard.writeText(data.content || '').then(() => {
          toast.add({
            severity: 'success',
            summary: '提示',
            detail: '复制成功',
            life: 3000
          });
        });
        break;
      case 'edit':
        editMessage.value = data;
        showEditMessageDialog.value = true;
        break;
      case 'info':
        messageDetail.value = data;
        showMessageDetailDialog.value = true;
        break;
      default:
        break;
    }
  }

  return {
    bubbleEventActions,
    chatRecordActions,
    isLoadingModels,
    chatMessages,
    chatRecords,
    showWorkspace,
    senderLoading,
    generateLoading,
    activeRecordId,
    streamMode,
    userQuestion,
    lastError,
    themeMode,
    handleCreateRecord,
    isNewRecord,
    chatModel,
    availableModels,
    changeThemeMode,
    changeModel,
    handleSend,
    handleCancel,
    handleRetry,
    handleChangeRecord,
    changeShowWorkspace,
    changeStreamMode,

    showEditNameDialog,
    editRecord,
    updateRecordName,

    showEditPromptDialog,
    editPromptRecord,
    promptContent,
    updateRecordPrompt,
    handleShowEditPrompt,

    handleBubbleEvent,
    showMessageDetailDialog,
    messageDetail,
    showEditMessageDialog,
    editMessage,
    handleEditMessageContent
  };
};
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
.gci-chat-container {
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
  .gci-chat-bubble__assistant {
    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
    border: 1px solid #e1e8ff;
  }

  .gci-chat-bubble__user {
    &-content {
      background: linear-gradient(135deg, var(--kl-chat-primary-color) 0%, #8a86f1 100%);
      color: white;
    }
  }
}
```

### Props 属性

| 属性名                        | 类型                     | 默认值      | 说明                                               |
| ----------------------------- | ------------------------ | ----------- | -------------------------------------------------- |
| `records`                     | `ChatRecord[]`           | `[]`        | 聊天记录列表                                       |
| `recordActions`               | `ChatRecordAction[]`     | `[]`        | 记录操作按钮配置                                   |
| `bubbleExtEvents`             | `BubbleEventAction[]`    | `[]`        | 气泡扩展事件配置                                   |
| `hasHeader`                   | `boolean`                | `true`      | 是否显示头部                                       |
| `headerHeight`                | `number`                 | `38`        | 头部高度 (px)                                      |
| `hasThemeMode`                | `boolean`                | `false`     | 是否支持主题切换                                   |
| `hasThinking`                 | `boolean`                | `true`      | 是否支持深度思考                                   |
| `hasNetSearch`                | `boolean`                | `false`     | 是否支持联网搜索                                   |
| `hasSenderTools`              | `boolean`                | `false`     | 是否显示发送工具区                                 |
| `alwaysShowSenderTools`       | `boolean`                | `false`     | 是否始终显示发送工具区（即使 showSender 为 false） |
| `showWorkspace`               | `boolean`                | `true`      | 是否显示工作区                                     |
| `showSender`                  | `boolean`                | `true`      | 是否显示发送框                                     |
| `isGenerateLoading`           | `boolean`                | `undefined` | 是否正在生成                                       |
| `defaultRecordId`             | `string`                 | `undefined` | 默认记录ID                                         |
| `defaultCollapse`             | `boolean`                | `false`     | 侧边栏默认折叠                                     |
| `defaultAsideWidth`           | `number`                 | `250`       | 侧边栏默认宽度                                     |
| `markdownClassName`           | `string`                 | `undefined` | Markdown 样式类名                                  |
| `primaryColor`                | `string`                 | `'#615ced'` | 主题色                                             |
| `themeMode`                   | `'light' \| 'dark'`      | `'light'`   | 主题模式                                           |
| `enableNet`                   | `boolean`                | `undefined` | 联网搜索启用状态                                   |
| `enableThink`                 | `boolean`                | `undefined` | 深度思考启用状态                                   |
| `disabledCreateRecord`        | `boolean`                | `false`     | 是否禁用新建聊天记录                               |
| `inputHeight`                 | `number`                 | `140`       | 输入框最大高度 (px)                                |
| `defaultInputHeight`          | `number`                 | `62`        | 输入框初始默认高度 (px)                            |
| `onCopy`                      | `(code: string) => void` | `undefined` | 复制代码回调                                       |
| `i18n`                        | `Record<string, any>`    | `zhCN`      | 国际化配置                                         |
| `autoScroll`                  | `boolean`                | `true`      | 是否自动滚动到底部                                 |
| `autoScrollPauseTime`         | `number`                 | `3000`      | 用户滚动时自动滚动暂停时间 (ms)                    |
| `uuid`                        | `string`                 | `'default'` | 实例唯一标识，用于存储状态                         |
| `markdownPlugins`             | `any[]`                  | `[]`        | Markdown 插件列表                                  |
| `markdownOptions`             | `any`                    | `{}`        | Markdown 配置选项                                  |
| `markdownRender`              | `Component`              | `MdRender`  | 自定义 markdown 渲染组件                           |
| `onMarkdownAfterRender`       | `(md: any) => void`      | `undefined` | Markdown 渲染后回调                                |
| `disabledMarkdownIncremental` | `boolean`                | `false`     | 是否禁用Markdown增量渲染功能，默认开启             |

### v-model 双向绑定

| 属性名              | 类型                  | 说明         |
| ------------------- | --------------------- | ------------ |
| `v-model`           | `string`              | 输入框文本   |
| `v-model:messages`  | `ChatMessage[]`       | 消息列表     |
| `v-model:loading`   | `boolean`             | 发送加载状态 |
| `v-model:record-id` | `string \| undefined` | 当前记录ID   |

### Events 事件

| 事件名                   | 参数                                                                                     | 说明                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `send`                   | `(text: string, enableThink?: boolean, enableNet?: boolean, needCreateRecord?: boolean)` | 发送消息，needCreateRecord 表示是否需要创建新记录 |
| `cancel`                 | -                                                                                        | 取消生成                                          |
| `clear`                  | -                                                                                        | 清空聊天                                          |
| `change-record`          | `(record?: ChatRecord)`                                                                  | 切换记录                                          |
| `change-collapse`        | `(collapse: boolean)`                                                                    | 折叠状态改变                                      |
| `change-theme`           | `(theme: 'light' \| 'dark')`                                                             | 主题切换                                          |
| `change-aside-width`     | `(width: number)`                                                                        | 侧边栏宽度改变                                    |
| `change-workspace-width` | `(widthPercent: number)`                                                                 | 工作区宽度占比改变                                |
| `click-logo`             | -                                                                                        | 点击Logo                                          |
| `bubble-event`           | `(event: BubbleEvent \| string, message: ChatMessage)`                                   | 气泡交互事件（内置事件 + 自定义 ext-events）      |
| `close-workspace`        | -                                                                                        | 关闭工作区                                        |
| `scroll-bottom`          | -                                                                                        | 滚动到底部                                        |

### Slots 插槽

| 插槽名                   | 参数                                                                                                     | 说明           |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | -------------- |
| `left-aside`             | `{ mobile: boolean }`                                                                                    | 左侧边栏       |
| `aside`                  | `{ record: ChatRecord \| undefined, mobile: boolean }`                                                   | 主侧边栏       |
| `record-footer`          | `{ record: ChatRecord \| undefined, mobile: boolean }`                                                   | 记录底部区域   |
| `logo`                   | `{ mobile: boolean }`                                                                                    | Logo区域       |
| `new-chat-button`        | `{ mobile: boolean, execute: Function, disabled: boolean }`                                              | 新建聊天按钮   |
| `record-dropdown`        | `{ mobile: boolean }`                                                                                    | 记录下拉菜单   |
| `header`                 | `{ record: ChatRecord \| undefined, mobile: boolean }`                                                   | 头部区域       |
| `header-logo`            | `{ mobile: boolean }`                                                                                    | 头部Logo       |
| `collapsed-header-extra` | `{ mobile: boolean }`                                                                                    | 折叠头部额外区 |
| `header-extra`           | `{ mobile: boolean }`                                                                                    | 头部额外区     |
| `bubble-header`          | `{ data: ChatMessage, mobile: boolean }`                                                                 | 气泡头部       |
| `bubble-footer`          | `{ data: ChatMessage, mobile: boolean }`                                                                 | 气泡底部       |
| `bubble-event`           | `{ data: ChatMessage, mobile: boolean }`                                                                 | 气泡操作区     |
| `bubble-content-header`  | `{ data: ChatMessage, mobile: boolean }`                                                                 | 气泡内容头部   |
| `bubble-content-footer`  | `{ data: ChatMessage, mobile: boolean }`                                                                 | 气泡内容底部   |
| `bubble-thinking-header` | `{ data: ChatMessage, mobile: boolean }`                                                                 | 思考过程头部   |
| `bubble-loading-content` | `{ mobile: boolean }`                                                                                    | 加载内容       |
| `empty`                  | `{ mobile: boolean }`                                                                                    | 空状态         |
| `sender-tools`           | `{ mobile: boolean }`                                                                                    | 发送工具区     |
| `sender-footer-tools`    | `{ value: string, loading: boolean, enableNet: boolean, enableThink: boolean, mobile: boolean }`         | 发送器底部工具 |
| `footer`                 | `{ mobile: boolean }`                                                                                    | 底部区域       |
| `workspace`              | `{ record: ChatRecord \| undefined, mobile: boolean }`                                                   | 工作区         |
| `send-button`            | `{ state: { loading: boolean, inputText: string }, execute: Function, mobile: boolean }`                 | 发送按钮       |
| `think-button`           | `{ state: { hasThinking: boolean, enableThink: boolean }, execute: Function, mobile: boolean }`          | 思考按钮       |
| `net-button`             | `{ state: { hasNetSearch: boolean, enableNet: boolean }, execute: Function, mobile: boolean }`           | 联网按钮       |
| `sender-textarea`        | `{ state: { loading: boolean, inputText: string }, execute: Function, mobile: boolean, height: number }` | 输入框         |

### Exposed 方法

| 方法名           | 类型                        | 说明             |
| ---------------- | --------------------------- | ---------------- |
| `isMobile`       | `Ref<boolean>`              | 是否为移动端模式 |
| `collapse`       | `Ref<boolean>`              | 侧边栏折叠状态   |
| `asideWidth`     | `Ref<number>`               | 侧边栏宽度       |
| `scrollToBottom` | `(smooth: boolean) => void` | 滚动到底部       |

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
<AiChat primary-color="#ff6b6b" />
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
import { SSEClient } from '@gci/ai-chat';

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

欢迎提交 Issue！
