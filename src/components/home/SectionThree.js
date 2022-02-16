import React from 'react';
import { useTranslation } from "react-i18next"
import TeaserItem from './TeaserItem';


const SectionThree = () => {
    const {t} = useTranslation();
    return (
        <section id="three" className="bg-dark">
            <div className="block-content">
                <center>
                    <h2 className="h2"><span className='color'>NFT-DOT</span> {t("Courses_Title")}</h2>
                    <p className="h3">{t("Courses_Subtitle")}</p>
                </center>

                <div className="teaser">
                    <ul>
                        <TeaserItem
                            color="color-one"
                            title={t("Courses_Title_01")}
                            text={t("Courses_Subtitle_01")}
                        />
                        <TeaserItem
                            color="color-two"
                            title={t("Courses_Title_02")}
                            text={t("Courses_Subtitle_02")}
                        />
                        <TeaserItem
                            color="color-three"
                            title={t("Courses_Title_03")}
                            text={t("Courses_Subtitle_03")}
                        />
                        <TeaserItem
                            color="color-four"
                            title={t("Courses_Title_04")}
                            text={t("Courses_Subtitle_04")}
                        />
                        <TeaserItem
                            color="color-five"
                            title={t("Courses_Title_05")}
                            text={t("Courses_Subtitle_05")}
                        />
                        <TeaserItem
                            color="color-six"
                            title={t("Courses_Title_06")}
                            text={t("Courses_Subtitle_06")}
                        />
                        <TeaserItem
                            color="color-seven"
                            title={t("Courses_Title_07")}
                            text={t("Courses_Subtitle_07")}
                        />
                        <TeaserItem
                            color="color-one"
                            title={t("Courses_Title_08")}
                            text={t("Courses_Subtitle_08")}
                        />
                        <TeaserItem
                            color="color-two"
                            title={t("Courses_Title_09")}
                            text={t("Courses_Subtitle_09")}
                        />
                        <TeaserItem
                            color="color-three"
                            title={t("Courses_Title_10")}
                            text={t("Courses_Subtitle_10")}
                        />


                    </ul>

                </div>

                <div className="social-share">
                    <ul>
                        <li><a target="_blank" rel="noreferrer"  href="https://www.facebook.com/NFTDOTonline" className="share-facebook"><span className='d-none'>facebook</span></a></li>
                        <li><a target="_blank" rel="noreferrer"  href="https://twitter.com/NFTDOTonline" className="share-twitter"><span className='d-none'>twitter</span></a></li>
                        <li><a target="_blank" rel="noreferrer"  href="https://www.instagram.com/nftdotonline/" className="share-instagram"><span className='d-none'>instagram</span></a></li>
                        <li><a target="_blank" rel="noreferrer"  href="https://t.me/Nftdot" className="share-telegram"><span className='d-none'>telegram</span></a></li>
                    </ul>
                </div>

            </div>
        </section>
     );
}

export default SectionThree;