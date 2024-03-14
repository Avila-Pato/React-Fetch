# Consumo de APIs en React


## Funcionamiento

El código utiliza dos funciones principales: getSuspender y fetchData.

- Función getSuspender
getSuspender toma una promesa como entrada y devuelve un objeto con un método read. Este método maneja tres estados: pendiente, éxito y error, permitiendo la suspensión mientras se espera la resolución de la promesa.

- Función fetchData
fetchData toma una URL como entrada y devuelve un objeto con un método read. Realiza una solicitud a la URL usando fetch, convierte la respuesta en formato JSON y crea un objeto suspensible utilizando getSuspender.
