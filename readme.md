cuando comence el archivo, no tenia por donde empezar

1.Declaro el test  -> sentencia:test

2.Describí el test. Pero me di cuenta que el test hace referencia a  una ruta. Ruta que no tengo declarada, entonce la declare (BASE_URL)

3.Al seguir declarando la descripcion del test, me di cuenta que tampoco tengo el body, para pasarle al metodo http POST. Entonces lo declaro.

4.Creo la funcion async para pasar como argumento del test.

5. Creo la respuesta del servidor. Para ello trabajare con supertest, que lo importo como (request)

6. Supertest necesita de la aplicacion de express. Entonces importo la (app)

