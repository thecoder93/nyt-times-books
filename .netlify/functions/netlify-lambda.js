exports.handler = function(event, context, callback) {
    const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}

    const NYT_APP_API_KEY = process.env.REACT_APP_NYT_APP_API_KEY  
    const BASE_URL = process.env.REACT_APP_BASE_URL_API_NYT  
    
    const API_URL = `${BASE_URL}/lists/overview.json?api-key=${NYT_APP_API_KEY}`
  try {
    let response = await fetch(API_URL, 
  {
   method: event.httpMethod,
   body: event.body
  })
   let data = await response.json()
   await pass(data)
 } catch(err) {
     let error = {
       statusCode: err.statusCode || 500,
       body: JSON.stringify({error: err.message})
 }
  await pass(error)
 }
}