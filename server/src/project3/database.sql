CREATE DATABASE  IF NOT EXISTS `stickers_shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stickers_shop`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: stickers_shop
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  `img` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Toutes les Collections','cat-all.png'),(2,'Bêernadin et sa bande','cat-beernadin.png'),(3,'le monde boisé de Léonard','cat-leonard.png'),(4,'les Savanimo','cat-savanimo.png'),(5,'Contes de princesses','cat-pincesses.png'),(6,'Histoires de Cowboys','cat-cowboys.png'),(7,'les fables','cat-fables.png'),(8,'les Zif','cat-zif.png'),(9,'les Glish','cat-glish.png'),(10,'les Stickflores','cat-stickflores.png'),(11,'les Motifs','cat-motifs.png'),(12,'les Zelle','cat-zelle.png'),(13,'les Plumés','cat-plumes.png'),(14,'Portraits de curieux','cat-curieux.png'),(15,'Stickers XXL','cat-xxl.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color_name` varchar(45) NOT NULL,
  `display_order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `color_name_UNIQUE` (`color_name`),
  UNIQUE KEY `display_order_UNIQUE` (`display_order`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'x',1),(2,'or',32),(3,'brun',28),(4,'noir',31),(5,'rose',10),(6,'beige',3),(7,'blanc',200),(8,'jaune',4),(9,'lilas',13),(10,'sauge',24),(11,'taupe',25),(12,'argent',34),(13,'cuivre',33),(14,'menthe',21),(15,'lavande',14),(16,'jaune-or',5),(17,'aubergine',16),(18,'bleu-vert',19),(19,'turquoise',20),(20,'brun-clair',26),(21,'noir_taupe',73),(22,'rose-clair',9),(23,'vert-clair',23),(24,'rouge-clair',11),(25,'rouge-fonce',12),(26,'sauge_blanc',55),(27,'orange-clair',7),(28,'vert-tilleul',22),(29,'brun-noisette',27),(30,'lavande_lilas',92),(31,'lilas_lavande',88),(32,'noir_jaune-or',76),(33,'beige_jaune-or',111),(34,'jaune_jaune-or',94),(35,'jaune-or_jaune',101),(36,'lilas_jaune-or',89),(37,'lilas_turquoise',84),(38,'rose_rose-clair',65),(39,'rose-clair_rose',68),(40,'brun-clair_beige',108),(41,'menthe_turquoise',83),(42,'rouge-clair_rose',57),(43,'turquoise_menthe',44),(44,'lavande_aubergine',93),(45,'lilas_rouge-clair',86),(46,'menthe_vert-clair',82),(47,'orange-clair_lilas',71),(48,'bleu-pale_turquoise',109),(49,'jaune-or_taupe_brun',96),(50,'lavande_lilas_blanc',91),(51,'lavande_lilas_taupe',90),(52,'menthe_vert-tilleul',80),(53,'noir_jaune-or_beige',75),(54,'taupe_lilas_lavande',53),(55,'vert-tilleul_menthe',37),(56,'jaune-or_jaune_beige',100),(57,'lilas_lavande_violet',87),(58,'brun-clair_beige_noir',107),(59,'jaune-or_orange-clair',97),(60,'noir_menthe_turquoise',74),(61,'rose_rose-clair_blanc',64),(62,'rose_rose-clair_taupe',63),(63,'taupe_rose-clair_rose',50),(64,'turquoise_menthe_noir',43),(65,'rose-clair_rouge-clair',66),(66,'rouge-clair_rose-clair',56),(67,'taupe_menthe_turquoise',52),(68,'taupe_turquoise_menthe',49),(69,'turquoise_lilas_violet',45),(70,'brun-clair_vert-tilleul',104),(71,'jaune-or_violet_lavande',95),(72,'noir_blanc_orange-clair',78),(73,'orange-clair_blanc_noir',72),(74,'vert-clair_vert-tilleul',38),(75,'vert-tilleul_vert-clair',35),(76,'jaune-or_lilas_aubergine',98),(77,'rouge-clair_lilas_violet',62),(78,'rouge-clair_orange-clair',60),(79,'vert-tilleul_menthe_brun',36),(80,'rouge-clair_noir_jaune-or',61),(81,'turquoise_brun-clair_brun',47),(82,'turquoise_lilas_aubergine',46),(83,'rose-clair_rose_brun-clair',67),(84,'turquoise_vert-tilleul',41),(85,'jaune-or_beige_orange-clair',102),(86,'jaune-or_jaune_orange-clair',99),(87,'taupe_jaune-or_orange-clair',54),(88,'brun-clair_noir_orange-clair',106),(89,'brun-clair_vert-tilleul_noir',103),(90,'turquoise_vert-tilleul_taupe',40),(91,'taupe_vert-tilleul_vert-clair',48),(92,'blanc_orange-clair_rouge-clair',110),(93,'menthe_vert-clair_vert-tilleul',81),(94,'rouge-clair_orange-clair_blanc',59),(95,'taupe_orange-clair_rouge-clair',51),(96,'vert-clair_menthe_vert-tilleul',39),(97,'lilas_rouge-clair_rose_rose-clair',85),(98,'turquoise_vert-clair_vert-tilleul',42),(99,'orange-clair_rose-clair_rouge-clair',70),(100,'rose-clair_orange-clair_rouge-clair',69),(101,'rouge-clair_orange-clair_rose-clair',58),(102,'brun-clair_rouge-clair_rose_rose-clair',105),(103,'noir_blanc',79),(104,'noir_brun-clair',77),(105,'moutarde',6),(106,'gris',30),(107,'gris-clair',29),(108,'violet',15),(109,'rouge-clair_noir_jaune-or_taupe',112),(110,'noir_blanc_taupe',113);
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_detail`
--

DROP TABLE IF EXISTS `option_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `option_detail_name` varchar(45) NOT NULL,
  `img_code` varchar(45) NOT NULL,
  `option_id` int NOT NULL,
  `option_cost` int DEFAULT NULL,
  `color_id_to_add` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `option_detail_name_UNIQUE` (`option_detail_name`),
  UNIQUE KEY `img_code_UNIQUE` (`img_code`),
  KEY `option_id_idx` (`option_id`),
  KEY `color_id_idx` (`color_id_to_add`),
  CONSTRAINT `color_id` FOREIGN KEY (`color_id_to_add`) REFERENCES `color` (`id`),
  CONSTRAINT `option_id` FOREIGN KEY (`option_id`) REFERENCES `option_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_detail`
--

