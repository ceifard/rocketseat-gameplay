import React, { useState } from 'react';
import { 
    Image,
    Text, 
    View, 
    TextInput 
} from 'react-native';

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'

export default function Signin() {

    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <Image width={50} height={50} source={IllustrationImg} style={styles.image} />
            <View style={styles.content}>
                <Text styles={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
            </View>
        </View>
    );
}