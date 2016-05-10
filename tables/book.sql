-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-10 17:13:41
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `book`
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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=150422 ;

--
-- 转存表中的数据 `bookinfo`
--

INSERT INTO `bookinfo` (`bookID`, `bookAmount`, `bookName`, `bookAuthor`, `bookVersion`, `bookPublish`, `bookBrief`, `bookType`, `bookAddr`, `commentID`, `zan`) VALUES
(150401, 2, '用Angularjs开发下一代Web应用', 'Brad Green', 2, '电子工业出版社', '介绍了使用Angularjs进行Web应用开发的基础方法，适合初学者的一本书', 1, '图书管2F西', 1, 500),
(150402, 0, '深入浅出node.js', '朴灵', 3, '人民邮电出版社', '介绍了关于node.js开发项目的流程和方式，基于Linux操作系统的，适合有一定JavaScript基础的人', 1, '图书馆2F西', 2, 610),
(150403, 100, '新编大学英语 2', '浙江大学', 2, '外研社', '大学英语专用教材', 2, '图书馆南4F', 0, 0),
(150404, 120, '新编大学英语4', '浙江大学', 2, '外研社', '大学英语教学材料', 2, '图书馆东南2F', 0, 0),
(150405, 200, '大学物理教程（上）', '徐江荣', 3, '教学出版社', '大学物理课使用教材', 6, '图书馆2F东', 0, 100),
(150406, 198, '大学物理教程（下）', '徐江荣', 3, '教学出版社', '大学物理教材料', 6, '图书馆2F东', 0, 0),
(150407, 120, 'MATLAB基础教程', '杨德平', 2, '机械工业出版社', '使用MATLAB进行图形图像算法的处理，减少工作，同时提高了工作效率', 1, '图书馆2F西', 0, 12),
(150408, 40, '呼兰河传', '萧红', 1, '人民邮电出版社', '创作于1942年，正是抗日战争最艰苦的阶段，这使远在香港的萧红更加怀念自己的故乡和童年，于是，她以自己的家乡与童年生活为原型，创作了这部小说。它在艺术形式上是一部比较独特的：它虽然写了人物，但没有主角；虽也叙述故事，却没有主轴；全书七章虽可各自独立却又俨然是一整体。作家以她娴熟的回忆技巧、抒情诗的散文风格、浑重而又轻盈的文笔， 造就了她 “回忆式”的巅峰之作。茅盾曾这样评价它的艺术成就：“它是一篇叙事诗，一片多彩的风土画，一串凄婉的歌谣。” ', 7, '图书馆2F南', 0, 300),
(150409, 0, '边城', '沈从文', 2, '电子工业出版社', '它以20世纪30年代川湘交界的边城小镇茶峒为背景，以兼具抒情诗和小品文的优美笔触，描绘了湘西边地特有的风土人情；借船家少女翠翠的爱情悲剧，凸显出了人性的善良美好与心灵的澄澈纯净。', 7, '图书馆2F南', 0, 200),
(150410, 34, '这么慢，那么美', '罗敷', 1, '电子工业出版社', '暂无简介', 7, '图书馆2F南', 0, 200),
(150411, 34, '莫问他乡与故乡（精）', '季羡林', 3, '人民教育出版社', '本书搜集和整理了有关拉美华人社会的中外文资料，运用历史学和社会学的分析方法，对1847—1970年拉美华人社会的产生、发展和转变进行了细致的分析和概括总结，其中关于拉美华人秘密社会的研究填补了该领域学术研究的空白。', 6, '图书馆2F南', 0, 340),
(150412, 0, '孤独小说家', '石田衣良', 2, '人民教育出版社', '暂无简介', 2, '图书馆2F北', 0, 230),
(150413, 0, 'How To CREATE A MIND', 'RAY KURZWEIL', 2, '浙江人民出版社', '人工智能的未来..', 2, '图书馆2F北', 0, 340),
(150414, 35, '动物农场', '乔治·奥威尔', 2, '人民邮电出版社', '《动物庄园》（Animal Farm）亦译作《动物农场》、《动物农庄》，英国著名作家乔治·奥威尔的一个重要作品。本故事描述了一场“动物主义”革命的酝酿、兴起和最终畸变。本书于1945年首次岀版。', 2, '图书馆2F北', 0, 500),
(150415, 0, '天生变态狂：TED心理学家的脑犯罪之旅', '詹姆斯·法隆 ', 2, '电子工业出版社', '詹姆斯•法隆被《华尔街日报》评为十年来成就最大的神经科学家，他有着美满的事业和家庭，研究大脑组织35年。多年来，他深深着迷于心理变态者的脑部结构研究，并发现心理变态者的大脑边缘皮质都存在相同的变异。', 8, '图书馆3F北', 0, 600),
(150416, 10, '全国法律硕士专业学位研究生入学联考考试指南', '全国法律专业学位研究生教育指导委员会', 15, '人民教育出版社', '全国法律硕士联考权威辅导教材。 含刑法学、民法学、宪法学、法理学、法制史5科。 每个科目均有详细的基本知识的讲解。 其中，刑法学含总论和分论共10多个章节。民法共16个章节。宪法学、法理学和法制史也有多个章节的讲述。是法律硕士联考的指定性教材，考试必备用书。', 8, '图书馆3F北', 0, 200),
(150417, 5, '山丘上的修道院', '范毅舜', 1, '清华大学出版社', '半世纪前，一位自称为无神论者的西方建筑泰斗，为西欧培育神职人员的古老宗教团体设计修道院，他们之间会擦撞出什么火花？\r\n几十年后，一位来自东方的教徒兼摄影家，在这座世界知名的建筑物里恣意徜徉，他如何藉由这座经院建筑整合自己，端详出背后更庞大的生命故事？', 5, '图书馆3F东', 0, 200),
(150418, 2, '经典碑帖笔法丛书:王羲之圣教序及其笔法', '骆恒光 ', 1, '人民教育出版社', '《经典碑帖笔法丛书:王羲之圣教序及其笔法》是经典碑帖笔法丛书之一，撷取了中国书法史上著名的碑帖《圣教序》，通过对其历史年代、作者介绍、风格特征、技法特点等进行全面的介绍，使读者对东晋时期著名书法家王羲之的这一碑帖有一个详细的了解，有利于学习和研究。', 5, '图书馆3F东', 0, 122),
(150419, 2, '世界战争与西方的衰落', '尼尔·弗格森', 2, '人民邮电出版社', '《世界战争与西方的衰落(套装共2册)》西方具有影响力的明星历史学家尼尔•弗格森代表作！\r\n最权威经典的20世纪全景世界战争史，透析当今国际政治与地区冲突的历史教科书！\r\n在这部著作中，弗格森对20世纪前半段历史进行了全面回顾和深入分析。', 4, '图书馆3F西', 0, 120),
(150420, 5, '习近平总书记系列重要讲话读本(2016年) ', '中共中央宣传部', 1, '人民出版社', '《习近平总书记系列重要讲话读本(2016年)》介绍党的十八大以来，习近平总书记围绕治国理政新的实践发表了一系列重要讲话，提出了富有创见的一系列新理念新思想新战略，深刻回答了新形势下党和国家发展的一系列重大理论和现实问题，讲话涉及改革发展稳定、内政外交国防、治党治国治军各个方面，涵盖经济建设、政治建设、文化建设、社会建设、生态文明建设和党的建设各个领域，是坚持和发展中国特色社会主义理论体系的最新成果，为我们在新的历史起点上实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦提供了基本遵循和强大思想武器。', 8, '图书馆3F北', 0, 222),
(150421, 2, '孙子兵法 (6元本中华国学百部', '孙武 ', 1, '电子书', '前孙子者，孙子不遗；后孙子者，不遗孙子”。《孙子兵法》又称《孙武兵法》、《孙子兵书》等，是中国古典军事文化遗产中的璀璨瑰宝，是世界三大兵书之一。全书共十三篇，虽然只有五千余言，但内容包罗万象、博大精深，涉及到战争规律、哲理、谋略、政治、经济、外交、天文、地理等各方面内容，堪称古代兵学理论的宝库和集大成者，在世界广为传播，美国西点军校和哈佛商学院高级管理将其作为人才培训的必读教材', 4, '图书馆3F西', 0, 90);

