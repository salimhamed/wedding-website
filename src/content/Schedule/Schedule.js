import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Welcome &ldquo;Panajachel&ldquo;</>,
            Date: () => <>09/10/2022</>,
            Time: () => "10 a.m.",
            Location: () => <>Panajachel</>,
            locationLink:
                "https://www.tripadvisor.com/Tourism-g292008-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands-Vacations.html",
            Address: () => (
                <>
                    <p>Lake Atitlan</p>
                    <p>Panajachel, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://www.google.com/maps/place/Restaurant+La+Barraca/@40.803093,0.699406,15z/data=!4m5!3m4!1s0x0:0x4c06a459a2cf6826!8m2!3d40.803093!4d0.699406",
            Details: () => (
                <>
                    <p>
                        You can come early and enjoy the most beutiful lake in the world!
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Wedding</>,
            Date: () => <>09/10/2022</>,
            Time: () => "11 a.m.",
            Location: () => <>Jardínes del lago</>,
            locationLink: "https://www.tripadvisor.com/Hotel_Review-g292008-d1959008-Reviews-Jardines_del_Lago-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands.html",
            Address: () => (
                <>
                    <p>Calle Monterrey, </p>
                    <p>Panajachel 07010, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://g.page/jardinesdellago?share",
            Details: () => (
                <>
                    <p>
                        The ceremony, lunch and party will take place at Jardínes del lago,
                        a beautiful hotel with a beautiful landscape to Lake Atitlán.
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Reception & Lunch</>,
            Date: () => <>09/10/2022</>,
            Time: () => "1:30 p.m.",
            Location: () => <>Jardínes del lago</>,
            locationLink: "https://www.tripadvisor.com/Hotel_Review-g292008-d1959008-Reviews-Jardines_del_Lago-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands.html",
            Address: () => (
                <>
                    <p>Calle Monterrey, </p>
                    <p>Panajachel 07010, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://g.page/jardinesdellago?share",
            Details: () => (
                <>
                    <p>
                        The reception and lunch will take place at Jardínes del lago,
                        after a photo session so please be patient until we finish to fill our instagram lol.
                    </p>
                </>
            ),
        },
    ],
    [LANGUAGE.ES]: [
        {
            Title: () => <>Bienvenidos a &ldquo;Panajachel&ldquo;</>,
            Date: () => <>10/09/2022</>,
            Time: () => "10 a.m.",
            Location: () => <>Panajachel</>,
            locationLink:
                "https://www.tripadvisor.com/Tourism-g292008-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands-Vacations.html",
            Address: () => (
                <>
                    <p>Lago Atitlan</p>
                    <p>Panajachel, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://www.google.com/maps/place/Restaurant+La+Barraca/@40.803093,0.699406,15z/data=!4m5!3m4!1s0x0:0x4c06a459a2cf6826!8m2!3d40.803093!4d0.699406",
            Details: () => (
                <>
                    <p>
                        Puedes venir antes y disfrutar del lago más hermoso del mundo.
                    </p>
                </>
            ),
        },
        {
            Title: () => <>La boda</>,
            Date: () => <>10/09/2022</>,
            Time: () => "11 a.m.",
            Location: () => <>Jardínes del lago</>,
            locationLink: "https://www.tripadvisor.com/Hotel_Review-g292008-d1959008-Reviews-Jardines_del_Lago-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands.html",
            Address: () => (
                <>
                    <p>Calle Monterrey, </p>
                    <p>Panajachel 07010, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://g.page/jardinesdellago?share",
            Details: () => (
                <>
                    <p>
                        La ceremonia tomará lugar en Jardínes del lago, un precioso hotel
                        con un paisaje hermoso del lago de Atitlán donde podrás disfrutar y descansar.
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Recepción</>,
            Date: () => <>10/09/2022</>,
            Time: () => "1:30 p.m.",
            Location: () => <>Jardínes del lago</>,
            locationLink: "https://www.tripadvisor.com/Hotel_Review-g292008-d1959008-Reviews-Jardines_del_Lago-Panajachel_Lake_Atitlan_Solola_Department_Western_Highlands.html",
            Address: () => (
                <>
                    <p>Calle Monterrey, </p>
                    <p>Panajachel 07010, Sololá, Guatemala</p>
                </>
            ),
            mapLink:
                "https://g.page/jardinesdellago?share",
            Details: () => (
                <>
                    <p>
                        La recepción y el almuerzo tomará lugar también en Jardínes del Lago
                        luego de una sesión de fotos de los novios, así que por favor, se paciente hasta que
                        tengamos las suficientes para nuestro instragram. lol.
                    </p>
                </>
            ),
        },
    ],
}
