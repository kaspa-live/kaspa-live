import styles from "../../styles/Docs.module.css";
import {ReactFragment} from "react";

const DocsFaqItem = ({anchorName, questionText, answerText}:
                         { anchorName: string, questionText: string, answerText: ReactFragment }) => {
    return <>
        <a id={anchorName} className={styles.anchor}/>
        <div className={styles["faq-item"]}>
            <h2>{questionText}</h2>
            <p className={styles["answer-text"]}>{answerText}</p>
        </div>
    </>
};

export default DocsFaqItem;
