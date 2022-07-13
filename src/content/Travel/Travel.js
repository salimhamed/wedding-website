import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.ES]: [
        {
            Type: () => <>Jardínes del lago</>,
            Details: () => (
                <>
                    <p>
                        Jardínes del lago esta ubicado en frente del lago más hermoso del mundo.
                        Aquí tu tendrás acceso directo al lago.
                    </p>
                </>
            ),
            link: "https://www.facebook.com/jardinesdellago/",
        },
        {
            Type: () => <>Car</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Te recomendamos rentar un vehículo desde Ciudad de Guatemala o venir en tu propio auto.
                    </p>
                </>
            ),
        },
        {
            Type: () => <>Bus</>,
            Title: () => <>Panajachel</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Transportes Rebulí es una compañia de autobuses para llegar a Panajachel.
                        Tú puedes tomarlo en diferentes lugares de la ciudad, inclusive durante el camino.
                        Si tu vienes desde la ciudad tu puedes tomar uno en la zona 1 o tomarlo en "la 4 de febrero"
                        en Mixco, Guatemala.
                        Si tu vienes desde Santa Cruz del quiché, tu puedes tomar primero uno hacia "Los Encuentros" y entonces tomar
                        otro hacia Panajachel.
                    </p>
                </>
            ),
            link: "https://connectedhorizons.co.uk/es/2018/01/11/colectivo-de-guatemala-city-a-panajachel/",
        },
        {
            Type: () => <>Hospedaje para la boda</>,
            Title: () => <>Hoteles en el área</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Te recomendamos tu estadía en el hotel Jardínes del lago (si quieres estar en frente de la playa).
                        También tienes otras opciones en Panajachel e incluso puedes contratar un airbnb.
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/searchresults.en-gb.html?label=gog235jc-1BCAMoXkINcGFuYWphY2hlbC1ndEgzWANoXogBAZgBCbgBB8gBDNgBAegBAYgCAagCA7gC99e4lgbAAgHSAiRjM2NjMDU2OC1jNGNlLTQwNGEtYWJhMC02MTJhMmVhMjg2YzPYAgXgAgE&sid=bf241762d97f50c2702011dd6aa7d1cf&aid=356980&lang=en-gb&sb=1&sb_lp=1&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fcity%2Fgt%2Fpanajachel-gt.en-gb.html%3Faid%3D356980%26label%3Dgog235jc-1BCAMoXkINcGFuYWphY2hlbC1ndEgzWANoXogBAZgBCbgBB8gBDNgBAegBAYgCAagCA7gC99e4lgbAAgHSAiRjM2NjMDU2OC1jNGNlLTQwNGEtYWJhMC02MTJhMmVhMjg2YzPYAgXgAgE%26sid%3Dbf241762d97f50c2702011dd6aa7d1cf%26&ss=Panajachel&is_ski_area=0&ssne=Panajachel&ssne_untouched=Panajachel&city=-1139621&checkin_year=2022&checkin_month=9&checkin_monthday=10&checkout_year=2022&checkout_month=9&checkout_monthday=11&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&order=review_score_and_price",
        },
    ],
    [LANGUAGE.EN]: [
        {
            Type: () => <>Jardínes del lago</>,
            Details: () => (
                <>
                    <p>
                        Jardínes del lago is located in front of the most beautiful
                        lake in the world. Here you will have a direct access to lake.
                    </p>
                </>
            ),
            link: "https://www.facebook.com/jardinesdellago/",
        },
        {
            Type: () => <>Car</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>We recommend to rent a car from Guatemala City or come with your own car.</p>
                </>
            ),
        },
        {
            Type: () => <>Bus</>,
            Title: () => <>Panajachel</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Transportes Rabolí is a bus company to go to Panajachel.
                        You can take a bus in differents places of the city, inclusive in middle of the road.
                        If you come from the city you can go to zona 1, or take one in the place "4 de febraro" in Mixco, Guatemala.
                        If you come from Santa Cruz del quiché, you can take a first bus to "Los encuentros" and then take other one
                        to Panajachel.
                    </p>
                </>
            ),
            link: "https://connectedhorizons.co.uk/2018/01/11/chicken-bus-guatemala-city-panajachel/",
        },
        {
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Jardínes del lago or other hotel</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We recommend to stay either in Jardínes del lago (if you want to stay by the
                        beach). Also you have other different options in Panajachel, and you can get an airbnb too.
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/searchresults.en-gb.html?label=gog235jc-1BCAMoXkINcGFuYWphY2hlbC1ndEgzWANoXogBAZgBCbgBB8gBDNgBAegBAYgCAagCA7gC99e4lgbAAgHSAiRjM2NjMDU2OC1jNGNlLTQwNGEtYWJhMC02MTJhMmVhMjg2YzPYAgXgAgE&sid=bf241762d97f50c2702011dd6aa7d1cf&aid=356980&lang=en-gb&sb=1&sb_lp=1&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fcity%2Fgt%2Fpanajachel-gt.en-gb.html%3Faid%3D356980%26label%3Dgog235jc-1BCAMoXkINcGFuYWphY2hlbC1ndEgzWANoXogBAZgBCbgBB8gBDNgBAegBAYgCAagCA7gC99e4lgbAAgHSAiRjM2NjMDU2OC1jNGNlLTQwNGEtYWJhMC02MTJhMmVhMjg2YzPYAgXgAgE%26sid%3Dbf241762d97f50c2702011dd6aa7d1cf%26&ss=Panajachel&is_ski_area=0&ssne=Panajachel&ssne_untouched=Panajachel&city=-1139621&checkin_year=2022&checkin_month=9&checkin_monthday=10&checkout_year=2022&checkout_month=9&checkout_monthday=11&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&order=review_score_and_price",
        },
    ],
}
