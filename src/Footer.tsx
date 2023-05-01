import "/src/footer.css";

function Footer() {
    return (
        <footer>
            <p>&copy; Cypo 2023</p>
            <img id="smile" src="/assets/images/icons/smile.svg" alt=":)"/>
            <div>
                <a href="mailto:cypooriginal@gmail.com" target="_blank" title="cypooriginal@gmail.com">
                    <img src="/assets/images/icons/gmail-color.svg" alt="" />
                </a>
                <a href="https://www.snapchat.com/add/cypocypocypo" target="_blank" title="cypocypocypo">
                    <img src="/assets/images/icons/snapchat-color.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/pterodaktyl123/" target="_blank" title="pterodaktyl123">
                    <img src="/assets/images/icons/instagram-color.svg" alt="" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
