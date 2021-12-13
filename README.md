### node需v14及以上

### 包含配置
1. daruk （底层koa）
2. typescript （ts-node编译，没有使用babel）
3. typeorm （ORM库）
4. sqlite3 （使用的better-sqlite3库）

4. eslint
5. nodemon
6. tsconfig-paths

### 详细介绍
1. [daruk](https://github.com/darukjs/daruk)  
轻量级 web 框架，基于Koa2 + Typescript，使用 inversifyjs 的 IoC 容器管理依赖

2. typeorm  
ORM库，对应配置 ormconfig.json，这里使用的数据库是sqlite3，驱动用的是better-sqlite3

3. nodemon  
热更新，对应配置 package.json(scripts), nodemon.json

4. tsconfig-paths  
用于使node支持@的这种绝对路径别名，ts-node本身是不识别tsconfig.json下的paths字段的，安装后配置了这两个字段
```
"baseUrl": "./",
"paths": {"@/*": ["src/*"]}, 
```
启动命令由 ts-node 变成 ts-node -r tsconfig-paths/register 这里启动命令配置在了nodemon.json中

5. 自定义的d.ts文件(本例的配置没有实际用途，可以删掉)  
这里新建了与src同级的typings文件夹，子文件夹用缺失声明的包名命名，文件名命名为index.d.ts，在其内部进行声明
同时配置tsconfig.json下的typeRoots
```
"typeRoots": ["./node_modules/@types", "./typings"]
```
