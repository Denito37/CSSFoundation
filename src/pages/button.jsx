import Entry from "../components/entry"
import data from "../../entries.json"
import { objectToArray } from "../functions/textParser.js"
import { Trash, Add, Claim, Submit, Cta } from '../components/elements/buttons.jsx'
export default function Button(){
    const btnElements = [<Trash />, <Add />, <Claim />, <Submit />, <Cta />]
    let placement = 0
    let Buttons = data.entries.Buttons
    const list = objectToArray(Buttons).map(button =>{
        return <Entry key={button.id} entry={button} element={btnElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}