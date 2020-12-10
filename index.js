import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
} from 'react-native'
import Modal from './Component/classModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MessageModal: false,
            MessageModalText: '',
        }
    }
    toggleModal = () => this.setState({ MessageModal: !this.state.MessageModal });

    function(getData) {
        if (getData) {
            this.toggleModal()
            this.setState({
                MessageModalText: getData.message,
            });
        }
    }

    render() {
        return (
            <View>
                {/* your code */}
                <ModalError
                    isVisible={this.state.MessageModal}
                    message={this.state.MessageModalText}
                    toggle={this.toggleModal}
                />
            </View>
        )
    }

}