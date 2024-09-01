import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import useStore from './store';

function TodoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate('Exercises')}>
        <Text style={styles.bigButtonText}>Egzersizler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate('Cardio')}>
        <Text style={styles.bigButtonText}>Kardiyo</Text>
      </TouchableOpacity>
    </View>
  );
}

function ExerciseCategoryScreen({ route }) {
  const { category, type } = route.params;
  const [exercise, setExercise] = React.useState('');
  const addExercise = useStore(state => state.addExercise);
  const exercises = useStore(state => state.exercises[type][category]);

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder={`Yeni ${category} egzersizi`}
        value={exercise}
        onChangeText={setExercise}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => {
        addExercise(type, category, exercise);
        setExercise('');
      }}>
        <Text style={styles.addButtonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

function ExercisesScreen({ navigation }) {
  const categories = ['Göğüs', 'Sırt', 'Omuz', 'Bacak', 'Ön kol', 'Arka kol'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Egzersiz Kategorileri</Text>
      {categories.map(category => (
        <TouchableOpacity key={category} style={styles.categoryButton} onPress={() => navigation.navigate('ExerciseCategory', { category, type: 'strength' })}>
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

function CardioScreen({ navigation }) {
  const categories = ['Koşu', 'Yürüyüş', 'İp Atlama', 'Bisiklet', 'Diğer'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Kardiyo Kategorileri</Text>
      {categories.map(category => (
        <TouchableOpacity key={category} style={styles.categoryButton} onPress={() => navigation.navigate('ExerciseCategory', { category, type: 'cardio' })}>
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}


function ValuesScreen() {
	const [height, setHeight] = React.useState('');
	const [weight, setWeight] = React.useState('');
	const [age, setAge] = React.useState('');
  
	return (
	  <View style={styles.container}>
		<Text style={styles.headerText}>Kişisel Değerler</Text>
		<View style={styles.formContainer}>
		  <View style={styles.inputGroup}>
			<Text style={styles.label}>Boy (cm)</Text>
			<TextInput
			  style={styles.input}
			  placeholder="Örn: 175"
			  keyboardType="numeric"
			  value={height}
			  onChangeText={setHeight}
			/>
		  </View>
		  <View style={styles.inputGroup}>
			<Text style={styles.label}>Kilo (kg)</Text>
			<TextInput
			  style={styles.input}
			  placeholder="Örn: 70"
			  keyboardType="numeric"
			  value={weight}
			  onChangeText={setWeight}
			/>
		  </View>
		  <View style={styles.inputGroup}>
			<Text style={styles.label}>Yaş</Text>
			<TextInput
			  style={styles.input}
			  placeholder="Örn: 30"
			  keyboardType="numeric"
			  value={age}
			  onChangeText={setAge}
			/>
		  </View>
		</View>
	  </View>
	);
  }
  
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TodoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} />
      <Stack.Screen name="Cardio" component={CardioScreen} />
      <Stack.Screen name="ExerciseCategory" component={ExerciseCategoryScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
       <Tab.Navigator>
        <Tab.Screen name="Yapılacaklar" component={TodoStack} />
        <Tab.Screen name="Değerler" component={ValuesScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  bigButton: {
    backgroundColor: '#6200ea',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  bigButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
	fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  categoryButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#03dac5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  }
});

export default App;
