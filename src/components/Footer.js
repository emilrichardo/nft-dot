import React from 'react';
import { useTranslation } from "react-i18next"
const Footer = () => {
	const {t} = useTranslation();
    return (
    <>
    <footer>
		<section>
			<div className="footer">
				<p>NFT-DOT © 2022. {t("Footer_Rights")}</p>
			</div>
		</section>
	</footer>

    </> );
}

export default Footer;