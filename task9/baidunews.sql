-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-02 09:59:55
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '崇尚劳动的习近平', 'img/laodong.jpg', '2017-05-17 00:00:00', '热点'),
(2, '精选', '手机行业大冲击', 'img/coolpad.jpeg', '2017-04-08 00:00:00', '热点'),
(3, '精选', '脱发治疗新绝招', 'img/tuofa.jpg', '2017-04-13 00:00:00', '百度推广'),
(4, '精选', '足球风云', 'img/footerball.png', '2017-04-05 00:00:00', '百度体育'),
(5, '精选', '发表讲话', 'img/xijinping.jpg', '2017-04-14 00:00:00', '政治'),
(6, '精选', '老外交官会与香港回归：为了2秒钟 我谈判', 'img/tanpan.jpeg', '2017-05-01 00:00:00', '热点'),
(7, '精选', '拜仁旧将 如果真有1亿欧报价穆勒 可以考虑卖掉', 'img/mule.jpeg', '2017-05-01 00:00:00', '猜你喜欢'),
(8, '精选', '经常脱发掉发 叫你一个简单防脱方法', 'img/fangtuo.jpg', '2017-05-01 02:00:00', '广告'),
(9, '精选', '争四关键战又掉链子 曼市双雄给机会', 'img/asenna.jpeg', '2017-05-01 00:00:00', '猜你喜欢'),
(10, '精选', '外媒：一架载39人的客机在古巴西部省份坠毁', 'img/keji.png', '2017-05-01 00:00:00', '网易头条'),
(11, '百家', '京东为什么不支持使用信用卡分期付款', 'img/jingdong.jpeg', '2017-05-01 00:00:00', '支付'),
(12, '百家', '中国人民银行正在发生诸多变化', 'img/bank.png', '2017-05-01 00:00:00', '银行'),
(13, '百家', '刘宗昊：一个无风险切入市场', 'img/liuzonghao.jpeg', '2017-05-01 00:00:00', '猜你喜欢'),
(14, '百家', '四大行业营改试点将满"周岁"', 'img/shidian.png', '2017-05-01 00:00:00', '热点'),
(15, '百家', '美国今年第一季度国内生产总值创3年来新低', 'img/usa.png', '2017-05-01 00:00:00', '热点'),
(16, '百家', '娱乐资讯:戏里"纯爷们",戏外"小男人"', 'img/yule.png', '2017-05-01 00:00:00', '娱乐'),
(17, '百家', '六年前他和杨幂差点结婚', 'img/yangmi.jpeg', '2017-05-01 00:00:00', '娱乐'),
(18, '百家', '马刺vs火箭前瞻:实力的对决', 'img/maci.jpeg', '2017-05-01 00:00:00', '体育'),
(19, '百家', '中国未来篮球可期!大魔王周琦', 'img/zhouqi.jpeg', '2017-05-01 00:00:00', '体育'),
(20, '百家', '10个人1年赚了17亿!明星惊天收入曝光', 'img/shouru.jpeg', '2017-05-01 00:00:00', '娱乐'),
(21, '本地', '余额不退客服电话无人接,投诉共享单车', 'img/danche.jpeg', '2017-05-01 00:00:00', '民生'),
(22, '本地', '北京今天晴热宜出行', 'img/tianqi.jpeg', '2017-05-01 00:00:00', '天气预报'),
(23, '本地', '足协杯前瞻:中超16强亮相', 'img/zuxie.jpeg', '2017-05-01 00:00:00', '体育'),
(24, '本地', '京媒:全运会附加赛每场都是生死战', 'img/quanyunhui.jpeg', '2017-05-01 00:00:00', '体育'),
(25, '本地', '北京一村庄起火 系人为点燃 含大量油脂杨柳絮', 'img/liuxu.jpeg', '2017-05-01 00:00:00', '生活'),
(26, '本地', '[北京ING]北京香山山花季将持续到5月7日', 'img/xiangshan.jpeg', '2017-05-01 00:00:00', '旅游'),
(27, '本地', '群星演唱会唱响北京国际电影节嘉年华', 'img/dianyingjie.jpeg', '2017-05-01 00:00:00', '娱乐'),
(28, '本地', '快讯:北京利尔上涨0.91点 收于5.53元', 'img/gupiao.png', '2017-05-01 00:00:00', '股票'),
(29, '本地', '南通通州一名4岁儿童从小区4楼坠下', 'img/tongzhou.jpeg', '2017-05-01 00:00:00', '生活'),
(30, '本地', '北京游客在甘孜高反晕厥 丹巴县民警接力送医', 'img/gaofan.jpeg', '2017-05-01 00:00:00', '旅游');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
