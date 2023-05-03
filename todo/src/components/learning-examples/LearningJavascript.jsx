const person = {
    name : "Ranga",
    address : {
        line1 : "Baker Street",
        city : "London",
        number : "123",
        country : "UK"
    },
    profiles : ['twitter', 'linkedin', 'instagram'],

    printProfile: () => {
        person.profiles.map(
            (profile) => console.log(profile)
        )
        console.log(person.profiles[0])
    }
}

export default function LearningJavascript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}