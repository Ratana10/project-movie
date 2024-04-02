export default defineEventHandler((event)=>{
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/movie/now_playing`,{
    method: "GET",
    headers: {
      'Authorization': `Bearer ${config.apiKey}`
    }
  });
})