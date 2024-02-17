import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import items from "./items"

const Menu = () => {

    return (
        <View style={styles.menuItems}>

            {items.map((item, i) => {
                console.log({ i })
                return (
                    <TouchableOpacity key={i}>

                        <View Key={item.id} style={styles.menuRow}>
                            <View style={styles.menuRow}>

                               <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
                            <View>
                                <Text style={styles.menuText}>{item.title}</Text>
                                {item.subTitle && (
                                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                                )}
                            </View>  
                            </View>
                           
                            <FontAwesomeIcon style={styles.arrowIcon} icon={faCircleChevronRight} size={24} />
                        </View>

                    </TouchableOpacity>

                )
            })}
               
           
            
        </View>
    )
}

export default Menu;