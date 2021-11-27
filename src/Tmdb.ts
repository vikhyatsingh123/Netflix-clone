

const API_KEY = 'e2efa7a08a4fe36bdb6d34acdb8cebb7';
const API_BASE = 'https://api.themoviedb.org/3';



const basicFecth = async (endpoint:string)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



 export default{
    getHomeList: async () =>{
        return [
          {
            slug: "originals",
            title: "Netflix Originals",
            items: await basicFecth(
              `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "trending",
            title: "Recommended for you",
            items: await basicFecth(
              `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "toprated",
            title: "On the rise",
            items: await basicFecth(
              `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "action",
            title: "Action",
            items: await basicFecth(
              `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "comedy",
            title: "Comedy",
            items: await basicFecth(
              `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "horror",
            title: "Horror",
            items: await basicFecth(
              `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "romance",
            title: "Romance",
            items: await basicFecth(
              `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "documentary",
            title: "Documentaries",
            items: await basicFecth(
              `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
            ),
          },
        ];
       
    },
    
    getMovieInfo: async(movieId: number, type: string) =>{
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFecth(`/movie/${movieId}?language=en-US&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=en-US&api_key=${API_KEY}`);
                    break;
                default:
                    info = {};
            }
        }

        return info;
    }

}