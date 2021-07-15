import React from "react";
import {
    Text,
    Image,
    ScrollView,
} from 'react-native'
//respeita o contexto de android/ios. melhor que o tbop
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles"

type Props = {
    categorySelected: string,
    setCategory: (categoryId: string) => void
}

export function CategorySelect({ 
    categorySelected,
    setCategory
 } : Props) {
    return(
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
        {
            categories.map(category =>
                (<Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                />)
            )
        }
        </ScrollView>
    )
}