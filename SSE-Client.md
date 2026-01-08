# SSEClient 使用参考手册

## 目录

- [概述](#概述)
- [安装与导入](#安装与导入)
- [API 参考](#api-参考)
- [事件处理](#事件处理)
- [使用示例](#使用示例)
- [错误处理](#错误处理)
- [注意事项](#注意事项)

## 概述

`SSEClient` 是一个用于处理服务器发送事件（Server-Sent Events）的客户端类，支持流式数据传输，特别适用于实时内容更新、工具调用状态监控等场景。

### 主要特性

- 🔄 **流式数据处理** - 实时处理分块传输的内容
- 🛠️ **工具调用监控** - 跟踪工具调用的增量更新
- ⚡ **事件驱动** - 基于事件的处理机制
- 🚫 **错误处理** - 完善的错误处理机制
- 🔗 **连接管理** - 支持主动断开连接

## 安装与导入

```typescript
import { SSEClient } from './sse-client';
```

## API 参考

### 构造函数

```typescript
new SSEClient(token: string, baseUrl: string, method?: 'POST' | 'GET', trimData?: boolean)
```

**参数：**

- `token` (string) - 认证令牌，用于 Authorization 头
- `baseUrl` (string) - 基础 URL
- `method` ('POST' | 'GET', 可选) - 请求方法，默认为 `'GET'`
- `trimData` (boolean, 可选) - 是否自动 `trim` 每行 `data:` 内容，默认 `true`；当为 `false` 时保留前后空白字符（适用于需要精确保留格式的场景）

**示例：**

```typescript
// GET 请求（默认）
const client = new SSEClient('your-auth-token', 'https://api.example.com');

// POST 请求，关闭自动 trim
const client = new SSEClient('your-auth-token', 'https://api.example.com', 'POST', false);
```

### 方法

#### connect()

建立 SSE 连接并开始处理事件流。

```typescript
async connect(
  url: string,
  handlers: {
    onMessage: (message: string) => void;
    onContent: (content: string) => void;
    onToolCallDelta: (data: any) => void;
    onComplete: (finalData: { content: string; toolCalls: any[] }) => void;
    onError: (error: Error) => void;
    onDone?: () => void;
    onEvent?: (eventType: string, data: any) => void;
  },
  options?: RequestInit
): Promise<void>
```

**参数：**

- `url` (string) - 要连接的相对 URL
- `handlers` (object) - 事件处理器对象
  - `onMessage` - 消息事件回调
  - `onContent` - 内容更新回调
  - `onToolCallDelta` - 工具调用增量更新回调
  - `onComplete` - 完成事件回调
  - `onError` - 错误处理回调
  - `onDone` (可选) - 连接完成回调
  - `onEvent` (可选) - 通用事件回调，收到任何 `event:` 类型时都会触发（包含自定义事件），参数为 `(eventType, data)`
- `options` (RequestInit, 可选) - 额外的 fetch 选项，包括 `body` 用于 POST 请求的请求体数据

#### disconnect()

立即断开 SSE 连接。

```typescript
disconnect(): void
```

## 事件处理

### 事件类型

| 事件类型        | 数据类型                                | 描述                 |
| --------------- | --------------------------------------- | -------------------- |
| `message`       | `string`                                | 通用消息事件         |
| `content`       | `string`                                | 内容增量更新         |
| `toolCallDelta` | `any`                                   | 工具调用状态增量更新 |
| `complete`      | `{ content: string; toolCalls: any[] }` | 流式传输完成         |
| `error`         | `Error`                                 | 错误事件             |

### 处理器配置

```typescript
const handlers = {
  // 处理消息事件
  onMessage: (message: string) => {
    console.log('收到消息:', message);
  },

  // 处理内容流
  onContent: (content: string) => {
    console.log('收到内容:', content);
  },

  // 处理工具调用增量
  onToolCallDelta: (data: any) => {
    console.log('工具调用更新:', data);
  },

  // 处理完成事件
  onComplete: (finalData: { content: string; toolCalls: any[] }) => {
    console.log('传输完成:', finalData);
  },

  // 处理错误
  onError: (error: Error) => {
    console.error('发生错误:', error);
  },

  // 连接完全结束
  onDone: () => {
    console.log('连接结束');
  },

  // 捕获所有事件类型（包括自定义 event: xxx）
  onEvent: (eventType: string, data: any) => {
    console.log('通用事件:', eventType, data);
  }
};
```

## 使用示例

### 基础使用

```typescript
// 创建客户端实例（GET 请求）
const client = new SSEClient('your-token', 'https://api.example.com');

// 或者创建 POST 请求客户端
const postClient = new SSEClient('your-token', 'https://api.example.com', 'POST');

// 定义事件处理器
const handlers = {
  onMessage: (message) => {
    console.log('消息:', message);
  },

  onContent: (content) => {
    document.getElementById('output').innerHTML += content;
  },

  onToolCallDelta: (data) => {
    console.log('工具调用状态:', data);
  },

  onComplete: (finalData) => {
    console.log('完整响应:', finalData);
    // 可以在这里进行后续处理
  },

  onError: (error) => {
    console.error('连接错误:', error);
    alert('连接发生错误: ' + error.message);
  },

  onDone: () => {
    console.log('连接正常结束');
  }
};

// GET 请求建立连接
client.connect('/api/stream', handlers, {
  headers: {
    'X-Custom-Header': 'value'
  }
});

// POST 请求建立连接（带请求体）
postClient.connect('/api/stream', handlers, {
  headers: {
    'X-Custom-Header': 'value'
  },
  body: JSON.stringify({
    prompt: 'Hello, world!',
    options: { temperature: 0.7 }
  })
});

// 在需要时断开连接
// client.disconnect();
```

### React 组件中使用

```typescript
import React, { useState, useEffect, useRef } from 'react';
import { SSEClient } from './sse-client';

const StreamComponent: React.FC = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const clientRef = useRef<SSEClient | null>(null);

  const startStream = async () => {
    setIsLoading(true);
    setContent('');

    // 使用 POST 方法创建客户端
    const client = new SSEClient('your-token', 'https://api.example.com', 'POST');
    clientRef.current = client;

    const handlers = {
      onMessage: (message: string) => {
        console.log('消息:', message);
      },

      onContent: (newContent: string) => {
        setContent(prev => prev + newContent);
      },

      onToolCallDelta: (data: any) => {
        // 处理工具调用
        console.log('工具调用:', data);
      },

      onComplete: (finalData: { content: string; toolCalls: any[] }) => {
        console.log('完成:', finalData);
        setIsLoading(false);
      },

      onError: (error: Error) => {
        console.error('错误:', error);
        setIsLoading(false);
      },

      onDone: () => {
        setIsLoading(false);
      }
    };

    try {
      await client.connect('/api/chat', handlers, {
        body: JSON.stringify({
          message: 'Hello',
          conversationId: '123'
        })
      });
    } catch (error) {
      console.error('连接失败:', error);
      setIsLoading(false);
    }
  };

  const stopStream = () => {
    if (clientRef.current) {
      clientRef.current.disconnect();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // 组件卸载时断开连接
      if (clientRef.current) {
        clientRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <button onClick={startStream} disabled={isLoading}>
        {isLoading ? '连接中...' : '开始流式传输'}
      </button>
      <button onClick={stopStream} disabled={!isLoading}>
        停止
      </button>
      <div className="content-area">
        {content}
      </div>
    </div>
  );
};
```

### Vue 3 组件中使用

```vue
<template>
  <div>
    <button @click="startStream" :disabled="isLoading">
      {{ isLoading ? '连接中...' : '开始流式传输' }}
    </button>
    <button @click="stopStream" :disabled="!isLoading">停止</button>
    <div class="content-area">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { SSEClient } from './sse-client';

const content = ref('');
const isLoading = ref(false);
let client: SSEClient | null = null;

const startStream = async () => {
  isLoading.value = true;
  content.value = '';

  client = new SSEClient('your-token', 'https://api.example.com');

  const handlers = {
    onContent: (newContent: string) => {
      content.value += newContent;
    },

    onToolCallDelta: (data: any) => {
      console.log('工具调用:', data);
    },

    onComplete: (finalData: { content: string; toolCalls: any[] }) => {
      console.log('完成:', finalData);
      isLoading.value = false;
    },

    onError: (error: Error) => {
      console.error('错误:', error);
      isLoading.value = false;
    },

    onDone: () => {
      isLoading.value = false;
    }
  };

  try {
    await client.connect('/api/chat', handlers);
  } catch (error) {
    console.error('连接失败:', error);
    isLoading.value = false;
  }
};

const stopStream = () => {
  if (client) {
    client.disconnect();
    isLoading.value = false;
  }
};

onUnmounted(() => {
  if (client) {
    client.disconnect();
  }
});
</script>
```

## 错误处理

### 常见错误类型

1. **HTTP 错误** - 服务器返回非 200 状态码
2. **网络错误** - 连接失败或中断
3. **数据解析错误** - 接收到的数据格式不正确
4. **中止错误** - 主动调用 `disconnect()` 方法

### 错误处理示例

```typescript
const handlers = {
  onError: (error: Error) => {
    if (error.message.includes('HTTP')) {
      // 处理 HTTP 错误
      console.error('服务器错误:', error.message);
    } else if (error.message.includes('No response body')) {
      // 处理无响应体错误
      console.error('无响应数据');
    } else {
      // 其他错误
      console.error('未知错误:', error);
    }

    // 更新 UI 状态
    setIsConnected(false);
    setErrorMessage(error.message);
  }
};
```

## 注意事项

### 1. 连接管理

- 确保在组件卸载或不再需要时调用 `disconnect()` 方法
- 避免同时建立多个相同连接

### 2. 内存管理

- 长时间运行的连接可能积累大量数据，定期清理缓冲区
- 监控内存使用情况

### 3. 错误恢复

- 实现重连机制处理网络中断
- 设置合理的超时时间

### 4. 性能优化

- 对于高频更新，考虑使用防抖或节流
- 避免在 `onContent` 回调中执行重操作

### 5. 安全考虑

- 妥善保管认证令牌
- 验证服务器响应数据
- 使用 HTTPS 连接

### 完整重连机制示例

```typescript
class ResilientSSEClient {
  private client: SSEClient | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 3;
  private reconnectDelay = 1000;

  constructor(
    private token: string,
    private baseUrl: string
  ) {}

  async connectWithRetry(url: string, handlers: any, options?: RequestInit): Promise<void> {
    try {
      this.client = new SSEClient(this.token, this.baseUrl);

      const enhancedHandlers = {
        ...handlers,
        onError: (error: Error) => {
          console.error('SSE错误:', error);

          if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

            setTimeout(() => {
              this.connectWithRetry(url, handlers, options);
            }, this.reconnectDelay * this.reconnectAttempts);
          } else {
            handlers.onError?.(error);
          }
        },

        onDone: () => {
          this.reconnectAttempts = 0; // 重置重连计数
          handlers.onDone?.();
        }
      };

      await this.client.connect(url, enhancedHandlers, options);
    } catch (error) {
      console.error('连接失败:', error);
    }
  }

  disconnect() {
    this.client?.disconnect();
    this.reconnectAttempts = 0;
  }
}
```

---

**版本**: 1.0.0
**最后更新**: 2024年12月
