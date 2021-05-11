import {useEffect, useRef} from "react";
import styles from '../../styles/KgiContainer.module.css'
import {renderToStaticMarkup} from "react-dom/server";

const KgiContainer = () => {
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const container = containerRef.current;
        const kgiFrameElement = <iframe src="http://kgi-testnet.daglabs-dev.com/" className={styles['kgi-frame']}
                                        sandbox="allow-scripts">
            Something went wrong
        </iframe>;

        container.innerHTML = renderToStaticMarkup(kgiFrameElement);
    }, []);

    return <div ref={containerRef} className={styles['kgi-container']}/>;
}

export default KgiContainer