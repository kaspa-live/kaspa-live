const DocsFaqNavigationItem = ({text, anchorName}: { text: string, anchorName: string }) => {
    return <li><a href={`#${anchorName}`}>{text}</a></li>
};

export default DocsFaqNavigationItem;
