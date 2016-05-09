-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 09 日 09:14
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
-- 表的结构 `bookinfo`
--

CREATE TABLE IF NOT EXISTS `bookinfo` (
  `bookID` bigint(20) NOT NULL AUTO_INCREMENT,
  `bookAmount` int(11) NOT NULL,
  `bookName` varchar(200) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `bookAuthor` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `bookVersion` int(11) NOT NULL,
  `bookPublish` varchar(200) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `bookBrief` varchar(300) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `bookType` int(11) NOT NULL,
  `bookAddr` varchar(300) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `commentID` int(11) NOT NULL,
  `zan` int(11) NOT NULL,
  PRIMARY KEY (`bookID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=150403 ;

--
-- 转存表中的数据 `bookinfo`
--

INSERT INTO `bookinfo` (`bookID`, `bookAmount`, `bookName`, `bookAuthor`, `bookVersion`, `bookPublish`, `bookBrief`, `bookType`, `bookAddr`, `commentID`, `zan`) VALUES
(150401, 2, '用Angularjs开发下一代Web应用', 'Brad Green', 2, '电子工业出版社', '介绍了使用Angularjs进行Web应用开发的基础方法，适合初学者的一本书', 1, '图书管3F', 1, 5),
(150402, 0, '深入浅出node.js', '朴灵', 3, '人民邮电出版社', '介绍了关于node.js开发项目的流程和方式，基于Linux操作系统的，适合有一定JavaScript基础的人', 1, '图书馆3F', 2, 61);
