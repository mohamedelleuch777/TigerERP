CREATE TABLE`Client` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Frist Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Last Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Email` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Phone` INT(16) unsigned zerofill DEFAULT '0000000000' UNIQUE,
	`Address` VARCHAR(100) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`District` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Province` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Country` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PostalCode` INT(8) unsigned zerofill DEFAULT '00000000',
	`TaxNumber` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`Email`,`Phone`)
);

CREATE TABLE`Supplier` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Email` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Phone` INT(16) unsigned zerofill DEFAULT '0000000000' UNIQUE,
	`Address` VARCHAR(100) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`District` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Province` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Country` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PostalCode` INT(8) unsigned zerofill DEFAULT '00000000',
	`TaxNumber` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`Email`,`Phone`)
);

CREATE TABLE`Product` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Code` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Origin` VARCHAR(2000) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Designation` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PriceExclTaxes` DOUBLE,
	`VAT` DOUBLE,
	`Discount` DOUBLE,
	`BarCodeType` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`BarCode` INT(30) unsigned zerofill DEFAULT '00000000',
	`Image` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin,
	PRIMARY KEY (`Id`,`Code`)
);

CREATE TABLE`Stock` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Date` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`ProductId` INT(16) unsigned zerofill DEFAULT '0',
	`Quantity` INT(16) unsigned zerofill DEFAULT '0',
	`PriceExclTaxes` DOUBLE,
	`UserId` INT(16) unsigned zerofill DEFAULT '0',
	PRIMARY KEY (`Id`)
);

CREATE TABLE`User` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Username` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Password` VARCHAR(513) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`WorkerId` INT(16) unsigned zerofill DEFAULT '0' UNIQUE,
	`Role` VARCHAR(20) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`Username`,`WorkerId`)
);

CREATE TABLE`Worker` (
	`Id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Frist Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Last Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`NID` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Email` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin UNIQUE,
	`Phone` INT(16) unsigned zerofill DEFAULT '0000000000' UNIQUE,
	`Address` VARCHAR(100) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`District` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Province` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Country` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PostalCode` INT(8) unsigned zerofill DEFAULT '00000000',
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`NID`,`Email`,`Phone`)
);




