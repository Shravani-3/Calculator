import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input); // Caution: Avoid eval in production.
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['AC', '⌫', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['ⁿ√', '0', '.', '='],
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculator</Text>
      </View>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  button === 'AC' && styles.acButton,
                  button === '⌫' && styles.backButton,
                  button === '=' && styles.equalsButton,
                ]}
                onPress={() => handlePress(button)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    button === 'AC' && styles.acButtonText,
                    button === '=' && styles.equalsButtonText,
                  ]}
                >
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Shravani Pardeshi</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background
  },
  header: {
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#000',
  },
  input: {
    fontSize: 40,
    color: '#fff',
  },
  result: {
    fontSize: 30,
    color: 'gray',
    marginTop: 10,
  },
  buttonsContainer: {
    flex: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35, // Fully circular buttons
    backgroundColor: '#333', // Default button color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  acButton: {
    backgroundColor: '#f44336', // Red for AC
  },
  acButtonText: {
    color: '#fff',
  },
  backButton: {
    backgroundColor: '#ff9800', // Orange for Backspace
  },
  equalsButton: {
    backgroundColor: '#4CAF50', // Green for Equals
  },
  equalsButtonText: {
    color: '#fff',
  },
  footer: {
    padding: 10,
    backgroundColor: '#222', // Dark gray footer background
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default App;
