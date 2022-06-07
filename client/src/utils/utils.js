import {getItem} from "./localStorage.js"
export const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const getParams  = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
    }));
  };
export const getParameterByName = name => {

    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),

    results = regex.exec(location.search);

    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}

export const getTagName = tagId => {
  const {tags} = getItem('user')
  const tag = tags.find( tag =>  tagId === tag._id );
  return tag.name;
}