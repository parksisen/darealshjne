-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2025 at 06:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL,
  `expire_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`, `user_id`, `expire_at`) VALUES
(74, './skins/6ab1m1bX8inq.png', 4, '2022-09-26 03:07:39'),
(77, './skins/aX8q66g4a3c3.png', 4, '2022-10-26 03:39:21'),
(78, './skins/YYy71z9VgBbx.png', 4, '2022-10-26 03:39:56'),
(79, './skins/hz386h4dY7gc.png', 4, '2022-10-26 03:40:02'),
(80, './skins/ch1bxbnzZzva.png', 1, '2023-11-28 09:16:46'),
(81, './skins/0ik82Ykxc3V9.png', 1, '2023-11-28 09:16:48'),
(82, './skins/zy1ix2cxq8ix.png', 1, '2023-11-28 09:38:28'),
(83, './skins/YhVncb9XYna4.png', 1, '2023-11-28 09:38:33'),
(84, './skins/86X8xgbe4my1.png', 1, '2023-11-28 09:46:25'),
(85, './skins/Vqi5XB3AB527.png', 1, '2023-11-28 09:47:12'),
(86, './skins/anYhnyaxcBmV.png', 1, '2023-11-28 09:47:15'),
(87, './skins/xknAddXxhcke.png', 1, '2023-11-28 09:48:58'),
(88, './skins/dgA6v1vYa52c.png', 1, '2023-11-28 09:49:03'),
(89, './skins/35maxk09mgZn.png', 1, '2023-11-28 09:55:21'),
(90, './skins/Yhq6112hx6BB.png', 1, '2023-11-28 09:55:26'),
(91, './skins/11Z2vneqxcb7.png', 1, '2023-11-28 10:02:06'),
(92, './skins/VhqyZxibhZhd.png', 1, '2023-11-28 10:04:01'),
(93, './skins/cYycA3Vzy1k1.png', 1, '2023-11-28 10:04:44'),
(94, './skins/ZB9692Ve3mi6.png', 1, '2023-11-28 10:07:21'),
(95, './skins/Z0ybqynzx34q.png', 1, '2023-11-28 18:47:08'),
(96, './skins/BgcaqggA55qc.png', 8, '2023-11-29 00:14:01'),
(97, './skins/6ckaeyBgh06Y.png', 14, '2023-11-29 00:42:54'),
(98, './skins/cen7aZ2Bgi6A.png', 1, '2023-11-30 19:07:05'),
(99, './skins/mXZzX2Ag3yy1.png', 8, '2023-11-30 19:16:19'),
(100, './skins/Zdg0mZaei85b.png', 17, '2023-11-30 20:10:09'),
(101, './skins/g5yAxxaVeh62.png', 43, '2023-11-30 20:10:55'),
(102, './skins/kaqe8gzyYgYY.png', 26, '2023-11-30 09:04:54'),
(103, './skins/VmVxZYn9kgym.png', 72, '2023-11-30 14:07:39'),
(104, './skins/vg6i5dbX6h95.png', 78, '2023-11-30 15:15:50'),
(105, './skins/51aX144Axk0A.png', 1, '2023-11-30 19:38:56'),
(106, './skins/bz5mVzBiBcm3.png', 1, '2023-11-30 19:38:57'),
(107, './skins/2Z1b2kZg1d5x.png', 1, '2023-11-30 21:09:15'),
(108, './skins/7i79cv34e67v.png', 1, '2023-11-30 21:09:29'),
(109, './skins/21ic53makdga.png', 1, '2023-11-30 21:09:39'),
(110, './skins/in3zn88YA6k3.png', 1, '2023-11-30 21:09:40'),
(111, './skins/2qgcavcv54Zc.png', 1, '2023-11-30 21:09:40'),
(112, './skins/47b63cq1iAY1.png', 110, '2023-12-01 19:26:22'),
(113, './skins/myhAnd0XmXkd.png', 110, '2023-12-01 20:10:34'),
(114, './skins/4xg4eekiVnez.png', 25, '2023-12-01 21:39:16'),
(115, './skins/7BAkbde6VV0g.png', 123, '2023-12-01 21:41:23'),
(116, './skins/kZngvecq21BB.png', 113, '2023-12-01 21:44:26'),
(117, './skins/4yVgd9ccX3ix.png', 22, '2023-12-01 21:45:57'),
(118, './skins/zB1agBkx6yBh.png', 122, '2023-12-01 21:53:31'),
(119, './skins/Ygi2Zakk1AZX.png', 1, '2023-12-02 07:38:50'),
(120, './skins/Y7ki7ZXn3nzm.png', 1, '2023-12-02 07:41:09'),
(121, './skins/y2g3y327zg5d.png', 131, '2023-12-02 10:13:59'),
(122, './skins/8yBgzbn6b6gn.png', 34, '2023-12-02 12:05:48'),
(123, './skins/4ene3Ambkn2g.png', 136, '2023-12-02 16:59:54'),
(124, './skins/n26g5qmbv883.png', 136, '2023-12-02 16:59:56'),
(125, './skins/6vgAv880YYy9.png', 136, '2023-12-02 17:00:15'),
(126, './skins/nyvYdVg6czmg.png', 136, '2023-12-02 17:00:18'),
(127, './skins/Zv7gBgY8cdqA.png', 136, '2023-12-02 17:00:19'),
(128, './skins/igzzkk523y9V.png', 136, '2023-12-02 17:00:20'),
(129, './skins/XX0BabVexyZi.png', 136, '2023-12-02 17:03:34'),
(130, './skins/hqgqe17Zhdi8.png', 136, '2023-12-02 17:03:47'),
(131, './skins/AdX7kvX6zadi.png', 136, '2023-12-02 17:03:48'),
(132, './skins/v11mVcVA3zhB.png', 136, '2023-12-02 17:03:50'),
(133, './skins/3d7hY4icm807.png', 136, '2023-12-02 17:03:52'),
(134, './skins/a27xz7Yvy8hA.png', 136, '2023-12-02 17:14:26'),
(135, './skins/Z9nzYzXnB6Xc.png', 136, '2023-12-02 17:15:34'),
(136, './skins/d3czm89V6xk0.png', 136, '2023-12-02 17:15:35'),
(137, './skins/9gg4i2xmXgxV.png', 136, '2023-12-02 17:21:45'),
(138, './skins/vgkmz7e1YB61.png', 136, '2023-12-02 17:21:47'),
(139, './skins/9q0bkY17AcXV.png', 136, '2023-12-02 17:21:48'),
(140, './skins/y1515AV1kbv1.png', 136, '2023-12-02 17:22:05'),
(141, './skins/8z2nhmy0eynm.png', 114, '2023-12-03 17:17:46'),
(142, './skins/3xb88nmVhxxe.png', 151, '2023-12-03 17:57:32'),
(143, './skins/d4vgi7eYZ8mX.png', 154, '2023-12-03 18:03:58'),
(144, './skins/d6gz8B6h6ByX.png', 155, '2023-12-03 18:47:26'),
(145, './skins/6q18gmdacBA7.png', 17, '2023-12-03 19:43:37'),
(146, './skins/dXB1m887Yi7B.png', 125, '2023-12-04 14:29:12'),
(147, './skins/Xn5xBagnAdn1.png', 8, '2023-12-04 15:34:19'),
(148, './skins/qmg7qgzx114Y.png', 1, '2023-12-04 18:10:23'),
(149, './skins/Vzm2dVvqVe3d.png', 26, '2023-12-04 19:15:34'),
(150, './skins/345733xZm6b2.png', 48, '2023-12-04 19:40:28'),
(151, './skins/Bi4ybYb6VV69.png', 72, '2023-12-05 13:22:35'),
(152, './skins/5id3Vxzx0eyd.png', 172, '2023-12-06 21:03:04'),
(153, './skins/k5qygczZ6e2z.png', 111, '2023-12-09 09:39:31'),
(154, './skins/bqg093Xygvmg.png', 22, '2023-12-09 20:57:18'),
(155, './skins/2ahn8cvdgxX2.png', 115, '2023-12-09 21:19:19'),
(156, './skins/21gbx63a6Zhe.png', 183, '2023-12-09 21:35:17'),
(157, './skins/06nYVhhz8Xkc.png', 9, '2023-12-10 16:19:45'),
(158, './skins/Zqe8X3kAn81d.png', 25, '2023-12-06 21:15:44'),
(159, './skins/BAAVBq2d5mkV.png', 110, '2023-12-06 21:16:43'),
(160, './skins/d7gxcc3xkd6i.png', 165, '2023-12-06 21:54:13'),
(161, './skins/1ZAa4embmgm6.png', 185, '2023-12-08 20:03:06'),
(162, './skins/AgiXgV3kzZZ5.png', 192, '2023-12-09 10:51:54'),
(163, './skins/vyx1nqxiZVxc.png', 192, '2023-12-09 14:43:24'),
(164, './skins/eiy2cBdAV0Vg.png', 185, '2023-12-09 17:13:22'),
(165, './skins/inviyvc1xYAv.png', 185, '2023-12-09 19:03:18'),
(166, './skins/hnadc5h1A2hd.png', 110, '2023-12-14 20:07:02'),
(167, './skins/6gmqXvB56Xaq.png', 207, '2023-12-15 22:11:48'),
(168, './skins/40eyn70h1Ya6.png', 208, '2023-12-17 17:13:44'),
(169, './skins/A5eh5gn2im8A.png', 208, '2023-12-17 17:23:23'),
(170, './skins/icmggb13hbxx.png', 185, '2023-12-17 19:44:45'),
(171, './skins/a731k1ez5V1x.png', 208, '2023-12-18 18:49:38'),
(172, './skins/azvbd4ybcd46.png', 210, '2023-12-19 13:38:28'),
(173, './skins/giBd1A4a7qdk.png', 210, '2023-12-19 13:43:38'),
(174, './skins/iBvVAck52713.png', 185, '2023-12-19 14:13:03'),
(175, './skins/7V5vByiaig1v.png', 197, '2023-12-19 20:41:03'),
(176, './skins/8Z6gBqbqe4y7.png', 78, '2023-12-19 20:54:32'),
(177, './skins/03Ze86Y4naqZ.png', 211, '2023-12-20 11:36:38'),
(178, './skins/kY55yd57dn97.png', 208, '2023-12-20 20:07:17'),
(179, './skins/XexcB82Va60g.png', 212, '2023-12-20 21:19:31'),
(180, './skins/BBmZ4i8ke62A.png', 218, '2025-02-14 19:32:16'),
(181, './skins/Aeb68k4ZVA81.png', 218, '2025-02-15 14:33:27'),
(182, './skins/Bzza6Vgz6mB0.png', 218, '2025-02-15 14:36:59'),
(183, './skins/V1z48Ykzxbnq.png', 218, '2025-02-15 14:53:34'),
(184, './skins/santa.png', 218, '2025-02-15 14:54:01'),
(185, './skins/gedqZ1k32q03.png', 218, '2025-02-16 18:55:37'),
(186, './skins/0gqmaYgYd962.png', 218, '2025-02-17 11:07:55');

