import React from 'react';
import { 
    Image,
    Text, 
    View, 
    StatusBar,
} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon'

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'

export default function Signin() {

    // const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image  
                    width={50}
                    height={100}
                    source={IllustrationImg} 
                    style={styles.image} 
                    resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon 
                    title="Entrar com Discord" 
                    activeOpacity={0.7}
                />
            </View>
        </View>
    );
}