import React from "react";
import {
    Text,
} from 'react-native'
//respeita o contexto de android/ios. melhor que o tbop
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles"

type Props = RectButtonProps & {
    title: string;
    // title?: string; //não obrigatorio
}

export function Button({ title, ...rest } : Props) {
    return(
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    )
}