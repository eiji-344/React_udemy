# ユーザー管理アプリ

[こちら](https://www.udemy.com/course/react_stepup/?couponCode=ST6MT42324)の講座を参考に作成。


## バージョンの違い  

- React
  - "17.0.0" → "^18.2.0"
- react-router-dom
  - "5.2.0" → "^6.22.3"
- TypeScript
  - "4.1.3" →  "^4.9.5"

### 学習メモ  
バージョンの違いによる修正や環境構築を自分で行ったため、そのメモを下記に記す。

**環境構築**  

https://nodejs.org/en で nodeのインストール  

Reactアプリの作成  
`npx create-react-app react_udemy  --template typescript`  

Reactルータのインストール  
`npm install react-router-dom`  

chakra-uiのインストール  
`npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`  

**69 ルーティングの設定**  
@types/react-router-domはインストールせず、下記のコマンドでよい。  
`npm install react-router-dom`  

react-router-domの6系以降では、型定義がパッケージ自体に含まれているため、`@types/react-router-dom` を個別にインストールする必要はない。  

React18において、VFCとFCは同じ意味であり、VFCは非推奨なので、FCを使用する。  
React-router-domの6系において、`<Switch>`は使用できず、`<Routes>`を使用する。  


**72 ヘッダーの作成(ルーティング機能実装)**  
`<useHistory>`はReact-router-domの5系においての記法であり、6系からは、`<useNavigate>`を使用する。  

**75 ログイン機能の実装**  
Chakra uiのButtonの非活性は、disabledではなく、isDisabledを使用する。[参考](https://qiita.com/FumioNonaka/items/3f3be1fa53727d113562)

**81 ログインユーザー情報をContextに保持してみる**  

`<Routes>`コンポーネントの直接の子要素として`<Route>`または`<React.Fragment>`のみを使用する必要があるため、App.tsxに`<LoginUserProvider>`を記載。
