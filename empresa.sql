-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2018 a las 16:33:53
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `id` tinyint(7) NOT NULL,
  `nombres` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ciudad` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sexo` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fecha_nacimiento` datetime NOT NULL,
  `direccion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `provincia` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fechaAlta` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Disparadores `cliente`
--
DELIMITER $$
CREATE TRIGGER `setFechaAlta` BEFORE INSERT ON `cliente`
 FOR EACH ROW BEGIN
    SET NEW.fechaAlta = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE IF NOT EXISTS `vehiculos` (
  `id` int(11) NOT NULL,
  `matricula` varchar(20) NOT NULL,
  `fecha_fabricacion` datetime NOT NULL,
  `marca` varchar(55) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `id_cliente` tinyint(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cascadeDelete` (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` tinyint(7) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `cascadeDelete` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