LOCK TABLES `option_detail` WRITE;
/*!40000 ALTER TABLE `option_detail` DISABLE KEYS */;
INSERT INTO `option_detail` VALUES (1,'sans Zoizo','_n',1,NULL,NULL),(2,'avec Zoizo','_z',1,NULL,NULL),(3,'format S','_s',2,NULL,NULL),(4,'format L','_l',2,1,NULL),(5,'bêen','_been',4,NULL,NULL),(6,'bêerangere','_beerangere',4,NULL,NULL),(7,'bêerenice','_beerenice',4,NULL,NULL),(8,'bêernadette','_beernadette',4,NULL,NULL),(9,'bêernadin','_beernadin',4,NULL,NULL),(10,'bêernard','_beernard',4,NULL,NULL),(11,'Tête vers le bas','_b',5,NULL,NULL),(12,'Tête vers le haut','_t',5,NULL,NULL),(13,'sans herbes','_e',3,NULL,1),(14,'avec herbes','_h',3,1,28),(15,'avec le cadre Dorothée','_c',6,1,NULL),(16,'sans le cadre','_d',6,NULL,NULL);
/*!40000 ALTER TABLE `option_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_group`
--

DROP TABLE IF EXISTS `option_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `option_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `option_name_UNIQUE` (`option_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_group`
--

LOCK TABLES `option_group` WRITE;
/*!40000 ALTER TABLE `option_group` DISABLE KEYS */;
INSERT INTO `option_group` VALUES (6,'Avec ou sans cadre :'),(3,'Avec ou sans l\'herbe :'),(1,'Avec ou sans l\'oiseau :'),(4,'Choix du personnage :'),(2,'Format :'),(5,'Tête vers le haut ou vers le bas :');
/*!40000 ALTER TABLE `option_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(8) NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `text_introduction` longtext NOT NULL,
  `text_size` varchar(300) NOT NULL,
  `mirror` tinyint(1) NOT NULL,
  `price` int NOT NULL,
  `first_image` varchar(16) DEFAULT NULL,
  `product_order` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `product_name_UNIQUE` (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('kac01','Sticker les Héliflores','Les Héliflores sont des fleurs volumineuses à hélices qui apporteront dynamisme et chaleur à votre intérieur.','(S) l.20 x h.54 cm & l.30 x h.80 cm / (L) l.56 x h.153 cm & l.86 x h.227 cm.',1,75,NULL,62),('kac02','Sticker les Artiflores','Les formes harmonieuses et éclatantes de ces plantes apporteront douceur et chaleur à votre intérieur.','(S) l.19 x h.65 cm & l.28 x h.80 cm (suivant la disposition illustrée) / (L) l.34 x h.116 cm & l.56 x h.157 cm.',1,45,NULL,63),('kac03','Sticker les Naturaflores','Apportez une touche de nature à votre intérieur grâce aux plantes champêtres les Naturaflores!','(S) l.56 x h.80 cm / (L) l.88 x h.165 cm  (suivant la disposition illustrée)',0,45,'kac03.png',64),('kbe01','Sticker saut en longueur','Avec des ressorts fixés aux sabots, Bêernadin obtiendra à coup sûr le record du saut en longueur le plus original!','l.56 x h.45 cm.',1,29,NULL,1),('kbe02','Sticker ballons','1, 2, 3 … 8 moutons! Bêernadin et sa bande descendent délicatement du ciel pour décorer la chambre de votre enfant avec douceur et légèreté!','4* l.12 x h.19 cm + 2* l.19 x h.30 cm + 2* l.22 x h.36 cm.',0,39,NULL,2),('kbe03','Sticker frise saute mouton','Louf le loup, se fond dans le troupeau de Bêernadin et sa bande le temps d\'une partie de jeu de saute mouton. Ce sticker est composé de 9 moutons et un loup pour créer une frise amusante.','l.12 x h.29.5 cm (personnage Bêernadin)',0,55,'kbe03.png',3),('kbe04','Sticker toise saut au cirque','Pour les amoureux du cirque, voici un sticker drôle et fonctionnel: le toise mouton saut au cirque qui illustre le saut au tremplin de Bêerénice et sa bande de moutons.','l.82 x h.141 cm (suivant la disposition illustrée). Plage de mesures : 6/14 dm.',0,55,'kbe04.png',4),('kbe05','Sticker mouton','Collé dans sa chambre, ce mouton deviendra le fidèle compagnon de votre enfant et l\'accompagnera dans ses rêves les plus doux. Choisissez votre figurine mouton parmi les 6 personnages de la collection Bêernadin et sa bande!','+/- l.54 x h.135 cm.',0,45,NULL,5),('kbe06','Sticker skateboard','Avec son skateboard, Bêernadin le mouton, accompagné de son fidèle ami bêen, épatera les jeunes cascadeurs! Un sticker humoristique à positionner sur un meuble, une plinthe…','l.55 x h.32 cm.',1,25,NULL,6),('kbe07','Sticker saut de la stratosphère','Le saut de la stratosphère est le décor idéal pour faire rêver votre enfant avant même qu\'il ne s\'endorme!','l.159 x h.152 cm (suivant la disposition illustrée)',1,49,NULL,7),('kbe08','Sticker loup dans la bergerie','Votre enfant s\'endormira paisiblement dans cet univers de douceur avec Bêernadin, sa bande et leur fidèle ami: Louf, un loup aussi doux qu\'un agneau! Composition modulable de stickers, à disposer au gré de vos envies, sur 1 ou plusieurs murs…','l.255 x h.130 cm (suivant la disposition illustrée)',1,129,'kbe08.png',8),('kbe09','Sticker saut à la perche','Le saut à la perche! Un saut athlétique, une façon très originale de jouer au jeu de saute-mouton!','l.55 x h.53 cm.',1,19,NULL,9),('kco01','Sticker Far west','A la recherche des bandits sur les pistes arides du Far west. Créez un décor complet sur son thème préféré! Sticker XXL modulable! Disposez les différents éléments au gré de vos envies…','longueur 4,3 mètres (suivant la disposition illustrée)',1,279,'kco01.png',37),('kco03','Sticker Luk le justicier','Luk, le cheval justicier qui fait régnier l\'ordre!','l.27 x h.172 cm.',0,55,NULL,38),('kco04','Sticker affiche Wanted','Le portrait du bandit le plus recherché du Far west! Ce sticker est personnalisable: le texte « dead or alive » peut être remplacé par le prénom de votre petit cowboy!','l.57 x h.91 cm.',0,49,NULL,39),('kco06','Sticker tête de cheval','Le sticker cowboy tête de cheval est composé de 36 motifs à coller comme une bande de papier peint ou à découper et disposer comme bon vous semble!','l.54 x h.237 cm (suivant la disposition illustrée) / 1 motif = l.14 x h.16.8 cm.',0,89,'kco06.png',40),('kco07','Sticker motifs cowboy','Des stickers pour agrémenter la chambre de votre petir cowbow.','6 motifs : fer à cheval : l.7,5 x h.8,5 cm ; tête de cheval : l. 8,5 x h. 10 cm ; chapeau de cowboy l. 8,5 x h. 4,5 cm ; lézard : l. 8,5 cm x h. 5,5 cm ; cactus : l. 6 cm x h. 12,5 cm et étoile de sheriff : l. 7,5 cm x h. 8,5 cm.',0,9,'kco07.png',41),('kfa02','Sticker tortue','Le sticker tortue est extrait du sticker le lièvre et la tortue,inspiré de la célèbre fable de Jean de La Fontaine.','l.54 x h.36 cm.',0,35,NULL,42),('kfa04','Sticker le lièvre et la tortue','Rien ne sert de courir, il faut partir à point! Jean de La Fontaine','l.230 x h.140 cm : / Sticker lièvre : l.44 x h.140 cm, Sticker tortue : l.54 x h.36 cm.',1,129,'kfa04.png',43),('kfa08','Sticker le corbeau et le renard','Maître Corbeau, sur un arbre perché, Tenait en son bec un fromage...  Jean de La Fontaine','l.185 x h.230 cm',1,259,'kfa08.png',44),('kfi01','Sticker le Château de Dorothée','Entrez dans l\'univers gothique de Dorothée… Un cadre dragon et un château hanté défendu par Charline et sa bande de chauves-souris, créeront une ambiance de petite fille pas tout à fait comme les autres!','l.186 / h.232 cm (suivant la disposition proposée).',1,169,'kfi01.png',26),('kfi02','Sticker Cadre Dorothée','Le portrait de Dorothée, la dragone!','l.56 / h.70 cm',0,65,NULL,27),('kfi03','Sticker Charline et sa bande','Une bande de chauves-souris plutôt gentilles!','l.54 / h.89 cm',0,19,NULL,28),('kfi05','Sticker les Colliflores','Entourées de jolis papillons, ces plantes décoreront la chambre de votre petite princesse avec douceur et poésie...','l.54 x h.133 cm',0,49,NULL,29),('kfi06','Sticker les Courbiflores','Pour réaliser une vraie décoration de petite princesse, Saut de Mouton propose une plante aux lignes arabesques qui peut se poser dans n\'importe quel angle d\'un mur.','l.98 x h.95 cm',1,69,NULL,30),('kfi07','Sticker Doug','Doug, le bouledogue français attachant, drôle... on ne peut pas lui résister!','l.33 x h.56cm',0,39,NULL,31),('kfi08','Sticker le Jardin des Zoizo','Un petit coin de paradis, de gaieté et de douceur dans lequel les plus beaux oiseaux vivent en harmonie...','l.313 / h.250 cm (suivant la disposition proposée). Détail : Sticker l\'Arbre à Zoizo : l.143 / h.250 cm, Sticker les Flam\'s : l.43 / h.142 cm et l.25 / h.101 cm',1,279,'kfi08.png',32),('kfi09','Sticker l\'Arbre des Zoizo','Un grand arbre coloré sur lequel vient se poser les plus beaux oiseaux.','l.143 / h.250 cm',1,129,NULL,33),('kfi10','Sticker les Flam\'s','Le plus joli couple de flamants roses du jardin des oiseaux...','l.43 / h.142 cm et l.25 / h.101 cm',1,69,NULL,34),('kfi13','Sticker le Prince Charmant','Faites-lui un tendre baiser et la magie opérera!','(S) l.28 x h.40 cm / (L) l.40 x h.56 cm',0,49,'kfi13.png',35),('kfi14','Sticker les Jaxx','Les Jaxx, ces petites créatures venues d\'ailleurs, s\'amusent à escalader les plantes pour jouer avec les papillons. Poésie et tendresse sont au rendez-vous!','l.54 x h.164 cm',0,49,NULL,36),('kgl01','Sticker le Glish à votre service','Le Glisk barman se tient à votre entière disposition!','(S) l.30 x h.40 cm / (L) l.82 x h.108 cm',1,49,NULL,49),('kgl02','Sticker hula-hoop','Avec le Glish hula hoop, apportez humour et fantaisie à votre espace!','(S) l.36 x h.56 cm / (L) l.100 x h.154 cm',0,49,NULL,50),('kgl03','Sticker athlète','Le Glish athlète porte vos étagères! Sticker humoristique et fonctionnel.','(S) l.20 x h.51 cm / (L) l.56 x h.141 cm',0,35,NULL,51),('kgl05','Sticker l’accueil du Glish','Placé dans votre entrée, le Glish vous accueille en vous souhaitant la bienvenue!','(S) l.20 x h.49 cm / (L) l.55 x h.134 cm',0,49,'kgl05.png',52),('kid01','Sticker les Géoflores','Inspiré des tournesols, ce sticker végétal aux lignes géométriques dynamisera votre intérieur.','l.42 x h.190 cm',0,59,'kid01.png',73),('kid02','Sticker les Popflores','Avec leurs formes courbées, les popflores créeront une ambiance totalement psychédélique.','l.103 x h.191 cm (suivant la disposition illustrée)',1,45,NULL,65),('kid03','Sticker les Zigflores','Rigueur et folie s\'allient pour créer ces fleurs originales: les Zigflores. Leur style pop dynamiseront votre intérieur.','l.50 x h.170 cm',0,55,NULL,66),('kle01','Sticker Léonard et compagnie','Petite ballade au cœur de la forêt. Partez à la rencontre d\'animaux aussi tendres et malicieux les uns que les autres… Tuk l\'écureuil, Léonard l\'élan et son fidèle ami Zoizo ainsi que les Zib vous souhaitent la bienvenue!','Longueur minimum du sticker forêt : 3,35 mètres',1,279,'kle01.png',10),('kle02','Sticker Tuk le farceur','Tuk est un écureuil curieux et farceur … à l\'affut de tout ce qu\'il se passe!','l.77 x h.190 cm',1,99,NULL,11),('kle03','Sticker l\'élan Léonard','Au choix: la figurine de l\'élan Léonard seul ou accompagné de son meilleur ami: Zoizo!','l.57 x h.153 cm avec l’oiseau (1) / sans l’oiseau (2)  l.57 x h.147 cm',0,45,NULL,12),('kle04','Sticker les Zib','Perchés sur les branches des arbres, les Zib sont les amoureux de la fôret!','l.76 x h.90 cm',1,59,NULL,13),('kle05','Sticker les Champiflores','Les Champiflores sont des plantes stylisées au sommet rebondi, rappelant la forme des champignons de la forêt. Des petites créatures: les « Jaxx » aiment escalader ces plantes pour s\'amuser avec les papillons.','l.45 x h.150 cm',0,49,NULL,14),('kle06','Sticker cadre Léonard','Un sticker drôle et tendre à la fois! Au choix: le portrait de l\'élan Léonard, posant seul ou avec Zoizo, son meilleur ami.','l.57 x h.63 cm',0,55,NULL,15),('kle07','Sticker cache-cache de Léonard','Léonard l\'élan farceur, se cache derrière les branches des arbres. Agrémentez votre sticker de patères et celui-ci devient fonctionnel!','l.56 x h.169 cm',1,65,'kle07.png',16),('kle08','Sticker couple hiboux','Perchés sur son lit, les Zib apporteront gaieté et douceur dans la chambre de votre enfant.','l.20 x h.21 cm & l.19.5 x h.27 cm',0,15,NULL,17),('kle09','Sticker grenouille','Un sticker grenouille pour décorer la chambre des petits passionnés de batraciens!','(S) l.21 x h.25 cm / (L) l.42 x h.50 cm',0,25,NULL,18),('kmo01','Sticker étoiles','Dynamisez votre intérieur!','24 motifs étoiles l.4 x h.4 cm',0,9,'kmo01.png',53),('kmo02','Sticker coeurs','Créez une décoration intérieure dynamique et romantique!','40 motifs coeurs l.3 x h.2,5 cm',0,9,'kmo02.png',54),('kmo03','Sticker pois','Créez une décoration intérieure dynamique et économique!','54 motifs pois Ø 2 cm',0,9,'kmo03.png',55),('kmo04','Sticker gouttes','Dynamisez votre intérieur!','25 motifs gouttes : l.2,7 x h.4,5 cm',0,9,'kmo04.png',56),('kmo05','Sticker nuages','Créer une ambiance douce et apaisante dans la chambre de votre enfant!','15 motifs : 5 * l.6,5 x h.5 cm + 6 * l.5 x h.3,5 cm + 2 * l.9 x h.4 cm + 2 * l.7 x h.4 cm',0,9,'kmo05.png',57),('kmo06','Sticker paquerettes','Apportez une touche à la fois géometrique et naturelle à vos murs!','6 motifs fleurs 3 * Ø 8,5 cm + 3 * Ø 7 cm',0,9,'kmo06.png',58),('kmo07','Sticker fleurs de lys','Donnez un autre style à votre intérieur!','10 motifs fleurs de lys l.5,5 x h.7 cm',0,9,'kmo07.png',59),('kpr01','Sticker Coquelicots','Laissez-vous charmer par ces jolies fleurs des champs!','l.76 x h.165 cm',1,65,'kpr01.png',67),('kpr02','Sticker tête de lit arabesques','Amour et romantisme sont mis à l\'honneur avec ce sticker tête de lit arabesques.','2 * l.76 x h.127 cm (suivant la disposition illustrée)',0,65,'kpr02.png',68),('ksa01','Sticker Gizèle, la curieuse','Gizèle, la girafe curieuse, n\'hésite pas à tendre son long cou pour voir et entendre tout ce qu\'il se passe…','l.113 x h.184 cm',1,89,'ksa01.png',19),('ksa02-g','Sticker cadre Gizèle','Le portrait de la plus jolie de la savane: Gizèle, la girafe!','l.49 x h.62 cm',0,55,NULL,20),('ksa02-l','Sticker cadre Lionel','Le portrait du roi des animaux: Lionel, le lion!','l.53 x h.67 cm',0,55,NULL,21),('ksa02-z','Sticker cadre zèbre','Le portrait de l\'animal le plus rayé de la savane: Ray, le zèbre!','l.49 x h.62 cm',0,55,NULL,22),('ksa03-g','Sticker toise Gizèle','Un sticker mural décoratif et fonctionnel: la toise Gizèle la girafe.','l.46 x h.181 cm / Plage de mesures  10 - 120 cm',0,75,NULL,23),('ksa05','Sticker la grande Gizèle','Laissez-vous surprendre par le sticker XXL la grande Gizèle!','l.123 x h.243 cm (la grande Gizèle) / l.350 x h.50 cm (frise herbe)',1,139,'ksa05.png',24),('ksa06','Sticker le long cou de Gizèle','Gizèle, la girafe fait la curieuse et tend son long cou. Vers le haut ou vers le bas, à vous de choisir!','tête vers le haut : l.51 x h.103 cm / tête vers le bas : l.54 x h.89 cm',1,55,NULL,25),('ktf01','Sticker les Bulbiflores','Les Bulbiflores: les végétaux aux lignes épurées qui donnent la touche finale à votre intérieur contemporain!','(S) l.56 x h.80 cm / (L)  l.56 x h.175 cm',0,45,'ktf01.png',69),('ktf02','Sticker les Longiflores','Inspirés des pissenlits, les Longiflores aux lignes contemporaines et épurées décoreront votre intérieur avec finesse et élégance.','(S) l.56 x h.80 cm / (L) l.56 x h.165 cm',0,45,NULL,70),('ktf03','Sticker les Tigiflores','Ces plantes stylisées décoreront votre intérieur avec légèreté. Attention aux courants d\'air!','l.53 x h.160 cm',1,45,NULL,71),('ktf04','Sticker les Foliflores','Avec les Foliflores, apportez une touche de folie et de fantaisie à votre décoration intérieure!','(S) l.56 x h.80 cm / (L) l.52 x h.175 cm',0,45,NULL,72),('kze01','Sticker la parade des Zelle','Amour, romantisme et élégance… les Zelle paradent, vos murs racontent de belles histoires!','l.72 x h.102 cm & l.51 x h.84 cm',1,55,'kze01.png',60),('kze03','Sticker modulable les Zelle','Ils s\'aiment ou se détestent! Le sticker oiseaux modulables « les Zelle » offre de nombreuses possibilités de mises en scène… Les différentes parties de ces oiseaux sont séparées pour les assembler comme bon vous semble!','l.45 x h.112 cm & l.50 x h.93 cm (suivant la disposition illustrée)',0,35,'kze03.png',61),('kzi01','Sticker modulable - le Zif','Le Zif est un oiseau modulable qui s\'adapte à votre environnement. Il escalade les marches des escaliers ou passe d\'un meuble à l\'autre en toute discrétion. Positionnez ce sticker oiseau comme bon vous semble: le corps et les pattes sont séparés.','l.38 x h.70 cm (suivant la disposition illustrée)',1,15,'kzi01.png',45),('kzi02','Sticker les Zif','Donnez à vos espaces une dimension poétique! Ce sticker illustre le 1er rendez-vous de 2 Zif, le début d\'une belle et longue histoire d\'amour!','l.55 x h.42 cm',1,25,NULL,46),('kzi03','Sticker les petits Zif','Les petits Zif s\'adaptent et donnent vie à vos espaces!','Hauteur des petits Zif : environ 20 cm',1,19,'kzi03.png',47),('kzi04','Sticker fils électriques - les Zif','Créez une déco effervescente avec les Zif!','l.160 x h.155 cm + l’encombrement des oiseaux',1,39,'kzi04.png',48);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `product_id` varchar(8) NOT NULL,
  `category_id` int NOT NULL,
  `main_category` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`product_id`,`category_id`),
  KEY `fk_product_has_category_category1_idx` (`category_id`),
  KEY `fk_product_has_category_product1_idx` (`product_id`),
  CONSTRAINT `fk_product_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_product_has_category_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES ('kac01',10,1),('kac02',10,1),('kac03',10,1),('kbe01',2,1),('kbe02',2,1),('kbe03',2,1),('kbe04',2,1),('kbe05',2,1),('kbe05',14,0),('kbe06',2,1),('kbe07',2,1),('kbe08',2,1),('kbe09',2,1),('kco01',6,1),('kco01',15,0),('kco03',6,1),('kco03',14,0),('kco04',6,1),('kco04',14,0),('kco06',6,1),('kco07',6,1),('kco07',11,0),('kfa02',7,1),('kfa04',7,1),('kfa08',7,1),('kfa08',15,0),('kfi01',5,1),('kfi02',5,1),('kfi02',14,0),('kfi03',5,1),('kfi05',5,1),('kfi05',10,0),('kfi06',5,1),('kfi06',10,0),('kfi07',5,1),('kfi07',14,0),('kfi08',5,1),('kfi08',13,0),('kfi08',15,0),('kfi09',5,1),('kfi09',13,0),('kfi09',15,0),('kfi10',5,1),('kfi10',13,0),('kfi13',5,1),('kfi14',5,1),('kfi14',10,0),('kgl01',9,1),('kgl02',9,1),('kgl03',9,1),('kgl05',9,1),('kid01',10,1),('kid02',10,1),('kid03',10,1),('kle01',3,1),('kle01',15,0),('kle02',3,1),('kle02',14,0),('kle03',3,1),('kle03',14,0),('kle04',3,1),('kle04',13,0),('kle05',3,1),('kle05',10,0),('kle06',3,1),('kle06',14,0),('kle06',15,0),('kle07',3,1),('kle07',14,0),('kle08',3,1),('kle08',13,0),('kle08',14,0),('kle09',3,1),('kmo01',11,1),('kmo02',11,1),('kmo03',11,1),('kmo04',11,1),('kmo05',11,1),('kmo06',11,1),('kmo07',11,1),('kpr01',10,1),('kpr02',10,1),('ksa01',4,1),('ksa02-g',4,1),('ksa02-g',14,0),('ksa02-l',4,1),('ksa02-l',14,0),('ksa02-z',4,1),('ksa02-z',14,0),('ksa03-g',4,1),('ksa05',4,1),('ksa05',15,0),('ksa06',4,1),('ksa06',14,0),('ktf01',10,1),('ktf02',10,1),('ktf03',10,1),('ktf04',10,1),('kze01',12,1),('kze01',13,0),('kze03',12,1),('kze03',13,0),('kzi01',8,1),('kzi01',13,0),('kzi02',8,1),('kzi02',13,0),('kzi03',8,1),('kzi03',13,0),('kzi04',8,1),('kzi04',13,0);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_color` (
  `product_id` varchar(8) NOT NULL,
  `color_id` int NOT NULL,
  `first_group` tinyint(1) DEFAULT NULL,
  `second_group` tinyint(1) DEFAULT NULL,
  `fixed_color` tinyint(1) DEFAULT NULL,
  KEY `product_id_idx` (`product_id`),
  KEY `color_idx` (`color_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `color` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES ('kfi13',1,1,NULL,NULL),('kgl01',1,1,NULL,NULL),('kgl02',1,1,NULL,NULL),('kgl05',1,1,NULL,NULL),('kco04',1,1,NULL,NULL),('kfi06',2,NULL,NULL,1),('kpr01',2,1,NULL,NULL),('kfi13',2,1,NULL,NULL),('kze03',2,1,NULL,NULL),('kze01',2,1,NULL,NULL),('ktf04',2,1,NULL,NULL),('ktf03',2,1,NULL,NULL),('ktf02',2,1,NULL,NULL),('ktf01',2,1,NULL,NULL),('kpr02',2,1,NULL,NULL),('kmo07',2,1,NULL,NULL),('kmo06',2,1,NULL,NULL),('kmo05',2,1,NULL,NULL),('kmo04',2,1,NULL,NULL),('kmo03',2,1,NULL,NULL),('kmo02',2,1,NULL,NULL),('kmo01',2,1,NULL,NULL),('kid02',2,1,NULL,NULL),('kco07',2,1,NULL,NULL),('kac03',2,1,NULL,NULL),('kle08',3,1,NULL,NULL),('kle03',3,1,NULL,NULL),('kpr01',4,NULL,NULL,1),('kfi13',4,NULL,NULL,1),('kbe03',4,NULL,NULL,1),('kco04',4,NULL,NULL,1),('kbe04',4,NULL,NULL,1),('kgl01',4,NULL,NULL,1),('kgl02',4,NULL,NULL,1),('kgl05',4,NULL,NULL,1),('kbe01',4,NULL,NULL,1),('kbe05',4,NULL,NULL,1),('kle04',4,NULL,NULL,1),('kfi07',4,NULL,NULL,1),('kle06',4,NULL,NULL,1),('kle02',4,NULL,NULL,1),('kle07',4,NULL,NULL,1),('kbe02',4,NULL,NULL,1),('kzi04',4,1,NULL,NULL),('kzi03',4,1,NULL,NULL),('kzi02',4,1,NULL,NULL),('kzi01',4,1,NULL,NULL),('kze03',4,1,NULL,NULL),('kze01',4,1,NULL,NULL),('ktf04',4,1,NULL,NULL),('ktf03',4,1,NULL,NULL),('ktf02',4,1,NULL,NULL),('ktf01',4,1,NULL,NULL),('kpr02',4,1,NULL,NULL),('kmo07',4,1,NULL,NULL),('kmo06',4,1,NULL,NULL),('kmo05',4,1,NULL,NULL),('kmo04',4,1,NULL,NULL),('kmo03',4,1,NULL,NULL),('kmo02',4,1,NULL,NULL),('kmo01',4,1,NULL,NULL),('kle09',4,1,NULL,NULL),('kle08',4,1,NULL,NULL),('kle03',4,1,NULL,NULL),('kid02',4,1,NULL,NULL),('kgl03',4,1,NULL,NULL),('kfi03',4,1,NULL,NULL),('kco07',4,1,NULL,NULL),('kbe09',4,1,NULL,NULL),('kbe06',4,1,NULL,NULL),('kac03',4,1,NULL,NULL),('kac02',4,1,NULL,NULL),('ksa02-z',4,1,NULL,NULL),('kpr01',5,1,NULL,NULL),('kbe03',5,1,NULL,NULL),('kbe04',5,1,NULL,NULL),('kgl01',5,1,NULL,NULL),('kgl02',5,1,NULL,NULL),('kgl05',5,1,NULL,NULL),('kbe01',5,1,NULL,NULL),('kbe05',5,1,NULL,NULL),('kle04',5,1,NULL,NULL),('kzi04',5,1,NULL,NULL),('kzi03',5,1,NULL,NULL),('kzi02',5,1,NULL,NULL),('kzi01',5,1,NULL,NULL),('kze03',5,1,NULL,NULL),('kze01',5,1,NULL,NULL),('ktf04',5,1,NULL,NULL),('ktf03',5,1,NULL,NULL),('ktf02',5,1,NULL,NULL),('ktf01',5,1,NULL,NULL),('kpr02',5,1,NULL,NULL),('kmo07',5,1,NULL,NULL),('kmo06',5,1,NULL,NULL),('kmo05',5,1,NULL,NULL),('kmo04',5,1,NULL,NULL),('kmo03',5,1,NULL,NULL),('kmo02',5,1,NULL,NULL),('kmo01',5,1,NULL,NULL),('kle09',5,1,NULL,NULL),('kle08',5,1,NULL,NULL),('kle03',5,1,NULL,NULL),('kid02',5,1,NULL,NULL),('kgl03',5,1,NULL,NULL),('kfi03',5,1,NULL,NULL),('kco07',5,1,NULL,NULL),('kbe09',5,1,NULL,NULL),('kbe06',5,1,NULL,NULL),('kac03',5,1,NULL,NULL),('kac02',5,1,NULL,NULL),('kac01',5,1,NULL,NULL),('kzi04',7,1,NULL,NULL),('kzi03',7,1,NULL,NULL),('kzi02',7,1,NULL,NULL),('kzi01',7,1,NULL,NULL),('kze03',7,1,NULL,NULL),('kze01',7,1,NULL,NULL),('ktf04',7,1,NULL,NULL),('ktf03',7,1,NULL,NULL),('ktf02',7,1,NULL,NULL),('ktf01',7,1,NULL,NULL),('kpr02',7,1,NULL,NULL),('kmo07',7,1,NULL,NULL),('kmo06',7,1,NULL,NULL),('kmo05',7,1,NULL,NULL),('kmo04',7,1,NULL,NULL),('kmo03',7,1,NULL,NULL),('kmo02',7,1,NULL,NULL),('kmo01',7,1,NULL,NULL),('kid02',7,1,NULL,NULL),('kco07',7,1,NULL,NULL),('kac03',7,1,NULL,NULL),('kac02',7,1,NULL,NULL),('kfi13',8,1,NULL,NULL),('kfi03',8,1,NULL,NULL),('kpr01',9,1,NULL,NULL),('kfi13',9,1,NULL,NULL),('ksa01',9,1,NULL,NULL),('ksa03-g',9,1,NULL,NULL),('ksa05',9,1,NULL,NULL),('ksa06',9,1,NULL,NULL),('kfa02',9,1,NULL,NULL),('kzi04',9,1,NULL,NULL),('kzi03',9,1,NULL,NULL),('kzi02',9,1,NULL,NULL),('kzi01',9,1,NULL,NULL),('kze03',9,1,NULL,NULL),('kze01',9,1,NULL,NULL),('ktf04',9,1,NULL,NULL),('ktf03',9,1,NULL,NULL),('ktf02',9,1,NULL,NULL),('ktf01',9,1,NULL,NULL),('kpr02',9,1,NULL,NULL),('kmo07',9,1,NULL,NULL),('kmo06',9,1,NULL,NULL),('kmo05',9,1,NULL,NULL),('kmo04',9,1,NULL,NULL),('kmo03',9,1,NULL,NULL),('kmo02',9,1,NULL,NULL),('kmo01',9,1,NULL,NULL),('kid02',9,1,NULL,NULL),('kco07',9,1,NULL,NULL),('kac03',9,1,NULL,NULL),('kac02',9,1,NULL,NULL),('kac01',9,1,NULL,NULL),('ksa02-g',9,1,1,NULL),('ksa02-l',9,1,1,NULL),('ksa02-z',9,1,1,NULL),('kco04',10,1,NULL,NULL),('kco03',10,1,NULL,NULL),('kco01',10,1,NULL,NULL),('kze03',10,1,NULL,NULL),('kze01',10,1,NULL,NULL),('kpr02',10,1,NULL,NULL),('kmo07',10,1,NULL,NULL),('kmo06',10,1,NULL,NULL),('kmo05',10,1,NULL,NULL),('kmo04',10,1,NULL,NULL),('kmo03',10,1,NULL,NULL),('kmo02',10,1,NULL,NULL),('kmo01',10,1,NULL,NULL),('kle09',10,1,NULL,NULL),('kco07',10,1,NULL,NULL),('kbe03',11,1,NULL,NULL),('kbe04',11,1,NULL,NULL),('kco04',11,1,NULL,NULL),('kco03',11,1,NULL,NULL),('kfa02',11,1,NULL,NULL),('kfa04',11,1,NULL,NULL),('kfi07',11,1,NULL,NULL),('kle06',11,1,NULL,NULL),('kzi03',11,1,NULL,NULL),('kzi02',11,1,NULL,NULL),('kzi01',11,1,NULL,NULL),('kze03',11,1,NULL,NULL),('kze01',11,1,NULL,NULL),('kpr02',11,1,NULL,NULL),('kmo07',11,1,NULL,NULL),('kmo06',11,1,NULL,NULL),('kmo05',11,1,NULL,NULL),('kmo04',11,1,NULL,NULL),('kmo03',11,1,NULL,NULL),('kmo02',11,1,NULL,NULL),('kmo01',11,1,NULL,NULL),('kco07',11,1,NULL,NULL),('kpr01',12,1,NULL,NULL),('kfi13',12,1,NULL,NULL),('kze03',12,1,NULL,NULL),('kze01',12,1,NULL,NULL),('ktf04',12,1,NULL,NULL),('ktf03',12,1,NULL,NULL),('ktf02',12,1,NULL,NULL),('ktf01',12,1,NULL,NULL),('kpr02',12,1,NULL,NULL),('kmo07',12,1,NULL,NULL),('kmo06',12,1,NULL,NULL),('kmo05',12,1,NULL,NULL),('kmo04',12,1,NULL,NULL),('kmo03',12,1,NULL,NULL),('kmo02',12,1,NULL,NULL),('kmo01',12,1,NULL,NULL),('kid02',12,1,NULL,NULL),('kco07',12,1,NULL,NULL),('kac03',12,1,NULL,NULL),('kpr01',13,1,NULL,NULL),('kfi13',13,1,NULL,NULL),('kze03',13,1,NULL,NULL),('kze01',13,1,NULL,NULL),('ktf04',13,1,NULL,NULL),('ktf03',13,1,NULL,NULL),('ktf02',13,1,NULL,NULL),('ktf01',13,1,NULL,NULL),('kpr02',13,1,NULL,NULL),('kmo07',13,1,NULL,NULL),('kmo06',13,1,NULL,NULL),('kmo05',13,1,NULL,NULL),('kmo04',13,1,NULL,NULL),('kmo03',13,1,NULL,NULL),('kmo02',13,1,NULL,NULL),('kmo01',13,1,NULL,NULL),('kid02',13,1,NULL,NULL),('kco07',13,1,NULL,NULL),('kac03',13,1,NULL,NULL),('kpr01',14,1,NULL,NULL),('kfi13',14,1,NULL,NULL),('kco04',14,1,NULL,NULL),('ksa01',14,1,NULL,NULL),('ksa03-g',14,1,NULL,NULL),('ksa05',14,1,NULL,NULL),('ksa06',14,1,NULL,NULL),('kco03',14,1,NULL,NULL),('kfa02',14,1,NULL,NULL),('kfa04',14,1,NULL,NULL),('kzi04',14,1,NULL,NULL),('kzi03',14,1,NULL,NULL),('kzi02',14,1,NULL,NULL),('kzi01',14,1,NULL,NULL),('kze03',14,1,NULL,NULL),('kze01',14,1,NULL,NULL),('ktf04',14,1,NULL,NULL),('ktf03',14,1,NULL,NULL),('ktf02',14,1,NULL,NULL),('ktf01',14,1,NULL,NULL),('kpr02',14,1,NULL,NULL),('kmo07',14,1,NULL,NULL),('kmo06',14,1,NULL,NULL),('kmo05',14,1,NULL,NULL),('kmo04',14,1,NULL,NULL),('kmo03',14,1,NULL,NULL),('kmo02',14,1,NULL,NULL),('kmo01',14,1,NULL,NULL),('kle09',14,1,NULL,NULL),('kid02',14,1,NULL,NULL),('kco07',14,1,NULL,NULL),('kac03',14,1,NULL,NULL),('kac02',14,1,NULL,NULL),('kac01',14,1,NULL,NULL),('ksa02-g',14,1,1,NULL),('ksa02-l',14,1,1,NULL),('ksa02-z',14,1,1,NULL),('kpr01',15,1,NULL,NULL),('kbe03',15,1,NULL,NULL),('kbe04',15,1,NULL,NULL),('kgl01',15,1,NULL,NULL),('kgl02',15,1,NULL,NULL),('kgl05',15,1,NULL,NULL),('kbe01',15,1,NULL,NULL),('kbe05',15,1,NULL,NULL),('kle04',15,1,NULL,NULL),('kzi04',15,1,NULL,NULL),('kzi03',15,1,NULL,NULL),('kzi02',15,1,NULL,NULL),('kzi01',15,1,NULL,NULL),('kze03',15,1,NULL,NULL),('kze01',15,1,NULL,NULL),('ktf04',15,1,NULL,NULL),('ktf03',15,1,NULL,NULL),('ktf02',15,1,NULL,NULL),('ktf01',15,1,NULL,NULL),('kpr02',15,1,NULL,NULL),('kmo07',15,1,NULL,NULL),('kmo06',15,1,NULL,NULL),('kmo05',15,1,NULL,NULL),('kmo04',15,1,NULL,NULL),('kmo03',15,1,NULL,NULL),('kmo02',15,1,NULL,NULL),('kmo01',15,1,NULL,NULL),('kle09',15,1,NULL,NULL),('kle08',15,1,NULL,NULL),('kle03',15,1,NULL,NULL),('kid02',15,1,NULL,NULL),('kgl03',15,1,NULL,NULL),('kfi03',15,1,NULL,NULL),('kco07',15,1,NULL,NULL),('kbe09',15,1,NULL,NULL),('kbe06',15,1,NULL,NULL),('kac03',15,1,NULL,NULL),('kac02',15,1,NULL,NULL),('kac01',15,1,NULL,NULL),('kpr01',16,1,NULL,NULL),('kbe03',16,1,NULL,NULL),('kbe04',16,1,NULL,NULL),('kgl01',16,1,NULL,NULL),('kgl02',16,1,NULL,NULL),('kgl05',16,1,NULL,NULL),('kbe01',16,1,NULL,NULL),('kbe05',16,1,NULL,NULL),('kle04',16,1,NULL,NULL),('ksa01',16,1,NULL,NULL),('ksa03-g',16,1,NULL,NULL),('ksa05',16,1,NULL,NULL),('ksa06',16,1,NULL,NULL),('kfa02',16,1,NULL,NULL),('kfa04',16,1,NULL,NULL),('kco01',16,1,NULL,NULL),('kzi04',16,1,NULL,NULL),('kzi03',16,1,NULL,NULL),('kzi02',16,1,NULL,NULL),('kzi01',16,1,NULL,NULL),('kze03',16,1,NULL,NULL),('kze01',16,1,NULL,NULL),('ktf04',16,1,NULL,NULL),('ktf03',16,1,NULL,NULL),('ktf02',16,1,NULL,NULL),('ktf01',16,1,NULL,NULL),('kpr02',16,1,NULL,NULL),('kmo07',16,1,NULL,NULL),('kmo06',16,1,NULL,NULL),('kmo05',16,1,NULL,NULL),('kmo04',16,1,NULL,NULL),('kmo03',16,1,NULL,NULL),('kmo02',16,1,NULL,NULL),('kmo01',16,1,NULL,NULL),('kle09',16,1,NULL,NULL),('kle08',16,1,NULL,NULL),('kle03',16,1,NULL,NULL),('kid02',16,1,NULL,NULL),('kgl03',16,1,NULL,NULL),('kco07',16,1,NULL,NULL),('kbe09',16,1,NULL,NULL),('kbe06',16,1,NULL,NULL),('kac03',16,1,NULL,NULL),('kac02',16,1,NULL,NULL),('kac01',16,1,NULL,NULL),('ksa02-g',16,1,1,NULL),('ksa02-l',16,1,1,NULL),('ksa02-z',16,1,1,NULL),('kzi03',17,1,NULL,NULL),('kzi02',17,1,NULL,NULL),('kzi01',17,1,NULL,NULL),('kze03',17,1,NULL,NULL),('kze01',17,1,NULL,NULL),('kpr02',17,1,NULL,NULL),('kpr01',18,1,NULL,NULL),('kbe03',19,1,NULL,NULL),('kbe04',19,1,NULL,NULL),('kgl01',19,1,NULL,NULL),('kgl02',19,1,NULL,NULL),('kgl05',19,1,NULL,NULL),('kbe01',19,1,NULL,NULL),('kbe05',19,1,NULL,NULL),('kco04',19,1,NULL,NULL),('kle04',19,1,NULL,NULL),('ksa01',19,1,NULL,NULL),('ksa03-g',19,1,NULL,NULL),('ksa05',19,1,NULL,NULL),('ksa06',19,1,NULL,NULL),('kco03',19,1,NULL,NULL),('kfa02',19,1,NULL,NULL),('kfa04',19,1,NULL,NULL),('kco01',19,1,NULL,NULL),('kzi04',19,1,NULL,NULL),('kzi03',19,1,NULL,NULL),('kzi02',19,1,NULL,NULL),('kzi01',19,1,NULL,NULL),('kze03',19,1,NULL,NULL),('kze01',19,1,NULL,NULL),('ktf04',19,1,NULL,NULL),('ktf03',19,1,NULL,NULL),('ktf02',19,1,NULL,NULL),('ktf01',19,1,NULL,NULL),('kpr02',19,1,NULL,NULL),('kmo07',19,1,NULL,NULL),('kmo06',19,1,NULL,NULL),('kmo05',19,1,NULL,NULL),('kmo04',19,1,NULL,NULL),('kmo03',19,1,NULL,NULL),('kmo02',19,1,NULL,NULL),('kmo01',19,1,NULL,NULL),('kle09',19,1,NULL,NULL),('kle08',19,1,NULL,NULL),('kle03',19,1,NULL,NULL),('kid02',19,1,NULL,NULL),('kgl03',19,1,NULL,NULL),('kfi03',19,1,NULL,NULL),('kco07',19,1,NULL,NULL),('kbe09',19,1,NULL,NULL),('kbe06',19,1,NULL,NULL),('kac03',19,1,NULL,NULL),('kac02',19,1,NULL,NULL),('kac01',19,1,NULL,NULL),('ksa02-g',19,1,NULL,NULL),('ksa02-l',19,1,NULL,NULL),('ksa02-z',19,1,NULL,NULL),('kpr01',20,1,NULL,NULL),('kbe03',20,1,NULL,NULL),('kco04',20,1,NULL,NULL),('kco03',20,1,NULL,NULL),('kco01',20,1,NULL,NULL),('kzi04',20,1,NULL,NULL),('kzi03',20,1,NULL,NULL),('kzi02',20,1,NULL,NULL),('kzi01',20,1,NULL,NULL),('kze03',20,1,NULL,NULL),('kze01',20,1,NULL,NULL),('ktf04',20,1,NULL,NULL),('ktf03',20,1,NULL,NULL),('ktf02',20,1,NULL,NULL),('ktf01',20,1,NULL,NULL),('kpr02',20,1,NULL,NULL),('kmo07',20,1,NULL,NULL),('kmo06',20,1,NULL,NULL),('kmo05',20,1,NULL,NULL),('kmo04',20,1,NULL,NULL),('kmo03',20,1,NULL,NULL),('kmo02',20,1,NULL,NULL),('kmo01',20,1,NULL,NULL),('kid02',20,1,NULL,NULL),('kco07',20,1,NULL,NULL),('kac03',20,1,NULL,NULL),('kac02',20,1,NULL,NULL),('ksa02-g',20,NULL,1,NULL),('ksa02-l',20,NULL,1,NULL),('ksa02-z',20,NULL,1,NULL),('kle01',21,NULL,NULL,1),('kpr01',22,1,NULL,NULL),('kfi13',22,1,NULL,NULL),('ksa01',22,1,NULL,NULL),('ksa03-g',22,1,NULL,NULL),('ksa05',22,1,NULL,NULL),('ksa06',22,1,NULL,NULL),('kzi04',22,1,NULL,NULL),('kzi03',22,1,NULL,NULL),('kzi02',22,1,NULL,NULL),('kzi01',22,1,NULL,NULL),('kmo07',22,1,NULL,NULL),('kmo06',22,1,NULL,NULL),('kmo05',22,1,NULL,NULL),('kmo04',22,1,NULL,NULL),('kmo03',22,1,NULL,NULL),('kmo02',22,1,NULL,NULL),('kmo01',22,1,NULL,NULL),('kco07',22,1,NULL,NULL),('ksa02-g',22,1,1,NULL),('ksa02-l',22,1,1,NULL),('ksa02-z',22,NULL,1,NULL),('kpr01',23,1,NULL,NULL),('kzi04',23,1,NULL,NULL),('kzi03',23,1,NULL,NULL),('kzi02',23,1,NULL,NULL),('kzi01',23,1,NULL,NULL),('kze03',23,1,NULL,NULL),('kze01',23,1,NULL,NULL),('ktf04',23,1,NULL,NULL),('ktf03',23,1,NULL,NULL),('ktf02',23,1,NULL,NULL),('ktf01',23,1,NULL,NULL),('kpr02',23,1,NULL,NULL),('kmo07',23,1,NULL,NULL),('kmo06',23,1,NULL,NULL),('kmo05',23,1,NULL,NULL),('kmo04',23,1,NULL,NULL),('kmo03',23,1,NULL,NULL),('kmo02',23,1,NULL,NULL),('kmo01',23,1,NULL,NULL),('kle09',23,1,NULL,NULL),('kid02',23,1,NULL,NULL),('kco07',23,1,NULL,NULL),('kac03',23,1,NULL,NULL),('kac02',23,1,NULL,NULL),('kac01',23,1,NULL,NULL),('kpr01',24,1,NULL,NULL),('kbe03',24,1,NULL,NULL),('kbe04',24,1,NULL,NULL),('kgl01',24,1,NULL,NULL),('kgl02',24,1,NULL,NULL),('kgl05',24,1,NULL,NULL),('kbe01',24,1,NULL,NULL),('kbe05',24,1,NULL,NULL),('kfi10',24,1,NULL,NULL),('kle04',24,1,NULL,NULL),('kzi04',24,1,NULL,NULL),('kzi03',24,1,NULL,NULL),('kzi02',24,1,NULL,NULL),('kzi01',24,1,NULL,NULL),('kze03',24,1,NULL,NULL),('kze01',24,1,NULL,NULL),('ktf04',24,1,NULL,NULL),('ktf03',24,1,NULL,NULL),('ktf02',24,1,NULL,NULL),('ktf01',24,1,NULL,NULL),('kpr02',24,1,NULL,NULL),('kmo07',24,1,NULL,NULL),('kmo06',24,1,NULL,NULL),('kmo05',24,1,NULL,NULL),('kmo04',24,1,NULL,NULL),('kmo03',24,1,NULL,NULL),('kmo02',24,1,NULL,NULL),('kmo01',24,1,NULL,NULL),('kle09',24,1,NULL,NULL),('kle03',24,1,NULL,NULL),('kid02',24,1,NULL,NULL),('kgl03',24,1,NULL,NULL),('kfi03',24,1,NULL,NULL),('kco07',24,1,NULL,NULL),('kbe09',24,1,NULL,NULL),('kbe06',24,1,NULL,NULL),('kac03',24,1,NULL,NULL),('kac02',24,1,NULL,NULL),('kac01',24,1,NULL,NULL),('kac03',25,1,NULL,NULL),('kac01',25,1,NULL,NULL),('kco06',26,1,NULL,NULL),('kpr01',27,1,NULL,NULL),('kbe03',27,1,NULL,NULL),('kbe04',27,1,NULL,NULL),('kgl01',27,1,NULL,NULL),('kgl02',27,1,NULL,NULL),('kgl05',27,1,NULL,NULL),('kbe01',27,1,NULL,NULL),('kbe05',27,1,NULL,NULL),('kle04',27,1,NULL,NULL),('ksa01',27,1,NULL,NULL),('ksa03-g',27,1,NULL,NULL),('ksa05',27,1,NULL,NULL),('ksa06',27,1,NULL,NULL),('kzi04',27,1,NULL,NULL),('kzi03',27,1,NULL,NULL),('kzi02',27,1,NULL,NULL),('kzi01',27,1,NULL,NULL),('kze03',27,1,NULL,NULL),('kze01',27,1,NULL,NULL),('ktf04',27,1,NULL,NULL),('ktf03',27,1,NULL,NULL),('ktf02',27,1,NULL,NULL),('ktf01',27,1,NULL,NULL),('kpr02',27,1,NULL,NULL),('kmo07',27,1,NULL,NULL),('kmo06',27,1,NULL,NULL),('kmo05',27,1,NULL,NULL),('kmo04',27,1,NULL,NULL),('kmo03',27,1,NULL,NULL),('kmo02',27,1,NULL,NULL),('kmo01',27,1,NULL,NULL),('kle09',27,1,NULL,NULL),('kle08',27,1,NULL,NULL),('kle03',27,1,NULL,NULL),('kid02',27,1,NULL,NULL),('kgl03',27,1,NULL,NULL),('kfi03',27,1,NULL,NULL),('kco07',27,1,NULL,NULL),('kbe09',27,1,NULL,NULL),('kbe06',27,1,NULL,NULL),('kac03',27,1,NULL,NULL),('kac02',27,1,NULL,NULL),('kac01',27,1,NULL,NULL),('ksa02-g',27,1,NULL,NULL),('ksa02-l',27,1,NULL,NULL),('ksa02-z',27,1,NULL,NULL),('kpr01',28,1,NULL,NULL),('kbe03',28,1,NULL,NULL),('kfi13',28,1,NULL,NULL),('kbe04',28,1,NULL,NULL),('kgl01',28,1,NULL,NULL),('kgl02',28,1,NULL,NULL),('kgl05',28,1,NULL,NULL),('kbe01',28,1,NULL,NULL),('kbe05',28,1,NULL,NULL),('kco04',28,1,NULL,NULL),('kle04',28,1,NULL,NULL),('ksa01',28,1,NULL,NULL),('ksa03-g',28,1,NULL,NULL),('ksa05',28,1,NULL,NULL),('ksa06',28,1,NULL,NULL),('kco03',28,1,NULL,NULL),('kfa02',28,1,NULL,NULL),('kfa04',28,1,NULL,NULL),('kzi04',28,1,NULL,NULL),('kzi03',28,1,NULL,NULL),('kzi02',28,1,NULL,NULL),('kzi01',28,1,NULL,NULL),('kze03',28,1,NULL,NULL),('kze01',28,1,NULL,NULL),('ktf04',28,1,NULL,NULL),('ktf03',28,1,NULL,NULL),('ktf02',28,1,NULL,NULL),('ktf01',28,1,NULL,NULL),('kpr02',28,1,NULL,NULL),('kmo07',28,1,NULL,NULL),('kmo06',28,1,NULL,NULL),('kmo05',28,1,NULL,NULL),('kmo04',28,1,NULL,NULL),('kmo03',28,1,NULL,NULL),('kmo02',28,1,NULL,NULL),('kmo01',28,1,NULL,NULL),('kle09',28,1,NULL,NULL),('kle08',28,1,NULL,NULL),('kle03',28,1,NULL,NULL),('kid02',28,1,NULL,NULL),('kgl03',28,1,NULL,NULL),('kfi03',28,1,NULL,NULL),('kco07',28,1,NULL,NULL),('kbe09',28,1,NULL,NULL),('kbe06',28,1,NULL,NULL),('kac03',28,1,NULL,NULL),('kac02',28,1,NULL,NULL),('kac01',28,1,NULL,NULL),('ksa02-g',28,1,NULL,NULL),('ksa02-l',28,1,NULL,NULL),('ksa02-z',28,1,NULL,NULL),('kfa02',29,1,NULL,NULL),('kfa04',29,1,NULL,NULL),('kzi04',29,1,NULL,NULL),('kzi03',29,1,NULL,NULL),('kzi02',29,1,NULL,NULL),('kzi01',29,1,NULL,NULL),('kze03',29,1,NULL,NULL),('kze01',29,1,NULL,NULL),('ktf04',29,1,NULL,NULL),('ktf03',29,1,NULL,NULL),('ktf02',29,1,NULL,NULL),('ktf01',29,1,NULL,NULL),('kpr02',29,1,NULL,NULL),('kmo07',29,1,NULL,NULL),('kmo06',29,1,NULL,NULL),('kmo05',29,1,NULL,NULL),('kmo04',29,1,NULL,NULL),('kmo03',29,1,NULL,NULL),('kmo02',29,1,NULL,NULL),('kmo01',29,1,NULL,NULL),('kid02',29,1,NULL,NULL),('kco07',29,1,NULL,NULL),('kac03',29,1,NULL,NULL),('kac02',29,1,NULL,NULL),('kfi10',30,1,NULL,NULL),('kbe08',30,1,NULL,NULL),('kfi02',30,1,NULL,NULL),('kfa08',31,1,NULL,NULL),('kle01',31,1,NULL,NULL),('kfi06',31,1,NULL,NULL),('kbe02',31,1,NULL,NULL),('kco03',32,NULL,NULL,1),('kco06',33,1,NULL,NULL),('kfi10',34,1,NULL,NULL),('kle02',34,1,NULL,NULL),('kle07',34,1,NULL,NULL),('kle01',34,1,NULL,NULL),('kbe02',34,1,NULL,NULL),('kfi07',35,1,NULL,NULL),('kle06',35,1,NULL,NULL),('kfi06',35,1,NULL,NULL),('kle07',36,1,NULL,NULL),('kle02',37,1,NULL,NULL),('kfi10',38,1,NULL,NULL),('kfi07',38,1,NULL,NULL),('kbe08',38,1,NULL,NULL),('kfi09',38,1,NULL,NULL),('kfi02',38,1,NULL,NULL),('kfa08',39,1,NULL,NULL),('kle02',39,1,NULL,NULL),('kle01',39,1,NULL,NULL),('kfi06',39,1,NULL,NULL),('kbe02',39,1,NULL,NULL),('kco06',40,1,NULL,NULL),('kfa08',41,1,NULL,NULL),('kle02',41,1,NULL,NULL),('kle01',41,1,NULL,NULL),('kbe02',41,1,NULL,NULL),('kfi10',42,1,NULL,NULL),('kfi10',43,1,NULL,NULL),('kfi07',43,1,NULL,NULL),('kfi09',43,1,NULL,NULL),('kfi07',44,1,NULL,NULL),('kle02',45,1,NULL,NULL),('kfi05',45,1,NULL,NULL),('kfi06',46,1,NULL,NULL),('kfi05',46,1,NULL,NULL),('kle06',47,1,NULL,NULL),('kle07',48,1,NULL,NULL),('kbe07',49,1,NULL,NULL),('kco06',52,1,NULL,NULL),('kco01',53,NULL,NULL,1),('kle06',55,1,NULL,NULL),('kfi05',55,1,NULL,NULL),('kfi14',57,1,NULL,NULL),('kbe07',58,1,NULL,NULL),('kfa08',59,1,NULL,NULL),('kfi09',59,1,NULL,NULL),('kfi05',59,1,NULL,NULL),('kid03',60,1,NULL,NULL),('kbe07',64,1,NULL,NULL),('kfi05',65,1,NULL,NULL),('kle06',66,1,NULL,NULL),('kle07',66,1,NULL,NULL),('kfi08',68,1,NULL,NULL),('kle05',69,1,NULL,NULL),('kle07',70,1,NULL,NULL),('kid03',71,1,NULL,NULL),('kfi10',72,NULL,NULL,1),('kfi08',73,NULL,NULL,1),('kfi10',74,1,NULL,NULL),('kfa08',75,1,NULL,NULL),('kfi07',75,1,NULL,NULL),('kle02',75,1,NULL,NULL),('kle01',75,1,NULL,NULL),('kfi09',75,1,NULL,NULL),('kbe02',75,1,NULL,NULL),('kid01',76,1,NULL,NULL),('kle05',77,1,NULL,NULL),('kfa08',78,1,NULL,NULL),('kfi02',78,1,NULL,NULL),('kfi14',79,1,NULL,NULL),('kle05',81,1,NULL,NULL),('kid01',82,1,NULL,NULL),('kid03',83,1,NULL,NULL),('kle06',84,1,NULL,NULL),('kle07',84,1,NULL,NULL),('kbe08',84,1,NULL,NULL),('kle05',85,1,NULL,NULL),('kfi14',86,1,NULL,NULL),('kfi09',88,NULL,NULL,1),('kfa04',89,NULL,NULL,1),('kle05',89,1,NULL,NULL),('kid01',92,1,NULL,NULL),('kid01',93,1,NULL,NULL),('kle05',96,1,NULL,NULL),('kfi08',97,1,NULL,NULL),('kid03',98,1,NULL,NULL),('kid03',99,1,NULL,NULL),('kid01',100,1,NULL,NULL),('kfi14',100,1,NULL,NULL),('kle05',101,1,NULL,NULL),('kfi08',102,1,NULL,NULL),('kfi02',103,NULL,NULL,1),('kfa02',104,NULL,NULL,1),('ksa01',104,NULL,NULL,1),('ksa03-g',104,NULL,NULL,1),('ksa05',104,NULL,NULL,1),('ksa06',104,NULL,NULL,1),('ksa02-g',104,NULL,NULL,1),('ksa02-l',104,NULL,NULL,1),('ksa02-z',104,NULL,NULL,1),('kfa08',109,NULL,NULL,1),('kbe08',110,NULL,NULL,1),('kfi01',103,NULL,NULL,1),('kfi01',30,1,NULL,NULL),('kfi01',38,1,NULL,NULL),('kfi01',78,1,NULL,NULL);
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_option`
--

DROP TABLE IF EXISTS `product_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_option` (
  `product_id` varchar(8) NOT NULL,
  `option_id` int NOT NULL,
  `option_price` int DEFAULT NULL,
  PRIMARY KEY (`product_id`,`option_id`),
  KEY `fk_product_has_option_product1_idx` (`product_id`),
  KEY `fk_option_has_product_option1_idx` (`option_id`),
  CONSTRAINT `option_id_fk` FOREIGN KEY (`option_id`) REFERENCES `option_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_option`
--

LOCK TABLES `product_option` WRITE;
/*!40000 ALTER TABLE `product_option` DISABLE KEYS */;
INSERT INTO `product_option` VALUES ('kac01',2,35),('kac02',2,29),('kac03',2,29),('kbe05',4,NULL),('kfi13',2,29),('kgl01',2,19),('kgl02',2,19),('kgl03',2,19),('kgl05',2,19),('kle03',1,45),('kle06',1,NULL),('kle09',2,15),('ksa05',3,40),('ksa06',5,55),('ktf01',2,29),('ktf02',2,29),('ktf04',2,29);
/*!40000 ALTER TABLE `product_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technical_file`
--

DROP TABLE IF EXISTS `technical_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technical_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(8) NOT NULL,
  `file_name` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technical_file`
--

LOCK TABLES `technical_file` WRITE;
/*!40000 ALTER TABLE `technical_file` DISABLE KEYS */;
INSERT INTO `technical_file` VALUES (1,'kac01','kac01_ft.png'),(2,'kac02','kac02_ft.png'),(3,'kac03','kac03_ft.png'),(4,'kbe01','kbe01_ft.png'),(5,'kbe02','kbe02_ft.png'),(6,'kbe03','kbe03_ft.png'),(7,'kbe04','kbe04_ft.png'),(8,'kbe05','kbe05_ft.png'),(9,'kbe05','kbe05_ft_2.png'),(10,'kbe06','kbe06_ft.png'),(11,'kbe07','kbe07_ft.png'),(12,'kbe08','kbe08_ft.png'),(13,'kbe09','kbe09_ft.png'),(14,'kco01','kco01_ft.png'),(15,'kco01','kco01_ft_2.png'),(16,'kco03','kco03_ft.png'),(17,'kco04','kco04_ft.png'),(18,'kco06','kco06_ft.png'),(19,'kco07','kco07_ft.png'),(20,'kfa02','kfa02_ft.png'),(21,'kfa04','kfa04_ft.png'),(22,'kfa08','kfa08_ft.png'),(23,'kfi01','kfi01_ft.png'),(24,'kfi02','kfi02_ft.png'),(25,'kfi03','kfi03_ft.png'),(26,'kfi05','kfi05_ft.png'),(27,'kfi06','kfi06_ft.png'),(28,'kfi06','kfi06_ft_2.png'),(29,'kfi07','kfi07_ft.png'),(30,'kfi08','kfi08_ft.png'),(31,'kfi08','kfi08_ft_2.png'),(32,'kfi09','kfi09_ft.png'),(33,'kfi10','kfi10_ft.png'),(34,'kfi13','kfi13_ft.png'),(35,'kfi14','kfi14_ft.png'),(36,'kgl01','kgl01_ft.png'),(37,'kgl02','kgl02_ft.png'),(38,'kgl03','kgl03_ft.png'),(39,'kgl05','kgl05_ft.png'),(40,'kid01','kid01_ft.png'),(41,'kid02','kid02_ft.png'),(42,'kid03','kid03_ft.png'),(43,'kle01','kle01_ft.png'),(44,'kle01','kle01_ft_2.png'),(45,'kle02','kle02_ft.png'),(46,'kle03','kle03_ft.png'),(47,'kle04','kle04_ft.png'),(48,'kle05','kle05_ft.png'),(49,'kle06','kle06_ft.png'),(50,'kle07','kle07_ft.png'),(51,'kle08','kle08_ft.png'),(52,'kle09','kle09_ft.png'),(53,'kmo01','kmo01_ft.png'),(54,'kmo02','kmo02_ft.png'),(55,'kmo03','kmo03_ft.png'),(56,'kmo04','kmo04_ft.png'),(57,'kmo05','kmo05_ft.png'),(58,'kmo06','kmo06_ft.png'),(59,'kmo07','kmo07_ft.png'),(60,'kpr01','kpr01_ft.png'),(61,'kpr02','kpr02_ft.png'),(62,'ksa01','ksa01_ft.png'),(63,'ksa02-g','ksa02-g_ft.png'),(64,'ksa02-l','ksa02-l_ft.png'),(65,'ksa02-z','ksa02-z_ft.png'),(66,'ksa03-g','ksa03-g_ft.png'),(67,'ksa05','ksa05_ft.png'),(68,'ksa06','ksa06_ft.png'),(69,'ktf01','ktf01_ft.png'),(70,'ktf02','ktf02_ft.png'),(71,'ktf03','ktf03_ft.png'),(72,'ktf04','ktf04_ft.png'),(73,'kze01','kze01_ft.png'),(74,'kze03','kze03_ft.png'),(75,'kze03','kze03_ft_2.png'),(76,'kzi01','kzi01_ft.png'),(77,'kzi02','kzi02_ft.png'),(78,'kzi03','kzi03_ft.png'),(79,'kzi04','kzi04_ft.png');
/*!40000 ALTER TABLE `technical_file` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 16:49:49
