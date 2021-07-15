import React from 'react';
import { 
    Image,
    Text, 
    View, 
} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon'

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Home')
    }

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
                    onPress={handleSignIn}
                />
            </View>
        </View>
    );
}