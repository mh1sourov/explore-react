export default function Single({people}){
    console.log(people);
    const {name, email} = people;
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>address: {people.address.street}</p>
            
            
        </div>
    )
}