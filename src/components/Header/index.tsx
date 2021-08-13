import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles"

type Props = {
    title: string,
    action?: ReactNode
    subtitle: string;
}

export function Header({ 
    title,
    action
 } : Props) {
     const { secondary100, secondary40, heading } = theme.colors;
    return(
        <LinearGradient
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text>
                
            </Text>

        </LinearGradient>
    )
}