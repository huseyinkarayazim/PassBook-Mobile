import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import { CustomTextInput, CustomBtnStyle, Loading } from '../components';
import {
  Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  FlatList,
  RefreshControl
  
} from 'react-native';

import TitleWithDetails from '../components/TitleWithDetails'

const ViewScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

const deleteSelectedItem=(id)=>{
  const URL = "http://192.168.1.39:5000/v1/data";
  const params = { RecordId: id };
  console.log("PARAMS : ",params)
  axios.delete('http://192.168.1.39:5000/v1/data', { params })
 
    .then(response => {
      console.log('Resource deleted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error deleting resource:', error);
    });
}
const getData = () => {
  const URL = "http://192.168.1.39:5000/v1/data";
  let data = null;
  return axios({
    method: 'get',
    url: URL,
    responseType: 'json'
  }).then(function (response) {
    const result = response.data;
    if (response.status !== 200) {
      console.log("get method failed");
      return null;
    } else {

      data = result;

      return data;
    }
  })
    .catch(error => {
      console.log(error);
      return null; // Hata durumunda null döndürülebilir
    })
    .finally(function () {
      return data;
    });;

};
  const [processedData, setProcessedData] = useState([]);
  const [data, setData] = useState(processedData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const userAppData = await getData();
        const newData = userAppData.data.map(item => ({
          id: item.RecordId.toString(),
          applicationName:item.applicationName,
          email: item.email,
          username: item.username,
          password:item.password,
          applicationLink: item.applicationLink,
          RecordId: item.RecordId,
          Note: item.Note
        }));
        setProcessedData(newData);
       
      } catch (error) {
        console.log("ERROR : ->", error);
      }
    };

    fetchData();
    
  }, []);
  const onRefresh = React.useCallback(() => {
    
    setRefreshing(true);
    
    
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const handleSaveButtonPress = () => {
  
    navigation.navigate('Save');
  };
const  customRenderItem= ({ item }) => (
  <TouchableOpacity 
  onPress={() => handleSelectItem(item.id)}
      onLongPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
  >
   

  <View style={styles.customRenderItemStyle}>
    <Text>ApplicationName: {item.applicationName}</Text>
    <Text>Email: {item.email}</Text>
    <Text>Username: {item.username}</Text>
    <Text>Password: {item.password}</Text>
    <Text>ApplicationLink: {item.applicationLink}</Text>
    <Text>RecordId: {item.RecordId}</Text>
    <Text>Note: {item.Note}</Text>
  </View>
  </TouchableOpacity>
  )
//console.log(processedData);
const renderSectionHeader = (title) => (
  <View style={{ padding: 10, backgroundColor: 'lightblue' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
  </View>
);
const handleSelectItem = (id) => { 
  console.log("selected : ",id);
  setData((prevData) =>
    prevData.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    )
  );
};
  return  (
     <SafeAreaView style={styles.container}  >
     
       
      
      <CustomBtnStyle
        customPressedColor='lightblue'
        customNonPressedColor="lightgray"
        customPressedFont="normal"
        customNonPressedFont="italic"
        customTitle="Save"
        customOnPress={handleSaveButtonPress}
        customWidth='30%'
        
      />
       <FlatList 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }            
         data={processedData}
       //  ListHeaderComponent={renderSectionHeader("customRenderItem.ApplicationName")}
         renderItem={customRenderItem}       
         //keyExtractor={item => item.applicationName}
       />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Seçilen Öğe: {selectedItem ? selectedItem.applicationName : ''}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'blue', margin: 10 }}>Kapat</Text>
              
            </TouchableOpacity>            
            <TouchableOpacity onPress={() => { 
              setModalVisible(false);
             deleteSelectedItem(selectedItem.RecordId);}
           
             }>
              <Text style={{ color: 'red', margin: 10 }}>Sil</Text>
              
            </TouchableOpacity>

            </View>
        </View>
      </Modal>
     </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    borderWidth:1,
    padding:5,
    
  },
  customRenderItemStyle: { // main
    flex: 2,
    backgroundColor: 'pink',
    alignItems: 'left',
    justifyContent: 'left',    
    borderWidth:2
  },  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
export default ViewScreen
