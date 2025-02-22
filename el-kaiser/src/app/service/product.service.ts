import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
    private products: Product[] = [ 
        {
            id: 1,
            title: 'Baraja Francesa',
            category: 'Juegos de Cartas',
            description: 'Baraja francesa de 52 cartas',
            description1: 'Descubre la versatilidad y elegancia de la baraja francesa, un elemento esencial para cualquier amante de los juegos de cartas. Perfecta para una amplia variedad de juegos, esta baraja es ideal para todas las edades y ocasiones.',
            instrucciones: 'La baraja francesa es increíblemente versátil y se puede utilizar para jugar una amplia variedad de juegos como Poker, Blackjack, Bridge, Rummy, Solitaire y muchos más. Las reglas específicas varían según el juego, pero la diversión y el desafío están garantizados.',
            imageUrl: '../../../assets/images/francesa.jpg',
            normalPrice: 3000,
            offerPrice: 2500
        },
        {
            id:2,
            title: 'Baraja Española',
            category: 'Juegos de Cartas',
            description: 'Baraja española de 40 cartas',
            description1: 'Descubre la tradición y la diversión de la baraja española, un elemento esencial para cualquier amante de los juegos de cartas. Perfecta para una amplia variedad de juegos, esta baraja es ideal para todas las edades y ocasiones.',
            instrucciones: 'La baraja española es increíblemente versátil y se puede utilizar para jugar una amplia variedad de juegos como Mus, Brisca, Chinchón, Tute, Escoba y muchos más. Las reglas específicas varían según el juego, pero la diversión y el desafío están garantizados.',
            imageUrl: '../../../assets/images/espanola.jpg',
            normalPrice: 2490,
            offerPrice: 1990
        },
        {
            id:3,
            title: 'Baraja Magic',
            category: 'Juegos de Cartas',
            description: 'Baraja de cartas para magic',
            description1: 'Sumérgete en el universo mágico de Magic: The Gathering (MTG), el juego de cartas coleccionables que ha cautivado a millones de jugadores en todo el mundo. Con una combinación de estrategia profunda y rica fantasía, MTG ofrece una experiencia de juego inigualable.',
            instrucciones: 'Magic: The Gathering es un juego de cartas coleccionables en el que los jugadores se enfrentan entre sí utilizando mazos personalizados. Cada jugador comienza con 20 puntos de vida y el objetivo es reducir los puntos de vida del oponente a cero. Los jugadores pueden invocar criaturas, lanzar hechizos y activar habilidades especiales para ganar la partida.',
            imageUrl: '../../../assets/images/magic.jpeg',
            normalPrice: 40490,
            offerPrice: 35990
        },
        {
           id:4,
           title:'Dominó',
           category:'Juego de fichas',
           description:'Juego de dominó de 28 fichas',
           description1:'Descubre la diversión y el desafío del dominó, un juego de fichas clásico que ha entretenido a jugadores de todas las edades durante siglos. Perfecto para jugar en familia o con amigos, el dominó es una excelente manera de pasar el tiempo y poner a prueba tus habilidades estratégicas.',
           instrucciones:'El dominó es un juego de mesa en el que los jugadores deben combinar fichas con números iguales para formar cadenas. El objetivo es quedarse sin fichas antes que los demás jugadores y acumular la menor cantidad de puntos posible. Las reglas específicas varían según la variante del juego, pero la diversión está garantizada.',
           imageUrl:'../../../assets/images/domino.jpg',
           normalPrice: 4500,
           offerPrice: 4360
        },
        {
            id:5,
            title:'Ajedrez',
            category:'Juego de fichas',
            description: 'Juego de ajedrez de 32 piezas',
            description1: 'Descubre la emoción y la estrategia del ajedrez, un juego de mesa clásico que ha desafiado a jugadores de todas las edades durante siglos. Perfecto para poner a prueba tu mente y tus habilidades tácticas, el ajedrez es una excelente manera de ejercitar tu cerebro y divertirte al mismo tiempo.',
            instrucciones: 'El ajedrez es un juego de mesa en el que dos jugadores se enfrentan en un tablero de 64 casillas con 32 piezas. El objetivo es capturar al rey del oponente mediante movimientos estratégicos de las piezas. Cada pieza tiene movimientos específicos y el juego requiere habilidad, concentración y paciencia.',
            imageUrl: '../../../assets/images/ajedrez.jpg',
            normalPrice: 15000,
            offerPrice: 13990
        },
        {
            id:6,
            title:'Damas',
            category:'Juego de fichas',
            description:'Juego de damas de 24 piezas',
            description1:'Descubre la diversión y la estrategia de las damas, un juego de mesa clásico que ha entretenido a jugadores de todas las edades durante siglos. Perfecto para jugar en familia o con amigos, las damas son una excelente manera de poner a prueba tu mente y tus habilidades tácticas.',
            instrucciones:'Las damas es un juego de mesa en el que dos jugadores se enfrentan en un tablero de 64 casillas con 24 piezas. El objetivo es capturar las piezas del oponente mediante movimientos estratégicos de las propias piezas. Cada pieza tiene movimientos específicos y el juego requiere habilidad, concentración y paciencia.',
            imageUrl:'../../../assets/images/damas.jpg',
            normalPrice: 13000,
            offerPrice: 11990
        },
        {
            id:7,
            title:'Ludo',
            category:'Juego de dados',
            description:'Juego de ludo de 16 piezas',
            description1:'Descubre la diversión y la emoción del ludo, un juego de mesa clásico que ha entretenido a jugadores de todas las edades durante décadas. Perfecto para jugar en familia o con amigos, el ludo es una excelente manera de pasar el tiempo y poner a prueba tu suerte y estrategia.',
            instrucciones:'El ludo es un juego de mesa en el que los jugadores compiten por llevar sus fichas desde la casilla de inicio hasta la casilla de meta. El juego se juega con un dado y las fichas se mueven según el número que salga en el dado. El objetivo es ser el primero en llevar todas las fichas a la casilla de meta.',  
            imageUrl:'../../../assets/images/ludo.jpg',
            normalPrice: 3200,
            offerPrice: 2990
        },
        {
            id:8,
            title:'Backgammon',
            category:'Juego de dados',
            description:'Juego de backgammon de 30 piezas',
            description1:'Descubre la emoción y la estrategia del backgammon, un juego de mesa clásico que ha desafiado a jugadores de todas las edades durante siglos. Perfecto para poner a prueba tu mente y tus habilidades tácticas, el backgammon es una excelente manera de ejercitar tu cerebro y divertirte al mismo tiempo.',
            instrucciones:'El backgammon es un juego de mesa en el que dos jugadores compiten por mover todas sus fichas desde el tablero exterior hasta el tablero interior y luego sacarlas del tablero. El juego se juega con dos dados y las fichas se mueven según los números que salgan en los dados. El objetivo es ser el primero en sacar todas las fichas del tablero.',
            imageUrl:'../../../assets/images/backgammon.jpg',
            normalPrice: 10400,
            offerPrice: 9990
        },
        {
           id:9,
           title:'Monopoly',
           category:'Juego de dados',
           description:'Juego de monopoly de 32 piezas',
           description1:'Descubre la emoción y la estrategia del monopoly, un juego de mesa clásico que ha entretenido a jugadores de todas las edades durante décadas. Perfecto para jugar en familia o con amigos, el monopoly es una excelente manera de pasar el tiempo y poner a prueba tu suerte y estrategia.',
           instrucciones:'El monopoly es un juego de mesa en el que los jugadores compiten por comprar propiedades, cobrar alquileres y construir hoteles y casas. El objetivo es ser el jugador más rico al final del juego, acumulando propiedades y dinero en efectivo. El juego requiere habilidad, estrategia y suerte para ganar.',
           imageUrl:'../../../assets/images/monopoly.png',
           normalPrice: 66990,
           offerPrice: 40990
        },
        {
           id:10,
           title:'Rompecabezas 100 piezas',
           category: 'Rompecabezas',
           description: 'Rompecabezas de 100 piezas',
           description1: 'Descubre la diversión y el desafío de los rompecabezas, una actividad que ha entretenido a personas de todas las edades durante siglos. Perfecto para relajarse y ejercitar la mente, los rompecabezas son una excelente manera de pasar el tiempo y poner a prueba tus habilidades de resolución de problemas.',
           instrucciones: 'Los rompecabezas son una actividad en la que los jugadores deben ensamblar piezas para formar una imagen completa. Los rompecabezas varían en dificultad y tamaño, desde rompecabezas simples de 10 piezas hasta rompecabezas complejos de 1000 piezas. El objetivo es completar la imagen utilizando las piezas correctas.',
           imageUrl: '../../../assets/images/100.jpg',
           normalPrice: 10990,
           offerPrice: 9990
        },
        {
            id:11,
            title:'Rompecabezas 500 piezas',
            category: 'Rompecabezas',
            description: 'Rompecabezas de 500 piezas',
            description1: 'Descubre la diversión y el desafío de los rompecabezas, una actividad que ha entretenido a personas de todas las edades durante siglos. Perfecto para relajarse y ejercitar la mente, los rompecabezas son una excelente manera de pasar el tiempo y poner a prueba tus habilidades de resolución de problemas.',
            instrucciones: 'Los rompecabezas son una actividad en la que los jugadores deben ensamblar piezas para formar una imagen completa. Los rompecabezas varían en dificultad y tamaño, desde rompecabezas simples de 10 piezas hasta rompecabezas complejos de 1000 piezas. El objetivo es completar la imagen utilizando las piezas correctas.',
            imageUrl: '../../../assets/images/500.jpg',
            normalPrice: 15990,
            offerPrice: 14990
        },
        {
            id:12,
            title:'Rompecabezas 1000 piezas',
            category: 'Rompecabezas',
            description: 'Rompecabezas de 1000 piezas',
            description1: 'Descubre la diversión y el desafío de los rompecabezas, una actividad que ha entretenido a personas de todas las edades durante siglos. Perfecto para relajarse y ejercitar la mente, los rompecabezas son una excelente manera de pasar el tiempo y poner a prueba tus habilidades de resolución de problemas.',
            instrucciones: 'Los rompecabezas son una actividad en la que los jugadores deben ensamblar piezas para formar una imagen completa. Los rompecabezas varían en dificultad y tamaño, desde rompecabezas simples de 10 piezas hasta rompecabezas complejos de 1000 piezas. El objetivo es completar la imagen utilizando las piezas correctas.',
            imageUrl: '../../../assets/images/1000.jpg',
            normalPrice:20990,
            offerPrice: 19990
        }

    ];

    getProducts(): Product[] {
        return this.products;
      }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}