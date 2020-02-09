import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Terres de l'Ebre</>,
            Details: () => (
                <>
                    <p>
                        Les Terres de l'Ebre is located in the south-west of
                        Catalonia, in the southern part of river Ebre. It is a
                        UNESCO Biosphere Reserve since 2013. We recommend to
                        stay either in Tortosa or L'Ampolla.
                    </p>
                </>
            ),
            link: "https://terresdelebre.travel/en",
        },
        {
            Type: () => <>Flight</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>Barcelona is the best place to fly into.</p>
                </>
            ),
            link:
                "https://www.google.com/flights?lite=0#flt=SEA./m/01f62.2020-08-01*/m/01f62.SEA.2020-08-10;c:USD;e:1;sd:1;t:f",
        },
        {
            Type: () => <>Train</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Renfe is the state-owned company which operates freight
                        and passenger trains in Spain. There are trains from the
                        airport to the city of Barcelona, and from there to
                        Tortosa and L'Ampolla.
                    </p>
                </>
            ),
            link: "http://www.renfe.com/EN/viajeros/index.html",
        },
        {
            Type: () => <>Bus</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Hife is a bus company with headquarters in Tortosa.
                        There are buses from the airport to Tortosa and
                        L'Ampolla.
                    </p>
                </>
            ),
            link: "http://hife.es/en-GB",
        },
        {
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Tortosa or L' Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We recommend to stay either in Tortosa (Lledó's
                        hometown) or L'Ampolla (if you want to stay by the
                        beach). The Welcome Pica-pica will be in L'Ampolla, and
                        there will be buses from both Tortosa and L'Ampolla to
                        Les Moles on the day of the weeding. In L'Ampolla, Les
                        Oliveres and Hotel Cap Roig are good options; however,
                        you will need car transportation (5 min drive) to the
                        Welcome Pica-pica. In Spain, booking.com is usually
                        better than airbnb.com.
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/index.ca.html?label=gen173nr-1BCAEoggI46AdIM1gEaLQCiAEBmAEEuAEHyAEN2AEB6AEBiAIBqAIDuAKd2ffxBcACAQ;sid=9a89e727464401b3616fc4b7b66218c9;keep_landing=1&sb_price_type=total&",
        },
    ],
    [LANGUAGE.CAT]: [
        {
            Type: () => <>Terres de l'Ebre</>,
            Details: () => (
                <>
                    <p>
                        Les Terres de l'Ebre es troba al sud-oest de Catalunya,
                        al curs baix del riu Ebre. Al 2013, la UNESCO va
                        declarar les Terres de l'Ebre com a espai natural i humà
                        únic a tot el món, atorgant-li el reconeixement de
                        Reserva Natural de la Biosfera. Us recomanem que us
                        allotgeu a Tortosa o L'Ampolla.
                    </p>
                </>
            ),
            link: "https://terresdelebre.travel",
        },
        {
            Type: () => <>Vol</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>L'aeroport de Barcelona és el que queda més proper.</p>
                </>
            ),
            link:
                "https://www.google.com/flights?lite=0#flt=SEA./m/01f62.2020-08-01*/m/01f62.SEA.2020-08-10;c:USD;e:1;sd:1;t:f",
        },
        {
            Type: () => <>Tren</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Renfe (Rogamos Empujen Nuestros Ferrocarriles
                        Estropeados) us pot portar des de diferent parts de
                        l'Estat Espanyol a Tortosa o L'Ampolla.
                    </p>
                </>
            ),
            link: "http://www.renfe.com/CA/viajeros/index.html",
        },
        {
            Type: () => <>Autobús</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Hife és una altra bona opció, amd autobús directe a
                        Tortosa i L'Ampolla.
                    </p>
                </>
            ),
            link: "http://hife.es",
        },
        {
            Type: () => <>Allotjament</>,
            Title: () => <>Tortosa/L' Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Us suggerim que us quedeu a Tortosa (d'on és la Lledó) o
                        a L'Ampolla (si voleu estar al costat de la platja). El
                        Pica-pica de Benvinguda serà a L'Ampolla; el dia del
                        casament, hi haurà autobusos desde Tortosa i L'Ampolla a
                        Les Moles. A L'Ampolla, Les Oliveres i Hotel Cap Roig
                        són bones opcions (però necessitaríeu cotxe per arribar
                        al lloc del Pica-pica). Podeu trobar altres opcions per
                        booking.com.
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/index.ca.html?label=gen173nr-1BCAEoggI46AdIM1gEaLQCiAEBmAEEuAEHyAEN2AEB6AEBiAIBqAIDuAKd2ffxBcACAQ;sid=9a89e727464401b3616fc4b7b66218c9;keep_landing=1&sb_price_type=total&",
        },
    ],
}
