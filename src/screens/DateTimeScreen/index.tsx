import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Platform, DeviceEventEmitter } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import styles from './styles';
import { getLocales } from 'react-native-localize';
import 'moment/locale/pt-br';

const DateTimePickerScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState(new Date());
  const [chosenTime, setChosenTime] = useState(new Date());
  const [duration, setDuration] = useState(30); // Inicializado com 30 minutos
  const navigation = useNavigation();
  const route = useRoute();

  const durations = [
    { label: '30 minutos', value: 30 },
    { label: '40 minutos', value: 40 },
    { label: '50 minutos', value: 50 },
    { label: '1 hora', value: 60 },
    { label: '1 hora e 30 minutos', value: 90 },
    { label: '2 horas', value: 120 },
    { label: '2 horas e 30 minutos', value: 150 },
    { label: '3 horas', value: 180 },
    { label: '3 horas e 30 minutos', value: 210 },
    { label: '4 horas', value: 240 },
  ];

  useEffect(() => {
    // Adiciona um ouvinte para obter configurações de localização quando estiver disponível
    const localeListener = DeviceEventEmitter.addListener(
      'onLocalizationChange',
      updateMomentLocale
    );

    // Obtém inicialmente as configurações de localização
    updateMomentLocale();

    // Remove o ouvinte ao desmontar o componente
    return () => {
      localeListener.remove();
    };
  }, []);

  const updateMomentLocale = async () => {
    const locales = await getLocales();
    moment.locale(locales[0].languageTag); // Define o idioma do moment com base nas configurações de localização
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    if (date) {
      setChosenDate(date);
    }
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    if (time) {
      // Obtém a diferença de minutos entre o UTC e o fuso horário local
      const offsetInMinutes = new Date().getTimezoneOffset();

      // Adiciona a diferença para ajustar a hora para o fuso horário local
      const adjustedTime = new Date(time.getTime() + offsetInMinutes * 60000);

      setChosenTime(adjustedTime);
    }
    hideTimePicker();
  };

  const navigateBack = () => {
    navigation.navigate('LocationSearch' as never);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={showDatePicker}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Escolher Data </Text>
        <FontAwesome
          name="calendar"
          size={20}
        />
      </Pressable>

      <Pressable
        onPress={showTimePicker}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Escolher Hora </Text>
        <FontAwesome
          name="clock-o"
          size={20}
        />
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={chosenDate}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        locale={'pt-br'}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        date={chosenTime}
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        locale={'pt-br'}
      />

      {chosenDate !== '' && (
        <View style={styles.row}>
          <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Data Escolhida:</Text>
          <Text>{moment(chosenDate).format('LL')}</Text>
        </View>
      )}

      {chosenTime !== '' && (
        <View style={styles.row}>
          <Text style={{ marginTop: 5, fontWeight: 'bold' }}>Hora Escolhida:</Text>
          <Text>{moment(chosenTime).format('LT')}</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={{ fontWeight: 'bold' }}>Duração:</Text>
        <Picker
          selectedValue={duration}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setDuration(itemValue)}
        >
          {durations.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Pressable
          style={styles.navButton}
          onPress={navigateBack}
        >
          <Entypo
            name={'back'}
            size={30}
          />
        </Pressable>
        <Pressable
          style={styles.navButton}
          onPress={() => {
            navigation.navigate('VehiclesScreen', {
              viewport: route.params?.viewport,
              date: chosenDate,
              time: chosenTime,
              duration: duration,
            });
          }}
        >
          <Entypo
            name={'check'}
            size={30}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default DateTimePickerScreen;
