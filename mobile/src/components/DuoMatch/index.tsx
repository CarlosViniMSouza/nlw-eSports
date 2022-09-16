import React, { useState } from 'react';

import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

import { Heading } from '../Heading';

import * as Clipboard from 'expo-clipboard';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
    const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copied!', 'User copied for you past on Discord')
    setIsCopping(false);  
  }


  return (
    <Modal
        animationType='fade'
        transparent
        statusBarTranslucent
        {...rest}
    >
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.closeIcon}
                    onPress={onClose}
                >
                    <MaterialIcons
                        name='close'
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    >
                    </MaterialIcons>
                </TouchableOpacity>

                <CheckCircle
                    size={64}
                    color={THEME.COLORS.CAPTION_500}
                    weight="bold"
                />

                <Heading
                    title='Lets Play'
                    subtitle='Now start the game!'
                    style={{ alignItems: 'center', marginTop: 24}}
                />

                <Text style={styles.label}>
                    Add on Discord
                </Text>

                <TouchableOpacity
                    style={styles.discordButton}
                    onPress={handleCopyDiscordToClipboard}
                    disabled={isCopping}
                >
                    <Text style={styles.container}>
                        {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    </Modal>
  );
}