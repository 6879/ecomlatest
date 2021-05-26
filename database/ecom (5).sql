-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2021 at 12:44 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `active_users`
--

CREATE TABLE `active_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `active_users`
--

INSERT INTO `active_users` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(126, 5, NULL, NULL),
(127, 5, NULL, NULL),
(149, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_permissions`
--

CREATE TABLE `admin_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roll` int(11) NOT NULL,
  `admin` int(11) NOT NULL,
  `moduleId` int(11) DEFAULT NULL,
  `menuId` int(11) DEFAULT NULL,
  `subMenuId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullAccess` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viewAccess` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addAccess` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `editAccess` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_permissions`
--

INSERT INTO `admin_permissions` (`id`, `roll`, `admin`, `moduleId`, `menuId`, `subMenuId`, `fullAccess`, `viewAccess`, `addAccess`, `editAccess`, `created_at`, `updated_at`) VALUES
(1, 9, 2, 22, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-11 04:35:23', '2021-04-11 04:35:23'),
(2, 9, 2, NULL, 92, NULL, NULL, NULL, NULL, NULL, '2021-04-11 04:35:23', '2021-04-11 04:35:23'),
(3, 6, 3, 20, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-12 05:21:10', '2021-04-12 05:21:10'),
(4, 2, 4, 22, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-13 04:31:13', '2021-04-13 04:31:13'),
(5, 2, 4, NULL, 92, NULL, NULL, NULL, NULL, NULL, '2021-04-13 04:31:13', '2021-04-13 04:31:13'),
(6, 8, 5, 11, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-19 00:14:31', '2021-04-19 00:14:31'),
(7, 8, 5, 11, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-19 00:20:50', '2021-04-19 00:20:50'),
(8, 8, 5, NULL, 97, NULL, NULL, NULL, NULL, NULL, '2021-04-19 00:20:50', '2021-04-19 00:20:50'),
(9, 8, 5, 11, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-19 01:40:36', '2021-04-19 01:40:36'),
(10, 8, 5, NULL, 81, NULL, NULL, NULL, NULL, NULL, '2021-04-19 01:40:36', '2021-04-19 01:40:36'),
(11, 8, 5, 11, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-19 22:01:07', '2021-04-19 22:01:07'),
(12, 8, 5, NULL, 80, NULL, NULL, NULL, NULL, NULL, '2021-04-19 22:01:07', '2021-04-19 22:01:07');

-- --------------------------------------------------------

--
-- Table structure for table `admin_types`
--

CREATE TABLE `admin_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `adminType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_types`
--

INSERT INTO `admin_types` (`id`, `adminType`, `created_at`, `updated_at`) VALUES
(1, 'Sub admin', '2020-12-19 14:18:55', '2020-12-19 14:21:55'),
(2, 'supper admin', '2020-12-19 15:23:01', '2020-12-19 15:23:01'),
(5, 'Marketing', '2020-12-21 18:08:08', '2020-12-21 18:08:08'),
(6, 'Graphic Designer', '2021-01-31 06:00:48', '2021-01-31 06:00:48'),
(7, 'Content Uploader', '2021-02-09 03:02:25', '2021-02-09 03:02:25'),
(8, 'Delivery Man', '2021-03-07 04:32:40', '2021-03-07 04:32:40'),
(9, 'Support Admin', '2021-04-10 22:43:05', '2021-04-10 22:43:05');

-- --------------------------------------------------------

--
-- Table structure for table `back_transfers`
--

CREATE TABLE `back_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` int(11) NOT NULL,
  `pname` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `quan` int(11) NOT NULL,
  `preQuan` int(11) NOT NULL,
  `transferId` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `backQuan` int(11) DEFAULT NULL,
  `backBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brand` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `image`, `brand`, `status`, `created_at`, `updated_at`) VALUES
(1, '1618225782.webp', 'Local', 0, '2021-04-12 05:09:43', '2021-04-12 05:09:43');

-- --------------------------------------------------------

--
-- Table structure for table `business_types`
--

CREATE TABLE `business_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `businessType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `catName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `catImage` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bannerImage` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bannerImage2` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bannerImage2Url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bannerImageUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bannerImageType` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `catPosition` int(11) NOT NULL DEFAULT 1,
  `subCatPosition` int(11) NOT NULL DEFAULT 1,
  `thirdCatPosition` int(11) NOT NULL DEFAULT 1,
  `fourthCatPosition` int(11) NOT NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 0,
  `bannerImageStatus` int(11) NOT NULL DEFAULT 0,
  `subStatus` int(11) NOT NULL DEFAULT 0,
  `createdBy` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preId` int(11) DEFAULT NULL,
  `lavel` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `catName`, `image`, `catImage`, `bannerImage`, `bannerImage2`, `bannerImage2Url`, `bannerImageUrl`, `url`, `bannerImageType`, `catPosition`, `subCatPosition`, `thirdCatPosition`, `fourthCatPosition`, `status`, `bannerImageStatus`, `subStatus`, `createdBy`, `preId`, `lavel`, `created_at`, `updated_at`) VALUES
(12, 'Food', 'jAQap1615875043.webp', 'IqCJ31615875043.webp', 'O54wI1615875943.webp', NULL, NULL, NULL, NULL, '1', 1, 1, 1, 1, 0, 0, 1, NULL, NULL, 1, '2021-03-16 00:10:43', '2021-03-16 00:25:43'),
(13, 'Fruits & Vegetables', NULL, 'tZR2L1615875204.webp', 'rMd961615875895.webp', 'm8gKc1615875895.webp', NULL, NULL, NULL, '2', 1, 1, 1, 1, 0, 0, 1, NULL, 12, 2, '2021-03-16 00:13:24', '2021-03-16 00:24:55'),
(14, 'Fresh Fruit', NULL, 'bN0hd1615876122.webp', 'lIHUW1615876151.webp', 'wgZlY1615876151.webp', NULL, NULL, NULL, '2', 1, 1, 1, 1, 0, 0, 1, NULL, 13, 3, '2021-03-16 00:28:42', '2021-03-16 00:29:11'),
(15, 'Pet Care', 'xbq0Z1621670432.webp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1, 1, 1, 0, 0, 1, NULL, NULL, 1, '2021-05-22 02:00:32', '2021-05-22 02:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `category_images`
--

CREATE TABLE `category_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pname` int(11) DEFAULT NULL,
  `image` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image1` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image4` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image5` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image6` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image7` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image8` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image9` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `videoUrl` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `speciality` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_images`
--

INSERT INTO `category_images` (`id`, `pname`, `image`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `image7`, `image8`, `image9`, `videoUrl`, `details`, `speciality`, `created_at`, `updated_at`) VALUES
(2, 1, '1620466435.webp', '', '', '', '', '', '', NULL, NULL, NULL, NULL, '<p>df</p>', '<p>df</p>', NULL, '2021-05-08 03:33:56'),
(3, 2, '1621669932.webp', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-22 01:52:12'),
(4, 3, '1621670906.webp', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-22 02:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `category_permissions`
--

CREATE TABLE `category_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin` int(11) NOT NULL,
  `roll` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_permissions`
--

INSERT INTO `category_permissions` (`id`, `admin`, `roll`, `categoryId`, `created_at`, `updated_at`) VALUES
(1, 3, 6, 12, '2021-04-12 05:13:43', '2021-04-12 05:13:43'),
(2, 3, 6, 15, '2021-05-22 02:07:35', '2021-05-22 02:07:35');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `sender_type` int(11) DEFAULT NULL,
  `sender_roll` int(11) DEFAULT NULL,
  `receiver_id` int(11) DEFAULT NULL,
  `receiver_type` int(11) DEFAULT NULL,
  `receiver_roll` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `messageCount` int(11) DEFAULT NULL,
  `invoiceNo` int(11) DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `sender_id`, `sender_type`, `sender_roll`, `receiver_id`, `receiver_type`, `receiver_roll`, `count`, `messageCount`, `invoiceNo`, `message`, `status`, `created_at`, `updated_at`) VALUES