-- --------------------------------------------------------

--
-- 表的结构 `booktype`
--

CREATE TABLE IF NOT EXISTS `booktype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `types` varchar(100) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `booktype`
--

INSERT INTO `booktype` (`id`, `types`) VALUES
(1, '计算机技术'),
(2, '外国书籍'),
(3, '马克思主义\\邓小平理论\\毛泽东思想'),
(4, '军事'),
(5, '艺术'),
(6, '数理科学与化学'),
(7, '文学'),
(8, '政治法律');

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookID` int(11) NOT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `userName` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `commentdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `bookID`, `comment`, `userName`, `commentdate`) VALUES
(1, 150407, '例子而已', 'admin', '2016-05-02 00:00:00'),
(2, 150407, '正常评论!!', 'admin', '2016-05-10 02:47:21'),
(3, 150407, '这是张三的评论哟~~', '张三', '2016-05-10 03:07:09'),
(4, 150408, '快来看哇~~', '张三', '2016-05-10 03:07:39');

-- --------------------------------------------------------

--
-- 表的结构 `lendhistory`
--

CREATE TABLE IF NOT EXISTS `lendhistory` (
  `id` int(11) DEFAULT NULL,
  `bookName` varchar(200) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `userName` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `browDate` date NOT NULL,
  `shoudReturn` date NOT NULL,
  `isReturn` int(11) NOT NULL,
  `returnDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `isadmin` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `isadmin`) VALUES
(1, 'admin', 'admin', 1),
(2, '张三', '123', 0),
(3, '李四', '123', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
