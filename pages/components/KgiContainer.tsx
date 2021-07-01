import {useEffect, useRef} from "react";
import styles from '../../styles/KgiContainer.module.css'
import {renderToStaticMarkup} from "react-dom/server";

const KgiContainer = () => {
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const rawKgiAddress = process.env.NEXT_PUBLIC_KGI_ADDRESS;
        const kgiAddress = `${window.location.protocol}//${rawKgiAddress}`;

        const container = containerRef.current;
        const kgiFrameElement =
            <iframe src={kgiAddress} className={styles['kgi-frame']}
                    sandbox="allow-scripts allow-popups">
                Something went wrong
            </iframe>;

        container.innerHTML = renderToStaticMarkup(kgiFrameElement);
    }, []);

    return <div ref={containerRef} className={styles['kgi-container']}/>;
}

export default KgiContainer