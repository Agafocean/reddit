import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from "./replyForm.css";

interface IName {
    name?: string
}

export function ReplyForm(props: IName) {
    const [value, setValue] = useState(`Dear ${props.name}, `);
    const ref = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        if (ref.current) { ref.current.focus(); ref.current.setSelectionRange(value.length, value.length); }
    }, []);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        alert(`Форма отправлена ${value}`);
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange} ref={ref} />
            <button type="submit" className={styles.button}>Send</button>
        </form>
    )
}