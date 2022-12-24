export const setToken = async (name , item) => { 
    try {
        await localStorage.setItem(name,item)
        
    } catch (err) {
        console.log(err,message)
    }
}
export const getToken = async (name) => { 
    try {
       let token = await localStorage.getItem(name);
       return token
        
    } catch (err) {
        console.log(err.message)
    }
}

export const delToken = async (name) => { 
    try {
        await localStorage.removeItem(name);
       return token
        
    } catch (err) {
        console.log(err)
    }
}

