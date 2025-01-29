
export const RegisterUser = async (user, pwd, setAccountCreated) => {
    try {
        const res = await fetch ('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user, pwd}),
        });

        const data = res.json()

        if (!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        if(!res){
            console.log(data)
            return
        }

        console.log(data)

        setAccountCreated(true)

    } catch (error) {
        console.error(error);
    }
}