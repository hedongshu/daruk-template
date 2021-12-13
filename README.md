### node 需 v14 及以上

### 包含配置

1. daruk （底层 koa）
2. typescript （ts-node 编译，没有使用 babel）
3. typeorm （ORM 库）
4. mysql2

5. eslint
6. nodemon
7. tsconfig-paths

### 详细介绍

1. [daruk](https://github.com/darukjs/daruk)  
   轻量级 web 框架，基于 Koa2 + Typescript，使用 inversifyjs 的 IoC 容器管理依赖

2. typeorm  
   ORM 库，对应配置 ormconfig.json，这里使用的数据库是 sqlite3，驱动用的是 better-sqlite3

3. nodemon  
   热更新，对应配置 package.json(scripts), nodemon.json

4. tsconfig-paths  
   用于使 node 支持@的这种绝对路径别名，ts-node 本身是不识别 tsconfig.json 下的 paths 字段的，安装后配置了这两个字段

```
"baseUrl": "./",
"paths": {"@/*": ["src/*"]},
```

启动命令由 ts-node 变成 ts-node -r tsconfig-paths/register 这里启动命令配置在了 nodemon.json 中

5. 自定义的 d.ts 文件(本例的配置没有实际用途，可以删掉)  
   这里新建了与 src 同级的 typings 文件夹，子文件夹用缺失声明的包名命名，文件名命名为 index.d.ts，在其内部进行声明
   同时配置 tsconfig.json 下的 typeRoots

```
"typeRoots": ["./node_modules/@types", "./typings"]
```
