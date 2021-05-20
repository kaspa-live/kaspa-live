import {AppBar, Toolbar} from "@material-ui/core";
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className={styles.toolbar}>
                    <div className={styles.logo}/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
