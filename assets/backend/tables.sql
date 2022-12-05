CREATE TABLE `Client` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Frist Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Last Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Email` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Phone ` INT(16) unsigned zerofill DEFAULT '0000000000',
	`Address` VARCHAR(100) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`District` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Province` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Country` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PostalCode` INT(8) unsigned zerofill DEFAULT '00000000',
	`TaxNumber` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`Email`,`Phone `)
);





CREATE TABLE `Supplier` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Email` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Phone ` INT(16) unsigned zerofill DEFAULT '0000000000',
	`Address` VARCHAR(100) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`District` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Province` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Country` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PostalCode` INT(8) unsigned zerofill DEFAULT '00000000',
	`TaxNumber` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	PRIMARY KEY (`Id`,`Email`,`Phone `)
);





CREATE TABLE `Product` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Code` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Origin` VARCHAR(2000) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Designation ` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`Description` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin DEFAULT NULL,
	`PriceExclTaxes` DOUBLE(20) unsigned zerofill DEFAULT '0.00',
	`VAT` DOUBLE(4) unsigned zerofill DEFAULT '18.00',
	`Discount` DOUBLE(20) unsigned zerofill DEFAULT '0.00',
	`BarCodeType ` VARCHAR(40) CHARACTER SET armscii8 COLLATE armscii8_bin,
	`BarCode` INT(30) unsigned zerofill DEFAULT '00000000',
	`Image ` VARCHAR(250) CHARACTER SET armscii8 COLLATE armscii8_bin,
	PRIMARY KEY (`Id`,`Code`)
);





