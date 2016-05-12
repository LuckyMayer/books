-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 12 日 10:02
-- 服务器版本: 5.1.53
-- PHP 版本: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `book`
--

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderBook` varchar(100) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `orderName` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `orderTime` datetime NOT NULL,
  `isAccepted` int(11) NOT NULL DEFAULT '0',
  `bookID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `order`
--

INSERT INTO `order` (`id`, `orderBook`, `orderName`, `orderTime`, `isAccepted`, `bookID`) VALUES
(1, '????node.js', 'Zhang', '2016-05-12 06:26:19', 0, 150402),
(4, '??????TED??????????', 'Zhang', '2016-05-12 06:30:25', 0, 150415),
(9, '??', 'Zhang', '2016-05-12 07:13:46', 0, 150409),
(7, '?????', 'Zhang', '2016-05-12 06:32:28', 0, 150412);
