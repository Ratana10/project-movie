export default defineEventHandler((event)=>{
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/movie/popular`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`
    }
  })
})