import Entry from "../components/entry"
import data from '../../entries.json'
import { objectToArray } from "../functions/textParser.js"
import { Spinner, Skeleton} from '../components/elements/loadings.jsx'
export default function Loading(){
    const load = data.entries.Loading
    const loadElements = [<Spinner />, <Skeleton />]
    let placement = 0
    const list = objectToArray(load).map(load =>{
        return <Entry key={load.id} entry={load} element={loadElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}