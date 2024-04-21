// import { auth, db } from "./firebase"; // Припустимо, що ви імпортуєте файли firebase.js з вашими налаштуваннями Firebase

// const handleAddObject = () => {
//   const user = auth.currentUser; // Отримати залогованого користувача

//   if (user) {
//     // Додавання об'єкта до колекції
//     db.collection("users")
//       .doc(user.uid)
//       .collection("objects")
//       .add({
//         // ваші дані для додавання
//       })
//       .then((docRef) => {
//         console.log("Object added with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding object: ", error);
//       });
//   } else {
//     console.error("User is not logged in!");
//   }
// };
