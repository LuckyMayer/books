-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 11 日 05:43
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
-- 表的结构 `bookborrow`
--

CREATE TABLE IF NOT EXISTS `bookborrow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookName` varchar(100) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `borrowName` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `borrowDate` date NOT NULL,
  `isReturn` int(11) NOT NULL,
  `returnDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `bookborrow`
--

INSERT INTO `bookborrow` (`id`, `bookName`, `borrowName`, `borrowDate`, `isReturn`, `returnDate`) VALUES
(1, 'Testdemo', 'Zhang', '2016-02-28', 0, '0000-00-00'),
(2, 'book2', 'Zhang', '2016-04-10', 0, '0000-00-00'),
(3, '123', 'Zhang', '2016-03-08', 0, '0000-00-00'),
(4, 'This is Test Book', 'Zhang', '2016-04-20', 0, '0000-00-00'),
(5, 'Test book2', 'Li', '2016-05-03', 0, '0000-00-00'),
(6, 'TheComplete Sherlock Holmes:All 4 Novels and 56 SHort Stories', 'Zhang ', '2016-05-05', 1, '2016-05-10'),
(7, 'da da da', 'Zhang', '2016-05-05', 0, '0000-00-00'),
(8, 'Return book test', 'Zhang', '2016-05-03', 1, '2016-05-07');
