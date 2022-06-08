
export const groupByYear = (objectArray) => {
  let group = objectArray.reduce(function (acc, obj) {
    const date = obj['date']
    const year = new Date(date).getFullYear();
    if (!acc["ALL"]) {
      acc["ALL"] = 0;
    }
    if (!acc[year]) {
      acc[year] = 0;
    }
    acc["ALL"] = acc["ALL"] +1;
    acc[year] = acc[year] +1;

    return acc;
  }, {});
  
  group = Object.entries(group);
  group = group.map( item => { return {name: item[0] , count: item[1] } })
  group.sort( (a, b) => {
    if(a.name < b.name) return 1;
    if(a.name > b.name) return -1;
    if(a.name === b.name) return 0;
    else return 1;
  })
  return group;
}



export const countByGenre = ( userGenres , bookJournals ) => {
  let genres = [...userGenres]
  const map = new Map();
  
  genres.map(genre => {
    map.set( genre._id ,0)
  })

  bookJournals.map(bookJournal => { 
    if(bookJournal.genre){
      const genreId = bookJournal.genre
      if(map.has(genreId))
        map.set(genreId, map.get(genreId)+1)
      }
    }
  )
  genres = genres.map( genre => { return { ...genre, ...{ count : map.get(genre._id) } }} )
  const all = {name:"ALL", count: bookJournals.length , _id: 'all'}
  genres = [ all, ...genres]
  return genres
}

export const filterRule = {
  'genre' : (items, genre) => {
    return items.filter( item => genre._id === 'all' || item.genre === genre._id )
  },
  'year' : (items, year) => {
    return items.filter( item => year.name === 'ALL' || new Date(item.date).getFullYear() === parseInt(year.name) )
  },
  'tags' : (items, tags) => {
    return items.filter( item => tags.length === 0  || item.tags.filter( tag => tags.includes(tag)).length == tags.length)
  },
  'sort': (items, sortBy) => {
    const value = sortBy.value
    items.sort( (a, b) => {
      if(a[value]< b[value]) return 1;
      if(a[value]> b[value]) return -1;
      if(a[value]=== b[value]) return 0;
      else return 1;
    })
    return items;
  }
}  
