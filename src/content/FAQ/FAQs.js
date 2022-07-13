import React from "react"

import { LANGUAGE } from "actions/constants"
import imageColor from "../../photos/Colors.jpeg"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Is Lake Atitlán coming?</>,
            Answer: () => <>O-B-V-I-O-U-S-L-Y.</>,
        },
        {
            Question: () => <>Is there a bus to and from the wedding site?</>,
            Answer: () => (
                <>
                    Yes, If you will use the bus, so drop you off near of the hotel but you will walk at least 300 meters.
                    Just please check your schedule to find tickets to come back to your house.
                </>
            ),
        },
        {
            Question: () => <>What languages do the guests speak?</>,
            Answer: () => (
                <>
                    Almost speack spanish, and at least 40% speadk kiché.
                </>
            ),
        },
        {
            Question: () => <>What is the dress code?</>,
            Answer: () => (
                <>
                    The wedding will be formal. We recommend long or elegant
                    cocktail dresses for ladies and suits for gents. White is
                    reserved for the bride. and if your rather, also you can dress colores like wine gold.
                    <img src={imageColor} alt="color" />
                </>
            ),
        },
        {
            Question: () => <>What is the weather like?</>,
            Answer: () => (
                <>
                    The weather during this time of year is usually cloudy, fresh and probably could raining.
                    During the day could be 24 degrees centigrades and in the sunset could reach to 14 degrees centigrades.
                </>
            ),
        },
    ],
    [LANGUAGE.ES]: [
        {
            Question: () => <>¿Lake Atitlán proximamente?</>,
            Answer: () => <>O-B-I-A-M-E-N-T-E.</>,
        },
        {
            Question: () => <>Hay servicio de bus hacia el lugar de la boda?</>,
            Answer: () => (
                <>
                    Si, Si utilizas el autobus, entonces te dejará cerca del hotel, pero caminarás al menos 300 metors.
                    Solo revisa tu calendario para encontrar tickets para regresar a tu casa.
                </>
            ),
        },
        {
            Question: () => <>¿Qué idioma hablan los invitados?</>,
            Answer: () => (
                <>
                    La mayoría hablan español y almenos un 40% también pueden hablar kiché.
                </>
            ),
        },
        {
            Question: () => <>¿Cual es el código de vestimenta?</>,
            Answer: () => (
                <>
                    La boda será formal. Te recomendamos vestido largo o elegante de cocktail para las damas
                    y traje para los caballeros.
                    El blanco es reservado para la novia.
                    Si prefieres también puedes usar los colores como el vino y dorado.
                    <img src={imageColor} alt="color" />
                </>
            ),
        },
        {
            Question: () => <>¿Cual es el clima?</>,
            Answer: () => (
                <>
                    Para esta fecha el tiempo normalmente es nublado, fresco y pordría llover.
                    Durante el día puede alcanzar los 24 grados centígrados y por al atardecer puede
                    alcanzar los 14 grados centígrados.
                </>
            ),
        },
    ],
}
