export const getCategory = (category) => {
  switch (category) {
    case 'popular':
      return 'Popular'
    case 'top_rated':
      return 'Top Rated'
    case 'now_playing':
      return 'Now Playing'
    case 'on_the_air':
      return 'On the Air'
    default:
      return 'Popular'
  }
}