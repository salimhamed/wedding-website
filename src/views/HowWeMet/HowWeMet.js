import React, { useState } from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { selectLanguage } from "utilities/cookies"
import { howwemet, title } from "content/HowWeMet"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/howWeMet.png"

//photos 
import photoSkyDiving from "photos/sky_diving.jpeg"
import photoSpainOctopus from "photos/spain_octopus.jpg"
import photoDeckWithChicagoBack from "photos/header_large.png"
import photoHowWeMet from "photos/howWeMet.png"
import photo1 from "photos/image1.jpeg"
import photo2 from "photos/image2.jpeg"
import photo3 from "photos/image3.jpeg"
import photo4 from "photos/image4.jpeg"
import photo5 from "photos/image5.jpeg"
import photo6 from "photos/image6.jpeg"
import photo7 from "photos/image7.jpeg"
import photo8 from "photos/image8.jpeg"
import photo9 from "photos/image9.jpeg"
import photo10 from "photos/image10.jpeg"

import styles from "./HowWeMet.module.scss"

function getPhotos() {
    const photos = [
        {
            src: photo1,
            width: 4,
            height: 3
        },
        {
            src: photo2,
            width: 3,
            height: 4,

        },
        {
            src: photo7,
            width: 4,
            height: 3,
        },
        {
            src: photoSpainOctopus,
            width: 4,
            height: 3,
        },
        {
            src: photo3,
            width: 3,
            height: 4,
        },
        {
            src: photoSkyDiving,
            width: 4,
            height: 3,
        },
        {
            src: photo4,
            width: 3,
            height: 4,
        },
        {
            src: photo5,
            width: 3,
            height: 4,
        },
        {
            src: photoDeckWithChicagoBack,
            width: 4,
            height: 3,
        },
        {
            src: photo6,
            width: 3,
            height: 4,
        },
        {
            src: photo8,
            width: 3,
            height: 4,
        },
        {
            src: photo9,
            width: 4,
            height: 3,
        },
        {
            src: photo10,
            width: 3,
            height: 4,
        },
        {
            src: photoHowWeMet,
            width: 4,
            height: 3,
        },
    ]
    return photos
}

function HowWeMet() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const howWeMetItems = howwemet[selectLanguage(cookies)]
    const photos = getPhotos();

    const [isOpen, setIsOpen] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <section>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container >
                {howWeMetItems.map(({ Title, Details }, idx) => (
                    <Row key={"row" + idx}>
                        <Col className={styles.details}>
                            <h1 className={styles.announcement}>
                                <Title />
                            </h1><br />
                            <h3 className={styles.announcement}>
                                <Details />
                            </h3>
                        </Col>
                    </Row>
                ))}
                <Gallery photos={photos} onClick={() => setIsOpen(1)} />
                {!!isOpen && (
                    <Lightbox
                        mainSrc={photos[photoIndex].src}
                        nextSrc={photos[(photoIndex + 1) % photos.length].src}
                        prevSrc={
                            photos[
                                (photoIndex + photos.length - 1) % photos.length
                            ].src
                        }
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + photos.length - 1) % photos.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % photos.length)
                        }
                    />
                )}
            </Container>
        </section>
    )
}

export default HowWeMet