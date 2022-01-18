import { ImSpinner } from 'react-icons/im';
import './style.scss';
// import pendingImage from './pending.png';

export default function PokemonPedingView({ pokemonName }) {
  //   const pokemon = {
  //     name: pokemonName,
  //     sprites: {
  //       other: {
  //         'official-artwork': {
  //           //   front_default: pandingImage,
  //         },
  //       },
  //     },
  //     stats: [],
  //   };

  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className="icon-spin" />
        загружаю...
      </div>
    </div>
  );
}
