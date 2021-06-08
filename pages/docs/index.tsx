import CommonLayout from "../components/CommonLayout";
import styles from "../../styles/Docs.module.css";

const Docs = () => {
    return <CommonLayout>
        <div className={styles["docs-container"]}>
            <div className={styles.navigation}>
                <ul>
                    <li><a href="#what-is-kaspa">What is Kaspa?</a></li>
                    <li><a href="#how-is-kaspa-different-from-other-cryptocurrencies">How is Kaspa different from other cryptocurrencies?</a></li>
                    <li><a href="#whats-the-current-status-of-the-project">What's the current status of the project?</a></li>
                    <li><a href="#how-can-i-run-a-kaspa-node">How can I run a Kaspa node?</a></li>
                    <li><a href="#how-can-i-contribute">How can I contribute?</a></li>
                    <li><a href="#will-there-be-pre-mining">Will there be any pre-mining? What about founder's rewards?</a></li>
                    <li><a href="#will-testnet-coins-be-transferred-over-to-mainnet">Will Testnet coins be transferred over to Mainnet?</a></li>
                    <li><a href="#when-will-mainnet-be-launched">When will Mainnet be launched?</a></li>
                    <li><a href="#how-does-kaspa-work">How does Kaspa work?</a></li>
                </ul>
            </div>
            <div className={styles.content}>
                <a id="what-is-kaspa" className={styles.anchor}/>
                <div>
                    <h1>What is Kaspa?</h1>
                    <p>Kaspa is...</p>
                </div>

                <a id="how-is-kaspa-different-from-other-cryptocurrencies" className={styles.anchor}/>
                <div>
                    <h1>How is Kaspa different from other cryptocurrencies?</h1>
                    <p>Kaspa is different because...</p>
                </div>

                <a id="whats-the-current-status-of-the-project" className={styles.anchor}/>
                <div>
                    <h1>What's the current status of the project?</h1>
                    <p>The current status of the project is...</p>
                </div>

                <a id="how-can-i-run-a-kaspa-node" className={styles.anchor}/>
                <div>
                    <h1>How can I run a Kaspa node?</h1>
                    <p>A Kaspa node can be run by...</p>
                </div>

                <a id="how-can-i-contribute" className={styles.anchor}/>
                <div>
                    <h1>How can I contribute?</h1>
                    <p>You can contribute by...</p>
                </div>

                <a id="will-there-be-pre-mining" className={styles.anchor}/>
                <div>
                    <h1>Will there be any pre-mining? What about founder's rewards?</h1>
                    <p>There will be neither pre-mining nor founder's rewards.</p>
                </div>

                <a id="will-testnet-coins-be-transferred-over-to-mainnet" className={styles.anchor}/>
                <div>
                    <h1>Will Testnet coins be transferred over to Mainnet?</h1>
                    <p>Testnet means X, Mainnet means Y.</p>
                </div>

                <a id="when-will-mainnet-be-launched" className={styles.anchor}/>
                <div>
                    <h1>When will Mainnet be launched?</h1>
                    <p>Mainnet will be launched at...</p>
                </div>

                <a id="how-does-kaspa-work" className={styles.anchor}/>
                <div>
                    <h1>How does Kaspa work?</h1>
                    <p>Kaspa works by...</p>
                </div>
            </div>
        </div>
    </CommonLayout>
};

export default Docs;
