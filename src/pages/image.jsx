import Entry from "../components/entry"
import data from '../../entries.json'
import { objectToArray } from "../functions/textParser.js"
import { Info,Blur, PopUp } from '../components/elements/images.jsx'
export default function Image(){
    const images = data.entries.Images
    const blockElements = [<Info />, <Blur />, <PopUp />]
    let placement = 0
    const list = objectToArray(images).map(block =>{
        return <Entry key={block.id} entry={block} element={blockElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}