import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5MDnf2nfmThwKxgOR3OInDBSVPG7CrwM",
    authDomain: "goal-coach-13d12.firebaseapp.com",
    databaseURL: "https://goal-coach-13d12.firebaseio.com",
    storageBucket: "goal-coach-13d12.appspot.com",
    messagingSenderId: "756142130913"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
  