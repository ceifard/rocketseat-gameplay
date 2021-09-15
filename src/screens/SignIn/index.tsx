import React, { useContext } from 'react';
import { 
    Image,
    Text, 
    View, 
} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon'
import { Background } from '../../components/Background';

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function SignIn() {

    const navigation = useNavigation()

    const {user} = useAuth()
    console.log(user);

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <Background>
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
        </Background>
    );
}