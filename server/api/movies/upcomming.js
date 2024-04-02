export default defineEventHandler((event)=>{

  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/movie/upcoming`,{
    method: "GET",
    headers: {
      'Authorization': `Bearer ${config.apiKey}`
    }
  });
})