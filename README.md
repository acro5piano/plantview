# Plantview

PlantUML viewer

# Features

- Hot Module Replacement (HMR) will help you to seamlessly write and preview UML
- Works even in Offline
- You can use your favorite editor
- Easy installation with Docker + NPM

# Getting Started

First, install Plantview:

```
npm -g install plantview
```

Write your UML:

```plantuml
' my-diagram.uml

@startuml
A -> B: Say Hello
@enduml
```

Then, run the following command:

```
plantview my-diagram.uml
```

You will see your default browser launch. Every time you update the UML file, your browser will automatically reload it.
