create database capstonefoodorder;
use capstonefoodorder;
show tables;


insert into restuarant(restuarant_id,restuarant_location,restuarant_name) values (1,'bangalore','Adigas');
insert into restuarant(restuarant_id,restuarant_location,restuarant_name) values (2,'Hyderabad','Rotighar');
insert into restuarant(restuarant_id,restuarant_location,restuarant_name) values (3,'Chennai','PunjabiRasoi');
insert into restuarant(restuarant_id,restuarant_location,restuarant_name) values (4,'Bangalore','Udipi');

desc menu;


insert into menu values (1,'Veg','Biryani',250,"https://b.zmtcdn.com/data/dish_photos/12b/ca31090e8ceb7873d4fac2fde9bfc12b.jpg",1,1);
insert into menu values (2,'Veg','Gobi Manchuraian',150,"https://b.zmtcdn.com/data/dish_photos/033/de250104bf1893a22c6ca5faed489033.jpg",1,1);
insert into menu values (3,'Veg','Paneer',160,"https://b.zmtcdn.com/data/dish_photos/836/4c4385fb9a52b29a4ae5b39241b51836.jpg",1,1);
insert into menu values (4,'Veg','Pizza',80,"https://b.zmtcdn.com/data/pictures/chains/4/90384/ba50a5176f9b3abf84a4b734543474a2_o2_featured_v2.jpg?output-format=webp",1,1);
insert into menu values (5,'Non-Veg','Egg-Biryani',180,"https://b.zmtcdn.com/data/pictures/2/90332/e72c7d1ca263c17d7a5fe75516655760_o2_featured_v2.jpg",1,1);
insert into menu values (6,'Non-Veg','Chicken Biryani',250,"https://b.zmtcdn.com/data/dish_photos/d18/fbcdd75063b9b63b1929a6247ff72d18.jpg?output-format=webp",1,1);
insert into menu values (7,'Non-Veg','Chicken Lollipop',100,"https://b.zmtcdn.com/data/dish_photos/469/5d993eda1acfaa123b7176e87d909469.jpg?output-format=webp",1,1);
insert into menu values (8,'Non-Veg','Chicken 65',220,"https://b.zmtcdn.com/data/dish_photos/5c8/7480eb69b628e5ee7b2b7b244c4445c8.jpg",1,1);






insert into menu values (9,'Veg','Roti',20,"https://b.zmtcdn.com/data/pictures/1/56791/0cdce63fc9633eb489b4568c6a7e1917_o2_featured_v2.jpg",1,2);
insert into menu values (10,'Veg','Dal Makahni',150,"https://b.zmtcdn.com/data/dish_photos/1f4/4c841fc63596667ee9166ab67796c1f4.jpg",1,2);
insert into menu values (11,'Veg','Aloo Paratha',100,"https://b.zmtcdn.com/data/pictures/9/18601019/5a5edb2d888c88d873c49c994f6eb9b4_o2_featured_v2.jpg",1,2);
insert into menu values (12,'Veg','Butter-Naan',30,"https://b.zmtcdn.com/data/dish_photos/52d/b952d168d6b66395a14e37d72278452d.jpg?output-format=webp",1,2);
insert into menu values (13,'Non-Veg','Chicken Noodles',180,"https://b.zmtcdn.com/data/dish_photos/3ea/785546949ad667211bba16b39a01a3ea.jpg",1,2);
insert into menu values (14,'Non-Veg','Chicken Shawarma',100,"https://i.ytimg.com/vi/lx-ZAmC3j4M/maxresdefault.jpg",1,2);
insert into menu values (15,'Non-Veg','Chicken Biryani',200,"https://b.zmtcdn.com/data/dish_photos/b21/2259dd2066d816293650a09aa87f1b21.jpg?output-format=webp",1,2);
insert into menu values (16,'Non-Veg','Fish fry',100,"https://b.zmtcdn.com/data/pictures/3/19213193/df5568141ff5d5d4f54feec0f9bd7c42_o2_featured_v2.jpg",1,2);









 insert into menu values (17,'Veg','Dosa',50,"https://b.zmtcdn.com/data/pictures/5/19557715/4bcd527b7ea78f31092febd591cb8f9c_o2_featured_v2.jpg",1,3);
 insert into menu values (18,'Veg','Aloo Paratha',70,"https://b.zmtcdn.com/data/pictures/9/18601019/5a5edb2d888c88d873c49c994f6eb9b4_o2_featured_v2.jpg",1,3);
 insert into menu values (19,'Veg','Sandwich',50,"https://b.zmtcdn.com/data/dish_photos/e0f/6c45df4cdbacbd2cb22aa408892ade0f.jpg",1,3);
 insert into menu values (20,'Veg','Burger',70,"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",1,3);
 insert into menu values (21,'Non-Veg','Mutton Biryani',20,"https://b.zmtcdn.com/data/dish_photos/fcf/055ed546f9b13138363a690849414fcf.jpg?output-format=webp",1,3);
 insert into menu values (22,'Non-Veg','Chicken Roll',35,"https://b.zmtcdn.com/data/dish_photos/2d5/dadb2c2d74e057477fd473321730f2d5.jpg?output-format=webp",1,3);
 insert into menu values (23,'Veg','Fruit-Bowl',60,"https://b.zmtcdn.com/data/pictures/3/18625423/bfb8c2adbc21c389e61696c36414b107_o2_featured_v2.jpg",1,3);
 insert into menu values (24,'Veg','Milk-Shake',45,"https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Oreo-Milkshake-10.jpg",1,3);
 
 
 
 
 
 
 
 
 insert into menu values (25,'Veg','Poori',35,"https://b.zmtcdn.com/data/pictures/chains/4/90034/1641565584ff60da9b1c6a8d2ae0feee_o2_featured_v2.jpg",1,4);
 insert into menu values (26,'Veg','Dosa',30,"https://b.zmtcdn.com/data/pictures/5/18699685/5c4702df51b0506a3270104d64814116_o2_featured_v2.jpg?output-format=webp",1,4);
 insert into menu values (27,'Veg','Bonda',35,"https://b.zmtcdn.com/data/dish_photos/933/51e6a5e3bc90afba7f8cc7d46c339933.jpg?output-format=webp",1,4);
 insert into menu values (28,'Veg','Idly',20,"https://b.zmtcdn.com/data/dish_photos/566/b8481e9df890a4e8887ece19e3f09566.jpg?output-format=webp",1,4);
 insert into menu values (29,'Veg','Upma',25,"https://aartimadan.com/wp-content/uploads/2020/08/upma-recipe.jpg",1,4);
 insert into menu values (30,'Veg','Pesarattu',50,"https://b.zmtcdn.com/data/dish_photos/d19/12c2ba56d3278a38d558328b26475d19.jpg?output-format=webp",1,4);
 insert into menu values (31,'Veg','Uttapam',45,"https://b.zmtcdn.com/data/dish_photos/28c/985040ce26d34f2e371ec9608640028c.jpg?output-format=webp",1,4);
 insert into menu values (32,'Veg','Tea',20,"https://b.zmtcdn.com/data/pictures/5/18241275/2814816309e747089e254286c0dda5b8_o2_featured_v2.jpg?output-format=webp",1,4);

select * from menu;

select *from customer;

select *from order_details;

select *from cart;

select * from address;
