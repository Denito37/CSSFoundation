import Entry from "../components/entry"
import data from '../../entries.json'
import { Highlight, Inverse, Bold, Underline, Border } from '../components/elements/tabs.jsx'
import { objectToArray } from "../functions/textParser.js"
export default function Tab(){
    const tabs = data.entries.Tabs
    const tabElements = [<Highlight />, <Inverse />, <Bold />, <Underline />, <Border />]
    let placement = 0
    const list = objectToArray(tabs).map(tab =>{
        return <Entry key={tab.id} entry={tab} element={tabElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}