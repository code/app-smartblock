/// <reference types="react" />
import { Node, Schema } from 'prosemirror-model';
import { Plugin, EditorState, Transaction } from 'prosemirror-state';
import { EditorView, NodeView } from 'prosemirror-view';
export interface ExtensionSchema {
    content?: string;
    group?: string;
    parseDOM?: ({
        tag?: string;
        style?: string;
    })[];
    text?: string;
    toDOM?(node: Node): (string | {
        [key: string]: any;
    } | number)[];
}
export declare type Dispatch = (tr: Transaction<any>) => void;
declare type CustomLayoutProps = {
    dispatch: Dispatch;
    state: EditorState;
};
export declare type ExtensionProps = ({
    schema?: ExtensionSchema;
    className?: string;
    tagName?: string;
    icon?: JSX.Element | string;
    customName?: string;
} & {
    [key: string]: any;
}) | null;
export declare abstract class Extension {
    constructor(props: ExtensionProps);
    name: string;
    customName?: string;
    schema?: ExtensionSchema;
    customSchema?: ExtensionSchema;
    schemaDependencies?: {
        [key: string]: ExtensionSchema;
    };
    customProps?: {
        [key: string]: any;
    };
    tagName?: string;
    className?: string;
    customMenu?({ state: EditorState, dispatch: Dispatch }: {
        state: any;
        dispatch: any;
    }): JSX.Element;
    customInlineMenu?({ state: EditorState, dispatch: Dispatch }: {
        state: any;
        dispatch: any;
    }): JSX.Element;
    customLayout?(props: CustomLayoutProps, dom: HTMLElement): JSX.Element;
    customButton?({ state: EditorState, dispatch: Dispatch }: {
        state: any;
        dispatch: any;
    }): JSX.Element;
    customIcon?: JSX.Element | string;
    icon?: JSX.Element | string;
    plugins?: Plugin<any, any>[];
    showMenu: boolean;
    hideMenuOnFocus?: boolean;
    hideBlockMenuOnFocus?: boolean;
    hideInlineMenuOnFocus?: boolean;
    group?: string;
    view?(node: Node, view: EditorView, getPos: () => number): NodeView;
    active?(state: EditorState): boolean;
    enable?(state: EditorState): boolean;
    onClick?(state: EditorState, dispatch: Dispatch, view?: EditorView): void;
    keys?(schema: Schema): {
        [key: string]: any;
    };
    btnColor?: 'black' | 'white';
}
export {};
