import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

export function GuildIcon() {
    const uri = 'https://img.icons8.com/fluent/452/discord-new-logo.png'

    return (
        <View style={styles.container}>
            {
                <DiscordSvg
                    width={40}
                    height={40}
                />
            }
        </View>
    )

}