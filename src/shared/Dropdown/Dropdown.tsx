import React, { MouseEventHandler, useState } from "react";
import styles from "./dropdown.css";
import { generateId } from "../../utils/react/GenerateRandomindex";
import { GenericList } from "../GenericList/GenericList";
import { MenuImg1 } from "../Icons/MenuImg1";
import { MenuImg3 } from "../Icons/MenuImg3";
import { MenuImg4 } from "../Icons/MenuImg4";
import { MenuImg5 } from "../Icons/MenuImg5";
import { MenuImg2 } from "../Icons/MenuImg2";
import { Props } from "../CardsList/Card";
import { PostCommentsBlock } from "../PostCommentsBlock/PostCommentsBlock";
import { useDispatch } from "react-redux";
import { setCommentId } from "../../store/reducer";

interface IDropdownProps {
    button: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    children?: React.ReactNode;
    param: Props;
}

const NOOP = () => { };

const menuImg1 = MenuImg1();
const menuImg2 = MenuImg2();
const menuImg3 = MenuImg3();
const menuImg4 = MenuImg4();
const menuImg5 = MenuImg5();

export function Dropdown({ button, isOpen, onOpen = NOOP, onClose = NOOP, param }: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    const [buttonDots, setButtonDots] = useState<Element>();
    const [showComments, setShowComments] = useState(false);

    const dispatch = useDispatch<any>();

    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const LIST = [
        {
            As: 'li' as const, className: 'menuItem', text: 'Комментарии',
            img: menuImg1, onClick: NOOP
        },
        {
            As: 'li' as const, className: 'menuItem', text: 'Поделиться',
            img: menuImg2, onClick: NOOP
        },
        {
            As: 'li' as const, className: 'menuItem', text: 'Скрыть',
            img: menuImg3, onClick: NOOP
        },
        {
            As: 'li' as const, className: 'menuItem', text: 'Сохранить',
            img: menuImg4, onClick: NOOP
        },
        {
            As: 'li' as const, className: 'menuItem', text: 'Пожаловаться',
            img: menuImg5, onClick: NOOP
        },
        { As: 'li' as const, className: 'menuItem', text: 'Закрыть', onClick: NOOP }
    ].map(generateId);
    LIST.map((el) => el.onClick = () => console.log(el.id));
    LIST[0].onClick = () => {
        setShowComments(true);
        dispatch(setCommentId(Number(param.param.id)));
    }
    LIST[LIST.length - 1].onClick = () => setIsDropdownOpen(false);

    const handleOpen: MouseEventHandler = (e) => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
            setButtonDots(e.currentTarget);
        };
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && <GenericList list={LIST} buttonDots={buttonDots} />}
            {showComments && <PostCommentsBlock />}
        </div>
    );
}