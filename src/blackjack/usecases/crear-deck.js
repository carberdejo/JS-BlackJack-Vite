
import _ from 'underscore';

//export const miNombre = 'Atheltlan';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposdeCarta  Ejemplo : ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales  Ejempo : ['A','J','Q','K'];
 * @returns {Array<String>} esta funcion regresa u deck de cartas
 */
export const crearDeck = (tiposdeCarta, tiposEspeciales) => {

    if (!tiposdeCarta) throw new Error('TipodeCarta es obligatorio');
    if (tiposdeCarta.length === 0) throw new Error('TipodeCarta tiene que ser un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0)throw new Error('TipodeEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposdeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposdeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

//export default crearDeck;  EXPORTA POR DEFECTO