-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 04, 2020 at 08:39 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Pause&Play`
--

-- --------------------------------------------------------

--
-- Table structure for table `Colores`
--

CREATE TABLE `Colores` (
  `ID` int(255) NOT NULL,
  `color_code` varchar(17) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `Colores`
--

INSERT INTO `Colores` (`ID`, `color_code`) VALUES
(1, 'rgb(30,172,44)'),
(2, 'rgb(73,154,210)'),
(3, 'rgb(125,98,124)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Colores`
--
ALTER TABLE `Colores`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Colores`
--
ALTER TABLE `Colores`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
