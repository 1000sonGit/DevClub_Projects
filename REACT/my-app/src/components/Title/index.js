import React from 'react'
import { H1 } from './styles'

// function Title({children}) {

//     return <H1>{children}</H1>
// }

// export default Title

function Title(props) {

    return <H1>{props.children}</H1>
}

export default Title