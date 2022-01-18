function fatchPokemon(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
    if (res.ok) {
      return res.json(); //оброботка ошибки с кастомным сообщением
    }

    return Promise.reject(new Error(`нет пакемона с именем ${name}`));
  });
}

const api = {
  fatchPokemon,
};

export default api;
