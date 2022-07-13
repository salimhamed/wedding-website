import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>A love story</>,
            Details: () => (
                <>
                    <span>
                        Edward and Andrea met in the capital city through the youth fellowships of the
                        Church of Christ, it was in the Church of Christ in Mixco where they met and supported the
                        youth activities where they started their friendship, Edward invites Andrea for coffee,
                        blessed coffee! On their first date he saw the movie Rio, Andrea laughed out loud, Edward more
                        introvert was embarrassed to draw so much attention…. And so with the passage of time
                        November 2011 Edward asks Andrea to be his girlfriend and she very happily says yes,
                        that was already late lol.
                    </span><br /><br />
                    <span>
                        A love story with difficulties that is hidden from no one, because the process has been
                        a lot of learning but that today is forged of Love seeing the promises of God fulfilled
                        in each other's lives, recognizing that they are not the perfect couple, but that they will fight together
                        to be perfected in Christ, because until now only His Grace has sustained and maintains them.
                    </span>
                </>
            )
        }
    ],
    [LANGUAGE.ES]: [
        {
            Title: () => <>Una historia de amor</>,
            Details: () => (
                <>
                    <span>
                        Edward y Andrea se conocieron en la ciudad capital por las confraternidades juveniles de la
                        Iglesia de Cristo, fue en la Iglesia de Cristo en Mixco donde se reunían y apoyaban en las
                        actividades juveniles donde iniciaron su amistad, Edward invita a Andrea a tomar un café,
                        bendito café! En su primera cita vieron la Película Río, Andrea reía a carcajadas, Edward más
                        introvertido le daba pena llamar tanta la atención …. Y así con el paso del tiempo en
                        noviembre del 2010 Edward le pide a Andrea ser su novia y ella muy felizmente dice que Si,
                        que ya se había tardado jajaja.
                    </span><br /><br />
                    <span>
                        Una historia de amor con dificultades que para nadie es oculto, pues el proceso ha sido de
                        mucho aprendizaje pero que hoy esta forjada de Amor viendo las promesas de Dios cumplidas
                        en la vida de cada uno, reconociendo que no son la pareja perfecta, pero que lucharan juntos
                        para perfeccionarse en Cristo, pues hasta aquí sólo su Gracia los ha sostenido y los mantiene.
                    </span>
                </>
            )
        }

    ],
}          
