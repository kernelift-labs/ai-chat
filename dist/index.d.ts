import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RemovableRef } from '@vueuse/core';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: ChatMessage) => any;
} & {
"bubble-event": (eventName: string, data: ChatMessage) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
"onBubble-event"?: ((eventName: string, data: ChatMessage) => any) | undefined;
"onUpdate:modelValue"?: ((value: ChatMessage) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_2: DefineComponent<__VLS_PublicProps_2, {
isMobile: Ref<boolean, boolean>;
collapse: RemovableRef<boolean>;
asideWidth: RemovableRef<number>;
scrollToBottom: (smooth?: boolean) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string) => any;
"update:messages": (value: ChatMessage[]) => any;
"update:loading": (value: boolean) => any;
"update:record-id": (value: string | undefined) => any;
} & {
send: (value: string, isEnableThink?: boolean | undefined, isEnableNet?: boolean | undefined, needCreateRecord?: boolean | undefined) => any;
cancel: () => any;
clear: () => any;
"change-record": (value?: ChatRecord | undefined) => any;
"change-collapse": (collapse: boolean) => any;
"change-theme": (themeMode: "light" | "dark") => any;
"change-aside-width": (width: number) => any;
"click-logo": () => any;
"bubble-event": (eventName: string, data: ChatMessage) => any;
"close-workspace": () => any;
"scroll-bottom": () => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_2> & Readonly<{
onSend?: ((value: string, isEnableThink?: boolean | undefined, isEnableNet?: boolean | undefined, needCreateRecord?: boolean | undefined) => any) | undefined;
onCancel?: (() => any) | undefined;
onClear?: (() => any) | undefined;
"onChange-record"?: ((value?: ChatRecord | undefined) => any) | undefined;
"onChange-collapse"?: ((collapse: boolean) => any) | undefined;
"onChange-theme"?: ((themeMode: "light" | "dark") => any) | undefined;
"onChange-aside-width"?: ((width: number) => any) | undefined;
"onClick-logo"?: (() => any) | undefined;
"onBubble-event"?: ((eventName: string, data: ChatMessage) => any) | undefined;
"onClose-workspace"?: (() => any) | undefined;
"onScroll-bottom"?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
"onUpdate:messages"?: ((value: ChatMessage[]) => any) | undefined;
"onUpdate:loading"?: ((value: boolean) => any) | undefined;
"onUpdate:record-id"?: ((value: string | undefined) => any) | undefined;
}>, {
i18n: {
[key: string]: any;
};
themeMode: "light" | "dark";
hasThemeMode: boolean;
hasThinking: boolean;
hasNetSearch: boolean;
inputHeight: number;
uuid: string;
records: ChatRecord[];
recordActions: ChatRecordAction[];
hasHeader: boolean;
headerHeight: number;
hasSenderTools: boolean;
alwaysShowSenderTools: boolean;
showWorkspace: boolean;
showSender: boolean;
defaultCollapse: boolean;
defaultAsideWidth: number;
primaryColor: string;
autoScroll: boolean;
autoScrollPauseTime: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
messagesListRef: HTMLDivElement;
}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<__VLS_PublicProps_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string) => any;
"update:enableThink": (value: boolean) => any;
"update:enableNet": (value: boolean) => any;
} & {
send: (text: string) => any;
cancel: () => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_3> & Readonly<{
onSend?: ((text: string) => any) | undefined;
onCancel?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
"onUpdate:enableThink"?: ((value: boolean) => any) | undefined;
"onUpdate:enableNet"?: ((value: boolean) => any) | undefined;
}>, {
loading: boolean;
i18n: {
[key: string]: any;
};
isMobile: boolean;
hasThinking: boolean;
hasNetSearch: boolean;
inputHeight: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<__VLS_PublicProps_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:collapse": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_4> & Readonly<{
"onUpdate:collapse"?: ((value: boolean) => any) | undefined;
}>, {
markdownClass: string;
loading: boolean;
i18n: {
[key: string]: any;
};
plugins: any[];
options: any;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_Props = {
    isLast?: boolean;
    markdownClass?: string;
    onCopy?: (code: string) => void;
    i18n?: {
        [key: string]: any;
    };
    isMobile?: boolean;
    extEvents?: ActionItem[];
    plugins?: any[];
    options?: any;
    afterRender?: (md: any) => void;
    themeMode?: 'light' | 'dark';
};

declare type __VLS_Props_2 = ChatProps;

declare type __VLS_Props_3 = {
    record?: ChatRecord | null;
};

declare type __VLS_Props_4 = {
    loading?: boolean;
    hasThinking?: boolean;
    hasNetSearch?: boolean;
    inputHeight?: number;
    i18n?: {
        [key: string]: any;
    };
    isMobile?: boolean;
};

declare type __VLS_Props_5 = {
    data: string;
    markdownClass?: string;
    loading?: boolean;
    onCopy?: (code: string) => void;
    i18n?: {
        [key: string]: any;
    };
    plugins?: any[];
    options?: any;
    afterRender?: (md: any) => void;
    themeMode?: 'light' | 'dark';
};

declare type __VLS_PublicProps = {
    modelValue: ChatMessage;
} & __VLS_Props;

declare type __VLS_PublicProps_2 = {
    'messages': ChatMessage[];
    modelValue?: string;
    'loading'?: boolean;
    'record-id'?: string | undefined;
} & __VLS_Props_2;

declare type __VLS_PublicProps_3 = {
    modelValue?: string;
    'enableThink'?: boolean;
    'enableNet'?: boolean;
} & __VLS_Props_4;

declare type __VLS_PublicProps_4 = {
    'collapse'?: boolean;
} & __VLS_Props_5;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        'thinking-header'?(_: {}): any;
        'content-header'?(_: {}): any;
        content?(_: {}): any;
        'content-footer'?(_: {}): any;
        footer?(_: {}): any;
        'bubble-event'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        'left-aside'?(_: {
            mobile: boolean;
        }): any;
        aside?(_: {
            record: {
                id: string;
                name: string;
                content: string;
                type: string;
                createTime: string;
                userId: string;
                updateTime?: string | undefined;
                extraData?: {
                    [key: string]: any;
                } | undefined;
            } | null | undefined;
            mobile: boolean;
        }): any;
        logo?(_: {
            mobile: boolean;
        }): any;
        'record-footer'?(_: {
            record: {
                id: string;
                name: string;
                content: string;
                type: string;
                createTime: string;
                userId: string;
                updateTime?: string | undefined;
                extraData?: {
                    [key: string]: any;
                } | undefined;
            } | null | undefined;
            mobile: boolean;
        }): any;
        'new-chat-button'?(_: {
            mobile: boolean;
            execute: () => void;
        }): any;
        'record-dropdown'?(_: {
            mobile: boolean;
        }): any;
        header?(_: {
            record: {
                id: string;
                name: string;
                content: string;
                type: string;
                createTime: string;
                userId: string;
                updateTime?: string | undefined;
                extraData?: {
                    [key: string]: any;
                } | undefined;
            } | null | undefined;
            mobile: boolean;
        }): any;
        'header-logo'?(_: {
            mobile: boolean;
        }): any;
        'bubble-header'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-footer'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-event'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-content-header'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-content-footer'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-thinking-header'?(_: {
            data: ChatMessage;
            mobile: boolean;
        }): any;
        'bubble-loading-content'?(_: {
            mobile: boolean;
        }): any;
        empty?(_: {
            mobile: boolean;
        }): any;
        'sender-tools'?(_: {
            mobile: boolean;
        }): any;
        'sender-footer-tools'?(_: {
            value: string;
            loading: boolean;
            enableNet: boolean;
            enableThink: boolean;
            mobile: boolean;
        }): any;
        'send-button'?(_: {
            execute: () => void;
            state: {
                loading: boolean;
                inputText: string;
            };
            mobile: boolean;
        }): any;
        'think-button'?(_: {
            state: {
                hasThinking: boolean;
                enableThink: boolean;
            };
            execute: () => void;
            mobile: boolean;
        }): any;
        'net-button'?(_: {
            state: {
                hasNetSearch: boolean;
                enableNet: boolean;
            };
            execute: () => void;
            mobile: boolean;
        }): any;
        'sender-textarea'?(_: {
            execute: () => void;
            state: {
                loading: boolean;
                inputText: string;
            };
            height: number;
            mobile: boolean;
        }): any;
        footer?(_: {
            mobile: boolean;
        }): any;
        workspace?(_: {
            record: {
                id: string;
                name: string;
                content: string;
                type: string;
                createTime: string;
                userId: string;
                updateTime?: string | undefined;
                extraData?: {
                    [key: string]: any;
                } | undefined;
            } | null | undefined;
            mobile: boolean;
        }): any;
    };
    refs: {
        messagesListRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        textarea?(_: {
            height: number;
            execute: typeof handleClickButton;
            state: {
                loading: boolean;
                inputText: string;
            };
        }): any;
        'think-button'?(_: {
            state: {
                hasThinking: boolean;
                enableThink: boolean;
            };
            execute: typeof changeThinkState;
        }): any;
        'net-button'?(_: {
            state: {
                hasNetSearch: boolean;
                enableNet: boolean;
            };
            execute: typeof changeNetState;
        }): any;
        tools?(_: {
            value: string;
            loading: boolean;
        }): any;
        'send-button'?(_: {
            execute: typeof handleClickButton;
            state: {
                loading: boolean;
                inputText: string;
            };
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface ActionItem {
    key: BubbleEvent | string;
    icon: string;
    iconActive?: string;
    label?: string;
    active?: boolean;
    activeColor?: string;
    iconStyle?: Record<string, string | undefined>;
}

export declare type BubbleEvent = 'like' | 'dislike' | 'bookmark' | 'terminate' | 'reload' | 'copy';

declare function changeNetState(): void;

declare function changeThinkState(): void;

export declare const ChatBubble: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const ChatContainer: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

/**
 * @description 聊天事件
 */
export declare interface ChatEvents {
    (e: 'send', value: string, isEnableThink?: boolean, isEnableNet?: boolean, needCreateRecord?: boolean): void;
    (e: 'cancel'): void;
    (e: 'clear'): void;
    (e: 'change-record', value?: ChatRecord): void;
    (e: 'change-collapse', collapse: boolean): void;
    (e: 'change-theme', themeMode: 'light' | 'dark'): void;
    (e: 'change-aside-width', width: number): void;
    (e: 'click-logo'): void;
    (e: 'bubble-event', eventName: string, data: ChatMessage): void;
    (e: 'close-workspace'): void;
    (e: 'scroll-bottom'): void;
}

export declare const ChatHeader: DefineComponent<__VLS_Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_3> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

/**
 * @description 聊天消息
 */
export declare interface ChatMessage {
    /**
     * 消息id
     */
    id: string;
    /**
     * 角色
     */
    role: 'user' | 'assistant' | 'system';
    /**
     * 内容
     */
    content: string;
    /**
     * 是否正在加载
     */
    loading?: boolean;
    /**
     * 是否正在思考
     */
    isThinking?: boolean;
    /**
     * 思考是否折叠
     */
    thoughtCollapse?: boolean;
    /**
     * 思考过程
     */
    thoughtProcess?: string;
    /**
     * 创建时间
     */
    timestamp: number;
    /**
     * 是否终止
     */
    isTerminated?: boolean;
    /**
     * 是否点赞
     */
    isLiked?: boolean;
    /**
     * 是否踩
     */
    isDisliked?: boolean;
    /**
     * 是否错误
     */
    isError?: boolean;
    /**
     * 错误信息
     */
    error?: string;
    /**
     * 是否收藏
     */
    isBookmarked?: boolean;
    /**
     * 下一步提示
     */
    nextTips?: string[];
    /**
     * 工具调用
     */
    toolCalls?: any[];
    /**
     * 是否隐藏底部工具
     */
    hideFooterTools?: boolean;
    /**
     * 额外的数据
     */
    extraData?: {
        [key: string]: any;
    };
}

/**
 * @description 聊天属性
 */
export declare interface ChatProps {
    uuid?: string;
    records?: ChatRecord[];
    recordActions?: ChatRecordAction[];
    hasHeader?: boolean;
    headerHeight?: number;
    hasThemeMode?: boolean;
    inputHeight?: number;
    hasThinking?: boolean;
    hasNetSearch?: boolean;
    hasSenderTools?: boolean;
    alwaysShowSenderTools?: boolean;
    showWorkspace?: boolean;
    showSender?: boolean;
    isGenerateLoading?: boolean;
    defaultRecordId?: string;
    defaultCollapse?: boolean;
    defaultAsideWidth?: number;
    markdownClassName?: string;
    primaryColor?: string;
    themeMode?: 'light' | 'dark';
    enableNet?: boolean;
    enableThink?: boolean;
    onCopy?: (code: string) => void;
    i18n?: {
        [key: string]: any;
    };
    autoScroll?: boolean;
    autoScrollPauseTime?: number;
    markdownPlugins?: any[];
    markdownOptions?: any;
    onMarkdownAfterRender?: (md: any) => void;
}

/**
 * @description ai聊天历史记录
 */
export declare interface ChatRecord {
    id: string;
    name: string;
    content: string;
    type: string;
    createTime: string;
    userId: string;
    updateTime?: string;
    extraData?: {
        [key: string]: any;
    };
}

export declare interface ChatRecordAction {
    id: string;
    name: string;
    icon?: string | Component;
    divided?: boolean;
    disabled?: boolean;
    action: (record: ChatRecord) => void;
}

export declare const ChatSender: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

/**
 * @description 聊天插槽
 */
export declare interface ChatSlots {
    'left-aside': (props: {
        mobile: boolean;
    }) => VNode[];
    aside: (props: {
        record: ChatRecord | undefined;
        mobile: boolean;
    }) => VNode[];
    logo: (props: {
        mobile: boolean;
    }) => VNode[];
    'new-chat-button': (props: {
        mobile: boolean;
    }) => VNode[];
    'record-dropdown': (props: {
        mobile: boolean;
    }) => VNode[];
    header: (props: {
        record: ChatRecord | undefined;
        mobile: boolean;
    }) => VNode[];
    'header-logo': (props: {
        mobile: boolean;
    }) => VNode[];
    'bubble-header': (props: {
        data: ChatMessage;
        mobile: boolean;
    }) => VNode[];
    'bubble-footer': (props: {
        data: ChatMessage;
        mobile: boolean;
    }) => VNode[];
    'bubble-event': (props: {
        data: ChatMessage;
        mobile: boolean;
    }) => VNode[];
    'bubble-content-footer': (props: {
        data: ChatMessage;
        mobile: boolean;
    }) => VNode[];
    'bubble-thinking-header': (props: {
        data: ChatMessage;
        mobile: boolean;
    }) => VNode[];
    'bubble-loading-content': (props: {
        mobile: boolean;
    }) => VNode[];
    empty: (props: {
        mobile: boolean;
    }) => VNode[];
    'sender-tools': (props: {
        mobile: boolean;
    }) => VNode[];
    'sender-footer-tools': (props: {
        value: string;
        loading: boolean;
        mobile: boolean;
    }) => VNode[];
    footer: (props: {
        mobile: boolean;
    }) => VNode[];
    workspace: (props: {
        record: ChatRecord | undefined;
        mobile: boolean;
    }) => VNode[];
}

declare function handleClickButton(): void;

export declare const i18nMessages: {
    'zh-CN': {
        chat: {
            button: {
                think: string;
                net: string;
                copyCode: string;
                expand: string;
                collapse: string;
                copy: string;
                reload: string;
                like: string;
                dislike: string;
            };
            newChat: string;
            placeholder: string;
            loading: string;
            thinking: string;
            thinked: string;
            userMessages: string;
            noUserMessages: string;
            note: string;
            empty: string;
            welcome: string;
        };
    };
    'en-US': {
        chat: {
            button: {
                think: string;
                net: string;
                copyCode: string;
                expand: string;
                collapse: string;
                copy: string;
                reload: string;
                like: string;
                dislike: string;
            };
            newChat: string;
            placeholder: string;
            loading: string;
            thinking: string;
            thinked: string;
            userMessages: string;
            noUserMessages: string;
            note: string;
            empty: string;
            welcome: string;
        };
    };
};

export declare class SSEClient {
    private controller;
    private buffer;
    private token;
    private baseUrl;
    private method;
    private trimData;
    constructor(token: string, baseUrl: string, method?: 'POST' | 'GET', trimData?: boolean);
    connect(url: string, handlers: {
        onMessage: (message: string) => void;
        onContent: (content: string) => void;
        onToolCallDelta: (data: any) => void;
        onComplete: (finalData: {
            content: string;
            toolCalls: any[];
        }) => void;
        onError: (error: Error) => void;
        onDone?: () => void;
        onEvent?: (eventType: string, data: any) => void;
    }, options?: RequestInit): Promise<void>;
    private processBuffer;
    private handleRemainingBuffer;
    private parseEvent;
    private dispatchEvent;
    disconnect(): void;
}

export declare const ThinkingProcess: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

export { }
