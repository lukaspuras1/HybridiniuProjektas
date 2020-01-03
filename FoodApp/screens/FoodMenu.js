import React, { Component } from 'react'
import { Image, View, StyleSheet, ActivityIndicator, Picker } from 'react-native'
import { Text, Layout, withStyles, List,Input } from 'react-native-ui-kitten'
import { withFirebaseHOC } from '../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'


class _Feed extends Component {
   
  state = { DATA: null,
     isRefreshing: false,
     body: '',
     userHandle: '',
     createdAt: ''

     }
  componentDidMount() {
    this.fetchCvs()
  }
  onChangeTitle = userHandle => {
    this.setState({ userHandle })
  }
  
  onChangeSalary = userHandle => {
    this.setState({ userHandle })
  }
  handleSubmit (event, item) {
    
    console.log(item);
    const cv = {
        body: item.foodName,
        userHandle: this.state.userHandle,
        createdAt: new Date().toISOString()
    }
    this.props.firebase.uploadCv(cv);
}

  fetchCvs = async () => {
    try {
      //const cvs = await this.props.firebase.getCv()
      const cvs = await this.props.firebase.getMenu()
      //console.log(cvs)
      this.setState({ DATA: cvs, isRefreshing: false })
    } catch (e) {
      console.error(e)
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.fetchCvs()
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  onOrderChange = itemValue => {
    const order = itemValue
    console.log(order)
    this.props.firebase.getCvs(order)
  }
  
  render() {
    
    const renderItem = ({ item }) => (  
         
      <View style={this.props.themedStyle.card}>
        <View style={this.props.themedStyle.cardHeader}>
           <TouchableOpacity onPress={(e) =>{this.handleSubmit(e,item)} }>
               
               
          <Text category='s1' style={this.props.themedStyle.cardTitle}>
            {item.foodName}
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    
    )
    if (this.state.DATA != null) {
      return (
        <Layout style={{ flex: 1 }}>
          <View
            style={{
              marginTop: 60,
              borderBottomWidth: StyleSheet.hairlineWidth,
              alignItems: 'center'
            }}>
            <Text style={this.props.themedStyle.header}> Food Menu </Text>
            <View style={{ marginTop:10 , alignItems: 'center' }}>
    <Text category='h4'>Enter name</Text>
    <Input
      placeholder=''
      style={{ margin: 20 }}
      value={this.state.userHandle}
      onChangeText={userHandle => this.onChangeTitle(userHandle)}
    />
    </View>
          </View>
          <List
            style={this.props.themedStyle.container}
            data={this.state.DATA}
            renderItem={renderItem}
            keyExtractor={this.state.DATA.id}
            refreshing={this.state.isRefreshing}
            onRefresh={() => this.onRefresh()}
          />
        </Layout>
      )
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    padding: 10
  }
}) 

export default Feed = withFirebaseHOC(
  withStyles(_Feed, theme => ({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    card: {
      backgroundColor: theme['color-basic-100'],
      marginBottom: 25,
      padding: 10
    },
    cardImage: {
      width: '100%',
      height: 300
    },
    cardHeader: {
      padding: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cardTitle: {
      fontSize: 24,
      padding: 10,
      color: theme['color-basic-1000']
    },
    cardDescription: {
      fontSize: 14
    },
    header: {
      fontSize: 28,
      padding: 20
    },
    cardSalary: {
      fontSize: 12,
      color: 'red'
    },

  }))
)