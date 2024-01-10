/*interface Style {
    color: string;
    isBg: boolean;
    word: string
}

export const Button = ( { color, isBg, word } : Style) => {

    let style = 'transition px-4 py-2 rounded font-bold '

    let addBg = `border-2 border-${ getColor(color) } text-${ getColor(color) }`
    if( isBg ) {
        addBg = `bg-${ getColor(color) }`
    }

    style += addBg

    return (
        <>
            <button className={ style }>{ word }</button>
        </>
    )

}

function getColor(color: String) {
    let addColor;
    switch(color) {
        case 'primary': 
            addColor = 'blue-600' 
            break;
        case 'secondary':
            addColor = 'gray-400' 
            break;
        case 'success':
            addColor = 'green-500' 
            break;
        case 'danger':
            addColor = 'red-600' 
            break;
        case 'warning':
            addColor = 'yellow-300'  
            break;
        default:
            addColor = ''
    }

    return addColor;
} */