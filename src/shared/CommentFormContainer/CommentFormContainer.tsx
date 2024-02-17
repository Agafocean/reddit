import React, { ChangeEvent, FormEvent } from "react";
import { CommentForm } from "../CommentForm/CommentForm";
import { createState, useState } from "@hookstate/core";
import { PropsAuthor } from "../Post/Post";

export function CommentFormContainer({author}: PropsAuthor) {
    const Comment = createState(`Hello ${author} ,`);
    const value = useState(Comment); 

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        value.set(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }
    return (
        <CommentForm
            value={value.get()}
            onChange={handleChange}
        />
    )
}