import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from "react-i18next"

const SectionTwo = () => {
    const {t} = useTranslation();
    return (
    <>
    <section id="two" className="bg-dark">
            <div className="block-content">
                  <div className="block-box">
                      <div className="img">
                        <StaticImage placeholder="blurred" src="../../assets/hero/about.jpg" />
                    </div>
                    <div className="text">
                          <h2 className="h2"><span className="color">{ t("Menu_About") }</span></h2>
                        <p>{ t("About_Text_01") }<br/><br/>{ t("About_Text_01_b") }</p>
                    </div>
                  </div>

                  <div className="block-box right">
                    <div className="img">
                        <StaticImage placeholder="blurred" src="../../assets/hero/about2.jpg" />
                    </div>
                    <div className="text">
                        <p>{ t("About_Text_02") }<br/><br/>{ t("About_Text_02_b")}</p>
                    </div>
                  </div>
            </div>
        </section>
        <section className="bg-dark">
            <div className="dark-box">
                <p className="h3">{ t("Tokens_Text_01") }</p>
                <h3 className="h2"><span className="color">NFT-DOT</span> { t("Tokens_Text_02") }</h3>
            </div>
        </section>
        <section id="two" className="bg-dark">
            <div className="block-content">
                  <div className="block-box">
                      <div className="img">
                        <StaticImage src="../../assets/hero/hero.jpg" />
                    </div>
                    <div className="text">
                          <h2 className="h2"><span className="color">
                              { t("Buy_Title" ) }</span></h2>


                        <p
                        dangerouslySetInnerHTML={{
                            __html: t("Buy_Text", {
                              interpolation: { escapeValue: false },
                            }),
                          }}
                        />


                        <a href="https://exchange.pancakeswap.finance/#/swap" className="btn-color">{ t("Btn_Buy") }</a>
                    </div>
                  </div>
            </div>
        </section>


    </>
    );
}

export default SectionTwo;