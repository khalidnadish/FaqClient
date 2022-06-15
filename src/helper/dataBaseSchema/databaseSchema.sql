CREATE DATABASE nadish_site;



--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255)  COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255)   COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255)   COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `user` WRITE;

UNLOCK TABLES;







--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
CREATE TABLE `faq` (
  `faqid` int NOT NULL AUTO_INCREMENT,
  `faq` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userid` int NOT NULL DEFAULT '0',
  `sututes` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'pending',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`faqid`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;


LOCK TABLES `faq` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `ansid` int NOT NULL,
  `userid` int DEFAULT NULL,
  `faqid` int DEFAULT NULL,
  `answer` text COLLATE utf8_unicode_ci,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ansid`),
  KEY `userid_idx` (`userid`),
  KEY `faqid_idx` (`faqid`),
  KEY `user_idx` (`userid`),
  CONSTRAINT `faq` FOREIGN KEY (`faqid`) REFERENCES `faq` (`faqid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

LOCK TABLES `answers` WRITE;
UNLOCK TABLES;
