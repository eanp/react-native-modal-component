import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
} from 'react-native'
import { CHARCOAL, LIGHT_CHARCOAL, LIGHT_GREEN } from '../Utils/Color'


const ModalError = ({ message, isVisible, toggle }) => {

    const _renderMessage = () => {
        if (!!message) {
            if (typeof message === 'string') {
                return message
            } else if (typeof message === 'object') {
                return Object.values(message).join("\n")
            } else if (Array.isArray(message)) {
                return message.join("\n")
            }
        } else return null
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            // visible={true}
            visible={isVisible}
            onRequestClose={toggle}
        >
            <View style={{
                height: '100%',
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    height: '100%',
                    width: '100%',
                    shadowColor: "#000",
                    elevation: 5,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: '90%',
                        height: 260,
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        borderRadius: 8,
                        marginHorizontal: 20,
                        marginVertical: 20,
                        paddingTop: 25,
                        paddingHorizontal: 15,
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: CHARCOAL,
                            fontFamily: 'Poppins-Regular',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 30
                        }}>
                            Info
                  </Text>
                        <Text style={{
                            color: LIGHT_CHARCOAL,
                            fontFamily: 'Poppins-Regular',
                            fontSize: 16,
                            textAlign: 'center',
                        }}>
                            {_renderMessage()}
                        </Text>

                        <TouchableOpacity
                            onPress={toggle}
                            style={{
                                height: 45,
                                width: '80%',
                                backgroundColor: LIGHT_GREEN,
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                bottom: 20,
                                position: 'absolute'

                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontFamily: 'Poppins-Regular',
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }} >OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>


    )

}

