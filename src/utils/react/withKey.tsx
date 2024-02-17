import React from "react";

function withKey(key?: string) {
    return <E extends object, T extends React.ComponentType<E>>(component: T) =>
        (props: E, index: number) =>
            React.createElement(
                component,
                { ...props, key: key ? props[key as keyof E] : index },
                []
            )
}

const withIdKey = withKey('id');
const withIndexKey = withKey();

function Feed(props: { blocks: IBlockProps[] }) {
    return (
        <div>
            {props.blocks.map(withIdKey(Block))}
        </div>
    )
}

interface IBlockProps {
    title: string;
    id: string;
}

function Block(props: IBlockProps) {
    return (
        <div>{props.title}</div>
    )
}

function Input0({ onChange, value }: { onChange: (value: string) => void, value: string }) {
    return
    <input value={value} onChange={getValue(onChange)} />
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
    return
    <input type='checkbox' checked={props.value} onChange={getChecked(props.onChange)} />
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
        <E extends ((t: T[K]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

function NotStandardLink(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}

function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
    }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.stopPropagation();
        fn(e);
    }
}

interface InputProps {
    onChange: (value: string) => void;
    value: string;
}

function Input({ value, onChange }: InputProps) {
    return
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
}