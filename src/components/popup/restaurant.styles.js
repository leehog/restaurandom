import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    width: '92%',
    height: '94%',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    margin: '4%',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imgWrapper: {
    flex: 0.5,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000000
  },
  infoWrapper: {
    width: '100%',
    padding: 15
  },
  title: {
    fontSize: 27,
    padding: 5
  },
  location: {
    fontSize: 20,
    padding: 5
  },
  infoText: {
    fontSize: 18,
    padding: 5
  },
  mapButton: {
    alignSelf: 'center',
    backgroundColor: 'rgb(136, 233, 172)',
    borderRadius: 100,
    marginTop: -45,
    marginRight: 20,
    height: 90,
    padding: 10,
    alignSelf: 'flex-end'
  },
  mapButtonText: {
    color: 'rgb(19, 99, 49)',
    fontSize: 15
  }
})