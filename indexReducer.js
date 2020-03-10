
const initialState = {}

const reducer = (prevState = initialState, action) => {
  if (action.type === 'ADD_DATA') {
    return { ...prevState, action }
  } 
  
  return prevState
}

export default reducer