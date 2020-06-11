import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  animation: {
    width: 250,
    height: 250,
  },
  text: {
    fontFamily: 'Roboto_500Medium',
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 56,
    textAlign: "center",
    color: '#EA027C'
  },
  button: {
    backgroundColor: "#EA027C",
    width: 72,
    height: 72,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginTop: 120,
  },
})