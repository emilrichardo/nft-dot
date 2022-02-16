import React from 'react';
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next"
import { StaticImage } from 'gatsby-plugin-image';
//import TokenWidget from '../tokenwidget';

export default function SectionOne() {
    const {t} = useTranslation();
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };

      const particlesOption = {
            fpsLimit: 60,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "push",
                },
                onHover: {
                enable: true,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                },
                push: {
                quantity: 4,
                },
                repulse: {
                distance: 200,
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: "#00FFFF",
            },
            links: {
                enable: true,
                distance: 150,
                color: "#00FFFF",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1200
                }
            },

            shape: {
                type: "circle",
                polygon: {
                    nb_sides: 30
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                }
            },
            },
            detectRetina: true,
        }

    return(
    <>
    <section id="one">
            <div class="block-box-hero left">
                <div class="wrapper">
                    <div class="text">
                        <h1 class="h1">{ t("Hero_Title") } <span class="color">NFT-DOT</span></h1>
                        <p class="h4">{ t("Hero_Text") }</p>

                        <div class="buttons">
                            <a href="#two" class="btn-color scroll">{ t("Btn_Read") }</a>
                            <a href="https://exchange.pancakeswap.finance/#/swap" class="btn-color">{ t("Btn_Buy") }</a>
                        </div>
                        {/* <TokenWidget
                            className="cardtokencustom"
                            contract="0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e"
                            linkBsc="https://bscscan.com/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e"
                            //iconToken={iconToken}
                            theme="dark"
                            bgIcon="true"
                            widthCard="100%"
                            //transparent="true"
                            primaryColor="#00FFFF"
                            //customBg="rgba(56, 97, 251,.5)"
                        /> */}

                        <div class="partners">
                            <ul>
                                <li><a target="_blank"  rel="noreferrer" href="https://poocoin.app/tokens/0x0d112ec1741c1f5e15b54a7054c60048bdd5cf08"><span className='d-none'>poocoin.app</span><StaticImage src="../../assets/partners/poocoin.png"/></a></li>
                                <li><a target="_blank"  rel="noreferrer" href="https://pancakeswap.finance/"><span className='d-none'>pancakeswap</span><StaticImage src="../../assets/partners/pancake_icon.png"/></a></li>
                                <li><a target="_blank"  rel="noreferrer" href="https://coinmarketcap.com/"><span className='d-none'>coinmarketcap</span><StaticImage src="../../assets/partners/cmc-logo_icon.png"/></a></li>
                                <li><a target="_blank"  rel="noreferrer" href="https://www.coingecko.com/en"><span className='d-none'>coingecko</span><StaticImage src="../../assets/partners/gecko.png"/></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="social-share hero">
                    <ul>
                        <li><a target="_blank"  rel="noreferrer" href="https://www.facebook.com/NFTDOTonline" class="share-facebook"><span className='d-none'>facebook</span></a></li>
                        <li><a target="_blank"  rel="noreferrer" href="https://twitter.com/NFTDOTonline" class="share-twitter"><span className='d-none'>twitter</span></a></li>
                        <li><a target="_blank"  rel="noreferrer" href="https://www.instagram.com/nftdotonline/" class="share-instagram"><span className='d-none'>instagram</span></a></li>
                        <li><a target="_blank"  rel="noreferrer" href="https://t.me/Nftdot" class="share-telegram"><span className='d-none'>telegram</span></a></li>
                    </ul>
                </div>

                <span></span>

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particlesOption}
                    />

                <StaticImage  placeholder="blurred" layout="fullWidth" src="../../assets/hero/hero.svg" />
            </div>
        </section>
    </>
    )
};
