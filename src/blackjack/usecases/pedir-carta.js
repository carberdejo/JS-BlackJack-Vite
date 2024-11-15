/**
 * 
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 || !deck ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}