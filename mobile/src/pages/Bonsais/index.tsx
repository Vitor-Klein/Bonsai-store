import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList ,Image, Text, TouchableOpacity } from 'react-native'

import api from '../../services/api'
import styles from './styles'

interface Bonsai {
  id: Number
  specie: String
  age: String
  fertilization_time: String
  description: String
}

const Bonsais: React.FC = () => {
  const [bonsais, setBonsais] = useState<Bonsai[]>([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)

  const navigation = useNavigation()

  function navigateToDetail(id: number) {
    navigation.navigate('Detail', { bonsai_id: id })
  }

  useEffect(() => {
    api.get('bonsais', {

    }).then(response => {
      setBonsais(response.data)
    })
  }, [])
  return (
    <View style={styles.container}>
           <View style={styles.header}>
                
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
           </View>

           <Text style={styles.title}>Bem-Vindo!</Text>
           <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

           <FlatList 
                data={bonsais}
                style={styles.incidentList}
                keyExtractor={bonsai => String(bonsai.id)}
                onEndReachedThreshold={0.2}
                renderItem={({ item: bonsai }) => (
                    <View style={styles.incident}>
                   <Text style={styles.incidentProperty}>Specie:</Text>
                   <Text style={styles.incidentValue}>{bonsai.specie}</Text>

                   <Text style={styles.incidentProperty}>Idade:</Text>
                   <Text style={styles.incidentValue}>{bonsai.age}</Text>

                   <Text style={styles.incidentProperty}>Imagem:</Text>
                  

                   <TouchableOpacity 
                    style={styles.detailButton} 
                    onPress={() => navigateToDetail()}
                   >
                       <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                       <Feather name="arrow-right" size={16} color="#E02041" />
                   </TouchableOpacity>
               </View>
            )}
           />
        </View>
  );
}

export default Bonsais;