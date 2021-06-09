import styles from "../../styles/Docs.module.css";

const DocsFaqItem = ({anchorName, questionText, answerText}:
                         { anchorName: string, questionText: string, answerText: string }) => {
    return <>
        <a id={anchorName} className={styles.anchor}/>
        <div>
            <h1>{questionText}</h1>
            <p>{answerText}</p>
        </div>
    </>
};

export default DocsFaqItem;
