# README

Express4+MongoDBを使用して、DBに保存した内容を表示する機能を
勉強のために作成したパッケージです。DBはLocal使用となります。

以下、サイトを参考にさせて頂きました。
- 基礎から学ぶNode.js(http://gihyo.jp/dev/serial/01/nodejs)

## 動作環境

- express (4.x.x)
- ejs
- mongoose

別途、以下の導入が必要となります。

- MongoDB (on OSX)

## 起動方法

1) MongoDBをインストール&起動します。

2) "npm install"を実行する。

3) appを起動してwebサーバーを立ち上げます。

4) Chromeブラウザから"http://localhost:3000"にアクセスします。

5) "New Entry"をクリックしてtext入力ボックスに任意の文字を入力して
   "Post"ボタンをクリックします。
   Mainページに戻り、入力した内容がListとして追加表示されている。
   (DBに入力内容を保存し、その内容を表示しています。)

