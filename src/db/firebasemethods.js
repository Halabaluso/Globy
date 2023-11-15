import { getDatabase, ref, push, set, equalTo,get , query, orderByChild, child, remove, update } from "firebase/database";

async function loadData(querystring){
    let data = null
    const dbRef = ref(getDatabase());
    await get(child(dbRef, querystring)).then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      } else {
        data = false
      }
    }).catch((error) => {
      data = false
    });

    return data
}

async function writeData(querystring, object){
    // Send data to the server
    let boolean = false
    const db = getDatabase();
    const postListRef = ref(db, querystring);
    const newPostRef = push(postListRef)
    console.log(newPostRef.key)
    await set(newPostRef, object)
    .then((data) => {
        boolean = true
    })
    .catch(() => {
      console.log("Pasa :D")
        boolean = false
    })
    return boolean
}

async function writeDataWithID(querystring, object){
  // Send data to the server
  let boolean = false
  const db = getDatabase();
  const postListRef = ref(db, querystring);
  const newPostRef = push(postListRef)
  await set(newPostRef, object)
  .then(() => {
      boolean = newPostRef.key
  })
  .catch(() => {
    console.log("Pasa :D")
      boolean = false
  })
  return boolean
}

async function updateData(querystring, object){
  // Send data to the server
  let boolean = false
  const db = getDatabase();
  const postListRef = ref(db, querystring);
  await set(postListRef, object)
  .then(() => {
      boolean = true
  })
  .catch(() => {
      boolean = false
  })
  return boolean
}

async function filterData(querystring, where, what){
        // Send data to the server
        const db = getDatabase()
        const topUserPostsRef = await get(query(ref(db, querystring ), orderByChild(where), equalTo(what)))
        return topUserPostsRef
}

async function removeData(querystring){
  let data = true
  const db = getDatabase()
  await remove(ref(db, querystring))
    .then(() => {
      data = true
    })
    .catch(() => {
      data = false
    })
  return data
}

export {
    writeData,
    filterData,
    loadData,
    removeData,
    updateData,
    writeDataWithID
}