const initialState={
    items: [
        { key: 1, game: "Mass Effect", price: 29, img: './images/masseffect.jpg' },
        { key: 2, game: "God of War 4", price: 39, img: './images/godofwar4.jpg' },
        { key: 3, game: "Fallen", price: 19, img: './images/fallen.jpg' },
        { key: 4, game: "Watch Dogs 2", price: 35, img: './images/watchdogs.jpg' },
        { key: 5, game: "Resident Evil", price: 24, img: './images/residentevil.jpg' },
        { key: 6, game: "Battle Field", price: 15, img: './images/battlefield.jpg' },
        { key: 7, game: "UFC", price: 21, img: './images/ufc.jpg' },
        { key: 8, game: "Okami", price: 20, img: './images/okami.jpg' },
        { key: 9, game: "Omen of sorrow", price: 21, img: './images/omenofsorrow.jpg' },
        { key: 10, game: "Last Guardian", price: 5, img: './images/lastguardian.jpg' },
      ],
      count: 0,
      price: 0,
      newCart: [],
      showCart: false

}
const reducer = (state=initialState, action)=>{
    return{
        items: state.items
    } 
   
}
export default reducer; 