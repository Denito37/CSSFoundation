import Entry from "../components/entry"
import data from '../../entries.json'
import { objectToArray } from "../functions/textParser.js"
import { ErrorMessage } from '../components/elements/errors.jsx'
export default function Error(){
    const errors = data.entries.Error
    const errorElements = [<ErrorMessage />]
    let placement = 0
    const list = objectToArray(errors).map(err =>{
        return <Entry key={err.id} entry={err} element={errorElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}