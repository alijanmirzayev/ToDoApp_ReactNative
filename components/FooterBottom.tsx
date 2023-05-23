import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'

export default function FooterBottom() {

    let dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false);
    const [taskText, setTaskText] = useState('');

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleSubmitTask = () => {
        const id = Math.floor(Math.random() * 1000)
        let item = {
            id,
            text: taskText,
            status: false
        }
        dispatch({type: 'ADD', payload: item})
        console.log('Task Save:', taskText);

        // Modalı kapatın ve TextInput alanını temizleyin
        setModalVisible(false);
        setTaskText('');
    };


    return (
        <>
            <TouchableOpacity onPress={handleOpenModal} style={styles.button}>
                <View style={styles.buttonContent}>
                    <View style={styles.horizontalLine} />
                    <View style={styles.verticalLine} />
                </View>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder="To Do..."
                            placeholderTextColor='black'
                            value={taskText}
                            onChangeText={text => setTaskText(text)}
                        />

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitTask}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Other styles for the container
    },
    button: {
        position: 'absolute',
        bottom: 16, // Adjust the value as needed
        right: 16, // Adjust the value as needed
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#a956f7',
        justifyContent: 'center',
        alignItems: 'center',
        // Other styles for the button
    },
    buttonContent: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalLine: {
        position: 'absolute',
        width: 20,
        height: 2,
        backgroundColor: 'white',
    },
    verticalLine: {
        position: 'absolute',
        width: 2,
        height: 20,
        backgroundColor: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      contentContainer: {
        width: '80%',
        height: 300,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
      },
      closeButton: {
        position: 'absolute',
        top: -20,
        right: -10,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButtonText: {
        color: 'white',
        fontSize: 18,
      },
      input: {
        flex: 1,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        paddingHorizontal: 10,
        color: 'black'
      },
      submitButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      submitButtonText: {
        color: 'white',
        fontSize: 16,
      },
})