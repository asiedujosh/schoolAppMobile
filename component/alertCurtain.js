// OverlayComponent.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AlertCurtain = ({mode}) => {
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={mode[0]}
        onRequestClose={() => mode[1](false)}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => mode[1](false)}>
          <View style={styles.overlayContent}>
            <Text style={styles.title}>Notice</Text>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                You have already subscribed to this or similar package
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  overlayContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000000',
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    color: '#000000',
  },
});

export default AlertCurtain;
