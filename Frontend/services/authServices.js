import Cookies from 'js-cookie'

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

export const LoginUser = async (userData) => {

    try {
        const res = await fetch ('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await res.json()

        if(!res.ok){
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${data.message || "Unknown error"}`);
        }

        console.log("Login Succesfully", data)

        // setLogIn(true);

        const token = data.token;

        Cookies.set('token', token, { expires: 7 });
        Cookies.set('user', data.user, {expires: 7});

        return true;

    }
    catch (error) {
        console.error(error);
        return false;
    }
}