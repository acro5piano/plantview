![image](https://user-images.githubusercontent.com/10719495/93864228-87988080-fcff-11ea-91d9-147bccd4892f.png)

# Plantview

PlantUML viewer

# Features

- Hot Module Replacement (HMR) will help you to seamlessly write and preview UML
- Easy installation with Docker + NPM
- Super fast, dockerized local plantuml server
- Works even in Offline
- You can use your favorite editor

# Getting Started

First, install Plantview:

```
npm -g install plantview
```

Write your UML:

```plantuml
' my-diagram.uml

A -> B: Say Hello
```

Then, run the following command:

```
plantview my-diagram.uml
```

You will see your default browser launch. Every time you update the UML file, your browser will automatically reload it!
