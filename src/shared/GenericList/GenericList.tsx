import React = require("react");
import styles from './menuItem.css';
import { Break } from "../Break/Break";
import { Text} from "../Text/Text";
import { Icon } from "../Icon/Icon";
import ReactDOM from "react-dom";

interface IItem {
  id: string;
  text: string;
  img?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  buttonDots?: Element;
}

const noop = () => { };

export function GenericList({ list, buttonDots }: IGenericListProps) {
  const leftInit = buttonDots?.getBoundingClientRect().left;  
  const [left, setLeft] = React.useState(leftInit ? leftInit - 120 : leftInit);  

  const node = document.querySelector("#menu_dots");
  if (!node) return null;

  function setSize() {
    const leftInit = buttonDots?.getBoundingClientRect().left;    
    setLeft(c => c ? leftInit ? leftInit - 120 : leftInit : c);    
  }
  window.addEventListener("resize", setSize);

  return ReactDOM.createPortal((
    <ul className={styles.list} style={{ left }}>
      {list.map(({ As = 'div', text, img, className, onClick, id, href }, ind) => (
        <As
          className={styles.menuList}
          onClick={onClick}
          key={id}
          href={href}
        >
          <div className={styles.menuItem}>
            {(list.length - ind) > 1 && <Icon size={16} mobileSize={14}> {img} </Icon>}
            <Break size={6} />
            <Text size={14} mobileSize={12}> {text} </Text>
          </div>
        </As>
      ))}
    </ul>

  ), node);
}
