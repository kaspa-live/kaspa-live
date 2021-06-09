import CommonLayout from "../components/CommonLayout";
import styles from "../../styles/Docs.module.css";
import DocsFaqNavigationItem from "../components/DocsFaqNavigationItem";
import DocsFaqItem from "../components/DocsFaqItem";
import {ReactFragment} from "react";

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
                <h1>FAQ</h1>
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
    answerText: ReactFragment,
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
        answerText: <>Code contributions may be made to the kaspad, Kaspa's main node repository.<br/>
            For a list of good first issues please go <a
                href="https://github.com/kaspanet/kaspad/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">here.</a>
        </>,
    },
    {
        anchorName: "will-there-be-pre-mining",
        questionText: "Will there be any pre-mining? What about founder's rewards?",
        answerText: <>There will be neither pre-mining nor founder's rewards.<br/>
            <br/>
            The original Kaspa researchers and developers are funded by <a href="https://www.daglabs.com/"
                                                                           target="_blank">DAGLabs</a>,
            a for-profit organization whose business model centers around mining Kaspa and the ASICs required for it.
            DAGLabs will have the first-mover advantage as one of the first miners in the network.
        </>,
    },
    {
        anchorName: "will-testnet-coins-be-transferred-over-to-mainnet",
        questionText: "Will Testnet coins be transferred over to Mainnet?",
        answerText: "No. Testnet and Mainnet are entirely separate networks, each with its own blockDAG and its own " +
            "rules.",
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
