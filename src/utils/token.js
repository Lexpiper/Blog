// set item in the local storage
export const setToken = async (name, item) => {
  try {
    await localStorage.setItem(name, item);
  } catch (err) {
    console.log(err.message);
  }
};

// get item in the local storage
export const getToken = async (name) => {
  try {
    let token = await localStorage.getItem(name);
    return token;
  } catch (err) {
    console.log(err.message);
  }
};

// delete item in the local storage
export const deleteToken = async (name) => {
  try {
    await localStorage.removeItem(name);
  } catch (err) {
    console.log(err.message);
  }
};
