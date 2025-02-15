const favoriteCountries = [];

const getData = () => {
  if (!localStorage.getItem('countries')) {
    localStorage.setItem('countries', JSON.stringify(favoriteCountries));
  }

  const likedCountries = JSON.parse(localStorage.getItem('countries'));
  return likedCountries;
};

const updateData = country => {
  let likedCountries = getData();
  const countrySet = new Set(likedCountries);

  if (countrySet.has(country)) {
    countrySet.delete(country);
  } else {
    countrySet.add(country);
  }

  likedCountries = Array.from(countrySet);
  localStorage.setItem('countries', JSON.stringify(likedCountries));
};

export { getData, updateData };
