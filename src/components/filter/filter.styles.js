import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  listItem: {
    flex: 0.5,
    margin: 5,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    fontSize: 30,
    color: 'rgb(255, 255, 255)'
  },
  listWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  filterWrapper: {
    position: 'relative',
    width: '100%',
    flex: 1,
    backgroundColor: 'rgb(255,255,255)'
  },
  searchCallToAction: {
    flex: 0.3,
    alignSelf: 'center',
    backgroundColor: 'rgb(136, 233, 172)',
    marginBottom: 25
  },
  searchCallToActionText: {
    color: 'rgb(19, 99, 49)',
    fontSize: 25,
    padding: 20
  },
  slider: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 30
  }
})

export const filterListStyle = StyleSheet.create({
  wrapper: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'
  }
})