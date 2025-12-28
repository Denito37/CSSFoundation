import Github from '/github-mark.svg'
export default function Footer(){

    return(
        <footer className=" flex items-center justify-center p-4 sm:p-8 mx-auto">
            <a className=" p-2" href="https://github.com/Denito37/CSSFoundation" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="github puplic repository" width={40} />
            </a>
        </footer>
    )
}