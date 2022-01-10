CREATE DATABASE blog_posts;



CREATE TABLE user_accounts(
    id INT(11) UNSIGNED AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_ VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE food_groups(
    id INT(11) UNSIGNED AUTO_INCREMENT,
    group_name VARCHAR(255) NOT NULL,
    user_id INT(11) UNSIGNED,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT food_groups_ibfk_1
    FOREIGN KEY (user_id) REFERENCES user_accounts (id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE recipes(
    id INT(11) UNSIGNED AUTO_INCREMENT,
    recipe_name VARCHAR(255) NOT NULL,
    user_id INT(11) UNSIGNED DEFAULT NULL,
    food_group_id INT(11) UNSIGNED DEFAULT NULL,
    ingridients mediumtext,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    KEY food_group_id (food_group_id),
    CONSTRAINT recipe_ibfk_2
    FOREIGN KEY (user_id) REFERENCES user_accounts (id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT recipe_ibfk_3
    FOREIGN KEY (food_group_id)
    REFERENCES food_groups (id)
    ON DELETE CASCADE ON UPDATE CASCADE
);
