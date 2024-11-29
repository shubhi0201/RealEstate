import React from "react";

function Footer() {
    return (
        <footer className="bg-light text-center py-3">
            <p>&copy; {new Date().getFullYear()} MyBricks. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
