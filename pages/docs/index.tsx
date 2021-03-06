import CommonLayout from "../components/CommonLayout";
import styles from "../../styles/Docs.module.css";
import {ReactFragment} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";

const Docs = () => {
    return <CommonLayout>
        <div className={styles["docs-container"]}>
            <Typography variant="h3" className={styles.header}>FAQ</Typography>
            <div className={styles["faq-item-container"]}>
                {faqItems.map(faqItem =>
                    <>
                        <a id={faqItem.anchorName} className={styles.anchor}/>
                        <Accordion expanded={true}>
                            <AccordionSummary onClick={() => window.location.hash = faqItem.anchorName}>
                                <Typography variant="h5">{faqItem.questionText}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{faqItem.answerText}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                )}
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
        questionText: "What is Kaspa? How is Kaspa different from other cryptocurrencies?",
        answerText: <p>Kaspa is a cryptocurrency similar to Bitcoin. It is public, decentralized, and permissionless.
            Its security model is based on Proof-of-Work.<br/>
            <br/>
            In Bitcoin, increasing transaction throughput negatively impacts its security. This sets an effective limit
            to the amount of transactions that Bitcoin can process per second. (The commonly quoted figure is 7
            transaction/second.) Kaspa aims to improve over Bitcoin by replacing the blockchain with a blockDAG, which
            circumvents this issue altogether.<br/>
            <br/>
            Ori Newman, a Kaspa core developer, has written
            a pair of articles on <a
                href="https://someone235.medium.com/how-increasing-the-throughput-harms-bitcoins-security-76ed62313227"
                target="_blank">Bitcoin's throughput/security dichotomy</a> and on <a
                href="https://someone235.medium.com/scaling-bitcoin-with-blockdag-d785174a3402" target="_blank">how DAGs
                avoid
                it.</a>
        </p>,
    },
    {
        anchorName: "how-does-kaspa-work",
        questionText: "How does Kaspa work?",
        answerText: <p>Kaspa is an implementation of the GHOSTDAG protocol, a greedy version of PHANTOM. Both protocols
            were originally authored by Yonatan Sompolinsky, and may be found <a href="https://eprint.iacr.org/2018/104"
                                                                                 target="_blank">here.</a><br/>
            <br/>
            Ori Newman, a Kaspa core developer, has written
            an <a href="https://someone235.medium.com/scaling-bitcoin-with-blockdag-d785174a3402" target="_blank">in-depth
                article</a> exploring the PHANTOM protocol.</p>,
    },
    {
        anchorName: "whats-the-current-status-of-the-project",
        questionText: "What's the current status of the project?",
        answerText: <p>Kaspa Testnet has been launched on April 8th, 2021.<br/>
            The roadmap towards the Mainnet launch may be
            seen on <a href="https://github.com/kaspanet/kaspad/projects/4" target="_blank">Github.</a></p>,
    },
    {
        anchorName: "how-can-i-run-a-kaspa-node",
        questionText: "How can I run a Kaspa node?",
        answerText: <p>The most straightforward way to run a Kaspa node is to download
            the <a href="https://github.com/kaspanet/kaspad/releases" target="_blank">latest binaries</a> of kaspad, the
            reference implementation of a Kaspa node. Once the binaries have been downloaded for your OS, simply run the
            kaspad executable.
        </p>,
    },
    {
        anchorName: "how-can-i-contribute",
        questionText: "How can I contribute?",
        answerText: <p>Code contributions may be made to <a href="https://github.com/kaspanet/kaspad/"
                                                            target="_blank">kaspad,</a> the repository for Kaspa's main
            node.<br/>
            Documentation contributions may be made to <a href="https://github.com/kaspanet/docs/"
                                                          target="_blank">the docs repository.</a><br/>
            For a list of good first issues please go <a
                href="https://github.com/kaspanet/kaspad/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                target="_blank">here.</a>
        </p>,
    },
    {
        anchorName: "will-there-be-pre-mining",
        questionText: "Will there be any pre-mining? What about founder's rewards?",
        answerText: <p>There will be neither pre-mining nor founder's rewards.<br/>
            <br/>
            The original Kaspa researchers and developers are funded by <a href="https://www.daglabs.com/"
                                                                           target="_blank">DAGlabs</a>,
            a for-profit organization whose business model centers around mining Kaspa and the ASICs required for it.
            DAGlabs will have the first-mover advantage as one of the first miners in the network.<br/>
            <br/>
            Yonatan Sompolinsky, DAGlabs' founder, has written <a
                href="https://hashdag.medium.com/in-which-i-love-my-truly-truly-fair-60e74cbaaf7b" target="_blank">an
                article</a> on the matter.
        </p>,
    },
    {
        anchorName: "will-testnet-coins-be-transferred-over-to-mainnet",
        questionText: "Will Testnet coins be transferred over to Mainnet?",
        answerText: "No. Testnet and Mainnet are entirely separate networks, each with its own blockDAG and its own " +
            "rules. Also note that Testnet may be reset from time to time, which erases all existing coins in the process.",
    },
    {
        anchorName: "when-will-mainnet-be-launched",
        questionText: "When will Mainnet be launched?",
        answerText: "There isn't a set date but it's estimated that Mainnet will be launched in a year from the time " +
            "of writing (9th of June, 2021).",
    },
];
