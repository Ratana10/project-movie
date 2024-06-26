export default defineEventHandler((event)=>{
  const {page} = getQuery(event);

  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/movie/now_playing?page=${page}`,{
    method: "GET",
    headers: {
      'Authorization': `Bearer ${config.apiKey}`
    }
  });
})