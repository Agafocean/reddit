import { assoc } from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
/*
const LIST = [
    { value: 'some' },
    { value: 'other some' },
    { value: 'some' }
].map(generateId);*/
//map ((item: {value:string}) => ({...item, id: generateRandomString()}));

