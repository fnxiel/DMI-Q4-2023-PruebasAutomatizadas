const USUARIO = "usuario"
const PASSWORD = "password1234567890"
export function Login(usuario, password){
    return (usuario === USUARIO && password === PASSWORD)
}