-- --------------------------------------------------------

--
-- Table structure for table `player_hats`
--

CREATE TABLE `player_hats` (
  `player_id` int(11) NOT NULL,
  `hat_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `player_hats`
--

INSERT INTO `player_hats` (`player_id`, `hat_id`) VALUES
(218, 'santa');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `coins` int(11) DEFAULT 0,
  `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `username`, `password`, `email`, `coins`, `is_admin`) VALUES
(1, 'admin', '$2y$10$xJDe5TcfUvRpxbxSi6il8uPnA5kVS.wjaiY2b0QGxRW6bZhnWjApW', 'admin@example.com', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `trans_log`
--

CREATE TABLE `trans_log` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `amount` bigint(20) NOT NULL,
  `seri` text NOT NULL,
  `pin` text NOT NULL,
  `type` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `trans_id` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `trans_log`
--

INSERT INTO `trans_log` (`id`, `name`, `amount`, `seri`, `pin`, `type`, `status`, `trans_id`, `date`) VALUES
(2, 'shjnemacau', 30000, '8654212325432', '436343452225', 'Vietnamobile', 2, 'a6472cb0681fd4c1b6172540ef7bff3c', '2023-10-28 17:41:27'),
(3, 'huutin', 10000, '53835832354', '4522330866832', 'ATM', 1, 'e3e46cc0e59303d391f500b206dda121', '2023-10-28 17:43:38'),
(4, 'shjnemacau', 30000, '53835832354', '436346252225', 'Viettel', 1, '9f9f4718b41ae2606a62e2feca83f8ff', '2023-10-28 21:50:43'),
(5, 'shjnemacau', 30000, '53835832354', '4522330123328', 'Viettel', 2, '71b7ed5e97bab06f32958abe0c5d5985', '2023-10-28 21:54:19'),
(6, 'shjnemacau', 50000, '53831232354', '436341232225', 'Viettel', 1, 'df823bcb0cdffb804b15e985c14e00d7', '2023-10-28 21:58:45'),
(7, 'shjnemacau', 50000, '53845632354', '436312352225', 'Viettel', 1, '7402da94aeb7f480a9f0598d79e409e1', '2023-10-28 22:00:15'),
(8, 'shjnemacau', 20000, '53835832312', '436343452232', 'Viettel', 2, '9cc12c4dd17890e7757f82cf4fa36b78', '2023-10-28 22:21:05'),
(9, 'shjnemacau', 20000, '53835832354', '436343452225', 'Viettel', 2, '200741b50779aca79d96049c6b594302', '2023-10-28 23:20:40'),
(10, '', 30000, '123213', '12313', 'Vietnamobile', 2, 'b022fce0743dab2637da018d0e49b042', '2023-10-28 23:31:00'),
(11, 'shjnemacau', 50000, '53835444354', '436343452444', 'Viettel', 2, '2d4d395650cebdc69f056ca0fd8b0c60', '2023-10-28 23:41:26'),
(12, 'shjnemacau', 10000, '53835831222', '436343452333', 'Viettel', 2, 'ea01e05d3126ae9cf0f9c8fa996d2b8f', '2023-10-28 23:43:21'),
(13, 'shjnemacau', 30000, '53835832355', '436343452555', 'Viettel', 2, '8884e0db696ed8dbf70a5418168f4c6e', '2023-10-28 23:46:45'),
(14, 'shjnemacau', 50000, '53835832111', '436346252132', 'Viettel', 2, '20c9ccaafd57bf1b071dc557ecde894d', '2023-10-29 00:01:22'),
(15, 'shjnemacau', 30000, '53835832213', '436343453241', 'Viettel', 2, 'df65cf674a8b5b56a6d6ba86fbda1852', '2023-10-29 00:27:46'),
(16, 'shjnemacau', 30000, '53835832351', '436343452223', 'Viettel', 0, '410178c72463987280a6bc48f813905a', '2023-10-29 00:32:50'),
(17, 'shjnemacau', 20000, '53835832353', '436343452212', 'Viettel', 1, '25e8191b6387905b8e70eaaf5fc9f3b9', '2023-10-29 00:37:01'),
(18, 'shjnemacau', 50000, '53835832356', '436346252266', 'Viettel', 1, 'a4b57cb709a6fa65cd6fd73fb6814808', '2023-10-29 00:37:39'),
(19, 'shjnemacau', 500000, '53835832377', '436343452227', 'Viettel', 1, '6002763f4f5fe804bc5d40dcb368dd41', '2023-10-29 00:39:39'),
(20, 'shjnemacau', 20000, '53835832351', '436343452212', 'Viettel', 1, '82d028e2f2a5366f9c0137d63b4a3dae', '2023-10-29 00:41:23'),
(21, 'shjnemacau', 30000, '53835832350', '436343452220', 'Viettel', 1, 'cfc2e1c2ebce3149dd6f26d6336d2713', '2023-10-29 00:44:25'),
(22, 'shjnemacau', 50000, '53835832552', '4363434522323', 'Viettel', 1, 'd02317770d2d23c94945b2897a9c5780', '2023-10-29 00:50:02'),
(23, 'shjnemacau', 30000, '53835832456', '436343212225', 'Viettel', 0, '4555c4c85f67aa7894d0a798916069a8', '2023-10-29 00:51:56'),
(24, 'shjnemacau', 20000, '53835832386', '4522330123378', 'Viettel', 2, 'afa5a3497fabc1734b2c3ed468068c06', '2023-10-29 00:53:21'),
(25, 'shjnemacau', 30000, '53835832645', '436343452221', 'Viettel', 2, '0a8cd160a0ecd7a853a933c5bc360a4a', '2023-10-29 00:54:49'),
(26, 'choidesong', 10000, '100010305038501', '515203335224857', 'Viettel', 1, 'b41482e6361d9dfbf6d1f2da008dafb0', '2023-10-29 00:57:55'),
(27, 'kendybmt147@gmail.com', 20000, '10010257310662', '512147705092130', 'Viettel', 1, 'af08fcccde495456c8d579a8baf6c9ef', '2023-10-31 06:42:23'),
(28, 'cuong', 20000, '10010133436197', '515595949547046', 'Viettel', 1, '1103b7ff1b7ddb36b62021eb44eaa084', '2023-10-31 08:02:44'),
(29, 'quockhailatao123', 10000, '53835812354', '436343452325', 'ATM', 1, '852cb53ea9fc110b94ecd5157d285cd0', '2023-11-02 02:52:45'),
(30, 'duyn0804', 10000, '098712000003871', '180847130371', 'Mobifone', 1, '009fc0e28c7331eeaf1c3b669d599b22', '2023-11-04 07:22:43'),
(31, 'Gin_KeLSay', 10000, 'KB0105260631', '2J6T2T3D9', 'Zing', 1, '45acf408c9f8a52bb1ba30ec3dd25e34', '2023-11-05 04:35:27'),
(32, 'Dhpll.l12', 10000, '20000258033841', '726972340997492', 'Viettel', 1, 'b15790992db37f5e05f6518bdb382edb', '2023-11-07 01:46:07'),
(33, 'BV', 10000, '20000258625757', '022019564825342', 'Viettel', 1, '3b0f818b1179170709b6c36058254b76', '2023-11-07 04:57:29'),
(34, 'tking8888vn', 10000, '12131313211132', '21313232132123', 'Vietnamobile', 2, '11d2811180d2e66c165d62f5f104fad2', '2023-11-08 13:14:43'),
(35, 'badyou Bin', 20000, '10009532219995', '112271961441173', 'Viettel', 1, 'a1c28e2ed9a5f10c5ae3989c1d57383e', '2023-11-09 02:08:00'),
(36, 'anhkutihp', 50000, '53831232789', '436341232789', 'ATM', 1, 'f2999d69c86b9991a3e5c5802e64d99a', '2023-11-11 11:38:41'),
(37, 'hanh', 20000, '10010112917263', '919854460316646', 'Viettel', 1, '6a3afde95388228263376bc207ba29a0', '2023-11-12 06:50:56'),
(38, 'lamdzzz', 10000, '20000261047138', '629193324917154', 'Viettel', 1, 'bae75d226d056ea44d5b467ddff8e44e', '2023-11-15 15:09:46'),
(39, 'TAQ', 10000, '20000205530251', '326521110651243', 'Viettel', 1, '319acf5100adb34304006cb23f9977a4', '2023-11-17 10:11:10'),
(40, 'TAQ', 10000, '20000205823712', '225597480488645', 'Viettel', 1, 'e6be3412bbbc21b635fe6e3ba3c0d638', '2023-11-17 10:22:52'),
(41, 'lxh19988', 30000, '20000244904985', '725762401115465', 'Viettel', 1, '3bd8b4511617808704ee94677ea9b7f0', '2023-11-17 14:15:09'),
(42, 'TAQ', 10000, '20000205804000', '129515070547686', 'Viettel', 1, 'a70d918453c019299ab32dd37c42b111', '2023-11-18 08:20:26'),
(43, 'shjnemacau', 20000, '53835812359', '436343452265', 'Viettel', 2, '593f8fae9367268d7885be24f155e1af', '2023-11-18 11:45:23'),
(44, 'Ghostlong!!!', 20000, '10010143223462', '411691022671513', 'Viettel', 1, '670279b36462923982444fe1ffac4ae0', '2023-11-19 11:36:37'),
(45, 'trungchien205', 10000, '10009792133076', '117081753591223', 'Viettel', 1, '083268d6b91b2fdd41e35055ee99f475', '2023-11-20 08:11:22'),
(46, 'TAQ', 10000, '20000205818635', '028277060448315', 'Viettel', 2, '9847a7fa2980091764fc6258b2216c2f', '2023-11-20 13:05:33'),
(47, 'TAQ', 10000, '20000205818635', '028277060448315', 'Viettel', 1, '31008ce9cbf50f678466b6e68534a626', '2023-11-20 13:05:33'),
(48, '', 100000, '53835832888', '436346252334', 'Viettel', 0, '8e895023d8c49fe0ba19eac3fd9da199', '2025-01-15 07:37:45'),
(49, 'shjne123', 300000, '53835832721', '436346252288', 'Viettel', 1, '4ba50cbc8778f6f991f8b9558846b7fa', '2025-01-15 07:38:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `coins` int(11) NOT NULL DEFAULT 0,
  `active_image_path` text DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `created_at`, `coins`, `active_image_path`) VALUES
(1, 'lilsh7ne', 'shjnereal.url@gmail.com', 'shjnemacau', '$2y$10$xJDe5TcfUvRpxbxSi6il8uPnA5kVS.wjaiY2b0QGxRW6bZhnWjApW', '2022-09-19 18:49:36', 1514, './skins/ZB9692Ve3mi6.png'),
(2, 'sh7nedeptrai', 'shjnemacau@gmail.com', 'shjnereal7979', '$2y$10$npT8Xow3wksdVQb1rWfN4uTSKgHBH72gIENHLG2Zy/y1opE1r28pu', '2022-09-20 09:19:28', 2, '0'),
(3, 'A', 'a@gmail.com', 'Aa', '$2y$10$lZV5HAZvbKrw5Zoo0hKA0eD0o7Fq31UgUYG/0ScjBDUmySUeXwdrC', '2022-09-20 16:19:01', 2000, '0'),
(4, 'khanhdaica', 'dangkhanh.dev@gmail.com', 'user', '$2y$10$LgyDvyHvlVxR1H7Zb3u6pOYS8egqI/OKWa6Aci.mURMW2TPLIagP2', '2022-09-21 03:41:29', 979, './skins/aX8q66g4a3c3.png'),
(6, '', 'tester@gmail.com', 'shjne', '$2y$10$N5.BFfXZFknrHN2DqP9oSeWtyjZUZyhAfV4TEercA1khu4mCmkgQq', '2023-10-28 12:40:23', 0, '0'),
(7, '', 'dangcap@gmail.com', 'dangcap', '$2y$10$7e4qlO/kfY04IFur6GXn9OZ2cbWx0qypvwNPjI4HgWBuT.Z.WGDb.', '2023-10-28 21:32:45', 0, '0'),
(8, '', 'leuhgluziell@hotmail.com', 'leuhgluziell@hotmail.com', '$2y$10$9Prjg./cHcEDLhofaT9tr.O.ePQMfmzhxvGZfvrE.yLgHfFfs5bZW', '2023-10-28 23:51:42', 0, '0'),
(9, '', 'pzanhai2004@gmail.com', 'phanvanhai', '$2y$10$z6wNa1TT8NkRmggcV8cQLuszrCu6dG/Hdkp/cgVGIDjmhoBsG.hZi', '2023-10-29 00:11:39', 0, '0'),
(10, '', 'thehuydz@gmail.com', 'thehuydz', '$2y$10$bcmLkrFc0.mLfw7SCW6v9OjTxy2/nSSe1JT6vTwZpmco7A6LVwvD2', '2023-10-29 00:15:27', 1, '0'),
(11, '', 'anmayquakhu2004@gmail.com', 'alex', '$2y$10$iH/efBI4IF98IbujWEcIq.LvY42WturmMl7dnl8Itg1fnUiMmzRhi', '2023-10-29 00:19:37', 1, '0'),
(12, '', 'dang@gmail.com', '100', '$2y$10$.mbDGX0oqvuIwGtUlHLon.WlkmOeh0HpG3d7h5MXqXa.bF7rWGvwa', '2023-10-29 00:26:56', 1, '0'),
(13, '', 'aphap7033@gmail.com', 'zZNLPBZz', '$2y$10$oUT2.QfvVnXLTEgg72FsM.KdDLspXY5ZlnTALO4Kb0wPZUDRScmGG', '2023-10-29 00:30:19', 0, '0'),
(14, '', 'j72821990@gmail.com', 'NLPB', '$2y$10$LBXvsGRcuuJKg3H84NQDN.Ffgf/W9Px3/aHLVY6DXgYf3yajHM8TS', '2023-10-29 00:35:06', 1, '0'),
(15, '', 'ngocquandz@gmail.con', 'ngocquandz', '$2y$10$R44dBJAwQ.S7Kofljey4mOeN2sOuJi2pdrV3LqcLXoCIhUzzhnrpq', '2023-10-29 00:36:41', 1, '0'),
(16, '', 'hoangminhhai123@gmail.com', 'hai hue', '$2y$10$hAqg9IO5/BwMop8DSTKC6.3mBNcaLDANNRXE6uRyWaORo9j.MMHxm', '2023-10-29 00:45:40', 1, '0'),
(17, '', 'phung155vm@gmail.com', 'phung155vm', '$2y$10$pmS/ZgJ7mUAPL2VwJMv0eOAP1UINXEy/tB1WVTBKTliyELOk4mX8G', '2023-10-29 00:52:50', 0, '0'),
(18, '', 'alexdat2004@gmail.com', 'adams', '$2y$10$g4xg0rCwAY7kSh4s6Oxihe55OYpmX3HbpohmoTqDD9PmpilSd5pKq', '2023-10-29 00:55:41', 1, '0'),
(19, '', 'duylam6488@gmail.com', 'duylam', '$2y$10$FB6VOC/VZjtC7JnKGURTt.jGygWw9Gpn8vel5nSzES9ZZB.r8WCP6', '2023-10-29 01:08:05', 1, '0'),
(20, '', 'NguyenTuan033544@gmail.com', 'NguyeNTuan11', '$2y$10$F.wnKKlfMW4DDCAs.WOnhONx/IKCxMp3Oe78PEP8S5//XcYHq4ySW', '2023-10-29 01:22:49', 1, '0'),
(21, '', 'vanduong24024@gmail.com', 'VVD', '$2y$10$UMqTD8cpBsbqOLYWBZ8UCOGVyb516ZxTH1nT.ph54aX8IXFpXmUea', '2023-10-29 22:19:58', 1, '0'),
(22, '', 'tuilakiet@email.com', 'minhkiethihi', '$2y$10$zwxy//YGNHpwsVf6axG5beQhVd2be3d35iGP5H3OYyyhEuVnVpG.S', '2023-10-29 23:09:15', 0, '0'),
(23, '', 'huynhcongsen123@gmail.com', 'huynhcongsen123', '$2y$10$V3Z5RoJcII1KhgHzpFNc.OUPDejdS8di2H6PA/7zcBjiBLEHa0Sxe', '2023-10-30 10:18:31', 1, '0'),
(24, '', 'thanhlong1477755@gmail.com', 'huuducdz147', '$2y$10$BxTS8eqNtTFl7aqkzUMaGeJr.T8Z3TRcG26HAwtOnoHtrfqjUl5vu', '2023-10-30 18:03:07', 1, '0'),
(25, '', 'huutan1882008@gmail.com', 'huutan', '$2y$10$/o.fLMF7g3S1zjpFskaag.Fu6n2Zri4olLdD4H3i64xKjhbrqSCu6', '2023-10-30 18:12:12', 0, '0'),
(26, '', 'hnammedia06@gmail.com', 'hnammedia06', '$2y$10$2zk/y9MDQsvyZxGQG7xgYuZndytFwAQBj8KRvXOrIe75.ZhmmeXuC', '2023-10-30 18:23:18', 0, '0'),
(27, '', 'thanhphong208dz@gmail.com', 'Thanh Phong', '$2y$10$uVLOVhvJewmjsfXW418/1.UIfeZgLVbr8AA/G18NOy63aGQEQnw6K', '2023-10-30 18:25:54', 1, '0'),
(28, '', 'daothailan123@gmail.com', 'daodeptrai', '$2y$10$egAlfZcxCEFWPBrVhrURpeYQQttVUTBqemLKMleUoxw0jwAPmvmLG', '2023-10-30 18:25:58', 1, '0'),
(29, '', 'theac420@gmail.com', 'theac420', '$2y$10$yY66WP4ppb8ks0wvlni6VO8KpTm07rNtHIH0oBSYuu7ANoCdGV34K', '2023-10-30 18:28:12', 2, '0'),
(30, '', 'ngducan123@gmail.com', 'duc an :v', '$2y$10$cpn0h024BebXiLUwVKyGreeqLOiPfw3ADq5f0F/dH/85dBiKPCGkG', '2023-10-30 18:42:24', 1, '0'),
(31, '', 'taonequanconcho@gmail.com', 'AMIU', '$2y$10$u7PcV1MwCuOrz1eOmOSakeevtguBPL4/ARe4BoRL41uXBQRwui4E.', '2023-10-30 18:45:02', 1, '0'),
(32, '', 'sonnumberone2005@gmail.com', 'son', '$2y$10$24Xfa8LVQ0OzMp80oPatVeYHCL0iyBVGQICSjJqAy3vtMrymaBz6W', '2023-10-30 18:53:33', 1, '0'),
(33, '', 'asd@gmail.com', 'asd', '$2y$10$kB2sAMQWHq9Uk8moA0ThvuDdSVylu2.UGNz0bVNSPAW7/T6Ldy11a', '2023-10-30 19:01:09', 0, '0'),
(34, '', 'voquangdao@gmail.com', 'voquangado', '$2y$10$CSYSDjlTIRYFphDDmAYr6uKb0k57xBpyXVj.nHrZrX8p0LyD08PX2', '2023-10-30 19:01:19', 0, '0'),
(35, '', 'tyxombao123@gmail.com', 'xombao', '$2y$10$vKp9Ei8pDnRyzTEvDjOZeu4BrZC9JoZfRiHdm5veVGTaUdl3pnl3a', '2023-10-30 19:08:24', 0, '0'),
(36, '', 'tranphi1asd@gmail.com', 'huuchien', '$2y$10$oSpUJurhL46dVgEj1072fejJZxKvqNOhPDuPCLB.VrOE477k0Ekly', '2023-10-30 19:09:09', 0, '0'),
(37, '', 'concac1@gmail.com', 'concac', '$2y$10$8uxcQeQ8vaLK/A4Tjlfsa.2Uimv8MKO1ISli8IpI/g5oCk5oP2Ka6', '2023-10-30 19:21:19', 0, '0'),
(38, '', 'nguyentridz123@gmail.com', 'tringuyen123', '$2y$10$MBh2GHXd82MRntQxkLZA9.AiEzyIa2HDQ68OlGGDDus2QV5FR2UOq', '2023-10-30 19:32:43', 0, '0'),
(39, '', 'trongggvannn@gmail.com', 'vantrongdz', '$2y$10$EQR4TdgOa.j.1aGr4R9qDOwqIf8rus00MNfiDg.rc36KNMekz349S', '2023-10-30 19:33:40', 0, '0'),
(40, '', 'hiendat2007@gmail.com', 'HienDat', '$2y$10$nuFo2DP9MHk9i.N1F5aMY.hXaIm7e.Feh0tdT44IrmnmhvPId9ZSu', '2023-10-30 19:40:06', 0, '0'),
(41, '', 'concac@gmail.com', 'cmmm', '$2y$10$P8XP/iSe0qMUojS.VSQh7e3n5owQVHm9u40/b1K4TOeacMHxwNjzm', '2023-10-30 19:45:25', 0, '0'),
(42, '', 'thangngu@gmaill.com', 'Annhlavip2', '$2y$10$gxbIAMjf5JFMAeOEVMbwhOO50a3sQLyQrHITG2PQ2ZMzWjwExbkma', '2023-10-30 19:52:30', 0, '0'),
(43, '', 'truongthanhhauvnn@gmail.com', 'XCOcO', '$2y$10$FCbFkazrZi/I9kuI1xKdwOUihPGiJCH7EocNOpkNlQxDxmV9Fv0a2', '2023-10-30 19:52:38', 0, '0'),
(44, '', 'cutisq1203@gmail.com', 'sqsqsq1203', '$2y$10$W3QhgfgfCF11SGMVXnjPGeRbEJblFrR/wtqs06Rq6wKuweTNZYEQe', '2023-10-30 19:53:07', 0, '0'),
(45, '', 'thangngu123@gmaill.com', 'Anhlavip2', '$2y$10$PhwFhCQHEjgo133dC0icruL3EkUYaiymeHXt4u5pTESUlVS9fjZ6O', '2023-10-30 19:54:39', 0, '0'),
(46, '', 'haidang@gmail.com', 'haidang', '$2y$10$/HAL9Vzv0aNlGbwi4SaNZuYnpgwo0TFfcfrNxkm44OEOLpJs8iVJ.', '2023-10-30 20:04:50', 0, '0'),
(47, '', 'cut@gmail.com', 'ngu', '$2y$10$PJxd5qwiyk.hW.2cu2uU9OsrteUP0Etl4/wctBtsLRvKqQqGq4nZS', '2023-10-30 20:05:15', 0, '0'),
(48, '', 'thanhturobedz@gmail.com', 'THANH TÚ', '$2y$10$i.Tfr12Oosw0m7nOCrNfxeG6db0G41dDLsJ2L04mOLSrERuw.vWAu', '2023-10-30 20:10:40', 0, '0'),
(49, '', 'taile204@gmail.com', 'taile204', '$2y$10$zUBnv9NWR/IH9NNNWULDzuSbtcIiGGHygkOYC.DR/BM6YgsqjyN66', '2023-10-30 20:13:39', 0, '0'),
(50, '', 'Nguyenviet03@Gmail.com', 'viet0001', '$2y$10$SjdqQOhzfqDnzyQCkkD51.7xVjLIfk5s3n.jQLLZPrSytVzvU1nbu', '2023-10-30 20:33:25', 0, '0'),
(51, '', 'nguyenvanbaye@gmail.com', 'lz me m tran kim truong', '$2y$10$pCJeXya3yhd2TBxbmUKAXOPFqIkSo04zYK4i0mO0/D7K8GakgLKN.', '2023-10-30 20:51:30', 0, '0'),
(52, '', 'leanhdien207@gmail.com', 'leanhdien', '$2y$10$33Ye.fRAxR1gx.KQZmSiYOFl44aXJnPMWwaSdM2Ewt.u04pyAfNcG', '2023-10-30 21:00:40', 0, '0'),
(53, '', 'chuong2008@gmail.com', 'chuong2008@gmail.com', '$2y$10$viXAGE3MhT.LLnfUnwvRV.5zpHMZMz/syeLJrsETZ/npy3bkAYD1a', '2023-10-30 21:13:26', 0, '0'),
(54, '', 'nam123@gmail.com', 'nam', '$2y$10$GIZg7Q19mHYgW3QNPUQDD.//6iNh5rN36VLuu5m1o3HW/hZYVHUcS', '2023-10-30 21:13:43', 0, '0'),
(55, '', 'anh5daubo@gmail.com', 'anh5daubo1', '$2y$10$c0eC6QjAhMzcbJvuDW7JLuhDEtK1gFzrbxAU6Dw1julTZk6misnZu', '2023-10-30 21:17:49', 0, '0'),
(56, '', 'hdm239@gmail.com', 'hdm', '$2y$10$/x8N7.3TE32lTtJ5V7XmVuhxV0o25dYnTWRc74dTlMgSSumOxczcS', '2023-10-30 21:19:18', 0, '0'),
(57, '', 'nvhau36@gmail.com', 'vanhaudeptrai', '$2y$10$aSDLioQNLUzO1qoDX99g/e9MpI8ggW0vdLA7tJhdNqq4x9Pos0Bdu', '2023-10-30 21:47:51', 0, '0'),
(58, '', 'v5g.khanh@gmail.com', 'Nguyen Khanh', '$2y$10$tfdrYwMUhbZB00T6yDdrV.UP6dUbfwOBKTiKw6Y5usETBnqn14QHG', '2023-10-30 21:48:37', 0, '0'),
(59, '', 'duongthicamchi1307@gmail.com', 'dcamchii', '$2y$10$fPcJq8XxuwNnc6T2bc3h6ev.F/c0apgDQNOSzzGvx5sJCDW5eOxBq', '2023-10-30 21:48:37', 0, '0'),
(60, '', 'cailozphong@gmail.com', 'cailozphong@gmail.com', '$2y$10$q.E6CO5/DCb3kEwMsYK4d.X1fnbxHe7DsHhYe8oHfvIOXVPI64Bpa', '2023-10-30 21:53:42', 0, '0'),
(61, '', 'cuuvanlong01@gmail.com', 'longvu', '$2y$10$ig7iJ0EilPsr1VS4aH8Ln.Fx.wocTRawzTBNkvaYjSPHIdDFp/cD6', '2023-10-31 06:44:19', 0, '0'),
(62, '', 'acphuquang1@gmail.com', 'acphuquang1@gmail.com', '$2y$10$KKJyDrIltBAlg5esZv8ym.ZPHf2lypynwzjGywze4F3z1rBll70Le', '2023-10-31 08:32:00', 0, '0'),
(63, '', 'duytranasd1234@gmail.com', 'duytranasd', '$2y$10$bcysjF1WiUgJbOXv1gq5yexdRwt57Y4sTSzpmXPSb3KvBfipO7FmS', '2023-10-31 10:34:31', 0, '0'),
(64, '', 'em@email.com', 'em@email.com', '$2y$10$fgV60h2ouPJT9lcZWvIXe.o9Q6fw0TeIdVENlNOW43EjPdUcTke1G', '2023-10-31 12:24:11', 0, '0'),
(65, '', 'dinhquy477@gmail.com', 'Lequy123', '$2y$10$yoKw0CquwwSnk8Oz7YAog.fdkq7QFVkOez66fYtXwJX0XP1NElvtW', '2023-10-31 12:55:21', 0, '0'),
(66, '', 'GG@gMAIL.COM', 'GG', '$2y$10$VwwrvBU.N4v/XGLFv/Qe/eGNbycVFOEPLt2kNzaoJ/n6dI5cbeFGG', '2023-10-31 12:57:14', 0, '0'),
(67, '', 'kobe@gmail.com', 'kobe', '$2y$10$P.fVOzzYXjbbJQBV/JBFDuHoSrnBd4zldFwsVrvWmFiwQ.MLbJ6Ra', '2023-10-31 13:01:46', 0, '0'),
(68, '', 'congn@gmail.com', 'Ng V4n Cong', '$2y$10$uKSWuf2A5Fp0uH4wsmNlGelH7.y/unhXCSvFj3FJvUsuxyWoQDPk2', '2023-10-31 13:05:04', 0, '0'),
(69, '', 'ilvominhkhoi@gmail.com', 'VoMinhKhoidz', '$2y$10$fyTfCGPYL27Xrz4qXDKYB.XtArvVLZHBXEq3Rd2zslAr0uC7VQkJS', '2023-10-31 13:14:10', 0, '0'),
(70, '', 'logjc10@gmail.com', 'Ronaldo', '$2y$10$cQnXlEmPIKR4OuB5jSHGOexNEuYvjD1IgBR0TQmixINb51y/C4zL.', '2023-10-31 13:28:42', 0, '0'),
(71, '', 'pham2020vantrong@gmail.com', 'vantrong', '$2y$10$qBCq/UdtnRGNbuYJhaOpJ.yPtjw567ur1JYOurZi87ax03KO4uLiC', '2023-10-31 13:36:21', 0, '0'),
(72, '', 'kendybmt147@gmail.com', 'kendybmt147@gmail.com', '$2y$10$wxVQXlFszNJ.sjJi1YI2huTWt6hsuKkDdCG4RBTCyGt.Z06ZIyyJC', '2023-10-31 13:37:03', 0, '0'),
(73, '', 'haixauchai004@gmail.com', 'taolaaih', '$2y$10$46eLzFQb.JOhnmxuwYUFJeNmCx14GRsST.bQ1h1EsjMloZHDQ5RRa', '2023-10-31 13:43:12', 0, '0'),
(74, '', 'win@gmail.com', 'Mr Win', '$2y$10$Da7MiLqP49qQ.SGcq0Twq.Dw/kQnn/R3IVvyeRHu6wkAydOfCYRgu', '2023-10-31 13:57:02', 0, '0'),
(75, '', 'khanhtoanst01@gmail.com', 'toanst2002', '$2y$10$Oz2mpONZb9kEMdAIY8JxUewJxczap1ibpr/wC0qcbZPW8ZO8oG8N6', '2023-10-31 13:59:39', 0, '0'),
(76, '', 'nguyenvancuong2004@gmail.com', 'cuong123', '$2y$10$uz1YI8UzmSR1vZ2JlVvJgOmD9fg1YujVXaxwddNT3fk7u53bY25P6', '2023-10-31 14:43:30', 0, '0'),
(77, '', 'duyyyyyy1122@gmail.com', 'anhdyy', '$2y$10$OvvZSsoPguecidgKJ1IyVeZh75CSII86na7IvWiFHZpEUPnEcV8Dq', '2023-10-31 14:55:04', 0, '0'),
(78, '', 'cuong2000@gmail.com', 'cuong', '$2y$10$HBwR2yKdVSxBEADj//Fg..ML6QISkmk9NEKgYgWbNsouBrLwN68hC', '2023-10-31 14:56:48', 0, '0'),
(79, '', 'ko123vn@gmail.com', 'komanh', '$2y$10$jExeeiAOJNcQSVFSOkZaLO4T5vdJMQLcq5xOlKBH4nj4ZaAipEuUm', '2023-10-31 14:58:27', 1, '0'),
(80, '', 'anh5daubo857@gmail.com', 'manhdaubo1', '$2y$10$ic7l1gHiYey/9n11h08EL.hd9qcrNJSZdtJujI0MSgm85mwXpM0Em', '2023-10-31 14:58:27', 1, '0'),
(81, '', 'truong@gmali.com', 'phambao', '$2y$10$SgDxrdDOiNmSM7MxyYr8o.hbCtTSU3V.nnSoaRzhbZDwIqqYEuuLq', '2023-10-31 15:04:01', 1, '0'),
(82, '', 'mighi@email.com', 'mighi@email.com', '$2y$10$.0VXNgUHUff7DU9JSbvq5.q8Uf8jFRpkKEdGbdC3g7JrnlLDMSVwu', '2023-10-31 17:19:35', 0, '0'),
(83, '', 'Phamvantrong1@gmail.com', 'Torgnleeee', '$2y$10$u/633JlIhrtGjrIKvMuCSuF87bedFM1JwHEwzgbI4jPJeWqcX/OW2', '2023-10-31 17:27:01', 1, '0'),
(84, '', 'ninhquoctuan@gmail.com', 'dangcap123', '$2y$10$xeIKVVBNkouHXT1cuzY4O.ycsThpvvMyg/BkZxkUegev8QDqXS4rq', '2023-10-31 17:39:22', 0, '0'),
(85, '', 'thanhdan11st@gmail.com', 'thanhdan11st@gmail.com', '$2y$10$k81mKgT3lMc0tjzI9D70n.Usczat.nGWSvDEbaAHjqZBbx7rg2E5y', '2023-10-31 17:39:44', 0, '0'),
(86, '', 'shjnereal.url123@gmail.com', '123123', '$2y$10$8ag6CzsYApjBBVzoY91X2.Z6sNDI1BNVxs4sG4dbmHrczSRRqn1PC', '2023-10-31 17:39:54', 0, '0'),
(87, '', 'thanhdat333@gmail.com', 'thanhdat', '$2y$10$lsCc1o1RQdwzYZZB/aNlAO5dj95xkbp.U64zYPc7EQDNSHKONP16C', '2023-10-31 18:11:30', 0, '0'),
(88, '', 'nguyenthikimngan@gmail.com', 'Kimm Ngann', '$2y$10$rhIF4UM.aTwRmXmX.8Df5.MjB20wBJEAxx57IlNsj5yTjaJGFBO76', '2023-10-31 18:16:57', 0, '0'),
(89, '', 'ccbamay@gmail.com', '0921445460', '$2y$10$ssrXA2YRJbdYhiGBsYAF8uvWdTEV51AvIBfrSQhpTGFAgnRSx17Rq', '2023-10-31 18:23:41', 0, '0'),
(90, '', '0326053047@gmail.com', '123asd12345', '$2y$10$2H7cnqJAELePMhnBGpPppOVlhlVktJLnCK1NSnXbrVr2UOYT5YUSS', '2023-10-31 18:32:31', 0, '0'),
(91, '', 'anhdan@gmail.com', 'khong co ten', '$2y$10$m4e09kZzz6bVxohn50hWE.EVnDZ.xX.KMDuEKvxW5FHZ8Jv.JeLae', '2023-10-31 18:49:46', 0, '0'),
(92, '', 'zikenopro@gmail.com', 'Ng Van Cong', '$2y$10$qoe0D2I9rH/z9BjnrOHwK.pYkMqySIpzRd7fZNxHAFWDBhaMQR5hC', '2023-10-31 19:06:16', 0, '0'),
(93, '', 'asdasd@gmail.com', 'boo', '$2y$10$uWl7v/ugvMW20PE4YT/i/OfdHQbd7vxZ7DC.hz5aOVv4FdYL5Ea4q', '2023-10-31 19:42:35', 0, '0'),
(94, '', 'concac1599@gmail.com', 'Ngo Thanh Tai', '$2y$10$iQF9tzHvoMCps5bBPgXdzOOcE.Es6Tik8pmMpxszTBZcKiBeqCvqO', '2023-10-31 19:45:48', 0, '0'),
(95, '', 'abcd115@gmail.com', '16', '$2y$10$4avA88H.kbOPzQIs3N106OA1MiE19ILkINfo3pTe5No3MgSmVgPn.', '2023-10-31 19:49:34', 0, '0'),
(96, '', 'phatphatkg68@gmail.com', 'Thành Phát', '$2y$10$JQ2rq4PNtxJ4ZXkFHyElvOV32ZGv7YoqsNQQSEfz/Qd4MX0TVHUOC', '2023-10-31 19:56:44', 0, '0'),
(97, '', 'phong123@email.com', 'phong123@email.com', '$2y$10$bEoC72tiNIPPaL0Wl4YU/edABA7.iy3QM60GLs1Y7qQUGmxlIaOhu', '2023-10-31 21:07:52', 0, '0'),
(98, '', '0979655191@emai.com', '123456789', '$2y$10$5FKT4Mm.lokqUORi2CzyJOchhe5.cr6dJAxhC6p1hc7695p53pdMO', '2023-10-31 21:16:51', 0, '0'),
(99, '', 'tnt.13369@gmail.com', 'chidatd', '$2y$10$d4/99NMWrhQhkXJeUt7aA.PhrpU7fOZxZSmaIPw6ST7fScbe9L0Qa', '2023-10-31 21:47:37', 0, '0'),
(100, '', 'ritruong90@gmail.com', 'Haha', '$2y$10$quk5ReIPxXQla6Gsongqhe2CTkHeKTYbnVt6vG95tKNrELdXFnlJO', '2023-11-01 09:04:57', 0, '0'),
(101, '', 'asdasd123@gmail.com', 'asdasd123@gmail.com', '$2y$10$GVIlabjGqyMNk1r3DXq8U..0mbdHsrPmyAPcOAy835XikKNhkUxj2', '2023-11-01 10:38:12', 0, '0'),
(102, '', 'phat0867442534@gmail.com', 'nguyenvanphat@gmail.com', '$2y$10$z4s9jmL8UaTY9.8Ag8bJLuAEh.nOFXN/P.tQhUO9Qy0OeyayZE2Tu', '2023-11-01 11:12:41', 0, '0'),
(103, '', 'luvabi123@gmail.com', 'bivalu12', '$2y$10$iENlUCtr6Fn2vQRAyCVICeJMTpuMiCQ8AHzL7v/rIy4aZhdBBwfta', '2023-11-01 11:29:52', 0, '0'),
(104, '', 'quocvu@gmail.com', 'vudeptrai', '$2y$10$6KQMrJe5qW30gzIt2jtmZuxPXwzDwQV.Nac59G.FGKA54BQKbZKX.', '2023-11-01 11:34:29', 0, '0'),
(105, '', 'phatkobe@gmail.com', 'kobe07', '$2y$10$0eTq5ZUHUDCUF8R6xa/9Xuc0wUwjZW35s6ByElxx4zHh2h7M.6oI2', '2023-11-01 13:06:45', 0, '0'),
(106, '', 'asdddd2@gmail.com', 'CCAS', '$2y$10$HYbxBYCYi0jLTf34uQVHE.C91sjSGsXWeOfZksUGIrxJsoiXaP0e2', '2023-11-01 13:56:25', 0, '0'),
(107, '', 'crystal.degargm@exbox.vn', 'crystal', '$2y$10$vnfbb45k8YxRWN18ovcFkO9gaYjyv4WH8CE10FKk5a1DmGHNR2wSK', '2023-11-01 14:35:05', 0, '0'),
(108, '', 'nguyenbong191122@gmail.com', 'Bong', '$2y$10$Pg5K7m0Vvjltzne5GLy7ROLZwlKRmamXV8rfGyCdCEDc9AZlWjnDS', '2023-11-01 14:41:01', 0, '0'),
(109, '', 'batnha@gmail.com', 'DAT', '$2y$10$w7UF8iiR0IRB9ghXXLqRcO6Gsb/9PlpFNPhDZ7.nDOmXuwYRMLC8C', '2023-11-01 15:05:40', 0, '0'),
(110, '', 'trinho@gmail.com', 'trinho', '$2y$10$9UUaIMKkI126GI88mXrMwOGUMjIlDox94Iqac1fQPsZ1EcD4kDg9K', '2023-11-01 15:36:06', 0, '0'),
(111, '', 'binsosad2005@gmail.com', 'badyou Bin', '$2y$10$kIihQkKbS1NqR8mB5FziUuGbD5U438ioVttGcvfpoHOLeZmSfaknu', '2023-11-01 17:30:17', 1, '0'),
(112, '', 'HieuPhuc2007@gmail.com', '0978013610', '$2y$10$5hdQnwky29nbmAjDZ3Z2y.ztXvG/hobwUkgog7jukYUdeVqeahoBG', '2023-11-01 17:37:49', 0, '0'),
(113, '', 'phamtrangiathang2004@gmail.com', 'GIATHANG', '$2y$10$UFTr5awWrfUd2UehgpPSHu7VHMFtceb7GaKoeoe/60EJW/lScy3Qu', '2023-11-01 18:40:30', 1, '0'),
(114, '', 'letruongdanhdz@gmail.com', 'Subeo', '$2y$10$YBnG.XGcc/SaOPsy21oV9.mLwUbI5C3/7.LP7GiXAY0xaTBtLpVyy', '2023-11-01 19:43:27', 0, '0'),
(115, '', 'dl@gmail.com', 'Kieu Duy Lich', '$2y$10$w9AizNhoopon1ZOs9xVHUOolCrAMdvWsLC4S9iZW6YYtdW.Ok022m', '2023-11-01 19:44:54', 0, '0'),
(116, '', 'xboo@email.com', 'asdsad', '$2y$10$U0RrtDKjdfNo8S94nQLc7O8crJVz7Oiv8SS2zKcpbeA7VlyckK9GW', '2023-11-01 19:55:55', 0, '0'),
(117, '', 'anhhoang934313@gmail.com', 'Anhcailon', '$2y$10$P/5VyQA9eLCCandtqSPO3O94tuNVOrhkXDpzpJLdJiQdQ0fXqKrAK', '2023-11-01 19:58:49', 0, '0'),
(118, '', 'baobechanh@gmail.com', '01695701583', '$2y$10$HYzBdpFFvNPW5l8Mj.AIZO8Eh98Z9JfEOPpaFCaE/zcThUog4.vjK', '2023-11-01 20:46:46', 0, '0'),
(119, '', 'anhgen@gmail.com', 'anhgen123', '$2y$10$r2uyFQhBgQpH.YWfQ8x1KOF0W4eso1sbkcfJMSyTTt28K9p0tsq/e', '2023-11-01 20:57:35', 0, '0'),
(120, '', 'airoicungphaidituthoi@gmail.com', '1238996', '$2y$10$F.MtOH1/G8dP0joywxQFDuGrv8dPz6rDoWvXwmGfWEgNYq82d6zri', '2023-11-01 21:19:22', 0, '0'),
(121, '', 'tungdangcap15gg@gmail.com', 'Puranus', '$2y$10$Np74QcS3EMHpi7vkp6uiKOzjfAGDN1eJH7T44vkGbzfVFvsdz4kpi', '2023-11-01 21:30:50', 0, '0'),
(122, '', 'minhquy02102003@gmail.com', 'ToiRz', '$2y$10$1b4vxs8sc5F0yG3bG5kFbe7Mx4I6IQddiGokxmk04SHDVGEQ4PBhy', '2023-11-01 21:37:53', 0, '0'),
(123, '', 'chungvachung20@gmail.com', 'nguyentanhung270302', '$2y$10$IENRJnwW.yVXPhviYf3UNey9gIjxESWu8HyW2q.N0lu9JH5I3dpzW', '2023-11-01 21:38:07', 1231234576, '0'),
(124, '', 'hominhhuy2k8@gmail.com', 'huutan18820088@gmail.com', '$2y$10$mJAYVZbsbZYmJ4LguL2RCeQpJOBgRRtqNVMCeZTSuGTYCTjC9jJ0i', '2023-11-01 21:40:25', 0, '0'),
(125, '', 'duyn0804@gmail.com', 'duyn0804', '$2y$10$5m8rFVZwO/hPtZBrkvTjLOLqigCe6JLrkvYPGWKNStS5HfuJZiTd.', '2023-11-01 21:44:14', 0, '0'),
(126, '', 'jsisissjjajzi@gmail.com', 'lalalaa', '$2y$10$ziaytFkxlh6ZdvYoiZvsIuYrJ0TMkSL00ao.F92IRuA.MXYP5a/y.', '2023-11-01 21:52:10', 0, '0'),
(127, '', 'djssjss@gmail.com', 'kskss', '$2y$10$1c.KPee2t.iAA8LlqFkyrOciVCM/aAfFHRkNN84uY9mkDNVYTCapO', '2023-11-01 21:52:59', 0, '0'),
(128, '', 'namlagipi123@gmail.com', 'ngocnam', '$2y$10$R026erIvMOV8/aL065qP.eHyj6An6lK/Z5YaN.S7ehVj5VLMCOURK', '2023-11-01 22:09:03', 0, '0'),
(129, '', 'minhtanpython@gmail.com', 'minhtanpython', '$2y$10$KkS27h7NGGM2LOoEUHDc0eZqLNjlLX5P21LVr3QuauOFc/bsxs89i', '2023-11-01 23:21:54', 0, '0'),
(130, '', 'dangcapquockhai@gmail.com', 'quockhaicute', '$2y$10$1DzAi4NLi66lwmw8f7GMY.1/ihhFc8qB8BbiOJR293xVokdlN43NC', '2023-11-02 04:30:12', 0, '0'),
(131, '', 'michealhost12@gmail.com', 'quockhailatao123', '$2y$10$PI6NeoiX5yC6Wr0JGB27/eBLm6TUSf7iuWF3XVd9441TzzOMgqT3K', '2023-11-02 09:32:47', 1, '0'),
(132, '', 'embengan26@gmail.com', 'embengan', '$2y$10$cydCFrxjFQtJIBgJScQ3XupHSnEb/diyxqk/uG9fX1TVRA/2JPBTm', '2023-11-02 10:55:13', 1, '0'),
(133, '', 'bpham1914@gmail.com', 'Pham Van binh', '$2y$10$fAqGw7Z0wFUJRFes5xNza.R/DU9fAKRKp/bYhc/LtJXZsvyB2DTwS', '2023-11-02 11:59:52', 1, '0'),
(134, '', 'tanhung@gmail.com', '03387133170785059250', '$2y$10$uJqiOgc0p8.3YYWwKOTyBuOjpr4w8xAzg6x11xxbYDy1cegUlabf.', '2023-11-02 12:13:46', 1, '0'),
(135, '', 'Buivinh629@gmail.com', 'MUMBLE.T', '$2y$10$wJOoXlRR5aLYdGVIzm.tGuGqQXbU8sVPInCAPWVrQT0C45bdkWNba', '2023-11-02 12:27:26', 0, '0'),
(136, '', 'kaka@gmail.com', 'kaka', '$2y$10$s8d26WLvNn7CE4STYGoWiupENnk239YwgmsUHvhED8Z6OZWqoKMoW', '2023-11-02 15:15:07', 0, '0'),
(137, '', 'phamvu04@email.com', 'phamvu04', '$2y$10$ZfhrI1NpT15TqOVjG0dFd.ham4XNvb49TynWuRRLZDnDE0LUxCnzq', '2023-11-02 15:27:35', 1, '0'),
(138, '', 'anhoang934313@gmail.com', 'sasasa', '$2y$10$OfBr..ztnTHw2Oaps0caRuZIWZzi/UG7Fski0.Zh3u6nxKRdsXqLu', '2023-11-02 16:15:49', 1, '0'),
(139, '', 'tuanduy1@gmail.com', 'CAO DUY', '$2y$10$3DTbdJaYfWHbnbg2V.EOm.8rGpCPCR9qOp9rjNyAzOQcAKGTtO2VO', '2023-11-02 17:05:31', 1, '0'),
(140, '', 'bzbz@gmail.com', 'bzbz', '$2y$10$Xr3DWWPOPaxZRdzXwIR3G.joQAanxqsFn8tCfb3Wlpndnl.A9hr8O', '2023-11-02 17:25:10', 10, '0'),
(141, '', 'luunhien1@gmail.com', 'COURES', '$2y$10$FzhutAi56GxsaK5USNSVRuAAs30B4KGU.mKTqsRTfR.3NBq9B1mvy', '2023-11-02 20:04:59', 1, '0'),
(142, '', 'hotieuhoa6519988@gmail.com', 'Min', '$2y$10$CTPf4DO4WG7/te0p4kh1juxDqqHvaDrpgdlwXGfFCIcO.2Xh7LZvK', '2023-11-02 20:09:49', 1, '0'),
(143, '', '123@gmail.com', ' giahuy', '$2y$10$f5C/wAMU2Ijw8gjLcaW1m.epmRLV4qAuvI2luXwcZHDVRPjUp.yNS', '2023-11-02 20:15:45', 1, '0'),
(144, '', 'kencut113@gmail.com', 'kencut113@gmail.com', '$2y$10$vfVRxVacIg.k49Uj8rXtgOjgpk1mUwkUe.meOwJFOu6iVHutJrJom', '2023-11-02 20:17:42', 1, '0'),
(145, '', 'ngok2255@geamil.com', 'ngok2255@geamil.com', '$2y$10$CpM9mO7QsSfRYkIjQxJu2.LK/EOaWeTSsRb2AAiUKZbj8YKcMx7XW', '2023-11-03 15:29:26', 1, '0'),
(146, '', 'qhung271206@gmail.com', 'Sáng', '$2y$10$Nfqqz8tnn2R2gmDzzBYv7.snIND1hDzx5GfFmjKqjyPmbKzhvp7Y.', '2023-11-03 15:43:17', 1, '0'),
(147, '', 'bindz10212@gmail.com', 'khucngoclong1', '$2y$10$TQhtCXFh/lvDnrW3HkuabuS6nA8YwHZ8ZGyFRXgHXbElzkfhdO9Lq', '2023-11-03 15:47:38', 1, '0'),
(148, '', 'vanminh11@gmail.com', 'vanminh123', '$2y$10$eDkcRi/m.bKkJ0oa4Jxv6Ow5t6P/z9LeemOoeHxH8Y.t.XHL.d6KK', '2023-11-03 15:56:33', 1, '0'),
(149, '', 'tongchucuong123@gmail.com', 'depzaikhbhsai', '$2y$10$Eoq6GL8.SUFaK93njYiDy.ac15XzENMhIvgx8AOQCQD/AZKZhFdLe', '2023-11-03 16:19:27', 1, '0'),
(150, '', 'todeptrai2k4@gmail.com', 'Too', '$2y$10$lHKmt06gGGy8qZE/XwXbcO7nifZ.TLfImGpqK2EC1hWxJY7oPXg0K', '2023-11-03 16:48:05', 1, '0'),
(151, '', 'luomche25112002@gmail.com', 'luomche', '$2y$10$vHqm/MJBNUK4prqSQd4DCu.dBTLgx8mVETdA9y58owOfQmtZ5rP6y', '2023-11-03 16:56:56', 0, '0'),
(152, '', 'ginpro9502@gmail.com', 'Huydo', '$2y$10$eRUBxl/XviDKgnukxQb2Kep5TZfApBhGDV7Cb60CFWfVDVS6PfPzi', '2023-11-03 17:15:52', 1, '0'),
(153, '', 'vanhau2007@gmail.com', 'vuahau', '$2y$10$z7QY8w2OFQGs4GvbrA5qEeOfJ1r/Vwe5cnZXgtGJmKC1EOht2BFHm', '2023-11-03 17:33:29', 1, '0'),
(154, '', 'tungdangcap12@gmail.com', 'nguyendoantung', '$2y$10$EuWfmoFAbMEtP8kcXF/OsOci1EkyJpT6ibGGQpSnTLDskFM8FOEZG', '2023-11-03 17:51:49', 0, '0'),
(155, '', 'ntkn@gmail.com', 'ntkn', '$2y$10$INE6V08sCwb.WF5BaJ35l.JE/k8gY7Sno1hBUqgSetgF.2ZAVZ2gC', '2023-11-03 17:53:11', 0, '0'),
(156, '', 'nhocnhut789@gamil.com', 'thainhut123', '$2y$10$sprjBYRtx8gVn/bVwWbnx./evl36TkOYIR1hPerSY8uz3Bjo4JLJu', '2023-11-03 18:08:23', 0, '0'),
(157, '', 'hoangphuc1506xxx@gmail.com', '123123asd', '$2y$10$oq1aTD.emj7TheTbU4VVJusv07fOc0eYmye4e1AW.NKkL5LTB7fEe', '2023-11-03 18:09:44', 0, '0'),
(158, '', 'trannguyenquy2411@gmail.com', 'trannguyenquy', '$2y$10$LttBpDhY.kq8ysaWdw5M3.lmlSSB3dOuY0RLjKtxlLjt/WZ.AH3WS', '2023-11-03 19:00:28', 0, '0'),
(159, '', 'nhq2k22@gmail.com', 'hoangquan22', '$2y$10$0ztU0pwSh6Dqx2Ydq/7U1O3XRZouJmtpwnsrD9z/YTBYpd7Si2LOe', '2023-11-03 19:31:06', 0, '0'),
(160, '', 'anhnich123@gmail.com', 'xzQ_uyxz', '$2y$10$rpc3MX5mWuVEMGPELdeRc.KsMwh6CiXhjYFCCGDXXh.KcvQG05cPO', '2023-11-03 19:38:41', 0, '0'),
(161, '', 'tle934313@gmail.com', 'Anh', '$2y$10$addgnGzCJHYrsLjI/GeiJOWKdMOhvb6GbnaPOiuKKzz3W7TdDYDee', '2023-11-03 21:50:51', 1, '0'),
(162, '', 'buingocloc@gmail.com', 'chipisme', '$2y$10$gACMWLGu6NC.4.QD3m/0nu9awsDX0oq/xE0e/.eAYtogZz9kxjVgq', '2023-11-03 22:01:41', 0, '0'),
(163, '', 'vinhlsr12@gmail.com', 'huuvinh3979', '$2y$10$xJp8Frdrzmn.zfUU6oDUougxeVuOJPDBqOhaqOS07GWqm28MUSvhO', '2023-11-04 00:43:35', 0, '0'),
(164, '', 'bine0110000@gmail.com', 'Bé Enn', '$2y$10$BvxyNjdFjzAK8FRvPzH8Y.7eOC7xSVr/RUlXjuSndn3gpWgsVhL22', '2023-11-04 04:02:20', 0, '0'),
(165, '', 'vtnpdhpl@gmail.com', 'Dhpll.l12', '$2y$10$EMLD7mz71522VWHLiWpmM.j2OXl7QC5AzLQO8gDrejQ2uzjeF49AS', '2023-11-04 14:20:00', 0, '0'),
(166, '', 'trancongminh239209@gmail.com', 'Minh', '$2y$10$FTium/VU2RFIYSA8.fDPgOvwsDcgLPqblEZOYIxWvLNkp0EGh73HG', '2023-11-04 16:03:24', 0, '0'),
(167, '', 'huunam2003@gmail.com', 'namhuuhos', '$2y$10$RgHI/O7qYh4ocVSC3H4Tr.yvLfKhJBWOf4B/zD5k.21fJ8fpucCRC', '2023-11-04 16:46:38', 0, '0'),
(168, '', 'huutin630@gmail.com', 'huutin1', '$2y$10$Npb9rlRlSQyrqdt.Y.8OK.2nuuZnk10mGULtXz89GHWTTYbeiWe0S', '2023-11-04 18:01:57', 0, '0'),
(169, '', 'duong2k2@gmail.com', 'Siu Is Me', '$2y$10$48HnafU78xmH8nQSMJuRoOXGA91FNPfisX7D7d6CXEa4MtzxNXUXq', '2023-11-04 18:37:49', 0, '0'),
(170, '', 'faris.soliman@yahoo.com', 'Budgie', '$2y$10$S8dTdDryHoSPAf/BE5rHLeCWkRzKotVd4OgsvSXIqay7Dx1W7Mdy2', '2023-11-04 21:35:37', 0, '0'),
(171, '', 'tovanchen0407@gmail.com', 'NguyenVanNam', '$2y$10$TIJBWo1eBxZPMWZ3BJTFWueByFq8fZ7SgsHkvXfu47liF6AYH5tw2', '2023-11-05 11:28:04', 0, '0'),
(172, '', 'tovanchen47@gmail.com', 'Gin_KeLSay', '$2y$10$fyX9LCYHKiKnRhVtdtB6eeSw.kepXxTHlhIPMR72ysLSl3nkXHkSW', '2023-11-05 11:28:53', 0, '0'),
(173, '', 'luongthanhbi01@gmail.com', 't.bi', '$2y$10$8ipLE7TogJOYBYHPzvgyJ.EhEVXLd8dPX1uVDolgZ86uHED.561iu', '2023-11-05 13:23:36', 0, '0'),
(174, '', 'nhm5112004@gmail.com', 'Trangdthw <3', '$2y$10$pr2xq8u3pmtc/o.pcncAruTybjtpUWurH7JVa2CfiroNJZS3stALy', '2023-11-05 14:56:53', 0, '0'),
(175, '', 'huutrong.x@gmail.com', 'Mai Huu  Trong', '$2y$10$jVMyExf55NxgGoGOXi1EXOogxSq7Y9Ff.6K5SpLT6cWuwSZIra/yq', '2023-11-05 18:44:59', 0, '0'),
(176, '', 'duythien1333@gmail.com', '01626953710', '$2y$10$DEwbIdt0cF7fb7nppEJ8KeDu1QC81YqqhIbkDKYTM0SjN1YSqY3ly', '2023-11-05 20:29:18', 0, '0'),
(177, '', 'ngotanthanh.01011995@gmail.com', 'ngotanthanh2000', '$2y$10$cc6KdCbsuysHfnqRUhQ4vucnu.ETWWAYPuzoDEpV89uGhYQDhAjdS', '2023-11-06 20:24:30', 0, '0'),
(178, '', 'CLMMTHANGADMINNGU@Email.com', 'suadiem@gmail.com', '$2y$10$8nZppdzEeGvPYqJXZzctM.6P9ZXNRsSFETkjedI.1qSiPjJCZwSx6', '2023-11-06 20:35:16', 0, '0'),
(179, '', 'luunhien@gmail.com', 'HO LUU NHIEN', '$2y$10$/PUtMqNdSTRQO7X1kj9HSeGl1c97vF1LIMDXrS7BzMJzjD4gO8PJC', '2023-11-06 20:42:37', 0, '0'),
(180, '', 'infoconcac12@gmail.com', '015445', '$2y$10$Ne5yDZh8YmMXUXI2KgvztubpHUu04cOJ02tk514XdssoGBtmFaVry', '2023-11-06 21:08:02', 0, '0'),
(181, '', '123456@Gmail.com', '123', '$2y$10$GKNBGWl1qe.DArEiep4tkON9aEx3pjhh0ig7PBCkN4hVp0426f4.i', '2023-11-06 21:08:50', 0, '0'),
(182, '', 'congminh@gmail.com', 'Cong Minh', '$2y$10$xg8n4BMpOV7S5Q98MHHnjelpFsrgE8m3JTQcNZeECq6esanl3ITzS', '2023-11-07 11:36:53', 0, '0'),
(183, '', 'binhvanask123@gmail.com', 'BV', '$2y$10$2JRVUW0aIG.UZE7gpQtw/uw5wdLHrrXvhck84Z3WlI89u6uuTB0lK', '2023-11-07 11:54:24', 0, '0'),
(184, '', 'tking8888vn@gmail.com', 'tking8888vn', '$2y$10$jZ6Ge7zqj7H4TQ2s3n60s.MW3NmZTJOeVBsK8isOK9x1V1ZMDwjuW', '2023-11-08 20:11:54', 0, '0'),
(185, '', 'daovanlong1213@gmail.com', 'anhkutihp', '$2y$10$GFHpz4YiHe6QSNhAwgvYdOcn5bJV5viQBRtkZPx7GE1SdlAPFpjWi', '2023-11-08 21:05:24', 1, '0'),
(186, '', 'sioru004@gmail.com', 'huy1234555', '$2y$10$1f9Z1ixSsXdTV/RTzmjO4OzKremhXDcWSlhS1aWtfzWrhVGtZDQne', '2023-11-08 23:02:13', 0, '0'),
(187, '', 'phq311@gmail.com', 'kingbp96', '$2y$10$e3f2wCxmvh7Q5DGzV6/6w.BNieAC7j951AK0e0Xwqnpf7uQg/tDu2', '2023-11-08 23:04:21', 0, '0'),
(188, '', 'lxhieu19998@yahoo.com', 'hieu0512', '$2y$10$lsbnCpstYBoo4u831v/9PeroqqnXIsHtv8DpblpAnfewVmFz/v9xe', '2023-11-09 15:18:16', 0, '0'),
(189, '', 'vanhai24012006@gmail.com', 'nhochaicf100@gmail.com', '$2y$10$xq0hoX0qOgiN/xbfR0RPeO5RQG0EzqzzR5L5z/y38XITB5MljPCgC', '2023-11-09 16:27:37', 0, '0'),
(190, '', 'thanhthien@gmail.com', 'thanhthien', '$2y$10$wIjHsCLtlowvEiYqkMcJP.MOIKCBbftVMqCkKgO5RXyiTbcKWVTpW', '2023-11-09 20:52:58', 0, '0'),
(191, '', 'yennhinguyentran4@gmai.com', 'yennhi', '$2y$10$81uPKmD/C4tMJhe8eZvhFeR8t9DCP7jqZ2AQi2or4/dESh1oTEAwK', '2023-11-10 10:07:45', 0, '0'),
(192, '', 'yennhinguyentran4@gmail.com', 'hanh', '$2y$10$FRKcnsb3W4kUzVW/PJmuleeuAc72IM90/vtYDmAhuJjmS.wn2qmiq', '2023-11-10 10:10:14', 1, '0'),
(193, '', 'gladyswheeler20@gmail.com', 'SkillThaPr0', '$2y$10$.5w.M/ZW67GMeguok1B98OEnv5HKH1Ezh0/HTS14ELeynT9oTyTze', '2023-11-10 11:12:46', 0, '0'),
(194, '', 'anhlan147vn@gmail.com', 'anhlu15', '$2y$10$2t7PM6BqIlFI4vB0e3TfY./4qqcfbXhZNXETbWqYtVBwtMo4iwW3S', '2023-11-10 12:56:37', 0, '0'),
(195, '', 'concac934313@gmail.com', 'cincac', '$2y$10$pHS62SqVkTuBp/w452CcsudehQq9li1FiHi1cKK02rTuZO/XRVLFq', '2023-11-10 16:17:22', 0, '0'),
(196, '', 'vanyeuemchangkho258@gmail.com', 'nqk1512', '$2y$10$TqX/xUsdoZL1FDEMHmFl1.CaJHo3XzLze5ciPlvKouHLB5ezEhMSi', '2023-11-10 17:18:25', 0, '0'),
(197, '', 'huuphong@gmail.com', 'Huu Phong', '$2y$10$n3bHYd79BwpTEWDgv5LY8urD6nccACYitvI0VJoJL2wlEHjCia3jO', '2023-11-10 20:48:58', 0, '0'),
(198, '', 'densolo112aa@gmail.com', '0928606362', '$2y$10$13ej6wBZUx9yoheY0rV02ubSMYLUHSE5ajaWy48o3xq1V57xNHLwK', '2023-11-11 09:43:10', 0, '0'),
(199, '', 'densolo2004aa@gmail.com', 'densolo112', '$2y$10$/D5zQuvQ0JYkdwpH5pqFKel8YE7KUzn4MjUOm7nc5cWCg7h9OTm7i', '2023-11-11 20:34:02', 0, '0'),
(200, '', 'lethanhtung15@gmail.com', 'lethanhtung15', '$2y$10$AU/.XXkeIYQIBshDZuQxbOLuM3lz0ekY1dyaSc.CX/1aaoyyRjwpK', '2023-11-12 08:51:37', 0, '0'),
(201, '', 'bidz456@gmail.com', 'bidz456', '$2y$10$ubG9jvKgLyQobVcVW6UF/.kVJbdbBJSpXhA8V7ymD812.LYph9QuG', '2023-11-12 12:23:02', 0, '0'),
(202, '', 'masteryi0811@email.com', 'caoduyreal', '$2y$10$Q9VGYJjDHTBErbO98XWgy.hqbNi.OZsi5.j3xlvrQMieaiY9CoDcy', '2023-11-14 21:24:38', 0, '0'),
(203, '', 'hjhj@email.com', 'kiet.@com', '$2y$10$glWNaNH3LjZWUPOdc0oK5OHmPm.g.g1X7Nhv5GwJGnpQ0ehf16DFm', '2023-11-15 09:04:55', 0, '0'),
(204, '', 'thuyensama@gmail.com', '123456a', '$2y$10$9IM/Yd9tYNr2gsmcUCIJ8ucZ0o.rsoOS3dG6txJNWWvxtPyh19N0e', '2023-11-15 10:27:32', 0, '0'),
(205, '', '2@email.com', 'nap tien vao', '$2y$10$rPohZKldHmLDzhSrxOgmWeWN.Zo.2Ysn62dM7yK9JGhY2DRhqknJy', '2023-11-15 15:12:18', 0, '0'),
(206, '', 'kencut113@gmai.com', 'tgh', '$2y$10$Ub0PB6NI072OJr8szP25cudF9NaDBJUKIUCA.Uj/328xgoJXnVTly', '2023-11-15 15:22:06', 0, '0'),
(207, '', 'daviptrinh00@gmail.com', 'lamdzzz', '$2y$10$/epKxtU8ZCx0UOd5EJnLiOvsGZuPhn.BE8N2/aFGQPiUJxEC1aHuC', '2023-11-15 21:51:39', 0, '0'),
(208, '', 'Trankiet8868@gmail.com', 'TAQ', '$2y$10$NKtMz1aZBjXHMqXBJb8tweqyHo2IjNueG5XyghzD4vE5kVDxSTkVm', '2023-11-17 16:40:58', 0, '0'),
(209, '', 'tanluc@gmail.com', 'letanluc1599', '$2y$10$3OGsM78pg7YPTNgiWLaoC./9D2tKUZs.2TEbJK9icTKlx2B51bXim', '2023-11-17 20:19:21', 0, '0'),
(210, '', 'lxhieu05121999@gmail.com', 'lxh19988', '$2y$10$MBYoM80VnqRnwPASBsdg4u7YE6S.4P8Jk25uEaGivpdaDxW2VG3Q.', '2023-11-17 21:07:37', 1, '0'),
(211, '', 'vovantrong01999@gmail.com', 'Ghostlong!!!', '$2y$10$1hx7t7HqDgiFnj6Sjj1PuuS31NiZCdFz/Nlzn5TUfQyprOV9FWqGG', '2023-11-19 18:32:15', 1, '0'),
(212, '', 'letrungchienx2005@gmail.com', 'trungchien205', '$2y$10$sAtSw4LxtqcQRuCNjqgnl.sNB7ACRcuC3HeclY5BB77yoNcS4ifr2', '2023-11-20 12:53:17', 0, '0'),
(213, '', 'hieuvanmarketing@gmail.com', 'bidz123', '$2y$10$F5aDASjmhwtPoj8mzfLbdus6e9sJltELk3PwnJMyYz3lrOHHtwg0u', '2023-11-22 15:22:11', 0, '0'),
(214, '', 'ngocthanhnguyen029@gmail.com', 'Hailey', '$2y$10$ImQwJ/cFq4MoFA/v63YKXOAW/EAY0xUWxRMJEdpV7.BzyCDeU4bDC', '2023-11-23 17:18:37', 0, '0'),
(215, '', 'hoanghuu21@gmail.com', 'Hoanghuu21', '$2y$10$OcbwyPCm38zVztdJzt9cf.qlLU9LQ/l7EwWpkT6fZZPH8Fj/KUcf6', '2023-11-23 18:57:47', 0, '0'),
(216, '', 'huutin1092@gmail.com', 'huutin', '$2y$10$VlhwQhUpUIghPv2tZQ38XukPLok0Jsvr2aZ4x0zd6dxFvNF5tncJm', '2023-11-24 20:50:24', 1, '0'),
(217, '', 'locvnpro@gmail.com', 'Rip4pro', '$2y$10$GW2BVnns/vEco.hB4y1kUuUt5JaD8F.nYYu1tadA3csv/l0sfaNfy', '2023-11-25 18:54:28', 0, '0'),
(218, '', 'realshjne@gmail.com', 'shjne123', '$2y$10$xJDe5TcfUvRpxbxSi6il8uPnA5kVS.wjaiY2b0QGxRW6bZhnWjApW', '2025-01-14 19:31:30', 54, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `player_hats`
--
ALTER TABLE `player_hats`
  ADD PRIMARY KEY (`player_id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trans_log`
--
ALTER TABLE `trans_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trans_log`
--
ALTER TABLE `trans_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
