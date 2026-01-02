const objectToArray = (object) =>{
        let array = []
        for(let i = 0; i< Object.keys(object).length; i++){
            if(Object.keys(object[i]).length != 0)
                array.push(object[i])
        }
        return array
    }

const formatCode = (code) =>{
    let formatted = String(code)
    
    // Remove excessive whitespace
    formatted = formatted.trim().replace(/\s+/g, ' ')
    
    // Add newlines after opening braces and properly indent
    formatted = formatted.replace(/\{\s*/g, ' {\n  ')
    
    // Add newlines after semicolons
    formatted = formatted.replace(/;\s*/g, ';\n  ')
    
    // Add newlines before closing braces and remove excess indentation
    formatted = formatted.replace(/\s*\}/g, '\n}')
    
    // Clean up multiple blank lines
    formatted = formatted.replace(/\n\s*\n/g, '\n')
    
    return formatted
}
export {objectToArray, formatCode}