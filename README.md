# QAFE

## start

### 1、git clone 、 npm install 

### 2、数据库搭建（两种方式）

#### 一、使用仓库中的数据

- 1、本地docker启动数据库（建议）

```docker run --privileged=true -d -v ~/your workspace/qafe/mysql/data/:/var/lib/mysql -p 3307:3306 --name mysql_test2 -e MYSQL_ROOT_PASSWORD=123456 mysql```

#### 二、不使用仓库数据

- 1、本地启动docker

```docker run --privileged=true -d 【-v 不要映射到qafe/mysql 中即可/:/var/lib/mysql】 -p 3307:3306 --name mysql_test2 -e MYSQL_ROOT_PASSWORD=123456 mysql```

- 2、npx sequelize db:migrate

- 3、执行 sqls文件夹下的 change_log.sql

### 3、npm run start


