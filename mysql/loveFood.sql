-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 01, 2023 at 01:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loveFood`
--

-- --------------------------------------------------------

--
-- Table structure for table `favouriteRecipes`
--

CREATE TABLE `favouriteRecipes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favouriteRecipes`
--

INSERT INTO `favouriteRecipes` (`id`, `user_id`, `recipe_id`) VALUES
(9, 12, 444444),
(11, 12, 555555),
(12, 13, 555555),
(13, 13, 777777);

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(128) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`, `entry_date`) VALUES
(1, 10, 'KvvPTaMsHykLKlAI_pXvNBy1oDJ1vLu5qfy3yJtm5ROjpEt7hmljqvGZ3sraKphme_wxHlR5Of9CWqUDiSyHqJUzfa1U5UwIyeEW4LzVzdZfJBtnw2rXnu-lMORerSqT', '2023-07-31 10:19:32'),
(2, 12, 'KEj8-HrNLbwUVR2LsGaNUjqGUeivENKZsifj9qMnbnyF4dspCcVWLK_cqlbCP4y8ymCYPQoJFAEX4mWT83szgStMf53n_uvRfvsnVJPOOWxPhiGeCvK30csF_CLA2QfS', '2023-08-01 11:01:58'),
(3, 13, 'mfRX4LsvGovqy1fAfNETri_jQJy-vSF1eu5Djj6e5SsejpSBc1eUy4W2jz5xf9UoK6Z2f9693ZQ6WoR_obeq7dVNn1XMoTCurNQJsZ0ztzJAaLUNjhVFGXejRRiMyd-l', '2023-08-01 11:20:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(332) NOT NULL,
  `password` varchar(256) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `entry_date`) VALUES
(1, 'letizia', 'a1@b.com', '123', '2023-07-27 13:48:06'),
(2, 'letizia', 'letizia@gmail.com', 'password123', '2023-07-27 13:59:09'),
(3, 'baloo', 'baloo@gmail.com', 'c6ba91b90d922e159893f46c387e5dc1b3dc5c101a5a4522f03b987177a24a91', '2023-07-27 14:11:11'),
(5, 'jaya', 'jaya@gmail.com', 'c6ba91b90d922e159893f46c387e5dc1b3dc5c101a5a4522f03b987177a24a91', '2023-07-27 14:20:20'),
(6, 'ayan', 'ayan@gmail.com', '1a156eabf1b37c37492a8d1897cb35f7f2438580153242d70214f90ebd0cb678', '2023-07-31 08:44:35'),
(10, 'sara', 'sara@gmail.com', '219518883dc1d60e4c49a25b75ab5358e077b830127019848719e85bc4dd91b3', '2023-07-31 09:45:38'),
(12, 'baloo2', 'baloo2@gmail.com', '219518883dc1d60e4c49a25b75ab5358e077b830127019848719e85bc4dd91b3', '2023-08-01 11:01:33'),
(13, 'baloo3', 'baloo3@gmail.com', '219518883dc1d60e4c49a25b75ab5358e077b830127019848719e85bc4dd91b3', '2023-08-01 11:20:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favouriteRecipes`
--
ALTER TABLE `favouriteRecipes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`recipe_id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favouriteRecipes`
--
ALTER TABLE `favouriteRecipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
