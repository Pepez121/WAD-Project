-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-11-2016 a las 22:02:11
-- Versión del servidor: 5.5.49-log
-- Versión de PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `username` varchar(30) NOT NULL,
  `password` varchar(250) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`username`, `password`, `firstName`, `lastName`, `email`) VALUES
('', 'TMivNG20ujSDMqwJUykOW1l6E1RccryHfe790HOPGWA=', '', '', ''),
('a', '0IVTnISeZfHNM693VIucNY0utHqqP3/8LHMiMrcLWdg=', '', '', ''),
('alertify', 'smVDUGUaewm9mX3BYy2wgYBSX53A+M1t/eHvUdRAABo=', 'alertify', 'alertify', 'alertify'),
('checa', '4TzikNPDoFYuoJkVd3sWNRlcAPhboDS3K0yVUUDdG2Y=', 'checa', 'checar', 'david@mail.com'),
('David', 'lncL6LZUMhQv/raiaYLAXMoHy/Gvl2y+BKKp8y3LINk=', 'david', 'martinez', 'david324567@gmail.com'),
('david123', 'OdOs/ifO6OYKJb3eiiCT7c3/tVZHIPrLqJQuDs9qOJM=', 'david123', 'david123', 'david324567@gmail.com'),
('david12pk3j12', 'b4mZyIrQXH8/KLzZ9ZfinyZYcalXXjLXRdFg7lNcYaY=', 'qpwoie', 'wqepoiqopwie', 'wqepoiqowpe@algo.com'),
('davidfinal', '957AoFrCKUpjslryuLW9opaXBoa9a8mq7Y1XNV74LKc=', 'david', 'martinez', 'david324567@gmail.com'),
('davidfuncional', 'T0C2atNDjrdorLtA9wblTJzNN6W5376190ucgj/0Gnc=', 'david', 'david', 'david324567@gmail.com'),
('daviduser', 'INtpMBiilaHhkNYOZC7Uvt6CnPbCUq46Z0i6kfU27Mg=', 'david', 'martinez', 'david324567@gmail.com'),
('daviduser2', 'l3SZnY/ssd1RZRgxReXyYAFMcLrzi0YlIvok8LWPMEo=', 'david', 'martinez', 'david324567@gmail.com'),
('ingmedina', 'dnVccH1G5hec29ymW9+FiALuYF5VA2XBj8OOC8BEOkA=', 'ing', 'medina', 'medina@mail.com'),
('jalara', 'w2i/7m70ML8+zOkQ2zdV5/l2kKThOyFTsR1gP90pWts=', 'jalara', 'jalara', 'jalara'),
('pruebafinal', '0GDwik8kWSx1fD4HyhPmg9zfnG3NjWFywELnwiwHJ78=', 'david', 'martinez', 'david324567@gmail.com'),
('test', 'QGgyZbExIaYetL6kzlkTiQJQ8IN0FIRky1xurAwvgPo=', 'david', 'martinez', 'pepe@mail.com'),
('test1', 'vMEu4TUngdS1A6/hxPoCcFUTSsBWKF5wQv9IGFhGDWs=', 'test', 'test', 'asd@test.com'),
('test2', '+uLIagPS+hJY1V7CJLTaAiPHAiPpaYIEXgsB8g+OKyw=', 'test', 'test', 'test@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordernormal`
--

CREATE TABLE IF NOT EXISTS `ordernormal` (
  `orderId` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `texto` varchar(2500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ordernormal`
--

INSERT INTO `ordernormal` (`orderId`, `username`, `texto`) VALUES
(1, 'david123', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p>'),
(2, 'david123', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p>'),
(3, 'alertify', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p><p></p><h2> Producto: "'),
(4, 'alertify', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p><p></p><h2> Producto: "'),
(5, 'alertify', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p><p></p><h2> Producto: "'),
(6, 'davidfuncional', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Camisa'),
(7, 'davidfuncional', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Camisa'),
(8, 'davidfuncional', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Castor de peluche""150"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p>'),
(9, 'davidfuncional', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Castor de peluche""150"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p>'),
(10, 'davidfuncional', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Castor de peluche""150"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p>'),
(11, 'checa', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Comida  Cordero 2.5kg""200"</h2><p></p>'),
(12, 'checa', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p><p></p><h2> Producto: "Comida  Cordero 2.5kg""200"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Balon de juguete de raiders""200"</h2><p></p>'),
(13, 'checa', '\n			<h2> Este es tu carrito actual: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p><p></p><h2> Producto: "Comida  Cordero 2.5kg""200"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p>'),
(14, 'davidfinal', '\n			<h2> Este es tus carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Cerdito de peluche""150"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p>'),
(15, 'davidfinal', '\n			<h2> Este es tus carrito actual: </h2>\n		<p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Cerdito de peluche""150"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p>'),
(16, 'pruebafinal', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Cerdito de peluche""150"</h2><p></p><p></p><h2> Producto: "Comida  Cordero 2.5kg""200"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""230"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p><p></p><h2> Producto: "Balon de juguete de raiders""200"</h2><p></p>'),
(17, 'pruebafinal', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p>'),
(18, 'test', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Camisa de cowboys""200"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p><p></p><h2> Producto: "Balon juguete de 49ers""200"</h2><p></p>'),
(19, '', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p>'),
(20, '', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p>'),
(21, 'test1', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p>'),
(22, 'test1', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Comida con pollo""200"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p><p></p><h2> Producto: "Alimento ideal para cachorros ""200"</h2><p></p><p></p><h2> Producto: "Gorra de santa""100"</h2><p></p><p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p>'),
(23, 'test2', '\n			<h2> Carrito: </h2>\n		<p></p><h2> Producto: "vestidito blanco y negro""150"</h2><p></p><p></p><h2> Producto: "Camisa de Mexico""200"</h2><p></p><p></p><h2> Producto: "Comida  Cordero 2.5kg""200"</h2><p></p><p></p><h2> Producto: "Comida ideal Cordero 1kg""100"</h2><p></p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `productid` int(10) NOT NULL,
  `productname` varchar(30) NOT NULL,
  `uniprice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`productid`, `productname`, `uniprice`) VALUES
(1, 'Camisa de cowboys', 200),
(2, 'Camisa de Mexico', 200),
(3, 'vestidito blanco y negro', 150),
(4, 'Gorra de santa', 100),
(5, 'Balon de juguete de broncos', 200),
(6, 'Balon de juguete de raiders', 200),
(7, 'Balon juguete de 49ers', 200),
(8, 'Castor de peluche', 150),
(9, 'Oso de peluche', 150),
(10, 'Pelotita para jugar', 50),
(11, 'Cerdito de peluche', 150),
(12, 'Collar de juguete', 100),
(13, 'Balance Pollo y arroz', 400),
(14, 'Comida  Cordero 2.5kg', 200),
(15, 'Comida con pollo', 200),
(16, 'Comida ideal Cordero 1kg', 100),
(17, 'Alimento para perro 12kg', 1500),
(18, 'Alimento para cachorro de cord', 200),
(19, 'Alimento ideal para cachorros ', 230),
(20, 'Alimento ideal para cachorros ', 200);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `ordernormal`
--
ALTER TABLE `ordernormal`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `username` (`username`),
  ADD KEY `productid` (`texto`(767));

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`),
  ADD KEY `productname` (`productname`),
  ADD KEY `uniprice` (`uniprice`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ordernormal`
--
ALTER TABLE `ordernormal`
  MODIFY `orderId` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ordernormal`
--
ALTER TABLE `ordernormal`
  ADD CONSTRAINT `ordernormal_ibfk_1` FOREIGN KEY (`username`) REFERENCES `customers` (`username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
