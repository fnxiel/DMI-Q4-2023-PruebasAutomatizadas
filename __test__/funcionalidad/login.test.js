import {Login} from '../../funcionalidades/login';

//Arrange
const usuarioCorrecto = "usuario"
const passwordCorrecto = "password1234567890"

test('Usuario y contraseña son correctos', () => {
    //Arrange

    //Act
    const resultado = Login(usuarioCorrecto, passwordCorrecto)

    //Assert
    expect(resultado).toBe(true);
})

test('Usuario y/o contraseña es incorrecto', () => {
    //Arrange
    const usuario = "incorrecto"
    const password = "incorrecto"

    //Act
    const resultado1 = Login(usuarioCorrecto, password)
    const resultado2 = Login(usuario, passwordCorrecto)
    const resultado3 = Login(usuario, password)

    //Assert
    expect(resultado1).toBe(false);
    expect(resultado2).toBe(false);
    expect(resultado3).toBe(false);
})
