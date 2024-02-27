import React, { ChangeEvent } from "react";
import { Formik, Form, Field } from 'formik';
import styles from "./commentForm.css";

type Props = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentForm({ value, onChange }: Props) {

    function handleOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event);
    }

    function validateValue(value: string) {
        if (value.length <= 3) return 'input more than 3 characters';
        return '';
    }

    return (
        <Formik
            initialValues={{
                comment: value
            }}

            onSubmit={(values) => {
                alert(`Comment sent ${values.comment}`);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form className={styles.form} >
                    <Field as='textarea' className={styles.input} name="comment"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                            setFieldValue('comment', e.target.value);
                            handleOnChange(e);
                        }}
                        validate={validateValue}
                        aria-invalid={errors.comment ? 'true' : undefined} />
                    {errors.comment && touched.comment && <div>{errors.comment}</div>}

                    <button className={styles.button} disabled={!!errors.comment} type="submit">Send</button>
                </Form>
            )}
        </Formik>
    )
}

