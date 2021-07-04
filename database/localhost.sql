-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 03, 2021 at 05:55 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `treesports`
--
CREATE DATABASE IF NOT EXISTS `treesports` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `treesports`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_Id` int(100) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `admin_image` varchar(200) DEFAULT NULL,
  `phone` int(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_Id`, `fname`, `lname`, `admin_image`, `phone`, `email`, `password`, `status`) VALUES
(2, 'kwizera', 'Mugisha', '', 79938923, 'plklmkaj@khsnl', 'hgsgvjvjhvdj', 1),
(3, 'kwizera', 'Mugisha', '', 79938923, 'plklmkaj@khsnl', 'hgsgvjvjhvdj', 1),
(4, 'joseph', 'kwizera', '', 2147483647, 'jbjkdskgk@jkbhks', 'jhhjghgj', 1),
(5, 'xman', 'coder', NULL, 12345, 'xcoder@gmail.com', '$2a$12$khObeE5/Tn0bUcfnswxiG.GTnIrtwEoXx7Ckme5RDHVwVMQqIH5yW', 1),
(6, 'xman', 'coder', NULL, 12345, 'xcoder@gmail.com', '$2a$12$KKbUYB5wQ7HdJTE5RqUFmut15g7dOmeJCKPr655v/wnBWoSvD04eK', 1);

-- --------------------------------------------------------

--
-- Table structure for table `club`
--

CREATE TABLE `club` (
  `club_id` int(100) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `clogo` int(100) NOT NULL,
  `play` int(100) NOT NULL,
  `win` int(100) NOT NULL,
  `drow` int(100) NOT NULL,
  `lost` int(110) NOT NULL,
  `goal_defference` int(110) NOT NULL,
  `points` int(110) NOT NULL,
  `league_id` int(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`club_id`, `cname`, `clogo`, `play`, `win`, `drow`, `lost`, `goal_defference`, `points`, `league_id`) VALUES
(1, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(2, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(3, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(4, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(5, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(6, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(7, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(8, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0),
(9, 'arsenal', 0, 1111, 111, 1, 14, 23, 2112, 0);

-- --------------------------------------------------------

--
-- Table structure for table `goalranking`
--

CREATE TABLE `goalranking` (
  `goalR_id` int(11) NOT NULL,
  `player` varchar(200) NOT NULL,
  `goal` int(11) NOT NULL,
  `assist` int(11) NOT NULL,
  `league_id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `goalranking`
--

INSERT INTO `goalranking` (`goalR_id`, `player`, `goal`, `assist`, `league_id`, `club_id`) VALUES
(1, 'raymond', 1, 2, 0, 0),
(2, 'raymond', 1, 2, 0, 0),
(3, 'ronaldo', 12, 22, 0, 0),
(4, 'zidane', 4, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `league`
--

CREATE TABLE `league` (
  `league_id` int(11) NOT NULL,
  `llogo` varchar(200) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `league`
--

INSERT INTO `league` (`league_id`, `llogo`, `lname`, `country`) VALUES
(1, 'man u', 'arsenal', 'rwanda'),
(2, 'arsenal', 'arsenal', 'england'),
(3, 'ars', 'aaaa', 'rwanda');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `category` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `image_detail` varchar(1000) NOT NULL,
  `decription` varchar(10000) NOT NULL,
  `types` varchar(100) NOT NULL,
  `admin_Id` int(200) NOT NULL,
  `status` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `title`, `category`, `image`, `image_detail`, `decription`, `types`, `admin_Id`, `status`) VALUES
(7, '0', 'basketball', 'a.jpg', 'ok', 'jiohhuiyihjaig', 'news', 0, 1),
(8, 'amajyepfo ok', 'basketball', 'a.jpg', 'ok', 'jiohhuiyihjaig', 'news', 0, 1),
(9, 'france win', 'basketball', 'b.jpg', 'soooo goood', 'jiohhxsdsssssssssuiyihjaig', 'pundits', 0, 1),
(10, 'League mach', 'category', 'public/news-images/1625332800524-new-diagram.png', 'qwredjsh image_detailfidhn image_detail', 'wefqf erqferafv sfvdasvdf', 'types', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_Id`);

--
-- Indexes for table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`club_id`);

--
-- Indexes for table `goalranking`
--
ALTER TABLE `goalranking`
  ADD PRIMARY KEY (`goalR_id`);

--
-- Indexes for table `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`league_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `club`
--
ALTER TABLE `club`
  MODIFY `club_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `goalranking`
--
ALTER TABLE `goalranking`
  MODIFY `goalR_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `league`
--
ALTER TABLE `league`
  MODIFY `league_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
