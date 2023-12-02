import {Sumar} from '../../funcionalidades/calculadora';

test('sumar 1 + 2 debe ser igual a 3', () => {
    //Arrange
    const numero1 = 1
    const numero2 = 2

    //Act
    const resultado = Sumar(numero1, numero2)

    //Assert
    expect(resultado).toBe(3);
})

test('sumar 1 + 2 debe ser igual a 2 + 1', () => {
    //Arrange
    const numero1 = 1
    const numero2 = 2

    //Act
    const resultado1 = Sumar(numero1, numero2)
    const resultado2 = Sumar(numero2, numero1)

    //Assert
    expect(resultado1).toBe(resultado2);
})

//GWT
test('Dado la suma de 2 numeros, la suma de esos mismos numeros en cualquier orden debe ser la misma', () =>{
    //Arrange
    const numero1 = 1
    const numero2 = 2

    //Act
    const resultado1 = Sumar(numero1, numero2)
    const resultado2 = Sumar(numero2, numero1)

    //Assert
    expect(resultado1).toBe(resultado2);
})

test('intentar sumar un texto debe retorna la concatenacion del texto con el numero', () =>{
    expect(Sumar('a', 2)).toBe('a2');
})
;