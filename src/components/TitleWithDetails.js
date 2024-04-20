import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Öğrenci Detay bileşeni
const ApplicationDetail = ({ data }) => (
  <View style={{ marginVertical: 5 }}>
    <Text>{data.applicationName}</Text>
    <Text>{data.email}</Text>
    <Text>{data.username}</Text>
    <Text>{data.applicationLink}</Text>
    <Text>{data.surname}</Text>
    <Text>{data.RecordId}</Text>
    <Text>{data.Note}</Text>  
  </View>
);

// Başlık ve altındaki öğrenci detaylarını gösteren bileşen
const TitleWithDetails = ({data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity onPress={toggleOpen}>
        <Text style={{ fontWeight: 'bold' }}>{data.applicationName}</Text>
      </TouchableOpacity>
      {isOpen &&(_=> (
        <ApplicationDetail data />
      ))}
    </View>
  );
};

export default TitleWithDetails;
