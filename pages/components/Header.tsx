import {AppBar, Toolbar, Typography} from "@material-ui/core";
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={styles.title}>
                    Kaspa.Live
                </Typography>
                <div className={styles.grow}/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
