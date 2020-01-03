import react from 'react'
import firebase from 'firebase'
import uuid from 'uuid'

let ordered = 'cvCreatedAt'
let desc = 'desc'

const Firebase = {
    uploadCv: cv => {
        const id = uuid.v4()
        const uploadData = {
        id: id,        
        body: cv.body,
        userHandle: cv.userHandle,
        createdAt: cv.createdAt
        }
        return firebase
        .firestore()
        .collection('cvs')
        .doc(id)
        .set(uploadData)
    },
    getCompletedOrders: order => {
      console.log(order)
      //console.log(order)
        return firebase
          .firestore()
          .collection('doneOrders')
          .get()
          .then(function(querySnapshot) {
            let cvs = querySnapshot.docs.map(doc => doc.data())
            return cvs
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
    },
   
    deleteItem: cv => {
      const idData = {
        id: cv.id
      }
      return firebase
        .firestore()
        .collection('cvs')
        .doc(id)
        .delete()
    },
    getCvs: order => {
      console.log(order)
      if (order != null)
      ordered = order
      if (ordered == 'cvTitle')
      desc = 'asc'
      else
      desc = 'desc'
      //console.log(order)
        return firebase
          .firestore()
          .collection('cvs')
          
          .get()
          .then(function(querySnapshot) {
            let cvs = querySnapshot.docs.map(doc => doc.data())
             console.log(cvs)
            return cvs
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
    },
    getMenu: order => {
      console.log(order)
      //console.log(order)
        return firebase
          .firestore()
          .collection('menu')
          .get()
          .then(function(querySnapshot) {
            let cvs = querySnapshot.docs.map(doc => doc.data())
            return cvs
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
    },
    getCv: () => {
      const id = "f3bbbd02-2a79-42fd-af1b-ed7ee665b50b"
      return firebase
          .firestore()
          .collection('cvs')
          .doc(id)
          .get()
          .then(function(querySnapshot) {
            let cvs = querySnapshot.docs.map(doc => doc.data())
             console.log(doc.data())
            return cvs
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error)
          })
    }
}

export default Firebase