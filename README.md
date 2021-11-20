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


## API
```
user

/api/v1/user

  get
    param 获取用户列表
      空
    
    param 获取单个用户
      {
        id: number
      }

  post
    param 创建一个用户
    {
      name: 'string',
      age: 'integer'
    }

/api/v1/question

  get 
    param 获取所有问题
      空
      
    param 获取特定问题
    {
      id: number
    }

  post 
    param 新建一个问题
    {
      type: ['multi', 'single'],
      title: 'string',
      answer: 'string',
      op1:'string',
      op2: 'string',
      op3: 'string',
      op4: 'string',
    }

/api/v1/question/commit
  post
    param 多选
    {
      answer: [1,2]
    }
      
    param 单选
    {
      answer: [1]
    }

/api/v1/record



```


