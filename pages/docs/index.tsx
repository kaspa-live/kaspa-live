import CommonLayout from "../components/CommonLayout";
import styles from "../../styles/Docs.module.css";
import DocsFaqNavigationItem from "../components/DocsFaqNavigationItem";
import DocsFaqItem from "../components/DocsFaqItem";

const Docs = () => {
    return <CommonLayout>
        <div className={styles["docs-container"]}>
            <div className={styles.navigation}>
                <ul>
                    {faqItems.map(faqItem =>
                        <DocsFaqNavigationItem
                            anchorName={faqItem.anchorName}
                            text={faqItem.questionText}/>)}
                </ul>
            </div>
            <div className={styles.content}>
                {faqItems.map(faqItem =>
                    <DocsFaqItem
                        anchorName={faqItem.anchorName}
                        questionText={faqItem.questionText}
                        answerText={faqItem.answerText}/>)}
            </div>
        </div>
    </CommonLayout>
};

export default Docs;

type FaqItem = {
    anchorName: string,
    questionText: string,
    answerText: string,
};


const faqItems: FaqItem[] = [
    {
        anchorName: "what-is-kaspa",
        questionText: "What is Kaspa?",
        answerText: "Kaspa is...",
    },
    {
        anchorName: "how-is-kaspa-different-from-other-cryptocurrencies",
        questionText: "How is Kaspa different from other cryptocurrencies?",
        answerText: "Kaspa is different because...",
    },
    {
        anchorName: "whats-the-current-status-of-the-project",
        questionText: "What's the current status of the project?",
        answerText: "The current status of the project is...",
    },
    {
        anchorName: "how-can-i-run-a-kaspa-node",
        questionText: "How can I run a Kaspa node?",
        answerText: "A Kaspa node can be run by...",
    },
    {
        anchorName: "how-can-i-contribute",
        questionText: "How can I contribute?",
        answerText: "You can contribute by...",
    },
    {
        anchorName: "will-there-be-pre-mining",
        questionText: "Will there be any pre-mining? What about founder's rewards?",
        answerText: "There will be neither pre-mining nor founder's rewards.",
    },
    {
        anchorName: "will-testnet-coins-be-transferred-over-to-mainnet",
        questionText: "Will Testnet coins be transferred over to Mainnet?",
        answerText: "Testnet means X, Mainnet means Y.",
    },
    {
        anchorName: "when-will-mainnet-be-launched",
        questionText: "When will Mainnet be launched?",
        answerText: "There isn't a set date but it's estimated that Mainnet will be launched in a year from the time " +
            "of writing. (9th of June, 2021)",
    },
    {
        anchorName: "how-does-kaspa-work",
        questionText: "How does Kaspa work?",
        answerText: "Kaspa works by...",
    },
];
