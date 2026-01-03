import { formatCode } from '../functions/textParser'
export default function Entry({entry, element}){
    return(
        <article className="p-4 my-6 mx-auto grid justify-center">
            {
            entry.intro && 
            <p className=" mx-auto px-4 my-6 first-letter:text-5xl">
                {entry.intro}
            </p> 
            }
            <h2 className="text-center md:text-left font-bold p-4">
                {entry.title}
            </h2>
            <div className=" grid md:grid-cols-3 text-center md:text-center py-4">
                <div className="justify-self-center self-center">
                    {element}
                </div>
                <p className="p-4 md:col-span-2">
                    {entry.description}
                </p>
            </div>
            <code className='justify-self-center'>
                <pre className="scrollbar-none relative md:my-4 py-4 px-8 mx-4 bg-slate-800 text-slate-50 border-2 rounded-xl max-w-[80vw] sm:w-full md:max-w-3xl overflow-scroll">
                    {formatCode(entry.code)}
                </pre>
            </code>
                <button 
                className='p-2 my-1 w-fit mx-auto
                            font-semibold text-slate-50 bg-slate-700 
                            outline-slate-50 outline outline-1 rounded-lg
                            hover:outline-slate-700  hover:bg-slate-50 hover:text-slate-700 transition-colors' 
                onClick={() => {navigator.clipboard.writeText(formatCode(entry.code))}}>
                    COPY
                </button>
        </article>
    )
}