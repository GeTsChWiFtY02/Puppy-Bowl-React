export async function fetchPlayers(){
    try{
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players");
        const data = await response.json();
        console.log("from the fetch players",data.data.players);
        return data.data.players;
    }catch(e){
        console.error(e)
    };
};


export async function fetchSinglePlayer(playerId){
try{
const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/" + playerId)
const data = await response.json();
console.log( "from the fetch single player",data.data.player);
return data.data.player;
}catch(e){
console.error(e)
}
}


export const handleRemove = async (id) =>{
if(window.confirm("Do you want to remove player?")){
try{
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/" + id,
    {
        method: 'DELETE',
    })
    const result = await response.json();
    console.log(result)
}catch(e){
    console.error(e)
}
}
}


export async function postNewPlayer({id,name :playerName,breed,imageUrl,status}){
try{
   
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id,name:playerName,breed,imageUrl,status}),
    });
    const result= await response.json();
    console.log( "from the player form",result.data);
    return result.data
}catch(e){
    console.error(e);
}
}