(58, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 04:08:19', '2021-04-20 04:12:33'),
(59, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 04:10:16', '2021-04-20 04:12:33'),
(60, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hellow', 1, '2021-04-20 04:11:26', '2021-04-20 05:25:41'),
(61, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 04:11:51', '2021-04-20 04:12:33'),
(62, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'gb', 1, '2021-04-20 04:12:07', '2021-04-20 05:25:41'),
(63, 1, NULL, 1, 5, NULL, 3, 101, NULL, 1, 'hi', 1, '2021-04-20 04:12:38', '2021-04-20 04:29:42'),
(64, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'ok', 1, '2021-04-20 04:17:26', '2021-04-20 04:17:48'),
(65, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'ok', 1, '2021-04-20 04:28:54', '2021-04-20 05:25:41'),
(66, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 1, '2021-04-20 05:33:32', '2021-04-20 05:33:39'),
(67, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 05:33:49', '2021-04-20 06:15:50'),
(68, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 1, '2021-04-20 05:34:13', '2021-04-20 05:34:18'),
(69, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 1, '2021-04-20 05:36:16', '2021-04-20 05:36:21'),
(70, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'mk', 1, '2021-04-20 05:36:49', '2021-04-20 05:36:55'),
(71, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'ok', 1, '2021-04-20 05:36:59', '2021-04-20 06:15:50'),
(72, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'ki', 1, '2021-04-20 05:38:31', '2021-04-20 05:38:36'),
(73, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'l', 1, '2021-04-20 05:39:03', '2021-04-20 06:15:50'),
(74, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'km', 1, '2021-04-20 05:39:11', '2021-04-20 05:39:19'),
(75, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'jn', 1, '2021-04-20 05:40:10', '2021-04-20 05:40:14'),
(76, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hb', 1, '2021-04-20 05:40:23', '2021-04-20 06:15:50'),
(77, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'jh', 1, '2021-04-20 05:41:55', '2021-04-20 05:41:59'),
(78, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 05:48:55', '2021-04-20 06:15:50'),
(79, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hi', 1, '2021-04-20 05:49:49', '2021-04-20 06:17:08'),
(80, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 1, '2021-04-20 06:08:41', '2021-04-20 06:08:51'),
(81, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hj', 1, '2021-04-20 06:17:20', '2021-04-20 06:18:12'),
(82, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'gh', 1, '2021-04-20 06:17:32', '2021-04-20 06:17:37'),
(83, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hj', 1, '2021-04-20 06:18:22', '2021-04-20 06:19:44'),
(84, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'hj', 1, '2021-04-20 06:19:49', '2021-04-20 06:19:54'),
(85, 5, NULL, 4, 1, NULL, 1, 102, NULL, 1, 'gdfgfd', 1, '2021-04-20 08:02:48', '2021-04-22 05:08:39'),
(86, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 0, '2021-04-22 05:08:46', '2021-04-22 05:08:46'),
(87, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'jk', 0, '2021-04-22 05:08:54', '2021-04-22 05:08:54'),
(88, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 0, '2021-04-29 03:40:57', '2021-04-29 03:40:57'),
(89, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 0, '2021-04-29 03:57:35', '2021-04-29 03:57:35'),
(90, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 0, '2021-04-29 03:57:45', '2021-04-29 03:57:45'),
(91, 1, NULL, 1, 5, NULL, 4, 102, NULL, 1, 'hi', 0, '2021-04-29 04:06:40', '2021-04-29 04:06:40');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `color` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `color`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Red', 0, '2021-04-12 05:09:51', '2021-04-12 05:09:51'),
(2, 'Orange', 0, '2021-04-12 05:09:58', '2021-04-12 05:09:58'),
(3, 'Green', 0, '2021-04-12 05:10:02', '2021-04-12 05:10:02');

-- --------------------------------------------------------

--
-- Table structure for table `commission_types`
--

CREATE TABLE `commission_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cType` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nid` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorId` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permanentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terms` int(11) NOT NULL,
  `divisionId` int(11) DEFAULT NULL,
  `districtId` int(11) DEFAULT NULL,
  `thanaId` int(11) DEFAULT NULL,
  `unionId` int(11) DEFAULT NULL,
  `wardId` int(11) DEFAULT NULL,
  `presentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `email`, `password`, `pass`, `name`, `fname`, `fullname`, `mname`, `dob`, `nid`, `phone`, `image`, `sponsorId`, `permanentAddress`, `terms`, `divisionId`, `districtId`, `thanaId`, `unionId`, `wardId`, `presentAddress`, `created_at`, `updated_at`) VALUES
(1, 'arif@gmail.com', '$2y$10$pnwrEKA2kRFAP0iBpEmMKeLNL7IgOOHZlvFBXdx7hbdiNcm0Uc2Ti', '123', 'Arif', NULL, NULL, NULL, '2021-04-12', NULL, '01789797953', '1618130480.jpeg', NULL, NULL, 1, 1, 35, 8, NULL, NULL, 'Dhaka Banasree', '2021-04-11 02:41:21', '2021-04-11 02:41:21'),
(2, 'doofazinfo@gmail.com', '$2y$10$QmYck8sozBVmtVAxpaa.UeagIOKU//oX3rw/3sLh63Z/JKQbUW6Nu', '123', 'Doofazit', NULL, NULL, NULL, '2021-04-15', NULL, '01518453556', '1618131112.jpeg', NULL, NULL, 1, 2, 41, 58, NULL, NULL, 'Rampura', '2021-04-11 02:51:52', '2021-04-11 02:51:52');

-- --------------------------------------------------------

--
-- Table structure for table `customer_registrations`
--

CREATE TABLE `customer_registrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nid` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorId` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permanentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terms` int(11) NOT NULL,
  `presentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_registrations`
--

INSERT INTO `customer_registrations` (`id`, `name`, `fname`, `fullname`, `mname`, `dob`, `nid`, `email`, `phone`, `image`, `sponsorId`, `permanentAddress`, `terms`, `presentAddress`, `created_at`, `updated_at`) VALUES
(1, 'Trump', 'D Trump', NULL, NULL, NULL, NULL, 'trump1@gmail.com', '0948', NULL, NULL, NULL, 1, NULL, NULL, NULL),
(2, 'arif', NULL, NULL, NULL, NULL, NULL, 'info@doofazit.com', NULL, '1615898759.jpeg', 'Trump', NULL, 1, NULL, '2021-03-16 06:45:59', '2021-03-16 06:45:59');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_charges`
--

CREATE TABLE `delivery_charges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `divisionId` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `thanaId` int(11) NOT NULL,
  `unionId` int(11) DEFAULT NULL,
  `wardId` int(11) DEFAULT NULL,
  `deliveryTimeId` int(11) NOT NULL,
  `deliveryCharge` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_charges`
--

INSERT INTO `delivery_charges` (`id`, `divisionId`, `districtId`, `thanaId`, `unionId`, `wardId`, `deliveryTimeId`, `deliveryCharge`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 538, NULL, 1, 1, '22', '2021-04-22 03:24:54', '2021-04-22 03:24:54');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_man_delivery_times`
--

CREATE TABLE `delivery_man_delivery_times` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `deliveryTime` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_man_delivery_times`
--

INSERT INTO `delivery_man_delivery_times` (`id`, `deliveryTime`, `userId`, `created_at`, `updated_at`) VALUES
(2, '2:00PM-3:00PM', 5, NULL, NULL),
(3, '3:00PM-4:00PM', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `delivery_men`
--

CREATE TABLE `delivery_men` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `deliveryManId` int(11) NOT NULL,
  `divisionId` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `districtId` int(11) DEFAULT NULL,
  `thanaId` int(11) DEFAULT NULL,
  `unionId` int(11) DEFAULT NULL,
  `wardId` int(11) DEFAULT NULL,
  `permanentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `presentAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skill` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eduQualification` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `exprience` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_men`
--

INSERT INTO `delivery_men` (`id`, `deliveryManId`, `divisionId`, `phone`, `districtId`, `thanaId`, `unionId`, `wardId`, `permanentAddress`, `presentAddress`, `skill`, `eduQualification`, `exprience`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 5, 3, 9877999, 1, 503, NULL, NULL, 'Dhaka', 'Dhaka', 'Marketing', 'BBA', '2', '1618813375.jpeg', 0, '2021-04-19 00:09:01', '2021-04-19 00:22:55');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_times`
--

CREATE TABLE `delivery_times` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `divisionId` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `thanaId` int(11) NOT NULL,
  `unionId` int(11) DEFAULT NULL,
  `wardId` int(11) DEFAULT NULL,
  `deliveryTime` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_times`
--

INSERT INTO `delivery_times` (`id`, `divisionId`, `districtId`, `thanaId`, `unionId`, `wardId`, `deliveryTime`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 538, NULL, 1, '1 hour', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(2) UNSIGNED NOT NULL,
  `division_id` int(2) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(50) NOT NULL,
  `lat` double NOT NULL,
  `lon` double NOT NULL,
  `website` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `division_id`, `name`, `bn_name`, `lat`, `lon`, `website`) VALUES
(1, 3, 'Dhaka', 'ঢাকা', 23.7115253, 90.4111451, 'www.dhaka.gov.bd'),
(2, 3, 'Faridpur', 'ফরিদপুর', 23.6070822, 89.8429406, 'www.faridpur.gov.bd'),
(3, 3, 'Gazipur', 'গাজীপুর', 24.0022858, 90.4264283, 'www.gazipur.gov.bd'),
(4, 3, 'Gopalganj', 'গোপালগঞ্জ', 23.0050857, 89.8266059, 'www.gopalganj.gov.bd'),
(5, 3, 'Jamalpur', 'জামালপুর', 24.937533, 89.937775, 'www.jamalpur.gov.bd'),
(6, 3, 'Kishoreganj', 'কিশোরগঞ্জ', 24.444937, 90.776575, 'www.kishoreganj.gov.bd'),
(7, 3, 'Madaripur', 'মাদারীপুর', 23.164102, 90.1896805, 'www.madaripur.gov.bd'),
(8, 3, 'Manikganj', 'মানিকগঞ্জ', 0, 0, 'www.manikganj.gov.bd'),
(9, 3, 'Munshiganj', 'মুন্সিগঞ্জ', 0, 0, 'www.munshiganj.gov.bd'),
(10, 3, 'Mymensingh', 'ময়মনসিং', 0, 0, 'www.mymensingh.gov.bd'),
(11, 3, 'Narayanganj', 'নারায়াণগঞ্জ', 23.63366, 90.496482, 'www.narayanganj.gov.bd'),
(12, 3, 'Narsingdi', 'নরসিংদী', 23.932233, 90.71541, 'www.narsingdi.gov.bd'),
(13, 3, 'Netrokona', 'নেত্রকোনা', 24.870955, 90.727887, 'www.netrokona.gov.bd'),
(14, 3, 'Rajbari', 'রাজবাড়ি', 23.7574305, 89.6444665, 'www.rajbari.gov.bd'),
(15, 3, 'Shariatpur', 'শরীয়তপুর', 0, 0, 'www.shariatpur.gov.bd'),
(16, 3, 'Sherpur', 'শেরপুর', 25.0204933, 90.0152966, 'www.sherpur.gov.bd'),
(17, 3, 'Tangail', 'টাঙ্গাইল', 0, 0, 'www.tangail.gov.bd'),
(18, 5, 'Bogra', 'বগুড়া', 24.8465228, 89.377755, 'www.bogra.gov.bd'),
(19, 5, 'Joypurhat', 'জয়পুরহাট', 0, 0, 'www.joypurhat.gov.bd'),
(20, 5, 'Naogaon', 'নওগাঁ', 0, 0, 'www.naogaon.gov.bd'),
(21, 5, 'Natore', 'নাটোর', 24.420556, 89.000282, 'www.natore.gov.bd'),
(22, 5, 'Nawabganj', 'নবাবগঞ্জ', 24.5965034, 88.2775122, 'www.chapainawabganj.gov.bd'),
(23, 5, 'Pabna', 'পাবনা', 23.998524, 89.233645, 'www.pabna.gov.bd'),
(24, 5, 'Rajshahi', 'রাজশাহী', 0, 0, 'www.rajshahi.gov.bd'),
(25, 5, 'Sirajgonj', 'সিরাজগঞ্জ', 24.4533978, 89.7006815, 'www.sirajganj.gov.bd'),
(26, 6, 'Dinajpur', 'দিনাজপুর', 25.6217061, 88.6354504, 'www.dinajpur.gov.bd'),
(27, 6, 'Gaibandha', 'গাইবান্ধা', 25.328751, 89.528088, 'www.gaibandha.gov.bd'),
(28, 6, 'Kurigram', 'কুড়িগ্রাম', 25.805445, 89.636174, 'www.kurigram.gov.bd'),
(29, 6, 'Lalmonirhat', 'লালমনিরহাট', 0, 0, 'www.lalmonirhat.gov.bd'),
(30, 6, 'Nilphamari', 'নীলফামারী', 25.931794, 88.856006, 'www.nilphamari.gov.bd'),
(31, 6, 'Panchagarh', 'পঞ্চগড়', 26.3411, 88.5541606, 'www.panchagarh.gov.bd'),
(32, 6, 'Rangpur', 'রংপুর', 25.7558096, 89.244462, 'www.rangpur.gov.bd'),
(33, 6, 'Thakurgaon', 'ঠাকুরগাঁও', 26.0336945, 88.4616834, 'www.thakurgaon.gov.bd'),
(34, 1, 'Barguna', 'বরগুনা', 0, 0, 'www.barguna.gov.bd'),
(35, 1, 'Barisal', 'বরিশাল', 0, 0, 'www.barisal.gov.bd'),
(36, 1, 'Bhola', 'ভোলা', 22.685923, 90.648179, 'www.bhola.gov.bd'),
(37, 1, 'Jhalokati', 'ঝালকাঠি', 0, 0, 'www.jhalakathi.gov.bd'),
(38, 1, 'Patuakhali', 'পটুয়াখালী', 22.3596316, 90.3298712, 'www.patuakhali.gov.bd'),
(39, 1, 'Pirojpur', 'পিরোজপুর', 0, 0, 'www.pirojpur.gov.bd'),
(40, 2, 'Bandarban', 'বান্দরবান', 22.1953275, 92.2183773, 'www.bandarban.gov.bd'),
(41, 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', 23.9570904, 91.1119286, 'www.brahmanbaria.gov.bd'),
(42, 2, 'Chandpur', 'চাঁদপুর', 23.2332585, 90.6712912, 'www.chandpur.gov.bd'),
(43, 2, 'Chittagong', 'চট্টগ্রাম', 22.335109, 91.834073, 'www.chittagong.gov.bd'),
(44, 2, 'Comilla', 'কুমিল্লা', 23.4682747, 91.1788135, 'www.comilla.gov.bd'),
(45, 2, 'Cox\'s Bazar', 'কক্স বাজার', 0, 0, 'www.coxsbazar.gov.bd'),
(46, 2, 'Feni', 'ফেনী', 23.023231, 91.3840844, 'www.feni.gov.bd'),
(47, 2, 'Khagrachari', 'খাগড়াছড়ি', 23.119285, 91.984663, 'www.khagrachhari.gov.bd'),
(48, 2, 'Lakshmipur', 'লক্ষ্মীপুর', 22.942477, 90.841184, 'www.lakshmipur.gov.bd'),
(49, 2, 'Noakhali', 'নোয়াখালী', 22.869563, 91.099398, 'www.noakhali.gov.bd'),
(50, 2, 'Rangamati', 'রাঙ্গামাটি', 0, 0, 'www.rangamati.gov.bd'),
(51, 7, 'Habiganj', 'হবিগঞ্জ', 24.374945, 91.41553, 'www.habiganj.gov.bd'),
(52, 7, 'Maulvibazar', 'মৌলভীবাজার', 24.482934, 91.777417, 'www.moulvibazar.gov.bd'),
(53, 7, 'Sunamganj', 'সুনামগঞ্জ', 25.0658042, 91.3950115, 'www.sunamganj.gov.bd'),
(54, 7, 'Sylhet', 'সিলেট', 24.8897956, 91.8697894, 'www.sylhet.gov.bd'),
(55, 4, 'Bagerhat', 'বাগেরহাট', 22.651568, 89.785938, 'www.bagerhat.gov.bd'),
(56, 4, 'Chuadanga', 'চুয়াডাঙ্গা', 23.6401961, 88.841841, 'www.chuadanga.gov.bd'),
(57, 4, 'Jessore', 'যশোর', 23.16643, 89.2081126, 'www.jessore.gov.bd'),
(58, 4, 'Jhenaidah', 'ঝিনাইদহ', 23.5448176, 89.1539213, 'www.jhenaidah.gov.bd'),
(59, 4, 'Khulna', 'খুলনা', 22.815774, 89.568679, 'www.khulna.gov.bd'),
(60, 4, 'Kushtia', 'কুষ্টিয়া', 23.901258, 89.120482, 'www.kushtia.gov.bd'),
(61, 4, 'Magura', 'মাগুরা', 23.487337, 89.419956, 'www.magura.gov.bd'),
(62, 4, 'Meherpur', 'মেহেরপুর', 23.762213, 88.631821, 'www.meherpur.gov.bd'),
(63, 4, 'Narail', 'নড়াইল', 23.172534, 89.512672, 'www.narail.gov.bd'),
(64, 4, 'Satkhira', 'সাতক্ষীরা', 0, 0, 'www.satkhira.gov.bd');

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` int(2) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `bn_name`) VALUES
(1, 'Barisal', 'বরিশাল'),
(2, 'Chittagong', 'চট্টগ্রাম'),
(3, 'Dhaka', 'ঢাকা'),
(4, 'Khulna', 'খুলনা'),
(5, 'Rajshahi', 'রাজশাহী'),
(6, 'Rangpur', 'রংপুর'),
(7, 'Sylhet', 'সিলেট');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filtering_statuses`
--

CREATE TABLE `filtering_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `f_a_q_s`
--

CREATE TABLE `f_a_q_s` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `generations`
--

CREATE TABLE `generations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `incentives`
--

CREATE TABLE `incentives` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `incentiveAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logos`
--

CREATE TABLE `logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logos`
--

INSERT INTO `logos` (`id`, `image`, `created_at`, `updated_at`) VALUES
(1, '1619002386.png', '2021-04-21 04:53:06', '2021-04-21 04:53:06');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moduleId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menuName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menuPosition` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menuUrl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `substatus` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `moduleId`, `menuName`, `menuPosition`, `menuUrl`, `status`, `substatus`, `created_at`, `updated_at`) VALUES
(23, '3', 'Logo Upload', '1', 'logo', 0, 0, '2020-12-21 12:26:03', '2020-12-22 14:28:47'),
(24, '3', 'Slider Upload', '2', 'slider', 0, 0, '2020-12-21 12:26:35', '2020-12-22 15:10:25'),
(26, '3', 'Contact Information', '4', '@', 0, 0, '2020-12-21 12:27:47', '2020-12-21 12:27:47'),
(27, '3', 'Privacy', '5', 'privacy', 0, 0, '2020-12-21 12:28:12', '2020-12-22 17:16:29'),
(28, '3', 'Termscondition', '6', 'terms', 0, 0, '2020-12-21 12:28:30', '2020-12-22 18:29:55'),
(29, '3', 'FAQ', '7', 'faq', 0, 0, '2020-12-21 12:28:46', '2020-12-22 18:51:35'),
(30, '3', 'Order Policy', '8', 'policy', 0, 0, '2020-12-21 12:29:09', '2020-12-22 19:14:01'),
(31, '3', 'Aboutus', '9', 'about', 0, 0, '2020-12-21 12:31:48', '2020-12-22 19:34:57'),
(32, '3', 'Circular', '10', '@', 0, 0, '2020-12-21 12:34:08', '2020-12-21 12:34:08'),
(33, '19', 'Unit Entry', '11', 'unit', 0, 0, '2020-12-21 12:39:19', '2020-12-27 18:36:26'),
(34, '19', 'Brand Entry', '12', 'brand', 0, 0, '2020-12-21 12:39:44', '2020-12-27 19:07:11'),
(35, '19', 'Color Entry', '13', 'color', 0, 0, '2020-12-21 12:40:11', '2020-12-29 14:57:44'),
(36, '19', 'Supplier Entry', '14', 'supplier', 0, 0, '2020-12-21 12:40:37', '2020-12-29 13:39:41'),
(37, '19', 'Size Entry', '15', 'size', 0, 0, '2020-12-21 12:40:59', '2020-12-29 12:40:46'),
(38, '19', 'Purchase Entry', '16', 'purchase', 0, 0, '2020-12-21 12:41:44', '2020-12-29 14:58:13'),
(39, '19', 'Purchase Return Entry', '17', '@', 0, 0, '2020-12-21 12:42:22', '2020-12-21 12:42:22'),
(40, '19', 'Purchase Damage Entry', '18', '@', 0, 0, '2020-12-21 12:43:03', '2020-12-21 12:44:19'),
(41, '19', 'Supplier Business Type', '19', 'businesstype', 0, 0, '2020-12-21 12:43:38', '2020-12-30 12:47:22'),
(42, '19', 'Purchase Report', '18', '@', 0, 1, '2020-12-21 12:45:12', '2021-01-03 00:51:09'),
(43, '5', 'Shop/Ware House Location Entry', '21', 'warehouselocation', 0, 0, '2020-12-21 12:47:44', '2021-01-04 18:11:28'),
(44, '5', 'WareHouse Entry', '22', 'warehouse', 0, 0, '2020-12-21 12:49:10', '2021-01-04 18:44:19'),
(45, '5', 'Product Name Entry', '23', 'productname', 0, 0, '2020-12-21 12:49:39', '2020-12-29 17:51:38'),
(46, '5', 'Category Entry', '24', 'category', 0, 0, '2020-12-21 12:50:13', '2020-12-23 14:00:14'),
(47, '5', 'Opening Inventory', '25', '@', 0, 0, '2020-12-21 12:51:12', '2020-12-21 12:51:12'),
(48, '5', 'Product Requisition', '26', '@', 0, 0, '2020-12-21 12:51:40', '2020-12-21 12:51:40'),
(49, '5', 'Product Transfer ware house to ware house', '27', 'producttransfer', 0, 0, '2020-12-21 12:52:17', '2021-01-04 19:38:32'),
(50, '5', 'E-commerce Price Setup', '28', 'pricesetup', 0, 0, '2020-12-21 12:52:39', '2021-01-04 14:38:16'),
(51, '5', 'Inventory Reporting', '29', '@', 0, 1, '2020-12-21 12:53:46', '2020-12-21 12:53:46'),
(52, '10', 'Offer Entry', '30', 'offer', 0, 0, '2020-12-21 12:54:45', '2021-03-11 01:20:53'),
(53, '10', 'Offer Reporting', '31', '@', 0, 1, '2020-12-21 12:55:04', '2020-12-21 12:55:04'),
(54, '18', 'API List', '32', '@', 0, 0, '2020-12-21 13:02:32', '2020-12-21 13:02:32'),
(55, '8', 'New Order', '33', 'neworder', 0, 0, '2020-12-21 13:23:41', '2021-04-12 21:59:42'),
(56, '8', 'Order Reporting', '34', '@', 0, 1, '2020-12-21 13:24:24', '2020-12-21 13:24:56'),
(57, '9', 'Bangladesh Location', '35', 'bangladeshlocation', 0, 0, '2020-12-21 13:25:41', '2021-03-06 02:55:37'),
(58, '9', 'Business Area Reporting', '36', '@', 0, 1, '2020-12-21 13:26:00', '2020-12-21 13:26:00'),
(61, '4', 'Commission Config Report', '40', '@', 0, 1, '2020-12-21 13:32:49', '2020-12-21 13:35:39'),
(62, '4', 'Customer Type Entry', '39', '@', 0, 0, '2020-12-21 13:34:44', '2020-12-21 13:35:27'),
(63, '11', 'Delivery Man Entry', '41', 'deliverymaninfo', 0, 0, '2020-12-21 13:45:03', '2021-03-07 03:38:35'),
(64, '11', 'Delivery Man Report', '42', '@', 0, 1, '2020-12-21 13:45:37', '2020-12-21 13:45:37'),
(65, '6', 'Packaging ongoing Report', '43', '@', 0, 0, '2020-12-21 13:48:07', '2020-12-21 13:48:07'),
(66, '6', 'Picketing Finish List', '44', '@', 0, 0, '2020-12-21 13:48:36', '2020-12-21 13:48:36'),
(67, '6', 'Forward Delivery Man', '45', '@', 0, 0, '2020-12-21 13:49:02', '2020-12-21 13:49:02'),
(68, '6', 'Delivery Reporting', '46', '@', 0, 1, '2020-12-21 13:49:23', '2020-12-21 13:49:23'),
(69, '7', 'Order Management Accept Report', '47', '@', 0, 0, '2020-12-21 13:52:00', '2020-12-21 13:52:00'),
(70, '7', 'Package Ready list', '48', '@', 0, 0, '2020-12-21 13:52:28', '2020-12-21 13:52:28'),
(71, '7', 'Send Ready Product', '49', '@', 0, 0, '2020-12-21 13:53:22', '2020-12-21 13:53:22'),
(72, '7', 'Packaging Reporting', '50', '@', 0, 1, '2020-12-21 13:53:58', '2020-12-21 13:53:58'),
(73, '13', 'Today Commission Payout', '51', '@', 0, 0, '2020-12-21 14:12:20', '2020-12-21 14:12:20'),
(74, '13', 'Commission Payout Search', '52', '@', 0, 0, '2020-12-21 14:12:52', '2020-12-21 14:12:52'),
(75, '18', 'Menu Url List', '53', '@', 0, 0, '2020-12-21 14:21:05', '2020-12-21 14:21:05'),
(76, '19', 'Purchase Type', '20', 'purchasetype', 0, 0, '2020-12-30 14:05:10', '2021-01-03 00:50:45'),
(77, '9', 'Delivery Charge Entry', '74', 'deliverycharge', 0, 0, '2021-01-10 03:11:09', '2021-03-06 22:53:13'),
(79, '9', 'Inter Location', '122', 'deliverylocation', 0, 0, '2021-03-06 01:39:41', '2021-03-06 04:50:50'),
(80, '11', 'On going Delivery', '125', 'ongoingdelivery', 0, 0, '2021-03-09 23:42:56', '2021-04-19 22:00:22'),
(81, '11', 'Available Order', '129', 'avilorder', 0, 0, '2021-03-09 23:46:00', '2021-04-19 01:39:16'),
(82, '11', 'Customer Ratings', '130', '@', 0, 0, '2021-03-09 23:47:59', '2021-03-09 23:47:59'),
(83, '11', 'Sallery Collection', '133', '@', 0, 0, '2021-03-09 23:54:13', '2021-03-09 23:54:13'),
(84, '14', 'Customer Registration', '134', 'customerregis', 0, 0, '2021-03-16 02:40:32', '2021-03-16 03:47:34'),
(85, '14', 'Customer Report', '135', '@', 0, 1, '2021-03-18 01:34:09', '2021-03-18 01:34:09'),
(86, '4', 'Purchase CBack Amount', '136', 'purchasecashback', 0, 0, '2021-03-23 23:50:00', '2021-03-23 23:50:48'),
(87, '4', 'Generation', '137', 'generation', 0, 0, '2021-03-24 00:28:03', '2021-03-24 00:28:03'),
(88, '4', 'Promotional Cback Amount', '138', 'promotionalcashback', 0, 0, '2021-03-24 01:17:10', '2021-03-24 01:17:10'),
(89, '4', 'Target sales Commission', '139', 'targetsales', 0, 0, '2021-03-24 02:09:38', '2021-03-24 02:10:10'),
(90, '4', 'Sales Salary', '140', 'salessalary', 0, 0, '2021-03-24 02:56:27', '2021-03-24 02:56:27'),
(91, '4', 'Incentive', '141', 'incentive', 0, 0, '2021-03-24 03:40:20', '2021-03-24 03:40:20'),
(92, '22', 'Message', '142', 'customermessagelist', 0, 0, '2021-04-10 22:48:24', '2021-04-10 22:48:24'),
(93, '7', 'New Order', '143', 'pendingorder', 0, 0, '2021-04-18 00:38:58', '2021-04-18 04:35:12'),
(94, '8', 'Return Order', '144', 'returnorder', 0, 0, '2021-04-18 04:19:59', '2021-04-18 04:19:59'),
(95, '6', 'New Order Info', '145', 'deliverymanagementneworder', 0, 0, '2021-04-18 22:18:50', '2021-04-18 22:18:50'),
(96, '7', 'Return Order From DM', '146', 'returnorderfromdm', 0, 0, '2021-04-18 23:07:36', '2021-04-18 23:07:36'),
(97, '11', 'Delivery Time Entry', '147', 'deliverytime', 0, 0, '2021-04-19 00:13:42', '2021-04-19 00:13:42');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(63, '2021_01_04_110916_create_product_tranfers_table', 35),
(126, '2021_03_16_121056_create_customer_registrations_table', 65),
(127, '2021_03_18_043419_create_customers_table', 66),
(171, '2014_10_12_100000_create_password_resets_table', 67),
(172, '2019_08_19_000000_create_failed_jobs_table', 67),
(173, '2020_12_15_044828_create_products_table', 67),
(174, '2020_12_17_054639_create_modules_table', 67),
(175, '2020_12_17_091624_create_menus_table', 67),
(176, '2020_12_17_104834_create_admin_types_table', 67),
(177, '2020_12_19_034940_create_sub_menus_table', 67),
(178, '2020_12_20_050951_create_admin_permissions_table', 67),
(179, '2020_12_22_064000_create_logos_table', 67),
(180, '2020_12_22_071312_create_sliders_table', 67),
(181, '2020_12_22_092306_create_privacies_table', 67),
(182, '2020_12_22_101853_create_terms_table', 67),
(183, '2020_12_22_103915_create_f_a_q_s_table', 67),
(184, '2020_12_22_105957_create_order_policies_table', 67),
(185, '2020_12_22_112046_create_about_us_table', 67),
(186, '2020_12_23_052003_create_categories_table', 67),
(187, '2020_12_27_104227_create_unit_entries_table', 67),
(188, '2020_12_27_105303_create_brands_table', 67),
(189, '2020_12_27_112145_create_colors_table', 67),
(190, '2020_12_29_043142_create_sizes_table', 67),
(191, '2020_12_29_045804_create_suppliers_table', 67),
(192, '2020_12_29_100706_create_product_names_table', 67),
(193, '2020_12_29_100724_create_product_categories_table', 67),
(194, '2020_12_30_041743_create_business_types_table', 67),
(195, '2020_12_30_061104_create_purchase_types_table', 67),
(196, '2020_12_31_100556_create_purchase_products_table', 67),
(197, '2020_12_31_102553_create_purchase_product_total_prices_table', 67),
(198, '2021_01_02_055112_create_purchase_invoices_table', 67),
(199, '2021_01_02_093206_create_purchase_product_total_quantities_table', 67),
(200, '2021_01_04_055052_create_price_setups_table', 67),
(201, '2021_01_04_095056_create_warehouse_locations_table', 67),
(202, '2021_01_04_101401_create_warehouses_table', 67),
(203, '2021_01_04_111332_create_product_transfers_table', 67),
(204, '2021_01_10_060830_create_back_transfers_table', 67),
(205, '2021_02_01_052300_create_category_permissions_table', 67),
(206, '2021_02_01_071449_create_category_images_table', 67),
(207, '2021_02_17_052053_create_product_name_infos_table', 67),
(208, '2021_02_23_042251_create_price_ranges_table', 67),
(209, '2021_02_23_091359_create_filtering_statuses_table', 67),
(210, '2021_03_06_094946_create_unions_table', 67),
(211, '2021_03_06_095009_create_wards_table', 67),
(213, '2021_03_07_051009_create_delivery_charges_table', 67),
(214, '2021_03_07_094054_create_delivery_men_table', 67),
(215, '2021_03_11_104515_create_offers_table', 67),
(216, '2021_03_18_051743_create_customers_table', 67),
(217, '2021_03_24_045339_create_commission_types_table', 67),
(218, '2021_03_24_055550_create_purchase_cashback_amounts_table', 67),
(219, '2021_03_24_063041_create_generations_table', 67),
(220, '2021_03_24_073545_create_promotional_cashback_amounts_table', 67),
(221, '2021_03_24_081251_create_target_sales_commissions_table', 67),
(222, '2021_03_24_090437_create_sales_salaries_table', 67),
(223, '2021_03_24_094504_create_incentives_table', 67),
(225, '2021_03_31_074714_create_order_products_table', 67),
(227, '2021_04_04_071852_create_messages_table', 67),
(228, '2021_04_11_042332_add_last_seen_to_users_table', 67),
(230, '2021_04_11_060012_create_active_users_table', 69),
(234, '2014_10_12_000000_create_users_table', 70),
(240, '2021_04_03_104837_create_chats_table', 71),
(245, '2021_04_19_065221_create_delivery_man_delivery_times_table', 73),
(246, '2021_03_28_064353_create_orders_table', 74),
(247, '2021_03_06_115458_create_delivery_times_table', 75);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moduleName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modulePosition` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `moduleName`, `modulePosition`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Website Configuration', 1, 0, '2020-12-19 20:45:24', '2020-12-19 20:45:24'),
(4, 'Commission Config', 2, 0, '2020-12-19 20:47:16', '2020-12-21 10:31:02'),
(5, 'Inventory', 5, 0, '2020-12-19 20:47:42', '2020-12-21 12:55:58'),
(6, 'Delivery Management', 10, 0, '2020-12-19 20:48:46', '2020-12-20 12:08:19'),
(7, 'Packaging Section', 11, 0, '2020-12-19 20:49:55', '2020-12-21 12:56:11'),
(8, 'Order Management', 6, 0, '2020-12-19 20:50:23', '2020-12-19 20:50:23'),
(9, 'Business Area Setup', 7, 0, '2020-12-19 20:51:07', '2020-12-19 20:51:31'),
(10, 'Offer Management', 8, 0, '2020-12-19 20:51:44', '2020-12-21 10:34:12'),
(11, 'Delivery Man', 9, 0, '2020-12-19 20:52:20', '2020-12-19 20:52:20'),
(13, 'Commission Admin', 3, 0, '2020-12-19 20:54:17', '2020-12-20 12:05:19'),
(14, 'Customer Section', 12, 0, '2020-12-19 20:54:33', '2020-12-19 20:54:33'),
(18, 'API Module', 16, 0, '2020-12-19 20:56:01', '2020-12-21 12:22:35'),
(19, 'Purchase', 4, 0, '2020-12-19 21:02:36', '2020-12-20 12:08:08'),
(20, 'Support Module', 17, 0, '2020-12-19 21:14:14', '2020-12-21 13:28:47'),
(22, 'Message', 18, 0, '2021-04-10 22:47:10', '2021-04-10 22:47:10');

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productId` int(11) NOT NULL,
  `startDate` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endDate` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `offerImage` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ammountType` int(11) NOT NULL,
  `offerPrice` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `productId`, `startDate`, `endDate`, `offerImage`, `ammountType`, `offerPrice`, `totalPrice`, `details`, `status`, `created_at`, `updated_at`) VALUES
(2, 768, '', '', '', 0, 0, 0, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoiceNo` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `totalDiscount` int(11) NOT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reAddress` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cancelReason` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `returnReason` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `returnReasonFromDM` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rePhone` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deliveryDate` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deliveryTime` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentType` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `deliveryManId` int(11) DEFAULT NULL,
  `customerStatus` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `invoiceNo`, `customerId`, `totalPrice`, `totalDiscount`, `address`, `phone`, `reAddress`, `cancelReason`, `returnReason`, `returnReasonFromDM`, `rePhone`, `deliveryDate`, `deliveryTime`, `paymentType`, `status`, `deliveryManId`, `customerStatus`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 490, 10, 'Dhaka Banasree', '01789797953', NULL, NULL, NULL, NULL, NULL, '2021-04-20', '3:00PM-4:00PM', '1', 12, 5, 0, '2021-04-19 04:01:56', '2021-04-19 22:42:34'),
(3, 2, 1, 1470, 30, 'Dhaka Banasree', '01789797953', NULL, NULL, NULL, NULL, NULL, '2021-04-23', '11:00AM-12:00PM', '1', 0, NULL, 1, '2021-04-22 05:51:15', '2021-04-22 05:51:29'),
(4, 3, 1, 500, 0, 'Dhaka Banasree', '01789797953', NULL, NULL, NULL, NULL, NULL, '2021-05-09', '4:00PM-5:00PM', NULL, 0, NULL, 0, '2021-05-08 05:53:34', '2021-05-08 05:53:34');

-- --------------------------------------------------------

--
-- Table structure for table `order_policies`
--

CREATE TABLE `order_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoiceNo` int(11) NOT NULL,
  `pId` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `invoiceNo`, `pId`, `qty`, `price`, `image`, `discount`, `created_at`, `updated_at`) VALUES
(9, 1, 1, 1, 490, '1618226592.webp', 10, '2021-04-19 04:01:56', '2021-04-19 04:01:56'),
(10, 2, 1, 3, 1470, '1618226592.webp', 30, '2021-04-22 05:51:15', '2021-04-22 05:51:15'),
(11, 3, 1, 1, 500, '1620466435.webp', 0, '2021-05-08 05:53:34', '2021-05-08 05:53:34');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `price_ranges`
--

CREATE TABLE `price_ranges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `minprice` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maxprice` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `price_setups`
--

CREATE TABLE `price_setups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoiceNo` int(11) DEFAULT NULL,
  `pname` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `salesPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brandTotal` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdBy` int(11) NOT NULL,
  `quan` int(11) DEFAULT NULL,
  `updatedBy` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `price_setups`
--

INSERT INTO `price_setups` (`id`, `invoiceNo`, `pname`, `brand`, `salesPrice`, `profit`, `brandTotal`, `createdBy`, `quan`, `updatedBy`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '500', '500', '74', 1, 12, NULL, 1, '2021-04-12 05:12:02', '2021-05-22 02:05:29'),
(2, 2, 2, 1, '190', '190', '74', 1, 50, NULL, 1, '2021-05-22 01:50:41', '2021-05-22 02:05:29'),
(3, 3, 3, 1, '500', '500', '74', 1, 12, NULL, 1, '2021-05-22 02:05:29', '2021-05-22 02:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `privacies`
--

CREATE TABLE `privacies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qun` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productNameId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createby` int(11) DEFAULT NULL,
  `updateby` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `productNameId`, `categoryId`, `createby`, `updateby`, `created_at`, `updated_at`) VALUES
(135, 1, 12, NULL, NULL, '2021-04-12 05:06:01', '2021-04-12 05:06:01'),
(136, 1, 13, NULL, NULL, '2021-04-12 05:06:01', '2021-04-12 05:06:01'),
(137, 1, 14, NULL, NULL, '2021-04-12 05:06:01', '2021-04-12 05:06:01'),
(138, 2, 12, NULL, NULL, '2021-05-22 01:49:23', '2021-05-22 01:49:23'),
(139, 2, 13, NULL, NULL, '2021-05-22 01:49:23', '2021-05-22 01:49:23'),
(140, 2, 14, NULL, NULL, '2021-05-22 01:49:23', '2021-05-22 01:49:23'),
(141, 3, 15, NULL, NULL, '2021-05-22 02:04:14', '2021-05-22 02:04:14');

-- --------------------------------------------------------

--
-- Table structure for table `product_names`
--

CREATE TABLE `product_names` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pcode` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pqrcode` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createby` int(11) DEFAULT NULL,
  `updateby` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_names`
--

INSERT INTO `product_names` (`id`, `pname`, `pcode`, `pqrcode`, `keyword`, `createby`, `updateby`, `created_at`, `updated_at`) VALUES
(1, 'Rambutan Fruit', 'F1', NULL, '', NULL, NULL, NULL, NULL),
(2, 'Lychee Bombay', 'l12', NULL, '', NULL, NULL, NULL, NULL),
(3, 'Drools Kitten Ocean Fish', 'p12', NULL, '', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_name_infos`
--

CREATE TABLE `product_name_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pname` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_name_infos`
--

INSERT INTO `product_name_infos` (`id`, `pname`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL),
(2, 2, NULL, NULL),
(3, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_transfers`
--

CREATE TABLE `product_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` int(11) NOT NULL,
  `pname` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `quan` int(11) NOT NULL,
  `preQuan` int(11) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `totalTproduct` int(11) DEFAULT NULL,
  `backQuan` int(11) DEFAULT NULL,
  `backBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `promotional_cashback_amounts`
--

CREATE TABLE `promotional_cashback_amounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `generation` int(11) NOT NULL,
  `promotionalCbackAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_cashback_amounts`
--

CREATE TABLE `purchase_cashback_amounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchaseCbackAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_invoices`
--

CREATE TABLE `purchase_invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchaseDate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoiceNo` int(11) NOT NULL,
  `purchaseTypeId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supplierId` int(11) NOT NULL,
  `totalPurchaseValue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `carriageInward` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `totalAmount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supplierPayable` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otherCost` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `damageAndWarranty` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `totalProductCost` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `previousPayableDue` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currentPayable` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createBy` int(11) NOT NULL,
  `updateBy` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_invoices`
--

INSERT INTO `purchase_invoices` (`id`, `purchaseDate`, `invoiceNo`, `purchaseTypeId`, `supplierId`, `totalPurchaseValue`, `carriageInward`, `totalAmount`, `discount`, `supplierPayable`, `otherCost`, `damageAndWarranty`, `totalProductCost`, `previousPayableDue`, `currentPayable`, `createBy`, `updateBy`, `created_at`, `updated_at`) VALUES
(1, '2021-04-12 11:11:24', 1, '1', 1, '5988', NULL, '5988', NULL, '5988', NULL, NULL, '5988', NULL, '5988', 1, NULL, '2021-04-12 05:11:35', '2021-04-12 05:11:35'),
(2, '2021-05-22 07:49:38', 2, '1', 1, '8500', NULL, '8500', NULL, '8500', NULL, NULL, '8500', NULL, '8500', 1, NULL, '2021-05-22 01:50:14', '2021-05-22 01:50:14'),
(3, '2021-05-22 08:04:28', 3, '1', 1, '4800', NULL, '4800', NULL, '4800', NULL, NULL, '4800', NULL, '4800', 1, NULL, '2021-05-22 02:04:53', '2021-05-22 02:04:53');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_products`
--

CREATE TABLE `purchase_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoiceNo` int(11) DEFAULT NULL,
  `supplierId` int(11) NOT NULL,
  `pname` int(11) NOT NULL,
  `brandId` int(11) DEFAULT NULL,
  `quan` int(11) NOT NULL,
  `unit` int(11) DEFAULT NULL,
  `unitPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perc` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disPrice` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `createdBy` int(11) NOT NULL,
  `updatedBy` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_products`
--

INSERT INTO `purchase_products` (`id`, `invoiceNo`, `supplierId`, `pname`, `brandId`, `quan`, `unit`, `unitPrice`, `totalPrice`, `perc`, `disPrice`, `size`, `color`, `createdBy`, `updatedBy`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 12, 2, '499', '5988', NULL, '0', NULL, 1, 1, NULL, '2021-04-12 05:10:36', NULL),
(2, 2, 1, 2, 1, 50, NULL, '170', '8500', NULL, '0', NULL, NULL, 1, NULL, '2021-05-22 01:50:11', NULL),
(3, 3, 1, 3, 1, 12, 1, '400', '4800', NULL, '0', NULL, NULL, 1, NULL, '2021-05-22 02:04:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_product_total_prices`
--

CREATE TABLE `purchase_product_total_prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pname` int(11) NOT NULL,
  `totalQuantity` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `createBy` int(11) DEFAULT NULL,
  `updateBy` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_product_total_prices`
--

INSERT INTO `purchase_product_total_prices` (`id`, `pname`, `totalQuantity`, `totalPrice`, `createBy`, `updateBy`, `created_at`, `updated_at`) VALUES
(1, 1, 12, 5988, 1, NULL, NULL, NULL),
(2, 2, 50, 8500, 1, NULL, NULL, NULL),
(3, 3, 12, 4800, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_product_total_quantities`
--

CREATE TABLE `purchase_product_total_quantities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `supplierId` int(11) NOT NULL,
  `totalQuantity` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `createBy` int(11) NOT NULL,
  `updateBy` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_product_total_quantities`
--

INSERT INTO `purchase_product_total_quantities` (`id`, `supplierId`, `totalQuantity`, `totalPrice`, `createBy`, `updateBy`, `created_at`, `updated_at`) VALUES
(1, 1, 74, 19288, 1, 1, '2021-04-12 05:11:35', '2021-05-22 02:04:53');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_types`
--

CREATE TABLE `purchase_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchaseType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_types`
--

INSERT INTO `purchase_types` (`id`, `purchaseType`, `created_at`, `updated_at`) VALUES
(1, 'Local', '2021-04-12 05:11:14', '2021-04-12 05:11:14'),
(2, 'Export', '2021-04-12 05:11:19', '2021-04-12 05:11:19');

-- --------------------------------------------------------

--
-- Table structure for table `sales_salaries`
--

CREATE TABLE `sales_salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salesAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `size` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `up` int(11) DEFAULT NULL,
  `left` int(11) DEFAULT NULL,
  `right` int(11) DEFAULT NULL,
  `notice` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `image`, `url`, `up`, `left`, `right`, `notice`, `created_at`, `updated_at`) VALUES
(9, '1619000873.webp', NULL, NULL, 1, NULL, NULL, '2021-04-21 04:27:53', '2021-04-21 04:27:53'),
(10, '1619000896.jpeg', NULL, NULL, NULL, 1, NULL, '2021-04-21 04:28:16', '2021-04-21 04:28:16'),
(11, '1619000916.jpeg', NULL, NULL, NULL, 1, NULL, '2021-04-21 04:28:36', '2021-04-21 04:28:36'),
(12, '1619000942.png', NULL, NULL, NULL, 1, NULL, '2021-04-21 04:29:02', '2021-04-21 04:29:02'),
(13, '1619000950.jpeg', NULL, NULL, NULL, 1, NULL, '2021-04-21 04:29:10', '2021-04-21 04:29:10'),
(23, '1619002024.webp', NULL, 1, NULL, NULL, NULL, '2021-04-21 04:47:04', '2021-04-21 04:47:04');

-- --------------------------------------------------------

--
-- Table structure for table `sub_menus`
--

CREATE TABLE `sub_menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moduleId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menuId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subMenuName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subMenuPosition` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subMenuUrl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_menus`
--

INSERT INTO `sub_menus` (`id`, `moduleId`, `menuId`, `subMenuName`, `subMenuPosition`, `subMenuUrl`, `status`, `created_at`, `updated_at`) VALUES
(10, '19', '42', 'Unit List', '54', 'unitlist', 0, '2021-01-03 00:52:44', '2021-01-03 15:01:48'),
(11, '19', '42', 'Brand List', '55', 'brandlist', 0, '2021-01-03 00:53:11', '2021-01-03 15:46:16'),
(12, '19', '42', 'Color List', '56', 'colorlist', 0, '2021-01-03 00:53:30', '2021-01-03 16:01:37'),
(13, '19', '42', 'Supplier List', '57', 'supplierlist', 0, '2021-01-03 00:53:56', '2021-01-03 16:10:24'),
(14, '19', '42', 'Supplier Business List', '58', 'businesslist', 0, '2021-01-03 00:54:55', '2021-01-03 17:43:43'),
(15, '19', '42', 'Purchase Type', '59', 'purchasetypelist', 0, '2021-01-03 00:55:22', '2021-01-03 17:55:25'),
(16, '19', '42', 'Purchase Damage List', '60', '@', 0, '2021-01-03 00:55:57', '2021-01-03 00:55:57'),
(17, '19', '42', 'Purchase Return List', '61', '@', 0, '2021-01-03 00:56:32', '2021-01-03 00:56:32'),
(18, '19', '42', 'Purchase List', '62', 'purchaselist', 0, '2021-01-03 00:57:01', '2021-01-03 18:47:35'),
(19, '19', '42', 'Purchase Invoice Repot', '63', 'purchaseinvoicereport', 0, '2021-01-03 18:01:43', '2021-01-03 18:01:43'),
(20, '5', '51', 'Product list', '64', 'productlist', 0, '2021-01-03 20:35:31', '2021-01-07 18:35:44'),
(21, '5', '51', 'Product with Price', '65', 'pricelist', 0, '2021-01-03 20:36:02', '2021-01-07 18:31:00'),
(22, '5', '51', 'Category  List', '66', 'categorylist', 0, '2021-01-03 20:36:46', '2021-01-07 14:33:56'),
(23, '5', '51', 'Category With Product', '67', 'categoryandproduct', 0, '2021-01-03 20:37:06', '2021-01-07 18:54:35'),
(24, '5', '51', 'Stock Summery', '68', 'stocksummery', 0, '2021-01-03 20:38:18', '2021-01-09 13:04:01'),
(25, '5', '51', 'Ware House List', '69', 'warehouselist', 0, '2021-01-05 23:28:24', '2021-01-07 18:25:27'),
(26, '5', '51', 'Product Transfer Report', '70', 'producttransferreport', 0, '2021-01-05 23:29:10', '2021-01-07 18:09:35'),
(27, '5', '51', 'Product Name List', '71', 'productnamelist', 0, '2021-01-05 23:30:09', '2021-01-07 17:53:51'),
(29, '5', '51', 'Offer List', '73', '@', 0, '2021-01-05 23:34:34', '2021-01-05 23:34:34'),
(30, '5', '51', 'Back Entry Report', '75', 'transferbackreport', 0, '2021-01-10 13:42:22', '2021-01-10 13:42:22'),
(31, '5', '51', 'Brand Wise Stock', '76', 'brandwisestock', 0, '2021-01-10 19:57:13', '2021-01-10 19:57:13'),
(32, '11', '64', 'Delivery Cancel', '126', '@', 0, '2021-03-09 23:43:53', '2021-03-09 23:43:53'),
(33, '11', '64', 'Success Delivery', '127', '@', 0, '2021-03-09 23:44:18', '2021-03-09 23:44:18'),
(34, '11', '64', 'Balance Sheet', '128', '@', 0, '2021-03-09 23:44:50', '2021-03-09 23:44:50'),
(35, '11', '64', 'Delivery Commision', '131', '@', 0, '2021-03-09 23:49:13', '2021-03-09 23:49:13'),
(36, '10', '53', 'Offer Product List', '122', 'offerproductlist', 0, '2021-03-15 01:30:18', '2021-03-15 01:31:46'),
(37, '14', '85', 'Customer List', '123', 'customerlist', 0, '2021-03-18 01:35:10', '2021-03-18 01:35:10');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `businessType` int(11) DEFAULT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hotLine` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fb` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `web` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `businessType`, `code`, `phone`, `hotLine`, `mail`, `fb`, `web`, `address`, `created_at`, `updated_at`) VALUES
(1, 'D Trump', NULL, 's01', '4t65675767', '45654654654', 'supplier@gmail.com', 'Dtrump', NULL, 'Dhaka', '2021-04-12 05:08:36', '2021-04-12 05:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `target_sales_commissions`
--

CREATE TABLE `target_sales_commissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `targetSalesAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkAmount` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE `terms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unions`
--

CREATE TABLE `unions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `thanaId` int(11) NOT NULL,
  `union` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn-union` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unit_entries`
--

CREATE TABLE `unit_entries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `unit` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `unit_entries`
--

INSERT INTO `unit_entries` (`id`, `unit`, `status`, `created_at`, `updated_at`) VALUES
(1, '500 gm', 0, '2021-04-12 05:09:11', '2021-04-12 05:09:11'),
(2, '1 kg', 0, '2021-04-12 05:09:16', '2021-04-12 05:09:16'),
(3, '2 kg', 0, '2021-04-12 05:09:19', '2021-04-12 05:09:19');

-- --------------------------------------------------------

--
-- Table structure for table `upazilas`
--

CREATE TABLE `upazilas` (
  `id` int(2) UNSIGNED NOT NULL,
  `district_id` int(2) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `upazilas`
--

INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`, `created_at`, `updated_at`) VALUES
(1, 34, 'Amtali', 'আমতলী', '0000-00-00 00:00:00', '2016-04-06 06:48:15'),
(2, 34, 'Bamna ', 'বামনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 34, 'Barguna Sadar ', 'বরগুনা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 34, 'Betagi ', 'বেতাগি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 34, 'Patharghata ', 'পাথরঘাটা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 34, 'Taltali ', 'তালতলী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 35, 'Muladi ', 'মুলাদি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 35, 'Babuganj ', 'বাবুগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 35, 'Agailjhara ', 'আগাইলঝরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 35, 'Barisal Sadar ', 'বরিশাল সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 35, 'Bakerganj ', 'বাকেরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 35, 'Banaripara ', 'বানাড়িপারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 35, 'Gaurnadi ', 'গৌরনদী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 35, 'Hizla ', 'হিজলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 35, 'Mehendiganj ', 'মেহেদিগঞ্জ ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 35, 'Wazirpur ', 'ওয়াজিরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 36, 'Bhola Sadar ', 'ভোলা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 36, 'Burhanuddin ', 'বুরহানউদ্দিন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 36, 'Char Fasson ', 'চর ফ্যাশন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 36, 'Daulatkhan ', 'দৌলতখান', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 36, 'Lalmohan ', 'লালমোহন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 36, 'Manpura ', 'মনপুরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 36, 'Tazumuddin ', 'তাজুমুদ্দিন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 37, 'Jhalokati Sadar ', 'ঝালকাঠি সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 37, 'Kathalia ', 'কাঁঠালিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 37, 'Nalchity ', 'নালচিতি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 37, 'Rajapur ', 'রাজাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 38, 'Bauphal ', 'বাউফল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 38, 'Dashmina ', 'দশমিনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 38, 'Galachipa ', 'গলাচিপা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 38, 'Kalapara ', 'কালাপারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 38, 'Mirzaganj ', 'মির্জাগঞ্জ ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 38, 'Patuakhali Sadar ', 'পটুয়াখালী সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 38, 'Dumki ', 'ডুমকি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 38, 'Rangabali ', 'রাঙ্গাবালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 39, 'Bhandaria', 'ভ্যান্ডারিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 39, 'Kaukhali', 'কাউখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 39, 'Mathbaria', 'মাঠবাড়িয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 39, 'Nazirpur', 'নাজিরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 39, 'Nesarabad', 'নেসারাবাদ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 39, 'Pirojpur Sadar', 'পিরোজপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 39, 'Zianagar', 'জিয়ানগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 40, 'Bandarban Sadar', 'বান্দরবন সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 40, 'Thanchi', 'থানচি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 40, 'Lama', 'লামা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 40, 'Naikhongchhari', 'নাইখংছড়ি ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 40, 'Ali kadam', 'আলী কদম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 40, 'Rowangchhari', 'রউয়াংছড়ি ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 40, 'Ruma', 'রুমা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 41, 'Brahmanbaria Sadar ', 'ব্রাহ্মণবাড়িয়া সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 41, 'Ashuganj ', 'আশুগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 41, 'Nasirnagar ', 'নাসির নগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 41, 'Nabinagar ', 'নবীনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 41, 'Sarail ', 'সরাইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 41, 'Shahbazpur Town', 'শাহবাজপুর টাউন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 41, 'Kasba ', 'কসবা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 41, 'Akhaura ', 'আখাউরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 41, 'Bancharampur ', 'বাঞ্ছারামপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 41, 'Bijoynagar ', 'বিজয় নগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 42, 'Chandpur Sadar', 'চাঁদপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 42, 'Faridganj', 'ফরিদগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 42, 'Haimchar', 'হাইমচর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 42, 'Haziganj', 'হাজীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 42, 'Kachua', 'কচুয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 42, 'Matlab Uttar', 'মতলব উত্তর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 42, 'Matlab Dakkhin', 'মতলব দক্ষিণ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 42, 'Shahrasti', 'শাহরাস্তি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 43, 'Anwara ', 'আনোয়ারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 43, 'Banshkhali ', 'বাশখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 43, 'Boalkhali ', 'বোয়ালখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 43, 'Chandanaish ', 'চন্দনাইশ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 43, 'Fatikchhari ', 'ফটিকছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 43, 'Hathazari ', 'হাঠহাজারী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 43, 'Lohagara ', 'লোহাগারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 43, 'Mirsharai ', 'মিরসরাই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 43, 'Patiya ', 'পটিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 43, 'Rangunia ', 'রাঙ্গুনিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 43, 'Raozan ', 'রাউজান', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 43, 'Sandwip ', 'সন্দ্বীপ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 43, 'Satkania ', 'সাতকানিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 43, 'Sitakunda ', 'সীতাকুণ্ড', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 44, 'Barura ', 'বড়ুরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 44, 'Brahmanpara ', 'ব্রাহ্মণপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 44, 'Burichong ', 'বুড়িচং', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 44, 'Chandina ', 'চান্দিনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 44, 'Chauddagram ', 'চৌদ্দগ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 44, 'Daudkandi ', 'দাউদকান্দি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 44, 'Debidwar ', 'দেবীদ্বার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 44, 'Homna ', 'হোমনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 44, 'Comilla Sadar ', 'কুমিল্লা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 44, 'Laksam ', 'লাকসাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 44, 'Monohorgonj ', 'মনোহরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 44, 'Meghna ', 'মেঘনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 44, 'Muradnagar ', 'মুরাদনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 44, 'Nangalkot ', 'নাঙ্গালকোট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 44, 'Comilla Sadar South ', 'কুমিল্লা সদর দক্ষিণ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 44, 'Titas ', 'তিতাস', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 45, 'Chakaria ', 'চকরিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 45, 'Chakaria ', 'চকরিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 45, 'Cox\'s Bazar Sadar ', 'কক্স বাজার সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 45, 'Kutubdia ', 'কুতুবদিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 45, 'Maheshkhali ', 'মহেশখালী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 45, 'Ramu ', 'রামু', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 45, 'Teknaf ', 'টেকনাফ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 45, 'Ukhia ', 'উখিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 45, 'Pekua ', 'পেকুয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 46, 'Feni Sadar', 'ফেনী সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 46, 'Chagalnaiya', 'ছাগল নাইয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 46, 'Daganbhyan', 'দাগানভিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 46, 'Parshuram', 'পরশুরাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 46, 'Fhulgazi', 'ফুলগাজি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 46, 'Sonagazi', 'সোনাগাজি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 47, 'Dighinala ', 'দিঘিনালা ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 47, 'Khagrachhari ', 'খাগড়াছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, 47, 'Lakshmichhari ', 'লক্ষ্মীছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 47, 'Mahalchhari ', 'মহলছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, 47, 'Manikchhari ', 'মানিকছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, 47, 'Matiranga ', 'মাটিরাঙ্গা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, 47, 'Panchhari ', 'পানছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, 47, 'Ramgarh ', 'রামগড়', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, 48, 'Lakshmipur Sadar ', 'লক্ষ্মীপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, 48, 'Raipur ', 'রায়পুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 48, 'Ramganj ', 'রামগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, 48, 'Ramgati ', 'রামগতি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, 48, 'Komol Nagar ', 'কমল নগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, 49, 'Noakhali Sadar ', 'নোয়াখালী সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, 49, 'Begumganj ', 'বেগমগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, 49, 'Chatkhil ', 'চাটখিল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, 49, 'Companyganj ', 'কোম্পানীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, 49, 'Shenbag ', 'শেনবাগ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, 49, 'Hatia ', 'হাতিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, 49, 'Kobirhat ', 'কবিরহাট ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, 49, 'Sonaimuri ', 'সোনাইমুরি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, 49, 'Suborno Char ', 'সুবর্ণ চর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 50, 'Rangamati Sadar ', 'রাঙ্গামাটি সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 50, 'Belaichhari ', 'বেলাইছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 50, 'Bagaichhari ', 'বাঘাইছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 50, 'Barkal ', 'বরকল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 50, 'Juraichhari ', 'জুরাইছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 50, 'Rajasthali ', 'রাজাস্থলি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 50, 'Kaptai ', 'কাপ্তাই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 50, 'Langadu ', 'লাঙ্গাডু', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 50, 'Nannerchar ', 'নান্নেরচর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 50, 'Kaukhali ', 'কাউখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, 2, 'Faridpur Sadar ', 'ফরিদপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, 2, 'Boalmari ', 'বোয়ালমারী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, 2, 'Alfadanga ', 'আলফাডাঙ্গা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(153, 2, 'Madhukhali ', 'মধুখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(154, 2, 'Bhanga ', 'ভাঙ্গা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(155, 2, 'Nagarkanda ', 'নগরকান্ড', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(156, 2, 'Charbhadrasan ', 'চরভদ্রাসন ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(157, 2, 'Sadarpur ', 'সদরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(158, 2, 'Shaltha ', 'শালথা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(159, 3, 'Gazipur Sadar-Joydebpur', 'গাজীপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(160, 3, 'Kaliakior', 'কালিয়াকৈর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(161, 3, 'Kapasia', 'কাপাসিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(162, 3, 'Sripur', 'শ্রীপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(163, 3, 'Kaliganj', 'কালীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(164, 3, 'Tongi', 'টঙ্গি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(165, 4, 'Gopalganj Sadar ', 'গোপালগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(166, 4, 'Kashiani ', 'কাশিয়ানি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(167, 4, 'Kotalipara ', 'কোটালিপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(168, 4, 'Muksudpur ', 'মুকসুদপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(169, 4, 'Tungipara ', 'টুঙ্গিপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(170, 5, 'Dewanganj ', 'দেওয়ানগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(171, 5, 'Baksiganj ', 'বকসিগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(172, 5, 'Islampur ', 'ইসলামপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(173, 5, 'Jamalpur Sadar ', 'জামালপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(174, 5, 'Madarganj ', 'মাদারগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(175, 5, 'Melandaha ', 'মেলানদাহা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(176, 5, 'Sarishabari ', 'সরিষাবাড়ি ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(177, 5, 'Narundi Police I.C', 'নারুন্দি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(178, 6, 'Astagram ', 'অষ্টগ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(179, 6, 'Bajitpur ', 'বাজিতপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(180, 6, 'Bhairab ', 'ভৈরব', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(181, 6, 'Hossainpur ', 'হোসেনপুর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(182, 6, 'Itna ', 'ইটনা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(183, 6, 'Karimganj ', 'করিমগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(184, 6, 'Katiadi ', 'কতিয়াদি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(185, 6, 'Kishoreganj Sadar ', 'কিশোরগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(186, 6, 'Kuliarchar ', 'কুলিয়ারচর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(187, 6, 'Mithamain ', 'মিঠামাইন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(188, 6, 'Nikli ', 'নিকলি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(189, 6, 'Pakundia ', 'পাকুন্ডা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(190, 6, 'Tarail ', 'তাড়াইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(191, 7, 'Madaripur Sadar', 'মাদারীপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(192, 7, 'Kalkini', 'কালকিনি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(193, 7, 'Rajoir', 'রাজইর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(194, 7, 'Shibchar', 'শিবচর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(195, 8, 'Manikganj Sadar ', 'মানিকগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(196, 8, 'Singair ', 'সিঙ্গাইর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(197, 8, 'Shibalaya ', 'শিবালয়', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(198, 8, 'Saturia ', 'সাঠুরিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(199, 8, 'Harirampur ', 'হরিরামপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(200, 8, 'Ghior ', 'ঘিওর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(201, 8, 'Daulatpur ', 'দৌলতপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(202, 9, 'Lohajang ', 'লোহাজং', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(203, 9, 'Sreenagar ', 'শ্রীনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(204, 9, 'Munshiganj Sadar ', 'মুন্সিগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(205, 9, 'Sirajdikhan ', 'সিরাজদিখান', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(206, 9, 'Tongibari ', 'টঙ্গিবাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(207, 9, 'Gazaria ', 'গজারিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(208, 10, 'Bhaluka', 'ভালুকা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(209, 10, 'Trishal', 'ত্রিশাল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(210, 10, 'Haluaghat', 'হালুয়াঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(211, 10, 'Muktagachha', 'মুক্তাগাছা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(212, 10, 'Dhobaura', 'ধবারুয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(213, 10, 'Fulbaria', 'ফুলবাড়িয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(214, 10, 'Gaffargaon', 'গফরগাঁও', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(215, 10, 'Gauripur', 'গৌরিপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(216, 10, 'Ishwarganj', 'ঈশ্বরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(217, 10, 'Mymensingh Sadar', 'ময়মনসিং সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(218, 10, 'Nandail', 'নন্দাইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(219, 10, 'Phulpur', 'ফুলপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(220, 11, 'Araihazar ', 'আড়াইহাজার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(221, 11, 'Sonargaon ', 'সোনারগাঁও', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(222, 11, 'Bandar', 'বান্দার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(223, 11, 'Naryanganj Sadar ', 'নারায়ানগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(224, 11, 'Rupganj ', 'রূপগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(225, 11, 'Siddirgonj ', 'সিদ্ধিরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(226, 12, 'Belabo ', 'বেলাবো', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(227, 12, 'Monohardi ', 'মনোহরদি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(228, 12, 'Narsingdi Sadar ', 'নরসিংদী সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(229, 12, 'Palash ', 'পলাশ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(230, 12, 'Raipura , Narsingdi', 'রায়পুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(231, 12, 'Shibpur ', 'শিবপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(232, 13, 'Kendua Upazilla', 'কেন্দুয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(233, 13, 'Atpara Upazilla', 'আটপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(234, 13, 'Barhatta Upazilla', 'বরহাট্টা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(235, 13, 'Durgapur Upazilla', 'দুর্গাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(236, 13, 'Kalmakanda Upazilla', 'কলমাকান্দা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(237, 13, 'Madan Upazilla', 'মদন', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(238, 13, 'Mohanganj Upazilla', 'মোহনগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(239, 13, 'Netrakona-S Upazilla', 'নেত্রকোনা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(240, 13, 'Purbadhala Upazilla', 'পূর্বধলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(241, 13, 'Khaliajuri Upazilla', 'খালিয়াজুরি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(242, 14, 'Baliakandi ', 'বালিয়াকান্দি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(243, 14, 'Goalandaghat ', 'গোয়ালন্দ ঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(244, 14, 'Pangsha ', 'পাংশা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(245, 14, 'Kalukhali ', 'কালুখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(246, 14, 'Rajbari Sadar ', 'রাজবাড়ি সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(247, 15, 'Shariatpur Sadar -Palong', 'শরীয়তপুর সদর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(248, 15, 'Damudya ', 'দামুদিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(249, 15, 'Naria ', 'নড়িয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(250, 15, 'Jajira ', 'জাজিরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(251, 15, 'Bhedarganj ', 'ভেদারগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(252, 15, 'Gosairhat ', 'গোসাইর হাট ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(253, 16, 'Jhenaigati ', 'ঝিনাইগাতি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(254, 16, 'Nakla ', 'নাকলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(255, 16, 'Nalitabari ', 'নালিতাবাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(256, 16, 'Sherpur Sadar ', 'শেরপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(257, 16, 'Sreebardi ', 'শ্রীবরদি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(258, 17, 'Tangail Sadar ', 'টাঙ্গাইল সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(259, 17, 'Sakhipur ', 'সখিপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(260, 17, 'Basail ', 'বসাইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(261, 17, 'Madhupur ', 'মধুপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(262, 17, 'Ghatail ', 'ঘাটাইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(263, 17, 'Kalihati ', 'কালিহাতি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(264, 17, 'Nagarpur ', 'নগরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(265, 17, 'Mirzapur ', 'মির্জাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(266, 17, 'Gopalpur ', 'গোপালপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(267, 17, 'Delduar ', 'দেলদুয়ার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(268, 17, 'Bhuapur ', 'ভুয়াপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(269, 17, 'Dhanbari ', 'ধানবাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(270, 55, 'Bagerhat Sadar ', 'বাগেরহাট সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(271, 55, 'Chitalmari ', 'চিতলমাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(272, 55, 'Fakirhat ', 'ফকিরহাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(273, 55, 'Kachua ', 'কচুয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(274, 55, 'Mollahat ', 'মোল্লাহাট ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(275, 55, 'Mongla ', 'মংলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(276, 55, 'Morrelganj ', 'মরেলগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(277, 55, 'Rampal ', 'রামপাল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(278, 55, 'Sarankhola ', 'স্মরণখোলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(279, 56, 'Damurhuda ', 'দামুরহুদা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(280, 56, 'Chuadanga-S ', 'চুয়াডাঙ্গা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(281, 56, 'Jibannagar ', 'জীবন নগর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(282, 56, 'Alamdanga ', 'আলমডাঙ্গা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(283, 57, 'Abhaynagar ', 'অভয়নগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(284, 57, 'Keshabpur ', 'কেশবপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(285, 57, 'Bagherpara ', 'বাঘের পাড়া ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(286, 57, 'Jessore Sadar ', 'যশোর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(287, 57, 'Chaugachha ', 'চৌগাছা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(288, 57, 'Manirampur ', 'মনিরামপুর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(289, 57, 'Jhikargachha ', 'ঝিকরগাছা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(290, 57, 'Sharsha ', 'সারশা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(291, 58, 'Jhenaidah Sadar ', 'ঝিনাইদহ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(292, 58, 'Maheshpur ', 'মহেশপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(293, 58, 'Kaliganj ', 'কালীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(294, 58, 'Kotchandpur ', 'কোট চাঁদপুর ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(295, 58, 'Shailkupa ', 'শৈলকুপা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(296, 58, 'Harinakunda ', 'হাড়িনাকুন্দা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(297, 59, 'Terokhada ', 'তেরোখাদা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(298, 59, 'Batiaghata ', 'বাটিয়াঘাটা ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(299, 59, 'Dacope ', 'ডাকপে', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(300, 59, 'Dumuria ', 'ডুমুরিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(301, 59, 'Dighalia ', 'দিঘলিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(302, 59, 'Koyra ', 'কয়ড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(303, 59, 'Paikgachha ', 'পাইকগাছা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(304, 59, 'Phultala ', 'ফুলতলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(305, 59, 'Rupsa ', 'রূপসা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(306, 60, 'Kushtia Sadar', 'কুষ্টিয়া সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(307, 60, 'Kumarkhali', 'কুমারখালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(308, 60, 'Daulatpur', 'দৌলতপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(309, 60, 'Mirpur', 'মিরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(310, 60, 'Bheramara', 'ভেরামারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(311, 60, 'Khoksa', 'খোকসা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(312, 61, 'Magura Sadar ', 'মাগুরা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(313, 61, 'Mohammadpur ', 'মোহাম্মাদপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(314, 61, 'Shalikha ', 'শালিখা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(315, 61, 'Sreepur ', 'শ্রীপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(316, 62, 'angni ', 'আংনি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(317, 62, 'Mujib Nagar ', 'মুজিব নগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(318, 62, 'Meherpur-S ', 'মেহেরপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(319, 63, 'Narail-S Upazilla', 'নড়াইল সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(320, 63, 'Lohagara Upazilla', 'লোহাগাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(321, 63, 'Kalia Upazilla', 'কালিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(322, 64, 'Satkhira Sadar ', 'সাতক্ষীরা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(323, 64, 'Assasuni ', 'আসসাশুনি ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(324, 64, 'Debhata ', 'দেভাটা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(325, 64, 'Tala ', 'তালা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(326, 64, 'Kalaroa ', 'কলরোয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(327, 64, 'Kaliganj ', 'কালীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(328, 64, 'Shyamnagar ', 'শ্যামনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(329, 18, 'Adamdighi', 'আদমদিঘী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(330, 18, 'Bogra Sadar', 'বগুড়া সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(331, 18, 'Sherpur', 'শেরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(332, 18, 'Dhunat', 'ধুনট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(333, 18, 'Dhupchanchia', 'দুপচাচিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(334, 18, 'Gabtali', 'গাবতলি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(335, 18, 'Kahaloo', 'কাহালু', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(336, 18, 'Nandigram', 'নন্দিগ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(337, 18, 'Sahajanpur', 'শাহজাহানপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(338, 18, 'Sariakandi', 'সারিয়াকান্দি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(339, 18, 'Shibganj', 'শিবগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(340, 18, 'Sonatala', 'সোনাতলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(341, 19, 'Joypurhat S', 'জয়পুরহাট সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(342, 19, 'Akkelpur', 'আক্কেলপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(343, 19, 'Kalai', 'কালাই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(344, 19, 'Khetlal', 'খেতলাল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(345, 19, 'Panchbibi', 'পাঁচবিবি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(346, 20, 'Naogaon Sadar ', 'নওগাঁ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(347, 20, 'Mohadevpur ', 'মহাদেবপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(348, 20, 'Manda ', 'মান্দা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(349, 20, 'Niamatpur ', 'নিয়ামতপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(350, 20, 'Atrai ', 'আত্রাই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(351, 20, 'Raninagar ', 'রাণীনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(352, 20, 'Patnitala ', 'পত্নীতলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(353, 20, 'Dhamoirhat ', 'ধামইরহাট ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(354, 20, 'Sapahar ', 'সাপাহার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(355, 20, 'Porsha ', 'পোরশা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(356, 20, 'Badalgachhi ', 'বদলগাছি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(357, 21, 'Natore Sadar ', 'নাটোর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(358, 21, 'Baraigram ', 'বড়াইগ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(359, 21, 'Bagatipara ', 'বাগাতিপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(360, 21, 'Lalpur ', 'লালপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(361, 21, 'Natore Sadar ', 'নাটোর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(362, 21, 'Baraigram ', 'বড়াই গ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(363, 22, 'Bholahat ', 'ভোলাহাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(364, 22, 'Gomastapur ', 'গোমস্তাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(365, 22, 'Nachole ', 'নাচোল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(366, 22, 'Nawabganj Sadar ', 'নবাবগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(367, 22, 'Shibganj ', 'শিবগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(368, 23, 'Atgharia ', 'আটঘরিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(369, 23, 'Bera ', 'বেড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(370, 23, 'Bhangura ', 'ভাঙ্গুরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(371, 23, 'Chatmohar ', 'চাটমোহর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(372, 23, 'Faridpur ', 'ফরিদপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(373, 23, 'Ishwardi ', 'ঈশ্বরদী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(374, 23, 'Pabna Sadar ', 'পাবনা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(375, 23, 'Santhia ', 'সাথিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(376, 23, 'Sujanagar ', 'সুজানগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(377, 24, 'Bagha', 'বাঘা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(378, 24, 'Bagmara', 'বাগমারা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(379, 24, 'Charghat', 'চারঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(380, 24, 'Durgapur', 'দুর্গাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(381, 24, 'Godagari', 'গোদাগারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(382, 24, 'Mohanpur', 'মোহনপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(383, 24, 'Paba', 'পবা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(384, 24, 'Puthia', 'পুঠিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(385, 24, 'Tanore', 'তানোর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(386, 25, 'Sirajganj Sadar ', 'সিরাজগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(387, 25, 'Belkuchi ', 'বেলকুচি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(388, 25, 'Chauhali ', 'চৌহালি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(389, 25, 'Kamarkhanda ', 'কামারখান্দা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(390, 25, 'Kazipur ', 'কাজীপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(391, 25, 'Raiganj ', 'রায়গঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(392, 25, 'Shahjadpur ', 'শাহজাদপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(393, 25, 'Tarash ', 'তারাশ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(394, 25, 'Ullahpara ', 'উল্লাপাড়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(395, 26, 'Birampur ', 'বিরামপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(396, 26, 'Birganj', 'বীরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(397, 26, 'Biral ', 'বিড়াল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(398, 26, 'Bochaganj ', 'বোচাগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(399, 26, 'Chirirbandar ', 'চিরিরবন্দর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(400, 26, 'Phulbari ', 'ফুলবাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(401, 26, 'Ghoraghat ', 'ঘোড়াঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(402, 26, 'Hakimpur ', 'হাকিমপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(403, 26, 'Kaharole ', 'কাহারোল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(404, 26, 'Khansama ', 'খানসামা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(405, 26, 'Dinajpur Sadar ', 'দিনাজপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(406, 26, 'Nawabganj', 'নবাবগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(407, 26, 'Parbatipur ', 'পার্বতীপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(408, 27, 'Fulchhari', 'ফুলছড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(409, 27, 'Gaibandha sadar', 'গাইবান্ধা সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(410, 27, 'Gobindaganj', 'গোবিন্দগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(411, 27, 'Palashbari', 'পলাশবাড়ী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(412, 27, 'Sadullapur', 'সাদুল্যাপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(413, 27, 'Saghata', 'সাঘাটা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(414, 27, 'Sundarganj', 'সুন্দরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(415, 28, 'Kurigram Sadar', 'কুড়িগ্রাম সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(416, 28, 'Nageshwari', 'নাগেশ্বরী', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(417, 28, 'Bhurungamari', 'ভুরুঙ্গামারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(418, 28, 'Phulbari', 'ফুলবাড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(419, 28, 'Rajarhat', 'রাজারহাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(420, 28, 'Ulipur', 'উলিপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(421, 28, 'Chilmari', 'চিলমারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(422, 28, 'Rowmari', 'রউমারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(423, 28, 'Char Rajibpur', 'চর রাজিবপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(424, 29, 'Lalmanirhat Sadar', 'লালমনিরহাট সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(425, 29, 'Aditmari', 'আদিতমারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(426, 29, 'Kaliganj', 'কালীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(427, 29, 'Hatibandha', 'হাতিবান্ধা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(428, 29, 'Patgram', 'পাটগ্রাম', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(429, 30, 'Nilphamari Sadar', 'নীলফামারী সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(430, 30, 'Saidpur', 'সৈয়দপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(431, 30, 'Jaldhaka', 'জলঢাকা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(432, 30, 'Kishoreganj', 'কিশোরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(433, 30, 'Domar', 'ডোমার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(434, 30, 'Dimla', 'ডিমলা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(435, 31, 'Panchagarh Sadar', 'পঞ্চগড় সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(436, 31, 'Debiganj', 'দেবীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(437, 31, 'Boda', 'বোদা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(438, 31, 'Atwari', 'আটোয়ারি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(439, 31, 'Tetulia', 'তেতুলিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(440, 32, 'Badarganj', 'বদরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(441, 32, 'Mithapukur', 'মিঠাপুকুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(442, 32, 'Gangachara', 'গঙ্গাচরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(443, 32, 'Kaunia', 'কাউনিয়া', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(444, 32, 'Rangpur Sadar', 'রংপুর সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(445, 32, 'Pirgachha', 'পীরগাছা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(446, 32, 'Pirganj', 'পীরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(447, 32, 'Taraganj', 'তারাগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(448, 33, 'Thakurgaon Sadar ', 'ঠাকুরগাঁও সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(449, 33, 'Pirganj ', 'পীরগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(450, 33, 'Baliadangi ', 'বালিয়াডাঙ্গি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(451, 33, 'Haripur ', 'হরিপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(452, 33, 'Ranisankail ', 'রাণীসংকইল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(453, 51, 'Ajmiriganj', 'আজমিরিগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(454, 51, 'Baniachang', 'বানিয়াচং', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(455, 51, 'Bahubal', 'বাহুবল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(456, 51, 'Chunarughat', 'চুনারুঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(457, 51, 'Habiganj Sadar', 'হবিগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(458, 51, 'Lakhai', 'লাক্ষাই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(459, 51, 'Madhabpur', 'মাধবপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(460, 51, 'Nabiganj', 'নবীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(461, 51, 'Shaistagonj ', 'শায়েস্তাগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(462, 52, 'Moulvibazar Sadar', 'মৌলভীবাজার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(463, 52, 'Barlekha', 'বড়লেখা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(464, 52, 'Juri', 'জুড়ি', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(465, 52, 'Kamalganj', 'কামালগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(466, 52, 'Kulaura', 'কুলাউরা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(467, 52, 'Rajnagar', 'রাজনগর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(468, 52, 'Sreemangal', 'শ্রীমঙ্গল', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(469, 53, 'Bishwamvarpur', 'বিসশম্ভারপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(470, 53, 'Chhatak', 'ছাতক', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(471, 53, 'Derai', 'দেড়াই', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(472, 53, 'Dharampasha', 'ধরমপাশা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(473, 53, 'Dowarabazar', 'দোয়ারাবাজার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(474, 53, 'Jagannathpur', 'জগন্নাথপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(475, 53, 'Jamalganj', 'জামালগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(476, 53, 'Sulla', 'সুল্লা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(477, 53, 'Sunamganj Sadar', 'সুনামগঞ্জ সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(478, 53, 'Shanthiganj', 'শান্তিগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(479, 53, 'Tahirpur', 'তাহিরপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(480, 54, 'Sylhet Sadar', 'সিলেট সদর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(481, 54, 'Beanibazar', 'বেয়ানিবাজার', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(482, 54, 'Bishwanath', 'বিশ্বনাথ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(483, 54, 'Dakshin Surma ', 'দক্ষিণ সুরমা', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(484, 54, 'Balaganj', 'বালাগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(485, 54, 'Companiganj', 'কোম্পানিগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(486, 54, 'Fenchuganj', 'ফেঞ্চুগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(487, 54, 'Golapganj', 'গোলাপগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(488, 54, 'Gowainghat', 'গোয়াইনঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(489, 54, 'Jaintiapur', 'জয়ন্তপুর', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(490, 54, 'Kanaighat', 'কানাইঘাট', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(491, 54, 'Zakiganj', 'জাকিগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(492, 54, 'Nobigonj', 'নবীগঞ্জ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(493, 1, 'Adabor', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(494, 1, 'Airport', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(495, 1, 'Badda', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(496, 1, 'Banani', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(497, 1, 'Bangshal', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(498, 1, 'Bhashantek', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(499, 1, 'Cantonment', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(500, 1, 'Chackbazar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(501, 1, 'Darussalam', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(502, 1, 'Daskhinkhan', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(503, 1, 'Demra', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(504, 1, 'Dhamrai', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(505, 1, 'Dhanmondi', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(506, 1, 'Dohar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(507, 1, 'Gandaria', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(508, 1, 'Gulshan', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(509, 1, 'Hazaribag', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(510, 1, 'Jatrabari', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(511, 1, 'Kafrul', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(512, 1, 'Kalabagan', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(513, 1, 'Kamrangirchar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(514, 1, 'Keraniganj', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(515, 1, 'Khilgaon', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(516, 1, 'Khilkhet', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(517, 1, 'Kotwali', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(518, 1, 'Lalbag', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(519, 1, 'Mirpur Model', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(520, 1, 'Mohammadpur', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(521, 1, 'Motijheel', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(522, 1, 'Mugda', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(523, 1, 'Nawabganj', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(524, 1, 'New Market', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(525, 1, 'Pallabi', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(526, 1, 'Paltan', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(527, 1, 'Ramna', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(528, 1, 'Rampura', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(529, 1, 'Rupnagar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(530, 1, 'Sabujbag', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(531, 1, 'Savar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(532, 1, 'Shah Ali', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(533, 1, 'Shahbag', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(534, 1, 'Shahjahanpur', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(535, 1, 'Sherebanglanagar', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(536, 1, 'Shyampur', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(537, 1, 'Sutrapur', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(538, 1, 'Tejgaon', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(539, 1, 'Tejgaon I/A', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(540, 1, 'Turag', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(541, 1, 'Uttara', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(542, 1, 'Uttara West', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(543, 1, 'Uttarkhan', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(544, 1, 'Vatara', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(545, 1, 'Wari', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(546, 1, 'Others', NULL, '2016-04-06 11:00:09', '0000-00-00 00:00:00'),
(547, 35, 'Airport', 'এয়ারপোর্ট', '2016-04-06 11:22:44', '0000-00-00 00:00:00'),
(548, 35, 'Kawnia', 'কাউনিয়া', '2016-04-06 11:24:16', '0000-00-00 00:00:00'),
(549, 35, 'Bondor', 'বন্দর', '2016-04-06 11:26:55', '0000-00-00 00:00:00'),
(550, 35, 'Others', 'অন্যান্য', '2016-04-06 11:27:50', '0000-00-00 00:00:00'),
(551, 24, 'Boalia', 'বোয়ালিয়া', '2016-04-06 11:31:49', '0000-00-00 00:00:00'),
(552, 24, 'Motihar', 'মতিহার', '2016-04-06 11:32:36', '0000-00-00 00:00:00'),
(553, 24, 'Shahmokhdum', 'শাহ্ মকখদুম ', '2016-04-06 11:35:51', '0000-00-00 00:00:00'),
(554, 24, 'Rajpara', 'রাজপারা ', '2016-04-06 11:38:08', '0000-00-00 00:00:00'),
(555, 24, 'Others', 'অন্যান্য', '2016-04-06 11:38:45', '0000-00-00 00:00:00'),
(556, 43, 'Akborsha', 'Akborsha', '2016-04-06 11:56:37', '0000-00-00 00:00:00'),
(557, 43, 'Baijid bostami', 'বাইজিদ বোস্তামী', '2016-04-06 12:09:14', '0000-00-00 00:00:00'),
(558, 43, 'Bakolia', 'বাকোলিয়া', '2016-04-06 12:10:28', '0000-00-00 00:00:00'),
(559, 43, 'Bandar', 'বন্দর', '2016-04-06 12:11:29', '0000-00-00 00:00:00'),
(560, 43, 'Chandgaon', 'চাঁদগাও', '2016-04-06 12:12:10', '0000-00-00 00:00:00'),
(561, 43, 'Chokbazar', 'চকবাজার', '2016-04-06 12:12:46', '0000-00-00 00:00:00'),
(562, 43, 'Doublemooring', 'ডাবল মুরিং', '2016-04-06 12:13:46', '0000-00-00 00:00:00'),
(563, 43, 'EPZ', 'ইপিজেড', '2016-04-06 12:14:31', '0000-00-00 00:00:00'),
(564, 43, 'Hali Shohor', 'হলী শহর', '2016-04-06 12:15:30', '0000-00-00 00:00:00'),
(565, 43, 'Kornafuli', 'কর্ণফুলি', '2016-04-06 12:16:05', '0000-00-00 00:00:00'),
(566, 43, 'Kotwali', 'কোতোয়ালী', '2016-04-06 12:16:44', '0000-00-00 00:00:00'),
(567, 43, 'Kulshi', 'কুলশি', '2016-04-06 12:17:45', '0000-00-00 00:00:00'),
(568, 43, 'Pahartali', 'পাহাড়তলী', '2016-04-06 12:19:02', '0000-00-00 00:00:00'),
(569, 43, 'Panchlaish', 'পাঁচলাইশ', '2016-04-06 12:20:00', '0000-00-00 00:00:00'),
(570, 43, 'Potenga', 'পতেঙ্গা', '2016-04-06 12:20:56', '0000-00-00 00:00:00'),
(571, 43, 'Shodhorgat', 'সদরঘাট', '2016-04-06 12:21:55', '0000-00-00 00:00:00'),
(572, 43, 'Others', 'অন্যান্য', '2016-04-06 12:22:27', '0000-00-00 00:00:00'),
(573, 44, 'Others', 'অন্যান্য', '2016-04-06 12:37:35', '0000-00-00 00:00:00'),
(574, 59, 'Aranghata', 'আড়াংঘাটা', '2016-04-06 13:30:26', '0000-00-00 00:00:00'),
(575, 59, 'Daulatpur', 'দৌলতপুর', '2016-04-06 13:31:48', '0000-00-00 00:00:00'),
(576, 59, 'Harintana', 'হারিন্তানা ', '2016-04-06 13:33:42', '0000-00-00 00:00:00'),
(577, 59, 'Horintana', 'হরিণতানা ', '2016-04-06 13:34:47', '0000-00-00 00:00:00'),
(578, 59, 'Khalishpur', 'খালিশপুর', '2016-04-06 13:35:32', '0000-00-00 00:00:00'),
(579, 59, 'Khanjahan Ali', 'খানজাহান আলী', '2016-04-06 13:36:50', '0000-00-00 00:00:00'),
(580, 59, 'Khulna Sadar', 'খুলনা সদর', '2016-04-06 13:37:34', '0000-00-00 00:00:00'),
(581, 59, 'Labanchora', 'লাবানছোরা', '2016-04-06 13:38:59', '0000-00-00 00:00:00'),
(582, 59, 'Sonadanga', 'সোনাডাঙ্গা', '2016-04-06 13:39:58', '0000-00-00 00:00:00'),
(583, 59, 'Others', 'অন্যান্য', '2016-04-06 13:41:50', '0000-00-00 00:00:00'),
(584, 2, 'Others', 'অন্যান্য', '2016-04-06 13:43:32', '0000-00-00 00:00:00'),
(585, 4, 'Others', 'অন্যান্য', '2016-04-06 13:44:43', '0000-00-00 00:00:00'),
(586, 5, 'Others', 'অন্যান্য', '2016-04-06 13:45:54', '0000-00-00 00:00:00'),
(587, 54, 'Airport', 'বিমানবন্দর', '2016-04-06 13:54:23', '0000-00-00 00:00:00'),
(588, 54, 'Hazrat Shah Paran', 'হযরত শাহ পরাণ', '2016-04-06 13:56:49', '0000-00-00 00:00:00'),
(589, 54, 'Jalalabad', 'জালালাবাদ', '2016-04-06 13:57:51', '0000-00-00 00:00:00'),
(590, 54, 'Kowtali', 'কোতোয়ালী', '2016-04-06 13:59:03', '0000-00-00 00:00:00'),
(591, 54, 'Moglabazar', 'মোগলাবাজার', '2016-04-06 14:00:34', '0000-00-00 00:00:00'),
(592, 54, 'Osmani Nagar', 'ওসমানী নগর', '2016-04-06 14:01:12', '0000-00-00 00:00:00'),
(593, 54, 'South Surma', 'দক্ষিণ সুরমা', '2016-04-06 14:01:52', '0000-00-00 00:00:00'),
(594, 54, 'Others', 'অন্যান্য', '2016-04-06 14:02:43', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roll` int(11) NOT NULL DEFAULT 0,
  `address` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `roll`, `address`, `phone`, `userId`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$bHsJZvCjHckZPtZZ6dkEZ.FaaTfkRK9sloGWuF4.CpaNlXMBetlV.', 0, NULL, NULL, NULL, NULL, '2021-04-11 02:39:24', '2021-04-11 02:39:24'),
(2, 'Nahid', 'nahid@gmail.com', NULL, '$2y$10$UQBCnWF9AuClHcuLT1T7keYMOiF3J.vwQG3jSsAZWdhU99xkSt1S.', 9, NULL, '0we4r5te', 'u8', NULL, '2021-04-11 04:34:14', '2021-04-11 04:34:14'),
(3, 'Nazmul Huda', 'nazmul@gmail.com', NULL, '$2y$10$q3oAy7bMXlG03j0UOxbZDu0TG8ECcgSNDJHNGHypHCSQMs5jXUF9e', 6, 'Dhaka', '435464', 'n01', NULL, '2021-04-12 05:12:51', '2021-04-12 05:12:51'),
(4, 'arif', 'arif@gmail.com', NULL, '$2y$10$Im67HS2LuKuPWaU/6DhO5uYRmjR1kpkiX.VMLFCZu5CMZrE1SEKPm', 2, 'dfg', '111111', 'info@doofazit.com', NULL, '2021-04-13 04:30:18', '2021-04-13 04:30:18'),
(5, 'Kazi Nahid', 'nahid1@gmail.com', NULL, '$2y$10$16nfu2/KCfII4h7JbaA2Euaq58QQr75a4reqj7dCkkwz.4amqigEy', 8, NULL, NULL, 'n2', NULL, NULL, NULL),
(6, 'wewr', 'w@gmail.com', NULL, '$2y$10$PaYU4N2YyvhqUywOy6JsweNSpBOxxPxa32SmK8cPMdd3cEOr68JPC', 9, 'dfgf', '345435', '325', NULL, '2021-05-01 01:30:38', '2021-05-01 01:30:38');

-- --------------------------------------------------------

--
-- Table structure for table `wards`
--

CREATE TABLE `wards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `thanaId` int(11) NOT NULL,
  `ward` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn-ward` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wards`
--

INSERT INTO `wards` (`id`, `thanaId`, `ward`, `bn-ward`, `created_at`, `updated_at`) VALUES
(1, 538, 'Farmgate', NULL, '2021-04-22 03:05:26', '2021-04-22 03:05:26');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `warehouse_locations`
--

CREATE TABLE `warehouse_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `active_users`
--
ALTER TABLE `active_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_types`
--
ALTER TABLE `admin_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `back_transfers`
--
ALTER TABLE `back_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_types`
--
ALTER TABLE `business_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_images`
--
ALTER TABLE `category_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_permissions`
--
ALTER TABLE `category_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commission_types`
--
ALTER TABLE `commission_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`);

--
-- Indexes for table `customer_registrations`
--
ALTER TABLE `customer_registrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_charges`
--
ALTER TABLE `delivery_charges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_man_delivery_times`
--
ALTER TABLE `delivery_man_delivery_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_men`
--
ALTER TABLE `delivery_men`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_times`
--
ALTER TABLE `delivery_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `division_id` (`division_id`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `filtering_statuses`
--
ALTER TABLE `filtering_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `f_a_q_s`
--
ALTER TABLE `f_a_q_s`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generations`
--
ALTER TABLE `generations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incentives`
--
ALTER TABLE `incentives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logos`
--
ALTER TABLE `logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_policies`
--
ALTER TABLE `order_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `price_ranges`
--
ALTER TABLE `price_ranges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price_setups`
--
ALTER TABLE `price_setups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `privacies`
--
ALTER TABLE `privacies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_names`
--
ALTER TABLE `product_names`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_name_infos`
--
ALTER TABLE `product_name_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_transfers`
--
ALTER TABLE `product_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promotional_cashback_amounts`
--
ALTER TABLE `promotional_cashback_amounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_cashback_amounts`
--
ALTER TABLE `purchase_cashback_amounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_invoices`
--
ALTER TABLE `purchase_invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_products`
--
ALTER TABLE `purchase_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_product_total_prices`
--
ALTER TABLE `purchase_product_total_prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_product_total_quantities`
--
ALTER TABLE `purchase_product_total_quantities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_types`
--
ALTER TABLE `purchase_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_salaries`
--
ALTER TABLE `sales_salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_menus`
--
ALTER TABLE `sub_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `target_sales_commissions`
--
ALTER TABLE `target_sales_commissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unions`
--
ALTER TABLE `unions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unit_entries`
--
ALTER TABLE `unit_entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upazilas`
--
ALTER TABLE `upazilas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wards`
--
ALTER TABLE `wards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warehouse_locations`
--
ALTER TABLE `warehouse_locations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `active_users`
--
ALTER TABLE `active_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `admin_permissions`
--
ALTER TABLE `admin_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `admin_types`
--
ALTER TABLE `admin_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `back_transfers`
--
ALTER TABLE `back_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `business_types`
--
ALTER TABLE `business_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `category_images`
--
ALTER TABLE `category_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `category_permissions`
--
ALTER TABLE `category_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `commission_types`
--
ALTER TABLE `commission_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer_registrations`
--
ALTER TABLE `customer_registrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery_charges`
--
ALTER TABLE `delivery_charges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `delivery_man_delivery_times`
--
ALTER TABLE `delivery_man_delivery_times`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `delivery_men`
--
ALTER TABLE `delivery_men`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `delivery_times`
--
ALTER TABLE `delivery_times`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filtering_statuses`
--
ALTER TABLE `filtering_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `f_a_q_s`
--
ALTER TABLE `f_a_q_s`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `generations`
--
ALTER TABLE `generations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `incentives`
--
ALTER TABLE `incentives`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logos`
--
ALTER TABLE `logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_policies`
--
ALTER TABLE `order_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `price_ranges`
--
ALTER TABLE `price_ranges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `price_setups`
--
ALTER TABLE `price_setups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `privacies`
--
ALTER TABLE `privacies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `product_names`
--
ALTER TABLE `product_names`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_name_infos`
--
ALTER TABLE `product_name_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_transfers`
--
ALTER TABLE `product_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promotional_cashback_amounts`
--
ALTER TABLE `promotional_cashback_amounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_cashback_amounts`
--
ALTER TABLE `purchase_cashback_amounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_invoices`
--
ALTER TABLE `purchase_invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `purchase_products`
--
ALTER TABLE `purchase_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `purchase_product_total_prices`
--
ALTER TABLE `purchase_product_total_prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `purchase_product_total_quantities`
--
ALTER TABLE `purchase_product_total_quantities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `purchase_types`
--
ALTER TABLE `purchase_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales_salaries`
--
ALTER TABLE `sales_salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `sub_menus`
--
ALTER TABLE `sub_menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `target_sales_commissions`
--
ALTER TABLE `target_sales_commissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `terms`
--
ALTER TABLE `terms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unions`
--
ALTER TABLE `unions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unit_entries`
--
ALTER TABLE `unit_entries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `upazilas`
--
ALTER TABLE `upazilas`
  MODIFY `id` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=595;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `wards`
--
ALTER TABLE `wards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `warehouse_locations`
--
ALTER TABLE `warehouse_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `districts`
--
ALTER TABLE `districts`
  ADD CONSTRAINT `districts_ibfk_1` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
