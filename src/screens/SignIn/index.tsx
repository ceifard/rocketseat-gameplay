import React from 'react';
import { 
    Image,
    Text, 
    View, 
} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon'

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {

    // const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <Image  
                    width={50}
                    height={100}
                    source={IllustrationImg} 
                    style={styles.image} 
                    resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas
                    jogatinas
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