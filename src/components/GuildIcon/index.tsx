import React from "react";
import {
    Image,
} from 'react-native'

import { styles } from "./styles"


export function GuildIcon({ ...rest }) {
    const uri = 'https://img.icons8.com/fluent/452/discord-new-logo.png'
    return(
        <Image 
            style={styles.image}
            source={{ uri }}
            resizeMode="cover"
        />
    )
}