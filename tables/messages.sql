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
-- 表的结构 `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `receive` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `postTime` datetime NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `isRead` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `messages`
--

INSERT INTO `messages` (`id`, `sender`, `receive`, `postTime`, `content`, `isRead`) VALUES
(5, 'admin', 'Zhang', '2016-05-12 05:26:09', 'Your bookã€Š123ã€‹has met deadLine', 1),
(7, 'admin', 'Zhang', '2016-05-12 05:26:55', 'Your bookã€ŠTestdemoã€‹has met deadLine', 1),
(6, 'admin', 'Zhang', '2016-05-12 05:26:11', 'Your bookã€ŠTestdemoã€‹has met deadLine', 1),
(8, 'admin', 'Zhang', '2016-05-12 08:13:53', 'Your bookã€Š????node.jsã€‹ arrived', 0);
